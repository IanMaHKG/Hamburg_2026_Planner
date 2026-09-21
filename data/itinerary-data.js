/**
 * @file itinerary-data.js
 * @description DATA SOURCE — Day-by-Day schedule for Hamburg 2026 Winter City Break.
 * Sets window.ITINERARY_DATA for consumption by render.js and map.js.
 *
 * Hamburg, Germany · Nov 26–28, 2026 · Couple · Christmas Markets & Harbour Edition
 * Trilingual: English / 繁體中文 (Traditional Chinese) / 简体中文 (Simplified Chinese)
 * Pacing: Anti-fatigue, hotel check-in at 3:00 PM & check-out at 12:00 PM respected.
 * Bilingual standard: Location names in Chinese feature German spellings: 中文名稱 (Deutscher Name).
 */

const ITINERARY_DATA = [
  /* ════ DAY 1 ════ */
  {
    id: "day-1",
    dayNum: "01",
    date: "Nov 26",
    region: "city-centre",
    regionLabel: {
      en: "Altstadt & City Centre",
      zh: "老城區與市中心 (Altstadt & Neustadt)",
      "zh-cn": "老城区与市中心 (Altstadt & Neustadt)"
    },
    title: {
      en: "Arrival, Relaxed City Centre, 3 PM Hotel Recharge & Evening Christmas Markets",
      zh: "抵達漢堡、市中心漫遊、下午3點萬怡充電小憩與夜光聖誕市集 (Rathausmarkt)",
      "zh-cn": "抵达汉堡、市中心漫游、下午3点万怡充电小憩与夜光圣诞市集 (Rathausmarkt)"
    },
    tags: [
      { type: "city", text: "🏙️ Altstadt / Center" },
      { type: "pace", en: "🎄 Festive & Relaxed", zh: "🎄 輕鬆節日步調", "zh-cn": "🎄 轻松节日步调" }
    ],
    blocks: [
      {
        time: {
          en: "🌅 Morning / Flight Arrival (10:10)",
          zh: "🌅 早上 / 航班抵達 (10:10)",
          "zh-cn": "🌅 早上 / 航班抵达 (10:10)"
        },
        activity: {
          title: {
            en: "Flight BA960 Arrival (10:10), S1 Transit & Hotel Luggage Drop",
            zh: "英航 BA960 抵達（10:10）、S1機場快線與萬怡酒店寄存行李 (Courtyard by Marriott)",
            "zh-cn": "英航 BA960 抵达（10:10）、S1机场快线与万怡酒店寄存行李 (Courtyard by Marriott)"
          },
          desc: {
            en: "British Airways flight BA960 (departing London Heathrow T5 at 07:30 GMT) touches down at Hamburg Airport (HAM Terminal 2) at 10:10 CET. Clear Schengen border control, collect baggage, and take the escalator to the S1 S-Bahn station beneath the terminal. Purchase your 3-Day Hamburg Card at the ticket machines, then board the direct S1 train to <strong>Berliner Tor</strong> (27 min). It's an easy 4-minute walk to <strong>Courtyard by Marriott Hamburg City</strong> (Adenauerallee 52). Drop luggage with the concierge, freshen up, and step out hands-free!",
            zh: "乘搭英國航空 BA960（07:30 GMT 倫敦希斯路T5起飛），於 10:10 CET 準時降落漢堡機場 (Flughafen Hamburg T2)。通過申根入境手續並領取行李後，前往航站樓地下月台乘搭S1城郊列車直達<strong>柏林門站 (Berliner Tor)</strong>（約27分鐘）。出站步行約4分鐘即抵達<strong>漢堡市萬怡酒店 (Courtyard by Marriott Hamburg City)</strong>（Adenauerallee 52）。於禮賓部寄存行李並稍事整裝，隨即輕鬆展開冬日漢堡假期！",
            "zh-cn": "乘搭英国航空 BA960（07:30 GMT 伦敦希思罗T5起飞），于 10:10 CET 准时降落汉堡机场 (Flughafen Hamburg T2)。通过申根入境手续并领取行李后，前往航站楼地下月台乘搭S1城郊列车直达<strong>柏林门站 (Berliner Tor)</strong>（约27分钟）。出站步行约4分钟即抵达<strong>汉堡市万怡酒店 (Courtyard by Marriott Hamburg City)</strong>（Adenauerallee 52）。于礼宾部寄存行李并稍事整装，随即轻松展开冬日汉堡假期！"
          },
          meal: {
            icon: "☕",
            en: "<strong>Brunch / Coffee:</strong> <em>Café Paris</em> near the Rathaus — a Hamburg institution since 1882 with hand-painted tiled ceilings, fluffy omelettes, smoked salmon crêpes, and rich coffee.",
            zh: "<strong>早午餐 / 咖啡：</strong><em>巴黎咖啡館 (Café Paris)</em>位於市政廳 (Rathaus) 附近，1882年創立的漢堡老字號，在新藝術瓷磚穹頂下享用熱騰騰的法式煎蛋卷、煙三文魚薄餅與香濃拿鐵。",
            "zh-cn": "<strong>早午餐 / 咖啡：</strong><em>巴黎咖啡馆 (Café Paris)</em>位于市政厅 (Rathaus) 附近，1882年创立的汉堡老字号，在新艺术瓷砖穹顶下享用热腾腾的法式煎蛋卷、烟三文鱼薄饼与香浓拿铁。"
          },
          walkingInfo: {
            en: "🚶 4 min walk (300m) from Berliner Tor to Courtyard by Marriott",
            zh: "🚶 柏林門站至萬怡酒店步行約4分鐘 (300米)",
            "zh-cn": "🚶 柏林门站至万怡酒店步行约4分钟 (300米)"
          },
          locations: [
            { lat: 53.6303, lng: 9.9882, label: { en: "Hamburg Airport (HAM T2)", zh: "漢堡機場 (Flughafen Hamburg T2)", "zh-cn": "汉堡机场 (Flughafen Hamburg T2)" } },
            { lat: 53.5534, lng: 10.0105, label: { en: "Courtyard by Marriott Hamburg City", zh: "漢堡市萬怡酒店 (Courtyard by Marriott)", "zh-cn": "汉堡市万怡酒店 (Courtyard by Marriott)" } },
            { lat: 53.5532, lng: 10.0066, label: { en: "Hamburg Hauptbahnhof", zh: "漢堡中央車站 (Hamburg Hbf)", "zh-cn": "汉堡中央车站 (Hamburg Hbf)" } }
          ]
        }
      },
      {
        time: {
          en: "🌤️ Midday & Early Afternoon (12:30–15:00)",
          zh: "🌤️ 中午與下午早段 (12:30–15:00)",
          "zh-cn": "🌤️ 中午与下午早段 (12:30–15:00)"
        },
        activity: {
          title: {
            en: "Hamburg Rathaus, Alster Arcades & Jungfernstieg Shopping",
            zh: "漢堡市政廳、阿爾斯特拱廊與少女大道名店街漫遊 (Altstadt & Jungfernstieg)",
            "zh-cn": "汉堡市政厅、阿尔斯特拱廊与少女大道名店街漫游 (Altstadt & Jungfernstieg)"
          },
          desc: {
            en: "After brunch, take a relaxed walk around the neo-Renaissance Hamburg Rathaus (1897). Admire the ornate Alster Arcades (Alsterarkaden) reflecting in the Kleine Alster canal. Stroll along Jungfernstieg bordering the Inner Alster Lake (Binnenalster). Browse luxury boutiques, then head into Europa Passage — a stunning 5-floor glass-domed shopping gallery offering a warm indoor respite.",
            zh: "早午餐後漫步欣賞宏偉壯麗的新文藝復興式<strong>漢堡市政廳 (Hamburger Rathaus)</strong>。穿梭於優雅的<strong>阿爾斯特拱廊 (Alsterarkaden)</strong>，隨後沿著內阿爾斯特湖畔漫步於<strong>少女大道 (Jungfernstieg)</strong>。瀏覽兩旁優雅精品店，再步入<strong>歐洲廣場 (Europa Passage)</strong>——5層玻璃圓頂的溫暖室內購物長廊，輕鬆寫意。",
            "zh-cn": "早午餐后漫步欣赏宏伟壮丽的新文艺复兴式<strong>汉堡市政厅 (Hamburger Rathaus)</strong>。穿梭于优雅的<strong>阿尔斯特拱廊 (Alsterarkaden)</strong>，随后沿着内阿尔斯特湖畔漫步于<strong>少女大道 (Jungfernstieg)</strong>。浏览两旁优雅精品店，再步入<strong>欧洲广场 (Europa Passage)</strong>——5层玻璃圆顶的温暖室内购物长廊，轻松写意。"
          },
          meal: {
            icon: "🥐",
            en: "<strong>Afternoon Treat:</strong> <em>Zeit für Brot</em> (Große Bleichen) — legendary giant warm cinnamon rolls (Zimtschnecken) and specialty oat-milk flat whites.",
            zh: "<strong>下午茶休閒：</strong><em>Zeit für Brot 手工有機烘焙坊</em> (Große Bleichen)——全漢堡公認最頂級的現烤熱肉桂蝸牛卷 (Zimtschnecken) 配燕麥奶白咖啡，暖胃舒心。",
            "zh-cn": "<strong>下午茶休闲：</strong><em>Zeit für Brot 手工有机烘焙坊</em> (Große Bleichen)——全汉堡公认最顶级的现烤热肉桂蜗牛卷 (Zimtschnecken) 配燕麦奶白咖啡，暖胃舒心。"
          },
          walkingInfo: {
            en: "🚶 ~5 min walk (400m) along Jungfernstieg to Europa Passage",
            zh: "🚶 少女大道至歐洲廣場步行約5分鐘 (400米)",
            "zh-cn": "🚶 少女大道至欧洲广场步行约5分钟 (400米)"
          },
          photoTip: {
            en: "📸 Photo Spot: Walk along Kleine Alster to capture the white arches of Alsterarkaden with the neo-Renaissance Rathaus tower and swans in frame.",
            zh: "📸 經典拍照機位：沿著小阿爾斯特運河漫步，將阿爾斯特純白拱廊 (Alsterarkaden) 與壯麗市政廳塔樓、運河天鵝同框拍攝，古典優雅。",
            "zh-cn": "📸 经典拍照机位：沿着小阿尔斯特运河漫步，将阿尔斯特纯白拱廊 (Alsterarkaden) 与壮丽市政厅塔楼、运河天鹅同框拍摄，古典优雅。"
          },
          locations: [
            { lat: 53.5503, lng: 9.9998, label: { en: "Hamburg Rathaus", zh: "漢堡市政廳 (Hamburger Rathaus)", "zh-cn": "汉堡市政厅 (Hamburger Rathaus)" } },
            { lat: 53.5535, lng: 9.9945, label: { en: "Jungfernstieg", zh: "少女大道 (Jungfernstieg)", "zh-cn": "少女大道 (Jungfernstieg)" } },
            { lat: 53.5537, lng: 10.0003, label: { en: "Europa Passage", zh: "歐洲廣場 (Europa Passage)", "zh-cn": "欧洲广场 (Europa Passage)" } }
          ]
        }
      },
      {
        time: {
          en: "🛌 Mid-Afternoon Rest (15:00–16:30)",
          zh: "🛌 下午中段充電小憩 (15:00–16:30)",
          "zh-cn": "🛌 下午中段充电小憩 (15:00–16:30)"
        },
        activity: {
          title: {
            en: "Hotel Room Check-in (15:00) & Power Rest at Courtyard",
            zh: "酒店辦理入住 (15:00) 與萬怡酒店充電休憩 (Courtyard by Marriott)",
            "zh-cn": "酒店办理入住 (15:00) 与万怡酒店充电休憩 (Courtyard by Marriott)"
          },
          desc: {
            en: "Hop on the U3 back to Berliner Tor (10 min) for your official <strong>3:00 PM room check-in</strong> at <strong>Courtyard by Marriott Hamburg City</strong>. Collect luggage from the concierge, unpack, take a refreshing hot shower, and enjoy a cozy 90-minute power nap or hot tea in your room. Recovering from your 4:30 AM London wake-up ensures you'll be energized and enthusiastic for the magical evening ahead!",
            zh: "搭乘U3地鐵約10分鐘輕鬆返回柏林門站 (Berliner Tor)，下午3:00準時辦理<strong>漢堡市萬怡酒店 (Courtyard by Marriott Hamburg City)</strong>房間入住手續。領取寄存行李、開箱安頓，洗個熱氣騰騰的淋浴，並在舒適溫暖的房間內小憩90分鐘。清晨4點半從倫敦早起出發的疲勞一掃而空，精神飽滿迎接迷人夜景！",
            "zh-cn": "搭乘U3地铁约10分钟轻松返回柏林门站 (Berliner Tor)，下午3:00准时办理<strong>汉堡市万怡酒店 (Courtyard by Marriott Hamburg City)</strong>房间入住手续。领取寄存行李、开箱安顿，洗个热气腾腾的淋浴，并在舒适温暖的房间内小憩90分钟。清晨4点半从伦敦早起出发的疲劳一扫而空，精神饱满迎接迷人夜景！"
          },
          meal: {
            icon: "🧖",
            en: "<strong>Relaxation:</strong> Enjoy a hot cup of in-room tea or take advantage of the hotel's complimentary Finnish sauna to warm your muscles before the evening stroll.",
            zh: "<strong>舒壓暖身：</strong>在房內泡杯香熱花草茶，亦可體驗萬怡酒店附設的芬蘭桑拿浴室 (Finnish Sauna)，徹底驅散戶外寒意。",
            "zh-cn": "<strong>舒压暖身：</strong>在房内泡杯香热花草茶，亦可体验万怡酒店附设的芬兰桑拿浴室 (Finnish Sauna)，彻底驱散户外寒意。"
          },
          walkingInfo: {
            en: "🚶 4 min walk (300m) from Berliner Tor station",
            zh: "🚶 柏林門站出站步行4分鐘 (300米)",
            "zh-cn": "🚶 柏林门站出站步行4分钟 (300米)"
          },
          locations: [
            { lat: 53.5534, lng: 10.0105, label: { en: "Courtyard by Marriott Hamburg City", zh: "漢堡市萬怡酒店 (Courtyard by Marriott)", "zh-cn": "汉堡市万怡酒店 (Courtyard by Marriott)" } },
            { lat: 53.5532, lng: 10.0248, label: { en: "Berliner Tor Station", zh: "柏林門站 (Berliner Tor)", "zh-cn": "柏林门站 (Berliner Tor)" } }
          ]
        }
      },
      {
        time: {
          en: "🌙 Evening & Dusk (17:00 onwards)",
          zh: "🌙 傍晚與夜間 (17:00起)",
          "zh-cn": "🌙 傍晚与夜间 (17:00起)"
        },
        activity: {
          title: {
            en: "Rathausmarkt Illuminated Christmas Market & Fleetinsel",
            zh: "市政廳夜光聖誕市集與弗萊廷島市集巡遊 (Rathausmarkt & Fleetinsel)",
            "zh-cn": "市政厅夜光圣诞市集与弗莱廷岛市集巡游 (Rathausmarkt & Fleetinsel)"
          },
          desc: {
            en: "Fully rested, take the U3 back to the grand Rathausmarkt Christmas Market. At dusk, it glows with thousands of golden lights framing the floodlit town hall. Sip spiced Glühwein, nibble hot roasted almonds, and admire artisan woodcarvings. Then stroll 10 minutes to the intimate, romantic Fleetinsel Christmas Market — fairy lights reflecting on the water. Finally, enjoy a short walk to your authentic German dinner.",
            zh: "養精蓄銳後乘U3返回<strong>市政廳廣場聖誕市集 (Weihnachtsmarkt auf dem Rathausmarkt)</strong>，入黑後化身閃耀童話仙境，市政廳被金光照亮。手握香料熱紅酒 (Glühwein)，品嚐銅鍋現炒焦糖杏仁。隨後漫步10分鐘至精緻浪漫的<strong>弗萊廷島聖誕市集 (Weihnachtsmarkt Fleetinsel)</strong>——運河水面倒映著金黃彩燈，滿溢節日溫馨。最後信步前往晚餐。",
            "zh-cn": "养精蓄锐后乘U3返回<strong>市政厅广场圣诞市集 (Weihnachtsmarkt auf dem Rathausmarkt)</strong>，入黑后化身闪耀童话仙境，市政厅被金光照亮。手握香料热红酒 (Glühwein)，品尝铜锅现炒焦糖杏仁。随后漫步10分钟至精致浪漫的<strong>弗莱廷岛圣诞市集 (Weihnachtsmarkt Fleetinsel)</strong>——运河水面倒映着金黄彩灯，满溢节日温馨。最后信步前往晚餐。"
          },
          meal: {
            icon: "🍺",
            en: "<strong>Dinner:</strong> <em>Gröninger Privatbrauerei</em> (Altstadt) — Hamburg's oldest brewery tavern (1793). Crackling roast pork knuckle and unfiltered Gröninger Pils poured straight from oak barrels. Hearty, authentic, and close to your hotel.",
            zh: "<strong>晚餐：</strong><em>格勒寧格私家釀酒坊 (Gröninger Privatbrauerei)</em>位於老城區 (Altstadt)，是漢堡現存最古老釀酒坊（始建於1793年）。品嚐橡木桶直送未過濾皮爾森啤酒與皮脆肉嫩的烤豬手，氣氛熱烈地道，且鄰近地鐵便於返回酒店。",
            "zh-cn": "<strong>晚餐：</strong><em>格勒宁格私家酿酒坊 (Gröninger Privatbrauerei)</em>位于老城区 (Altstadt)，是汉堡现存最古老酿酒坊（始建于1793年）。品尝橡木桶直送未过滤皮尔森啤酒与皮脆肉嫩的烤猪手，气氛热烈地道，且邻近地铁便于返回酒店。"
          },
          walkingInfo: {
            en: "🚶 ~10 min stroll (800m) between markets and brewery",
            zh: "🚶 市集間與酒館步行約10分鐘 (800米)",
            "zh-cn": "🚶 市集间与酒馆步行约10分钟 (800米)"
          },
          photoTip: {
            en: "📸 Photo Spot: Position yourself at the south end facing the illuminated Rathaus with the giant Christmas tree in frame after 16:30 lights turn on.",
            zh: "📸 經典拍照機位：站在市集南端仰拍被千盞彩燈照耀的市政廳與巨型聖誕樹，節日氣氛絕頂震撼。",
            "zh-cn": "📸 经典拍照机位：站在市集南端仰拍被千盏彩灯照耀的市政厅与巨型圣诞树，节日气氛绝顶震撼。"
          },
          locations: [
            { lat: 53.5503, lng: 9.9998, label: { en: "Rathausmarkt Christmas Market", zh: "市政廳聖誕市集 (Weihnachtsmarkt Rathausmarkt)", "zh-cn": "市政厅圣诞市集 (Weihnachtsmarkt Rathausmarkt)" } },
            { lat: 53.5476, lng: 9.9907, label: { en: "Fleetinsel Christmas Market", zh: "弗萊廷島聖誕市集 (Weihnachtsmarkt Fleetinsel)", "zh-cn": "弗莱廷岛圣诞市集 (Weihnachtsmarkt Fleetinsel)" } },
            { lat: 53.5469, lng: 9.9942, label: { en: "Gröninger Privatbrauerei", zh: "格勒寧格私家釀酒坊 (Gröninger Privatbrauerei)", "zh-cn": "格勒宁格私家酿酒坊 (Gröninger Privatbrauerei)" } }
          ]
        }
      }
    ],
    tip: {
      en: "This relaxed itinerary guarantees a stress-free first day. The mid-afternoon hotel rest splits the day into two gentle 2.5-hour segments so you stay warm and energetic.",
      zh: "首日行程主打輕鬆防疲勞：下午安排回酒店辦理入住及休息，將全天拆分為兩段各約2.5小時的漫遊，既暖身又精神飽滿。",
      "zh-cn": "首日行程主打轻松防疲劳：下午安排回酒店办理入住及休息，将全天拆分为两段各约2.5小时的漫游，既暖身又精神饱满。"
    }
  },

  /* ════ DAY 2 ════ */
  {
    id: "day-2",
    dayNum: "02",
    date: "Nov 27",
    region: "hafencity",
    regionLabel: {
      en: "Maritime & Creative West",
      zh: "港口精華與西區 (HafenCity & Sternschanze)",
      "zh-cn": "港口精华与西区 (HafenCity & Sternschanze)"
    },
    title: {
      en: "Speicherstadt, Wunderland, Harbour Walk, Elphi Sunset & Bullerei Dinner",
      zh: "倉庫城、微型奇蹟世界、港口漫步、易北愛樂廳夕陽與明星主廚晚宴",
      "zh-cn": "仓库城、微型奇迹世界、港口漫步、易北爱乐厅夕阳与明星主厨晚宴"
    },
    tags: [
      { type: "city", text: "⚓ HafenCity & West" },
      { type: "activity", en: "🌊 Waterfront Views", zh: "🌊 絕美水岸風光", "zh-cn": "🌊 绝美水岸风光" }
    ],
    blocks: [
      {
        time: {
          en: "🌅 Morning (10:00–13:00)",
          zh: "🌅 早上 (10:00–13:00)",
          "zh-cn": "🌅 早上 (10:00–13:00)"
        },
        activity: {
          title: {
            en: "Speicherstadt Canals & Miniatur Wunderland",
            zh: "倉庫城運河漫步與微型奇蹟世界 (Speicherstadt & Miniatur Wunderland)",
            "zh-cn": "仓库城运河漫步与微型奇迹世界 (Speicherstadt & Miniatur Wunderland)"
          },
          desc: {
            en: "Take U1/U3 or a short 15-minute walk south to the UNESCO-listed Speicherstadt — the world's largest historic warehouse complex with dark red-brick Gothic facades reflected in foggy canals. Head into Miniatur Wunderland, Europe's premier model railway and airport exhibition. Marvel at intricate miniature worlds spanning Hamburg, Scandinavia, and the Alps. (Pre-book timed tickets to skip queues).",
            zh: "從市中心乘地鐵或步行約15分鐘南下聯合國教科文組織世界遺產<strong>倉庫城 (Speicherstadt)</strong>，漫步於1888年建造的新哥德式紅磚運河島嶼群。隨後參觀歐洲人氣極高的<strong>微型奇蹟世界 (Miniatur Wunderland)</strong>，欣賞極其逼真細膩的微縮漢堡港、斯堪的納維亞與阿爾卑斯鐵路模型世界（請提前網上預約指定時段門票以節省排隊時間）。",
            "zh-cn": "从市中心乘地铁或步行约15分钟南下联合国教科文组织世界遗产<strong>仓库城 (Speicherstadt)</strong>，漫步于1888年建造的新哥德式红砖运河岛屿群。随后参观欧洲人气极高的<strong>微型奇迹世界 (Miniatur Wunderland)</strong>，欣赏极其逼真细腻的微缩汉堡港、斯堪的纳维亚与阿尔卑斯铁路模型世界（请提前网上预约指定时段门票以节省排队时间）。"
          },
          bookingUrl: "https://www.miniatur-wunderland.com/visit/tickets/",
          meal: {
            icon: "☕",
            en: "<strong>Breakfast / Coffee:</strong> <em>Café Knuth</em> or a local café — artisan German breakfast platter with rye bread, cheeses, and hot Milchkaffee.",
            zh: "<strong>早餐 / 咖啡：</strong><em>Café Knuth</em>或當地咖啡館享用傳統德式早餐拼盤 (Frühstücksbrettchen)：新鮮黑麥麵包、精選起司、煙燻火腿與香濃拿鐵咖啡。",
            "zh-cn": "<strong>早餐 / 咖啡：</strong><em>Café Knuth</em>或当地咖啡馆享用传统德式早餐拼盘 (Frühstücksbrettchen)：新鲜黑麦面包、精选起司、烟熏火腿与香浓拿铁咖啡。"
          },
          walkingInfo: {
            en: "🚶 ~8 min walk (650m) from Baumwall to Miniatur Wunderland",
            zh: "🚶 Baumwall站至微型奇蹟世界步行約8分鐘 (650米)",
            "zh-cn": "🚶 Baumwall站至微型奇迹世界步行约8分钟 (650米)"
          },
          photoTip: {
            en: "📸 Photo Spot: Stand on Poggenmühlenbrücke bridge for the iconic Wasserschloss reflection shot.",
            zh: "📸 經典拍照機位：站在波根米倫橋 (Poggenmühlenbrücke) 上，取景著名的水上城堡 (Wasserschloss) 運河倒影。",
            "zh-cn": "📸 经典拍照机位：站在波根米伦桥 (Poggenmühlenbrücke) 上，取景著名的水上城堡 (Wasserschloss) 运河倒影。"
          },
          locations: [
            { lat: 53.5435, lng: 9.9938, label: { en: "Speicherstadt", zh: "倉庫城 (Speicherstadt)", "zh-cn": "仓库城 (Speicherstadt)" } },
            { lat: 53.5435, lng: 9.9894, label: { en: "Miniatur Wunderland", zh: "微型奇蹟世界 (Miniatur Wunderland)", "zh-cn": "微型奇迹世界 (Miniatur Wunderland)" } }
          ]
        }
      },
      {
        time: {
          en: "🌤️ Midday & Afternoon (13:00–15:30)",
          zh: "🌤️ 中午與下午早段 (13:00–15:30)",
          "zh-cn": "🌤️ 中午与下午早段 (13:00–15:30)"
        },
        activity: {
          title: {
            en: "Landungsbrücken Harbour, Brücke 10 Lunch & Alter Elbtunnel",
            zh: "輪船碼頭港口、Brücke 10 魚卷午餐與舊易北河隧道 (Landungsbrücken & Alter Elbtunnel)",
            "zh-cn": "轮船码头港口、Brücke 10 鱼卷午餐与旧易北河隧道 (Landungsbrücken & Alter Elbtunnel)"
          },
          desc: {
            en: "Grab a warm Franzbrötchen from a Speicherstadt kiosk, then take the U3 right along the elevated harbour viaduct to <strong>Landungsbrücken</strong>. Walk the floating piers, admire the museum cargo ship Cap San Diego, and take in the Elbe port vistas. Next, descend into the 1911-built <strong>Alter Elbtunnel (Old Elbe Tunnel)</strong> — a stunningly tiled underwater pedestrian tunnel. Then enjoy a freshly made Fischbrötchen at Pier 10 right by the water.",
            zh: "在倉庫城買個剛出爐的 Franzbrötchen (肉桂酥餅)，乘搭U3高架景觀地鐵至<strong>輪船碼頭 (Landungsbrücken)</strong>。漫步水上浮動碼頭，仰望巨型歷史貨船。接著探索建於1911年的<strong>舊易北河隧道 (Alter Elbtunnel)</strong>，乘搭古老升降機深入河底這條鋪滿美麗瓷磚的行人隧道。隨後在 10號碼頭的 Brücke 10 品嚐地道現製脆皮魚堡午餐。",
            "zh-cn": "在仓库城买个刚出炉的 Franzbrötchen (肉桂酥饼)，乘搭U3高架景观地铁至<strong>轮船码头 (Landungsbrücken)</strong>。漫步水上浮动码头，仰望巨型历史货船。接着探索建于1911年的<strong>旧易北河隧道 (Alter Elbtunnel)</strong>，乘搭古老升降机深入河底这条铺满美丽瓷砖的行人隧道。随后在 10号码头的 Brücke 10 品尝地道现制脆皮鱼堡午餐。"
          },
          meal: {
            icon: "🐟",
            en: "<strong>Harbour Lunch:</strong> <em>Brücke 10</em> (Pier 10) — Hamburg's best North Sea shrimp (Krabbenbrötchen) and pickled herring rolls on warm crusty baguettes with scenic waterfront seating.",
            zh: "<strong>海濱午餐：</strong><em>Brücke 10 碼頭魚堡</em> (10號碼頭)——品嚐全城馳名的北海鮮蝦脆卷 (Krabbenbrötchen) 或俾斯麥鯡魚堡，坐在水岸長凳邊吃邊欣賞海港景致。",
            "zh-cn": "<strong>海滨午餐：</strong><em>Brücke 10 码头鱼堡</em> (10号码头)——品尝全城驰名的北海鲜虾脆卷 (Krabbenbrötchen) 或俾斯麦鲱鱼堡，坐在水岸长凳边吃边欣赏海港景致。"
          },
          walkingInfo: {
            en: "🚶 ~5 min stroll (350m) along floating piers to Brücke 10",
            zh: "🚶 沿水上浮動碼頭漫步約5分鐘 (350米) 即達10號碼頭",
            "zh-cn": "🚶 沿水上浮动码头漫步约5分钟 (350米) 即达10号码头"
          },
          photoTip: {
            en: "📸 Photo Spot: Walk up to the Stintfang viewpoint (above U3 Landungsbrücken station) for the best panoramic view of the Elbe river, docks, and Elbphilharmonie.",
            zh: "📸 經典拍照機位：登上U3碼頭站上方的斯廷特芳觀景台 (Stintfang)，居高臨下將整個易北河、港口巨輪碼頭與易北愛樂廳盡收鏡頭底！",
            "zh-cn": "📸 经典拍照机位：登上U3码头站上方的斯廷特芳观景台 (Stintfang)，居高临下将整个易北河、港口巨轮码头与易北爱乐厅尽收镜头底！"
          },
          locations: [
            { lat: 53.5450, lng: 9.9672, label: { en: "Landungsbrücken Piers", zh: "輪船碼頭 (Landungsbrücken)", "zh-cn": "轮船码头 (Landungsbrücken)" } },
            { lat: 53.5435, lng: 9.9665, label: { en: "Alter Elbtunnel", zh: "舊易北河隧道 (Alter Elbtunnel)", "zh-cn": "旧易北河隧道 (Alter Elbtunnel)" } },
            { lat: 53.5458, lng: 9.9655, label: { en: "Brücke 10", zh: "Brücke 10 碼頭魚堡 (Brücke 10)", "zh-cn": "Brücke 10 码头鱼堡 (Brücke 10)" } }
          ]
        }
      },
      {
        time: {
          en: "🌙 Late Afternoon & Evening (15:30 onwards)",
          zh: "🌙 傍晚與夜間 (15:30起)",
          "zh-cn": "🌙 傍晚与夜间 (15:30起)"
        },
        activity: {
          title: {
            en: "Ferry 72 to Elbphilharmonie Sunset & Dinner at Bullerei",
            zh: "乘搭72路渡輪至易北愛樂廳賞夕陽，晚間 Bullerei 明星主廚晚宴",
            "zh-cn": "乘搭72路渡轮至易北爱乐厅赏夕阳，晚间 Bullerei 明星主厨晚宴"
          },
          desc: {
            en: "From Landungsbrücken, hop on the <strong>HADAG Ferry 72</strong> (included in your transit pass) directly to the <strong>Elbphilharmonie</strong>. Arriving by water is a true Hamburg experience! Ascend the curved escalator to the Plaza (free ticket required) for breathtaking 360° sunset views (~16:00) over the port. For dinner, head 10 minutes by U3 to the hip Sternschanze quarter for a memorable Friday night dinner at celebrity chef Tim Mälzer's Bullerei.",
            zh: "從輪船碼頭乘搭 <strong>72路渡輪 (HADAG Ferry 72)</strong>（已包含在地鐵通票內）走水路直達<strong>易北愛樂廳 (Elbphilharmonie)</strong>，體驗獨特海港風情！搭乘標誌性弧形電梯登上觀景台 (Plaza)，飽覽黃昏時分(約16:00)的港口夕陽全景。晚餐乘U3約10分鐘至熱門的桑切斯文創區 (Sternschanze)，在名廚 Tim Mälzer 的舊屠宰場紅磚餐廳 <strong>Bullerei</strong> 享用果木牛扒，盡享週五迷人夜生活！",
            "zh-cn": "从轮船码头乘搭 <strong>72路渡轮 (HADAG Ferry 72)</strong>（已包含在地铁通票内）走水路直达<strong>易北爱乐厅 (Elbphilharmonie)</strong>，体验独特海港风情！搭乘标志性弧形电梯登上观景台 (Plaza)，饱览黄昏时分(约16:00)的港口夕阳全景。晚餐乘U3约10分钟至热门的桑切斯文创区 (Sternschanze)，在名厨 Tim Mälzer 的旧屠宰场红砖餐厅 <strong>Bullerei</strong> 享用果木牛扒，尽享周五迷人夜生活！"
          },
          bookingUrl: "https://www.elbphilharmonie.de/en/plaza-tickets",
          meal: {
            icon: "🍷",
            en: "<strong>Friday Night Dinner:</strong> <em>Bullerei</em> (Sternschanze) — flame-grilled dry-aged steaks, seasonal roasted roots, and artisanal cocktails in an atmospheric loft setting. (Book well in advance).",
            zh: "<strong>週五精選晚餐：</strong><em>Bullerei 明星名廚時髦餐館</em> (Sternschanze)——炭火炙烤乾式熟成牛扒、烤時令冬蔬菜與迷迭香煙燻特調雞尾酒，挑高工業Loft燭光氣氛非凡（請務必提前預約）。",
            "zh-cn": "<strong>周五精选晚餐：</strong><em>Bullerei 明星名厨时髦餐馆</em> (Sternschanze)——炭火炙烤干式熟成牛扒、烤时令冬蔬菜与迷迭香烟熏特调鸡尾酒，挑高工业Loft烛光气氛非凡（请务必提前预约）。"
          },
          walkingInfo: {
            en: "🚶 ~5 min Ferry ride from Landungsbrücken to Elbphilharmonie",
            zh: "🚶 乘渡輪5分鐘即可從碼頭直達易北愛樂廳",
            "zh-cn": "🚶 乘渡轮5分钟即可从码头直达易北爱乐厅"
          },
          photoTip: {
            en: "📸 Photo Spot: Visit the Plaza level (37m high). Face west for the harbour sunset panorama, then capture the iconic curved glass wave ceiling.",
            zh: "📸 經典拍照機位：登上37米高的易北愛樂廳觀景台 (Plaza)，面朝西側遠眺港口落日全景，回頭還可打卡標誌性波浪弧形玻璃穹頂。",
            "zh-cn": "📸 经典拍照机位：登上37米高的易北爱乐厅观景台 (Plaza)，面朝西侧远眺港口落日全景，回头还可打卡标志性波浪弧形玻璃穹顶。"
          },
          locations: [
            { lat: 53.5413, lng: 9.9841, label: { en: "Elbphilharmonie Plaza", zh: "易北愛樂廳觀景台 (Elbphilharmonie Plaza)", "zh-cn": "易北爱乐厅观景台 (Elbphilharmonie Plaza)" } },
            { lat: 53.5626, lng: 9.9666, label: { en: "Bullerei", zh: "Bullerei 明星餐館 (Bullerei, Sternschanze)", "zh-cn": "Bullerei 明星餐馆 (Bullerei, Sternschanze)" } }
          ]
        }
      }
    ],
    tip: {
      en: "This day seamlessly connects all of Hamburg's maritime highlights in one contiguous sweep, ending with a majestic sunset over the harbour and a fantastic Friday dinner.",
      zh: "這天完美串聯漢堡所有海事精華，行程緊湊順暢不走回頭路，以壯麗的海港日落與頂級週五晚宴作結。",
      "zh-cn": "这天完美串联汉堡所有海事精华，行程紧凑顺畅不走回头路，以壮丽的海港日落与顶级周五晚宴作结。"
    }
  },

  /* ════ DAY 3 ════ */
  {
    id: "day-3",
    dayNum: "03",
    date: "Nov 28",
    region: "alster",
    regionLabel: {
      en: "St. Georg & Departure",
      zh: "聖喬治區與離港 (St. Georg & Abreise)",
      "zh-cn": "圣乔治区与离港 (St. Georg & Abreise)"
    },
    title: {
      en: "Hotel Check-out, St. Georg & Außenalster Stroll, Flight BA967 (16:45)",
      zh: "11:30 萬怡酒店退房、聖喬治區湖畔漫步與 BA967 飛返倫敦 (Außenalster & Flughafen)",
      "zh-cn": "11:30 万怡酒店退房、圣乔治区湖畔漫步与 BA967 飞返伦敦 (Außenalster & Flughafen)"
    },
    tags: [
      { type: "city", text: "🌳 Outer Environs" },
      { type: "pace", en: "✈️ Relaxing Departure", zh: "✈️ 從容離港", "zh-cn": "✈️ 从容离港" }
    ],
    blocks: [
      {
        time: {
          en: "🌅 Morning & Check-out (09:30–11:30)",
          zh: "🌅 早上與退房手續 (09:30–11:30)",
          "zh-cn": "🌅 早上与退房手续 (09:30–11:30)"
        },
        activity: {
          title: {
            en: "Leisurely Morning, Pack & Hotel Check-out (by 11:30)",
            zh: "悠閒早晨、整理行裝與萬怡退房手續 (Courtyard by Marriott, 11:30前)",
            "zh-cn": "悠闲早晨、整理行装与万怡退房手续 (Courtyard by Marriott, 11:30前)"
          },
          desc: {
            en: "Enjoy a leisurely morning without rushing. Pack your luggage and complete official check-out at <strong>Courtyard by Marriott Hamburg City</strong> by 11:30 AM (comfortably ahead of the hotel's 12:00 PM check-out deadline). Leave your heavy bags securely with the hotel concierge for free storage. Step out completely hands-free with only your daypacks!",
            zh: "清晨從容起床，毋須慌忙趕路。整理行李並於上午11:30前完成<strong>漢堡市萬怡酒店 (Courtyard by Marriott Hamburg City)</strong>退房手續（從容早於酒店中午12:00的退房期限）。將所有大型行李寄存在禮賓部，輕裝簡行出發！",
            "zh-cn": "清晨从容起床，毋须慌忙赶路。整理行李并于上午11:30前完成<strong>汉堡市万怡酒店 (Courtyard by Marriott Hamburg City)</strong>退房手续（从容早于酒店中午12:00的退房期限）。将所有大型行李寄存在礼宾部，轻装简行出发！"
          },
          meal: {
            icon: "🥐",
            en: "<strong>Morning Breakfast:</strong> Hearty hotel breakfast at Courtyard's Böckmann's restaurant or a fresh artisan pastry from a nearby café.",
            zh: "<strong>晨光早餐：</strong>在萬怡酒店 Böckmann's 餐廳享用豐富自助早餐，或步行至附近街角咖啡館品嚐熱咖啡與牛角包。",
            "zh-cn": "<strong>晨光早餐：</strong>在万怡酒店 Böckmann's 餐厅享用丰富自助早餐，或步行至附近街角咖啡馆品尝热咖啡与牛角包。"
          },
          walkingInfo: {
            en: "🚶 ~4 min walk (300m) to Berliner Tor station",
            zh: "🚶 步行約4分鐘 (300米) 至柏林門站",
            "zh-cn": "🚶 步行约4分钟 (300米) 至柏林门站"
          },
          locations: [
            { lat: 53.5534, lng: 10.0105, label: { en: "Courtyard by Marriott Hamburg City", zh: "漢堡市萬怡酒店 (Courtyard by Marriott)", "zh-cn": "汉堡市万怡酒店 (Courtyard by Marriott)" } }
          ]
        }
      },
      {
        time: {
          en: "🌤️ Midday (11:45–13:45)",
          zh: "🌤️ 中午 (11:45–13:45)",
          "zh-cn": "🌤️ 中午 (11:45–13:45)"
        },
        activity: {
          title: {
            en: "St. Georg Stroll (Lange Reihe) & Außenalster Lake",
            zh: "聖喬治區漫步 (Lange Reihe) 與外阿爾斯特湖畔 (Außenalster)",
            "zh-cn": "圣乔治区漫步 (Lange Reihe) 与外阿尔斯特湖畔 (Außenalster)"
          },
          desc: {
            en: "Since your bags are right at the hotel, enjoy a completely zero-stress morning exploring the adjacent <strong>St. Georg</strong> neighborhood. Walk down the vibrant, creative <strong>Lange Reihe</strong> street, lined with charming cafes, boutique shops, and historic buildings. The street leads perfectly to the shores of the expansive <strong>Außenalster (Outer Alster Lake)</strong>. Enjoy a peaceful waterside stroll with swans and sailboats before grabbing a casual cafe lunch.",
            zh: "行李安全寄存在酒店，讓您能毫無壓力地探索毗鄰的<strong>聖喬治區 (St. Georg)</strong>。漫步充滿創意氛圍的 <strong>Lange Reihe</strong> 街道，沿途盡是特色咖啡館、精品店與歷史建築。街道盡頭即是廣闊美麗的<strong>外阿爾斯特湖 (Außenalster)</strong>，在波光粼粼的湖畔與天鵝散步，並在附近悠閒享用午餐。",
            "zh-cn": "行李安全寄存在酒店，让您能毫无压力地探索毗邻的<strong>圣乔治区 (St. Georg)</strong>。漫步充满创意氛围的 <strong>Lange Reihe</strong> 街道，沿途尽是特色咖啡馆、精品店与历史建筑。街道尽头即是广阔美丽的<strong>外阿尔斯特湖 (Außenalster)</strong>，在波光粼粼的湖畔与天鹅散步，并在附近悠闲享用午餐。"
          },
          meal: {
            icon: "☕",
            en: "<strong>Relaxing Lunch:</strong> Choose a cozy cafe along Lange Reihe (like Café Koppel or similar) for a light lunch, or wait for the famous Jim Block burger at the airport.",
            zh: "<strong>悠閒午餐：</strong>在 Lange Reihe 沿街挑選一家溫馨咖啡館享用輕食午餐，或留待機場品嚐正宗 Jim Block 漢堡包。",
            "zh-cn": "<strong>悠闲午餐：</strong>在 Lange Reihe 沿街挑选一家温馨咖啡馆享用轻食午餐，或留待机场品尝正宗 Jim Block 汉堡包。"
          },
          walkingInfo: {
            en: "🚶 ~10 min scenic walk from hotel to Lange Reihe / Außenalster",
            zh: "🚶 萬怡酒店步行至聖喬治區/湖畔約10分鐘",
            "zh-cn": "🚶 万怡酒店步行至圣乔治区/湖畔约10分钟"
          },
          locations: [
            { lat: 53.5555, lng: 10.0102, label: { en: "Lange Reihe (St. Georg)", zh: "聖喬治區 Lange Reihe 街", "zh-cn": "圣乔治区 Lange Reihe 街" } },
            { lat: 53.5600, lng: 10.0050, label: { en: "Außenalster Lake", zh: "外阿爾斯特湖 (Außenalster)", "zh-cn": "外阿尔斯特湖 (Außenalster)" } }
          ]
        }
      },
      {
        time: {
          en: "✈️ Afternoon & Flight BA967 (14:00–16:45)",
          zh: "✈️ 下午取件與 BA967 返英離港 (14:00–16:45)",
          "zh-cn": "✈️ 下午取件与 BA967 返英离港 (14:00–16:45)"
        },
        activity: {
          title: {
            en: "Luggage Pickup, Direct S1 Airport Train & BA967 to London (16:45)",
            zh: "萬怡酒店取回行李、S1直達機場與 BA967 飛返倫敦 (Flughafen Hamburg, 16:45起飛)",
            "zh-cn": "万怡酒店取回行李、S1直达机场与 BA967 飞返伦敦 (Flughafen Hamburg, 16:45起飞)"
          },
          desc: {
            en: "Walk back to Courtyard by Marriott to collect your luggage from the concierge. At 14:20, take the 4-minute walk to Berliner Tor S-Bahn platform and board the direct S1 train to <strong>Hamburg Airport</strong> (27 min). Arrive at Terminal 2 at ~14:47 — giving a comfortable 2-hour window before your <strong>British Airways BA967 flight departure at 16:45 CET</strong> (landing London Heathrow T5 at 17:25 GMT). Completely relaxed, on schedule, and zero stress!",
            zh: "步行返回萬怡酒店取回寄存行李。14:20前進入柏林門站月台，乘搭直達S1城郊列車直通<strong>漢堡機場 (Flughafen Hamburg)</strong>（約27分鐘）。約14:47順利抵達Terminal 2，從容預留2小時辦理<strong>英國航空 BA967（16:45 CET起飛）</strong>的託運與安檢，預計17:25 GMT平安抵達倫敦希斯路T5。全程節奏從容，完美告別漢堡！",
            "zh-cn": "步行返回万怡酒店取回寄存行李。14:20前进入柏林门站月台，乘搭直达S1城郊列车直通<strong>汉堡机场 (Flughafen Hamburg)</strong>（约27分钟）。约14:47顺利抵达Terminal 2，从容预留2小时办理<strong>英国航空 BA967（16:45 CET起飞）</strong>的托运与安检，预计17:25 GMT平安抵达伦敦希思罗T5。全程节奏从容，完美告别汉堡！"
          },
          meal: {
            icon: "🍔",
            en: "<strong>Pre-flight Snack:</strong> Grab a gourmet burger at <em>Jim Block</em> inside Airport Terminal 1/2 or relax in the departure lounge before boarding.",
            zh: "<strong>候機美食：</strong>登機前可於機場航站樓的 <em>Jim Block 漢堡店 (Jim Block)</em> 品嚐正宗漢堡包，或在候機廳悠然品茶候機。",
            "zh-cn": "<strong>候机美食：</strong>登机前可于机场航站楼的 <em>Jim Block 汉堡店 (Jim Block)</em> 品尝正宗汉堡包，或在候机厅悠然品茶候机。"
          },
          walkingInfo: {
            en: "🚶 4 min walk from Courtyard to Berliner Tor S1 platform",
            zh: "🚶 萬怡酒店步行4分鐘至柏林門站S1月台",
            "zh-cn": "🚶 万怡酒店步行4分钟至柏林门站S1月台"
          },
          locations: [
            { lat: 53.5534, lng: 10.0105, label: { en: "Courtyard by Marriott Hamburg City", zh: "漢堡市萬怡酒店 (Courtyard by Marriott)", "zh-cn": "汉堡市万怡酒店 (Courtyard by Marriott)" } },
            { lat: 53.5532, lng: 10.0248, label: { en: "Berliner Tor Station", zh: "柏林門站 (Berliner Tor)", "zh-cn": "柏林门站 (Berliner Tor)" } },
            { lat: 53.6303, lng: 9.9882, label: { en: "Hamburg Airport (HAM T2)", zh: "漢堡機場 (Flughafen Hamburg T2)", "zh-cn": "汉堡机场 (Flughafen Hamburg T2)" } }
          ]
        }
      }
    ],
    tip: {
      en: "Checking out of Courtyard by Marriott by 11:30 AM keeps you safely within the 12:00 PM policy. Staying strictly in the St. Georg area next to your hotel guarantees zero transit rush before the airport.",
      zh: "上午11:30前退房可從容恪守酒店中午12:00退房規定。留在酒店旁的聖喬治區漫步，確保前往機場前無須跨區奔波，時間掌握精準無壓力！",
      "zh-cn": "上午11:30前退房可从容恪守酒店中午12:00退房规定。留在酒店旁的圣乔治区漫步，确保前往机场前无须跨区奔波，时间掌握精准无压力！"
    }
  }
];

// Export to global scope for browser execution
if (typeof window !== 'undefined') {
  window.ITINERARY_DATA = ITINERARY_DATA;
}
