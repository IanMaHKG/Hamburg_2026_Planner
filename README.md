# 🇩🇪 Hamburg 2026 — Winter City Break Planner

> **3-day couple trip · Nov 26–28, 2026 · Hamburg, Germany**  
> Speicherstadt · HafenCity · Elbphilharmonie · Christmas Markets · Jungfernstieg · Landungsbrücken

**🔗 Live Plan:** [ianmahkg.github.io/Hamburg_2026_Planner](https://ianmahkg.github.io/Hamburg_2026_Planner/)

---

## ✨ Trip Highlights

| Day | Theme | Highlights |
|-----|-------|-----------|
| **Day 1** · Nov 26 | Arrival & HafenCity | Speicherstadt canals · Miniatur Wunderland · Elbphilharmonie plaza · Fleetinsel Christmas market |
| **Day 2** · Nov 27 | Christmas Market Day | Hamburg Rathaus · Alster Arcades · Jungfernstieg shopping · Europa Passage · Rathausmarkt & Binnenalster markets at night |
| **Day 3** · Nov 28 | Harbour & Departure | Historischer Weihnachtsmarkt · Chilehaus architecture · Landungsbrücken piers · Elbe ferry · Fischbrötchen farewell |

---

## 🗺️ Plan Details

| | |
|---|---|
| **Destination** | Hamburg, Germany |
| **Dates** | 26–28 November 2026 (3 days) |
| **Flights** | **Outbound:** BA960 (26 Nov, 07:30 LHR T5 → 10:10 HAM T2)<br>**Return:** BA967 (28 Nov, 16:45 HAM T2 → 17:25 LHR T5)<br>💳 **Paid Receipt:** £212.70 total (2 return tickets) |
| **Hotel** | [Courtyard by Marriott Hamburg City](https://www.marriott.com/en-gb/hotels/hamhc-courtyard-by-marriott-hamburg-city/overview) (Adenauerallee 52, 2 nights confirmed)<br>💳 **Paid Receipt:** €279.00 total |
| **Party** | Couple (2 Adults) |
| **Passports** | UK / Portuguese (Ian) · Malaysian (Partner) |
| **Visa** | All Schengen visa-free ✅ |
| **Transport** | HVV public transit (S1 Airport direct · U-Bahn · Ferry 62) |
| **Theme** | `nordic-aurora` · Dark mode |
| **Languages** | British English · 香港繁體中文 · 马来西亚简体中文 |
| **Currency** | EUR (€) base · Live conversion to GBP (£), EUR (€) & MYR (RM) |
| **Transit Board** | `swiss-train` style (closest to Deutsche Bahn) |

---

## 📁 Repository Structure

```
Hamburg_2026_Planner/
├── .agents/
│   └── AGENTS.md           ← Antigravity / Gemini discovery pointer (points to AGENTS.md)
├── .cursorrules            ← Cursor IDE discovery pointer (points to AGENTS.md)
├── .github/
│   ├── copilot-instructions.md ← GitHub Copilot discovery pointer (points to AGENTS.md)
│   └── workflows/
│       └── deploy.yml      ← GitHub Actions automated Pages deployment
├── data/
│   ├── config.js           ← Master config: identity, theme, trilingual settings, currencies, feature flags
│   ├── site-data.js        ← Confirmed flights, hotels, overview cards, route stops, tips, packing, budget, transit
│   └── itinerary-data.js   ← 3-day schedule with trilingual region labels & morning/afternoon/evening blocks
├── css/
│   ├── style.css           ← Master stylesheet aggregator
│   ├── base.css            ← Reset, typography, trilingual visibility rules (lang-primary/secondary/tertiary)
│   ├── palette.css         ← 7 luxury theme presets (nordic-aurora active)
│   ├── components.css      ← Cards, buttons, badges, navigation, route board
│   ├── sections.css        ← Hero, overview, confirmed flights, itinerary, budget, hotels, transit
│   └── responsive.css      ← Mobile-first breakpoints (phones, tablets, desktops)
├── js/
│   ├── script.js           ← Application bootstrap: registers SW, initializes render engine & controllers
│   ├── render.js           ← Core render engine: data-driven injection for flights, hotels, itinerary, etc.
│   ├── ui.js               ← Language switcher (EN/繁中/简中), dark/light toggle, day accordion, region filters
│   ├── map.js              ← MapLibre GL master route map + per-day mini-maps with trilingual popups
│   └── currency.js         ← Live EUR/GBP exchange rates with offline fallback
├── assets/
│   └── favicon.svg         ← App icon / favicon
├── AGENTS.md               ← 🌟 CANONICAL MASTER INSTRUCTIONS (Single Source of Truth)
├── CLAUDE.md               ← Anthropic Claude Code discovery pointer (points to AGENTS.md)
├── index.html              ← Dedicated single-page shell (instant first paint, zero-flash)
├── manifest.json           ← PWA manifest
└── sw.js                   ← Service worker for offline caching
```

---

## 🚀 Run Locally

```bash
# Clone the repo
git clone https://github.com/IanMaHKG/Hamburg_2026_Planner.git
cd Hamburg_2026_Planner

# Serve locally (any static server works)
npx serve .
# or
python -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

> ⚠️ Must be served over HTTP(S) — opening `index.html` directly as `file://` will block the MapLibre GL map and Google Fonts.

---

## 🛠️ Customising the Data Files

All trip content lives exclusively in `data/`. The JS engine (`render.js`) is fully trip-agnostic.

### `data/config.js`
Master configuration — languages, theme, trip dates, party profile, visa summary, currencies, feature flags.

```js
const TRIP_CONFIG = {
  meta: { isCustomPlan: true },   // ← tells script.js to show the trip (not a hub)
  languages: { primary, secondary, tertiary, default },
  trip:     { title, dates, durationDays, heroBadges, ... },
  party:    { size, type, members, ... },
  currency: { base, targets, defaultTarget },
  theme:    { preset: "nordic-aurora", defaultTheme: "dark" },
  routeBoardStyle: "swiss-train",
  features: { showOverview, showMap, showTips, showItinerary, ... }
};
```

### `data/site-data.js`
All non-itinerary content — overview cards, route milestone board, practical tips, packing list, budget breakdown, hotel legs, transit comparison.

### `data/itinerary-data.js`
Day-by-day schedule. Each day entry:

```js
{
  id, dayNum, date, region,
  title: { en, zh, "zh-cn" },
  tags:  [ { type, text } ],
  blocks: [
    {
      time: { en, zh, "zh-cn" },
      activity: {
        title: { en, zh, "zh-cn" },
        desc:  { en, zh, "zh-cn" },
        meal:  { icon, en, zh, "zh-cn" },
        locations: [ { lat, lng, label: { en, zh, "zh-cn" } } ]
      }
    }
    // Morning · Afternoon · Evening
  ],
  tip: { en, zh, "zh-cn" }
}
```

---

## 🌐 Trilingual Support & Regional Localisation

This planner is tailored with authentic regional flavours for each language:

| Code | Button | Locale | Flavour / Regional Localisation |
|---|---|---|---|
| `en` | **EN** | `en-GB` | **British English** — UK spelling (*harbour*, *centre*, *favourite*), aviation/transit vocabulary (*cabin bag*, *return flight*, *Heathrow Terminal 5*). |
| `zh` | **繁中** | `zh-HK` | **香港繁體中文 (Hong Kong SAR Chinese)** — authentic HK travel terminology (如「希斯路機場」、「乘搭S1」、「易北愛樂廳」、「倉庫城」、「熱紅酒」、「酒店」、「辦理入住/退房」). |
| `zh-cn` | **简中** | `zh-MY` | **马来西亚简体中文 (Malaysian Chinese)** — standard Malaysian Chinese travel phrasing (如「希思罗机场」、「搭乘S1/城铁」、「易北爱乐音乐厅」、「仓库城」、「热红酒」、「酒店」、「电召车/德士」、「办理入住/退房」). |

Switch language instantly using the **EN · 繁中 · 简中** buttons in the top-right navigation bar (with full descriptive hover tooltips).

---

## 🤖 AI Agent Instructions & Multi-Model Rules

To prevent redundancy and avoid documentation drift, this repository follows a **Single Source of Truth** architecture. The canonical master rules are centralized in [`AGENTS.md`](AGENTS.md). Lightweight discovery pointers are placed in the required vendor locations so each tool's engine automatically finds and loads the master instructions:

| File | Type | Target AI Assistant / Environment | Role |
|---|---|---|---|
| [`AGENTS.md`](AGENTS.md) | **Canonical Master** | Universal (Antigravity, Gemini, Claude, Cursor, Copilot, Aider, Devin) | Single source of truth: trilingual rules, architecture, responsive design, PWA caching, git conventions |
| [`.agents/AGENTS.md`](.agents/AGENTS.md) | **Discovery Pointer** | Antigravity IDE & Google Gemini CLI | Directs Antigravity/Gemini to master `AGENTS.md` |
| [`CLAUDE.md`](CLAUDE.md) | **Discovery Pointer** | Anthropic Claude Code CLI | Directs Claude Code to master `AGENTS.md` |
| [`.cursorrules`](.cursorrules) | **Discovery Pointer** | Cursor IDE | Directs Cursor to master `AGENTS.md` |
| [`.github/copilot-instructions.md`](.github/copilot-instructions.md) | **Discovery Pointer** | GitHub Copilot (VS Code & Workspace) | Directs Copilot to master `AGENTS.md` |

### Core Architectural Directives for Agents:
1. **Strict Trilingual Parity**: Every user-facing string in `data/` must have `en` (UK English), `zh` (HK Traditional Chinese), and `zh-cn` (Malaysian Simplified Chinese).
2. **Data-Driven Isolation**: Text content lives strictly in `data/config.js`, `data/site-data.js`, and `data/itinerary-data.js`. Never hardcode destination strings in `js/` or `index.html`.
3. **Responsive Edge-to-Edge**: Layouts must dynamically fit the screen width with zero horizontal overflow. Always use `auto-fit` with bounded minmax (`minmax(min(Xpx, 100%), 1fr)`). Never use `auto-fill` (which leaves empty tracks) or `100vw` (causes scrollbar gutters).
4. **PWA Cache Bumping**: Always increment `CACHE_NAME` in `sw.js` whenever editing CSS, JS, HTML, or data files.
5. **Anti-Drift Requirement**: Always keep `README.md` and agent instructions strictly aligned with live code changes.

---

## 🎨 Theme

Uses the **`nordic-aurora`** preset from the Trip Planner CSS palette system — Deep Slate & Aurora Teal, perfectly suited for Hamburg's cool harbour aesthetic.

To switch theme, change `theme.preset` in `data/config.js`:

| Preset | Description |
|---|---|
| `nordic-aurora` | Deep Slate & Aurora Teal ← **active** |
| `midnight-navy` | BA Midnight Navy & Gold |
| `alpine-emerald` | Swiss Pine, Glacial Blue & Gold |
| `cyber-dark` | Obsidian & Electric Violet |
| `mediterranean-warm` | Terracotta, Coral & Deep Sea |
| `sakura-rose` | Plum, Blossom Pink & Rose Gold |
| `sunset-terracotta` | Sedona Rust & Ochre |

---

## 🏗️ Built With

This planner is powered by the **[Trip Planner](https://github.com/IanMaHKG/Trip_Planner)** open-source template — a vanilla HTML/CSS/JS GitHub Pages travel itinerary engine with:
- Zero build tools required
- 7 colour presets · Dark & light mode
- 5 transit board styles (Swiss, JR Rail, London Underground, HK MTR, NYC Subway)
- MapLibre GL interactive maps
- Live currency conversion
- PWA / offline capable

---

## 📄 Licence

MIT © 2026 Ian Ma
