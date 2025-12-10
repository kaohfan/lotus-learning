// js/utils.js

// ==========================================
// 1. 全域狀態變數 (State Variables)
// ==========================================
let lotusStep = 0;
let compareStep = 0;
let flowerStep = 0;
let analysisHighlightStep = 0;

// ==========================================
// 2. 資料集 (Data Sets for Specific Utilities)
// ==========================================
const dictData = {
    1: {
        chars: [
            { shape: "濯", sound: "ㄓㄨㄛˊ", def: "洗滌" },
            { shape: "擢", sound: "ㄓㄨㄛˊ", def: "提拔、選用" },
            { shape: "躍", sound: "ㄩㄝˋ", def: "跳動" },
            { shape: "耀", sound: "ㄧㄠˋ", def: "1. 照射 (例:照耀)<br>2. 自誇" }
        ],
        sentences: [
            { full: "林中將因為在這次的戰役中功績卓著（ㄓㄨˋ），而被拔 %s 為上將。", ans: "擢" },
            { full: "她得知比賽奪冠的消息後，雀 %s 不已。", ans: "躍" },
            { full: "小志拿著滿分的考卷到處向人炫 %s 。", ans: "耀" },
            { full: "這件衣服經過多次洗 %s 晾晒，顏色已不再鮮明。", ans: "濯" }
        ]
    },
    2: {
        chars: [
            { shape: "妖", sound: "ㄧㄠ", def: "1. 嫵（ㄨˇ）媚、豔麗<br>2. 傳說中奇怪反常而能害人的東西" },
            { shape: "夭", sound: "ㄧㄠ", def: "早死" },
            { shape: "沃", sound: "ㄨㄛˋ", def: "土地溼潤肥美" }
        ],
        sentences: [
            { full: "這塊土地肥 %s ，很適合種植稻米。", ans: "沃" },
            { full: "小嬰兒一出生就 %s 折，讓父母非常悲痛。", ans: "夭" },
            { full: "她打扮得十分 %s 豔，在臺上盡情熱舞。", ans: "妖" },
            { full: "故事中的主角和村民們同心協力，一起擊退入侵村莊的 %s 怪。", ans: "妖" }
        ]
    },
    3: {
        chars: [
            { shape: "蔓", sound: "ㄇㄢˋ", def: "1. 延伸、滋長 (例:蔓延)<br>2. 植物細長而能攀繞他物的莖" },
            { shape: "漫", sound: "ㄇㄢˋ", def: "1. 遍布的、充滿的 (例:漫山遍野)<br>2. 放縱不加拘束" },
            { shape: "慢", sound: "ㄇㄢˋ", def: "1. 速度低、不快的<br>2. 驕傲、不禮貌的 (例:輕慢)" }
        ],
        sentences: [
            { full: "正雄因為打掃教室時總是 %s 不經心，常常被老師提醒。<br><span class='text-xl text-stone-500 bg-stone-100 px-3 py-1 rounded inline-block mt-2' style='font-size:1.2rem; background:#f5f5f4; padding:2px 8px; border-radius:4px; color:#78716c;'>注：毫不留意。</span>", ans: "漫" },
            { full: "那排老房子的外牆上爬滿了藤 %s ，很有古樸的味道。", ans: "蔓" },
            { full: "林師傅堅持 %s 工出細活，用時間與耐心打造出完美的作品。<br><span class='text-xl text-stone-500 bg-stone-100 px-3 py-1 rounded inline-block mt-2' style='font-size:1.2rem; background:#f5f5f4; padding:2px 8px; border-radius:4px; color:#78716c;'>注：工作速度緩慢。</span>", ans: "慢" }
        ]
    }
};

// ==========================================
// 3. 基礎互動功能 (Modal, Bubble, Fullscreen)
// ==========================================

