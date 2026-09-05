# Hamburg 2026 Planner — Master Agent Instructions
# ──────────────────────────────────────────────────────────────────────
# MANDATORY: ALL AI models and coding agents MUST read this document
# FIRST before analyzing, designing, writing, or editing any content.
# This file is the CANONICAL SINGLE SOURCE OF TRUTH for this repository.
# ──────────────────────────────────────────────────────────────────────

## 1. Repository Identity & Core Purpose

- **Project**: **Hamburg 2026 Winter City Break** (`Hamburg_2026_Planner`)
- **Trip Dates**: 26 November 2026 – 28 November 2026 (3 Days / 2 Nights)
- **Destination**: Hamburg, Germany (Speicherstadt, HafenCity, Elbphilharmonie, Christmas Markets, Jungfernstieg, Landungsbrücken)
- **Travelers**: Ian (Lead Planner, British/Portuguese passport) & Partner (Co-Traveller, Malaysian passport)
- **Confirmed Logistics**:
  - Flights: British Airways **BA960** (LHR T5 → HAM T2) & **BA967** (HAM T2 → LHR T5)
  - Hotel: **Courtyard by Marriott Hamburg City** (Adenauerallee 52, 20097 Hamburg)
  - Transit: S-Bahn S1 direct airport link, HVV public transit network, Hadag Ferry 62
- **Architecture**: 100% static client-side Progressive Web App (PWA). Vanilla HTML5, Vanilla CSS, Vanilla ES6 JavaScript. Zero external npm dependencies, zero build steps, deployed directly to GitHub Pages.

---

## 2. Documentation Integrity & Anti-Drift Rule (CRITICAL)

- **Mandatory Review on Every Change:** Whenever ANY code, architecture, directory structure, data schema, styling token, or responsive rule is modified, the agent **MUST** immediately review and update:
  - `README.md`
  - `.agents/AGENTS.md` (and all model instruction mirrors)
  - Active planning and walkthrough artifacts
- **Zero Documentation Drift:** Documentation must always strictly reflect the living code. Never allow file paths, architectural descriptions, or design token references to become stale.

---

## 3. Language & Localization Style Rules (STRICT TRILINGUAL PARITY)

Every user-facing string in `data/config.js`, `data/site-data.js`, and `data/itinerary-data.js` **must** provide values for all three configured languages:
1. `en` — British English
2. `zh` — Hong Kong Traditional Chinese (繁體中文)
3. `zh-cn` — Malaysian Chinese (马来西亚华语 / 简体中文)

### A. English (`en`) — British English Only

All English content **must adhere strictly to British English spelling and conventions**:
- **Spelling**: Use `-ise` / `-isation` (`organise`, `realise`, `prioritise`, `visualise`), `colour`, `favourite`, `honour`, `travelling`, `cancelled`, `centre`, `theatre`, `metre`, `programme`, `dialogue`, `cheque`, `licence` (noun).
- **Dates**: Write `26 November 2026` or `26 Nov 2026` — never American `November 26th` or `11/26`.
- **Currencies**: Write Euro as `€529` or `€899 – €999`, British Pounds as `£212.70`, and Malaysian Ringgit as `RM6,292.80` (symbol precedes amount, comma thousands separator).
- **Units**: Use metric system (`km`, `m`, `°C`).
- **Code Exception**: CSS property names (`color`, `text-align: center`) and JS syntax remain code as standard.

### B. Traditional Chinese (`zh`) — Hong Kong Chinese (香港繁體中文)

All Chinese content in `zh:` fields **must use natural Hong Kong written Chinese (港式繁體書面語)**:
- **Script**: Traditional characters (繁體字) only.
- **Vocabulary Conventions**:
  - Transit: 的士 (taxi), 車尾箱 (boot), 地鐵 (metro), 港鐵, 巴士 (bus), 纜車.
  - Accommodation: 酒店 (hotel), 登記入住 (check-in), 退房 (check-out).
  - Travel: 貼士 (tips), 實用資訊, 景點, 行程建議, 隨身行李, 手提行李, 漫遊數據.
- **Prohibited Slang/Terms**:
  - ❌ Avoid Mainland / Northern terms: 出租車, 打的, 後備箱, 景區, 攻略, 溫馨提示, 玩意兒.
  - ❌ Avoid Taiwan-specific terms: 捷運, 計程車, 伴手禮.

### C. Simplified Chinese (`zh-cn`) — Malaysian Chinese (马来西亚华语)

