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
          zh: "漢堡中央車站",
          "zh-cn": "汉堡中央车站"
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
          zh: "漢堡市萬怡酒店",
          "zh-cn": "汉堡市万怡酒店"
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
          zh: "倉庫城與微型奇蹟世界",
          "zh-cn": "仓库城与微型奇迹世界"
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
          zh: "港城與易北愛樂廳",
          "zh-cn": "港城与易北爱乐厅"
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
          zh: "少女大道與內阿爾斯特湖",
          "zh-cn": "少女大道与内阿尔斯特湖"
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
          zh: "漢堡聖誕市集",
          "zh-cn": "汉堡圣诞市集"
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
          zh: "聖保利區與輪船碼頭",
          "zh-cn": "圣保利区与轮船码头"
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
        zh: "<strong>S1城郊列車</strong>每10分鐘一班，從漢堡機場航站樓地下月台直達<strong>柏林門站 (Berliner Tor)</strong>（約27分鐘，步行4分鐘即達萬豪萬怡酒店）及<strong>中央車站 (Hauptbahnhof)</strong>（約25分鐘），直達無需換車。",
        "zh-cn": "<strong>S1城郊列车</strong>每10分钟一班，从汉堡机场航站楼地下月台直达<strong>柏林门站 (Berliner Tor)</strong>（约27分钟，步行4分钟即达万豪万怡酒店）及<strong>中央车站 (Hauptbahnhof)</strong>（约25分钟），直达无需换车。"
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
        label: { en: "Courtyard by Marriott (Confirmed)", zh: "萬豪萬怡酒店（已訂）", "zh-cn": "万豪万怡酒店（已订）" }
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
  }
};

// Global export
if (typeof window !== 'undefined') {
  window.SITE_DATA = SITE_DATA;
}
