"""
Pre-Deployment Verification Suite for Hamburg 2026 Planner.
Automates end-to-end browser runtime validation using Microsoft Edge (Headless) + Chrome DevTools Protocol.
Checks:
1. HTTP 200 server response
2. Headless Edge loading of http://localhost:8000/
3. Zero uncaught JavaScript exceptions (Runtime.exceptionThrown)
4. Full DOM rendering past skeleton (hero, flights, itinerary, budget, hotels, transit)
5. Zero horizontal page overflow
"""

import sys, io, os, json, time, subprocess, urllib.request
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

import websocket

EDGE_PATH = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
PORT = 9222
USER_DATA = os.path.abspath(r".\scratch_edge_profile")
TARGET_URL = "http://localhost:8000/"

print("=" * 65)
print("🚀 RUNNING PRE-DEPLOYMENT RUNTIME BROWSER CHECK")
print("=" * 65)

# 1. Verify HTTP Server is running
print("\n[STEP 1] Verifying Local Server...")
try:
    resp = urllib.request.urlopen(TARGET_URL, timeout=5)
    if resp.status == 200:
        print(f"  ✓ Server responsive: HTTP {resp.status} ({len(resp.read())} bytes received)")
    else:
        print(f"  ✗ Unexpected server status: HTTP {resp.status}")
        sys.exit(1)
except Exception as e:
    print(f"  ✗ Failed to connect to {TARGET_URL}: {e}")
    sys.exit(1)

# 2. Launch Headless Edge with Remote Debugging
print("\n[STEP 2] Launching Headless Microsoft Edge (CDP Port 9222)...")
if not os.path.exists(EDGE_PATH):
    print(f"  ✗ Edge binary not found at {EDGE_PATH}")
    sys.exit(1)

