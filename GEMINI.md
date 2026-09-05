# Google Gemini CLI / Antigravity Agent Instructions
# ──────────────────────────────────────────────────────────────────────
# Full master instructions located at: .agents/AGENTS.md
# ──────────────────────────────────────────────────────────────────────

Please refer to [.agents/AGENTS.md](file:///.agents/AGENTS.md) and [AGENTS.md](file:///AGENTS.md) for the complete rules governing this repository.

### Key Rules at a Glance:
1. **Trilingual Parity**: Every user-facing string must support `en` (British English), `zh` (Hong Kong Traditional Chinese), and `zh-cn` (Malaysian Simplified Chinese).
2. **Data-Driven Architecture**: User-facing text lives only in `data/config.js`, `data/site-data.js`, and `data/itinerary-data.js`. Never hardcode displayed content in `js/` or `index.html`.
3. **Responsive Edge-to-Edge**: Zero horizontal overflow (`overflow-x: hidden`, `max-width: 100%`). Always use `auto-fit` with bounded minmax (`minmax(min(Xpx, 100%), 1fr)`). Never use `auto-fill` or `100vw`.
4. **Service Worker**: Always increment `CACHE_NAME` in `sw.js` after any edit to `css/`, `js/`, `data/`, or `index.html`.
5. **Anti-Drift**: Update `README.md`, `.agents/AGENTS.md`, and documentation artifacts on every structural, data, or feature change.
