# Claude Code Instructions — Hamburg 2026 Planner
# ──────────────────────────────────────────────────────────────────────
# Full master instructions located at: .agents/AGENTS.md
# ──────────────────────────────────────────────────────────────────────

You are assisting with **Hamburg 2026 Winter City Break**, a static PWA travel planner for Ian & partner (Nov 26–28, 2026).

## Essential Commands & Verification
- Serve locally: `python -m http.server 8000` (open `http://localhost:8000`)
- Validate CSS & scripts: verify balanced braces in all 6 `css/*.css` files and check script references in `index.html`.
- Deploy: pushes to `main` branch automatically trigger `.github/workflows/deploy.yml` to publish to GitHub Pages.

## Critical Rules to Follow
1. **Trilingual Content Requirement**:
   - `en`: British English only (`colour`, `organise`, `favourite`, `26 Nov 2026`).
   - `zh`: Hong Kong Traditional Chinese (`繁體中文`, 的士, 車尾箱, 貼士, 酒店).
   - `zh-cn`: Malaysian Simplified Chinese (`简体中文`, 德士, 酒店, 贴士, 行程建议).
   - German: Authentic terms with umlauts (*Speicherstadt*, *Elbphilharmonie*, *Glühwein*, *Moin!*).
2. **Data-Driven Architecture**:
   - All text content belongs in `data/config.js`, `data/site-data.js`, or `data/itinerary-data.js`.
   - Never hardcode user-facing strings or destination info in `index.html` or `js/`.
3. **Responsive Edge-to-Edge Design**:
   - Zero horizontal overflow (`max-width: 100%`, `overflow-x: hidden`).
   - Use `repeat(auto-fit, minmax(min(Xpx, 100%), 1fr))`. Never use `auto-fill` (prevents empty whitespace on filtered cards).
   - Avoid `100vw` (use `100%` to prevent scrollbar gutter on Windows/desktop).
4. **PWA Service Worker**:
   - Always increment `CACHE_NAME` in `sw.js` on every CSS, JS, HTML, or data edit.
5. **Anti-Drift**:
   - Keep `README.md` and `.agents/AGENTS.md` in sync whenever features or architectures are modified.
