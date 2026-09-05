/**
 * @file ui.js
 * @description UI INTERACTIONS & CONTROLLER MODULE — Trip Planner.
 *
 * Controls language switching, dark/light theme toggle, theme presets,
 * accordion behaviors, sticky navigation, scroll-reveal, particle effects,
 * and hotel search form integration.
 *
 * All language codes, theme preset keys, and feature flags are read from
 * window.TRIP_CONFIG (data/config.js). This file must NOT hardcode any
 * language codes, destination names, or trip-specific strings.
 *
 * Key behaviors:
 *   - Language switcher: rendered dynamically from TRIP_CONFIG.languages.
 *     Hidden automatically in single-language mode (secondary: null).
 *   - Theme: preset applied via data-theme-preset attribute on <html>;
 *     dark/light toggle stored in localStorage as 'user-theme'.
 *   - Day accordion: lazy-initializes per-day mini maps via map.js.
 *   - Region filters: derived from ITINERARY_DATA day.region fields.
 *
 * @see data/config.js       — Language codes, theme preset, feature flags.
 * @see js/render.js         — renderBilingualText() for bilingual span output.
 * @see js/map.js            — initDayMiniMap() called on accordion open.
 * @see AGENTS.md            — Architecture and data-driven pattern rules.
 *
 * AGENTS: Do not hardcode language codes (e.g. 'en', 'zh') in this file
 * except as default fallbacks when TRIP_CONFIG is unavailable. All language
 * logic must read from TRIP_CONFIG.languages.
 */

/* ═══════════════════════════════════════════════════
   1. LANGUAGE SWITCHER (Always Visible & Instant)
   ═══════════════════════════════════════════════════ */
/**
 * Initializes the language state on page load.
 * Reads the saved preference from localStorage (or falls back to the default
 * defined in TRIP_CONFIG.languages.default), then renders the language toggle
 * buttons dynamically from config. In single-language mode (secondary: null)
 * the entire switcher element is hidden.
 */
function initLanguage() {
  const config = window.TRIP_CONFIG;
  const primaryLang   = (config && config.languages && config.languages.primary)   ? config.languages.primary.code   : 'en';
  const secondaryLang = (config && config.languages && config.languages.secondary) ? config.languages.secondary.code : null;
  const tertiaryLang  = (config && config.languages && config.languages.tertiary)  ? config.languages.tertiary.code  : null;
  const defaultLang   = (config && config.languages && config.languages.default)   ? config.languages.default         : 'en';

  const savedLang = localStorage.getItem('user-lang') || defaultLang;
  setLanguage(savedLang);

  // Render language toggle buttons dynamically from config
  const switcher = document.querySelector('.lang-switcher');
  if (switcher && config && config.languages) {
    if (!config.languages.secondary) {
      // Single-language mode: no switcher needed
      switcher.style.display = 'none';
      return;
    }

    // Build buttons: always primary + secondary, optionally tertiary
    let html = `
      <button class="lang-btn${savedLang === primaryLang ? ' active' : ''}" data-lang="${primaryLang}" title="${config.languages.primary.title || config.languages.primary.name || 'English (UK)'}">
        ${config.languages.primary.label || 'EN'}
      </button>
      <button class="lang-btn${savedLang === secondaryLang ? ' active' : ''}" data-lang="${secondaryLang}" title="${config.languages.secondary.title || config.languages.secondary.name || '香港繁體中文'}">
        ${config.languages.secondary.label || '繁中'}
      </button>`;

    if (tertiaryLang) {
      html += `
      <button class="lang-btn${savedLang === tertiaryLang ? ' active' : ''}" data-lang="${tertiaryLang}" title="${config.languages.tertiary.title || config.languages.tertiary.name || '马来西亚简体中文'}">
        ${config.languages.tertiary.label || '简中'}
      </button>`;
    }

    switcher.innerHTML = html;

    switcher.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const lang = e.target.dataset.lang;
        setLanguage(lang);
        switcher.querySelectorAll('.lang-btn').forEach(b => {
          b.classList.toggle('active', b.dataset.lang === lang);
        });
      });
    });
  }
}

