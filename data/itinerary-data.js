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
    region: "hafencity",
    regionLabel: {
      en: "HafenCity & Speicherstadt",
      zh: "港城與倉庫城 (HafenCity & Speicherstadt)",
      "zh-cn": "港城与仓库城 (HafenCity & Speicherstadt)"
    },
    title: {
      en: "Arrival, Speicherstadt, 3 PM Hotel Recharge & Elbphilharmonie Sunset",
      zh: "抵達漢堡、倉庫城漫步、下午3點萬怡充電小憩與易北愛樂廳夕陽 (Speicherstadt & Elbphilharmonie)",
      "zh-cn": "抵达汉堡、仓库城漫步、下午3点万怡充电小憩与易北爱乐厅夕阳 (Speicherstadt & Elbphilharmonie)"
    },
    tags: [
      { type: "city", text: "🏙️ HafenCity" },
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
          locations: [
            { lat: 53.6303, lng: 9.9882, label: { en: "Hamburg Airport (HAM T2)", zh: "漢堡機場 (Flughafen Hamburg T2)", "zh-cn": "汉堡机场 (Flughafen Hamburg T2)" } },
            { lat: 53.5534, lng: 10.0105, label: { en: "Courtyard by Marriott Hamburg City", zh: "漢堡市萬怡酒店 (Courtyard by Marriott)", "zh-cn": "汉堡市万怡酒店 (Courtyard by Marriott)" } },
            { lat: 53.5532, lng: 10.0066, label: { en: "Hamburg Hauptbahnhof", zh: "漢堡中央車站 (Hamburg Hbf)", "zh-cn": "汉堡中央车站 (Hamburg Hbf)" } }
          ]
        }
      },
      {
        time: {
          en: "🌤️ Early Afternoon (12:30–15:00)",
          zh: "🌤️ 下午早段 (12:30–15:00)",
          "zh-cn": "🌤️ 下午早段 (12:30–15:00)"
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
          meal: {
            icon: "🥨",
            en: "<strong>Afternoon Warm-up:</strong> Grab a warm <em>Franzbrötchen</em> (Hamburg cinnamon sugar pastry) and hot chocolate from a Speicherstadt bakery kiosk.",
            zh: "<strong>午後暖心小點：</strong>在倉庫城烘焙攤買個剛出爐的 <em>Franzbrötchen (肉桂酥餅)</em> 配熱可可，迅速補充冬日熱量。",
            "zh-cn": "<strong>午后暖心小点：</strong>在仓库城烘焙摊买个刚出炉的 <em>Franzbrötchen (肉桂酥饼)</em> 配热可可，迅速补充冬日热量。"
          },
          locations: [
            { lat: 53.5435, lng: 9.9938, label: { en: "Speicherstadt", zh: "倉庫城 (Speicherstadt)", "zh-cn": "仓库城 (Speicherstadt)" } },
            { lat: 53.5435, lng: 9.9894, label: { en: "Miniatur Wunderland", zh: "微型奇蹟世界 (Miniatur Wunderland)", "zh-cn": "微型奇迹世界 (Miniatur Wunderland)" } }
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
            en: "Hop on the U3/U2 back to Berliner Tor (10 min) for your official <strong>3:00 PM room check-in</strong> at <strong>Courtyard by Marriott Hamburg City</strong>. Collect luggage from the concierge, unpack, take a refreshing hot shower, and enjoy a cozy 90-minute power nap or hot tea in your room. Recovering from your 4:30 AM London wake-up ensures you'll be energized and enthusiastic for the magical evening ahead!",
            zh: "搭乘U3/U2地鐵約10分鐘輕鬆返回柏林門站 (Berliner Tor)，下午3:00準時辦理<strong>漢堡市萬怡酒店 (Courtyard by Marriott Hamburg City)</strong>房間入住手續。領取寄存行李、開箱安頓，洗個熱氣騰騰的淋浴，並在舒適溫暖的房間內小憩90分鐘。清晨4點半從倫敦早起出發的疲勞一掃而空，精神飽滿迎接迷人夜景！",
            "zh-cn": "搭乘U3/U2地铁约10分钟轻松返回柏林门站 (Berliner Tor)，下午3:00准时办理<strong>汉堡市万怡酒店 (Courtyard by Marriott Hamburg City)</strong>房间入住手续。领取寄存行李、开箱安顿，洗个热气腾腾的淋浴，并在舒适温暖的房间内小憩90分钟。清晨4点半从伦敦早起出发的疲劳一扫而空，精神饱满迎接迷人夜景！"
          },
          meal: {
            icon: "🧖",
            en: "<strong>Relaxation:</strong> Enjoy a hot cup of in-room tea or take advantage of the hotel's complimentary Finnish sauna to warm your muscles before the evening stroll.",
            zh: "<strong>舒壓暖身：</strong>在房內泡杯香熱花草茶，亦可體驗萬怡酒店附設的芬蘭桑拿浴室 (Finnish Sauna)，徹底驅散戶外寒意。",
            "zh-cn": "<strong>舒压暖身：</strong>在房内泡杯香热花草茶，亦可体验万怡酒店附设的芬兰桑拿浴室 (Finnish Sauna)，彻底驱散户外寒意。"
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
            en: "Elbphilharmonie Plaza Sunset & Fleetinsel Christmas Market",
            zh: "易北愛樂廳觀景台夕陽與弗萊廷島聖誕市集 (Elbphilharmonie & Fleetinsel)",
            "zh-cn": "易北爱乐厅观景台夕阳与弗莱廷岛圣诞市集 (Elbphilharmonie & Fleetinsel)"
          },
          desc: {
            en: "Fully rested, take the U3 to Baumwall. Ascend the curved escalator up to the panoramic public plaza of the <strong>Elbphilharmonie</strong> (free plaza ticket required) for breathtaking 360° sunset views over HafenCity and the Elbe port. Then stroll 10 minutes along the historic canal to the intimate, romantic <strong>Fleetinsel Christmas Market</strong> — fairy lights reflecting on the water, steaming Glühwein, and artisan stalls.",
            zh: "養精蓄銳後乘U3至Baumwall站。搭乘標誌性弧形電梯登上<strong>易北愛樂廳觀景台 (Elbphilharmonie Plaza)</strong>（需免費廣場票），飽覽黃昏時分易北河 (Elbe)、港城與漢堡港360°夕陽全景。隨後漫步10分鐘至精緻浪漫的<strong>弗萊廷島聖誕市集 (Weihnachtsmarkt Fleetinsel)</strong>——運河水面倒映著金黃彩燈，手捧熱紅酒挑選工藝禮品，滿溢節日溫馨。",
            "zh-cn": "养精蓄锐后乘U3至Baumwall站。搭乘标志性弧形电梯登上<strong>易北爱乐厅观景台 (Elbphilharmonie Plaza)</strong>（需免费广场票），饱览黄昏时分易北河 (Elbe)、港城与汉堡港360°夕阳全景。随后漫步10分钟至精致浪漫的<strong>弗莱廷岛圣诞市集 (Weihnachtsmarkt Fleetinsel)</strong>——运河水面倒映着金黄彩灯，手捧热红酒挑选工艺礼品，满溢节日温馨。"
          },
          meal: {
            icon: "🍺",
            en: "<strong>Dinner:</strong> <em>Gröninger Privatbrauerei</em> (Altstadt) — Hamburg's oldest brewery tavern (1793). Crackling roast pork knuckle and unfiltered Gröninger Pils poured straight from oak barrels. Hearty, authentic, and close to your hotel.",
            zh: "<strong>晚餐：</strong><em>格勒寧格私家釀酒坊 (Gröninger Privatbrauerei)</em>位於老城區 (Altstadt)，是漢堡現存最古老釀酒坊（始建於1793年）。品嚐橡木桶直送未過濾皮爾森啤酒與皮脆肉嫩的烤豬手，氣氛熱烈地道，且鄰近地鐵便於返回酒店。",
            "zh-cn": "<strong>晚餐：</strong><em>格勒宁格私家酿酒坊 (Gröninger Privatbrauerei)</em>位于老城区 (Altstadt)，是汉堡现存最古老酿酒坊（始建于1793年）。品尝橡木桶直送未过滤皮尔森啤酒与皮脆肉嫩的烤猪手，气氛热烈地道，且邻近地铁便于返回酒店。"
          },
          locations: [
            { lat: 53.5413, lng: 9.9841, label: { en: "Elbphilharmonie Plaza", zh: "易北愛樂廳觀景台 (Elbphilharmonie Plaza)", "zh-cn": "易北爱乐厅观景台 (Elbphilharmonie Plaza)" } },
            { lat: 53.5476, lng: 9.9907, label: { en: "Fleetinsel Christmas Market", zh: "弗萊廷島聖誕市集 (Weihnachtsmarkt Fleetinsel)", "zh-cn": "弗莱廷岛圣诞市集 (Weihnachtsmarkt Fleetinsel)" } },
            { lat: 53.5469, lng: 9.9942, label: { en: "Gröninger Privatbrauerei", zh: "格勒寧格私家釀酒坊 (Gröninger Privatbrauerei)", "zh-cn": "格勒宁格私家酿酒坊 (Gröninger Privatbrauerei)" } }
          ]
        }
      }
    ],
    tip: {
      en: "The mid-afternoon hotel rest block is essential: it splits the day into two gentle 2.5-hour activity segments so you stay warm, comfortable, and energetic all day. Book your free Elbphilharmonie Plaza ticket in advance at elbphilharmonie.de.",
      zh: "下午安排回酒店辦理入住及休息是最佳防疲勞法寶：將全天拆分為兩段各約2.5小時的輕鬆漫遊，既暖身又精神飽滿。請提前在 elbphilharmonie.de 預約免費易北愛樂廳觀景台門票。",
      "zh-cn": "下午安排回酒店办理入住及休息是最佳防疲劳法宝：将全天拆分为两段各约2.5小时的轻松漫游，既暖身又精神饱满。请提前在 elbphilharmonie.de 预约免费易北爱乐厅观景台门票。"
    }
  },

  /* ════ DAY 2 ════ */
  {
    id: "day-2",
    dayNum: "02",
    date: "Nov 27",
    region: "city-centre",
    regionLabel: {
      en: "City Centre & Christmas Markets",
      zh: "市中心與聖誕市集 (Altstadt & Weihnachtsmärkte)",
      "zh-cn": "市中心与圣诞市集 (Altstadt & Weihnachtsmärkte)"
    },
    title: {
      en: "Christmas Market Magic, Jungfernstieg Shopping & Sternschanze Dinner",
      zh: "市政廳聖誕市集巡遊、少女大道漫步與明星主廚晚宴 (Rathausmarkt & Bullerei)",
      "zh-cn": "市政厅圣诞市集巡游、少女大道漫步与明星主厨晚宴 (Rathausmarkt & Bullerei)"
    },
    tags: [
      { type: "city", text: "🎄 City Centre" },
      { type: "activity", en: "🛍️ Shopping + Markets", zh: "🛍️ 購物與市集", "zh-cn": "🛍️ 购物与市集" }
    ],
    blocks: [
      {
        time: {
          en: "🌅 Morning (10:00–12:30)",
          zh: "🌅 早上 (10:00–12:30)",
          "zh-cn": "🌅 早上 (10:00–12:30)"
        },
        activity: {
          title: {
            en: "Hamburg Rathaus (City Hall) & Alster Arcades",
            zh: "漢堡市政廳漫遊與阿爾斯特拱廊 (Hamburger Rathaus & Alsterarkaden)",
            "zh-cn": "汉堡市政厅漫游与阿尔斯特拱廊 (Hamburger Rathaus & Alsterarkaden)"
          },
          desc: {
            en: "Start with a relaxed walk around the neo-Renaissance Hamburg Rathaus (1897), one of Germany's most spectacular city halls. Admire the ornate Alster Arcades (Alsterarkaden) — elegant white arched walkways reflecting in the Kleine Alster canal with swans gliding past. Over 100 festive stalls of the Rathausmarkt Christmas Market open right in front from 11:00 AM.",
            zh: "早晨漫步欣賞宏偉壯麗的新文藝復興式<strong>漢堡市政廳 (Hamburger Rathaus)</strong>（1897年建）。穿梭於優雅的<strong>阿爾斯特拱廊 (Alsterarkaden)</strong>——純白拱形柱廊倒映在小阿爾斯特運河上，天鵝悠游，是打卡絕佳角度。廣場上的市政廳聖誕市集設有上百攤位，上午11時熱鬧開市。",
            "zh-cn": "早晨漫步欣赏宏伟壮丽的新文艺复兴式<strong>汉堡市政厅 (Hamburger Rathaus)</strong>（1897年建）。穿梭于优雅的<strong>阿尔斯特拱廊 (Alsterarkaden)</strong>——纯白拱形柱廊倒映在小阿尔斯特运河上，天鹅悠游，是打卡绝佳角度。广场上的市政厅圣诞市集设有上百摊位，上午11时热闹开市。"
          },
          meal: {
            icon: "☕",
            en: "<strong>Breakfast / Coffee:</strong> <em>Café Knuth</em> or <em>Café Paris</em> — artisan German breakfast platter (Frühstücksbrettchen) with rye bread, cheeses, and hot Milchkaffee overlooking the canal.",
            zh: "<strong>早餐 / 咖啡：</strong>在運河畔咖啡館享用傳統德式早餐拼盤 (Frühstücksbrettchen)：新鮮黑麥麵包、精選起司、煙燻火腿與香濃拿鐵咖啡，倚窗欣賞水岸晨景。",
            "zh-cn": "<strong>早餐 / 咖啡：</strong>在运河畔咖啡馆享用传统德式早餐拼盘 (Frühstücksbrettchen)：新鲜黑麦面包、精选起司、烟熏火腿与香浓拿铁咖啡，倚窗欣赏水岸晨景。"
          },
          locations: [
            { lat: 53.5503, lng: 9.9998, label: { en: "Hamburg Rathaus", zh: "漢堡市政廳 (Hamburger Rathaus)", "zh-cn": "汉堡市政厅 (Hamburger Rathaus)" } },
            { lat: 53.5498, lng: 9.9988, label: { en: "Alsterarkaden", zh: "阿爾斯特拱廊 (Alsterarkaden)", "zh-cn": "阿尔斯特拱廊 (Alsterarkaden)" } }
          ]
        }
      },
      {
        time: {
          en: "🌤️ Afternoon (12:30–16:00)",
          zh: "🌤️ 下午 (12:30–16:00)",
          "zh-cn": "🌤️ 下午 (12:30–16:00)"
        },
        activity: {
          title: {
            en: "Jungfernstieg Shopping Boulevard, Europa Passage & Warm Cinnamon Break",
            zh: "少女大道名店街、歐洲廣場購物與暖烤肉桂卷下午茶 (Jungfernstieg & Zeit für Brot)",
            "zh-cn": "少女大道名店街、欧洲广场购物与暖烤肉桂卷下午茶 (Jungfernstieg & Zeit für Brot)"
          },
          desc: {
            en: "Stroll along Jungfernstieg bordering the Inner Alster Lake (Binnenalster). Browse luxury boutiques, then head into Europa Passage — a stunning 5-floor glass-domed shopping gallery with 120 shops, offering a warm indoor respite. Stop at nearby Mö-Grill for quick currywurst or warm up at Zeit für Brot with legendary fresh cinnamon rolls.",
            zh: "沿著美麗的內阿爾斯特湖畔漫步於<strong>少女大道 (Jungfernstieg)</strong>。瀏覽兩旁優雅精品店，隨後步入<strong>歐洲廣場 (Europa Passage)</strong>——5層玻璃圓頂的溫暖室內購物長廊，設有120家商鋪。途中可在傳奇的 Mö-Grill 來份滾燙咖喱香腸，或在 Zeit für Brot 享用熱騰騰的有機肉桂卷與咖啡暖身小憩。",
            "zh-cn": "沿着美丽的内阿尔斯特湖畔漫步于<strong>少女大道 (Jungfernstieg)</strong>。浏览两旁优雅精品店，随后步入<strong>欧洲广场 (Europa Passage)</strong>——5层玻璃圆顶的温暖室内购物长廊，设有120家商铺。途中可在传奇的 Mö-Grill 来份滚烫咖喱香肠，或在 Zeit für Brot 享用热腾腾的有机肉桂卷与咖啡暖身小憩。"
          },
          meal: {
            icon: "🥐",
            en: "<strong>Afternoon Treat:</strong> <em>Zeit für Brot</em> (Große Bleichen) — legendary giant warm cinnamon rolls (Zimtschnecken) and specialty oat-milk flat whites.",
            zh: "<strong>下午茶休閒：</strong><em>Zeit für Brot 手工有機烘焙坊</em> (Große Bleichen)——全漢堡公認最頂級的現烤熱肉桂蝸牛卷 (Zimtschnecken) 配燕麥奶白咖啡，暖胃舒心。",
            "zh-cn": "<strong>下午茶休闲：</strong><em>Zeit für Brot 手工有机烘焙坊</em> (Große Bleichen)——全汉堡公认最顶级的现烤热肉桂蜗牛卷 (Zimtschnecken) 配燕麦奶白咖啡，暖胃舒心。"
          },
          locations: [
            { lat: 53.5535, lng: 9.9945, label: { en: "Jungfernstieg", zh: "少女大道 (Jungfernstieg)", "zh-cn": "少女大道 (Jungfernstieg)" } },
            { lat: 53.5537, lng: 10.0003, label: { en: "Europa Passage", zh: "歐洲廣場 (Europa Passage)", "zh-cn": "欧洲广场 (Europa Passage)" } },
            { lat: 53.5532, lng: 9.9888, label: { en: "Zeit für Brot", zh: "Zeit für Brot 烘焙坊 (Zeit für Brot)", "zh-cn": "Zeit für Brot 烘焙坊 (Zeit für Brot)" } }
          ]
        }
      },
      {
        time: {
          en: "🌙 Evening (16:30 onwards)",
          zh: "🌙 傍晚與夜間 (16:30起)",
          "zh-cn": "🌙 傍晚与夜间 (16:30起)"
        },
        activity: {
          title: {
            en: "Rathausmarkt Illuminated Christmas Market & Dinner at Bullerei",
            zh: "市政廳夜光聖誕市集巡遊與 Bullerei 明星主廚晚宴 (Rathausmarkt & Bullerei)",
            "zh-cn": "市政厅夜光圣诞市集巡游与 Bullerei 明星主厨晚宴 (Rathausmarkt & Bullerei)"
          },
          desc: {
            en: "As dusk falls at 4:30 PM, the grand Rathausmarkt Christmas Market glows with thousands of golden lights framing the floodlit town hall. Sip spiced Glühwein, nibble hot roasted almonds, and admire artisan woodcarvings. For dinner, head 10 minutes by U3 to the hip Sternschanze quarter for a memorable Friday night dinner at celebrity chef Tim Mälzer's Bullerei (or Jim Block on Jungfernstieg for a relaxed gourmet burger).",
            zh: "下午4:30入黑後，整個<strong>市政廳廣場聖誕市集 (Weihnachtsmarkt auf dem Rathausmarkt)</strong>化身閃耀童話仙境，市政廳被金光照亮。手握香料熱紅酒 (Glühwein)，品嚐銅鍋現炒焦糖杏仁與德式脆薯餅。晚餐乘U3約10分鐘至熱門的<strong>桑切斯文創區 (Sternschanze)</strong>，在名廚 Tim Mälzer 的舊屠宰場紅磚餐廳 <strong>Bullerei</strong> 享用果木牛扒與特調雞尾酒，盡享週五迷人夜生活！",
            "zh-cn": "下午4:30入黑后，整个<strong>市政厅广场圣诞市集 (Weihnachtsmarkt auf dem Rathausmarkt)</strong>化身闪耀童话仙境，市政厅被金光照亮。手握香料热红酒 (Glühwein)，品尝铜锅现炒焦糖杏仁与德式脆薯饼。晚餐乘U3约10分钟至热门的<strong>桑切斯文创区 (Sternschanze)</strong>，在名厨 Tim Mälzer 的旧屠宰场红砖餐厅 <strong>Bullerei</strong> 享用果木牛扒与特调鸡尾酒，尽享周五迷人夜生活！"
          },
          meal: {
            icon: "🍷",
            en: "<strong>Friday Night Dinner:</strong> <em>Bullerei</em> (Sternschanze) — flame-grilled dry-aged steaks, seasonal roasted roots, and artisanal cocktails in an atmospheric loft setting. (Book well in advance).",
            zh: "<strong>週五精選晚餐：</strong><em>Bullerei 明星名廚時髦餐館</em> (Sternschanze)——炭火炙烤乾式熟成牛扒、烤時令冬蔬菜與迷迭香煙燻特調雞尾酒，挑高工業Loft燭光氣氛非凡（請務必提前預約）。",
            "zh-cn": "<strong>周五精选晚餐：</strong><em>Bullerei 明星名厨时髦餐馆</em> (Sternschanze)——炭火炙烤干式熟成牛扒、烤时令冬蔬菜与迷迭香烟熏特调鸡尾酒，挑高工业Loft烛光气氛非凡（请务必提前预约）。"
          },
          locations: [
            { lat: 53.5503, lng: 9.9998, label: { en: "Rathausmarkt Christmas Market", zh: "市政廳聖誕市集 (Weihnachtsmarkt Rathausmarkt)", "zh-cn": "市政厅圣诞市集 (Weihnachtsmarkt Rathausmarkt)" } },
            { lat: 53.5630, lng: 9.9705, label: { en: "Bullerei", zh: "Bullerei 明星餐館 (Bullerei, Sternschanze)", "zh-cn": "Bullerei 明星餐馆 (Bullerei, Sternschanze)" } }
          ]
        }
      }
    ],
    tip: {
      en: "Friday evenings at Rathausmarkt are lively and magical. Arrive by 16:30 right at dusk to photograph the market lights before the crowds build up, then head to dinner comfortably.",
      zh: "週五傍晚的市政廳市集氣氛最為濃厚。建議下午4:30入黑時分抵達，此時亮燈效果最夢幻且尚未進入客流高峰，隨後從容前往晚宴。",
      "zh-cn": "周五傍晚的市政厅市集气氛最为浓厚。建议下午4:30入黑时分抵达，此时亮灯效果最梦幻且尚未进入客流高峰，随后从容前往晚宴。"
    }
  },

  /* ════ DAY 3 ════ */
  {
    id: "day-3",
    dayNum: "03",
    date: "Nov 28",
    region: "harbour",
    regionLabel: {
      en: "Harbour & Departure",
      zh: "港口與離港 (Landungsbrücken & Abreise)",
      "zh-cn": "港口与离港 (Landungsbrücken & Abreise)"
    },
    title: {
      en: "11:30 AM Hotel Check-out, Landungsbrücken Harbour Stroll & Flight BA967 (16:45)",
      zh: "11:30 萬怡酒店退房、輪船碼頭港口漫步與 BA967 飛返倫敦 (Landungsbrücken & Flughafen)",
      "zh-cn": "11:30 万怡酒店退房、轮船码头港口漫步与 BA967 飞返伦敦 (Landungsbrücken & Flughafen)"
    },
    tags: [
      { type: "city", text: "⚓ Landungsbrücken" },
      { type: "pace", en: "🌊 Harbour Morning & Departure", zh: "🌊 海濱晨光與從容離港", "zh-cn": "🌊 海滨晨光与从容离港" }
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
          locations: [
            { lat: 53.5534, lng: 10.0105, label: { en: "Courtyard by Marriott Hamburg City", zh: "漢堡市萬怡酒店 (Courtyard by Marriott)", "zh-cn": "汉堡市万怡酒店 (Courtyard by Marriott)" } },
            { lat: 53.5479, lng: 10.0009, label: { en: "Chilehaus", zh: "智利大廈 (Chilehaus)", "zh-cn": "智利大厦 (Chilehaus)" } }
          ]
        }
      },
      {
        time: {
          en: "🌤️ Midday & Harbour Lunch (11:45–13:45)",
          zh: "🌤️ 中午海濱漫步與新鮮魚堡午餐 (11:45–13:45)",
          "zh-cn": "🌤️ 中午海滨漫步与新鲜鱼堡午餐 (11:45–13:45)"
        },
        activity: {
          title: {
            en: "Landungsbrücken Harbour Promenade & Fresh Fischbrötchen Lunch",
            zh: "輪船碼頭港口海濱長廊與新鮮魚卷午餐 (Landungsbrücken & Brücke 10)",
            "zh-cn": "轮船码头港口海滨长廊与新鲜鱼卷午餐 (Landungsbrücken & Brücke 10)"
          },
          desc: {
            en: "Take the direct U3 line from Berliner Tor right along the elevated harbour viaduct (just 10 mins) to <strong>Landungsbrücken</strong>. Walk the historic floating piers, admire the museum cargo ship Cap San Diego, and take in the vast open Elbe port vistas. Enjoy a freshly made iconic Fischbrötchen at Pier 10 (Brücke 10) right by the water — a classic Hamburg maritime farewell without the stress of an hour-long boat ride.",
            zh: "從柏林門站乘搭U3高架景觀地鐵直達<strong>輪船碼頭 (Landungsbrücken)</strong>（約10分鐘）。漫步歷史悠久的700米水上浮動碼頭，仰望巨型歷史貨船「卡普聖地亞哥號」(Cap San Diego)，遠眺易北河上的往來巨輪。在10號碼頭的 <strong>Brücke 10</strong> 品嚐地道現製脆皮魚堡，向漢堡港口致以最鮮美的道別，毋須長途乘船，節奏從容舒適。",
            "zh-cn": "从柏林门站乘搭U3高架景观地铁直达<strong>轮船码头 (Landungsbrücken)</strong>（约10分钟）。漫步历史悠久的700米水上浮动码头，仰望巨型历史货船「卡普圣地亚哥号」(Cap San Diego)，远眺易北河上的往来巨轮。在10号码头的 <strong>Brücke 10</strong> 品尝地道现制脆皮鱼堡，向汉堡港口致以最鲜美的道别，毋须长途乘船，节奏从容舒适。"
          },
          meal: {
            icon: "🐟",
            en: "<strong>Harbour Lunch:</strong> <em>Brücke 10</em> (Pier 10) — Hamburg's best North Sea shrimp (Krabbenbrötchen) and pickled herring rolls on warm crusty baguettes with scenic waterfront seating.",
            zh: "<strong>海濱午餐：</strong><em>Brücke 10 碼頭魚堡</em> (10號碼頭)——品嚐全城馳名的北海鮮蝦脆卷 (Krabbenbrötchen) 或俾斯麥鯡魚堡，坐在水岸長凳邊吃邊欣賞海港景致。",
            "zh-cn": "<strong>海滨午餐：</strong><em>Brücke 10 码头鱼堡</em> (10号码头)——品尝全城驰名的北海鲜虾脆卷 (Krabbenbrötchen) 或俾斯麦鲱鱼堡，坐在水岸长凳边吃边欣赏海港景致。"
          },
          locations: [
            { lat: 53.5450, lng: 9.9672, label: { en: "Landungsbrücken Piers", zh: "輪船碼頭 (Landungsbrücken)", "zh-cn": "轮船码头 (Landungsbrücken)" } },
            { lat: 53.5458, lng: 9.9655, label: { en: "Brücke 10", zh: "Brücke 10 碼頭魚堡 (Brücke 10)", "zh-cn": "Brücke 10 码头鱼堡 (Brücke 10)" } },
            { lat: 53.5418, lng: 9.9656, label: { en: "Cap San Diego Museum Ship", zh: "卡普聖地亞哥博物館船 (Cap San Diego)", "zh-cn": "卡普圣地亚哥博物馆船 (Cap San Diego)" } }
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
            en: "Take the U3 back to Berliner Tor by 14:00 and walk 4 minutes to Courtyard by Marriott to collect your luggage from the concierge. At 14:20, walk to Berliner Tor S-Bahn platform and board the direct S1 train to <strong>Hamburg Airport</strong> (27 min). Arrive at Terminal 2 at ~14:47 — giving a comfortable 2-hour window before your <strong>British Airways BA967 flight departure at 16:45 CET</strong> (landing London Heathrow T5 at 17:25 GMT). Completely relaxed, on schedule, and zero stress!",
            zh: "於14:00乘U3地鐵返回柏林門站 (Berliner Tor)，步行4分鐘至萬怡酒店取回寄存行李。14:20前進入柏林門站月台，乘搭直達S1城郊列車直通<strong>漢堡機場 (Flughafen Hamburg)</strong>（約27分鐘）。約14:47順利抵達Terminal 2，從容預留2小時辦理<strong>英國航空 BA967（16:45 CET起飛）</strong>的託運與安檢，預計17:25 GMT平安抵達倫敦希斯路T5。全程節奏從容，完美告別漢堡！",
            "zh-cn": "于14:00乘U3地铁返回柏林门站 (Berliner Tor)，步行4分钟至万怡酒店取回寄存行李。14:20前进入柏林门站月台，乘搭直达S1城郊列车直通<strong>汉堡机场 (Flughafen Hamburg)</strong>（约27分钟）。约14:47顺利抵达Terminal 2，从容预留2小时办理<strong>英国航空 BA967（16:45 CET起飞）</strong>的托运与安检，预计17:25 GMT平安抵达伦敦希思罗T5。全程节奏从容，完美告别汉堡！"
          },
          meal: {
            icon: "🍔",
            en: "<strong>Pre-flight Snack:</strong> Grab a gourmet burger at <em>Jim Block</em> inside Airport Terminal 1/2 or relax in the departure lounge before boarding.",
            zh: "<strong>候機美食：</strong>登機前可於機場航站樓的 <em>Jim Block 漢堡店 (Jim Block)</em> 品嚐正宗漢堡包，或在候機廳悠然品茶候機。",
            "zh-cn": "<strong>候机美食：</strong>登机前可于机场航站楼的 <em>Jim Block 汉堡店 (Jim Block)</em> 品尝正宗汉堡包，或在候机厅悠然品茶候机。"
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
      en: "Checking out of Courtyard by Marriott by 11:30 AM keeps you safely within the 12:00 PM policy. Leaving bags with the concierge allows a breezy, luggage-free final visit to Landungsbrücken before catching the 14:20 direct S1 train to the airport.",
      zh: "上午11:30前退房可從容恪守酒店中午12:00退房規定。行李寄放禮賓部後輕裝前往輪船碼頭，最後乘搭14:20的S1直達機場，全程毫無拖帶行李之苦，時間掌握精準！",
      "zh-cn": "上午11:30前退房可从容恪守酒店中午12:00退房规定。行李寄放礼宾部后轻装前往轮船码头，最后乘搭14:20的S1直达机场，全程毫无拖带行李之苦，时间掌握精准！"
    }
  }
];

// Export to global scope for browser execution
if (typeof window !== 'undefined') {
  window.ITINERARY_DATA = ITINERARY_DATA;
}
