/**
 * @file site-data.js
 * @description DATA SOURCE — All non-itinerary structured content for the Hamburg 2026 trip.
 * Sets window.SITE_DATA for consumption by render.js and map.js.
 *
 * Hamburg, Germany · Nov 26–28, 2026 · Couple · Christmas Markets Edition
 */

const SITE_DATA = {
  /* ══════════════════════════════════════════════════
     1. OVERVIEW CARDS
     ══════════════════════════════════════════════════ */
  overview: {
    cards: [
      {
        id: "overview-pace",
        icon: "🎄",
        title: {
          en: "Pace & Rhythm",
          zh: "步調節奏",
          "zh-cn": "步调节奏"
        },
        desc: {
          en: "Leisurely festive pace — 3 to 4 highlights per day, crafted for a relaxed Advent couple's escape with ample time for market browsing, harbour walks and candlelit dinners.",
          zh: "悠閒歡樂的節慶步調，每日精選3至4個亮點，完美設計為輕鬆的降臨節情侶短旅，留有充裕時間逛聖誕市集、漫步港岸及享受燭光晚宴。",
          "zh-cn": "悠闲欢乐的节庆步调，每日精选3至4个亮点，完美设计为轻松的降临节情侣短旅，留有充裕时间逛圣诞市集、漫步港岸及享受烛光晚宴。"
        }
      },
      {
        id: "overview-transport",
        icon: "🚇",
        title: {
          en: "Transport",
          zh: "交通方式",
          "zh-cn": "交通方式"
        },
        desc: {
          en: "Hamburg's HVV public transit network (U-Bahn, S-Bahn & buses) covers all key attractions. The Hamburg Card offers unlimited travel plus free museum entry — ideal for a 3-day city break.",
          zh: "漢堡HVV公共交通網絡（地鐵、城郊列車及巴士）覆蓋所有主要景點。漢堡城市卡提供無限次乘車及免費博物館入場優惠，非常適合3天城市短旅。",
          "zh-cn": "汉堡HVV公共交通网络（地铁、城郊列车及巴士）覆盖所有主要景点。汉堡城市卡提供无限次乘车及免费博物馆入场优惠，非常适合3天城市短旅。"
        }
      },
      {
        id: "overview-weather",
        icon: "🌨️",
        title: {
          en: "Weather & Climate",
          zh: "氣候與溫度",
          "zh-cn": "气候与温度"
        },
        desc: {
          en: "Late November Hamburg is cold and moody — expect 2–8°C, short daylight hours (dark by 4:30 PM), occasional drizzle or sleet. Pack thermal layers, a waterproof coat, and warming gloves for magical golden-lit market evenings.",
          zh: "11月底的漢堡天氣寒冷陰沉，氣溫約2–8°C，日照時間短（下午4點半已入黑），間有毛毛雨或小雪。攜帶保暖內層、防水外套及手套，感受金光閃閃的聖誕市集夜晚魔力。",
          "zh-cn": "11月底的汉堡天气寒冷阴沉，气温约2–8°C，日照时间短（下午4点半已入黑），间有毛毛雨或小雪。携带保暖内层、防水外套及手套，感受金光闪闪的圣诞市集夜晚魔力。"
        }
      },
      {
        id: "overview-travelers",
        icon: "🛂",
        title: {
          en: "Party & Entry",
          zh: "同行成員與入境",
          "zh-cn": "同行成员与入境"
        },
        desc: {
          en: "2 Adults. Ian: British / Portuguese (EU) passport — <strong>visa-free Schengen entry</strong>. Partner: Malaysian passport — <strong>visa-free for 90 days in Schengen since 2024</strong>. No visa application required for either traveller.",
          zh: "2位成人。Ian持英國/葡萄牙（歐盟）護照 — <strong>申根區免簽入境</strong>。伴侶持馬來西亞護照 — <strong>自2024年起申根區90天免簽</strong>。兩位旅客均無需辦理簽證。",
          "zh-cn": "2位成人。Ian持英国/葡萄牙（欧盟）护照 — <strong>申根区免签入境</strong>。伴侣持马来西亚护照 — <strong>自2024年起申根区90天免签</strong>。两位旅客均无需办理签证。"
        }
      }
    ],

    /* ── Journey Milestone Route Board & Global Map Stops ── */
    routeBoard: {
      type: "rail",
      style: "swiss-train",
      badge: "HVV · Hamburg Verkehrsverbund",
      lineTitle: {
        en: "Hamburg Winter City Break · Advent 2026",
        zh: "漢堡冬日城市線 · 2026降臨節",
        "zh-cn": "汉堡冬日城市线 · 2026降临节"
      },
      direction: {
        en: "Bound for Speicherstadt",
        zh: "往 倉庫城 方向",
        "zh-cn": "往 仓库城 方向"
      }
    },

    routeStops: [
      {
        code: "01",
        label: "HBF",
        nameNative: "Hamburg Hbf",
        nameRomaji: "Hamburg Central",
        dotClass: "hamburg-hbf",
        name: {
          en: "Hamburg Hauptbahnhof",
          zh: "漢堡中央車站 (Hamburg Hauptbahnhof)",
          "zh-cn": "汉堡中央车站 (Hamburg Hauptbahnhof)"
        },
        days: { en: "Day 1 Arrival", zh: "第1天 抵達", "zh-cn": "第1天 抵达" },
        desc: {
          en: "Gateway to Hamburg. Direct S-Bahn connections from airport (S1).",
          zh: "漢堡門戶。可乘搭S1城郊列車直達機場。",
          "zh-cn": "汉堡门户。可乘搭S1城郊列车直达机场。"
        },
        lat: 53.5532,
        lng: 10.0066,
        color: "#CC0000"
      },
      {
        code: "HTL",
        label: "MAR",
        nameNative: "Courtyard by Marriott",
        nameRomaji: "Adenauerallee 52",
        dotClass: "courtyard-marriott",
        name: {
          en: "Courtyard by Marriott Hamburg City",
          zh: "漢堡市萬怡酒店 (Courtyard by Marriott)",
          "zh-cn": "汉堡市万怡酒店 (Courtyard by Marriott)"
        },
        days: { en: "Hotel Base (2 Nights)", zh: "全程住宿（2晚）", "zh-cn": "全程住宿（2晚）" },
        desc: {
          en: "Trip accommodation base (Adenauerallee 52). 4 min walk to Berliner Tor, direct S1 connection to airport.",
          zh: "全程住宿基地（Adenauerallee 52）。步行4分鐘即達柏林門站，S1直達漢堡機場。",
          "zh-cn": "全程住宿基地（Adenauerallee 52）。步行4分钟即达柏林门站，S1直达汉堡机场。"
        },
        lat: 53.5534,
        lng: 10.0105,
        color: "#0D9488"
      },
      {
        code: "02",
        label: "SPK",
        nameNative: "Speicherstadt",
        nameRomaji: "Warehouse District",
        dotClass: "speicherstadt",
        name: {
          en: "Speicherstadt & Miniatur Wunderland",
          zh: "倉庫城與微型奇蹟世界 (Speicherstadt & Miniatur Wunderland)",
          "zh-cn": "仓库城与微型奇迹世界 (Speicherstadt & Miniatur Wunderland)"
        },
        days: { en: "Day 1–2", zh: "第1–2天", "zh-cn": "第1–2天" },
        desc: {
          en: "UNESCO-listed red-brick canal district and Europe's largest model railway.",
          zh: "聯合國教科文組織世界遺產紅磚運河區及歐洲最大模型鐵路展覽館。",
          "zh-cn": "联合国教科文组织世界遗产红砖运河区及欧洲最大模型铁路展览馆。"
        },
        lat: 53.5435,
        lng: 9.9938,
        color: "#B45309"
      },
      {
        code: "03",
        label: "HFC",
        nameNative: "HafenCity",
        nameRomaji: "Harbour City",
        dotClass: "hafencity",
        name: {
          en: "HafenCity & Elbphilharmonie",
          zh: "港城與易北愛樂廳 (HafenCity & Elbphilharmonie)",
          "zh-cn": "港城与易北爱乐厅 (HafenCity & Elbphilharmonie)"
        },
        days: { en: "Day 1–2", zh: "第1–2天", "zh-cn": "第1–2天" },
        desc: {
          en: "Europe's largest inner-city urban development project and iconic concert hall plaza.",
          zh: "歐洲最大內城都市重建項目及標誌性音樂廳廣場。",
          "zh-cn": "欧洲最大内城都市重建项目及标志性音乐厅广场。"
        },
        lat: 53.5413,
        lng: 9.9842,
        color: "#0369A1"
      },
      {
        code: "04",
        label: "JFS",
        nameNative: "Jungfernstieg",
        nameRomaji: "Inner Alster",
        dotClass: "jungfernstieg",
        name: {
          en: "Jungfernstieg & Inner Alster Lake",
          zh: "少女大道與內阿爾斯特湖 (Jungfernstieg & Binnenalster)",
          "zh-cn": "少女大道与内阿尔斯特湖 (Jungfernstieg & Binnenalster)"
        },
        days: { en: "Day 2", zh: "第2天", "zh-cn": "第2天" },
        desc: {
          en: "Hamburg's premier shopping boulevard and atmospheric lakeside promenade.",
          zh: "漢堡最著名購物大道與迷人湖畔長廊。",
          "zh-cn": "汉堡最著名购物大道与迷人湖畔长廊。"
        },
        lat: 53.5535,
        lng: 9.9945,
        color: "#7C3AED"
      },
      {
        code: "05",
        label: "XMS",
        nameNative: "Weihnachtsmärkte",
        nameRomaji: "Christmas Markets",
        dotClass: "christmas-markets",
        name: {
          en: "Hamburg Christmas Markets",
          zh: "漢堡聖誕市集 (Hamburger Weihnachtsmärkte)",
          "zh-cn": "汉堡圣诞市集 (Hamburger Weihnachtsmärkte)"
        },
        days: { en: "Day 2–3", zh: "第2–3天", "zh-cn": "第2–3天" },
        desc: {
          en: "Rathausmarkt, Binnenalster & Fleetinsel markets — Glühwein, roasted almonds, festive artisan crafts.",
          zh: "市政廳廣場、內阿爾斯特及弗萊廷島市集 — 熱紅酒、烤杏仁、節日手工藝品。",
          "zh-cn": "市政厅广场、内阿尔斯特及弗莱廷岛市集 — 热红酒、烤杏仁、节日手工艺品。"
        },
        lat: 53.5503,
        lng: 9.9998,
        color: "#DC2626"
      },
      {
        code: "06",
        label: "STK",
        nameNative: "St. Pauli / Landungsbrücken",
        nameRomaji: "St Pauli Piers",
        dotClass: "landungsbruecken",
        name: {
          en: "St. Pauli & Landungsbrücken",
          zh: "聖保利區與輪船碼頭 (St. Pauli & Landungsbrücken)",
          "zh-cn": "圣保利区与轮船码头 (St. Pauli & Landungsbrücken)"
        },
        days: { en: "Day 3", zh: "第3天", "zh-cn": "第3天" },
        desc: {
          en: "Historic harbour piers, Fischmarkt, and iconic Elbe waterfront views.",
          zh: "歷史悠久的港口碼頭、魚市場及標誌性易北河海濱景觀。",
          "zh-cn": "历史悠久的港口码头、鱼市场及标志性易北河海滨景观。"
        },
        lat: 53.5450,
        lng: 9.9672,
        color: "#059669"
      }
    ]
  },

  /* ══════════════════════════════════════════════════
     2. PRACTICAL TIPS
     ══════════════════════════════════════════════════ */
  tips: [
    {
      id: "tip-transit-card",
      icon: "🎫",
      title: {
        en: "Hamburg Card & HVV Transit",
        zh: "漢堡城市卡與HVV交通",
        "zh-cn": "汉堡城市卡与HVV交通"
      },
      items: [
        {
          en: "<strong>Hamburg Card (3-Day)</strong> costs approx. €35/person and covers unlimited U-Bahn, S-Bahn, buses and ferries, plus free entry or discounts at 150+ attractions including Miniatur Wunderland, Hamburg Museum, and harbour boat tours.",
          zh: "<strong>漢堡城市卡（3天版）</strong>每人約€35，涵蓋無限次U-Bahn、S-Bahn、巴士及渡輪乘坐，並可免費或享折扣入場150+景點，包括微型奇蹟世界、漢堡博物館及港口遊船。",
          "zh-cn": "<strong>汉堡城市卡（3天版）</strong>每人约€35，涵盖无限次U-Bahn、S-Bahn、巴士及渡轮乘坐，并可免费或享折扣入场150+景点，包括微型奇迹世界、汉堡博物馆及港口游船。"
        },
        {
          en: "Download the <strong>HVV Switch App</strong> for real-time departures, journey planning, and mobile tickets. Hamburg Airport is connected to the city via <strong>S1 S-Bahn</strong> every 10 minutes (25 min to Hauptbahnhof).",
          zh: "下載<strong>HVV Switch App</strong>查看實時班次、規劃路線及購買手機票。漢堡機場透過<strong>S1城郊列車</strong>每10分鐘一班直達市中心（約25分鐘到達中央車站）。",
          "zh-cn": "下载<strong>HVV Switch App</strong>查看实时班次、规划路线及购买手机票。汉堡机场通过<strong>S1城郊列车</strong>每10分钟一班直达市中心（约25分钟到达中央车站）。"
        }
      ]
    },
    {
      id: "tip-xmas-markets",
      icon: "🎄",
      title: {
        en: "Christmas Market Tips",
        zh: "聖誕市集攻略",
        "zh-cn": "圣诞市集攻略"
      },
      items: [
        {
          en: "<strong>Top markets:</strong> Rathausmarkt (largest, most photogenic), Historischer Weihnachtsmarkt at Gerhart-Hauptmann-Platz (most traditional), and the romantic Fleetinsel canal-side market. All are free entry.",
          zh: "<strong>最佳市集：</strong>市政廳廣場市集（最大、最上鏡），格哈特-豪普特曼廣場傳統歷史市集（最具傳統特色），以及浪漫的弗萊廷島運河邊市集。全部免費入場。",
          "zh-cn": "<strong>最佳市集：</strong>市政厅广场市集（最大、最上镜），格哈特-豪普特曼广场传统历史市集（最具传统特色），以及浪漫的弗莱廷岛运河边市集。全部免费入场。"
        },
        {
          en: "Markets are open 11AM–9PM (10PM Fri–Sat). Arrive after dark (4:30PM+) for the full magical atmosphere with golden lights and Glühwein steaming in the cold air. Bring cash — most stalls are cash-only.",
          zh: "市集開放時間為早上11時至晚上9時（週五至六至10時）。入黑後（下午4時30分後）到達方可感受滿溢金光及熱紅酒蒸汽的聖誕魔法氣氛。請攜帶現金，大多數攤位只收現金。",
          "zh-cn": "市集开放时间为上午11时至晚上9时（周五至六至10时）。入黑后（下午4时30分后）到达方可感受满溢金光及热红酒蒸汽的圣诞魔法气氛。请携带现金，大多数摊位只收现金。"
        }
      ]
    },
    {
      id: "tip-clothing",
      icon: "🧥",
      title: {
        en: "Winter Clothing & Cold Weather",
        zh: "冬季穿搭與禦寒建議",
        "zh-cn": "冬季穿搭与御寒建议"
      },
      items: [
        {
          en: "Temperatures drop to near-freezing at night. Essential layers: thermal base (Uniqlo Heattech), mid-layer fleece, and a <strong>waterproof & windproof outer coat</strong>. Hamburg's harbour wind makes it feel significantly colder.",
          zh: "夜間氣溫接近冰點。必備衣物：保暖內衣（Uniqlo Heattech）、中層抓絨衫及<strong>防水防風外套</strong>。漢堡港口強風令體感溫度更低。",
          "zh-cn": "夜间气温接近冰点。必备衣物：保暖内衣（Uniqlo Heattech）、中层抓绒衫及<strong>防水防风外套</strong>。汉堡港口强风令体感温度更低。"
        },
        {
          en: "Bring waterproof ankle boots with good grip (cobblestones get slippery), a warm hat, scarf, and insulated gloves. You'll spend long hours outdoors at markets and the waterfront.",
          zh: "攜帶防水踝靴（具備良好抓地力，石板路濕滑），以及暖帽、圍巾及保暖手套。您將在市集與海濱戶外花費大量時間。",
          "zh-cn": "携带防水踝靴（具备良好抓地力，石板路湿滑），以及暖帽、围巾及保暖手套。您将在市集与海滨户外花费大量时间。"
        }
      ]
    },
    {
      id: "tip-dining",
      icon: "🍽️",
      title: {
        en: "Food, Dining & Local Customs",
        zh: "美食餐飲與當地習俗",
        "zh-cn": "美食餐饮与当地习俗"
      },
      items: [
        {
          en: "<strong>Must-try Hamburg specialities:</strong> Fischbrötchen (fresh fish rolls from Fischmarkt stalls), Labskaus (sailor's corned beef hash with beetroot), Franzbrötchen (cinnamon pastry), and craft beer from local breweries like Ratsherrn.",
          zh: "<strong>漢堡必嚐美食：</strong>魚卷麵包（魚市場攤位現做鮮魚三明治）、水手燉肉（搭配甜菜根的傳統鹹牛肉料理）、Franzbrötchen（肉桂酥餅）及本地精釀啤酒（如Ratsherrn）。",
          "zh-cn": "<strong>汉堡必尝美食：</strong>鱼卷面包（鱼市场摊位现做鲜鱼三明治）、水手炖肉（搭配甜菜根的传统咸牛肉料理）、Franzbrötchen（肉桂酥饼）及本地精酿啤酒（如Ratsherrn）。"
        },
        {
          en: "Tipping in Germany: 10% is standard and appreciated. Most restaurants now accept card payment, but Christmas market stalls are usually <strong>cash-only</strong>. Keep €20–€50 in small bills and coins handy.",
          zh: "德國小費慣例：10%為標準且受歡迎。大多數餐廳現已接受刷卡，但聖誕市集攤位通常<strong>只收現金</strong>。請隨身攜帶€20–€50零錢。",
          "zh-cn": "德国小费惯例：10%为标准且受欢迎。大多数餐厅现已接受刷卡，但圣诞市集摊位通常<strong>只收现金</strong>。请随身携带€20–€50零钱。"
        }
      ]
    }
  ],

  /* ══════════════════════════════════════════════════
     3. PACKING ESSENTIALS CHECKLIST
     ══════════════════════════════════════════════════ */
  packing: [
    {
      id: "pack-clothing",
      icon: "🧥",
      title: {
        en: "Clothing & Winter Layers",
        zh: "服飾與冬季保暖層",
        "zh-cn": "服饰与冬季保暖层"
      },
      items: [
        { id: "p1", en: "Waterproof & windproof outer coat (essential for harbour winds)", zh: "防水防風外套（港口強風必備）", "zh-cn": "防水防风外套（港口强风必备）" },
        { id: "p2", en: "Thermal base layers — top & bottom (Uniqlo Heattech recommended)", zh: "保暖發熱內衣褲（推薦Uniqlo Heattech）", "zh-cn": "保暖发热内衣裤（推荐Uniqlo Heattech）" },
        { id: "p3", en: "Mid-layer fleece or knitted jumper", zh: "中層抓絨衫或針織厚毛衣", "zh-cn": "中层抓绒衫或针织厚毛衣" },
        { id: "p4", en: "Waterproof ankle boots with non-slip grip (cobblestones!)", zh: "防水踝靴（防滑鞋底，石板路必備！）", "zh-cn": "防水踝靴（防滑鞋底，石板路必备！）" },
        { id: "p5", en: "Warm hat, scarf, and insulated gloves", zh: "暖帽、圍巾及保暖手套", "zh-cn": "暖帽、围巾及保暖手套" },
        { id: "p6", en: "Smart casual outfit for Elbphilharmonie plaza & dinner", zh: "輕正式服裝（易北愛樂廳廣場及晚餐用）", "zh-cn": "轻正式服装（易北爱乐厅广场及晚餐用）" }
      ]
    },
    {
      id: "pack-electronics",
      icon: "🔌",
      title: {
        en: "Electronics & Travel Tech",
        zh: "電子用品與實用裝備",
        "zh-cn": "电子用品与实用装备"
      },
      items: [
        { id: "p7", en: "European Type C (Schuko) plug adapter", zh: "歐洲雙圓孔 (Type C) 轉接插頭", "zh-cn": "欧洲双圆孔 (Type C) 转接插头" },
        { id: "p8", en: "High-capacity power bank (cold drains batteries faster)", zh: "大容量便攜充電寶（低溫耗電更快）", "zh-cn": "大容量便携充电宝（低温耗电更快）" },
        { id: "p9", en: "eSIM or European roaming SIM card (e.g. Airalo EU plan)", zh: "歐洲eSIM或實體上網漫遊卡（如Airalo歐洲套餐）", "zh-cn": "欧洲eSIM或实体上网漫游卡（如Airalo欧洲套餐）" },
        { id: "p10", en: "Camera or phone with night/low-light mode for market photography", zh: "相機或手機（具備夜間/弱光拍攝功能，拍攝市集燈景）", "zh-cn": "相机或手机（具备夜间/弱光拍摄功能，拍摄市集灯景）" }
      ]
    },
    {
      id: "pack-documents",
      icon: "🛂",
      title: {
        en: "Documents & Essentials",
        zh: "重要證件與隨身必需品",
        "zh-cn": "重要证件与随身必需品"
      },
      items: [
        { id: "p11", en: "Passports (valid 3+ months after Nov 28, 2026) + printed copies", zh: "護照（11月28日後至少3個月有效）及紙本備份", "zh-cn": "护照（11月28日后至少3个月有效）及纸本备份" },
        { id: "p12", en: "Comprehensive Europe travel insurance (including medical cover)", zh: "包含醫療保障的歐洲旅遊保險單據", "zh-cn": "包含医疗保障的欧洲旅游保险单据" },
        { id: "p13", en: "British Airways App & Boarding Passes (BA960 / BA967, LHR T5 & HAM T2)", zh: "英國航空 App 及電子登機證（BA960 / BA967，希斯路T5與漢堡T2）", "zh-cn": "英国航空 App 及电子登机牌（BA960 / BA967，希思罗T5与汉堡T2）" },
        { id: "p14", en: "Courtyard by Marriott confirmation (Adenauerallee 52) / Marriott Bonvoy App", zh: "漢堡市萬怡酒店確認單（Adenauerallee 52）/ 萬豪旅享家 App", "zh-cn": "汉堡市万怡酒店确认单（Adenauerallee 52）/ 万豪旅享家 App" },
        { id: "p15", en: "Cash (€50–€100 per person for Christmas market stalls)", zh: "現金（每人€50至€100，用於聖誕市集攤位消費）", "zh-cn": "现金（每人€50至€100，用于圣诞市集摊位消费）" },
        { id: "p16", en: "Hamburg Card (purchase at airport or online in advance)", zh: "漢堡城市卡（可於機場購買或提前網上購買）", "zh-cn": "汉堡城市卡（可于机场购买或提前网上购买）" }
      ]
    }
  ],

  /* ══════════════════════════════════════════════════
     4. BUDGET ESTIMATES (Base Currency: EUR)
     ══════════════════════════════════════════════════ */
  budget: {
    items: [
      {
        category: { en: "Flights (Return)", zh: "來回機票", "zh-cn": "来回机票" },
        baseAmount: "£212.70 paid (~€250)",
        min: 250,
        max: 250,
        notes: {
          en: "British Airways BA960 & BA967 (London Heathrow LHR T5 ↔ Hamburg HAM T2). 2 return tickets for couple (Receipt: £212.70 paid).",
          zh: "英國航空 BA960 與 BA967（倫敦希斯路 T5 ↔ 漢堡機場 T2），2位成人來回機票（收據：已付 £212.70）。",
          "zh-cn": "英国航空 BA960 与 BA967（伦敦希思罗 T5 ↔ 汉堡机场 T2），2位成人来回机票（收据：已付 £212.70）。"
        }
      },
      {
        category: { en: "Accommodation (2 Nights)", zh: "酒店住宿 (2晚)", "zh-cn": "酒店住宿 (2晚)" },
        baseAmount: "€279.00 paid",
        min: 279,
        max: 279,
        notes: {
          en: "Courtyard by Marriott Hamburg City (Adenauerallee 52). 2 nights confirmed booking for couple (Receipt: €279.00 paid).",
          zh: "漢堡市萬怡酒店 (Courtyard by Marriott, Adenauerallee 52)，情侶2晚已確認住宿（收據：已付 €279.00）。",
          "zh-cn": "汉堡市万怡酒店 (Courtyard by Marriott, Adenauerallee 52)，情侣2晚已确认住宿（收据：已付 €279.00）。"
        }
      },
      {
        category: { en: "Local Transport (Hamburg Card × 2)", zh: "當地交通（漢堡城市卡 × 2）", "zh-cn": "当地交通（汉堡城市卡 × 2）" },
        baseAmount: "€70 – €90",
        min: 70,
        max: 90,
        notes: {
          en: "3-day Hamburg Card for 2 persons: unlimited HVV transit + museum discounts.",
          zh: "2人3天漢堡城市卡：無限次HVV乘車 + 博物館折扣。",
          "zh-cn": "2人3天汉堡城市卡：无限次HVV乘车 + 博物馆折扣。"
        }
      },
      {
        category: { en: "Dining, Cafés & Christmas Market Snacks", zh: "餐飲、咖啡館與市集美食", "zh-cn": "餐饮、咖啡馆与市集美食" },
        baseAmount: "€200 – €320",
        min: 200,
        max: 320,
        notes: {
          en: "3 restaurant dinners + 3 café lunches + Christmas market Glühwein, Fischbrötchen, roasted almonds & waffles.",
          zh: "3次餐廳正餐 + 3次咖啡廳午餐 + 市集熱紅酒、魚卷麵包、烤杏仁及窩夫等。",
          "zh-cn": "3次餐厅正餐 + 3次咖啡厅午餐 + 市集热红酒、鱼卷面包、烤杏仁及窝夫等。"
        }
      },
      {
        category: { en: "Attractions & Activities", zh: "景點門票與活動", "zh-cn": "景点门票与活动" },
        baseAmount: "€30 – €80",
        min: 30,
        max: 80,
        notes: {
          en: "Miniatur Wunderland (€20/person with Hamburg Card discount), Elbphilharmonie plaza (free), harbour boat tour (~€20/person).",
          zh: "微型奇蹟世界（持漢堡城市卡折扣約€20/人）、易北愛樂廳廣場（免費）、港口遊船（約€20/人）。",
          "zh-cn": "微型奇迹世界（持汉堡城市卡折扣约€20/人）、易北爱乐厅广场（免费）、港口游船（约€20/人）。"
        }
      },
      {
        category: { en: "Shopping & Gifts", zh: "購物與手信", "zh-cn": "购物与手信" },
        baseAmount: "€50 – €200",
        min: 50,
        max: 200,
        notes: {
          en: "Jungfernstieg shopping boulevard, Europa Passage, and Christmas market artisan gifts — budget varies by personal taste.",
          zh: "少女大道購物長廊、歐洲廣場購物中心及聖誕市集手工藝品 — 費用因個人喜好而異。",
          "zh-cn": "少女大道购物长廊、欧洲广场购物中心及圣诞市集手工艺品 — 费用因个人喜好而异。"
        }
      }
    ],
    total: {
      category: { en: "Total Estimated Budget (2 Persons, 3 Days)", zh: "總預算估算（2人，3天）", "zh-cn": "总预算估算（2人，3天）" },
      baseAmount: "€879 – €1,219",
      min: 879,
      max: 1219,
      notes: {
        en: "Pre-paid: €529 (£212.70 flights + €279 hotel). Remaining on-trip estimate: €350 – €690. Total approx. €440 – €610 per person.",
        zh: "已預付：€529（機票 £212.70 + 酒店 €279）。在當地預計開支：€350至€690。每人總開支約 €440至€610。",
        "zh-cn": "已预付：€529（机票 £212.70 + 酒店 €279）。在当地预计开支：€350至€690。每人总开支约 €440至€610。"
      }
    }
  },

  /* ══════════════════════════════════════════════════
     5. CONFIRMED FLIGHTS — British Airways (LHR ↔ HAM)
     ══════════════════════════════════════════════════ */
  flights: {
    badge: {
      en: "Confirmed Flights · British Airways",
      zh: "已確認航班 · 英國航空",
      "zh-cn": "已确认航班 · 英国航空"
    },
    routeHeader: {
      en: "London Heathrow (LHR) ⇄ Hamburg Airport (HAM)",
      zh: "倫敦希斯路 (LHR) ⇄ 漢堡機場 (HAM)",
      "zh-cn": "伦敦希思罗 (LHR) ⇄ 汉堡机场 (HAM)"
    },
    summary: {
      airline: "British Airways",
      baggage: {
        en: "1 cabin bag (up to 23kg, 56×45×25cm) + 1 personal bag (up to 23kg, 40×30×15cm) + checked baggage included per passenger.",
        zh: "每位乘客包含1件手提隨身行李（上限23公斤，56×45×25厘米）+ 1件個人手提包（上限23公斤，40×30×15厘米）及託運行李。",
        "zh-cn": "每位乘客包含1件手提随身行李（上限23公斤，56×45×25厘米）+ 1件个人手提包（上限23公斤，40×30×15厘米）及托运行李。"
      },
      airportTransfer: {
        en: "Direct <strong>S1 S-Bahn</strong> runs every 10 minutes from Hamburg Airport (station directly beneath Terminal 1 & 2) to <strong>Berliner Tor</strong> (27 min, 4 min walk to Courtyard by Marriott) and <strong>Hauptbahnhof</strong> (25 min). No train changes required.",
        zh: "<strong>S1城郊列車</strong>每10分鐘一班，從漢堡機場航站樓地下月台直達<strong>柏林門站 (Berliner Tor)</strong>（約27分鐘，步行4分鐘即達漢堡市萬怡酒店）及<strong>中央車站 (Hamburg Hauptbahnhof)</strong>（約25分鐘），直達無需換車。",
        "zh-cn": "<strong>S1城郊列车</strong>每10分钟一班，从汉堡机场航站楼地下月台直达<strong>柏林门站 (Berliner Tor)</strong>（约27分钟，步行4分钟即达汉堡市万怡酒店）及<strong>中央车站 (Hamburg Hauptbahnhof)</strong>（约25分钟），直达无需换车。"
      }
    },
    legs: [
      {
        id: "flight-ba960",
        legNum: { en: "Outbound Flight", zh: "去程航班", "zh-cn": "去程航班" },
        flightNum: "BA960",
        airline: "British Airways",
        date: "2026-11-26",
        dateDisplay: { en: "Thu 26 Nov 2026", zh: "2026年11月26日（星期四）", "zh-cn": "2026年11月26日（星期四）" },
        origin: {
          code: "LHR",
          city: { en: "London", zh: "倫敦", "zh-cn": "伦敦" },
          airport: { en: "London Heathrow", zh: "希斯路機場", "zh-cn": "希思罗机场" },
          terminal: "Terminal 5",
          time: "07:30",
          tz: "GMT"
        },
        destination: {
          code: "HAM",
          city: { en: "Hamburg", zh: "漢堡", "zh-cn": "汉堡" },
          airport: { en: "Hamburg Airport", zh: "漢堡機場", "zh-cn": "汉堡机场" },
          terminal: "Terminal 2",
          time: "10:10",
          tz: "CET"
        },
        duration: "1h 40m",
        aircraft: "Airbus A320neo",
        status: { en: "Confirmed", zh: "已確認", "zh-cn": "已确认" },
        statusUrl: "https://www.britishairways.com/en-gb/information/flight-information/flight-status?flightNumber=960",
        notes: {
          en: "Terminal 5 is BA's flagship hub at LHR. Recommend arriving by 05:30 for bag drop & security. Landing at 10:10 CET allows a full first day in Hamburg.",
          zh: "T5為英航倫敦希斯路旗艦航站樓。建議於05:30前抵達辦理託運及安檢。上午10:10抵達漢堡，擁有充裕的第一天探索時光。",
          "zh-cn": "T5为英航伦敦希思罗旗舰航站楼。建议于05:30前抵达办理托运及安检。上午10:10抵达汉堡，拥有充裕的第一天探索时光。"
        }
      },
      {
        id: "flight-ba967",
        legNum: { en: "Return Flight", zh: "回程航班", "zh-cn": "回程航班" },
        flightNum: "BA967",
        airline: "British Airways",
        date: "2026-11-28",
        dateDisplay: { en: "Sat 28 Nov 2026", zh: "2026年11月28日（星期六）", "zh-cn": "2026年11月28日（星期六）" },
        origin: {
          code: "HAM",
          city: { en: "Hamburg", zh: "漢堡", "zh-cn": "汉堡" },
          airport: { en: "Hamburg Airport", zh: "漢堡機場", "zh-cn": "汉堡机场" },
          terminal: "Terminal 2",
          time: "16:45",
          tz: "CET"
        },
        destination: {
          code: "LHR",
          city: { en: "London", zh: "倫敦", "zh-cn": "伦敦" },
          airport: { en: "London Heathrow", zh: "希斯路機場", "zh-cn": "希思罗机场" },
          terminal: "Terminal 5",
          time: "17:25",
          tz: "GMT"
        },
        duration: "1h 40m",
        aircraft: "Airbus A320",
        status: { en: "Confirmed", zh: "已確認", "zh-cn": "已确认" },
        statusUrl: "https://www.britishairways.com/en-gb/information/flight-information/flight-status?flightNumber=967",
        notes: {
          en: "Depart Courtyard by Marriott / Berliner Tor by 14:15 via S1 S-Bahn to HAM Terminal 2 (27 min), arriving 2 hours before the 16:45 departure. Arrives LHR T5 at 17:25 GMT.",
          zh: "請於14:15前從萬豪萬怡酒店/柏林門站乘搭S1城郊列車直達漢堡T2（約27分鐘），在16:45起飛前2小時辦理登機手續。傍晚17:25抵達希斯路T5。",
          "zh-cn": "请于14:15前从万豪万怡酒店/柏林门站乘搭S1城郊列车直达汉堡T2（约27分钟），在16:45起飞前2小时办理登机手续。傍晚17:25抵达希思罗T5。"
        }
      }
    ]
  },

  /* ══════════════════════════════════════════════════
     6. HOTEL FINDER & CONFIRMED ACCOMMODATION
     ══════════════════════════════════════════════════ */
  hotels: {
    quickLegs: [
      {
        active: true,
        dest: "Courtyard by Marriott Hamburg City, Adenauerallee 52, Hamburg",
        checkin: "2026-11-26",
        checkout: "2026-11-28",
        label: { en: "Courtyard by Marriott (Confirmed)", zh: "漢堡市萬怡酒店 (Courtyard by Marriott)（已確認）", "zh-cn": "汉堡市万怡酒店 (Courtyard by Marriott)（已确认）" }
      }
    ],

    legs: [
      {
        legNum: "Confirmed Stay",
        nights: { en: "2 Nights · Entire Trip", zh: "2 晚 · 全程入住", "zh-cn": "2 晚 · 全程入住" },
        isConfirmed: true,
        title: {
          en: "Courtyard by Marriott Hamburg City",
          zh: "漢堡市萬怡酒店 (Courtyard by Marriott)",
          "zh-cn": "汉堡市万怡酒店 (Courtyard by Marriott)"
        },
        dates: "Nov 26 – Nov 28, 2026",
        address: "Adenauerallee 52, 20097 Hamburg, Germany",
        url: "https://www.marriott.com/en-gb/hotels/hamhc-courtyard-by-marriott-hamburg-city/overview",
        checkinTime: "15:00",
        checkoutTime: "12:00",
        desc: {
          en: "Modern 4-star Marriott hotel located on Adenauerallee. Outstanding transit connectivity: only 4 minutes' walk to Berliner Tor (interchange for U2/U3/U4 & S1/S2) and 8–10 minutes' walk to Hamburg Hauptbahnhof. Direct 27-minute S1 S-Bahn connection to Hamburg Airport (HAM). Features Böckmann's restaurant & bar, Finnish sauna, 24/7 fitness centre, and high-speed Wi-Fi.",
          zh: "座落於Adenauerallee的現代4星萬豪酒店。交通位置無可挑剔：步行4分鐘即達柏林門站（Berliner Tor，U2/U3/U4地鐵及S1/S2城郊列車交匯），步行8至10分鐘即達漢堡中央車站。S1城郊列車約27分鐘直通漢堡機場。附設Böckmann's餐廳及酒吧、芬蘭桑拿浴室、24小時健身中心及高速無線網絡。",
          "zh-cn": "座落于Adenauerallee的现代4星万豪酒店。交通位置无可挑剔：步行4分钟即达柏林门站（Berliner Tor，U2/U3/U4地铁及S1/S2城郊列车交汇），步行8至10分钟即达汉堡中央车站。S1城郊列车约27分钟直通汉堡机场。附设Böckmann's餐厅及酒吧、芬兰桑拿浴室、24小时健身中心及高速无线网络。"
        },
        tags: ["🏨 Confirmed Stay", "💳 Paid: €279 (2 nights)", "⭐ 4-Star Marriott", "🚇 4 min to Berliner Tor", "🚶 8 min to Hbf", "🧖 Sauna & Fitness", "✈️ Direct S1 from Airport"],
        dest: "Courtyard by Marriott Hamburg City",
        checkin: "2026-11-26",
        checkout: "2026-11-28",
        lat: 53.5534,
        lng: 10.0105
      }
    ]
  },

  /* ══════════════════════════════════════════════════
     6. TRANSIT & TRANSPORT COMPARISON
     ══════════════════════════════════════════════════ */
  transit: {
    cards: [
      {
        id: "transit-ubahn",
        icon: "🚇",
        title: {
          en: "U-Bahn & S-Bahn Network",
          zh: "地下鐵及城郊列車網絡",
          "zh-cn": "地下铁及城郊列车网络"
        },
        details: {
          en: "Hamburg's HVV U-Bahn (6 lines) and S-Bahn (6 lines) provide fast and reliable connections across the city. Key hubs: Hauptbahnhof (all lines), Jungfernstieg (U2/U4, S-Bahn), Landungsbrücken (U3). Trains run every 5–10 minutes during the day.",
          zh: "漢堡HVV地下鐵（6條線路）及城郊列車（6條線路）提供快捷可靠的全市交通連接。主要樞紐：中央車站（所有線路）、少女橋站（U2/U4、城郊列車）、輪船碼頭（U3）。日間每5至10分鐘一班。",
          "zh-cn": "汉堡HVV地下铁（6条线路）及城郊列车（6条线路）提供快捷可靠的全市交通连接。主要枢纽：中央车站（所有线路）、少女桥站（U2/U4、城郊列车）、轮船码头（U3）。日间每5至10分钟一班。"
        }
      },
      {
        id: "transit-bus-ferry",
        icon: "⛴️",
        title: {
          en: "HVV Harbour Ferries & Buses",
          zh: "HVV港口渡輪及巴士",
          "zh-cn": "HVV港口渡轮及巴士"
        },
        details: {
          en: "HVV ferry Line 62 connects Landungsbrücken with Finkenwerder along the Elbe — a scenic and practical alternative to the U-Bahn. All ferries are covered by the Hamburg Card. Bus line 111 links HafenCity to the city centre.",
          zh: "HVV渡輪62路連接輪船碼頭與Finkenwerder，沿易北河行駛，是地下鐵的景觀代替方案。所有渡輪均包含於漢堡城市卡內。111路巴士連接港城與市中心。",
          "zh-cn": "HVV渡轮62路连接轮船码头与Finkenwerder，沿易北河行驶，是地下铁的景观代替方案。所有渡轮均包含于汉堡城市卡内。111路巴士连接港城与市中心。"
        }
      },
      {
        id: "transit-walking",
        icon: "🚶",
        title: {
          en: "Walking — The Best Way to Explore",
          zh: "步行 — 探索漢堡的最佳方式",
          "zh-cn": "步行 — 探索汉堡的最佳方式"
        },
        details: {
          en: "Speicherstadt, HafenCity, the Elbe waterfront (Landungsbrücken → Fischmarkt), and the Christmas market circuit (Rathausmarkt → Binnenalster → Jungfernstieg) are all comfortably walkable within 15–20 minutes of each other. Comfortable, waterproof shoes are a must.",
          zh: "倉庫城、港城、易北河海濱（輪船碼頭至魚市場）及聖誕市集巡遊路線（市政廳廣場 → 內阿爾斯特湖 → 少女大道）均可步行串聯，各點相距15至20分鐘步程。防水舒適鞋履必不可少。",
          "zh-cn": "仓库城、港城、易北河海滨（轮船码头至鱼市场）及圣诞市集巡游路线（市政厅广场 → 内阿尔斯特湖 → 少女大道）均可步行串联，各点相距15至20分钟步程。防水舒适鞋履必不可少。"
        }
      }
    ]
  },

  /* ══════════════════════════════════════════════════
     7. CULINARY GUIDE & RESTAURANT SUGGESTIONS
     ══════════════════════════════════════════════════ */
  food: {
    categories: [
      { id: "all", label: { en: "All Delights", zh: "全部美食", "zh-cn": "全部美食" }, icon: "🍽️" },
      { id: "street-food", label: { en: "Must-Have Street Food", zh: "必嚐街頭小吃", "zh-cn": "必尝街头小吃" }, icon: "🐟" },
      { id: "traditional", label: { en: "Historic & Labskaus", zh: "傳統德式經典", "zh-cn": "传统德式经典" }, icon: "🥩" },
      { id: "seafood", label: { en: "Seafood & Harbour", zh: "海鮮與海濱", "zh-cn": "海鲜与海滨" }, icon: "🦐" },
      { id: "modern-dining", label: { en: "Romantic & Dinner", zh: "特色餐廳與晚宴", "zh-cn": "特色餐厅与晚宴" }, icon: "🍷" },
      { id: "cafe-bakery", label: { en: "Cafés & Bakeries", zh: "咖啡館與烘焙", "zh-cn": "咖啡馆与烘焙" }, icon: "☕" }
    ],
    spots: [
      {
        id: "bruecke-10",
        category: "street-food",
        name: { en: "Brücke 10", zh: "Brücke 10 碼頭魚堡 (Brücke 10)", "zh-cn": "Brücke 10 码头鱼堡 (Brücke 10)" },
        district: { en: "Landungsbrücken · St. Pauli", zh: "輪船碼頭 · 聖保利 (Landungsbrücken · St. Pauli)", "zh-cn": "轮船码头 · 圣保利 (Landungsbrücken · St. Pauli)" },
        categoryLabel: { en: "Must-Have Street Food", zh: "必嚐街頭小吃", "zh-cn": "必尝街头小吃" },
        price: "€",
        rating: "4.7 ★",
        icon: "🐟",
        badge: { en: "Best Fischbrötchen in Hamburg", zh: "漢堡第一海濱魚堡", "zh-cn": "汉堡第一海滨鱼堡" },
        specialties: [
          { en: "Krabbenbrötchen (North Sea Shrimp Roll)", zh: "北海鮮蝦仁脆卷 (Krabbenbrötchen)", "zh-cn": "北海鲜虾仁脆卷 (Krabbenbrötchen)" },
          { en: "Bismarckhering (Pickled Herring)", zh: "俾斯麥醋漬鯡魚堡 (Bismarckhering)", "zh-cn": "俾斯麦醋渍鲱鱼堡 (Bismarckhering)" },
          { en: "Matjesbrötchen (Mild Salt Herring)", zh: "荷蘭醃嫩鯡魚卷 (Matjesbrötchen)", "zh-cn": "荷兰腌嫩鲱鱼卷 (Matjesbrötchen)" }
        ],
        desc: {
          en: "Perched right on Pier 10 with direct views of passing ships and the Elbphilharmonie. Crusty warm rolls filled generously with freshly caught North Sea fish and remoulade. An unmissable Hamburg street food ritual.",
          zh: "座落於10號碼頭旁，直面往來貨輪與遠眺易北愛樂廳。外脆內軟的麵包夾入滿滿新鮮北海海產與秘製醬汁，是漫步易北河畔最正宗的地道街頭風味儀式。",
          "zh-cn": "座落于10号码头旁，直面往来货轮与远眺易北爱乐厅。外脆内软的面包夹入满满新鲜北海海产与秘制酱汁，是漫步易北河畔最正宗的地道街头风味仪式。"
        },
        address: "St. Pauli-Landungsbrücken 10, 20359 Hamburg",
        lat: 53.5458,
        lng: 9.9655,
        url: "https://maps.google.com/?q=Bruecke+10+Hamburg"
      },
      {
        id: "moe-grill",
        category: "street-food",
        name: { en: "Mö-Grill Jungfernstieg", zh: "Mö-Grill 傳奇咖喱香腸 (Mö-Grill)", "zh-cn": "Mö-Grill 传奇咖喱香肠 (Mö-Grill)" },
        district: { en: "Jungfernstieg · Altstadt", zh: "少女大道 · 老城區 (Jungfernstieg · Altstadt)", "zh-cn": "少女大道 · 老城区 (Jungfernstieg · Altstadt)" },
        categoryLabel: { en: "Must-Have Street Food", zh: "必嚐街頭小吃", "zh-cn": "必尝街头小吃" },
        price: "€",
        rating: "4.5 ★",
        icon: "🌭",
        badge: { en: "Iconic Hamburg Currywurst", zh: "漢堡地標咖喱香腸", "zh-cn": "汉堡地标咖喱香肠" },
        specialties: [
          { en: "Currywurst mit Pommes", zh: "秘醬咖喱香腸配金黃薯條 (Currywurst mit Pommes)", "zh-cn": "秘酱咖喱香肠配金黄薯条 (Currywurst mit Pommes)" },
          { en: "Rindscurrywurst (Pure Beef Option)", zh: "特級純牛肉咖喱香腸 (Rindscurrywurst)", "zh-cn": "特级纯牛肉咖喱香肠 (Rindscurrywurst)" },
          { en: "Schärfegrad 1–5 (Spicy Levels)", zh: "自選辣度（1至5級微辣到超辣）", "zh-cn": "自选辣度（1至5级微辣到超辣）" }
        ],
        desc: {
          en: "Hamburg's cult kiosk on the grand boulevard by the Binnenalster. Sizzling grilled Bratwurst cut and smothered in piping-hot homemade curry-tomato sauce. Scorching hot and deeply satisfying in crisp winter weather.",
          zh: "座落於內阿爾斯特湖畔繁華購物街的狂熱老攤。鐵板現烤多汁香腸切段，淋上濃郁滾燙的秘製特調咖喱番茄醬，冬日寒風中來一份熱氣騰騰，暖胃無比。",
          "zh-cn": "座落于内阿尔斯特湖畔繁华购物街的狂热老摊。铁板现烤多汁香肠切段，淋上浓郁滚烫的秘制特调咖喱番茄酱，冬日寒风中来一份热气腾腾，暖胃无比。"
        },
        address: "Jungfernstieg 16-20, 20354 Hamburg",
        lat: 53.5531,
        lng: 9.9926,
        url: "https://maps.google.com/?q=Moe+Grill+Jungfernstieg+Hamburg"
      },
      {
        id: "franz-and-friends",
        category: "street-food",
        name: { en: "Franz & Friends", zh: "Franz & Friends 漢堡肉桂酥專門店 (Franz & Friends)", "zh-cn": "Franz & Friends 汉堡肉桂酥专门店 (Franz & Friends)" },
        district: { en: "Hauptbahnhof · Wandelhalle", zh: "中央車站 · 長廊商場 (Hauptbahnhof · Wandelhalle)", "zh-cn": "中央车站 · 长廊商场 (Hauptbahnhof · Wandelhalle)" },
        categoryLabel: { en: "Must-Have Street Food", zh: "必嚐街頭小吃", "zh-cn": "必尝街头小吃" },
        price: "€",
        rating: "4.6 ★",
        icon: "🥨",
        badge: { en: "Signature Hamburg Pastry", zh: "漢堡代表性肉桂酥點", "zh-cn": "汉堡代表性肉桂酥点" },
        specialties: [
          { en: "Classic Franzbrötchen (Cinnamon Butter)", zh: "經典焦糖牛油肉桂酥 (Franzbrötchen)", "zh-cn": "经典焦糖牛油肉桂酥 (Franzbrötchen)" },
          { en: "Schoko-Franzbrötchen (Belgian Chocolate)", zh: "濃郁比利時朱古力夾心 (Schoko-Franzbrötchen)", "zh-cn": "浓郁比利时巧克力夹心 (Schoko-Franzbrötchen)" },
          { en: "Streusel & Marzipan (Special)", zh: "酥粒杏仁膏特製口味", "zh-cn": "酥粒杏仁膏特制口味" }
        ],
        desc: {
          en: "Dedicated entirely to Hamburg's unique culinary crown jewel: the Franzbrötchen. This flaky, laminated pastry is pressed with generous butter, caramelized sugar, and aromatic cinnamon. Warm, fragrant, and wonderfully addictive.",
          zh: "專門烘焙漢堡專屬點心皇冠「Franzbrötchen」。源自拿破崙佔領時期的法式牛角改良傳奇，層層酥皮壓入焦糖、牛油與肉桂香氣，全天現烤出爐，香脆軟糯。",
          "zh-cn": "专门烘焙汉堡专属点心皇冠「Franzbrötchen」。源自拿破仑占领时期的法式牛角改良传奇，层层酥皮压入焦糖、牛油与肉桂香气，全天现烤出炉，香脆软糯。"
        },
        address: "Glockengießerwall 8, Wandelhalle Hbf, 20095 Hamburg",
        lat: 53.5535,
        lng: 10.0070,
        url: "https://maps.google.com/?q=Franz+and+Friends+Hamburg"
      },
      {
        id: "xmas-stalls-rathaus",
        category: "street-food",
        name: { en: "Rathausmarkt Christmas Food Stalls", zh: "市政廳聖誕市集傳統美食攤 (Weihnachtsmarkt auf dem Rathausmarkt)", "zh-cn": "市政厅圣诞市集传统美食摊 (Weihnachtsmarkt auf dem Rathausmarkt)" },
        district: { en: "Rathausmarkt · Altstadt", zh: "市政廳廣場 · 老城區 (Rathausmarkt · Altstadt)", "zh-cn": "市政厅广场 · 老城区 (Rathausmarkt · Altstadt)" },
        categoryLabel: { en: "Must-Have Street Food", zh: "必嚐街頭小吃", "zh-cn": "必尝街头小吃" },
        price: "€",
        rating: "4.8 ★",
        icon: "🎄",
        badge: { en: "Advent Winter Treats", zh: "冬日降臨節市集必選", "zh-cn": "冬日降临节市集必选" },
        specialties: [
          { en: "Glühwein mit Schuss (Mulled Wine + Rum)", zh: "熱紅酒（可加蘭姆酒添暖） (Glühwein)", "zh-cn": "热红酒（可加朗姆酒添暖） (Glühwein)" },
          { en: "Gebrannte Mandeln (Candied Almonds)", zh: "古法銅鍋現炒焦糖甜杏仁 (Gebrannte Mandeln)", "zh-cn": "古法铜锅现炒焦糖甜杏仁 (Gebrannte Mandeln)" },
          { en: "Reibekuchen mit Apfelmus (Potato Fritters)", zh: "德式金黃脆薯餅配鮮蘋果醬 (Reibekuchen)", "zh-cn": "德式金黄脆薯饼配鲜苹果酱 (Reibekuchen)" }
        ],
        desc: {
          en: "The festive heartbeat of Hamburg in late November. Gather under the illuminated neo-Renaissance town hall for steaming Glühwein in commemorative ceramic mugs, warm cinnamon-coated almonds, and artisan street bites.",
          zh: "11月下旬漢堡最耀眼的節日靈魂所在。漫步於燈火璀璨的市政廳下，手握刻有漢堡標誌的紀念陶瓷杯品飲熱熱香料紅酒，品嚐香氣撲鼻的現烤焦糖杏仁與酥脆馬鈴薯餅。",
          "zh-cn": "11月下旬汉堡最耀眼的节日灵魂所在。漫步于灯火璀璨的市政厅下，手握刻有汉堡标志的纪念陶瓷杯品饮热热香料红酒，品尝香气扑鼻的现烤焦糖杏仁与酥脆马铃薯饼。"
        },
        address: "Rathausmarkt 1, 20095 Hamburg",
        lat: 53.5503,
        lng: 9.9928,
        url: "https://maps.google.com/?q=Rathausmarkt+Hamburg"
      },
      {
        id: "old-commercial-room",
        category: "traditional",
        name: { en: "Old Commercial Room", zh: "水手老字號 (Old Commercial Room)", "zh-cn": "水手老字号 (Old Commercial Room)" },
        district: { en: "St. Michaelis · Neustadt", zh: "聖米迦勒教堂旁 · 新城區 (St. Michaelis · Neustadt)", "zh-cn": "圣米迦勒教堂旁 · 新城区 (St. Michaelis · Neustadt)" },
        categoryLabel: { en: "Historic & Labskaus", zh: "傳統德式經典", "zh-cn": "传统德式经典" },
        price: "€€",
        rating: "4.6 ★",
        icon: "⚓",
        badge: { en: "Historic Since 1795", zh: "1795年傳奇水手餐廳", "zh-cn": "1795年传奇水手餐厅" },
        specialties: [
          { en: "Original Hamburger Labskaus", zh: "正統漢堡水手燉牛肉 (Hamburger Labskaus)", "zh-cn": "正统汉堡水手炖牛肉 (Hamburger Labskaus)" },
          { en: "Pannfisch mit Senfsauce", zh: "傳統鐵鍋煎鮮魚配濃香芥末白醬 (Pannfisch)", "zh-cn": "传统铁锅煎鲜鱼配浓香芥末白酱 (Pannfisch)" },
          { en: "Hamburger Rote Grütze", zh: "漢堡經典紅莓果布丁配香草冰淇淋 (Rote Grütze)", "zh-cn": "汉堡经典红莓果布丁配香草冰淇淋 (Rote Grütze)" }
        ],
        desc: {
          en: "Directly opposite St. Michaelis church, this maritime tavern has welcomed sea captains and guests for over 230 years. Polished wood booths, brass portholes, and the definitive rendition of Hamburg's legendary Labskaus.",
          zh: "正對聖米迦勒地標大教堂，接待船長、各國政要與旅人逾230年。典雅深色實木卡座與黃銅航海陳設，供應全漢堡公認最地道正宗的古法水手燉牛肉（Labskaus）。",
          "zh-cn": "正对圣米迦勒地标大教堂，接待船长、各国政要与旅人逾230年。典雅深色实木卡座与黄铜航海陈设，供应全汉堡公认最地道正宗的古法水手炖牛肉（Labskaus）。"
        },
        address: "Englische Planke 10, 20459 Hamburg",
        lat: 53.5484,
        lng: 9.9788,
        url: "https://maps.google.com/?q=Old+Commercial+Room+Hamburg"
      },
      {
        id: "groeninger-brauhaus",
        category: "traditional",
        name: { en: "Gröninger Privatbrauerei", zh: "格勒寧格私家釀酒坊 (Gröninger Privatbrauerei)", "zh-cn": "格勒宁格私家酿酒坊 (Gröninger Privatbrauerei)" },
        district: { en: "Altstadt · Speicherstadt Edge", zh: "老城區 · 倉庫城交界 (Altstadt · Speicherstadt)", "zh-cn": "老城区 · 仓库城交界 (Altstadt · Speicherstadt)" },
        categoryLabel: { en: "Historic & Labskaus", zh: "傳統德式經典", "zh-cn": "传统德式经典" },
        price: "€€",
        rating: "4.5 ★",
        icon: "🍺",
        badge: { en: "Oldest Brewery (1793)", zh: "漢堡現存最古老釀酒坊", "zh-cn": "汉堡现存最古老酿酒坊" },
        specialties: [
          { en: "Gröninger Pils aus dem Eichenfass", zh: "橡木桶自釀新鮮皮爾森啤酒 (Gröninger Pils)", "zh-cn": "橡木桶自酿新鲜皮尔森啤酒 (Gröninger Pils)" },
          { en: "Knusprige Schweinshaxe", zh: "香脆現烤大豬手配酸菜馬鈴薯球 (Schweinshaxe)", "zh-cn": "香脆现烤大猪手配酸菜马铃薯球 (Schweinshaxe)" },
          { en: "Brauhaus-Gulasch in Biersauce", zh: "黑啤燉嫩牛肉配手工麵疙瘩 (Spätzle)", "zh-cn": "黑啤炖嫩牛肉配手工面疙瘩 (Spätzle)" }
        ],
        desc: {
          en: "Dating back to 1793, this cavernous brewery cellar features massive copper brewing tanks and rustic long wooden tables. Unpasteurized Gröninger Pils poured straight from wooden kegs paired with hearty crackling roast pork.",
          zh: "始於1793年的地下酒窖釀酒坊，室內聳立巨大黃銅釀酒蒸餾壺與厚重長木桌。從木桶直接注出未過濾生啤酒，佐以皮脆肉嫩的烤豬手與黑啤燉肉，德式豪邁氣氛滿溢。",
          "zh-cn": "始于1793年的地下酒窖酿酒坊，室内耸立巨大黄铜酿酒蒸馏壶与厚重长木桌。从木桶直接注出未过滤生啤酒，佐以皮脆肉嫩的烤猪手与黑啤炖肉，德式豪迈气氛满溢。"
        },
        address: "Willy-Brandt-Straße 47, 20457 Hamburg",
        lat: 53.5469,
        lng: 9.9942,
        url: "https://maps.google.com/?q=Groeninger+Privatbrauerei+Hamburg"
      },
      {
        id: "krameramtsstuben",
        category: "traditional",
        name: { en: "Restaurant Krameramtsstuben", zh: "雜貨商古邸餐廳 (Restaurant Krameramtsstuben)", "zh-cn": "杂货商古邸餐厅 (Restaurant Krameramtsstuben)" },
        district: { en: "St. Michaelis · Historic Alley", zh: "聖米迦勒教堂 · 17世紀古巷 (St. Michaelis)", "zh-cn": "圣米迦勒教堂 · 17世纪古巷 (St. Michaelis)" },
        categoryLabel: { en: "Historic & Labskaus", zh: "傳統德式經典", "zh-cn": "传统德式经典" },
        price: "€€",
        rating: "4.5 ★",
        icon: "🏰",
        badge: { en: "17th-Century Courtyard", zh: "1676年木骨架庭院古建築", "zh-cn": "1676年木骨架庭院古建筑" },
        specialties: [
          { en: "Hamburger Rundstück warm", zh: "暖烤鮮豬肉包配特濃肉汁 (Rundstück warm)", "zh-cn": "暖烤鲜猪肉包配特浓肉汁 (Rundstück warm)" },
          { en: "Norddeutsche Scholle 'Finkenwerder'", zh: "芬肯韋德風煎比目魚配培根蝦 (Scholle)", "zh-cn": "芬肯韦德风煎比目鱼配培根虾 (Scholle)" },
          { en: "Roastbeef kalt mit Bratkartoffeln", zh: "低溫慢烤凍牛肉薄片配香煎馬鈴薯 (Roastbeef)", "zh-cn": "低温慢烤冻牛肉薄片配香煎马铃薯 (Roastbeef)" }
        ],
        desc: {
          en: "Tucked inside Hamburg's last preserved 17th-century courtyard (1676). Dine beneath ancient timber beams on historic dishes like 'Rundstück warm' — roast pork on a bread roll smothered in hot gravy, widely considered the precursor to the modern hamburger.",
          zh: "隱匿於漢堡僅存的1676年古老半木結構小巷庭院內。在老木樑古意盎然的環境中，品嚐被譽為「現代漢堡包鼻祖」的Rundstück warm（脆皮麵包夾烤肉淋濃郁熱肉汁）與經典北德鰈魚。",
          "zh-cn": "隐匿于汉堡仅存的1676年古老半木结构小巷庭院内。在老木梁古意盎然的环境中，品尝被誉为「现代汉堡包鼻祖」的Rundstück warm（脆皮面包夹烤肉淋浓郁热肉汁）与经典北德鲽鱼。"
        },
        address: "Krayenkamp 10, 20459 Hamburg",
        lat: 53.5489,
        lng: 9.9796,
        url: "https://maps.google.com/?q=Restaurant+Krameramtsstuben+Hamburg"
      },
      {
        id: "fischereihafen",
        category: "seafood",
        name: { en: "Fischereihafen Restaurant", zh: "易北河景海鮮名店 (Fischereihafen Restaurant)", "zh-cn": "易北河景海鲜名店 (Fischereihafen Restaurant)" },
        district: { en: "Altona · Elbmeile Waterfront", zh: "阿爾托納 · 易北海濱長廊 (Altona · Elbmeile)", "zh-cn": "阿尔托纳 · 易北海滨长廊 (Altona · Elbmeile)" },
        categoryLabel: { en: "Seafood & Harbour", zh: "海鮮與海濱", "zh-cn": "海鲜与海滨" },
        price: "€€€",
        rating: "4.7 ★",
        icon: "🦞",
        badge: { en: "Panoramic Harbour View", zh: "易北河全景精緻海鮮", "zh-cn": "易北河全景精致海鲜" },
        specialties: [
          { en: "Kowalke's Räucheraal auf Rührei", zh: "Kowalke 招牌煙燻鰻魚配香滑炒蛋 (Räucheraal)", "zh-cn": "Kowalke 招牌烟熏鳗鱼配香滑炒蛋 (Räucheraal)" },
          { en: "Nordsee-Steinbutt vom Grill", zh: "香煎北海野生多寶魚配松露白酒汁 (Steinbutt)", "zh-cn": "香煎北海野生多宝鱼配松露白酒汁 (Steinbutt)" },
          { en: "Kaviar Selection & Oysters", zh: "精選優質鱘魚子醬與新鮮生蠔拼盤 (Kaviar)", "zh-cn": "精选优质鲟鱼子酱与新鲜生蚝拼盘 (Kaviar)" }
        ],
        desc: {
          en: "Hamburg's premier seafood institution operated by the Kowalke family for generations. Large glass windows offer expansive views across the active harbour. Sublime seafood preparations paired with an encyclopedic wine cellar.",
          zh: "漢堡殿堂級頂級海鮮名府，由Kowalke家族世代經營。寬闊落地窗全幅坐擁易北河港口景觀與船舶往來。野生北海時鮮烹調極為精準，搭配世界級窖藏葡萄酒，情侶晚宴極致之選。",
          "zh-cn": "汉堡殿堂级顶级海鲜名府，由Kowalke家族世代经营。宽阔落地窗全幅坐拥易北河港口景观与船舶往来。野生北海时鲜烹调极为精准，搭配世界级窖藏葡萄酒，情侣晚宴极致之选。"
        },
        address: "Große Elbstraße 143, 22767 Hamburg",
        lat: 53.5432,
        lng: 9.9392,
        url: "https://maps.google.com/?q=Fischereihafen+Restaurant+Hamburg"
      },
      {
        id: "bullerei",
        category: "modern-dining",
        name: { en: "Bullerei (Tim Mälzer)", zh: "明星名廚時髦餐館 (Bullerei)", "zh-cn": "明星名厨时髦餐馆 (Bullerei)" },
        district: { en: "Schanzenviertel · Sternschanze", zh: "文創區 · 舊屠宰場 (Schanzenviertel)", "zh-cn": "文创区 · 旧屠宰场 (Schanzenviertel)" },
        categoryLabel: { en: "Romantic & Dinner", zh: "特色餐廳與晚宴", "zh-cn": "特色餐厅与晚宴" },
        price: "€€€",
        rating: "4.6 ★",
        icon: "🥩",
        badge: { en: "Celebrity Chef Tim Mälzer", zh: "德國明星主廚聯名代表作", "zh-cn": "德国明星主厨联名代表作" },
        specialties: [
          { en: "Dry-Aged Tomahawk & Flank Steak", zh: "乾式熟成戰斧牛扒與果木炭火烤肉 (Steak)", "zh-cn": "干式熟成战斧牛扒与果木炭火烤肉 (Steak)" },
          { en: "Burrata mit Wintergemüse", zh: "布拉塔芝士配烤時令冬根莖蔬菜 (Burrata)", "zh-cn": "布拉塔芝士配烤时令冬根茎蔬菜 (Burrata)" },
          { en: "Smoked Craft Cocktails", zh: "特調煙燻迷迭香經典雞尾酒 (Craft Cocktails)", "zh-cn": "特调烟熏迷迭香经典鸡尾酒 (Craft Cocktails)" }
        ],
        desc: {
          en: "Set in a converted red-brick slaughterhouse in Hamburg's trendy Schanzenviertel. Founded by celebrity chef Tim Mälzer, Bullerei combines industrial loft chic with exceptional wood-fired steaks, artisanal drinks, and electric atmosphere.",
          zh: "位於前衛的Schanzenviertel舊屠宰場紅磚廠房內，由德國名廚Tim Mälzer創立。粗獷工業風與溫暖燭光交融，主打乾式熟成頂級果木炭烤牛排與先鋒時令料理，氣氛熱烈迷人，強烈建議提前訂座。",
          "zh-cn": "位于前卫的Schanzenviertel旧屠宰场红砖厂房内，由德国名厨Tim Mälzer创立。粗犷工业风与温暖烛光交融，主打干式熟成顶级果木炭烤牛排与先锋时令料理，气氛热烈迷人，强烈建议提前订座。"
        },
        address: "Lagerstraße 34b, 20357 Hamburg",
        lat: 53.5630,
        lng: 9.9705,
        url: "https://maps.google.com/?q=Bullerei+Hamburg"
      },
      {
        id: "jim-block",
        category: "modern-dining",
        name: { en: "Jim Block Jungfernstieg", zh: "漢堡本地招牌漢堡 (Jim Block)", "zh-cn": "汉堡本地招牌汉堡 (Jim Block)" },
        district: { en: "Jungfernstieg · Binnenalster", zh: "少女大道 · 內阿爾斯特 (Jungfernstieg · Binnenalster)", "zh-cn": "少女大道 · 内阿尔斯特 (Jungfernstieg · Binnenalster)" },
        categoryLabel: { en: "Romantic & Dinner", zh: "特色餐廳與晚宴", "zh-cn": "特色餐厅与晚宴" },
        price: "€€",
        rating: "4.5 ★",
        icon: "🍔",
        badge: { en: "Hamburg's Gourmet Burger Original", zh: "漢堡人的在地正牌漢堡", "zh-cn": "汉堡人的在地正牌汉堡" },
        specialties: [
          { en: "JB Champions Burger (Block House Beef)", zh: "JB冠軍牛肉漢堡（頂級安格斯純牛肉）", "zh-cn": "JB冠军牛肉汉堡（顶级安格斯纯牛肉）" },
          { en: "Knoblauch-Dip & Steakhouse Fries", zh: "獨家招牌蒜香醬配厚切脆薯條", "zh-cn": "独家招牌蒜香酱配厚切脆薯条" },
          { en: "Crispy Chicken & Truffle Mayo", zh: "香酥炸雞堡配黑松露美乃滋", "zh-cn": "香酥炸鸡堡配黑松露美乃滋" }
        ],
        desc: {
          en: "From the masters behind Germany's renowned Block House steakhouses. Freshly ground 100% regional beef patties grilled on hot lava rocks, served in golden brioche buns overlooking the sparkling Inner Alster.",
          zh: "源自德國傳奇牛排品牌Block House的漢堡專門店。100%德國本土安格斯牛肉現切現絞，火山石高溫炙烤鎖緊肉汁，配手工布里歐修麵包與獨門大蒜醬，飽覽湖景，既美味又高性價比。",
          "zh-cn": "源自德国传奇牛排品牌Block House的汉堡专门店。100%德国本土安格斯牛肉现切现绞，火山石高温炙烤锁紧肉汁，配手工布里欧修面包与独门大蒜酱，饱览湖景，既美味又高性价比。"
        },
        address: "Jungfernstieg 1-3, 20095 Hamburg",
        lat: 53.5529,
        lng: 9.9950,
        url: "https://maps.google.com/?q=Jim+Block+Jungfernstieg+Hamburg"
      },
      {
        id: "cafe-paris",
        category: "cafe-bakery",
        name: { en: "Café Paris", zh: "巴黎咖啡館 (Café Paris)", "zh-cn": "巴黎咖啡馆 (Café Paris)" },
        district: { en: "Rathausmarkt · Altstadt", zh: "市政廳旁 · 老城區 (Rathausmarkt · Altstadt)", "zh-cn": "市政厅旁 · 老城区 (Rathausmarkt · Altstadt)" },
        categoryLabel: { en: "Cafés & Bakeries", zh: "咖啡館與烘焙", "zh-cn": "咖啡馆与烘焙" },
        price: "€€",
        rating: "4.6 ★",
        icon: "☕",
        badge: { en: "1882 Belle Époque Landmark", zh: "1882年新藝術宮廷咖啡廳", "zh-cn": "1882年新艺术宫廷咖啡厅" },
        specialties: [
          { en: "Café au Lait & Fresh Brioche", zh: "大碗法式香濃拿鐵配現烤鬆軟布里歐 (Café au Lait)", "zh-cn": "大碗法式香浓拿铁配现烤松软布里欧 (Café au Lait)" },
          { en: "Croque Madame (Gruyère & Egg)", zh: "焗烤格呂耶爾乾酪流心庫克太太吐司 (Croque Madame)", "zh-cn": "焗烤格吕耶尔干酪流心库克太太吐司 (Croque Madame)" },
          { en: "Tartare de Bœuf Classique", zh: "主廚秘製調味傳統法式生牛肉撻撻 (Tartare)", "zh-cn": "主厨秘制调味传统法式生牛肉挞挞 (Tartare)" }
        ],
        desc: {
          en: "Stepping inside this 1882 landmark near the Rathaus is like stepping into fin-de-siècle Paris. Soaring vaulted ceilings lined in hand-painted Art Nouveau ceramic tiles, bustling zinc bars, and exquisite breakfasts.",
          zh: "位於市政廳旁的1882年建築藝術傑作，挑高穹頂鑲滿手工彩繪新藝術陶瓷瓷磚，搭配黃銅吊燈與大理石桌面。無論是清晨享用一杯醇厚歐蕾咖啡與流心吐司，或是午後小憩，皆如置身十九世紀巴黎。",
          "zh-cn": "位于市政厅旁的1882年建筑艺术杰作，挑高穹顶镶满手工彩绘新艺术陶瓷瓷砖，搭配黄铜吊灯与大理石桌面。无论是清晨享用一杯醇厚欧蕾咖啡与流心吐司，或是午后小憩，皆如置身十九世纪巴黎。"
        },
        address: "Rathausstraße 4, 20095 Hamburg",
        lat: 53.5498,
        lng: 9.9948,
        url: "https://maps.google.com/?q=Cafe+Paris+Hamburg"
      },
      {
        id: "zeit-fuer-brot",
        category: "cafe-bakery",
        name: { en: "Zeit für Brot", zh: "手工有機烘焙坊 (Zeit für Brot)", "zh-cn": "手工有机烘焙坊 (Zeit für Brot)" },
        district: { en: "Große Bleichen · Neustadt", zh: "新城區 · 奢品商街旁 (Große Bleichen · Neustadt)", "zh-cn": "新城区 · 奢品商街旁 (Große Bleichen · Neustadt)" },
        categoryLabel: { en: "Cafés & Bakeries", zh: "咖啡館與烘焙", "zh-cn": "咖啡馆与烘焙" },
        price: "€",
        rating: "4.7 ★",
        icon: "🥐",
        badge: { en: "Artisan Organic Zimtschnecken", zh: "全城公認頂級有機肉桂卷", "zh-cn": "全城公认顶级有机肉桂卷" },
        specialties: [
          { en: "Warme Zimtschnecke (Cinnamon Roll)", zh: "熱烤出爐經典有機肉桂蝸牛卷 (Zimtschnecke)", "zh-cn": "热烤出炉经典有机肉桂蜗牛卷 (Zimtschnecke)" },
          { en: "Apfel-Zimt & Walnuss Schnecke", zh: "蜜漬蘋果核桃肉桂脆卷 (Schnecke)", "zh-cn": "蜜渍苹果核桃肉桂脆卷 (Schnecke)" },
          { en: "Bio-Sourdough Bread", zh: "古法慢酵百年酵母酸種歐包 (Bio-Brot)", "zh-cn": "古法慢酵百年酵母酸种欧包 (Bio-Brot)" }
        ],
        desc: {
          en: "Celebrated across Germany for organic sourdough and giant, ultra-fluffy warm cinnamon rolls (Zimtschnecken). Watch bakers knead and roll dough right before your eyes behind the open glass bakery counter.",
          zh: "以慢速自然發酵的100%有機麵包及巨大、極致鬆軟的溫熱肉桂卷（Zimtschnecken）聞名。全開放式玻璃透明烘焙坊可親睹麵包師揉麵出爐，香氣馥郁，配杯燕麥奶拿鐵是冬日早晨絕佳享受。",
          "zh-cn": "以慢速自然发酵的100%有机面包及巨大、极致松软的温热肉桂卷（Zimtschnecken）闻名。全开放式玻璃透明烘焙坊可亲睹面包师揉面出炉，香气馥郁，配杯燕麦奶拿铁是冬日早晨绝佳享受。"
        },
        address: "Große Bleichen 30, 20354 Hamburg",
        lat: 53.5532,
        lng: 9.9888,
        url: "https://maps.google.com/?q=Zeit+fuer+Brot+Hamburg"
      }
    ]
  }
};

// Global export
if (typeof window !== 'undefined') {
  window.SITE_DATA = SITE_DATA;
}
