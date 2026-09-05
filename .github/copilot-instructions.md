# GitHub Copilot Custom Instructions — Hamburg 2026 Planner
# ──────────────────────────────────────────────────────────────────────
# Full master instructions located at: .agents/AGENTS.md
# ──────────────────────────────────────────────────────────────────────

These instructions apply to all GitHub Copilot interactions in this repository.

## Repository Overview
- **Project**: Hamburg 2026 Winter City Break (`Hamburg_2026_Planner`).
- **Dates**: 26–28 November 2026 (3 Days / 2 Nights).
- **Travelers**: Ian (Lead Planner, British/Portuguese passport) & Partner (Co-Traveller, Malaysian passport).
- **Tech Stack**: Pure client-side static PWA (HTML5, Vanilla CSS, ES6 JS). Zero external npm dependencies. Deployed to GitHub Pages.

## Core Rules to Enforce
1. **Trilingual Data Parity**:
   - `en`: British English (`colour`, `organise`, `favourite`, `26 Nov 2026`).
   - `zh`: Hong Kong Traditional Chinese (`繁體中文`, 的士, 車尾箱, 貼士, 酒店).
   - `zh-cn`: Malaysian Simplified Chinese (`简体中文`, 德士, 酒店, 贴士, 行程建议).
   - German: Authentic terms with umlauts (*Speicherstadt*, *Elbphilharmonie*, *Glühwein*, *Moin!*).
2. **Data-Driven Separation**:
   - All text content belongs in `data/config.js`, `data/site-data.js`, or `data/itinerary-data.js`.
   - Never hardcode user-facing strings in `index.html` or `js/`.
3. **Responsive Edge-to-Edge Design**:
   - Zero horizontal overflow (`max-width: 100%`, `overflow-x: hidden`).
   - Always use `repeat(auto-fit, minmax(min(Xpx, 100%), 1fr))` on grids. Never use `auto-fill` (prevents empty white space).
   - Never use `100vw` (use `100%` to prevent scrollbar gutters).
4. **PWA Service Worker**:
   - Always increment `CACHE_NAME` in `sw.js` on every CSS, JS, HTML, or data edit.
5. **Anti-Drift**:
   - Keep `README.md` and `.agents/AGENTS.md` in sync whenever features or architectures change.
