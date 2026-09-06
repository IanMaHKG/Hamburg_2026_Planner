/**
 * @file config.js
 * @description MASTER CONFIGURATION — Hamburg 2026 Winter City Break.
 *
 * Couple's 3-day Hamburg trip (26–28 Nov 2026) covering Christmas markets,
 * harbour waterfront, Speicherstadt, shopping & gastronomy.
 * Nordic-Aurora theme · English / Traditional Chinese / Simplified Chinese.
 */

const TRIP_CONFIG = {
  meta: { isCustomPlan: true },

  /* ══════════════════════════════════════════════════
     1. LANGUAGE SETTINGS (i18n)
     ══════════════════════════════════════════════════ */
  languages: {
    primary: {
      code: "en",
      label: "EN",
      name: "English (UK)",
      title: "English (UK)",
      locale: "en-GB"
    },
    secondary: {
      code: "zh",
      label: "繁中",
      name: "繁體中文（香港）",
      title: "香港繁體中文",
      locale: "zh-HK"
    },
    tertiary: {
      code: "zh-cn",
      label: "简中",
      name: "简体中文（马来西亚）",
      title: "马来西亚简体中文",
      locale: "zh-MY"
    },
    default: "en"
  },

  /* ══════════════════════════════════════════════════
     2. TRIP PROFILE & METADATA
     ══════════════════════════════════════════════════ */
  trip: {
    title: {
      en: "Hamburg Winter City Break",
      zh: "漢堡冬日城市假期",
      "zh-cn": "汉堡冬日城市假期"
    },
    year: "2026",
    eyebrow: {
      en: "🇩🇪 Germany · Advent Season",
      zh: "🇩🇪 德國 · 聖誕降臨節",
      "zh-cn": "🇩🇪 德国 · 圣诞降临节"
    },
    destination: {
      en: "Hamburg, Germany",
      zh: "漢堡，德國",
      "zh-cn": "汉堡，德国"
    },
    subtitle: {
      en: "Nov 26 — Nov 28 · Speicherstadt · HafenCity · Jungfernstieg · Christmas Markets",
      zh: "11月26日 — 11月28日 · 倉庫城 · 港城 · 少女大道 · 聖誕市集",
      "zh-cn": "11月26日 — 11月28日 · 仓库城 · 港城 · 少女大道 · 圣诞市集"
    },
    dates: {
      start: "2026-11-26",
      end: "2026-11-28",
      display: {
        en: "Nov 26 – Nov 28, 2026",
        zh: "2026年11月26日 — 11月28日",
        "zh-cn": "2026年11月26日 — 11月28日"
      }
    },
    countdown: {
      before: {
        en: "Countdown to Hamburg Departure (BA960)",
        zh: "漢堡啟程倒數計時（英航 BA960）",
        "zh-cn": "汉堡启程倒数计时（英航 BA960）"
      },
      during: {
        en: "You are in Hamburg! Enjoy the festive magic & harbour lights!",
        zh: "您正置身於漢堡！盡情享受冬日聖誕市集與港口浪漫！",
        "zh-cn": "您正置身于汉堡！尽情享受冬日圣诞市集与港口浪漫！"
      },
      after: {
        en: "Trip Completed · Unforgettable Hamburg Winter Memories",
        zh: "旅程圓滿結束 · 難忘的漢堡冬日回憶",
        "zh-cn": "旅程圆满结束 · 难忘的汉堡冬日回忆"
      }
    },
    durationDays: 3,
    heroBadges: [
      {
        icon: "🎄",
        text: { en: "3 Days", zh: "3天行程", "zh-cn": "3天行程" }
      },
      {
        icon: "💑",
        text: { en: "Couple", zh: "情侶同遊", "zh-cn": "情侣同游" }
      },
      {
        icon: "✈️",
        text: { en: "BA960 / BA967", zh: "英航 BA960 / BA967", "zh-cn": "英航 BA960 / BA967" }
      },
      {
        icon: "🏨",
        text: { en: "Courtyard Marriott", zh: "萬豪萬怡酒店", "zh-cn": "万豪万怡酒店" }
      },
      {
        icon: "🚇",
        text: { en: "Public Transit", zh: "公共交通", "zh-cn": "公共交通" }
      }
    ]
  },

  /* ══════════════════════════════════════════════════
     3. PARTY MEMBERS & TRAVELER PROFILE
     ══════════════════════════════════════════════════ */
  party: {
    size: 2,
    type: "couple",
    label: {
      en: "Couple (2 Adults)",
      zh: "情侶（2位成人）",
      "zh-cn": "情侣（2位成人）"
    },
    members: [
      {
        name: "Traveler 1",
        role: { en: "Lead Planner", zh: "主要計劃者", "zh-cn": "主要计划者" },
        passport: "EU Passport"
      },
      {
        name: "Traveler 2",
        role: { en: "Co-Traveller", zh: "同行旅伴", "zh-cn": "同行旅伴" },
        passport: "Non-EU Visa-Exempt"
      }
    ]
  },

  /* ══════════════════════════════════════════════════
     4. ORIGIN COUNTRY, PASSPORT & ENTRY RULES
     ══════════════════════════════════════════════════ */
  origin: {
    country: {
      en: "United Kingdom",
      zh: "英國",
      "zh-cn": "英国"
    },
    residence: "UK",
    passportsHeld: ["EU Passport", "Non-EU Visa-Exempt"],
    visaSummary: {
      en: "EU passport: visa-free Schengen freedom of movement. Non-EU visa-exempt passport: 90-day visa-free entry to Schengen within 180 days. All passports must be valid for at least 3 months beyond the departure date.",
      zh: "歐盟護照：享申根區免簽自由流動。非歐盟免簽護照：享180天內最多90天申根免簽。所有護照須於出境後保留至少3個月有效期。",
      "zh-cn": "欧盟护照：享申根区免签自由流动。非欧盟免签护照：享180天内最多90天申根免签。所有护照须于出境后保留至少3个月有效期。"
    }
  },

  /* ══════════════════════════════════════════════════
     5. CURRENCY & EXCHANGE RATES
     ══════════════════════════════════════════════════ */
  currency: {
    base: {
      code: "EUR",
      symbol: "€",
      name: "Euro"
    },
    targets: [
      {
        code: "gbp",
        symbol: "£",
        name: "GBP (£)",
        fallbackRate: 0.85
      },
      {
        code: "eur",
        symbol: "€",
        name: "EUR (€)",
        fallbackRate: 1.00
      },
      {
        code: "myr",
        symbol: "RM",
        name: "MYR (RM)",
        fallbackRate: 5.10
      }
    ],
    defaultTarget: "gbp"
  },

  /* ══════════════════════════════════════════════════
     6. THEME & VISUAL PALETTE PRESETS
     ══════════════════════════════════════════════════ */
  theme: {
    preset: "nordic-aurora",
    defaultTheme: "dark"
  },

  /* ══════════════════════════════════════════════════
     7. TRANSIT ROUTE BOARD STYLE PRESET
     "swiss-train" — closest available to Deutsche Bahn aesthetic
     ══════════════════════════════════════════════════ */
  routeBoardStyle: "swiss-train",

  /* ══════════════════════════════════════════════════
     8. FEATURE FLAGS (Toggle sections on/off)
     ══════════════════════════════════════════════════ */
  features: {
    showOverview: true,
    showMilestoneBoard: true,
    showFlights: true,
    showMap: true,
    showTips: true,
    showItinerary: true,
    showFood: true,
    showPacking: true,
    showEssentials: true,
    showBudget: true,
    showHotels: true,
    showTransit: true
  }
};

// Export to global scope for browser execution
if (typeof window !== 'undefined') {
  window.TRIP_CONFIG = TRIP_CONFIG;
}