export function openModal(data, mode = 'normal') {
    const modal = document.getElementById('fullscreen-modal');
    const contentArea = document.getElementById('modal-content-area');
    let html = '';

    if (mode === 'text-study') {
        html += `<div class="modal-title text-study">${data.title}</div><div class="modal-original">${data.text}</div>`;
        if (data.notes && data.notes.length > 0) {
            html += '<div class="modal-section"><div class="modal-section-title">字詞解釋</div><div class="modal-content-text">';
            data.notes.forEach(note => {
                const typeLabel = note.type === 'main' ? '課文' : '補充';
                const typeClass = note.type;
                html += `<div class="term-container ${typeClass}"><span class="type-badge ${typeClass}">${typeLabel}</span><span class="modal-kw-term ${typeClass}">${note.term}</span><span>${note.def}</span></div>`;
            });
            html += '</div></div>';
        }
        html += `<div class="modal-section" style="background-color: rgba(236, 252, 203, 0.4);"><div class="modal-section-title trans">白話翻譯</div><div class="modal-trans-text">${data.trans}</div></div>`;
    } else if (mode === 'thought-answer') {
        html = `
            <div class="modal-title">${data.question}</div>
            <div class="modal-answer-box">
                <div style="font-size: 2.4rem; color: #b45309; font-weight: bold; margin-bottom: 20px; font-family: 'Noto Sans TC';">
                    【參考解答】
                </div>
                ${data.answerHTML}
            </div>
        `;
    } else {
        html = `<div class="modal-title">${data.title}</div><div class="modal-content-box"><div class="modal-text">${data.text}</div>`;
        if (data.details) {
            if (data.details.content) html += `<div class="modal-sub-text">${data.details.content}`;
            if (data.details.examples) html += `<br><br><span style="color:#059669; font-size: 0.9em; font-family: 'Noto Sans TC', sans-serif;">${data.details.examples}</span>`;
            html += '</div>';
            if (data.details.supplement) {
                html += `<div class="modal-supplement"><span class="modal-supplement-title">${data.details.supplement.title}</span><div style="font-size: 2rem; line-height: 1.6; color: #4b5563;">${data.details.supplement.content}</div></div>`;
            }
        }
        html += '</div>';
    }
    contentArea.innerHTML = html;
    modal.classList.add('open');
}

export function closeModal() {
    const modal = document.getElementById('fullscreen-modal');
    modal.classList.remove('open');
}

export function openFullscreenImage(src) {
    const modal = document.getElementById('fullscreen-modal-image');
    const img = document.getElementById('fullscreen-img-tag');
    img.src = src;
    modal.classList.add('open');
}

export function closeFullscreenImage() {
    const modal = document.getElementById('fullscreen-modal-image');
    modal.classList.remove('open');
}

export function toggleBubble(id, element, event) {
    if (event) event.stopPropagation();
    const bubble = document.getElementById('bubble-' + id);
    document.querySelectorAll('.bubble-popup').forEach(b => {
        if (b.id !== 'bubble-' + id) b.classList.remove('active');
    });
    if (bubble) {
        bubble.classList.contains('active') ? bubble.classList.remove('active') : bubble.classList.add('active');
    }
}

// ==========================================
// 4. 特殊頁面互動邏輯
// ==========================================

// --- 蓮花三態 (Lotus Growth) ---
export function handleLotusClick() {
    if (lotusStep >= 3) return;
    const img = document.getElementById('lotus-img-' + lotusStep);
    const text = document.getElementById('lotus-text-' + lotusStep);
    if (img && text) {
        img.classList.add('show');
        setTimeout(() => { text.classList.add('show'); }, 500);
    }
    lotusStep++;
}

// --- 比較表格 (Comparison Table) ---
export function handleCompareClick() {
    if (compareStep >= 3) return;
    const elements = document.querySelectorAll('.row-content-' + compareStep);
    elements.forEach(el => {
        el.classList.add('show');
    });
    compareStep++;
    if (compareStep >= 3) {
        const hint = document.getElementById('compare-hint');
        if (hint) hint.style.display = 'none';
    }
}

// --- 牡丹解析卡片 (Peony Analysis) ---
export function showAnalysisCard() {
    const card = document.getElementById('full-analysis-card');
    card.classList.add('active');
}

export function closeAnalysisCard() {
    const card = document.getElementById('full-analysis-card');
    card.classList.remove('active');
}

// --- 蓮之愛互動特質 (Lotus Traits) ---
export function toggleLotusTraitLabel(index, event) {
    if (event) event.stopPropagation();
    const popup = document.getElementById('lt-popup-' + index);
    closeLotusTraitCard();
    if (popup) {
        popup.classList.toggle('active');
    }
}

