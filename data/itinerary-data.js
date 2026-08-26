/**
 * @file itinerary-data.js
 * @description DATA SOURCE — Day-by-Day schedule for Hamburg 2026 Winter City Break.
 * Sets window.ITINERARY_DATA for consumption by render.js and map.js.
 *
 * Hamburg, Germany · Nov 26–28, 2026 · Couple · Christmas Markets & Harbour Edition
 * Trilingual: English / 繁體中文 (Traditional Chinese) / 简体中文 (Simplified Chinese)
 */

const ITINERARY_DATA = [
  /* ════ DAY 1 ════ */
  {
    id: "day-1",
    dayNum: "01",
    date: "Nov 26",
    region: "hafencity",
    title: {
      en: "Arrival & HafenCity — Elbphilharmonie, Speicherstadt & First Glühwein",
      zh: "抵達漢堡 — 易北愛樂廳、倉庫城與第一杯熱紅酒",
      "zh-cn": "抵达汉堡 — 易北爱乐厅、仓库城与第一杯热红酒"
    },
    tags: [
      { type: "city", text: "🏙️ HafenCity" },
      { type: "pace", en: "🎄 Festive", zh: "🎄 節日氛圍", "zh-cn": "🎄 节日氛围" }
    ],
    blocks: [
      {
        time: { en: "🌅 Morning / Arrival", zh: "🌅 早上 / 抵達", "zh-cn": "🌅 早上 / 抵达" },
        activity: {
          title: {
            en: "Arrive at Hamburg Airport & Transfer to City Centre",
            zh: "抵達漢堡機場，乘搭S1城郊列車進入市區",
            "zh-cn": "抵达汉堡机场，乘搭S1城郊列车进入市区"
          },
          desc: {
            en: "Collect baggage and head to the S1 S-Bahn platform directly inside the terminal. The train runs every 10 minutes to Hamburg Hauptbahnhof (25 min). Purchase your 3-Day Hamburg Card at the airport ticket machines. Check in at your hotel in HafenCity or Neustadt and freshen up.",
            zh: "取行李後直接前往航站樓內S1城郊列車月台，每10分鐘一班直達漢堡中央車站（約25分鐘）。於機場自動售票機購買3天漢堡城市卡。辦理港城或新城區酒店入住手續，稍事休息。",
            "zh-cn": "取行李后直接前往航站楼内S1城郊列车月台，每10分钟一班直达汉堡中央车站（约25分钟）。于机场自动售票机购买3天汉堡城市卡。办理港城或新城区酒店入住手续，稍事休息。"
          },
          meal: {
            icon: "☕",
            en: "<strong>Brunch:</strong> <em>Café Paris</em> near the Rathaus — a Hamburg institution since 1882, serving fluffy omelettes, smoked salmon crêpes, and excellent coffee in a belle époque brasserie setting.",
            zh: "<strong>早午餐：</strong><em>巴黎咖啡館 (Café Paris)</em>位於市政廳附近，1882年創立的漢堡老字號，在新藝術風格法式餐館內享用蓬鬆煎蛋卷、煙三文魚薄餅及香濃咖啡。",
            "zh-cn": "<strong>早午餐：</strong><em>巴黎咖啡馆 (Café Paris)</em>位于市政厅附近，1882年创立的汉堡老字号，在新艺术风格法式餐馆内享用蓬松煎蛋卷、烟三文鱼薄饼及香浓咖啡。"
          },
          locations: [
            { lat: 53.6303, lng: 9.9882, label: { en: "Hamburg Airport (HAM)", zh: "漢堡機場", "zh-cn": "汉堡机场" } },
            { lat: 53.5532, lng: 10.0066, label: { en: "Hamburg Hauptbahnhof", zh: "漢堡中央車站", "zh-cn": "汉堡中央车站" } }
          ]
        }
      },
      {
        time: { en: "🌤️ Afternoon", zh: "🌤️ 下午", "zh-cn": "🌤️ 下午" },
        activity: {
          title: {
            en: "Speicherstadt Canals & Miniatur Wunderland",
            zh: "倉庫城運河漫步與微型奇蹟世界",
            "zh-cn": "仓库城运河漫步与微型奇迹世界"
          },
          desc: {
            en: "Stroll through the UNESCO-listed Speicherstadt warehouse district — a magical red-brick Gothic island of canals dating from 1888. Then explore Miniatur Wunderland, the world's largest model railway exhibition with meticulous replicas of Hamburg harbour, Scandinavia, the USA, and more. Book tickets online in advance to skip queues.",
            zh: "漫步於聯合國教科文組織列入世界遺產的倉庫城紅磚哥特式運河島嶼群（建於1888年），猶如童話世界。隨後參觀微型奇蹟世界，世界最大模型鐵路展覽，精緻重現漢堡港口、斯堪的納維亞、美國等地貌。建議提前網上購票以免排隊。",
            "zh-cn": "漫步于联合国教科文组织列入世界遗产的仓库城红砖哥特式运河岛屿群（建于1888年），犹如童话世界。随后参观微型奇迹世界，世界最大模型铁路展览，精致重现汉堡港口、斯堪的纳维亚、美国等地貌。建议提前网上购票以免排队。"
          },
          meal: {
            icon: "🥨",
            en: "<strong>Afternoon Snack:</strong> Grab a <em>Franzbrötchen</em> — Hamburg's iconic buttery cinnamon pastry — from a bakery kiosk in Speicherstadt. Perfect winter fuel.",
            zh: "<strong>下午茶點：</strong>於倉庫城麵包店購買一個<em>Franzbrötchen</em>——漢堡標誌性的香甜牛油肉桂酥餅，是最佳冬日補給食品。",
            "zh-cn": "<strong>下午茶点：</strong>于仓库城面包店购买一个<em>Franzbrötchen</em>——汉堡标志性的香甜牛油肉桂酥饼，是最佳冬日补给食品。"
          },
          locations: [
            { lat: 53.5435, lng: 9.9938, label: { en: "Speicherstadt", zh: "倉庫城", "zh-cn": "仓库城" } },
            { lat: 53.5435, lng: 9.9894, label: { en: "Miniatur Wunderland", zh: "微型奇蹟世界", "zh-cn": "微型奇迹世界" } }
          ]
        }
      },
      {
        time: { en: "🌙 Evening", zh: "🌙 晚上", "zh-cn": "🌙 晚上" },
        activity: {
          title: {
            en: "Elbphilharmonie Plaza Viewpoint & Fleetinsel Christmas Market",
            zh: "易北愛樂廳觀景台與弗萊廷島聖誕市集",
            "zh-cn": "易北爱乐厅观景台与弗莱廷岛圣诞市集"
          },
          desc: {
            en: "Take the escalator up to the free Elbphilharmonie public plaza (Plaza Ticket required but free) for spectacular 360° views over the Elbe, HafenCity and the port at dusk. Then wander to the intimate Fleetinsel Christmas Market — a romantic, less-touristy market along the canal with artisan crafts, mulled wine and handmade gifts.",
            zh: "搭乘電梯登上免費易北愛樂廳公共觀景台（需免費廣場票），欣賞黃昏時分易北河、港城及漢堡港360°全景。隨後漫步前往弗萊廷島聖誕市集——一個沿運河岸的浪漫小眾市集，售有手工藝品、熱紅酒及手製禮品。",
            "zh-cn": "搭乘电梯登上免费易北爱乐厅公共观景台（需免费广场票），欣赏黄昏时分易北河、港城及汉堡港360°全景。随后漫步前往弗莱廷岛圣诞市集——一个沿运河岸的浪漫小众市集，售有手工艺品、热红酒及手制礼品。"
          },
          meal: {
            icon: "🍷",
            en: "<strong>Dinner:</strong> <em>Bullerei</em> in the Schanzenviertel — a celebrated Hamburg restaurant set in a historic slaughterhouse, known for flame-grilled meats, seasonal vegetables and artisan cocktails. Book ahead.",
            zh: "<strong>晚餐：</strong><em>Bullerei</em>餐廳位於漢堡Schanzenviertel區，設於具有歷史意義的屠宰場內，以炭火燒烤肉類、時令蔬菜及精釀雞尾酒著稱。建議提前訂座。",
            "zh-cn": "<strong>晚餐：</strong><em>Bullerei</em>餐厅位于汉堡Schanzenviertel区，设于具有历史意义的屠宰场内，以炭火烧烤肉类、时令蔬菜及精酿鸡尾酒著称。建议提前订座。"
          },
          locations: [
            { lat: 53.5413, lng: 9.9841, label: { en: "Elbphilharmonie Plaza", zh: "易北愛樂廳觀景台", "zh-cn": "易北爱乐厅观景台" } },
            { lat: 53.5476, lng: 9.9907, label: { en: "Fleetinsel Christmas Market", zh: "弗萊廷島聖誕市集", "zh-cn": "弗莱廷岛圣诞市集" } }
          ]
        }
      }
    ],
    tip: {
      en: "Pre-book your Miniatur Wunderland tickets online at miniatur-wunderland.de — queues can be 90+ minutes without a booking. Also book the free Elbphilharmonie Plaza tickets at elbphilharmonie.de/en/plaza.",
      zh: "建議提前在miniatur-wunderland.de預購微型奇蹟世界門票——未購票排隊等候可超過90分鐘。同時於elbphilharmonie.de/en/plaza預訂免費易北愛樂廳廣場票。",
      "zh-cn": "建议提前在miniatur-wunderland.de预购微型奇迹世界门票——未购票排队等候可超过90分钟。同时于elbphilharmonie.de/en/plaza预订免费易北爱乐厅广场票。"
    }
  },

  /* ════ DAY 2 ════ */
  {
    id: "day-2",
    dayNum: "02",
    date: "Nov 27",
    region: "city-centre",
    title: {
      en: "Christmas Market Day — Rathausmarkt, Jungfernstieg Shopping & Binnenalster",
      zh: "聖誕市集日 — 市政廳廣場、少女大道購物與內阿爾斯特湖",
      "zh-cn": "圣诞市集日 — 市政厅广场、少女大道购物与内阿尔斯特湖"
    },
    tags: [
      { type: "city", text: "🎄 City Centre" },
      { type: "activity", en: "🛍️ Shopping + Markets", zh: "🛍️ 購物 + 市集", "zh-cn": "🛍️ 购物 + 市集" }
    ],
    blocks: [
      {
        time: { en: "🌅 Morning", zh: "🌅 早上", "zh-cn": "🌅 早上" },
        activity: {
          title: {
            en: "Hamburg Rathaus (City Hall) & Alster Arcades",
            zh: "漢堡市政廳漫遊與阿爾斯特拱廊",
            "zh-cn": "汉堡市政厅漫游与阿尔斯特拱廊"
          },
          desc: {
            en: "Start with a walk around the magnificent neo-Renaissance Hamburg Rathaus (1897), one of Germany's most impressive city halls. Explore the ornate Alster Arcades (Alsterarkaden) — elegant 19th-century neo-Gothic arched walkways reflecting in the canal — a perfect photo spot. The Rathausmarkt Christmas market sets up right in front, with over 100 stalls opening from 11AM.",
            zh: "從雄偉的新文藝復興式漢堡市政廳（1897年）開始漫遊，這是德國最壯觀的市政廳之一。探索精緻的阿爾斯特拱廊——19世紀新哥特式拱形廊道倒映在運河水面，是最佳拍照地點。廣場前的市政廳廣場聖誕市集設有逾100個攤位，早上11時起開放。",
            "zh-cn": "从雄伟的新文艺复兴式汉堡市政厅（1897年）开始漫游，这是德国最壮观的市政厅之一。探索精致的阿尔斯特拱廊——19世纪新哥特式拱形廊道倒映在运河水面，是最佳拍照地点。广场前的市政厅广场圣诞市集设有逾100个摊位，上午11时起开放。"
          },
          meal: {
            icon: "☕",
            en: "<strong>Breakfast:</strong> <em>Café Knuth</em> in the Alsterarkaden — enjoy a freshly baked German breakfast (Frühstücksbrettchen) with rye bread, cold cuts, cheese and a strong Milchkaffee overlooking the canal.",
            zh: "<strong>早餐：</strong><em>Café Knuth</em>位於阿爾斯特拱廊內，享用德式傳統早餐（Frühstücksbrettchen）：黑麥麵包、冷盤肉食、起司，搭配一杯濃厚拿鐵咖啡，俯瞰運河美景。",
            "zh-cn": "<strong>早餐：</strong><em>Café Knuth</em>位于阿尔斯特拱廊内，享用德式传统早餐（Frühstücksbrettchen）：黑麦面包、冷盘肉食、起司，搭配一杯浓厚拿铁咖啡，俯瞰运河美景。"
          },
          locations: [
            { lat: 53.5503, lng: 9.9998, label: { en: "Hamburg Rathaus", zh: "漢堡市政廳", "zh-cn": "汉堡市政厅" } },
            { lat: 53.5498, lng: 9.9988, label: { en: "Alsterarkaden", zh: "阿爾斯特拱廊", "zh-cn": "阿尔斯特拱廊" } }
          ]
        }
      },
      {
        time: { en: "🌤️ Afternoon", zh: "🌤️ 下午", "zh-cn": "🌤️ 下午" },
        activity: {
          title: {
            en: "Jungfernstieg Shopping & Europa Passage",
            zh: "少女大道購物與歐洲廣場購物中心",
            "zh-cn": "少女大道购物与欧洲广场购物中心"
          },
          desc: {
            en: "Hamburg's most famous shopping boulevard runs along the Inner Alster Lake. Browse premium German and international brands along Jungfernstieg, then head into Europa Passage — a 5-floor glass-domed luxury shopping centre with 120 shops. Continue to the nearby Mönckebergstraße (Monkeeberg Street), Hamburg's main high-street for high-volume retail.",
            zh: "漢堡最著名的購物大道沿內阿爾斯特湖延伸。瀏覽少女大道上的優質德國及國際品牌，隨後進入歐洲廣場——一座5層玻璃圓頂豪華購物中心，設有120間商店。再漫步前往附近的莫恩克貝格大街，漢堡主要大眾購物街。",
            "zh-cn": "汉堡最著名的购物大道沿内阿尔斯特湖延伸。浏览少女大道上的优质德国及国际品牌，随后进入欧洲广场——一座5层玻璃圆顶豪华购物中心，设有120间商店。再漫步前往附近的莫恩克贝格大街，汉堡主要大众购物街。"
          },
          meal: {
            icon: "🥣",
            en: "<strong>Lunch:</strong> <em>Vapiano Jungfernstieg</em> or <em>Block House</em> — quick and satisfying lakeside dining. For something more local, try <em>Schreiberei</em> for excellent Flammkuchen (Alsatian-style thin-crust tart) and craft beer.",
            zh: "<strong>午餐：</strong>可選<em>Vapiano Jungfernstieg</em>或<em>Block House</em>享用快捷湖畔餐飲。若想體驗更本地特色，可前往<em>Schreiberei</em>品嚐美味的Flammkuchen（阿爾薩斯薄底派）及精釀啤酒。",
            "zh-cn": "<strong>午餐：</strong>可选<em>Vapiano Jungfernstieg</em>或<em>Block House</em>享用快捷湖畔餐饮。若想体验更本地特色，可前往<em>Schreiberei</em>品尝美味的Flammkuchen（阿尔萨斯薄底派）及精酿啤酒。"
          },
          locations: [
            { lat: 53.5535, lng: 9.9945, label: { en: "Jungfernstieg", zh: "少女大道", "zh-cn": "少女大道" } },
            { lat: 53.5537, lng: 10.0003, label: { en: "Europa Passage", zh: "歐洲廣場", "zh-cn": "欧洲广场" } }
          ]
        }
      },
      {
        time: { en: "🌙 Evening", zh: "🌙 晚上", "zh-cn": "🌙 晚上" },
        activity: {
          title: {
            en: "Binnenalster Lake Christmas Market & Rathausmarkt at Night",
            zh: "內阿爾斯特湖聖誕市集與夜間市政廳廣場",
            "zh-cn": "内阿尔斯特湖圣诞市集与夜间市政厅广场"
          },
          desc: {
            en: "As darkness falls at 4:30PM, Hamburg transforms into a glittering winter wonderland. The Binnenalster market by the lakeside is magical with twinkling lights reflected in the water. Then walk to Rathausmarkt — the city's grandest Christmas market, framed by the floodlit Rathaus, with over a hundred stalls selling artisan ornaments, Glühwein, waffles, Lebkuchen (gingerbread) and roasted almonds.",
            zh: "下午4時30分入黑後，漢堡化身閃耀冬日仙境。內阿爾斯特湖畔市集燈光倒映於湖面，猶如夢境。隨後步行前往市政廳廣場——漢堡最宏偉的聖誕市集，以燈光璀璨的市政廳為背景，設有逾百個攤位，售有手工聖誕裝飾品、熱紅酒、窩夫、薑餅及烤杏仁。",
            "zh-cn": "下午4时30分入黑后，汉堡化身闪耀冬日仙境。内阿尔斯特湖畔市集灯光倒映于湖面，犹如梦境。随后步行前往市政厅广场——汉堡最宏伟的圣诞市集，以灯光璀璨的市政厅为背景，设有逾百个摊位，售有手工圣诞装饰品、热红酒、窝夫、姜饼及烤杏仁。"
          },
          meal: {
            icon: "🍺",
            en: "<strong>Dinner:</strong> <em>Pöseldorf Stuben</em> in the Pöseldorf quarter — a cosy Hamburg neighbourhood tavern serving Labskaus, Holstein schnitzel, and dark Ratsherrn craft beer. A warm respite from the cold.",
            zh: "<strong>晚餐：</strong><em>Pöseldorf Stuben</em>位於Pöseldorf區，是一間溫馨的漢堡本地小酒館，供應傳統水手燉牛肉（Labskaus）、荷爾斯泰因豬扒及Ratsherrn精釀黑啤，是從寒冷戶外歸來的溫暖休憩所。",
            "zh-cn": "<strong>晚餐：</strong><em>Pöseldorf Stuben</em>位于Pöseldorf区，是一间温馨的汉堡本地小酒馆，供应传统水手炖牛肉（Labskaus）、荷尔斯泰因猪扒及Ratsherrn精酿黑啤，是从寒冷户外归来的温暖休憩所。"
          },
          locations: [
            { lat: 53.5563, lng: 9.9942, label: { en: "Binnenalster Market", zh: "內阿爾斯特湖市集", "zh-cn": "内阿尔斯特湖市集" } },
            { lat: 53.5503, lng: 9.9998, label: { en: "Rathausmarkt at Night", zh: "夜間市政廳廣場市集", "zh-cn": "夜间市政厅广场市集" } }
          ]
        }
      }
    ],
    tip: {
      en: "The Rathausmarkt Christmas market is best experienced after dark when the Rathaus is dramatically lit up. Arrive by 5PM to soak in the atmosphere before it gets too crowded on a Friday evening.",
      zh: "市政廳廣場聖誕市集在入黑後最為精彩，市政廳燈光照耀璀璨動人。建議下午5時前到達，在週五晚間人潮湧至前悠然享受節日氣氛。",
      "zh-cn": "市政厅广场圣诞市集在入黑后最为精彩，市政厅灯光照耀璀璨动人。建议下午5时前到达，在周五晚间人潮涌至前悠然享受节日气氛。"
    }
  },

  /* ════ DAY 3 ════ */
  {
    id: "day-3",
    dayNum: "03",
    date: "Nov 28",
    region: "harbour",
    title: {
      en: "Harbour, Landungsbrücken & Departure — Fischmarkt, St. Pauli & Elbe Views",
      zh: "港口、輪船碼頭與離港 — 魚市場、聖保利區與易北河景",
      "zh-cn": "港口、轮船码头与离港 — 鱼市场、圣保利区与易北河景"
    },
    tags: [
      { type: "city", text: "⚓ St. Pauli / Landungsbrücken" },
      { type: "pace", en: "🌊 Harbour Day", zh: "🌊 港口之日", "zh-cn": "🌊 港口之日" }
    ],
    blocks: [
      {
        time: { en: "🌅 Morning", zh: "🌅 早上", "zh-cn": "🌅 早上" },
        activity: {
          title: {
            en: "Historischer Weihnachtsmarkt & Chilehaus Architecture",
            zh: "傳統歷史聖誕市集與智利大廈建築欣賞",
            "zh-cn": "传统历史圣诞市集与智利大厦建筑欣赏"
          },
          desc: {
            en: "Start with the Historischer Weihnachtsmarkt at Gerhart-Hauptmann-Platz — Hamburg's most traditional Christmas market, evoking a medieval fair atmosphere with craft stalls, roasted meats and carved wood artisans. Then detour to see the iconic Chilehaus (1924), a UNESCO World Heritage expressionist brick skyscraper shaped like the prow of a ship — a stunning architectural highlight.",
            zh: "先前往格哈特-豪普特曼廣場的傳統歷史聖誕市集——漢堡最具傳統特色的聖誕市集，復現中世紀集市風貌，設有手工藝攤位、燒烤肉類及木刻工匠。隨後順道欣賞標誌性的智利大廈（1924年），一座形如船首的聯合國教科文組織世界遺產表現主義紅磚摩天大樓，是漢堡建築精華。",
            "zh-cn": "先前往格哈特-豪普特曼广场的传统历史圣诞市集——汉堡最具传统特色的圣诞市集，复现中世纪集市风貌，设有手工艺摊位、烧烤肉类及木刻工匠。随后顺道欣赏标志性的智利大厦（1924年），一座形如船首的联合国教科文组织世界遗产表现主义红砖摩天大楼，是汉堡建筑精华。"
          },
          meal: {
            icon: "🥐",
            en: "<strong>Breakfast:</strong> <em>Zeit für Brot</em> bakery — Hamburg's beloved artisan sourdough bakery, known for its exceptional cinnamon rolls (Zimtschnecken) and freshly ground specialty coffees. Queue early — it's always popular.",
            zh: "<strong>早餐：</strong><em>Zeit für Brot</em>麵包店——漢堡深受喜愛的手工酸麵包專門店，以出色的肉桂卷（Zimtschnecken）及現磨特選咖啡著稱。早些排隊，人氣一向旺盛。",
            "zh-cn": "<strong>早餐：</strong><em>Zeit für Brot</em>面包店——汉堡深受喜爱的手工酸面包专门店，以出色的肉桂卷（Zimtschnecken）及现磨特选咖啡著称。早些排队，人气一向旺盛。"
          },
          locations: [
            { lat: 53.5516, lng: 10.0073, label: { en: "Historischer Weihnachtsmarkt", zh: "傳統歷史聖誕市集", "zh-cn": "传统历史圣诞市集" } },
            { lat: 53.5479, lng: 10.0009, label: { en: "Chilehaus", zh: "智利大廈", "zh-cn": "智利大厦" } }
          ]
        }
      },
      {
        time: { en: "🌤️ Afternoon", zh: "🌤️ 下午", "zh-cn": "🌤️ 下午" },
        activity: {
          title: {
            en: "Landungsbrücken Harbour & Elbe Ferry Cruise",
            zh: "輪船碼頭港口與易北河渡輪遊覽",
            "zh-cn": "轮船码头港口与易北河渡轮游览"
          },
          desc: {
            en: "Take U3 to Landungsbrücken, Hamburg's famous historic piers stretching along the Elbe. Walk the 700m waterfront promenade for sweeping views of the container port, historic Cap San Diego museum ship, and the Köhlbrandbrücke bridge. Board the HVV Harbour Ferry Line 62 (covered by Hamburg Card) for a 15-minute scenic Elbe river cruise to Finkenwerder and back — the best free view of Hamburg's magnificent port.",
            zh: "乘搭U3至輪船碼頭，漢堡沿易北河延伸的著名歷史碼頭群。漫步700米濱海步道，俯瞰貨櫃港口、歷史博物館船「卡普聖地亞哥號」及科爾布蘭橋。乘搭HVV港口渡輪62路（漢堡城市卡覆蓋）前往Finkenwerder再返回，享受15分鐘易北河景觀航程——欣賞漢堡宏偉港口的最佳免費方式。",
            "zh-cn": "乘搭U3至轮船码头，汉堡沿易北河延伸的著名历史码头群。漫步700米滨海步道，俯瞰货柜港口、历史博物馆船「卡普圣地亚哥号」及科尔布兰桥。乘搭HVV港口渡轮62路（汉堡城市卡覆盖）前往Finkenwerder再返回，享受15分钟易北河景观航程——欣赏汉堡宏伟港口的最佳免费方式。"
          },
          meal: {
            icon: "🐟",
            en: "<strong>Lunch:</strong> Fresh <em>Fischbrötchen</em> (fish rolls) from the Fischmarkt stalls near Landungsbrücken — try Bismarck herring, prawn, or fresh North Sea shrimp on a crusty roll with pickled cucumber. A Hamburg waterfront ritual.",
            zh: "<strong>午餐：</strong>在輪船碼頭附近魚市場攤位品嚐新鮮<em>魚卷麵包</em>——可選俾斯麥鯡魚、蝦仁或北海鮮蝦配酸黃瓜，夾入脆皮麵包卷中，是漢堡海濱的必嚐儀式。",
            "zh-cn": "<strong>午餐：</strong>在轮船码头附近鱼市场摊位品尝新鲜<em>鱼卷面包</em>——可选俾斯麦鲱鱼、虾仁或北海鲜虾配酸黄瓜，夹入脆皮面包卷中，是汉堡海滨的必尝仪式。"
          },
          locations: [
            { lat: 53.5450, lng: 9.9672, label: { en: "Landungsbrücken Piers", zh: "輪船碼頭", "zh-cn": "轮船码头" } },
            { lat: 53.5418, lng: 9.9656, label: { en: "Cap San Diego Museum Ship", zh: "卡普聖地亞哥博物館船", "zh-cn": "卡普圣地亚哥博物馆船" } }
          ]
        }
      },
      {
        time: { en: "🌙 Late Afternoon & Departure", zh: "🌙 傍晚與離港", "zh-cn": "🌙 傍晚与离港" },
        activity: {
          title: {
            en: "Last Glühwein & Airport Transfer",
            zh: "最後一杯熱紅酒與機場交通",
            "zh-cn": "最后一杯热红酒与机场交通"
          },
          desc: {
            en: "Make your way back towards the city centre for a final stroll through any remaining Christmas markets. Enjoy one last Glühwein or a Heißer Bratapfel (hot baked apple with vanilla cream) as a farewell to Hamburg. Check out of your hotel, then take the S1 S-Bahn from Hauptbahnhof or Jungfernstieg directly to Hamburg Airport (25 min, every 10 minutes). Allow 2 hours before your flight for check-in.",
            zh: "返回市中心，最後漫遊剩餘聖誕市集。品嚐一杯告別熱紅酒或一份熱烤蘋果配香草忌廉（Heißer Bratapfel），向漢堡道別。辦理酒店退房後，從中央車站或少女橋站乘搭S1城郊列車直達漢堡機場（約25分鐘，每10分鐘一班）。請在航班起飛前至少預留2小時辦理登機手續。",
            "zh-cn": "返回市中心，最后漫游剩余圣诞市集。品尝一杯告别热红酒或一份热烤苹果配香草忌廉（Heißer Bratapfel），向汉堡道别。办理酒店退房后，从中央车站或少女桥站乘搭S1城郊列车直达汉堡机场（约25分钟，每10分钟一班）。请在航班起飞前至少预留2小时办理登机手续。"
          },
          meal: {
            icon: "🍽️",
            en: "<strong>Early Dinner / Airport:</strong> If time allows, grab a classic <em>Hamburger</em> at <em>Jim Block</em> (Hamburg's own beloved burger chain) near the Hauptbahnhof — a fitting farewell to the city that gave the burger its name.",
            zh: "<strong>早晚餐/機場：</strong>若時間許可，在中央車站附近的<em>Jim Block</em>（漢堡本地深受愛戴的漢堡包連鎖店）品嚐一個正宗Hamburger——向這座賦予漢堡包名稱的城市作最後致敬。",
            "zh-cn": "<strong>早晚餐/机场：</strong>若时间许可，在中央车站附近的<em>Jim Block</em>（汉堡本地深受爱戴的汉堡包连锁店）品尝一个正宗Hamburger——向这座赋予汉堡包名称的城市作最后致敬。"
          },
          locations: [
            { lat: 53.5532, lng: 10.0066, label: { en: "Hamburg Hauptbahnhof", zh: "漢堡中央車站", "zh-cn": "汉堡中央车站" } },
            { lat: 53.6303, lng: 9.9882, label: { en: "Hamburg Airport (HAM)", zh: "漢堡機場", "zh-cn": "汉堡机场" } }
          ]
        }
      }
    ],
    tip: {
      en: "The S1 S-Bahn to Hamburg Airport runs every 10 minutes and takes exactly 25 minutes from Hauptbahnhof. The last stop is 'Hamburg Airport (Flughafen)'. No changes required — very straightforward!",
      zh: "S1城郊列車每10分鐘一班直達漢堡機場，從中央車站出發約25分鐘。終點站為「Hamburg Airport (Flughafen)」，全程無需轉車，非常簡便！",
      "zh-cn": "S1城郊列车每10分钟一班直达汉堡机场，从中央车站出发约25分钟。终点站为「Hamburg Airport (Flughafen)」，全程无需转车，非常简便！"
    }
  }
];

// Export to global scope for browser execution
if (typeof window !== 'undefined') {
  window.ITINERARY_DATA = ITINERARY_DATA;
}