/**
 * Sets the active display language, persists it to localStorage, and
 * updates the body class list so base.css visibility rules apply.
 *
 * Class strategy:
 *   - Always adds 'lang-primary' or 'lang-secondary' (semantic, for base.css).
 *   - Also adds 'lang-{code}' (specific, for targeted CSS rules).
 *   - Dynamically removes ALL existing lang-* classes first, so any language
 *     code a fork might use (lang-fr, lang-de, etc.) is correctly cleared.
 *
 * Dispatches a 'langchange' CustomEvent so map.js can update popup labels.
 *
 * AGENTS: Do not add hardcoded language codes to the removal list below.
 * The dynamic classList scan handles all codes automatically.
 *
 * @param {string} lang - Language code to activate (e.g. 'en', 'zh', 'fr').
 */
function setLanguage(lang) {
  const config = window.TRIP_CONFIG;
  const primaryCode   = (config && config.languages && config.languages.primary)   ? config.languages.primary.code   : 'en';
  const secondaryCode = (config && config.languages && config.languages.secondary) ? config.languages.secondary.code : null;
  const tertiaryCode  = (config && config.languages && config.languages.tertiary)  ? config.languages.tertiary.code  : null;

  localStorage.setItem('user-lang', lang);

  // Dynamically remove ALL lang-* classes (handles any language code, not just en/zh)
  const toRemove = Array.from(document.body.classList).filter(cls => cls.startsWith('lang-'));
  document.body.classList.remove(...toRemove, 'lang-primary', 'lang-secondary', 'lang-tertiary');

  if (lang === primaryCode) {
    document.body.classList.add('lang-primary', `lang-${primaryCode}`);
  } else if (tertiaryCode && lang === tertiaryCode) {
    document.body.classList.add('lang-tertiary', `lang-${tertiaryCode}`);
  } else {
    document.body.classList.add('lang-secondary', `lang-${lang}`);
  }

  window.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

/* ═══════════════════════════════════════════════════
   2. THEME CONTROLLER & 7 PRESETS
   ═══════════════════════════════════════════════════
   Applies the palette preset (data-theme-preset on <html>) from config.js
   and toggles dark/light mode (data-theme). Both are persisted in localStorage.
   Dispatches a 'themechange' CustomEvent consumed by map.js to swap tile styles.

   AGENTS — adding a new theme preset:
     1. Define it in css/palette.css following the existing :root[data-theme-preset] pattern.
     2. Include BOTH light mode and dark mode variable sets.
     3. Register its key in the data/config.js theme.preset comment block.
     4. Add it to showcase.html and update README.md.
     NEVER rename or remove an existing preset key — forks depend on them.
   ======================================================= */
/**
 * Initializes the color theme on page load.
 * Applies the palette preset from TRIP_CONFIG.theme.preset as a
 * data-theme-preset attribute on <html>, then restores the saved
 * dark/light mode from localStorage (falling back to defaultTheme).
 * Binds click handlers on any .theme-toggle or #theme-toggle-btn elements.
 */
function initTheme() {
  const config       = window.TRIP_CONFIG;
  const preset       = (config && config.theme && config.theme.preset)       ? config.theme.preset       : 'midnight-navy';
  const defaultTheme = (config && config.theme && config.theme.defaultTheme) ? config.theme.defaultTheme : 'light';

  // Apply palette preset (CSS vars keyed off [data-theme-preset] in palette.css)
  document.documentElement.setAttribute('data-theme-preset', preset);

  // Restore saved dark/light preference
  const savedTheme = localStorage.getItem('user-theme') || defaultTheme;
  applyTheme(savedTheme);

  // Bind theme toggle buttons (moon/sun icon in nav)
  const toggleBtns = document.querySelectorAll('.theme-toggle, #theme-toggle-btn');
  toggleBtns.forEach(toggleBtn => {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next    = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  });
}

/**
 * Applies a dark/light theme mode.
 * Sets data-theme on <html>, persists to localStorage, dispatches a
 * 'themechange' event so map.js can swap OpenFreeMap tile styles
 * (Positron for light, Fiord for dark). Uses .theme-transitioning to
 * prevent color flash during the CSS transition.
 *
 * @param {'light'|'dark'} theme - The theme mode to activate.
 */
function applyTheme(theme) {
  document.body.classList.add('theme-transitioning');
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('user-theme', theme);

  // map.js listens to this event to swap OpenFreeMap tile styles
  window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));

  setTimeout(() => {
    document.body.classList.remove('theme-transitioning');
  }, 350);
}