All Chinese content in `zh-cn:` fields **must use Malaysian Chinese written conventions (马来西亚华语 / 规范简体中文)**:
- **Script**: Simplified characters (规范简体字) only.
- **Vocabulary Conventions**:
  - Transit: 德士 / 出租车 (德士 is standard in Malaysia/Singapore; both are understood, prefer 德士 in conversational taxi contexts), 地铁, 巴士 / 公交车, 后备箱.
  - Accommodation: 酒店, 办理入住, 退房.
  - Travel: 贴士, 实用信息, 景点, 行程建议, 行李箱, 随身携带.
  - Tone: Natural, friendly, and clear Malaysian Chinese newspaper/editorial style.
- **Prohibited Terms**:
  - ❌ Avoid Northern Chinese *érhuàyīn* (儿化音) such as 玩意儿, 遛弯儿, 门洞儿.
  - ❌ Avoid buzzwords or regional internet slang that are not recognized in Malaysia.

### D. German Vocabulary & Authenticity

When mentioning local Hamburg landmarks, food, or cultural phrases, maintain authentic German names with correct umlauts and eszett (`ä`, `ö`, `ü`, `ß`):
- **Places**: *Speicherstadt*, *Elbphilharmonie*, *HafenCity*, *Landungsbrücken*, *Jungfernstieg*, *Rathausmarkt*, *Miniatur Wunderland*, *St. Michaelis*.
- **Food & Drink**: *Glühwein*, *Franzbrötchen*, *Fischbrötchen*, *Labskaus*, *Currywurst*, *Pilsner*.
- **Greetings & Transit**: *Moin!*, *Tschüss!*, *Danke schön*, *HVV S-Bahn S1*, *U-Bahn*, *Hadag-Fähre 62*.

---

## 4. Architecture & Data-Driven Design Rules

### Modular Codebase Organization

```
Hamburg_2026_Planner/
├── .agents/
│   ├── AGENTS.md               # Master AI agent instructions
│   └── GEMINI.md               # Gemini / Antigravity rule alias
├── .github/
│   ├── workflows/deploy.yml    # GitHub Actions CI/CD to GitHub Pages
│   └── copilot-instructions.md # GitHub Copilot instruction mirror
├── assets/                     # SVGs, optimized images, favicons
├── css/
│   ├── palette.css             # Luxury theme presets & design tokens
│   ├── base.css                # Typography, resets & layout containers
│   ├── components.css          # Navigation, buttons, badges, modals
│   ├── sections.css            # Section layouts (Hero, Flights, Itinerary, Budget)
│   ├── responsive.css          # Responsive breakpoints & compact scaling
│   └── style.css               # Central stylesheet import loader
├── data/
│   ├── config.js               # TRIP_CONFIG: languages, party, theme, currency
│   ├── site-data.js            # Structured overview, flights, hotels, packing, budget
│   └── itinerary-data.js       # Day-by-day timeline, GPS coordinates, food
├── js/
│   ├── currency.js             # Live exchange rates & instant multi-currency converter
│   ├── map.js                  # MapLibre GL JS vector maps & interactive popups
│   ├── render.js               # Core DOM rendering engine with trilingual injection
│   ├── ui.js                   # Navigation, themes, speech TTS, taxi modal, calendar .ics
│   └── script.js               # Application bootstrap & Service Worker registration
├── AGENTS.md                   # Root universal agent instructions mirror
├── CLAUDE.md                   # Anthropic Claude Code instruction mirror
├── GEMINI.md                   # Google Gemini CLI instruction mirror
├── .cursorrules                # Cursor IDE instruction mirror
├── index.html                  # Semantic HTML shell & UI mount points
├── manifest.json               # Progressive Web App manifest
├── sw.js                       # Offline caching Service Worker
└── README.md                   # Project documentation & deployment guide
```

### Data-Driven Separation (NEVER Hardcode in Logic)

- **Single Source of Truth**: `data/config.js` is the sole authority for trip identity, dates, passenger count, theme preset, default currency, and languages.
- **Content Isolation**: All user-facing titles, notes, descriptions, addresses, and tips must live in `data/site-data.js` and `data/itinerary-data.js`.
- **Render Engine Purity**: `js/render.js` and `js/ui.js` must remain generic and data-driven; never hardcode trip-specific strings or destination names into JS logic.

---

## 5. Responsive Design, Edge-to-Edge Fluidity & Zero Overflow

### Zero Horizontal Overflow Guarantee

- **Root Viewport Guards**: `html` and `body` must maintain `overflow-x: hidden; max-width: 100%; width: 100%;`. `#trip-content` and `.section` must have `max-width: 100%; overflow-x: hidden; box-sizing: border-box;`.
- **No `100vw` in Stylesheets**: Always use `100%` or `calc(100% - ...)` instead of `100vw` to prevent the 17px vertical scrollbar gutter bug on desktop and Windows browsers.
- **Media Reset**: All `img, video, canvas, iframe` must have `max-width: 100%; height: auto; display: block;` and `svg { max-width: 100%; }`.

