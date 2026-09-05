# GitHub Copilot Instructions — Hamburg 2026 Planner
# Master instructions: AGENTS.md

These instructions apply to all GitHub Copilot interactions in this repository.

MANDATORY FIRST STEP:
Always consult and adhere to the master instructions in [AGENTS.md](../AGENTS.md) before generating code, commits, or suggestions.

Core Directives:
1. Strict Trilingual Parity: All user-facing strings must have `en` (UK English), `zh` (HK Traditional Chinese), and `zh-cn` (Malaysian Simplified Chinese).
2. Data-Driven Separation: Keep all content strictly inside `data/config.js`, `data/site-data.js`, and `data/itinerary-data.js`. Never hardcode displayed text in `js/` or `index.html`.
3. Responsive Edge-to-Edge: Ensure zero horizontal overflow (`max-width: 100%`, `overflow-x: hidden`) and use `auto-fit` with bounded `min()` for grid columns. Never use `auto-fill` or `100vw`.
4. PWA Service Worker: Increment `CACHE_NAME` in `sw.js` on every CSS, JS, HTML, or data edit.
5. Anti-Drift: Keep `README.md` and `AGENTS.md` synchronized on structural changes.
6. Mandatory Pre-Deployment Check: Run `python tests/pre_deployment_check.py` before committing or pushing to `main` whenever HTML/CSS/JS/data files are modified. Must pass with 0 errors.
