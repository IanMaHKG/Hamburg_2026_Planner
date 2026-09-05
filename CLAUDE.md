# Claude Code Instructions — Hamburg 2026 Planner
# ──────────────────────────────────────────────────────────────────────
# Canonical Master Instructions: AGENTS.md
# ──────────────────────────────────────────────────────────────────────

You are assisting with **Hamburg 2026 Winter City Break**, a static PWA travel planner for Ian & partner (Nov 26–28, 2026).

> **MANDATORY FIRST STEP:**
> Before analyzing, designing, writing, or editing any code or data, you **MUST** read the comprehensive repository rules in **[`AGENTS.md`](AGENTS.md)**.

## Quick Reference
- **Serve locally**: `python -m http.server 8000` (open `http://localhost:8000`)
- **Master rules**: Consult **[`AGENTS.md`](AGENTS.md)** for complete guidance.
- **Top 5 Critical Directives**:
  1. **Strict Trilingual Parity**: `en` (British English), `zh` (HK Traditional Chinese), `zh-cn` (Malaysian Simplified Chinese), and authentic German with umlauts.
  2. **Data Isolation**: User strings belong exclusively in `data/config.js`, `data/site-data.js`, and `data/itinerary-data.js`. Never hardcode text in `js/` or `index.html`.
  3. **Responsive Edge-to-Edge**: Zero horizontal overflow. Grids must use `repeat(auto-fit, minmax(min(Xpx, 100%), 1fr))` (never `auto-fill` or `100vw`).
  4. **PWA Cache**: Increment `CACHE_NAME` in `sw.js` on every CSS, JS, HTML, or data edit.
  5. **Anti-Drift**: Update `README.md` and `AGENTS.md` whenever architectures or data change.
  6. **Mandatory Pre-Deployment Check**: Run `python tests/pre_deployment_check.py` before committing or pushing to `main` whenever HTML/CSS/JS/data files are modified. Must pass with 0 errors and full hydration.
