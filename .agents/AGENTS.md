# Antigravity / Gemini Workspace Agent Instructions
# ──────────────────────────────────────────────────────────────────────
# Canonical Master Instructions: ../AGENTS.md
# ──────────────────────────────────────────────────────────────────────

> **MANDATORY FOR ALL AGENTS & MODELS:**
> Before analyzing, designing, writing, or editing any content in this repository, you **MUST** read and strictly follow the master instructions located at **[`AGENTS.md`](../AGENTS.md)**.

### Master Directives Quick Summary:
1. **Strict Trilingual Parity**:
   - `en`: British English only (`colour`, `organise`, `favourite`, `26 Nov 2026`, aviation/transit terms).
   - `zh`: Hong Kong Traditional Chinese (`繁體中文`, 的士, 車尾箱, 貼士, 酒店, 登記入住).
   - `zh-cn`: Malaysian Simplified Chinese (`规范简体中文`, 德士, 酒店, 贴士, 行程建议).
   - German: Authentic terms with correct umlauts (*Speicherstadt*, *Elbphilharmonie*, *Glühwein*, *Moin!*).
2. **Data-Driven Separation**:
   - All user-facing strings belong in `data/config.js`, `data/site-data.js`, and `data/itinerary-data.js`. Never hardcode destination text in `js/` or `index.html`.
3. **Responsive Edge-to-Edge Design**:
   - Zero horizontal overflow (`max-width: 100%; overflow-x: hidden;`).
   - Always use `repeat(auto-fit, minmax(min(Xpx, 100%), 1fr))` on grids. Never use `auto-fill` (prevents empty white space tracks).
   - Never use `100vw` (use `100%` to prevent scrollbar gutters).
4. **PWA Service Worker Cache Bumping**:
   - Always increment `CACHE_NAME` in `sw.js` on every CSS, JS, HTML, or data edit.
5. **Anti-Drift Requirement**:
   - Keep `README.md` and `AGENTS.md` synchronized whenever features or architectures change.

For the full detailed rules and pre-deployment checklist, see **[`AGENTS.md`](../AGENTS.md)**.