export function showLotusTraitCard(index, event) {
    if (event) event.stopPropagation();
    const hotspot = document.getElementById('lt-hotspot-' + index);
    if (!hotspot) return;

    const trait = hotspot.getAttribute('data-trait');
    const description = hotspot.getAttribute('data-description');
    const imageUrl = hotspot.getAttribute('data-image');

    document.getElementById('lt-popup-trait-text').textContent = trait;
    document.getElementById('lt-popup-description-text').textContent = description;
    document.getElementById('lt-popup-image').src = imageUrl;

    document.getElementById('lt-full-screen-popup').classList.add('active');
}

export function closeLotusTraitCard() {
    const popup = document.getElementById('lt-full-screen-popup');
    if (popup) popup.classList.remove('active');
}

export function closeAllPopups() {
    document.querySelectorAll('.trait-popup').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.lt-small-popup').forEach(p => p.classList.remove('active'));
}

// --- 植物表格 (Plant Table) ---
export function revealMeaning(index) {
    const cell = document.getElementById('meaning-' + index);
    if (cell) cell.classList.add('visible');
}

// --- 總結演示 (Flower Demo Page 35) ---
export function handleFlowerStageClick(e) {
    if (e.target.closest('.flower-card') || e.target.closest('.meaning-reveal-box')) return;
    if (flowerStep < 3) {
        flowerStep++;
        updateFlowerUI();
    }
}

export function updateFlowerUI() {
    for (let i = 0; i < 3; i++) {
        const card = document.getElementById(`flower-card-${i}`);
        if (card) {
            if (flowerStep > i) {
                card.classList.remove('flower-card-hidden');
                card.classList.add('flower-card-visible');
            } else {
                card.classList.add('flower-card-hidden');
                card.classList.remove('flower-card-visible');
            }
        }
    }
    const hint = document.getElementById('flower-hint-text');
    const mainContent = document.getElementById('flower-main-content');
    if (hint && mainContent) {
        if (flowerStep >= 3) {
            hint.style.display = 'none';
            mainContent.style.cursor = 'default';
        } else {
            hint.style.display = 'flex';
            mainContent.style.cursor = 'pointer';
        }
    }
}

export function revealFlowerMeaning(event, id) {
    event.stopPropagation();
    const box = document.getElementById(`flower-meaning-box-${id}`);
    const hiddenContent = document.getElementById(`flower-content-hidden-${id}`);
    const revealedContent = document.getElementById(`flower-content-revealed-${id}`);
    if (box && hiddenContent && revealedContent) {
        box.classList.add('revealed');
        box.classList.remove('hover:bg-opacity-80');
        hiddenContent.style.display = 'none';
        revealedContent.style.display = 'block';
        revealedContent.classList.add('animate-fadeIn');
    }
}

export function openFlowerModal(event, quote, meaning, colorClass) {
    event.stopPropagation();
    const modal = document.getElementById('flower-fullscreen-modal');
    const mQuote = document.getElementById('flower-modal-quote');
    const mMeaning = document.getElementById('flower-modal-meaning');
    if (modal && mQuote && mMeaning) {
        mQuote.innerText = quote;
        mMeaning.innerText = meaning;
        mMeaning.className = `text-3xl md:text-6xl font-bold font-serif-tc leading-relaxed tracking-wide drop-shadow-lg ${colorClass}`;
        modal.classList.add('active');
    }
}

export function closeFlowerModal() {
    const modal = document.getElementById('flower-fullscreen-modal');
    if (modal) modal.classList.remove('active');
}

export function restartFlowerDemo(event) {
    if (event) event.stopPropagation();
    flowerStep = 0;
    for (let i = 0; i < 3; i++) {
        const box = document.getElementById(`flower-meaning-box-${i}`);
        const hiddenContent = document.getElementById(`flower-content-hidden-${i}`);
        const revealedContent = document.getElementById(`flower-content-revealed-${i}`);
        if (box) {
            box.classList.remove('revealed');
            hiddenContent.style.display = 'block';
            revealedContent.style.display = 'none';
        }
    }
    updateFlowerUI();
}

// --- 鑑賞分析劃記 (Analysis Highlight) ---
export function handleAnalysisHighlight(e) {
    if (e && e.target && e.target.closest('.clickable-title')) return;
    const highlights = document.querySelectorAll('.highlight-anim:not(.active)');
    if (highlights.length > 0) {
        highlights[0].classList.add('active');
        const hint = document.getElementById('analysis-hint');
        if (hint) {
            if (highlights.length === 1) hint.style.display = 'none';
        }
    }
}

