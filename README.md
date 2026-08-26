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
| **Party** | Couple (2 Adults) |
| **Passports** | UK / Portuguese (Ian) · Malaysian (Partner) |
| **Visa** | All Schengen visa-free ✅ |
| **Transport** | HVV public transit (U-Bahn · S-Bahn · Bus · Ferry) |
| **Theme** | `nordic-aurora` · Dark mode |
| **Languages** | EN · 繁中 · 简中 (Trilingual) |
| **Currency** | EUR base · GBP conversion |
| **Transit Board** | `swiss-train` style (closest to Deutsche Bahn) |

---

## 📁 Repository Structure

```
Hamburg_2026_Planner/
├── data/
│   ├── config.js           ← Trip identity, theme, languages, currencies, feature flags
│   ├── site-data.js        ← Overview cards, route board, tips, packing, budget, hotels, transit
│   └── itinerary-data.js   ← 3-day day-by-day schedule (morning / afternoon / evening blocks)
├── css/
│   ├── style.css           ← Master import
│   ├── base.css            ← Reset, typography, trilingual visibility rules
│   ├── palette.css         ← 7 colour theme presets (nordic-aurora active)
│   ├── components.css      ← Cards, buttons, badges, route board
│   ├── sections.css        ← Hero, overview, itinerary, budget, hotels, transit sections
│   └── responsive.css      ← Mobile-first breakpoints
├── js/
│   ├── script.js           ← Bootstrap: detects isCustomPlan, reveals trip one-pager
│   ├── render.js           ← Core render engine: reads data files → injects HTML
│   ├── ui.js               ← Language switcher (EN/繁中/简中), dark/light toggle, accordion
│   ├── map.js              ← MapLibre GL route map + day minimaps
│   └── currency.js         ← Live EUR/GBP exchange rate with fallback
├── assets/
│   └── favicon.svg
├── index.html              ← Single-page shell (trip one-pager only, no hub portal)
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

## 🌐 Trilingual Support

This planner supports **three languages simultaneously** — a custom extension beyond the base Trip Planner template:

| Class | Body state | Language |
|---|---|---|
| `lang-primary` | `body.lang-primary` | English (EN) |
| `lang-secondary` | `body.lang-secondary` | Traditional Chinese (繁中) |
| `lang-tertiary` | `body.lang-tertiary` | Simplified Chinese (简中) |

Switch language using the **EN · 繁中 · 简中** buttons in the top-right navigation.

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