### Fluid Auto-Fit Grids (No Empty Whitespace)

- **Always `auto-fit`, NEVER `auto-fill`**:
  ```css
  /* ✅ CORRECT: Cards expand dynamically to fill the full container width */
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));

  /* ❌ INCORRECT: Leaves empty placeholder tracks on the right when items < columns */
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  ```
- **Every column track must be bounded**: Always wrap pixel minimums with `min(Xpx, 100%)` (e.g. `minmax(min(280px, 100%), 1fr)`) so narrow mobile screens (<400px like iPhone 16 Pro) never overflow.
- **Compact Viewports (`< 400px`)**: Container padding is `14px` and card internal padding scales to `16px/12px` to provide maximum content width with zero wasted side margins.
- **Clean Touch Scrolls**: Horizontal scrolling pill rows (`.food-filter-pills`, `.phrase-tabs-row`) must have `scrollbar-width: none !important;` and webkit scrollbars hidden to eliminate grey scrollbar rails.

---

## 6. Service Worker & PWA Caching Rule

- **Mandatory Cache Version Bump:** Whenever **ANY** file in `css/`, `js/`, `data/`, or `index.html` is modified, the agent **MUST** increment the cache version constant in `sw.js`:
  ```javascript
  // Example: increment version on every release
  const CACHE_NAME = 'trip-planner-v14';
  ```
- Failure to bump `CACHE_NAME` will cause mobile devices and returning visitors to load stale, cached stylesheets or scripts.

---

## 7. Git & CI/CD Workflow Conventions

- **Branch**: `main` is the production branch deploying to GitHub Pages via `.github/workflows/deploy.yml`.
- **Commit Message Format**: Follow Conventional Commits:
  - `feat(scope): ...` — New feature or major UX addition
  - `fix(scope): ...` — Bug fix or responsive layout correction
  - `docs(scope): ...` — Documentation or agent instruction update
  - `refactor(scope): ...` — Code improvement without visual change

### Mandatory Pre-Deployment Verification Check (CRITICAL)

Whenever **ANY** HTML, CSS, JS, or data files are added, removed, or modified, the agent **MUST** execute the automated pre-deployment verification check before committing or pushing to `main`:

```bash
python tests/pre_deployment_check.py
```

This test suite launches headless Microsoft Edge via the Chrome DevTools Protocol (CDP) at `http://localhost:8000/` and strictly verifies:
1. **Zero Runtime Exceptions**: `Runtime.exceptionThrown` must report 0 unhandled exceptions.
2. **Zero Console Errors**: `console.error` during application bootstrap and hydration must be 0.
3. **Full Component Hydration**: Confirms that all core sections render past the HTML skeleton:
   - Hero Title rendered
   - Overview Cards (>= 3 cards)
   - Confirmed Flight Cards (>= 2 cards)
   - Day Schedule Cards (>= 3 days)
   - Budget Stat Cards (>= 3 cards)
   - Culinary Guide Cards (>= 5 cards)
   - Hotel Stay Cards (>= 1 card)
   - Packing Checklist (>= 10 items)
4. **Zero Horizontal Overflow**: `scrollWidth <= clientWidth` on the document root element.
5. **PWA Cache Bump**: `CACHE_NAME` in `sw.js` must be incremented.

> ⚠️ **BLOCKING RULE**: If `python tests/pre_deployment_check.py` fails on any assertion, the agent **MUST NOT** push to `main`. It must diagnose and fix the root cause first.

---

## 8. Privacy & PII Protection

- Do **not** expose real personal phone numbers, passport serial numbers, home addresses, or private banking details in public code or rendered HTML.
- Party member passports should be stated by document category (e.g. "British Citizen passport", "Malaysian passport"), not linked to personal identification numbers.

---

## 9. Mandatory Agent Execution Checklist

Before completing any task or pushing to `main`, verify each item:

- [ ] Has `AGENTS.md` been consulted and respected for all changes?
- [ ] Are all user-visible strings trilingual (`en` UK English, `zh` HK Traditional, `zh-cn` Malaysian Simplified)?
- [ ] Are all data changes isolated to the 3 `data/` files without hardcoding in JS or HTML?
- [ ] Does the layout fit the screen width automatically edge-to-edge with ZERO horizontal overflow?
- [ ] Did you use `auto-fit` (not `auto-fill`) so there are no empty whitespace tracks on filtered views?
- [ ] Is `sw.js` cache version bumped whenever any cached asset was added/removed/modified?
- [ ] Are all 6 CSS files syntactically valid with balanced braces?
- [ ] **Has `python tests/pre_deployment_check.py` PASSED with 0 exceptions, 0 console errors, and full DOM hydration?**
- [ ] Have `README.md` and active documentation artifacts been updated to prevent drift?