export function showAnalysisDetail(title, encodedContent) {
    const modal = document.getElementById('fullscreen-modal');
    const contentArea = document.getElementById('modal-content-area');
    const contentHTML = decodeURIComponent(encodedContent);
    let html = `
        <div class="modal-title">${title}</div>
        <div class="modal-content-box" style="max-height: 70vh; overflow-y: auto;">
            <div class="modal-text" style="font-size: 3rem; line-height: 1.8;">
                ${contentHTML}
            </div>
        </div>
    `;
    contentArea.innerHTML = html;
    modal.classList.add('open');
}

// --- 手風琴功能 ---
export function toggleAccordion(element) {
    element.classList.toggle('active');
    var panel = element.nextElementSibling;
    if (panel.classList.contains('active')) {
        panel.classList.remove('active');
    } else {
        panel.classList.add('active');
    }
}

// --- 分析 Modal (SVG) ---
export function openAnalysisModal(data) {
    const modal = document.getElementById('fullscreen-modal');
    const contentArea = document.getElementById('modal-content-area');
    const chars = data.analysis.chars;
    const charWidth = 60;
    const startX = 20;
    const svgWidth = startX + (chars.length * charWidth) + 40;
    const svgHeight = 220;

    let svgHtml = `<svg width="100%" viewBox="0 0 ${svgWidth} ${svgHeight}" style="font-family: 'Noto Serif TC', serif; background-color: #fefce8; border-radius: 8px; box-shadow: inset 0 0 10px rgba(0,0,0,0.05);">`;
    svgHtml += `<g font-size="40" font-weight="bold" fill="#2c2c2c" text-anchor="middle">`;
    chars.forEach((char, i) => {
        svgHtml += `<text x="${startX + i * charWidth + charWidth / 2}" y="80">${char}</text>`;
    });
    svgHtml += `</g>`;

    const l2 = data.analysis.structure.l2;
    const color = "#2563EB";
    l2.forEach(item => {
        const x1 = startX + item.start * charWidth + 5;
        const width = item.len * charWidth - 10;
        const x2 = x1 + width;
        const yTop = 100;
        const yBottom = 130;
        const yText = 170;
        svgHtml += `
        <g stroke="${color}" fill="${color}" stroke-width="3">
            <path d="M${x1},${yTop} L${x1},${yBottom} L${x2},${yBottom} L${x2},${yTop}" fill="none" />
            <text x="${x1 + width / 2}" y="${yText}" font-size="32" text-anchor="middle" stroke="none">${item.label}</text>
        </g>`;
    });
    svgHtml += `</svg>`;

    let html = `
        <div class="modal-title" style="margin-bottom: 30px;">${data.title}</div>
        <div class="modal-section" style="background: transparent; border: none; padding: 0;">
            <div class="modal-section-title accordion-trigger active" onclick="window.toggleAccordion(this)">句型分析</div>
            <div class="accordion-panel active" style="background-color: rgba(255, 255, 255, 0.6); border-radius: 12px; padding: 20px; border: 1px solid rgba(0, 0, 0, 0.05);">
                <div style="width: 100%; overflow-x: auto; margin-bottom: 20px;">${svgHtml}</div>
                <div style="text-align: center; font-size: 2.5rem; color: #b91c1c; font-weight: bold; margin-top: 10px;">
                    ${data.analysis.type} (主語 + 斷語)
                </div>
            </div>
        </div>
        <div class="modal-section" style="background: transparent; border: none; padding: 0; margin-top: 20px;">
            <div class="modal-section-title trans accordion-trigger active" onclick="window.toggleAccordion(this)">文意解析</div>
            <div class="accordion-panel active" style="background-color: rgba(255, 255, 255, 0.6); border-radius: 12px; padding: 20px; border: 1px solid rgba(0, 0, 0, 0.05);">
                <div class="modal-content-text">
                    <ul style="list-style-type: disc; padding-left: 50px; margin-top: 10px;">
                        ${data.analysis.meaning.map(m => `<li class="text-magnified" style="margin-bottom: 25px;">${m}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
    contentArea.innerHTML = html;
    modal.classList.add('open');
}

// ==========================================
// 5. 測驗與練習相關功能 (Quiz, Flip Cards, Dict)
// ==========================================