/* ═══════════════════════════════════════════════════
   3. ITINERARY ACCORDION & REGION FILTER TABS
   ═══════════════════════════════════════════════════ */
/**
 * Toggles the open/closed state of a day accordion card.
 * On first open, lazily initializes the per-day mini map via map.js
 * (150ms delay lets the CSS transition complete before MapLibre renders).
 *
 * Called inline from the onclick attribute on each .day-header div,
 * injected by render.js → renderItinerary().
 *
 * @param {string} dayId - The id attribute of the .day-card element.
 */
function toggleDayAccordion(dayId) {
  const card = document.getElementById(dayId);
  if (!card) return;

  const isOpen = card.classList.contains('open');
  card.classList.toggle('open', !isOpen);

  // Lazy-init the mini map on first expand (avoids rendering off-screen maps)
  if (!isOpen && typeof initDayMiniMap === 'function') {
    setTimeout(() => { initDayMiniMap(dayId); }, 150);
  }
}

/**
 * Builds the region filter tab strip above the itinerary timeline.
 * Derives the region set dynamically from ITINERARY_DATA[].region fields.
 * The regionLabels dictionary below provides human-readable bilingual names
 * for the 5 bundled example plans; new forks can add entries or rely on the
 * auto-capitalize fallback for unlisted region slugs.
 *
 * AGENTS: The regionLabels object below is EXAMPLE DATA from the 5 bundled
 * trip plans. It is NOT trip configuration — do not treat it as a source of
 * truth for the active fork. If a region slug is missing from this list, the
 * code auto-generates a capitalized label from the slug (e.g. 'my-city' → 'My City').
 * To add labels for a new example plan, append entries following the existing pattern.
 */
function initDayFilters() {
  const itinerary = window.ITINERARY_DATA || [];
  const filtersContainer = document.getElementById('day-filters-container') || document.getElementById('day-filters');
  if (!filtersContainer || itinerary.length === 0) return;

  // ── Region display label dictionary ──
  // Maps region slug → { en, zh, 'zh-cn' } trilingual label.
  const regionLabels = {
    'all': {
      en: `All Days (${itinerary.length} Days)`,
      zh: `全部行程（${itinerary.length}天）`,
      'zh-cn': `全部行程（${itinerary.length}天）`
    },
    'hafencity': {
      en: 'HafenCity & Speicherstadt',
      zh: '港城與倉庫城',
      'zh-cn': '港城与仓库城'
    },
    'city-centre': {
      en: 'City Centre & Christmas Markets',
      zh: '市中心與聖誕市集',
      'zh-cn': '市中心与圣诞市集'
    },
    'harbour': {
      en: 'Harbour & Landungsbrücken',
      zh: '港口與輪船碼頭',
      'zh-cn': '港口与轮船码头'
    }
  };

  const regionsMap = new Map();
  regionsMap.set('all', regionLabels['all']);

  itinerary.forEach(d => {
    if (d.region && !regionsMap.has(d.region)) {
      const rawName = d.region.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      const lbl = d.regionLabel || regionLabels[d.region] || { en: rawName, zh: rawName };
      regionsMap.set(d.region, lbl);
    }
  });

  filtersContainer.innerHTML = Array.from(regionsMap.entries()).map(([r, lbl]) => `
    <button class="day-tab${r === 'all' ? ' active' : ''}" data-filter="${r}">
      ${renderBilingualText(lbl)}
    </button>
  `).join('');

  filtersContainer.querySelectorAll('.day-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      const filter = e.currentTarget.dataset.filter;
      filtersContainer.querySelectorAll('.day-tab').forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');

      document.querySelectorAll('.day-card').forEach(card => {
        if (filter === 'all' || card.dataset.region === filter) {
          card.style.display = 'block';
          if (filter !== 'all') {
            card.classList.add('open');
            if (typeof initDayMiniMap === 'function') {
              setTimeout(() => { initDayMiniMap(card.id); }, 150);
            }
          }
        } else {
          card.style.display = 'none';
        }
      });

      if (filter !== 'all') {
        const target = document.querySelector(`.day-card[data-region="${filter}"]`);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

/* ═══════════════════════════════════════════════════
   4. STICKY NAVIGATION & SCROLL SPY
   ======================================================= */
/**
 * Initializes sticky nav shadow on scroll, mobile hamburger toggle,
 * and IntersectionObserver-based scroll-reveal animations (.reveal elements).
 */
function initNavigation() {
  const navbar = document.querySelector('.nav-bar');
  const toggle = document.querySelector('.nav-toggle') || document.getElementById('nav-toggle-btn');
  const links = document.querySelector('.nav-links');
  const progressBar = document.getElementById('reading-progress');
  const backToTopBtn = document.getElementById('back-to-top-btn');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    // Sticky nav shadow
    if (scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    // Top Reading Progress Bar
    if (progressBar) {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalScroll > 0 ? (scrollY / totalScroll) * 100 : 0;
      progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
    }

    // Floating Back to Top Button
    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile Drawer Toggle
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scroll Reveal Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // Scroll Spy for Top Nav Links & Mobile Bottom Nav
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const mobileTabs = document.querySelectorAll('.mobile-bottom-nav .mobile-nav-tab[href]');

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        // Desktop nav highlighting
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          link.classList.toggle('active', href === `#${id}`);
        });
        // Mobile bottom nav tab highlighting
        mobileTabs.forEach(tab => {
          const sec = tab.getAttribute('data-section') || tab.getAttribute('href')?.replace('#', '');
          tab.classList.toggle('active', sec === id);
        });
      }
    });
  }, { rootMargin: '-20% 0px -55% 0px' });

  sections.forEach(sec => spyObserver.observe(sec));
}