edge_proc = subprocess.Popen([
    EDGE_PATH,
    "--headless=new",
    f"--remote-debugging-port={PORT}",
    "--remote-allow-origins=*",
    f"--user-data-dir={USER_DATA}",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    "about:blank"
], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

time.sleep(2)

console_messages = []
exceptions_thrown = []

try:
    # 3. Find target page in DevTools
    tabs_url = f"http://127.0.0.1:{PORT}/json"
    req = urllib.request.urlopen(tabs_url, timeout=5)
    tabs = json.loads(req.read().decode())
    
    # Filter for page tab
    page_tab = None
    for t in tabs:
        if t.get("type") == "page":
            page_tab = t
            break
    
    if not page_tab:
        print("  ✗ No browser page tab found via CDP!")
        sys.exit(1)

    ws_url = page_tab["webSocketDebuggerUrl"]
    print(f"  ✓ Connected to browser CDP WebSocket: {ws_url[:55]}...")

    # 4. Open WebSocket connection
    ws = websocket.create_connection(ws_url, timeout=10)

    # Enable Page and Runtime domains
    ws.send(json.dumps({"id": 1, "method": "Runtime.enable"}))
    ws.send(json.dumps({"id": 2, "method": "Page.enable"}))

    # Navigate to TARGET_URL
    print(f"\n[STEP 3] Navigating to {TARGET_URL}...")
    ws.send(json.dumps({"id": 3, "method": "Page.navigate", "params": {"url": TARGET_URL}}))

    # Listen for events over 5 seconds
    start_time = time.time()
    dom_loaded = False

    while time.time() - start_time < 5.0:
        try:
            ws.settimeout(0.5)
            msg = ws.recv()
            data = json.loads(msg)
            method = data.get("method", "")

            if method == "Page.domContentEventFired":
                dom_loaded = True
                print("  ✓ DOMContentLoaded event fired")

            elif method == "Runtime.consoleAPICalled":
                args = data.get("params", {}).get("args", [])
                text = " ".join([str(a.get("value", a.get("description", ""))) for a in args])
                log_type = data.get("params", {}).get("type", "log")
                console_messages.append((log_type, text))
                if log_type == "error":
                    print(f"  [Console Error]: {text}")

            elif method == "Runtime.exceptionThrown":
                details = data.get("params", {}).get("exceptionDetails", {})
                exc_text = details.get("text", "")
                exc_val = details.get("exception", {}).get("description", "")
                line = details.get("lineNumber", 0)
                col = details.get("columnNumber", 0)
                url = details.get("url", "")
                full_err = f"{exc_text} {exc_val} at {url}:{line}:{col}"
                exceptions_thrown.append(full_err)
                print(f"  ✗ [Runtime Exception]: {full_err}")

        except websocket.WebSocketTimeoutException:
            continue

    # 5. Evaluate DOM rendering completeness via JavaScript execution
    print("\n[STEP 4] Evaluating Rendered DOM Components...")
    eval_script = """
    (() => {
        return {
            heroTitle: document.querySelector('.hero-title') ? document.querySelector('.hero-title').innerText : null,
            overviewCards: document.querySelectorAll('.overview-card').length,
            flightCards: document.querySelectorAll('.flight-card').length,
            dayCards: document.querySelectorAll('.day-card').length,
            budgetCards: document.querySelectorAll('.budget-stat-card').length,
            foodCards: document.querySelectorAll('.food-card').length,
            hotelCards: document.querySelectorAll('.hotel-leg-card').length,
            packingItems: document.querySelectorAll('.packing-item').length,
            scrollWidth: document.documentElement.scrollWidth,
            clientWidth: document.documentElement.clientWidth
        };
    })()
    """
    ws.send(json.dumps({"id": 100, "method": "Runtime.evaluate", "params": {"expression": eval_script, "returnByValue": True}}))
    
    eval_res = None
    timeout_eval = time.time() + 5.0
    while time.time() < timeout_eval:
        try:
            ws.settimeout(0.5)
            msg = ws.recv()
            data = json.loads(msg)
            if data.get("id") == 100:
                result_payload = data.get("result", {})
                if "exceptionDetails" in result_payload:
                    print("  ✗ Evaluation JS Error:", result_payload["exceptionDetails"])
                else:
                    eval_res = result_payload.get("result", {}).get("value", {})
                break
        except websocket.WebSocketTimeoutException:
            continue

    ws.close()

    print("\n[STEP 5] Verification Results Summary:")
    print("-" * 50)
    if eval_res:
        hero = eval_res.get('heroTitle', '')
        print(f"  • Hero Title Rendered:    {hero.replace(chr(10), ' ') if hero else 'NONE ✗'}")
        print(f"  • Overview Cards Rendered: {eval_res.get('overviewCards')} cards")
        print(f"  • Flight Cards Rendered:   {eval_res.get('flightCards')} cards")
        print(f"  • Day Schedule Cards:      {eval_res.get('dayCards')} days")
        print(f"  • Budget Stat Cards:       {eval_res.get('budgetCards')} cards")
        print(f"  • Culinary Cards:          {eval_res.get('foodCards')} cards")
        print(f"  • Hotel Stay Cards:        {eval_res.get('hotelCards')} cards")
        print(f"  • Packing Items:           {eval_res.get('packingItems')} items")
        
        sw = eval_res.get('scrollWidth', 0)
        cw = eval_res.get('clientWidth', 0)
        overflow = sw > cw
        print(f"  • Viewport Width Check:    scrollWidth={sw}px, clientWidth={cw}px (Overflow: {overflow})")
    else:
        print("  ✗ Failed to evaluate DOM components via CDP!")

    # Check assertions
    all_passed = True
    console_errors = [msg for log_type, msg in console_messages if log_type == "error"]

    if exceptions_thrown:
        print(f"\n❌ FAILED: {len(exceptions_thrown)} unhandled runtime JavaScript exceptions!")
        all_passed = False
    elif console_errors:
        print(f"\n❌ FAILED: {len(console_errors)} console errors caught during runtime:")
        for err in console_errors:
            print(f"    - {err}")
        all_passed = False
    else:
        print("\n✅ PASS: 0 runtime JavaScript exceptions & 0 console errors.")

    checks = [
        ("Hero Title", eval_res and bool(eval_res.get('heroTitle'))),
        ("Overview Cards (>=3)", eval_res and eval_res.get('overviewCards', 0) >= 3),
        ("Flight Cards (>=2)", eval_res and eval_res.get('flightCards', 0) >= 2),
        ("Day Cards (>=3)", eval_res and eval_res.get('dayCards', 0) >= 3),
        ("Budget Stat Cards (>=3)", eval_res and eval_res.get('budgetCards', 0) >= 3),
        ("Culinary Cards (>=5)", eval_res and eval_res.get('foodCards', 0) >= 5),
        ("Hotel Stay Cards (>=1)", eval_res and eval_res.get('hotelCards', 0) >= 1),
        ("Packing Items (>=10)", eval_res and eval_res.get('packingItems', 0) >= 10),
    ]

    failed_checks = [name for name, passed in checks if not passed]
    if failed_checks:
        print(f"❌ FAILED: Components failed to render: {', '.join(failed_checks)}")
        all_passed = False
    else:
        print("✅ PASS: All required UI components rendered with positive counts.")

    if eval_res and eval_res.get('scrollWidth', 0) > eval_res.get('clientWidth', 0):
        print("❌ FAILED: Horizontal overflow detected!")
        all_passed = False
    else:
        print("✅ PASS: Zero horizontal overflow confirmed.")

    print("=" * 65)
    if all_passed:
        print("🎉 PRE-DEPLOYMENT VERIFICATION PASSED — READY TO DEPLOY!")
        print("=" * 65)
        sys.exit(0)
    else:
        print("⚠️ PRE-DEPLOYMENT VERIFICATION FAILED — DO NOT DEPLOY!")
        print("=" * 65)
        sys.exit(1)

finally:
    edge_proc.terminate()
    try:
        edge_proc.wait(timeout=2)
    except:
        edge_proc.kill()