// --- 文意/閱讀測驗 (General Quiz) ---
export function toggleExamAnswer(index) {
    const slot = document.getElementById(`ans-slot-${index}`);
    if (slot) {
        slot.classList.toggle('visible');
    }
}

export function toggleExamOption(element) {
    if (element.classList.contains('has-explanation')) {
        element.classList.toggle('expanded');
    }
}

export function resetExam() {
    const slots = document.querySelectorAll('.exam-answer-slot');
    slots.forEach(slot => slot.classList.remove('visible'));
    const opts = document.querySelectorAll('.exam-option-item');
    opts.forEach(opt => opt.classList.remove('expanded'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- 翻牌遊戲 (Flip Cards) ---
export function toggleFlipCard(element) {
    element.classList.toggle('revealed');
}

export function resetFlipCards() {
    const cards = document.querySelectorAll('.flip-card');
    cards.forEach(card => card.classList.remove('revealed'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- 賓語提前 (Grammar) ---
export function toggleGrammarAnswer(el) {
    if (!el.classList.contains('revealed')) {
        el.classList.add('revealed');
        el.textContent = el.dataset.ans;
    }
}

export function revealGrammarAll() {
    const blanks = document.querySelectorAll('.blank-space');
    blanks.forEach(el => {
        if (!el.classList.contains('revealed')) {
            el.classList.add('revealed');
            el.textContent = el.dataset.ans;
        }
    });
}

export function resetGrammar() {
    const blanks = document.querySelectorAll('.blank-space');
    blanks.forEach(el => {
        el.classList.remove('revealed');
        el.textContent = '（　　　）';
    });
}

// --- 查音辨義 (Dictionary) ---
export function renderDictTab(tabId) {
    const container = document.getElementById('dict-content-inner');
    if (!container) return;

    document.querySelectorAll('.tab-btn').forEach((btn, idx) => {
        if ((idx + 1) === tabId) btn.classList.add('active');
        else btn.classList.remove('active');
    });

    const groupData = dictData[tabId];
    let charsHtml = '';
    groupData.chars.forEach(char => {
        charsHtml += `
        <tr>
            <td class="col-char">${char.shape}</td>
            <td class="col-sound" onclick="window.toggleDictSound(this)">
                <span class="sound-mask">${char.sound}</span>
            </td>
            <td class="col-def">${char.def}</td>
        </tr>`;
    });

    let sentHtml = '';
    groupData.sentences.forEach((sent, index) => {
        const interactiveBlank = `<span class="dict-blank" onclick="window.toggleDictBlank(this)" data-ans="${sent.ans}">（　　）</span>`;
        const processedSent = sent.full.replace('%s', interactiveBlank);
        sentHtml += `
        <div class="dict-sentence-item">
            <span class="seq-num">${index + 1}</span>
            <div style="flex:1;">${processedSent}</div>
        </div>`;
    });

    const html = `
    <div class="dict-grid">
        <div class="flex flex-col">
            <div style="background-color: #44403c; color: white; padding: 15px; border-radius: 8px 8px 0 0; display: flex; align-items: center;">
                <span style="background-color: #f59e0b; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; justify-content: center; align-items: center; margin-right: 15px; font-weight: bold; font-size: 1.5rem; border: 2px solid white;">${tabId}</span>
                <h3 style="font-size: 2rem; font-weight: bold; font-family: 'Noto Sans TC'; margin:0;">字形辨析表</h3>
            </div>
            <table class="dict-table">
                <thead><tr><th>字形</th><th>字音 (點擊)</th><th>字義</th></tr></thead>
                <tbody>${charsHtml}</tbody>
            </table>
        </div>
        <div class="flex flex-col h-full">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <h3 style="font-size: 2rem; font-weight: bold; color: #44403c; font-family: 'Noto Sans TC'; margin:0;">
                    <span style="color: #d97706; margin-right: 10px;">✍️</span>例句練習
                </h3>
                <button onclick="window.revealDictAll()" style="font-size: 1.2rem; background-color: #fef3c7; color: #92400e; border: 1px solid #fcd34d; padding: 8px 20px; border-radius: 50px; font-weight: bold; cursor: pointer;">顯示本組答案</button>
            </div>
            <div class="dict-sentence-box">
                <p style="color: #78716c; margin-bottom: 20px; text-align: center; font-size: 1.4rem; background: rgba(255,255,255,0.5); padding: 8px; border-radius: 8px;">👇 點擊括號即可查看答案</p>
                ${sentHtml}
            </div>
        </div>
    </div>`;
    container.innerHTML = html;
}

export function toggleDictSound(cell) {
    const mask = cell.querySelector('.sound-mask');
    if (mask && !mask.classList.contains('revealed')) {
        mask.classList.add('revealed');
    }
}

export function toggleDictBlank(el) {
    if (!el.classList.contains('revealed')) {
        el.classList.add('revealed');
        el.innerHTML = el.dataset.ans;
    }
}

export function revealDictAll() {
    document.querySelectorAll('.dict-blank').forEach(el => {
        if (!el.classList.contains('revealed')) {
            el.classList.add('revealed');
            el.innerHTML = el.dataset.ans;
        }
    });
    document.querySelectorAll('.sound-mask').forEach(el => {
        if (!el.classList.contains('revealed')) {
            el.classList.add('revealed');
        }
    });
}

// --- 植物象徵測驗 (Symbol Quiz) ---
export function toggleSymbolBlank(el) {
    if (!el.classList.contains('revealed')) {
        el.classList.add('revealed');
        el.textContent = el.dataset.ans;
    }
}

export function revealSymbolAll() {
    document.querySelectorAll('.symbol-blank').forEach(el => {
        if (!el.classList.contains('revealed')) {
            el.classList.add('revealed');
            el.textContent = el.dataset.ans;
        }
    });
}

export function resetSymbolQuiz() {
    document.querySelectorAll('.symbol-blank').forEach(el => {
        el.classList.remove('revealed');
        el.textContent = '（　　）';
    });
}

// --- 閱讀挑戰 (Reading Challenge) ---
export function toggleChallengeAnswer(index) {
    const slot = document.getElementById(`rc-ans-slot-${index}`);
    if (slot) {
        slot.classList.toggle('visible');
    }
}

export function resetChallenge() {
    document.querySelectorAll('.rc-answer-slot').forEach(el => el.classList.remove('visible'));
    document.querySelectorAll('.rc-option-item').forEach(el => el.classList.remove('expanded'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 6. 掛載至 Window (相容性層)
// ==========================================
// 為了讓 Renderers 生成的 HTML string (例如 onclick="window.func()") 能正常運作，
// 我們必須將這些函數掛載到全域 window 物件上。

window.openModal = openModal;
window.closeModal = closeModal;
window.openFullscreenImage = openFullscreenImage;
window.closeFullscreenImage = closeFullscreenImage;
window.toggleBubble = toggleBubble;
window.handleLotusClick = handleLotusClick;
window.handleCompareClick = handleCompareClick;
window.showAnalysisCard = showAnalysisCard;
window.closeAnalysisCard = closeAnalysisCard;
window.toggleLotusTraitLabel = toggleLotusTraitLabel;
window.showLotusTraitCard = showLotusTraitCard;
window.closeLotusTraitCard = closeLotusTraitCard;
window.closeAllPopups = closeAllPopups;
window.revealMeaning = revealMeaning;
window.handleFlowerStageClick = handleFlowerStageClick;
window.revealFlowerMeaning = revealFlowerMeaning;
window.openFlowerModal = openFlowerModal;
window.closeFlowerModal = closeFlowerModal;
window.restartFlowerDemo = restartFlowerDemo;
window.handleAnalysisHighlight = handleAnalysisHighlight;
window.showAnalysisDetail = showAnalysisDetail;
window.toggleAccordion = toggleAccordion;
window.openAnalysisModal = openAnalysisModal;
window.toggleExamAnswer = toggleExamAnswer;
window.toggleExamOption = toggleExamOption;
window.resetExam = resetExam;
window.toggleFlipCard = toggleFlipCard;
window.resetFlipCards = resetFlipCards;
window.toggleGrammarAnswer = toggleGrammarAnswer;
window.revealGrammarAll = revealGrammarAll;
window.resetGrammar = resetGrammar;
window.renderDictTab = renderDictTab;
window.toggleDictSound = toggleDictSound;
window.toggleDictBlank = toggleDictBlank;
window.revealDictAll = revealDictAll;
window.toggleSymbolBlank = toggleSymbolBlank;
window.revealSymbolAll = revealSymbolAll;
window.resetSymbolQuiz = resetSymbolQuiz;
window.toggleChallengeAnswer = toggleChallengeAnswer;
window.resetChallenge = resetChallenge;