/* ═══════════════════════════════════════════════════
   5. HERO PARTICLES GENERATOR
   ======================================================= */
/**
 * Generates 24 floating particle elements inside .hero-particles and appends
 * them to the DOM. Each particle gets a random size, horizontal start position,
 * animation duration, and delay for a natural floating effect.
 * The animation itself is defined in sections.css (@keyframes floatUp).
 */
function initHeroParticles() {
  const container = document.querySelector('.hero-particles');
  if (!container) return;

  const count = 24;
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'hero-particle';
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 8 + 6}s`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(particle);
  }
}

/* ═══════════════════════════════════════════════════
   6. HOTEL SEARCH FORM HANDLER (Booking.com Direct)
   ======================================================= */
/**
 * Binds the hotel search form and Quick Leg pill interactions.
 * - Clicking a .quick-leg-pill pre-fills the destination/date inputs.
 * - Submitting the #hotel-search-form opens Booking.com with pre-filled params.
 * Note: Initial form values are set by render.js → renderHotels(), not here.
 */
function initHotelSearch() {
  // Quick Leg Pills
  const container = document.getElementById('hotel-quick-legs-container');
  if (container) {
    container.addEventListener('click', (e) => {
      const pill = e.target.closest('.quick-leg-pill');
      if (!pill) return;

      container.querySelectorAll('.quick-leg-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const destInput = document.getElementById('hotel-dest');
      const inInput = document.getElementById('hotel-checkin');
      const outInput = document.getElementById('hotel-checkout');

      if (destInput && pill.dataset.dest) destInput.value = pill.dataset.dest;
      if (inInput && pill.dataset.checkin) inInput.value = pill.dataset.checkin;
      if (outInput && pill.dataset.checkout) outInput.value = pill.dataset.checkout;
    });
  }

  // Form Submit
  const form = document.getElementById('hotel-search-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const dest = document.getElementById('hotel-dest')?.value || '';
      const checkin = document.getElementById('hotel-checkin')?.value || '';
      const checkout = document.getElementById('hotel-checkout')?.value || '';
      const guests = document.getElementById('hotel-guests')?.value || '2';

      const url = `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(dest)}&checkin=${checkin}&checkout=${checkout}&group_adults=${guests}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }
}

/* ═══════════════════════════════════════════════════
   7. ITINERARY ACTIONS: EXPAND ALL & .ICS CALENDAR
   ═══════════════════════════════════════════════════ */

/**
 * Toggles all day accordions open or closed simultaneously.
 */
