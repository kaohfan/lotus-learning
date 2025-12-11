export const pagesData = [
    { id: 0, type: "full-image-intro", imageSrc: "https://class.kh.edu.tw/sites/4609/upload_file/30/00.png", titleText: "愛蓮說", title: "首頁" },
    {
        id: 1, type: "card", title: "蓮花與睡蓮的差別 (一)",
        text: '「蓮花」就是「荷花」。而「蓮花」與「睡蓮」的區別可看它們的葉子。',
        details: { content: '<div style="font-size: 1.8rem; line-height: 1.8; text-align: left;"><p><strong>辨別關鍵：</strong><span style="color: #b91c1c; font-weight: bold;">葉子</span></p><ul style="list-style: none; padding: 0; margin-top: 15px;"><li style="margin-bottom: 20px; background: rgba(255,255,255,0.5); padding: 15px; border-radius: 8px; position: relative;"><span class="interactive-term" style="font-weight:900; color: #059669; font-size: 2rem;" onclick="toggleBubble(\'lotus\', this, event)">蓮花 (荷花)<div id="bubble-lotus" class="bubble-popup"><img src="https://class.kh.edu.tw/sites/4609/upload_file/30/h.png" class="bubble-img" alt="蓮花挺水" onclick="openFullscreenImage(this.src); event.stopPropagation();"><div style="font-size:1.2rem; color:#059669; margin-top:5px; font-weight:bold; text-align: center;">挺水而生</div></div></span>：<br>葉子<span style="color: #d97706; font-weight:bold;">大而圓</span>，並且<span style="color: #d97706; font-weight:bold;">挺立於水上</span>。</li><li style="background: rgba(255,255,255,0.5); padding: 15px; border-radius: 8px; position: relative;"><span class="interactive-term" style="font-weight:900; color: #2563eb; font-size: 2rem;" onclick="toggleBubble(\'lily\', this, event)">睡蓮<div id="bubble-lily" class="bubble-popup"><img src="https://class.kh.edu.tw/sites/4609/upload_file/30/s.png" class="bubble-img" alt="睡蓮浮水" onclick="openFullscreenImage(this.src); event.stopPropagation();"><div style="font-size:1.2rem; color:#2563eb; margin-top:5px; font-weight:bold; text-align: center;">浮水而生</div></div></span>：<br>葉子<span style="color: #d97706; font-weight:bold;">有深裂縫</span>，並且<span style="color: #d97706; font-weight:bold;">緊貼水面</span>。</li></ul><div style="margin-top: 20px; text-align: center; color: #b91c1c; font-weight: 900; font-size: 2rem;">口訣：挺水為蓮，浮水為睡</div></div>', examples: "" }
    },
    {
        id: 2, type: "card", title: "蓮花與睡蓮的差別 (二)",
        text: '荷花有許多別稱，如芙蓉、芙蕖、菡萏、芰荷、君子花等，各有其意涵。',
        details: { content: '<ul style="font-size: 1.8rem; line-height: 2; text-align: left;"><li><strong style="color: #b91c1c;">芙蓉</strong>：形容「出水芙蓉」之美態。</li><li><strong style="color: #b91c1c;">菡萏</strong>：專指<span style="background:#fecaca; padding:0 6px; border-radius:4px;">未開</span>的荷花。</li><li><strong style="color: #b91c1c;">芙蕖</strong>：泛指<span style="background:#fecaca; padding:0 6px; border-radius:4px;">盛開</span>的荷花。</li><li><strong style="color: #b91c1c;">芰荷</strong>：強調其<span style="background:#bfdbfe; padding:0 6px; border-radius:4px;">水生植物</span>的特性。</li><li><strong style="color: #b91c1c;">君子花</strong>：源於其<span style="background:#bbf7d0; padding:0 6px; border-radius:4px;">清高、潔淨</span>的品格。</li></ul>', examples: "" }
    },
    {
        id: 3, type: "lotus-growth", title: "蓮花生命歷程",
        items: [{ img: "https://class.kh.edu.tw/sites/4609/upload_file/30/1.png", text: "菡萏" }, { img: "https://class.kh.edu.tw/sites/4609/upload_file/30/2.png", text: "初綻" }, { img: "https://class.kh.edu.tw/sites/4609/upload_file/30/3.png", text: "芙蕖" }]
    },
    { id: 4, type: "card", title: "關於「說」", text: '「說」又稱為「雜說」，是一種古代的文體，用來<span class=\'highlight-term\'>解說事理</span>或<span class=\'highlight-term\'>表達看法</span>。', details: { content: "舉凡介紹事物、生活感想、讀書心得等，都可用這種文體表達。", examples: '例如：<span class=\'interactive-link\' onclick=\'jumpToPage(7)\'>《馬說》</span>、<span class=\'interactive-link\' onclick=\'jumpToPage(8)\'>《師說》</span>、<span class=\'interactive-link\' onclick=\'jumpToPage(9)\'>《捕蛇者說》</span>。' } },
    { id: 5, type: "card", title: "關於「論」", text: '另有一種文體，稱為「論」，內容以<span class=\'highlight-term\'>論證道理</span>、<span class=\'highlight-term\'>辨別分析</span>為主。', details: { content: "相較於「說」可能帶有更多感性或敘事成分，「論」更側重於邏輯嚴密的辯證。", examples: "例如：《六國論》、《過秦論》。" } },
    { id: 6, type: "card", title: "總結：論說文", text: '因「說」與「論」性質相近，故二者常合稱為<span class=\'highlight-term\'>「論說文」</span>。', details: { content: "兩者都是為了說明觀點、闡述道理，只是在寫作手法與側重點上略有不同。", examples: "" } },
    { id: 7, type: "card", title: "《馬說》內容大要", text: '韓愈藉由「伯樂」與「千里馬」的比喻，感嘆<span class=\'highlight-term\'>賢才難遇明主</span>。', details: { content: "文中感嘆「世有伯樂，然後有千里馬。千里馬常有，而伯樂不常有。」諷刺當時統治者不識人才，使賢良之士遭受埋沒。", examples: "寓意：藉物抒懷，表達對人才被埋沒的憤慨。" } },
    { id: 8, type: "card", title: "《師說》內容大要", text: '韓愈強調<span class=\'highlight-term\'>「尊師重道」</span>的重要，批判當時士大夫恥於從師的歪風。', details: { content: "文中提出「師者，所以傳道、受業、解惑也」，並主張「道之所存，師之所存」，打破身分地位的界線，強調學習的重要。", examples: "名句：聞道有先後，術業有專攻。" } },
    { id: 9, type: "card", title: "《捕蛇者說》內容大要", text: '柳宗元藉由捕蛇者的遭遇，揭露<span class=\'highlight-term\'>苛政猛於虎</span>的社會現實。', details: { content: "強調『賦斂之毒』比毒蛇更可怕。捕蛇者寧願冒著生命危險去捕蛇，以換取短暫的安寧，也不願忍受苛捐雜稅的剝削。這種鮮明的對比，深刻突顯了賦稅的殘酷與對人民的壓迫，其禍害遠超毒蛇。", examples: "主旨：反映中唐時期賦稅繁重，民不聊生的慘況。" } },
    { id: 10, type: "card", title: "篇章導讀", text: '本文選自《周濂溪先生全集》。作者藉本文說明自己喜愛蓮花的原因，描述蓮花的各種特質來象徵君子的高尚品格。', details: { content: "作者並以菊花和牡丹作為陪襯，發出感嘆：社會上能潔身自持、守正處世的人不多，而一心追求富貴的人卻不少。", examples: "主旨：以蓮花自喻，期許自己成為品德高尚的君子。", supplement: { title: "【篇章導讀補充：以物詠志的傳統】", content: '<p style="margin-bottom: 10px;">自古常以草木象徵人格，抒發己志：</p><ul style="list-style-type: disc; padding-left: 20px; margin-bottom: 15px;"><li><strong>孔子：</strong>以「松柏」象徵堅貞不屈。</li><li><strong>屈原：</strong>以「香草」象徵人格高潔。</li><li><strong>陶淵明：</strong>以「菊」表達剛正耿介。</li></ul><p><strong>本文傳承：</strong>周敦頤承襲此傳統，以<strong>蓮</strong>象徵君子的高尚品格。</p>' } } },
    { id: 11, type: "table", title: "植物的象徵意義 (一)", rows: [{ plant: "松", meaning: "堅忍不拔", example: "松柏後凋於歲寒" }, { plant: "松", meaning: "長壽", example: "松鶴延年" }, { plant: "竹", meaning: "謙虛、有節操", example: "竹解心虛即我師" }, { plant: "梅", meaning: "高潔、堅忍", example: '(1)冰雪林中著此身，不同桃李混芳塵<br>(2)雪虐風饕愈凜然，花中氣節最高堅' }, { plant: "梅", meaning: "隱逸", example: "梅妻鶴子" }, { plant: "蘭", meaning: "高雅", example: "空谷幽蘭" }] },
    { id: 12, type: "table", title: "植物的象徵意義 (二)", rows: [{ plant: "菊", meaning: "堅貞", example: "寧可枝頭抱香死，何曾吹墮北風中" }, { plant: "菊", meaning: "長壽", example: "九月九日，佩茱萸，食蓬餌，飲菊華酒，令人長壽" }, { plant: "菊", meaning: "隱者風範", example: "一從陶令平章後，千古高風說到今" }, { plant: "蓮", meaning: "君子的高尚品格", example: "周敦頤〈愛蓮說〉" }, { plant: "柳", meaning: "隱士形象", example: "陶淵明〈五柳先生傳〉" }, { plant: "柳", meaning: "離別", example: "長安陌上無窮樹，唯有垂楊管別離" }, { plant: "柳", meaning: "女子美好的身姿", example: '(1)隔戶楊柳弱嫋嫋，恰似十五女兒腰<br>(2)人言柳葉似愁眉，更有愁腸似柳絲' }] },
    { id: 13, type: "table", title: "植物的象徵意義 (三)", rows: [{ plant: "桃", meaning: "長壽", example: "蟠桃未熟，千歲容與且人間" }, { plant: "桃", meaning: "女子容貌嬌豔", example: "杏臉桃腮" }, { plant: "桃", meaning: "與世隔絕的仙境", example: "世外桃源" }, { plant: "香草", meaning: "高潔、忠貞", example: "蘭芷變而不芳兮，荃蕙化而為茅" }, { plant: "牡丹", meaning: "富貴", example: "傾國姿容別，多開富貴家" }, { plant: "紅豆", meaning: "相思", example: "玲瓏骰子安紅豆，入骨相思知不知" }] },
    {
        id: 14, type: "cloze-passage",
        title: "知己與物 (幽夢影)",
        content: [
            { type: "text", text: "天下有一人知己，可以不恨。不獨人也，物亦有之。如" },
            { type: "cloze", answer: "菊", hint: "陶淵明（晉）：採菊東籬下，悠然見南山。", suffix: "以淵明為知己，" },
            { type: "cloze", answer: "梅", hint: "林逋（宋）：隱居西湖，梅妻鶴子。", suffix: "以和靖為知己，" },
            { type: "cloze", answer: "竹", hint: "王徽之（晉）：何可一日無此君？", suffix: "以子猷為知己，" },
            { type: "cloze", answer: "蓮", hint: "周敦頤（宋）：予獨愛蓮之出淤泥而不染。", suffix: "以濂溪為知己，" },
            { type: "cloze", answer: "桃", hint: "桃花源記（晉）：避秦時亂。", suffix: "以避秦人為知己，" },
            { type: "cloze", answer: "杏", hint: "董奉（三國）：治病不取利，重病癒者植杏五株。", suffix: "以董奉為知己，" },
            { type: "term", text: "石以米顛為知己", hint: "米芾（宋）：能書畫，以拜石聞名，人稱米顛。" },
            { type: "text", text: "，" },
            { type: "cloze", answer: "荔枝", hint: "楊貴妃（唐）：一騎紅塵妃子笑，無人知是荔枝來。", suffix: "以太真為知己，" },
            { type: "cloze", answer: "茶", hint: "陸羽（唐）：茶聖，著有《茶經》；盧仝（唐）：愛茶成癖。", suffix: "以盧仝、陸羽為知己，" },
            { type: "term", text: "香草以靈均為知己", hint: "屈原（戰國）：字靈均，離騷中多以香草喻忠貞。" },
            { type: "text", text: "，" },
            { type: "term", text: "蓴鱸以季鷹為知己", hint: "張翰（晉）：字季鷹，見秋風起，思家鄉蓴羹鱸膾而辭官。" },
            { type: "text", text: "，" },
            { type: "term", text: "蕉以懷素為知己", hint: "懷素（唐）：狂草書法家，因貧無紙，種芭蕉萬株以練字。" },
            { type: "text", text: "，" },
            { type: "term", text: "瓜以邵平為知己", hint: "邵平（秦）：原為東陵侯，秦亡後布衣種瓜於長安，味甘美。" },
            { type: "text", text: "，" },
            { type: "term", text: "雞以處宗為知己", hint: "宋處宗（晉）：購得長鳴雞，置窗間，雞能人言，與之談論。" },
            { type: "text", text: "，" },
            { type: "cloze", answer: "鵝", hint: "王羲之（晉）：書聖，性愛鵝，曾寫經換鵝。", suffix: "以右軍為知己，" },
            { type: "term", text: "鼓以禰衡為知己", hint: "禰衡（漢）：才辯過人，曾擊鼓罵曹操。" },
            { type: "text", text: "，" },
            { type: "cloze", answer: "琵琶", hint: "王昭君（漢）：號明妃，出塞和親，琵琶馬上催歸程。", suffix: "以明妃為知己。" },
            { type: "text", text: "一與之訂，千秋不移。" },
            { type: "text", text: "若" },
            { type: "term", text: "松之於秦始", hint: "秦始皇（秦）：曾避雨於泰山松樹下，因封其為「五大夫」。" },
            { type: "text", text: "，" },
            { type: "term", text: "鶴之於衛懿", hint: "衛懿公（春秋）：好鶴，甚至讓鶴乘車，給予大夫俸祿，終至亡國。" },
            { type: "text", text: "，正所謂不可與作緣者也。" }
        ]
    },
    { id: 15, type: "card", title: "閱讀注意", text: '閱讀課文時，應注意以下幾點：<br>1. 蓮花特質與君子品德的關係。<br>2. 文末作者感嘆的言外之意。<br>3. 以菊花、牡丹來襯托蓮花的寫作手法。', details: { content: '<ol style="list-style-type: decimal; padding-left: 20px; text-align: left;"><li style="margin-bottom: 15px;"><strong>特質與品德：</strong>將蓮花「出淤泥不染」等生態特質，比喻為君子正直、不隨波逐流的高尚德行。</li><li style="margin-bottom: 15px;"><strong>言外之意：</strong>慨嘆世風日下，追逐富貴名利（愛牡丹）者眾，而能堅守氣節（愛蓮）的君子太少。</li><li><strong>襯托手法：</strong>運用映襯修辭，以菊花（正襯）和牡丹（反襯）來突顯蓮花的不凡。</li></ol>', examples: "" } },
    { id: 16, type: "card", title: "作者介紹：周敦頤 (一)", text: '周敦頤，字茂叔，北宋 道州 營道人（今湖南省 永州市 道縣）。', details: { content: "生於真宗 天禧（ㄒㄧ）元年，卒於神宗 熙寧六年，年五十七。", examples: "生平：北宋理學開山鼻祖。" } },
    { id: 17, type: "card", title: "作者介紹：周敦頤 (二)", text: '為官正直清廉，政績頗佳。人品高潔，胸襟坦蕩。', details: { content: '開創了融合佛、道思想的儒學─<span class=\'highlight-term\'>「理學」</span>，被尊為宋代理學之祖。<br>晚年隱居廬山，建濂溪書堂居住，世稱濂溪先生。', examples: "著作：後人編有《周濂溪先生全集》。" } },
    { id: 18, type: "video", title: "作者動畫影片", videoSrc: "https://drive.google.com/file/d/1lR1I2oGndCbuCw_OsjBaGq2KXm3Wc1NG/preview", description: "觀賞周敦頤的生平故事與理學思想啟蒙。" },

    { id: 19, type: "text-study", title: "課文解讀 (一)", sentences: [{ text: "水陸草木之花，", notes: [{ term: "之", def: "助詞，的。", type: "sup" }], trans: "水中、陸地上各種草木的花，" }, { text: "可愛者甚蕃：", notes: [{ term: "蕃", def: "音ㄈㄢˊ，通「繁」，眾多。", type: "main" }, { term: "甚", def: "很、非常。", type: "sup" }, { term: "者", def: "的花。", type: "sup" }], trans: "值得喜愛的很多：" }, { text: "晉 陶淵明獨愛菊，", notes: [{ term: "獨", def: "副詞，特別。", type: "sup" }], trans: "晉代的陶淵明特別喜愛菊花，" }] },
    { id: 20, type: "text-study", title: "課文解讀 (二)", sentences: [{ text: "自李唐來，世人盛愛牡丹。", notes: [{ term: "李唐", def: "唐代由李淵建國，故稱李唐。", type: "main" }, { term: "自", def: "從。", type: "sup" }, { term: "盛", def: "音ㄕㄥˋ。非常。", type: "sup" }], trans: "從唐代以來，世人非常喜愛牡丹。" }, { text: "予獨愛蓮之出淤泥而不染，", notes: [{ term: "予", def: "音ㄩˊ。我，同「余」。", type: "sup" }, { term: "出淤泥而不染", def: '指蓮從水底的爛泥中生長出來，卻不受汙染。<div class=\'sub-def\'>淤，音ㄩ。</div>', type: "main" }, { term: "之", def: "助詞，無義。", type: "sup" }, { term: "而", def: "（出淤泥「而」不染）連詞，卻。", type: "sup" }], trans: "我卻特別喜愛蓮從水底的爛泥中生長出來卻不受汙染，" }, { text: "濯清漣而不妖；", notes: [{ term: "濯清漣而不妖", def: '指蓮生長於清水中卻不妖媚。<div class=\'sub-def\'>濯，音ㄓㄨㄛˊ，洗滌。</div><div class=\'sub-def\'>清漣，此指清水。</div><div class=\'sub-def\'>漣，音ㄌㄧㄢˊ，水面的波紋。</div>', type: "main" }, { term: "而", def: "（濯清漣「而」不妖）連詞，卻。", type: "sup" }], trans: "生長於清水中卻不妖媚；" }] },
    { id: 21, type: "text-study", title: "課文解讀 (三)", sentences: [{ text: "中通外直，", notes: [{ term: "中通外直", def: "指蓮的花梗中空，外表挺直。", type: "main" }], trans: "蓮的花梗中空，外表挺直，" }, { text: "不蔓不枝；", notes: [{ term: "不蔓不枝", def: "不蔓生細莖，不旁生枝條。", type: "main" }], trans: "不蔓生細莖，不旁生枝條；" }, { text: "香遠益清，", notes: [{ term: "益", def: "更加。", type: "main" }], trans: "香氣飄得愈遠，聞起來更加清香，" }, { text: "亭亭淨植，", notes: [{ term: "亭亭淨植", def: '指蓮高挺而潔淨的直立水中。<div class=\'sub-def\'>亭亭，高挺的樣子。</div><div class=\'sub-def\'>植，立。</div>', type: "main" }], trans: "高挺而潔淨的直立水中，" }, { text: "可遠觀而不可褻玩焉。", notes: [{ term: "褻玩", def: '輕慢玩弄。<div class=\'sub-def\'>褻，音ㄒㄧㄝˋ，態度輕慢，不莊重。</div><div class=\'sub-def\'>玩，玩弄。</div>', type: "main" }, { term: "而", def: "（可遠觀「而」不可褻玩焉）連詞，卻。", type: "sup" }, { term: "玩", def: "音ㄨㄢˊ。", type: "sup" }, { term: "焉", def: "助詞、代詞皆可。若作句末助詞用，則無實質意義。若作代詞用，則是「它」的意思，指蓮花。", type: "sup" }], trans: "可以從遠處觀看卻不能輕慢的玩弄。" }] },
    { id: 22, type: "text-study", title: "課文解讀 (四)", sentences: [{ text: "予謂：菊，花之隱逸者也；", notes: [{ term: "謂", def: "認為。", type: "main" }, { term: "隱逸者", def: '隱居的高士。<div class=\'sub-def\'>者，代詞，在此相當於白話「的人」。下文「富貴者」、「君子者」的「者」字，意思相同。</div>', type: "main" }, { term: "之", def: "助詞，的。", type: "sup" }], trans: "我認為：菊，是花中的隱士；" }, { text: "牡丹，花之富貴者也；", notes: [], trans: "牡丹，是花中的富貴之人；" }, { text: "蓮，花之君子者也。", notes: [], trans: "蓮，是花中的君子。" }] },
    { id: 23, type: "text-study", title: "課文解讀 (五)", sentences: [{ text: "噫！菊之愛，陶後鮮有聞。", notes: [{ term: "噫", def: "音ㄧˋ，嘆息聲。", type: "main" }, { term: "菊之愛", def: "愛菊（的人）。之，助詞。下文「蓮之愛」、「牡丹之愛」語法相同。", type: "main" }, { term: "之", def: "（菊「之」愛）「之」字的作用是把賓語（菊、蓮、牡丹）移到動詞（愛）之前。", type: "sup" }, { term: "鮮", def: "音ㄒㄧㄢˇ，少。", type: "main" }, { term: "聞", def: "聽說。", type: "sup" }], trans: "唉！喜愛菊花的人，陶淵明之後很少聽說。" }, { text: "蓮之愛，同予者何人？", notes: [{ term: "同予者", def: "像我一樣的人。", type: "sup" }], trans: "和我同樣喜愛蓮花的人，還有誰呢？" }, { text: "牡丹之愛，宜乎眾矣！", notes: [{ term: "宜乎", def: '應當。<div class=\'sub-def\'>乎，助詞，無義。</div>', type: "main" }, { term: "眾", def: "多。", type: "sup" }], trans: "至於喜愛牡丹的人，應當是很多了！" }] },

    // --- 新增：課文情境朗讀 (Index 24) ---
    {
        id: 24,
        type: "video",
        title: "課文情境朗讀",
        videoSrc: "https://drive.google.com/file/d/1D9QLCs4FJKnVsHGzbJVKtBp6Rr4tldbk/preview",
        description: "欣賞愛蓮說課文情境朗讀動畫，體會文中的語氣與意境。"
    },

    // --- 總說篇：互動總結 (Index 25) ---
    {
        id: 25,
        type: "interactive-review",
        title: "總說篇：互動總結",
        description: "點擊畫面中的亮點，複習重點觀念。"
    },

    // --- 蓮之愛：特質互動 (Index 26) ---
    {
        id: 26,
        type: "interactive-lotus-traits",
        title: "蓮之愛：特質互動",
        hotspots: [
            { trait: "香遠益清", desc: "象徵君子品格高尚，聲名遠播，可以影響他人", img: "https://class.kh.edu.tw/sites/4609/upload_file/30/08.png", top: "27%", left: "45.5%", popupTop: "12.7%", popupLeft: "21.2%" },
            { trait: "亭亭淨植", desc: "象徵君子品格高潔，挺立不屈、卓爾不群。", img: "https://class.kh.edu.tw/sites/4609/upload_file/30/07.png", top: "39.7%", left: "49.5%", popupTop: "25.3%", popupLeft: "74%" },
            { trait: "不蔓不枝", desc: "象徵君子不攀附關係，不趨炎附勢，不會與人結黨營私。", img: "https://class.kh.edu.tw/sites/4609/upload_file/30/06.png", top: "62.8%", left: "49.6%", popupTop: "48.8%", popupLeft: "72.7%" },
            { trait: "中通外直", desc: "象徵君子胸懷坦蕩，行為正直。", img: "https://class.kh.edu.tw/sites/4609/upload_file/30/05.png", top: "53.2%", left: "49.6%", popupTop: "39.2%", popupLeft: "20.1%" },
            { trait: "濯清漣而不妖", desc: "象徵君子不因順境而自滿或放縱，不媚世隨俗，不向人逢迎諂媚。", img: "https://class.kh.edu.tw/sites/4609/upload_file/30/04.png", top: "76.8%", left: "53.8%", popupTop: "73%", popupLeft: "72.5%" },
            { trait: "出淤泥而不染", desc: "象徵君子在混亂的世道中，亦能潔身自愛，不同流合污。", img: "https://class.kh.edu.tw/sites/4609/upload_file/30/03.png", top: "87.5%", left: "43.5%", popupTop: "73%", popupLeft: "15.7%" },
            { trait: "可遠觀而不可褻玩焉", desc: "象徵君子端莊嚴正，令人敬仰，凜然不可侵犯。", img: "https://class.kh.edu.tw/sites/4609/upload_file/30/09.png", top: "17%", left: "54.5%", popupTop: "2.5%", popupLeft: "67.9%" }
        ]
    },

    // --- 菊花影音欣賞 (Index 27) ---
    {
        id: 27,
        type: "chrysanthemum-video",
        title: "菊之愛：影音欣賞",
        videoSrc: "https://drive.google.com/file/d/1rVhz03jTtuiceaGW4IWHvlNf5yNdOwcc/preview", /* 陶淵明 飲酒詩 影音素材 */
        description: "觀賞影片，體會陶淵明「採菊東籬下」的隱逸情懷，並思考「菊」為何被視為隱逸者的象徵。"
    },

    // --- 菊之隱逸 互動式解析頁 (Index 28) ---
    {
        id: 28,
        type: "interactive-quote",
        title: "菊之隱逸",
        // ↓↓↓ 在這裡填入第 29 頁背景圖 ↓↓↓
        imageSrc: "https://class.kh.edu.tw/sites/4609/upload_file/30/7.png",
        text: "菊，花之隱逸者也",
        analysis: {
            chars: ["菊", "，", "花", "之", "隱", "逸", "者", "也"],
            structure: {
                l2: [
                    { label: "主語", start: 0, len: 1 },
                    { label: "斷語", start: 2, len: 6 }
                ]
            },
            type: "判斷句",
            meaning: [
                "菊花耐寒傲霜的特性，正如隱士孤高不群、不與世俗同流合汙的節操。",
                "象徵隱士潔身自愛，獨善其身的特質。"
            ]
        }
    },

    // --- 牡丹之愛：影音欣賞 (Index 29) ---
    {
        id: 29,
        type: "video",
        title: "牡丹之愛：影音欣賞",
        videoSrc: "https://drive.google.com/file/d/1EY_G3JcT5UuKKAVJ3A_wAtPbpVWDL4gw/preview",
        description: "觀賞影片，體會世人盛愛牡丹的熱鬧景象，並思考「牡丹」為何被視為富貴者的象徵。"
    },

    // --- 新增：牡丹之富貴 (Index 30) ---
    {
        id: 30,
        type: "interactive-quote",
        title: "牡丹之富貴",
        // 若有背景圖請替換此連結
        imageSrc: "https://class.kh.edu.tw/sites/4609/upload_file/30/9.png",
        text: "牡丹，花之富貴者也",
        analysis: {
            chars: ["牡", "丹", "，", "花", "之", "富", "貴", "者", "也"],
            structure: {
                l2: [
                    { label: "主語", start: 0, len: 2 },
                    { label: "斷語", start: 3, len: 6 }
                ]
            },
            type: "判斷句",
            meaning: [
                "牡丹的顏色非常豔麗，絢麗多姿，就像是那些貪圖享樂的達官顯貴，以及喜愛攀附權貴的一般人。",
                "牡丹象徵社會大眾追求富貴、貪名逐利的特質。"
            ]
        }
    },

    // --- 蓮之愛：影音欣賞 (Index 31) ---
    {
        id: 31,
        type: "video",
        title: "蓮之愛：影音欣賞",
        videoSrc: "https://drive.google.com/file/d/1Qa8LYBAtHI8Jl-3bbx74Kt3n3l2aWDMi/preview",
        description: "觀賞影片，體會蓮花「出淤泥而不染」的高潔特質，並思考「蓮」為何被視為君子的象徵。"
    },

    // --- 新增：蓮之君子 (Index 32) ---
    {
        id: 32,
        type: "interactive-quote",
        title: "蓮之君子",
        // 若有背景圖請替換此連結
        imageSrc: "https://class.kh.edu.tw/sites/4609/upload_file/30/8.png",
        text: "蓮，花之君子者也",
        analysis: {
            chars: ["蓮", "，", "花", "之", "君", "子", "者", "也"],
            structure: {
                l2: [
                    { label: "主語", start: 0, len: 1 },
                    { label: "斷語", start: 2, len: 6 }
                ]
            },
            type: "判斷句",
            meaning: [
                "蓮花生長環境特殊卻不染塵俗，就像胸懷磊落、行為正直、德聲遠播的君子。",
                "蓮象徵君子操守高潔，兼善天下的特質。"
            ]
        }
    },
    // --- 新增：三種花象徵的人物比較 (Index 33) ---
    {
        id: 33,
        type: "comparison-table",
        title: "三種花象徵的人物比較",
        imageSrc: "https://class.kh.edu.tw/sites/4609/upload_file/30/02-1.png",
        headers: ["花名", "象徵人物", "特質描述", "處世態度"],
        rows: [
            ["菊", "隱逸者 (隱士)", "獨善其身，不求聞達，清高孤傲", "避世 (遠離混濁)"],
            ["蓮", "君子", "兼善天下，品德高尚，胸懷坦蕩", "入世 (在混濁中保持清白)"],
            ["牡丹", "富貴者 (俗人)", "追名逐利，攀附權貴，隨波逐流", "入世 (沉迷於混濁)"]
        ]
    },
    // --- 新增：愛蓮說：總結演示 (Index 34, 第 35 頁) ---
    {
        id: 34,
        type: "three-flowers-cards",
        title: "愛蓮說：作者感嘆"
    },
    // --- 鑑賞分析 (一) (Index 35, 第 36 頁) ---
    {
        id: 35,
        type: "analysis-table",
        title: "鑑賞分析 (一)",
        headers: ["項目", "內容解析"],
        rows: [
            {
                item: "主旨",
                content: "本文屬於<h>詠物言志</h>的文章，作者藉花的形象闡述理想的人格特質。",
                // 詳細內容：與摘要相同，但排版更清楚
                detailContent: "本文屬於詠物言志的文章，作者藉花的形象闡述理想的人格特質。<br><br>作者不直接說理，而是通過對蓮花外形、生長環境等特質的描寫，寄寓了自己對君子人格的嚮往與追求。"
            },
            {
                item: "文意",
                content: "文中藉由描繪蓮花的形象，以闡明君子的品德，例如：以「<h>出淤泥而不染</h>」象徵君子能潔身自愛，不同流合汙；以「<h>濯清漣而不妖</h>」象徵君子品格清高，不媚世隨俗；以蓮花「<h>中通外直，不蔓不枝</h>」的外形，表現君子行為正直，不攀附關係的形象。「<h>香遠益清，亭亭淨植，可遠觀而不可褻玩焉</h>」，則是從蓮花的香氣、外觀來形容君子，其品德醇美，芬芳遠播，不但可以影響他人，也讓人心生敬仰，不敢輕慢玩弄。",
                // 詳細內容：整合本次 PDF 的七點解析
                detailContent: `
                            <ul class="detail-list">
                                <li>
                                    <div class="detail-origin">1. 出淤泥而不染</div>
                                    <div class="detail-desc"><span class="detail-label">蓮之特性</span>生長於污濁環境，卻不受污染。</div>
                                    <div class="detail-desc"><span class="detail-label" style="background:#fce7f3; color:#be185d;">君子品格</span>象徵君子在混亂的世道中，亦能潔身自愛，不同流合污。</div>
                                </li>
                                <li>
                                    <div class="detail-origin">2. 濯清漣而不妖</div>
                                    <div class="detail-desc"><span class="detail-label">蓮之特性</span>沐浴於清水之中，卻不顯得嬌媚妖豔。</div>
                                    <div class="detail-desc"><span class="detail-label" style="background:#fce7f3; color:#be185d;">君子品格</span>象徵君子不因順境而自滿或放縱，不媚世隨俗，不向人逢迎諂媚。</div>
                                </li>
                                <li>
                                    <div class="detail-origin">3. 中通外直</div>
                                    <div class="detail-desc"><span class="detail-label">蓮之特性</span>莖的內部通達，外部筆直。</div>
                                    <div class="detail-desc"><span class="detail-label" style="background:#fce7f3; color:#be185d;">君子品格</span>內心通達，胸懷坦蕩，行為正直。</div>
                                </li>
                                <li>
                                    <div class="detail-origin">4. 不蔓不枝</div>
                                    <div class="detail-desc"><span class="detail-label">蓮之特性</span>不攀附生長，不橫生枝節。</div>
                                    <div class="detail-desc"><span class="detail-label" style="background:#fce7f3; color:#be185d;">君子品格</span>象徵君子不攀附關係，不趨炎附勢，不會與人結黨營私。</div>
                                </li>
                                <li>
                                    <div class="detail-origin">5. 香遠益清</div>
                                    <div class="detail-desc"><span class="detail-label">蓮之特性</span>香氣遠播，且愈遠愈清芬。</div>
                                    <div class="detail-desc"><span class="detail-label" style="background:#fce7f3; color:#be185d;">君子品格</span>象徵君子品格高尚，美德聲名遠揚，其影響力深遠。</div>
                                </li>
                                <li>
                                    <div class="detail-origin">6. 亭亭淨植</div>
                                    <div class="detail-desc"><span class="detail-label">蓮之特性</span>潔淨地聳立著，身姿挺拔。</div>
                                    <div class="detail-desc"><span class="detail-label" style="background:#fce7f3; color:#be185d;">君子品格</span>象徵君子品格高潔，挺立不屈、卓爾不群。</div>
                                </li>
                                <li>
                                    <div class="detail-origin">7. 可遠觀而不可褻玩焉</div>
                                    <div class="detail-desc"><span class="detail-label">蓮之特性</span>莊重而不可輕慢。</div>
                                    <div class="detail-desc"><span class="detail-label" style="background:#fce7f3; color:#be185d;">君子品格</span>象徵君子端莊嚴正，令人敬仰，其莊嚴凜然不可侵犯。</div>
                                </li>
                            </ul>
                        `
            }
        ]
    },

    // --- 鑑賞分析 (二) (Index 36, 第 37 頁) ---
    {
        id: 36,
        type: "analysis-table",
        title: "鑑賞分析 (二)",
        headers: ["項目", "內容解析"],
        rows: [
            {
                item: "寫作",
                content: "本文以菊花、牡丹和蓮花的形象，象徵<h>隱士</h>、<h>世人</h>和<h>君子</h>的特質，並以菊花與牡丹作為<h>陪襯</h>，凸顯蓮花的高潔，使君子的品格具體化。這種<h>象徵</h>和<h>比較</h>的手法，不僅豐富了文章的文學性，也增加了說服力。",
                detailContent: "<strong>映襯手法解析：</strong><br><ul style='list-style-type: disc; padding-left: 20px; margin-top: 10px;'><li><strong>正襯（菊）：</strong>以菊花的隱逸、不與世俗同流合汙，來正面襯托蓮花（君子）的高潔。</li><li><strong>反襯（牡丹）：</strong>以牡丹的富貴、世人趨之若鶩，來反面襯托蓮花（君子）不慕名利、潔身自愛的難能可貴。</li></ul><br>透過這三種花的對比，作者將抽象的「君子品格」具象化，使讀者更能領會其精神。"
            },
            {
                item: "素養",
                content: "作者在文中並未明白批判世人汲汲追求富貴的不當，也未直接評論隱逸的是非，而是讓我們<h>自行領悟</h>什麼才是理想的人格，並以此作為自己<h>修養品格的模範</h>。",
                detailContent: "<strong>素養導讀：</strong><br><br>這篇文章體現了儒家「內聖外王」的修養觀。作者身處官場（入世），卻不被官場的惡習所染（出淤泥而不染），同時保持內心的通達與正直（中通外直）。<br><br>這告訴我們，在現代社會中，我們或許無法完全脫離複雜的社會環境（淤泥），但我們可以選擇堅守自己的道德底線，保持獨立思考，不盲目從眾（不染），成為一個有原則、有操守的現代君子。"
            }
        ]
    },

    // --- 新增：問題思考 (Index 37, 38, 39) ---
    {
        id: 37,
        type: "thought-question",
        title: "問題思考 (一)",
        question: "作者雖指出菊和牡丹的人格形象，但沒有直接評論，你認為他的言外之意為何？",
        answerHTML: `
                    <ul class="answer-list">
                        <li>
                            <strong>感嘆世態：</strong><br>
                            以感嘆詞「噫」開頭，感嘆世人大多<span class="highlight">追逐名利（愛牡丹）</span>，而真正懂得<span class="highlight">潔身自愛（愛菊）</span>的人太少。
                        </li>
                        <li>
                            <strong>作者的價值判斷：</strong>
                            <ul style="list-style: none; padding-left: 20px; margin-top: 10px;">
                                <li style="font-size: 2.5rem; margin-bottom: 10px;">➜ <strong>追求富貴（牡丹）：</strong>作者認為最不足取。</li>
                                <li style="font-size: 2.5rem; margin-bottom: 10px;">➜ <strong>隱士（菊）：</strong>雖有可取之處，但相對消極，非最理想。</li>
                                <li style="font-size: 2.5rem;">➜ <strong>君子（蓮）：</strong>能夠出淤泥而不染，才是作者心中<span class="highlight">最理想的人格</span>。</li>
                            </ul>
                        </li>
                    </ul>
                `
    },
    {
        id: 38,
        type: "thought-question",
        title: "問題思考 (二)",
        question: "本文以菊象徵隱士，以蓮象徵君子，二者皆具有高潔自持的正面形象，然其相異之處為何？",
        answerHTML: `
                    <ul class="answer-list">
                        <li>
                            <strong>菊（隱士）— 獨善其身：</strong><br>
                            雖然潔身自愛、不同流合汙，但選擇<span class="highlight">避世隱逸</span>，脫離俗世獨自生活，態度較為消極。
                        </li>
                        <li>
                            <strong>蓮（君子）— 兼善天下：</strong><br>
                            雖不認同世俗追逐富貴的風氣，但選擇<span class="highlight">留在塵世</span>，並堅守節操（出淤泥而不染）。
                        </li>
                        <li>
                            <strong>最大差異：</strong><br>
                            君子（蓮）具有「香遠益清」的特質，能以美好的品德<span class="highlight">發揮影響力</span>，格局比隱士更積極且崇高。
                        </li>
                    </ul>
                `
    },
    {
        id: 39,
        type: "thought-question",
        title: "問題思考 (三)",
        question: "除了蓮之外，你認為還有哪種植物也可以象徵君子的品德？請舉例說明。",
        answerHTML: `
                    <ul class="answer-list">
                        <li>
                            <strong>舉例 1：梅花</strong><br>
                            <span style="display:block; margin-top:8px; font-size: 2.4rem; color: #57534e;">
                            特質：不懼酷寒，先百花而開放。<br>
                            象徵：<span class="highlight">高潔、堅強</span>的品格，激勵人立志奮發。
                            </span>
                        </li>
                        <li>
                            <strong>舉例 2：竹子</strong><br>
                            <span style="display:block; margin-top:8px; font-size: 2.4rem; color: #57534e;">
                            特質(1) 四季常青：臨霜不凋。<br>
                            特質(2) 中通外直：象徵<span class="highlight">謙虛</span>。<br>
                            特質(3) 有節：象徵<span class="highlight">高風亮節</span>、蓬勃向上。
                            </span>
                        </li>
                    </ul>
                `
    },
    // --- 新增：文意理解測驗 (Index 40) ---
    {
        id: 40,
        type: "quiz-page",
        title: "應用練習：文意理解",
        quizData: [
            {
                id: 1,
                question: "「予獨愛蓮之出淤泥而不染，濯清漣而不妖。」由這句話可知，作者喜愛蓮的哪些特質？",
                answer: "D",
                options: [
                    { text: "(A) 出塵脫俗，俏麗多姿", explanation: "" },
                    { text: "(B) 平易近人，和藹親切", explanation: "" },
                    { text: "(C) 氣宇不凡，威風凜凜", explanation: "" },
                    { text: "(D) 潔身自愛，端莊高雅", explanation: "題幹意指蓮不同流合汙，不媚世隨俗" }
                ]
            },
            {
                id: 2,
                question: "「中通外直，不蔓不枝；香遠益清，亭亭淨植，可遠觀而不可褻玩焉。」根據這段文字，關於蓮所象徵的君子特質，下列分析何者正確？",
                answer: "B",
                options: [
                    { text: "(A) 「中通外直」代表君子坦率直爽", explanation: "形容君子行為正直" },
                    { text: "(B) 「不蔓不枝」指君子不攀附權貴", explanation: "" },
                    { text: "(C) 「香遠益清」代表君子恬淡寡欲", explanation: "形容君子品德醇美，芬芳遠播" },
                    { text: "(D) 「亭亭淨植」指君子清靜無為", explanation: "形容君子人格高潔" }
                ]
            },
            {
                id: 3,
                question: "「菊，花之隱逸者也；牡丹，花之富貴者也；蓮，花之君子者也。」關於作者對這三種花的評論，下列說明何者正確？",
                answer: "A",
                options: [
                    { text: "(A) 菊花代表遠離塵囂，獨善其身的隱士", explanation: "" },
                    { text: "(B) 牡丹代表樂於分享，慷慨布施的富人", explanation: "牡丹代表貪名逐利的大眾" },
                    { text: "(C) 蓮花代表修身養性，不問世事的君子", explanation: "蓮花代表操守高潔，品格清高的君子" },
                    { text: "(D) 由此評論可見作者三種花都喜愛", explanation: "無法看出" }
                ]
            },
            {
                id: 4,
                question: "「噫！菊之愛，陶後鮮有聞。蓮之愛，同予者何人？牡丹之愛，宜乎眾矣！」關於這段文字的含義，下列敘述何者正確？",
                answer: "D",
                options: [
                    { text: "(A) 懷抱道德理想的人到處都有", explanation: "極為稀少" },
                    { text: "(B) 追名逐利的人沒有從前多", explanation: "應該很多" },
                    { text: "(C) 社會上多數人都能棄惡從善", explanation: "社會上多數人嚮往富貴" },
                    { text: "(D) 隱居守節的人已不復多見", explanation: "" }
                ]
            },
            {
                id: 5,
                question: "關於本文，下列敘述何者正確？",
                answer: "B",
                options: [
                    { text: "(A) 採平鋪直敘的方式，直接說明對於三種花的好惡", explanation: "以暗示的方式寄託褒貶" },
                    { text: "(B) 先說明獨愛蓮花的原因，再敘述三種花象徵的人格特質", explanation: "" },
                    { text: "(C) 全文採對比手法，藉由菊花來襯托牡丹高潔的氣質", explanation: "主要是以菊花與牡丹襯托蓮花的氣質" },
                    { text: "(D) 全文託物言志，以稱頌菊花來傳達對隱居山林的嚮往", explanation: "以稱頌蓮花闡明君子的內涵，並未表達出嚮往隱居的生活" }
                ]
            }
        ]
    },
    // --- 新增：蓮與君子翻牌配對遊戲 (Index 41) ---
    {
        id: 41,
        type: "flip-card-game",
        title: "應用練習：蓮與君子",
        cards: [
            {
                category: "生長環境",
                question: "出淤泥而不染",
                code: "(E)",
                answer: "潔身自愛<br>不同流合汙"
            },
            {
                category: "生長環境",
                question: "濯清漣而不妖",
                code: "(C)",
                answer: "品格清高<br>不媚世隨俗"
            },
            {
                category: "花　梗",
                question: "中通外直，<br>不蔓不枝",
                code: "(A)",
                answer: "行為正直<br>不攀附關係"
            },
            {
                category: "香　氣",
                question: "香遠益清",
                code: "(B)",
                answer: "品德醇美<br>芬芳遠播<br>可以影響他人"
            },
            {
                category: "觀賞感受",
                question: "亭亭淨植，<br>可遠觀而不可褻玩焉",
                code: "(D)",
                answer: "人格高潔<br>令人敬仰<br>而不敢輕慢玩弄"
            }
        ]
    },
    // --- 新增：閱讀測驗 (Index 42) ---
    {
        id: 42,
        type: "reading-quiz",
        title: "應用練習：閱讀測驗",
        articles: [
            `<span class="article-label">（甲）</span>唐代黃蘗禪師有「不經一番寒徹骨，焉得梅花撲鼻香」之句傳世，北宋王安石寫牆角數枝梅花獨自綻放：「遙知不是雪，為有暗香來。」梅花不懼嚴寒，不與群芳爭豔，凜然傲立於天地之間，我國政府取其堅韌高潔的形象，作為民族精神的象徵，並於民國五十三年正式將國花訂為「梅花」。對於梅花，許多人只知其名而不知其形，經常將它與「櫻花」混淆。兩者乍看相似，事實上，<span class="highlight-text">梅花的花瓣為圓潤形</span>，<span class="highlight-text">櫻花的花瓣尖端則有缺口</span>。而<span class="highlight-text">梅花的花梗極短，且單朵生長</span>；<span class="highlight-text">櫻花的花梗較長，常見多朵叢生</span>。`,
            `<span class="article-label">（乙）</span>「日本的國花是櫻花」，這句話對，但也不對。日本政府並沒有明文規定國花是何種花卉，「櫻花」是一種約定俗成的默契。日本人喜愛櫻花，因其初綻代表寒冬已去，大地春來，<span class="highlight-text">象徵挺過逆境之後迎來希望</span>。櫻花盛開的花期僅約一週，轉瞬即逝，顯出生命的虛幻與無常，也代表追求生命的燦爛而不懼死亡。除了櫻花，「菊花」在日本人心中亦有重要地位。據傳，菊花是由中國傳入日本，進而成為日本皇室的象徵，並廣為使用。舉凡皇室器物、一般人民的護照、硬幣，甚至傳統糕點皆可見菊花的身影。所以，「日本的國花是菊花」，同樣的道理，這句話對，但也不對。`
        ],
        quizData: [
            {
                id: 1,
                question: "根據(甲)文，下列圖片與花種的配對何者正確？",
                answer: "C",
                hasImages: true,
                images: [
                    { id: 1, type: "cherry", label: "圖片 ①" },
                    { id: 2, type: "plum", label: "圖片 ②" },
                    { id: 3, type: "plum", label: "圖片 ③" }
                ],
                options: [
                    { text: "(A) ①櫻花／②櫻花／③梅花", explanation: "錯誤。圖片②沒有長花梗且花瓣圓潤，應為梅花。" },
                    { text: "(B) ①梅花／②梅花／③櫻花", explanation: "錯誤。圖片①有長花梗且叢生，應為櫻花。" },
                    { text: "(C) ①櫻花／②梅花／③梅花", explanation: "正確！<br>①櫻花：花梗長、多朵叢生、花瓣尖端有缺口。<br>②③梅花：花梗極短、單朵生長、花瓣圓潤。" },
                    { text: "(D) ①梅花／②櫻花／③櫻花", explanation: "錯誤。圖片①為櫻花，圖片②③為梅花。" }
                ]
            },
            {
                id: 2,
                question: "根據(乙)文，下列何者最接近日本人喜愛櫻花的原因？",
                answer: "A",
                hasImages: false,
                options: [
                    { text: "(A) 櫻花初綻，象徵新生與希望", explanation: "正確。文中提到：「因其初綻代表寒冬已去，大地春來，象徵挺過逆境之後迎來希望」。" },
                    { text: "(B) 櫻花形貌寓有族群融合之意", explanation: "錯誤。文中未提及族群融合。" },
                    { text: "(C) 櫻花怒放於盛夏，展現無限生機", explanation: "錯誤。文中提到「大地春來」，並非盛夏。" },
                    { text: "(D) 櫻花代表皇室與人民的緊密關係", explanation: "錯誤。文中提到代表皇室象徵的是「菊花」。" }
                ]
            },
            {
                id: 3,
                question: "根據兩文，下列敘述何者正確？",
                answer: "B",
                hasImages: false,
                options: [
                    { text: "(A) 正式國花的訂定通常來自國民約定俗成的默契", explanation: "錯誤。(乙)文提到日本國花「櫻花」是約定俗成的默契，但並非「正式國花訂定」的通則。(甲)文則提到我國是政府「正式訂定」。" },
                    { text: "(B) 梅花與櫻花共通的精神象徵為不畏逆境的堅韌生命力", explanation: "正確。(甲)文梅花象徵「堅韌高潔」；(乙)文櫻花象徵「挺過逆境」。兩者皆含有不畏逆境的意義。" },
                    { text: "(C) 日本國花為櫻花、菊花並列，其中櫻花更加受到大眾喜愛", explanation: "錯誤。文中僅提到兩者地位皆重要，並未比較喜愛程度。" },
                    { text: "(D) 梅花與菊花由中國傳入日本，皆有淡泊安然、逍遙自在的含義", explanation: "錯誤。文中僅提到「菊花」據傳由中國傳入，且未提及「淡泊安然、逍遙自在」的含義。" }
                ]
            }
        ]
    },
    // --- 新增：查音辨義 (Index 43) ---
    {
        id: 43,
        type: "char-differentiation",
        title: "查音辨義：字形字音字義"
    },
    // --- 新增：賓語提前練習 (Index 44) ---
    {
        id: 44,
        type: "grammar-practice",
        title: "應用練習：賓語提前",
        intro: "文言文裡把<span class='highlight-term'>賓語（受詞）</span>提到<span class='highlight-term'>述語（動詞）</span>的前面時，中間常加一「之」字或「是」字，「之」與「是」為結構助詞，無義。<br><br>例如：「愛菊」，把賓語「菊」提到述語「愛」的前面，中間加一「之」字，就成了「菊之愛」；<br>「從主義」，把賓語「主義」提到述語「從」的前面，中間加一「是」字，就成了「主義是從」。<br><br><strong>請根據這個原則，將下列文句「　」中的部分還原成原來的句型。</strong>",
        questions: [
            { text: "父母唯「其疾之憂」。", answer: "（ 憂其疾 ）", note: "註：做父母的只是為子女的疾病而擔憂。" },
            { text: "這件事「何難之有」？", answer: "（ 有何難 ）" },
            { text: "「牡丹之愛」，宜乎眾矣！", answer: "（ 愛牡丹 ）" },
            { text: "明慶事業有成後積極回饋社會，擺脫「唯利是圖」的商人形象。", answer: "（ 唯圖利 ）" },
            { text: "這份企畫案由你全權負責，如今無法順利完成，當然「唯你是問」。", answer: "（ 唯問你 ）" },
            { text: "我們既然推選正奇擔任籃球隊隊長，就應以他「馬首是瞻」，全力配合。", answer: "（ 瞻馬首 ）", note: "註：馬首是瞻：比喻服從指揮或跟隨他人進退。" }
        ]
    },
    
    // --- 新增：植物象徵意義 (Index 45) ---
    {
        id: 45,
        type: "plant-symbol-quiz",
        title: "應用練習：植物象徵",
        options: [
            { code: "(甲)", text: "愛情" },
            { code: "(乙)", text: "謙虛有節" },
            { code: "(丙)", text: "堅韌高潔" },
            { code: "(丁)", text: "母愛" },
            { code: "(戊)", text: "高雅脫俗" },
            { code: "(己)", text: "堅忍不拔" }
        ],
        example: {
            img: "https://class.kh.edu.tw/sites/4609/upload_file/30/46-1.png",
            text: "松柏　象徵",
            ans: "（ 己 ）"
        },
        questions: [
            { plant: "梅花", img: "https://class.kh.edu.tw/sites/4609/upload_file/30/46-2.png", ans: "（ 丙 ）" },
            { plant: "蘭花", img: "https://class.kh.edu.tw/sites/4609/upload_file/30/46-3.png", ans: "（ 戊 ）" },
            { plant: "竹子", img: "https://class.kh.edu.tw/sites/4609/upload_file/30/46-4.png", ans: "（ 乙 ）" },
            { plant: "玫瑰", img: "https://class.kh.edu.tw/sites/4609/upload_file/30/46-5.png", ans: "（ 甲 ）" },
            { plant: "康乃馨", img: "https://class.kh.edu.tw/sites/4609/upload_file/30/46-6.png", ans: "（ 丁 ）" }
        ]
    },
    // --- 新增：悅讀小棧 (Index 46) ---
    // js/data.js

    {
        id: 46,
        type: "poem-reading",
        title: "悅讀小棧：買花",
        poemTitle: "白居易〈買花〉",
        // 注意：這裡加入了 style 確保在任何背景下文字都清晰
        poemContent: `帝城①春欲暮②，喧喧③車馬度。<br>共道牡丹時，相隨買花去。<br>貴賤無常價，酬直④看花數。<br>灼灼⑤百朵紅，戔戔⑥五束素⑦。<br>上張幄⑧幕庇⑨，旁織笆籬護。<br>水灑復泥封，移來色如故⑩。<br>家家習為俗⑪，人人迷不悟。<br>有一田舍翁，偶來買花處。<br>低頭獨長嘆，此嘆無人喻⑫。<br>一叢深色花，十戶中人賦⑬。`,
        annotations: [
            "①帝城：即都城，相當於現代的首都。",
            "②春欲暮：快到暮春（農曆三月）的時候。",
            "③喧喧：形容車馬嘈雜、喧鬧的聲音。",
            "④酬直：償付代價。",
            "⑤灼灼：花茂盛鮮明。",
            "⑥戔戔：積聚的樣子。戔，音 ㄐㄧㄢ 。",
            "⑦五束素：二十五匹帛（一束是五匹）。",
            "⑧幄：帳幕。",
            "⑨庇：遮蔽、掩護。",
            "⑩如故：像原來的一樣。",
            "⑪俗：群眾的風尚習慣。",
            "⑫喻：知道、明白。",
            "⑬賦：稅收。"
        ],
        translation: "京城裡快到暮春的時候，嘈雜喧鬧，車馬絡繹不絕。人們都說是欣賞牡丹的季節，成群結隊去買花。牡丹的貴賤價錢不一樣，要看一叢花數量的多寡。如果是一百朵鮮豔的紅花，價值就高達二十五匹帛。花的上面張著帳幕遮蔽太陽，旁邊編織籬笆嚴加防護。灑了水又用泥土封起來，移植後花色像原來的一樣鮮豔。家家習以為常成了風俗，人人執迷其中不能醒悟。有一個農村來的老頭子，偶然走到買賣牡丹之處。他低著頭獨自深深嘆息，嘆息的本意沒有人能明白。這一叢深色花兒之昂貴，能抵十戶中等人家的賦稅。",
        // 新增：情境圖解資料
        illustration: {
            src: "https://class.kh.edu.tw/sites/4609/upload_file/30/47.png",
            caption: "▲ 一叢花的代價：京城權貴的揮霍 vs 農村老翁的無奈（點擊圖片可放大）"
        },
        quizData: [
            {
                id: 1,
                question: "「帝城春欲暮，喧喧車馬度。共道牡丹時，相隨買花去。」這段詩句描述的情形為何？",
                answer: "C",
                explanation: "題幹意指暮春正值牡丹盛開的時令，路上喧囂不已，原來是民眾爭相前往京城買花，故選(C)。",
                options: [
                    { text: "(A) 在日暮斜暉映照下，盛開的牡丹引來賞花人潮" },
                    { text: "(B) 牡丹在暮春時快要凋謝，買花人爭相搶購" },
                    { text: "(C) 春末牡丹盛開，買花的人潮絡繹不絕" },
                    { text: "(D) 牡丹是人們時常討論的花種，卻因價格昂貴而銷量不高" }
                ]
            },
            {
                id: 2,
                question: "在本詩中，田舍翁長嘆的原因為下列何者？",
                answer: "A",
                explanation: "由「一叢深色花，十戶中人賦」可知，田舍翁長嘆的是有錢人可以為了買牡丹花大錢，而這些錢卻是十戶中等人家的一年賦稅，故選(A)。",
                options: [
                    { text: "(A) 有錢人家競逐豪奢，社會貧富懸殊" },
                    { text: "(B) 花賤傷農，致使花農無以為生" },
                    { text: "(C) 有錢人家喜新厭舊，花總初買不久便汰換" },
                    { text: "(D) 自家田裡的作物，經濟價值沒有牡丹高" }
                ]
            },
            {
                id: 3,
                question: "下列詩句，何者可作為〈愛蓮說〉一文中「牡丹之愛，宜乎眾矣」的注腳？",
                answer: "B",
                explanation: "「牡丹之愛，宜乎眾矣」指貪名逐利的世人很多，與本詩中以高價購買牡丹，並悉心照顧的「家家」、「人人」相同，都對追求富貴一事執迷不悟，故選(B)。",
                options: [
                    { text: "(A) 貴賤無常價，酬直看花數" },
                    { text: "(B) 家家習為俗，人人迷不悟" },
                    { text: "(C) 低頭獨長嘆，此嘆無人喻" },
                    { text: "(D) 一叢深色花，十戶中人賦" }
                ]
            }
        ]
    },
    // --- 新增：閱讀挑戰 (Index 47) ---
    {
        id: 47,
        type: "reading-challenge",
        title: "閱讀挑戰",
        quizData: [
            {
                id: 1,
                question: "「知識分子一向有『潔癖』，多以清高自許，在不自覺中容易嚴以責人，所以往往成為獨行俠。」由這段文句可推知作者對知識分子的觀感為何？",
                answer: "D",
                options: [
                    { text: "(A) 個性太單純正直，常讓其他人感到過於天真", explanation: "" },
                    { text: "(B) 多半具有不服輸的個性，因此容易得罪團體成員", explanation: "" },
                    { text: "(C) 自命清高卻沒有充實內涵，因而無法被他人認同", explanation: "" },
                    { text: "(D) 自負且多以高標準看待別人，在團體中變成特殊的存在", explanation: "題幹意指知識分子在品格上強調清高，也以此標準要求他人，漸漸變成特殊分子，故選(D)" }
                ]
            },
            {
                id: 2,
                question: "「花之最能持久，愈開愈盛者，山茶、石榴是也。然石榴之久，猶不及山茶，榴葉經霜即脫，山茶戴雪而榮。則是此花也者，具松柏之骨，挾桃李之姿，歷春夏秋冬如一日。」（李漁〈山茶〉）根據這段文字，下列何者最適合用來形容作者賦予山茶的人格之美？",
                answer: "A",
                options: [
                    { text: "(A) 堅忍不拔，內外皆美", explanation: "山茶「戴雪而榮」，且內在具「松柏之骨」，外表有「桃李之姿」，故選(A)<br><br>【語譯】百花之中，開花時間最長且愈開愈燦爛的，是山茶與石榴。然而石榴的持久度，還比不上山茶，石榴的葉子遇霜就凋謝，山茶即使被雪覆蓋仍能生長得很茂盛。（山茶）這種花具松柏的風骨，有桃李的丰姿，歷經四季始終不變。" },
                    { text: "(B) 樸實無華，謙遜有節", explanation: "" },
                    { text: "(C) 百依百順，溫柔嬌媚", explanation: "" },
                    { text: "(D) 熱情浪漫，樂觀自信", explanation: "" }
                ]
            }
        ]
    },
    // js/data.js

    // ... (前面的資料)

    {
        id: 48,  // 記得修改 ID 以接續上一筆
        type: "word-meaning-quiz",
        title: "字義比較",
        intro: "判斷下列各句「　」中的字義，前後相同的請在（　）中畫○，不同的畫 ╳。",
        questions: [
            {
                id: 1,
                text: "水陸草木「之」花／予獨愛蓮「之」出淤泥而不染",
                answer: "╳",
                explanation: "的 ／ 無義（助詞，取消句子獨立性）"
            },
            {
                id: 2,
                text: "菊，花「之」隱逸者也／菊「之」愛，陶後鮮有聞",
                answer: "╳",
                explanation: "的 ／ 表賓語提前，無義"
            },
            {
                id: 3,
                text: "出淤泥「而」不染／可遠觀「而」不可褻玩焉",
                answer: "○",
                explanation: "卻 ／ 卻（皆為轉折連詞）"
            },
            {
                id: 4,
                text: "「予」謂／同「予」者何人",
                answer: "○",
                explanation: "我 ／ 我"
            },
            {
                id: 5,
                text: "濯清漣「而」不妖／人不知「而」不慍",
                answer: "○",
                explanation: "卻 ／ 卻（皆為轉折連詞）"
            },
            {
                id: 6,
                text: "牡丹之愛，宜「乎」眾矣／學而時習之，不亦說「乎」",
                answer: "╳",
                explanation: "無義（助詞） ／ 用於句末，與「不亦」構成反詰的語氣"
            },
            {
                id: 7,
                text: "陶後「鮮」有聞／芳草「鮮」美",
                answer: "╳",
                explanation: "少 ／ 新鮮、鮮豔"
            },
            {
                id: 8,
                text: "世人「盛」愛牡丹／太平「盛」世",
                answer: "╳",
                explanation: "非常 ／ 興旺"
            },
            {
                id: 9,
                text: "亭亭淨「植」／種「植」樹木",
                answer: "╳",
                explanation: "立 ／ 栽種、培育"
            },
            {
                id: 10,
                text: "香遠「益」清／延年「益」壽",
                answer: "╳",
                explanation: "更加 ／ 增加"
            }
        ]
    }

    // ... (後面的資料)
];