function toggleAllAccordions() {
  const cards = document.querySelectorAll('.day-card');
  const isAnyClosed = Array.from(cards).some(c => !c.classList.contains('open'));
  const btnIcon = document.getElementById('itinerary-toggle-all-icon');
  const btnLabel = document.getElementById('itinerary-toggle-all-label');

  cards.forEach(card => {
    card.classList.toggle('open', isAnyClosed);
    if (isAnyClosed && typeof initDayMiniMap === 'function') {
      setTimeout(() => { initDayMiniMap(card.id); }, 150);
    }
  });

  if (btnIcon && btnLabel) {
    if (isAnyClosed) {
      btnIcon.innerText = '📁';
      btnLabel.innerHTML = renderBilingualText({ en: 'Collapse All', zh: '全部收起', 'zh-cn': '全部收起' });
    } else {
      btnIcon.innerText = '📂';
      btnLabel.innerHTML = renderBilingualText({ en: 'Expand All', zh: '全部展開', 'zh-cn': '全部展开' });
    }
  }
}
window.toggleAllAccordions = toggleAllAccordions;

/**
 * Generates and triggers client-side download of a complete RFC 5545 iCalendar (.ics) file.
 */
function downloadItineraryICS() {
  const config = window.TRIP_CONFIG || {};
  const siteData = window.SITE_DATA || {};
  const itinerary = window.ITINERARY_DATA || [];

  const tripTitle = (config.trip && config.trip.title && config.trip.title.en) || 'Trip Itinerary';
  const calName = (config.trip && config.trip.title && config.trip.title.en) || 'Trip Itinerary 2026';
  const prodId = '-//Trip Planner//EN';

  const icsLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    `PRODID:${prodId}`,
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:${calName}`,
    'X-WR-TIMEZONE:Europe/Berlin'
  ];

  function escapeIcs(str) {
    if (!str) return '';
    return String(str).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
  }

  // 1. Confirmed Flights
  if (siteData.flights && Array.isArray(siteData.flights.legs)) {
    siteData.flights.legs.forEach((f, idx) => {
      const flightCode = f.flightNo || `Flight-${idx + 1}`;
      const depDate = (f.date || '2026-11-26').replace(/-/g, '');
      const depTime = (f.depTime || '08:00').replace(':', '') + '00';
      const arrTime = (f.arrTime || '10:00').replace(':', '') + '00';
      const origin = f.depAirport || f.origin || 'Origin';
      const dest = f.arrAirport || f.dest || 'Destination';
      const desc = (f.notes && f.notes.en) || `Flight ${flightCode} ${origin} -> ${dest}`;

      icsLines.push(
        'BEGIN:VEVENT',
        `UID:flight-${idx}-${depDate}@tripplanner`,
        'DTSTAMP:20261101T000000Z',
        `DTSTART:${depDate}T${depTime}Z`,
        `DTEND:${depDate}T${arrTime}Z`,
        `SUMMARY:✈️ ${flightCode}: ${origin} -> ${dest}`,
        `DESCRIPTION:${escapeIcs(desc)}`,
        `LOCATION:${escapeIcs(origin)}`,
        'STATUS:CONFIRMED',
        'END:VEVENT'
      );
    });
  }

  // 2. Confirmed Accommodation Check-In
  if (siteData.hotels && Array.isArray(siteData.hotels.legs)) {
    siteData.hotels.legs.forEach((h, idx) => {
      const checkinDate = (h.checkin || (config.trip && config.trip.dates && config.trip.dates.start) || '2026-11-26').replace(/-/g, '');
      const hTitle = (h.title && h.title.en) || 'Hotel Stay';
      const hDesc = (h.desc && h.desc.en) || `Check-in at ${hTitle}. Address: ${h.address || ''}`;
      icsLines.push(
        'BEGIN:VEVENT',
        `UID:hotel-${idx}-${checkinDate}@tripplanner`,
        'DTSTAMP:20261101T000000Z',
        `DTSTART:${checkinDate}T140000Z`,
        `DTEND:${checkinDate}T153000Z`,
        `SUMMARY:🏨 Hotel Check-In: ${escapeIcs(hTitle)}`,
        `DESCRIPTION:${escapeIcs(hDesc)}`,
        `LOCATION:${escapeIcs(h.address || (config.trip && config.trip.destination && config.trip.destination.en) || '')}`,
        'STATUS:CONFIRMED',
        'END:VEVENT'
      );
    });
  }

  // 3. Day-by-Day Schedule
  if (Array.isArray(itinerary)) {
    itinerary.forEach(day => {
      const dayDate = day.date && day.date.includes('2026')
        ? day.date.replace(/-/g, '')
        : (day.id === 'day-1' ? '20261126' : day.id === 'day-2' ? '20261127' : '20261128');

      if (Array.isArray(day.blocks)) {
        day.blocks.forEach((block, bIdx) => {
          const act = block.activity || {};
          const actTitle = (act.title && act.title.en) || `Day ${day.dayNum} Activity`;
          const actDesc = (act.desc && act.desc.en) || '';
          const loc = (act.locations && act.locations[0] && act.locations[0].label && act.locations[0].label.en) || '';
          const startHours = [10, 14, 18];
          const startHour = startHours[bIdx % startHours.length];
          const startTime = String(startHour).padStart(2, '0') + '0000';
          const endTime = String(startHour + 2).padStart(2, '0') + '0000';

          icsLines.push(
            'BEGIN:VEVENT',
            `UID:act-${day.id || day.dayNum}-${bIdx}@tripplanner`,
            'DTSTAMP:20261101T000000Z',
            `DTSTART:${dayDate}T${startTime}Z`,
            `DTEND:${dayDate}T${endTime}Z`,
            `SUMMARY:📍 ${escapeIcs(actTitle)}`,
            `DESCRIPTION:${escapeIcs(actDesc)}`,
            `LOCATION:${escapeIcs(loc)}`,
            'STATUS:CONFIRMED',
            'END:VEVENT'
          );
        });
      }
    });
  }

  icsLines.push('END:VCALENDAR');

  const filename = (tripTitle.replace(/[^a-zA-Z0-9_-]/g, '_')) + '.ics';
  const blob = new Blob([icsLines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast({
    en: `✓ Calendar downloaded: ${filename}`,
    zh: `✓ 日曆檔案已下載：${filename}`,
    'zh-cn': `✓ 日历文件已下载：${filename}`
  });
}
window.downloadItineraryICS = downloadItineraryICS;

/* ═══════════════════════════════════════════════════
   8. WEB SPEECH API: GERMAN AUDIO PRONUNCIATION
   ═══════════════════════════════════════════════════ */

/**
 * Speaks a German phrase using the Web Speech API with de-DE voice.
 */
function playGermanPhrase(phrase, btnEl) {
  if (!('speechSynthesis' in window)) {
    showToast({ en: 'Speech synthesis not supported by your browser.', zh: '您的瀏覽器不支援語音朗讀功能。', 'zh-cn': '您的浏览器不支持语音朗读功能。' });
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(phrase);
  utterance.lang = 'de-DE';
  utterance.rate = 0.88;

  const voices = window.speechSynthesis.getVoices();
  const deVoice = voices.find(v => v.lang && (v.lang === 'de-DE' || v.lang.startsWith('de')));
  if (deVoice) utterance.voice = deVoice;

  if (btnEl) btnEl.classList.add('speaking');

  utterance.onend = () => { if (btnEl) btnEl.classList.remove('speaking'); };
  utterance.onerror = () => { if (btnEl) btnEl.classList.remove('speaking'); };

  window.speechSynthesis.speak(utterance);
}
window.playGermanPhrase = playGermanPhrase;

/* ═══════════════════════════════════════════════════
   9. GERMAN TAXI FLASHCARD MODAL CONTROLS
   ═══════════════════════════════════════════════════ */

function openTaxiModal(dest = 'hotel') {
  const modal = document.getElementById('taxi-modal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    switchTaxiDestination(dest);
  }
}
window.openTaxiModal = openTaxiModal;

function closeTaxiModal() {
  const modal = document.getElementById('taxi-modal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}
window.closeTaxiModal = closeTaxiModal;

function switchTaxiDestination(dest) {
  const hotelBtn = document.getElementById('taxi-btn-hotel');
  const airportBtn = document.getElementById('taxi-btn-airport');
  const hotelDisplay = document.getElementById('taxi-display-hotel');
  const airportDisplay = document.getElementById('taxi-display-airport');

  if (dest === 'airport') {
    airportBtn?.classList.add('active');
    hotelBtn?.classList.remove('active');
    if (airportDisplay) airportDisplay.style.display = 'block';
    if (hotelDisplay) hotelDisplay.style.display = 'none';
  } else {
    hotelBtn?.classList.add('active');
    airportBtn?.classList.remove('active');
    if (hotelDisplay) hotelDisplay.style.display = 'block';
    if (airportDisplay) airportDisplay.style.display = 'none';
  }
}
window.switchTaxiDestination = switchTaxiDestination;

// ESC key to close modal
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeTaxiModal();
});
