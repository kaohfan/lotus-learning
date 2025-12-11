// js/renderers.js

// 輔助函式：取得主容器 (用於設定背景圖)
function getMainContainer() {
    return document.getElementById('main-container');
}

// 輔助函式：閱讀測驗用的花朵 SVG (原本在全域，現在移入此模組供內部使用)
function getFlowerSVG(type) {
    if (type === 'cherry') {
        return `
        <svg viewBox="0 0 200 200" width="100%" height="200" class="mx-auto">
            <path d="M20,180 Q100,120 180,80" stroke="#8d6e63" stroke-width="8" fill="none" />
            <g stroke="#65a30d" stroke-width="3">
                <line x1="80" y1="130" x2="60" y2="90" />
                <line x1="80" y1="130" x2="80" y2="80" />
                <line x1="80" y1="130" x2="100" y2="90" />
            </g>
            <g transform="translate(60, 90)" fill="#fbcfe8" stroke="#f472b6" stroke-width="2">
                <path d="M0,0 C-10,-10 -5,-20 0,-15 C5,-20 10,-10 0,0" transform="rotate(0) translate(0,-15)" />
                <path d="M0,0 C-10,-10 -5,-20 0,-15 C5,-20 10,-10 0,0" transform="rotate(72) translate(0,-15)" />
                <path d="M0,0 C-10,-10 -5,-20 0,-15 C5,-20 10,-10 0,0" transform="rotate(144) translate(0,-15)" />
                <path d="M0,0 C-10,-10 -5,-20 0,-15 C5,-20 10,-10 0,0" transform="rotate(216) translate(0,-15)" />
                <path d="M0,0 C-10,-10 -5,-20 0,-15 C5,-20 10,-10 0,0" transform="rotate(288) translate(0,-15)" />
                <circle cx="0" cy="0" r="3" fill="#be185d" stroke="none"/>
            </g>
            <g transform="translate(80, 80) scale(0.9)" fill="#fbcfe8" stroke="#f472b6" stroke-width="2">
                 <path d="M0,0 C-10,-10 -5,-20 0,-15 C5,-20 10,-10 0,0" transform="rotate(0) translate(0,-15)" />
                 <path d="M0,0 C-10,-10 -5,-20 0,-15 C5,-20 10,-10 0,0" transform="rotate(72) translate(0,-15)" />
                 <path d="M0,0 C-10,-10 -5,-20 0,-15 C5,-20 10,-10 0,0" transform="rotate(144) translate(0,-15)" />
                 <path d="M0,0 C-10,-10 -5,-20 0,-15 C5,-20 10,-10 0,0" transform="rotate(216) translate(0,-15)" />
                 <path d="M0,0 C-10,-10 -5,-20 0,-15 C5,-20 10,-10 0,0" transform="rotate(288) translate(0,-15)" />
                 <circle cx="0" cy="0" r="3" fill="#be185d" stroke="none"/>
            </g>
             <g transform="translate(100, 90) scale(0.8)" fill="#fbcfe8" stroke="#f472b6" stroke-width="2">
                 <path d="M0,0 C-10,-10 -5,-20 0,-15 C5,-20 10,-10 0,0" transform="rotate(0) translate(0,-15)" />
                 <path d="M0,0 C-10,-10 -5,-20 0,-15 C5,-20 10,-10 0,0" transform="rotate(72) translate(0,-15)" />
                 <path d="M0,0 C-10,-10 -5,-20 0,-15 C5,-20 10,-10 0,0" transform="rotate(144) translate(0,-15)" />
                 <path d="M0,0 C-10,-10 -5,-20 0,-15 C5,-20 10,-10 0,0" transform="rotate(216) translate(0,-15)" />
                 <path d="M0,0 C-10,-10 -5,-20 0,-15 C5,-20 10,-10 0,0" transform="rotate(288) translate(0,-15)" />
                 <circle cx="0" cy="0" r="3" fill="#be185d" stroke="none"/>
            </g>
            <text x="100" y="190" text-anchor="middle" fill="#57534e" font-size="20">櫻花(長梗)</text>
        </svg>`;
    } else {
        return `
        <svg viewBox="0 0 200 200" width="100%" height="200" class="mx-auto">
            <path d="M20,180 Q100,120 180,60" stroke="#5d4037" stroke-width="8" fill="none" />
            <path d="M80,135 L100,110" stroke="#5d4037" stroke-width="4" fill="none" />
            <g transform="translate(80, 135)" fill="#fda4af" stroke="#e11d48" stroke-width="2">
                <circle cx="0" cy="-12" r="8" transform="rotate(0)" />
                <circle cx="0" cy="-12" r="8" transform="rotate(72)" />
                <circle cx="0" cy="-12" r="8" transform="rotate(144)" />
                <circle cx="0" cy="-12" r="8" transform="rotate(216)" />
                <circle cx="0" cy="-12" r="8" transform="rotate(288)" />
                <circle cx="0" cy="0" r="4" fill="#fbbf24" stroke="none"/>
            </g>
            <g transform="translate(140, 80) scale(0.9)" fill="#fda4af" stroke="#e11d48" stroke-width="2">
                <circle cx="0" cy="-12" r="8" transform="rotate(0)" />
                <circle cx="0" cy="-12" r="8" transform="rotate(72)" />
                <circle cx="0" cy="-12" r="8" transform="rotate(144)" />
                <circle cx="0" cy="-12" r="8" transform="rotate(216)" />
                <circle cx="0" cy="-12" r="8" transform="rotate(288)" />
                <circle cx="0" cy="0" r="4" fill="#fbbf24" stroke="none"/>
            </g>
             <g transform="translate(40, 160) scale(0.8)" fill="#fda4af" stroke="#e11d48" stroke-width="2">
                <circle cx="0" cy="-12" r="8" transform="rotate(0)" />
                <circle cx="0" cy="-12" r="8" transform="rotate(72)" />
                <circle cx="0" cy="-12" r="8" transform="rotate(144)" />
                <circle cx="0" cy="-12" r="8" transform="rotate(216)" />
                <circle cx="0" cy="-12" r="8" transform="rotate(288)" />
                <circle cx="0" cy="0" r="4" fill="#fbbf24" stroke="none"/>
            </g>
            <text x="100" y="190" text-anchor="middle" fill="#57534e" font-size="20">梅花(短梗)</text>
        </svg>`;
    }
}

// --------------------------------------------------------
// 以下為個別頁面類型的渲染函式
// --------------------------------------------------------

export function renderFullImageIntro(data, container) {
    const coverContainer = document.createElement('div');
    coverContainer.className = 'cover-container';
    coverContainer.dataset.action = 'start'; // 供 main.js 事件委派使用
    // 注意：原本的 onclick 已移除，改用 main.js 統一處理
    coverContainer.innerHTML = '<img src="' + data.imageSrc + '" class="cover-image"><div class="cover-title-wrapper"><div class="cover-title">' + data.titleText + '</div><div class="click-hint-text">點擊任意處開始</div></div>';
    container.appendChild(coverContainer);
    return coverContainer;
}

export function renderCardImageBg(data, container) {
    const mainContainer = getMainContainer();
    mainContainer.style.backgroundImage = "url('" + data.imageSrc + "')";

    const tag = document.createElement('div');
    tag.className = 'tag symbol';
    tag.innerText = '植物象徵';

    const mainText = document.createElement('div');
    mainText.className = 'main-text glass-card-text';
    mainText.innerHTML = data.text;
    if (data.details) {
        mainText.dataset.action = 'openModal';
        if (data.details.content) {
            mainText.innerHTML += '<div style="margin-top: 20px; border-top: 1px dashed #ccc; padding-top: 20px;">' + data.details.content + '</div>';
        }
    }

    const hint = document.createElement('div');
    hint.innerText = "點擊卡片查看詳細說明";
    hint.style.color = "rgba(255,255,255,0.9)";
    hint.style.textShadow = "0 1px 2px rgba(0,0,0,0.5)";
    hint.style.marginTop = "15px";
    hint.style.fontSize = "1.2rem";
    hint.style.fontFamily = "'Noto Sans TC', sans-serif";

    const group = document.createElement('div');
    group.className = 'sentence-group';
    group.style.alignItems = 'center';

    group.appendChild(tag);
    group.appendChild(mainText);
    group.appendChild(hint);

    container.appendChild(group);
}

export function renderCharDifferentiation(data, container) {
    // 1. 頂部導覽列
    const topBar = document.createElement('div');
    topBar.style.width = '100%';
    topBar.style.display = 'flex';
    topBar.style.justifyContent = 'space-between';
    topBar.style.alignItems = 'center';
    topBar.style.marginBottom = '20px';

    const tag = document.createElement('div');
    tag.className = 'tag knowledge';
    tag.innerText = data.title;

    // 分頁按鈕容器
    const tabsContainer = document.createElement('div');
    tabsContainer.style.display = 'flex';
    tabsContainer.style.borderBottom = '4px solid #d6d3d1';
    tabsContainer.style.width = '100%';
    tabsContainer.style.marginTop = '10px';
    tabsContainer.style.marginBottom = '20px';

    // 這裡我們保留 window.renderDictTab 的調用，因為 tab 切換邏輯較複雜，通常在 utils.js 或 window 全域
    tabsContainer.innerHTML = `
        <button class="tab-btn active" onclick="window.renderDictTab(1)">第一組：濯、擢、躍、耀</button>
        <button class="tab-btn" onclick="window.renderDictTab(2)">第二組：妖、夭、沃</button>
        <button class="tab-btn" onclick="window.renderDictTab(3)">第三組：蔓、漫、慢</button>
    `;

    topBar.appendChild(tag);

    // 2. 主內容容器
    const mainWrapper = document.createElement('div');
    mainWrapper.className = 'dict-page-container';

    // 標題區域
    const titleDiv = document.createElement('div');
    titleDiv.className = 'content-page-title';
    titleDiv.innerText = data.title;
    titleDiv.style.borderBottom = 'none';
    titleDiv.style.marginBottom = '0';

    // 內容變換區
    const contentInner = document.createElement('div');
    contentInner.id = 'dict-content-inner';
    contentInner.style.width = '100%';

    mainWrapper.appendChild(titleDiv);
    mainWrapper.appendChild(tabsContainer);
    mainWrapper.appendChild(contentInner);

    const group = document.createElement('div');
    group.className = 'sentence-group';
    group.style.alignItems = 'center';
    group.style.width = '100%';

    group.appendChild(topBar);
    group.appendChild(mainWrapper);

    container.appendChild(group);

    // 延遲渲染第一頁內容
    setTimeout(() => {
        if (window.renderDictTab) window.renderDictTab(1);
    }, 50);
}

export function renderPlantSymbolQuiz(data, container) {
    // 1. 頂部工具列
    const topBar = document.createElement('div');
    topBar.style.width = '100%';
    topBar.style.display = 'flex';
    topBar.style.justifyContent = 'space-between';
    topBar.style.alignItems = 'center';
    topBar.style.marginBottom = '20px';

    const tag = document.createElement('div');
    tag.className = 'tag knowledge';
    tag.innerText = data.title;

    // 按鈕組
    const btnGroup = document.createElement('div');
    btnGroup.style.display = 'flex';
    btnGroup.style.gap = '10px';

    const revealBtn = document.createElement('button');
    revealBtn.innerText = '顯示答案';
    revealBtn.onclick = window.revealSymbolAll; // 假設 utils.js 已掛載
    revealBtn.style.backgroundColor = '#d97706';

    const resetBtn = document.createElement('button');
    resetBtn.innerHTML = '重新練習';
    resetBtn.style.backgroundColor = '#57534e';
    resetBtn.style.color = '#ffffff';

    // 重置按鈕邏輯
    resetBtn.onclick = window.resetSymbolQuiz;

    btnGroup.appendChild(revealBtn);
    btnGroup.appendChild(resetBtn);

    topBar.appendChild(tag);
    topBar.appendChild(btnGroup);

    // 2. 主容器
    const mainWrapper = document.createElement('div');
    mainWrapper.className = 'symbol-page-container';

    // 說明文字
    const descP = document.createElement('p');
    descP.innerText = "請判斷下列植物常見的象徵意義，將最適當的選項代號填入空格中。";
    descP.style.fontSize = "1.5rem";
    descP.style.color = "#57534e";
    descP.style.fontWeight = "500";
    descP.style.marginBottom = "20px";
    descP.style.textAlign = "center";
    mainWrapper.appendChild(descP);

    // 選項區
    const optionsBox = document.createElement('div');
    optionsBox.className = 'symbol-options-box';
    let optsHtml = '<div style="display:flex; flex-wrap:wrap; justify-content:center;">';
    data.options.forEach(opt => {
        optsHtml += `<div class="symbol-option-item"><span class="symbol-option-code">${opt.code}</span> ${opt.text}</div>`;
    });
    optsHtml += '</div>';
    optionsBox.innerHTML = optsHtml;
    mainWrapper.appendChild(optionsBox);

    // 例題區
    const exRow = document.createElement('div');
    exRow.className = 'symbol-example-row';
    exRow.innerHTML = `
        <img src="${data.example.img}" class="symbol-plant-img" alt="松柏">
        <div style="flex:1; display:flex; align-items:center; justify-content:center; flex-wrap:wrap; gap:15px;">
            <span style="background-color:#78716c; color:white; font-size:1.2rem; px:10px; py:4px; border-radius:4px; padding: 4px 10px;">例</span>
            <span style="font-weight:bold;">${data.example.text}</span>
            <span style="color:#78716c; font-weight:bold; font-size:3rem;">${data.example.ans}</span>
        </div>
    `;
    mainWrapper.appendChild(exRow);

    // 題目網格
    const quizGrid = document.createElement('div');
    quizGrid.className = 'symbol-quiz-grid';

    data.questions.forEach((q, idx) => {
        const card = document.createElement('div');
        card.className = 'symbol-question-card';
        card.innerHTML = `
            <img src="${q.img}" class="symbol-plant-img" alt="${q.plant}">
            <div class="symbol-question-text">
                ${idx + 1}. ${q.plant}　象徵
                <span class="symbol-blank" onclick="window.toggleSymbolBlank(this)" data-ans="${q.ans}">（　　）</span>
            </div>
        `;
        quizGrid.appendChild(card);
    });
    mainWrapper.appendChild(quizGrid);

    const group = document.createElement('div');
    group.className = 'sentence-group';
    group.style.alignItems = 'center';
    group.style.width = '100%';

    group.appendChild(topBar);
    group.appendChild(mainWrapper);

    container.appendChild(group);
}

// js/renderers.js

// ... (前面的程式碼) ...

export function renderPoemReading(data, container) {
    // 1. 頂部工具列
    const topBar = document.createElement('div');
    topBar.style.width = '100%';
    topBar.style.display = 'flex';
    topBar.style.justifyContent = 'space-between';
    topBar.style.alignItems = 'center';
    topBar.style.marginBottom = '20px';

    const tag = document.createElement('div');
    tag.className = 'tag video'; // 使用藍色標籤
    tag.innerText = data.title;

    const resetBtn = document.createElement('button');
    resetBtn.innerHTML = '重新測驗';
    resetBtn.onclick = window.resetExam;
    resetBtn.style.backgroundColor = '#57534e';
    resetBtn.style.color = '#ffffff';

    topBar.appendChild(tag);
    topBar.appendChild(resetBtn);

    // 2. 主內容容器 (套用 article-container 樣式)
    const mainWrapper = document.createElement('div');
    mainWrapper.className = 'article-container w-full max-w-5xl mx-auto bg-white border-2 border-stone-200 rounded-2xl p-10 shadow-sm';

    // 說明標籤
    const introHtml = `
        <div class="text-center mb-4">
            <span class="bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-lg font-bold font-sans">說明</span>
            <span class="text-xl text-stone-600 ml-2 font-serif-tc">讀完詩作後，將最適當的答案填入（　）中。</span>
        </div>
    `;

    // 詩詞展示區 (包含標題、內容、背景圖處理)
    const poemSectionHtml = `
        <div class="border-b-2 border-stone-200 mb-8 pb-4">
            <h3 class="text-3xl font-bold text-center text-stone-800 mb-6 font-serif-tc">${data.poemTitle}</h3>
            
            <!-- 詩詞內容容器，相對定位以便放置背景 -->
            <div class="relative rounded-2xl overflow-hidden border border-stone-100 p-8">
                <!-- 背景圖層 -->
                <div class="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none" 
                     style="background-image: url('${data.illustration ? data.illustration.src : ''}'); filter: sepia(0.2);">
                </div>
                
                <!-- 詩詞文字 -->
                <div class="relative z-10 text-[1.8rem] leading-[2] text-stone-950 text-center font-bold font-serif-tc" 
                     style="text-shadow: 2px 2px 0px rgba(255, 255, 255, 0.9);">
                    ${data.poemContent}
                </div>
            </div>
        </div>
    `;

    // 雙欄資訊區 (注釋 + 語譯)
    const infoGridHtml = `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <!-- 注釋 -->
            <div class="bg-stone-50 p-6 rounded-xl">
                <h4 class="text-2xl font-bold text-stone-700 mb-4 border-l-4 border-stone-400 pl-3 font-sans">注釋</h4>
                <ul class="list-none space-y-2">
                    ${data.annotations.map(item => `
                        <li class="text-[1.4rem] text-stone-600 pl-[1.5em] -indent-[1.5em] font-serif-tc">${item}</li>
                    `).join('')}
                </ul>
            </div>

            <!-- 語譯 -->
            <div class="bg-amber-50 p-6 rounded-xl">
                <h4 class="text-2xl font-bold text-amber-800 mb-4 border-l-4 border-amber-400 pl-3 font-sans">語譯</h4>
                <p class="text-xl leading-loose text-stone-700 text-justify font-serif-tc">
                    ${data.translation}
                </p>
            </div>
        </div>
    `;

    // 情境圖解區塊 (如果 data 中有 illustration)
    let illustrationHtml = '';
    if (data.illustration) {
        illustrationHtml = `
            <div class="mt-8 pt-6 border-t-2 border-stone-200">
                <h4 class="text-2xl font-bold text-rose-800 mb-4 border-l-4 border-rose-400 pl-3 font-sans">詩意圖解</h4>
                <div class="w-full bg-stone-100 rounded-xl overflow-hidden shadow-md border border-stone-200 group">
                    <img src="${data.illustration.src}" 
                         alt="詩意圖解" 
                         onclick="window.openFullscreenImage(this.src)"
                         class="w-full h-auto object-cover group-hover:opacity-95 transition-opacity duration-300 cursor-zoom-in">
                    <div class="p-3 text-center bg-stone-200/50">
                        <p class="text-stone-600 font-bold text-lg font-serif-tc">${data.illustration.caption}</p>
                    </div>
                </div>
            </div>
        `;
    }

    // 組合上半部內容
    mainWrapper.innerHTML = introHtml + poemSectionHtml + infoGridHtml + illustrationHtml;

    // 測驗區域提示
    const hint = document.createElement('div');
    hint.className = 'text-center text-stone-500 text-2xl font-bold mb-8 animate-pulse mt-10';
    hint.innerText = "👇 閱讀完畢後，請回答下列問題（點擊題目看答案，點擊選項看解析）";

    // 測驗題目容器
    const quizContainer = document.createElement('div');
    quizContainer.className = 'exam-container flex flex-col gap-10 max-w-5xl mx-auto';

    const answerMap = { 'A': 0, 'B': 1, 'C': 2, 'D': 3 };

    data.quizData.forEach((q, index) => {
        const questionBlock = document.createElement('div');
        questionBlock.className = 'bg-white/90 rounded-2xl p-2';

        // 題目列 (使用 exam-question-row 樣式)
        const qRow = document.createElement('div');
        qRow.className = 'exam-question-row bg-white p-8 rounded-xl shadow-sm border-2 border-stone-200 flex items-start gap-4 cursor-pointer hover:-translate-y-1 hover:shadow-md hover:border-amber-400 transition-all duration-200 text-3xl leading-relaxed text-stone-800 font-serif-tc';
        qRow.onclick = () => window.toggleExamAnswer(index);

        qRow.innerHTML = `
            <span class="font-bold text-2xl min-w-[120px] font-serif-tc whitespace-nowrap">
                （ <span id="ans-slot-${index}" class="exam-answer-slot inline-block w-12 text-center text-green-600 font-black opacity-0 transition-opacity duration-300">${q.answer}</span> ）
            </span>
            <div class="flex-1">
                <span class="font-bold text-stone-400 mr-2">${q.id}.</span>
                <span>${q.question}</span>
            </div>
        `;
        questionBlock.appendChild(qRow);

        // 選項列表
        const optionsList = document.createElement('div');
        optionsList.className = 'flex flex-col gap-4 px-4 pt-4';

        const correctIdx = answerMap[q.answer];

        q.options.forEach((opt, optIndex) => {
            const isCorrect = (optIndex === correctIdx);
            // 設定正確/錯誤的樣式 (Tailwind class)
            const expStyle = isCorrect
                ? 'text-green-800 border-l-8 border-green-400 bg-green-50'
                : 'text-red-800 border-l-8 border-red-400 bg-red-50';

            const optItem = document.createElement('div');
            optItem.className = 'exam-option-item rounded-xl transition-all duration-200 group';

            // 點擊展開解析
            optItem.onclick = function () {
                this.classList.toggle('expanded');
                const expDiv = this.querySelector('.explanation-box');
                const textSpan = this.querySelector('.option-text');

                if (this.classList.contains('expanded')) {
                    expDiv.style.display = 'block';
                    textSpan.classList.add('bg-white', 'border-amber-600', 'text-stone-900', 'font-bold', 'shadow-sm');
                    textSpan.classList.remove('bg-white/80', 'border-stone-200', 'text-stone-600');
                } else {
                    expDiv.style.display = 'none';
                    textSpan.classList.remove('bg-white', 'border-amber-600', 'text-stone-900', 'font-bold', 'shadow-sm');
                    textSpan.classList.add('bg-white/80', 'border-stone-200', 'text-stone-600');
                }
            };

            optItem.innerHTML = `
                <span class="option-text block text-[2.2rem] text-stone-600 px-6 py-4 border-2 border-stone-200 rounded-xl bg-white/80 leading-snug transition-all group-hover:bg-amber-50 group-hover:border-amber-300 group-hover:text-stone-900">
                    ${opt.text}
                </span>
                <div class="explanation-box ${expStyle} mt-3 mx-2 p-5 text-[2rem] hidden rounded-r-lg shadow-inner animate-fade-in-down leading-relaxed">
                    ${q.explanation}
                </div>
            `;
            optionsList.appendChild(optItem);
        });

        questionBlock.appendChild(optionsList);
        quizContainer.appendChild(questionBlock);
    });

    const group = document.createElement('div');
    group.className = 'sentence-group';
    group.style.alignItems = 'center';
    group.style.width = '100%';

    group.appendChild(topBar);
    group.appendChild(mainWrapper);
    group.appendChild(hint);
    group.appendChild(quizContainer);

    container.appendChild(group);
}

export function renderReadingChallenge(data, container) {
    const topBar = document.createElement('div');
    topBar.style.width = '100%';
    topBar.style.display = 'flex';
    topBar.style.justifyContent = 'space-between';
    topBar.style.alignItems = 'center';
    topBar.style.marginBottom = '20px';

    const tag = document.createElement('div');
    tag.className = 'tag knowledge';
    tag.innerText = data.title;

    const resetBtn = document.createElement('button');
    resetBtn.innerHTML = '重新挑戰';
    resetBtn.onclick = window.resetChallenge;
    resetBtn.style.backgroundColor = '#57534e';
    resetBtn.style.color = '#ffffff';

    topBar.appendChild(tag);
    topBar.appendChild(resetBtn);

    const mainWrapper = document.createElement('div');
    mainWrapper.className = 'challenge-page-container';

    const introBox = document.createElement('div');
    introBox.className = 'challenge-intro-box';
    introBox.innerHTML = `
        <div class="challenge-title">閱讀挑戰</div>
        <div class="challenge-desc">👇 閱讀下列文句，回答問題（點擊題目看答案，點擊選項看解析）</div>
    `;
    mainWrapper.appendChild(introBox);

    const quizContainer = document.createElement('div');
    quizContainer.className = 'exam-container';

    data.quizData.forEach((q, index) => {
        const questionBlock = document.createElement('div');
        questionBlock.className = 'question-block';

        const qRow = document.createElement('div');
        qRow.className = 'rc-question-row';
        qRow.onclick = () => window.toggleChallengeAnswer(index);
        qRow.innerHTML = `
            <span class="exam-bracket font-bold">（ <span id="rc-ans-slot-${index}" class="rc-answer-slot">${q.answer}</span> ）</span>
            <div style="flex: 1;">
                <span class="font-bold text-stone-400 mr-2" style="margin-right:10px;">${q.id}.</span>
                <span>${q.question}</span>
            </div>
        `;
        questionBlock.appendChild(qRow);

        const optionsList = document.createElement('div');
        optionsList.className = 'rc-options-list';

        q.options.forEach((opt) => {
            const hasExp = opt.explanation && opt.explanation.trim() !== "";
            const optItem = document.createElement('div');
            optItem.className = hasExp ? 'rc-option-item has-explanation' : 'rc-option-item';

            if (hasExp) {
                optItem.onclick = function () {
                    this.classList.toggle('expanded');
                };
            }

            let content = `<span class="rc-option-text">${opt.text}</span>`;
            if (hasExp) {
                content += `<div class="rc-option-explanation">${opt.explanation}</div>`;
            }

            optItem.innerHTML = content;
            optionsList.appendChild(optItem);
        });

        questionBlock.appendChild(optionsList);
        quizContainer.appendChild(questionBlock);
    });

    mainWrapper.appendChild(quizContainer);

    const group = document.createElement('div');
    group.className = 'sentence-group';
    group.style.alignItems = 'center';
    group.style.width = '100%';

    group.appendChild(topBar);
    group.appendChild(mainWrapper);

    container.appendChild(group);
}

export function renderInteractiveQuote(data, container) {
    const mainContainer = getMainContainer();
    mainContainer.style.backgroundImage = "url('" + data.imageSrc + "')";

    const tag = document.createElement('div');
    tag.className = 'tag symbol';
    tag.innerText = '名句賞析';

    const mainText = document.createElement('div');
    mainText.className = 'main-text glass-card-text';
    mainText.style.cursor = 'pointer';
    mainText.style.textAlign = 'center';
    mainText.style.fontSize = "5rem";
    mainText.innerHTML = data.text;

    // 使用 onclick 呼叫 window.openAnalysisModal (需確保 utils.js 有定義或掛載)
    mainText.onclick = function () { window.openAnalysisModal(data); };

    const hint = document.createElement('div');
    hint.innerText = "點擊句子查看句型與文意解析";
    hint.style.color = "rgba(255,255,255,0.9)";
    hint.style.textShadow = "0 1px 2px rgba(0,0,0,0.8)";
    hint.style.marginTop = "15px";
    hint.style.fontSize = "1.4rem";
    hint.style.fontWeight = "bold";
    hint.style.fontFamily = "'Noto Sans TC', sans-serif";
    hint.className = 'click-hint-text';
    hint.style.position = 'relative';
    hint.style.bottom = 'auto';

    const group = document.createElement('div');
    group.className = 'sentence-group';
    group.style.alignItems = 'center';
    group.style.justifyContent = 'center';
    group.style.height = '100%';

    group.appendChild(tag);
    group.appendChild(mainText);
    group.appendChild(hint);

    container.appendChild(group);
}

export function renderComparisonTable(data, container) {
    // 重置變數 (注意：此變數應由 main.js 管理，但為了保持相容性，這裡假設 window.compareStep 存在)
    if (typeof window.compareStep !== 'undefined') window.compareStep = 0;

    const mainContainer = getMainContainer();
    if (data.imageSrc) {
        mainContainer.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url('${data.imageSrc}')`;
    }

    const tag = document.createElement('div');
    tag.className = 'tag study';
    tag.innerText = '綜合比較';

    const pageTitle = document.createElement('div');
    pageTitle.className = 'content-page-title';
    pageTitle.innerText = data.title;

    const tableContainer = document.createElement('div');
    tableContainer.className = 'compare-table-container';
    tableContainer.onclick = window.handleCompareClick;

    let tableHtml = '<table class="compare-table"><thead><tr>';
    data.headers.forEach(h => {
        tableHtml += `<th>${h}</th>`;
    });
    tableHtml += '</tr></thead><tbody>';

    data.rows.forEach((row, rowIndex) => {
        tableHtml += '<tr>';
        row.forEach(cellText => {
            tableHtml += `<td><span class="fade-content row-content-${rowIndex}">${cellText}</span></td>`;
        });
        tableHtml += '</tr>';
    });
    tableHtml += '</tbody></table>';

    tableHtml += '<div id="compare-hint" class="click-hint-overlay">點擊表格顯示下一列資訊</div>';

    tableContainer.innerHTML = tableHtml;

    const group = document.createElement('div');
    group.className = 'sentence-group';
    group.style.alignItems = 'center';

    group.appendChild(tag);
    group.appendChild(pageTitle);
    group.appendChild(tableContainer);

    container.appendChild(group);
}

export function renderThreeFlowersCards(data, container) {
    const mainContainer = getMainContainer();
    mainContainer.className = '';
    mainContainer.classList.add('paper-texture-bg');
    mainContainer.style.backgroundImage = "";

    if (typeof window.flowerStep !== 'undefined') window.flowerStep = 0;

    const topBar = document.createElement('div');
    topBar.style.width = '100%';
    topBar.style.display = 'flex';
    topBar.style.justifyContent = 'space-between';
    topBar.style.alignItems = 'center';
    topBar.style.marginBottom = '20px';

    const tag = document.createElement('div');
    tag.className = 'tag study';
    tag.innerText = '總結演示';

    const restartBtn = document.createElement('button');
    restartBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 12"/><path d="M3 3v9h9"/></svg> 重新開始';
    restartBtn.onclick = window.restartFlowerDemo;
    restartBtn.style.backgroundColor = "#292524";

    topBar.appendChild(tag);
    topBar.appendChild(restartBtn);

    const stage = document.createElement('div');
    stage.id = 'flower-main-content';
    stage.className = 'w-full flex flex-col md:flex-row gap-4 md:gap-8 h-full items-center justify-center';
    stage.style.minHeight = '60vh';
    stage.style.cursor = 'pointer';
    stage.onclick = window.handleFlowerStageClick;

    const cardsInfo = [
        {
            id: 0,
            title: '菊',
            quote1: '菊之愛，', quote2: '陶後鮮有聞。',
            meaningTitle: '菊之含義',
            meaning: '感嘆抱持節操、隱居避世的人很少',
            color: 'text-amber-400',
            bg: 'bg-amber-500',
            hoverBg: 'hover:bg-amber-600',
            img: 'https://class.kh.edu.tw/sites/4609/upload_file/30/10.png',
            textColor: 'text-amber-900'
        },
        {
            id: 1,
            title: '蓮',
            quote1: '蓮之愛，', quote2: '同予者何人？',
            meaningTitle: '蓮之含義',
            meaning: '暗示具有道德理想的人更少',
            color: 'text-emerald-400',
            bg: 'bg-emerald-600',
            hoverBg: 'hover:bg-emerald-700',
            img: 'https://class.kh.edu.tw/sites/4609/upload_file/30/11.png',
            textColor: 'text-emerald-900'
        },
        {
            id: 2,
            title: '牡丹',
            quote1: '牡丹之愛，', quote2: '宜乎眾矣！',
            meaningTitle: '牡丹之含義',
            meaning: '諷刺世人皆追求富貴名利',
            color: 'text-rose-400',
            bg: 'bg-rose-500',
            hoverBg: 'hover:bg-rose-600',
            img: 'https://class.kh.edu.tw/sites/4609/upload_file/30/12.png',
            textColor: 'text-rose-900'
        }
    ];

    cardsInfo.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.id = `flower-card-${card.id}`;
        cardDiv.className = `flower-card flower-card-hidden flex-1 flex flex-col items-center justify-between bg-white/40 border-2 border-stone-300 shadow-xl rounded-sm p-2 pb-6 transition-all duration-500 cursor-zoom-in group w-full max-w-[350px]`;
        cardDiv.onclick = (e) => window.openFlowerModal(e, card.quote1 + card.quote2, card.meaning, card.color);

        cardDiv.innerHTML = `
            <div class="w-full text-left py-6 md:py-8 border-b border-stone-200/50 relative">
                <div class="text-6xl md:text-7xl font-calligraphy mb-4 ${card.textColor} opacity-20 absolute top-4 left-4 select-none pointer-events-none">${card.title}</div>
                <h2 class="relative text-2xl md:text-3xl font-bold text-stone-800 leading-relaxed pl-6 pr-4 drop-shadow-sm pointer-events-none">
                    <span class="block md:inline md:mr-2">${card.quote1}</span><span class="block md:inline md:mr-2">${card.quote2}</span>
                </h2>
                <div class="absolute top-2 right-2 text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" x2="14" y1="3" y2="10"/><line x1="3" x2="10" y1="21" y2="14"/></svg>
                </div>
            </div>
            <div class="flex-1 w-full flex items-center justify-center p-4 relative pointer-events-none">
                <div class="absolute inset-4 border border-stone-400/30 m-2"></div>
                <div class="w-full h-48 md:h-64 relative overflow-hidden rounded shadow-inner bg-stone-200">
                    <img src="${card.img}" class="w-full h-full object-cover sepia-[.3] contrast-125 transition-transform duration-[10s] ease-linear group-hover:scale-110">
                    <div class="absolute inset-0 bg-stone-500/10 mix-blend-multiply"></div>
                </div>
            </div>
            <div class="w-full px-4 h-32 flex items-end justify-center">
                <div id="flower-meaning-box-${card.id}" 
                        class="meaning-reveal-box w-full h-full p-4 rounded-lg shadow-md text-white flex flex-col justify-center ${card.bg} ${card.hoverBg}"
                        onclick="window.revealFlowerMeaning(event, ${card.id})">
                    <div id="flower-content-hidden-${card.id}" class="text-center">
                        <p class="text-2xl font-bold mb-2">含義</p>
                        <div class="flex items-center justify-center gap-2 text-sm opacity-80 animate-pulse">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>
                            <span>點擊揭曉</span>
                        </div>
                    </div>
                    <div id="flower-content-revealed-${card.id}" class="hidden text-left">
                        <span class="text-xs opacity-75 mb-1 block border-b border-white/20 pb-1 w-max">${card.meaningTitle}</span>
                        <p class="text-2xl font-bold tracking-wide leading-relaxed">${card.meaning}</p>
                    </div>
                </div>
            </div>
        `;
        stage.appendChild(cardDiv);
    });

    const hintDiv = document.createElement('div');
    hintDiv.id = 'flower-hint-text';
    hintDiv.className = 'absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center gap-2 text-stone-600/70 animate-pulse-slow pointer-events-none';
    hintDiv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/><path d="M13 13l6 6"/></svg><span class="text-lg">點擊背景顯示下一張</span>';

    const modalDiv = document.createElement('div');
    modalDiv.id = 'flower-fullscreen-modal';
    modalDiv.onclick = window.closeFlowerModal;
    modalDiv.innerHTML = `
        <button class="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-50">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
        <div class="flex flex-col items-center justify-center h-full w-full max-w-5xl gap-12 p-8 text-center">
            <h2 id="flower-modal-quote" class="text-4xl md:text-6xl font-bold font-serif-tc leading-relaxed text-stone-200 drop-shadow-lg"></h2>
            <div class="w-32 h-1 bg-white/20 rounded-full"></div>
            <div class="space-y-4">
                <p class="text-lg text-stone-500 font-serif-tc">含義解析</p>
                <p id="flower-modal-meaning" class="text-3xl md:text-6xl font-bold font-serif-tc leading-relaxed tracking-wide drop-shadow-lg"></p>
            </div>
        </div>
        <p class="absolute bottom-6 text-stone-600 text-sm animate-pulse">點擊任意處關閉</p>
    `;

    container.appendChild(topBar);
    container.appendChild(stage);
    container.appendChild(hintDiv);
    container.appendChild(modalDiv);

    if (window.lucide) window.lucide.createIcons();
}

export function renderAnalysisTable(data, container) {
    if (typeof window.analysisHighlightStep !== 'undefined') window.analysisHighlightStep = 0;

    const tag = document.createElement('div');
    tag.className = 'tag study';
    tag.innerText = '鑑賞分析';

    const pageTitle = document.createElement('div');
    pageTitle.className = 'content-page-title';
    pageTitle.innerText = data.title;

    const tableContainer = document.createElement('div');
    tableContainer.className = 'plant-table-container';
    tableContainer.style.cursor = 'pointer';
    tableContainer.onclick = window.handleAnalysisHighlight;

    let tableHtml = '<table class="plant-table"><thead><tr>';
    data.headers.forEach((h, index) => {
        const width = index === 0 ? '15%' : '85%';
        tableHtml += `<th style="width: ${width};">${h}</th>`;
    });
    tableHtml += '</tr></thead><tbody>';

    data.rows.forEach(row => {
        let processedContent = row.content.replace(/<h>(.*?)<\/h>/g, '<span class="highlight-anim">$1</span>');
        let detailData = row.detailContent ? encodeURIComponent(row.detailContent) : encodeURIComponent(row.content);
        detailData = detailData.replace(/'/g, "%27");

        tableHtml += '<tr>';
        tableHtml += `
            <td style="vertical-align: top; padding-top: 30px;">
                <span class="plant-name clickable-title" 
                        style="color: #b91c1c;" 
                        onclick="event.stopPropagation(); window.showAnalysisDetail('${row.item}', '${detailData}')">
                    ${row.item}
                    <span style="display:block; font-size:1rem; color:#666; margin-top:5px;">(點擊查看詳解)</span>
                </span>
            </td>`;

        tableHtml += `<td style="text-align: left; padding: 30px; line-height: 2; font-weight: bold; text-align: justify;">${processedContent}</td>`;
        tableHtml += '</tr>';
    });
    tableHtml += '</tbody></table>';

    tableHtml += '<div id="analysis-hint" class="click-hint-overlay" style="position:relative; bottom:auto; margin-top:20px; color:#d97706;">點擊表格依序劃記重點</div>';

    tableContainer.innerHTML = tableHtml;

    const group = document.createElement('div');
    group.className = 'sentence-group';
    group.style.alignItems = 'center';

    group.appendChild(tag);
    group.appendChild(pageTitle);
    group.appendChild(tableContainer);

    container.appendChild(group);
}

export function renderThoughtQuestion(data, container) {
    const tag = document.createElement('div');
    tag.className = 'tag';
    tag.innerText = data.title;

    const questionCard = document.createElement('div');
    questionCard.className = 'main-text';
    questionCard.innerHTML = data.question;
    questionCard.onclick = function () { window.openModal(data, 'thought-answer'); };

    const hint = document.createElement('div');
    hint.innerText = "👆 點擊題目查看參考解答";
    hint.className = 'click-hint-overlay';
    hint.style.position = 'relative';
    hint.style.bottom = 'auto';
    hint.style.marginTop = '20px';
    hint.style.color = '#78716c';

    const group = document.createElement('div');
    group.className = 'sentence-group';
    group.style.alignItems = 'center';

    group.appendChild(tag);
    group.appendChild(questionCard);
    group.appendChild(hint);

    container.appendChild(group);
}

export function renderQuizPage(data, container) {
    const topBar = document.createElement('div');
    topBar.style.width = '100%';
    topBar.style.display = 'flex';
    topBar.style.justifyContent = 'space-between';
    topBar.style.alignItems = 'center';
    topBar.style.marginBottom = '20px';

    const tag = document.createElement('div');
    tag.className = 'tag knowledge';
    tag.innerText = data.title;

    const resetBtn = document.createElement('button');
    resetBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg> 重新練習';
    resetBtn.onclick = window.resetExam;
    resetBtn.style.backgroundColor = "#57534e";

    topBar.appendChild(tag);
    topBar.appendChild(resetBtn);

    const quizContainer = document.createElement('div');
    quizContainer.className = 'exam-container';

    data.quizData.forEach((item, index) => {
        const questionBlock = document.createElement('div');
        questionBlock.className = 'question-block';

        const qRow = document.createElement('div');
        qRow.className = 'exam-question-row';
        qRow.onclick = () => window.toggleExamAnswer(index);
        qRow.innerHTML = `
            <span class="exam-bracket font-bold">（ <span id="ans-slot-${index}" class="exam-answer-slot">${item.answer}</span> ）</span>
            <div style="flex: 1;">
                <span class="font-bold text-stone-400 mr-2" style="color:#a8a29e; margin-right:10px;">${item.id}.</span>
                <span>${item.question}</span>
            </div>
        `;
        questionBlock.appendChild(qRow);

        const optionsList = document.createElement('div');
        optionsList.className = 'exam-options-list';

        item.options.forEach((opt) => {
            const hasExp = opt.explanation && opt.explanation.trim() !== "";
            const optItem = document.createElement('div');
            optItem.className = hasExp ? 'exam-option-item has-explanation' : 'exam-option-item';
            if (hasExp) {
                optItem.onclick = function () { window.toggleExamOption(this); };
            }

            let innerHTML = `<span class="exam-option-text">${opt.text}</span>`;
            if (hasExp) {
                innerHTML += `<div class="exam-option-explanation">${opt.explanation}</div>`;
            }
            optItem.innerHTML = innerHTML;
            optionsList.appendChild(optItem);
        });

        questionBlock.appendChild(optionsList);
        quizContainer.appendChild(questionBlock);
    });

    const hint = document.createElement('div');
    hint.innerText = "💡 點擊題目可查看答案，點擊選項可查看解析";
    hint.style.textAlign = 'center';
    hint.style.color = '#6b7280';
    hint.style.marginTop = '20px';
    hint.style.fontSize = '1.5rem';
    hint.style.animation = 'pulse 2s infinite';

    const group = document.createElement('div');
    group.className = 'sentence-group';
    group.style.alignItems = 'center';

    group.appendChild(topBar);
    group.appendChild(hint);
    group.appendChild(quizContainer);

    container.appendChild(group);
}

export function renderFlipCardGame(data, container) {
    const topBar = document.createElement('div');
    topBar.style.width = '100%';
    topBar.style.display = 'flex';
    topBar.style.justifyContent = 'space-between';
    topBar.style.alignItems = 'center';
    topBar.style.marginBottom = '20px';

    const tag = document.createElement('div');
    tag.className = 'tag knowledge';
    tag.innerText = data.title;

    const resetBtn = document.createElement('button');
    resetBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg> 重新練習';
    resetBtn.onclick = window.resetFlipCards;
    resetBtn.style.backgroundColor = "#57534e";

    topBar.appendChild(tag);
    topBar.appendChild(resetBtn);

    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options-container';
    optionsContainer.innerHTML = `
        <h3 class="text-2xl font-bold text-stone-700 mb-4 border-b-2 border-stone-200 pb-2" style="font-family:'Noto Sans TC',sans-serif;">選項參考：</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <div class="option-item"><span class="option-label">(A)</span> 行為正直，不攀附關係</div>
            <div class="option-item"><span class="option-label">(B)</span> 品德醇美，芬芳遠播，可以影響他人</div>
            <div class="option-item"><span class="option-label">(C)</span> 品格清高，不媚世隨俗</div>
            <div class="option-item"><span class="option-label">(D)</span> 人格高潔，令人敬仰而不敢輕慢玩弄</div>
            <div class="option-item"><span class="option-label">(E)</span> 潔身自愛，不同流合汙</div>
        </div>
    `;

    const cardsGrid = document.createElement('div');
    cardsGrid.className = 'cards-grid';

    data.cards.forEach(item => {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'flip-card';
        cardDiv.onclick = function () { window.toggleFlipCard(this); };

        cardDiv.innerHTML = `
            <!-- 正面 -->
            <div class="card-category">${item.category}</div>
            <div class="card-question">${item.question}</div>
            <div class="click-hint" style="position:absolute; bottom:15px; font-size:1rem; color:#a8a29e;">點擊查看對應品德</div>

            <!-- 背面 (答案) -->
            <div class="card-answer-overlay">
                <div class="answer-code">${item.code}</div>
                <div class="answer-text">${item.answer}</div>
            </div>
        `;
        cardsGrid.appendChild(cardDiv);
    });

    const group = document.createElement('div');
    group.className = 'sentence-group';
    group.style.alignItems = 'center';

    group.appendChild(topBar);
    group.appendChild(optionsContainer);
    group.appendChild(cardsGrid);

    container.appendChild(group);
}

export function renderReadingQuiz(data, container) {
    const topBar = document.createElement('div');
    topBar.style.width = '100%';
    topBar.style.display = 'flex';
    topBar.style.justifyContent = 'space-between';
    topBar.style.alignItems = 'center';
    topBar.style.marginBottom = '20px';

    const tag = document.createElement('div');
    tag.className = 'tag knowledge';
    tag.innerText = data.title;

    const resetBtn = document.createElement('button');
    resetBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /></svg> 重新測驗';
    resetBtn.onclick = window.resetExam;
    resetBtn.style.backgroundColor = "#57534e";

    topBar.appendChild(tag);
    topBar.appendChild(resetBtn);

    const articleContainer = document.createElement('div');
    articleContainer.className = 'article-container';
    articleContainer.innerHTML = `<h3 class="text-2xl font-bold text-stone-800 mb-6 border-b-2 border-stone-200 pb-2" style="font-family:'Noto Sans TC',sans-serif;">請先閱讀文章：</h3>`;

    data.articles.forEach(art => {
        articleContainer.innerHTML += `<div class="article-paragraph">${art}</div>`;
    });

    const hint = document.createElement('div');
    hint.innerText = "👇 閱讀完畢後，請回答下列問題（點擊題目看答案，點擊選項看解析）";
    hint.style.textAlign = 'center';
    hint.style.color = '#78716c';
    hint.style.marginBottom = '2rem';
    hint.style.fontSize = '1.2rem';
    hint.style.animation = 'pulse 2s infinite';
    hint.style.fontWeight = 'bold';

    const quizContainer = document.createElement('div');
    quizContainer.className = 'exam-container';

    const answerMap = { 'A': 0, 'B': 1, 'C': 2, 'D': 3 };

    data.quizData.forEach((q, index) => {
        const questionBlock = document.createElement('div');
        questionBlock.className = 'question-block';

        let imageHtml = '';
        if (q.hasImages) {
            imageHtml = '<div style="display:flex; justify-content:center; gap:20px; margin:20px 0; flex-wrap:wrap;">';
            q.images.forEach(img => {
                // 使用內部的 getFlowerSVG
                imageHtml += `
                    <div class="flower-img-box">
                        <span style="font-size:1.5rem; font-weight:bold; color:#9a3412; margin-bottom:5px; display:block;">${img.label}</span>
                        ${getFlowerSVG(img.type)}
                    </div>
                `;
            });
            imageHtml += '</div>';
        }

        const qRow = document.createElement('div');
        qRow.className = 'exam-question-row';
        qRow.onclick = () => window.toggleExamAnswer(index);
        qRow.innerHTML = `
            <span class="exam-bracket font-bold">（ <span id="ans-slot-${index}" class="exam-answer-slot">${q.answer}</span> ）</span>
            <div style="flex: 1;">
                <span class="font-bold text-stone-500 mr-2" style="margin-right:10px;">${q.id}.</span>
                <span>${q.question}</span>
                ${imageHtml}
            </div>
        `;
        questionBlock.appendChild(qRow);

        const optionsList = document.createElement('div');
        optionsList.className = 'exam-options-list';

        const correctIdx = answerMap[q.answer];

        q.options.forEach((opt, optIndex) => {
            const isCorrect = (optIndex === correctIdx);
            const expClass = isCorrect ? 'correct' : 'wrong';
            const optItem = document.createElement('div');
            optItem.className = 'exam-option-item expanded-check';
            optItem.onclick = function () {
                if (this.classList.contains('expanded')) {
                    this.classList.remove('expanded');
                } else {
                    this.classList.add('expanded');
                }
            };

            optItem.innerHTML = `
                <span class="exam-option-text">${opt.text}</span>
                <div class="exam-option-explanation ${expClass}">${opt.explanation}</div>
            `;
            optionsList.appendChild(optItem);
        });

        questionBlock.appendChild(optionsList);
        quizContainer.appendChild(questionBlock);
    });

    const group = document.createElement('div');
    group.className = 'sentence-group';
    group.style.alignItems = 'center';

    group.appendChild(topBar);
    group.appendChild(articleContainer);
    group.appendChild(hint);
    group.appendChild(quizContainer);

    container.appendChild(group);
}

export function renderGrammarPractice(data, container) {
    const wrapper = document.createElement('div');
    wrapper.className = 'grammar-quiz-wrapper';

    // 1. 標題與按鈕
    const topBar = document.createElement('div');
    topBar.style.display = 'flex';
    topBar.style.justifyContent = 'space-between';
    topBar.style.alignItems = 'center';
    topBar.style.marginBottom = '20px';

    const tag = document.createElement('div');
    tag.className = 'tag study';
    tag.innerText = data.title;

    const revealAllBtn = document.createElement('button');
    revealAllBtn.innerText = '顯示全部答案';
    revealAllBtn.onclick = window.revealGrammarAll;
    revealAllBtn.style.backgroundColor = '#d97706';

    topBar.appendChild(tag);
    topBar.appendChild(revealAllBtn);
    wrapper.appendChild(topBar);

    // 2. 說明文字
    const introBox = document.createElement('div');
    introBox.className = 'intro-box';
    introBox.innerHTML = data.intro;
    wrapper.appendChild(introBox);

    // 3. 題目列表
    const quizList = document.createElement('div');
    quizList.className = 'quiz-container';

    data.questions.forEach((q, index) => {
        const item = document.createElement('div');
        item.className = 'quiz-item';

        let html = `
            <div class="question-text">
                ${index + 1}. ${q.text}
                <span class="answer-wrapper">
                    <span class="arrow-icon">→</span>
                    <span class="blank-space" onclick="window.toggleGrammarAnswer(this)" data-ans="${q.answer}">（　　　）</span>
                </span>
            </div>
        `;

        if (q.note) {
            html += `<span class="note-text">${q.note}</span>`;
        }

        item.innerHTML = html;
        quizList.appendChild(item);
    });

    // 重新練習按鈕
    const resetDiv = document.createElement('div');
    resetDiv.style.display = 'flex';
    resetDiv.style.justifyContent = 'center';
    resetDiv.style.marginTop = '40px';

    const resetBtn = document.createElement('button');
    resetBtn.innerText = '重新練習';
    resetBtn.onclick = window.resetGrammar;
    resetBtn.style.backgroundColor = '#57534e';
    resetBtn.style.color = '#ffffff';
    resetDiv.appendChild(resetBtn);

    quizList.appendChild(resetDiv);
    wrapper.appendChild(quizList);

    const group = document.createElement('div');
    group.className = 'sentence-group';
    group.style.alignItems = 'center';
    group.style.width = '100%';

    group.appendChild(wrapper);
    container.appendChild(group);
}

export function renderInteractiveReview(data, container) {
    container.classList.add('no-padding');
    const reviewContainer = document.createElement('div');
    reviewContainer.id = 'interactive-review-container';

    const layerBase = document.createElement('div'); layerBase.id = 'layer-base'; layerBase.className = 'bg-layer';
    layerBase.style.backgroundImage = "url('https://class.kh.edu.tw/sites/4609/upload_file/30/02.png')";
    reviewContainer.appendChild(layerBase);

    const layers = [
        { id: 'layer-1', url: 'https://class.kh.edu.tw/sites/4609/upload_file/30/02-1.png' },
        { id: 'layer-2', url: 'https://class.kh.edu.tw/sites/4609/upload_file/30/02-2.png' },
        { id: 'layer-3', url: 'https://class.kh.edu.tw/sites/4609/upload_file/30/02-3.png' },
        { id: 'layer-4', url: 'https://class.kh.edu.tw/sites/4609/upload_file/30/02-4.png' }
    ];
    layers.forEach(l => {
        const layer = document.createElement('div');
        layer.id = l.id; layer.className = 'bg-layer'; layer.style.opacity = '0';
        layer.style.backgroundImage = `url('${l.url}')`;
        reviewContainer.appendChild(layer);
    });

    const hotspots = [
        { id: 'hotspot-1', top: '10%', left: '16%', content: '總說 | 水陸草木之花，可愛者甚蕃。', initial: true },
        { id: 'hotspot-2', top: '45%', left: '85%', content: '菊 | 晉陶淵明獨愛菊', initial: false, vertical: true },
        { id: 'hotspot-3', top: '45%', left: '50%', content: '牡丹 | 自李唐來，<br>世人盛愛牡丹', initial: false, vertical: true },
        { id: 'hotspot-4', top: '45%', left: '15%', content: '蓮 | 予獨愛蓮', initial: false, vertical: true }
    ];

    const steps = {
        'hotspot-1': { layerId: 'layer-1', delay: 1500 },
        'hotspot-2': { layerId: 'layer-2', delay: 1500 },
        'hotspot-3': { layerId: 'layer-3', delay: 1500 },
        'hotspot-4': { layerId: 'layer-4', delay: 1500 }
    };

    hotspots.forEach(spot => {
        const spotDiv = document.createElement('div');
        spotDiv.id = spot.id; spotDiv.className = 'hotspot' + (spot.initial ? '' : ' hidden-initially');
        spotDiv.style.top = spot.top; spotDiv.style.left = spot.left;
        const popupDiv = document.createElement('div');
        popupDiv.id = spot.id.replace('hotspot', 'trait-popup');
        popupDiv.className = 'trait-popup' + (spot.vertical ? ' vertical-layout' : '');

        if (spot.id === 'hotspot-1') {
            popupDiv.style.top = '2.5%'; popupDiv.style.left = '52%'; popupDiv.style.transform = 'translateX(-50%)';
        } else {
            popupDiv.style.top = '53%';
            if (spot.id === 'hotspot-2') popupDiv.style.left = '69.5%';
            else if (spot.id === 'hotspot-3') popupDiv.style.left = '35%';
            else if (spot.id === 'hotspot-4') popupDiv.style.left = '6%';
        }

        const [title, text] = spot.content.split(' | ');
        popupDiv.innerHTML = `<p class="popup-title">${title}</p><p class="popup-text">${text}</p>`;

        popupDiv.onclick = (e) => {
            e.stopPropagation();
            if (spot.id === 'hotspot-3') {
                popupDiv.classList.remove('active');
                if (window.showAnalysisCard) window.showAnalysisCard();
            }
        };

        spotDiv.onclick = (e) => {
            e.stopPropagation();
            if (popupDiv.classList.contains('active')) return;
            const stepConfig = steps[spot.id];
            const layer = document.getElementById(stepConfig.layerId);
            if (layer && getComputedStyle(layer).opacity === '0') {
                layer.style.opacity = '1';
                spotDiv.style.pointerEvents = 'none';
                setTimeout(() => {
                    popupDiv.classList.add('active');
                    if (spot.id === 'hotspot-1') {
                        reviewContainer.querySelectorAll('.hidden-initially').forEach(h => {
                            h.style.opacity = '1'; h.style.pointerEvents = 'auto'; h.classList.remove('hidden-initially');
                        });
                    }
                    spotDiv.style.pointerEvents = 'auto';
                }, stepConfig.delay);
            } else {
                popupDiv.classList.add('active');
            }
        };
        reviewContainer.appendChild(spotDiv);
        reviewContainer.appendChild(popupDiv);
    });
    reviewContainer.onclick = () => { reviewContainer.querySelectorAll('.trait-popup').forEach(p => p.classList.remove('active')); };
    container.appendChild(reviewContainer);
}

export function renderInteractiveLotusTraits(data, container) {
    container.classList.add('no-padding');

    const bgDiv = document.createElement('div');
    bgDiv.style.width = '100%';
    bgDiv.style.height = '100%';
    bgDiv.style.backgroundImage = "url('https://class.kh.edu.tw/sites/4609/upload_file/30/bg2.png')";
    bgDiv.style.backgroundSize = 'cover';
    bgDiv.style.backgroundPosition = 'center';
    bgDiv.style.position = 'relative';
    bgDiv.onclick = window.closeAllPopups;

    data.hotspots.forEach((spot, idx) => {
        const spotDiv = document.createElement('div');
        spotDiv.id = 'lt-hotspot-' + idx;
        spotDiv.className = 'lt-hotspot';
        spotDiv.style.top = spot.top;
        spotDiv.style.left = spot.left;
        spotDiv.setAttribute('data-trait', spot.trait);
        spotDiv.setAttribute('data-description', spot.desc);
        spotDiv.setAttribute('data-image', spot.img);
        spotDiv.onclick = function (e) { window.toggleLotusTraitLabel(idx, e); };
        bgDiv.appendChild(spotDiv);

        const popupDiv = document.createElement('div');
        popupDiv.id = 'lt-popup-' + idx;
        popupDiv.className = 'lt-small-popup';
        popupDiv.style.top = spot.popupTop;
        popupDiv.style.left = spot.popupLeft;
        popupDiv.innerText = spot.trait;
        popupDiv.onclick = function (e) { window.showLotusTraitCard(idx, e); };

        if (spot.trait === '可遠觀而不可褻玩焉') {
            popupDiv.style.maxWidth = 'none';
            popupDiv.style.width = 'max-content';
            popupDiv.style.whiteSpace = 'nowrap';
        }

        bgDiv.appendChild(popupDiv);
    });

    container.appendChild(bgDiv);
}

export function renderChrysanthemumVideo(data, container) {
    container.classList.add('chrysanthemum-theme');

    const mumSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='%23fbbf24' d='M50 50 L50 10 Q55 25 65 30 Q55 40 50 50 Z' transform='rotate(0 50 50)'/%3E%3Cpath fill='%23f59e0b' d='M50 50 L50 10 Q45 25 35 30 Q45 40 50 50 Z' transform='rotate(0 50 50)'/%3E%3Cpath fill='%23fbbf24' d='M50 50 L50 10 Q55 25 65 30 Q55 40 50 50 Z' transform='rotate(45 50 50)'/%3E%3Cpath fill='%23f59e0b' d='M50 50 L50 10 Q45 25 35 30 Q45 40 50 50 Z' transform='rotate(45 50 50)'/%3E%3Cpath fill='%23fbbf24' d='M50 50 L50 10 Q55 25 65 30 Q55 40 50 50 Z' transform='rotate(90 50 50)'/%3E%3Cpath fill='%23f59e0b' d='M50 50 L50 10 Q45 25 35 30 Q45 40 50 50 Z' transform='rotate(90 50 50)'/%3E%3Cpath fill='%23fbbf24' d='M50 50 L50 10 Q55 25 65 30 Q55 40 50 50 Z' transform='rotate(135 50 50)'/%3E%3Cpath fill='%23f59e0b' d='M50 50 L50 10 Q45 25 35 30 Q45 40 50 50 Z' transform='rotate(135 50 50)'/%3E%3Cpath fill='%23fbbf24' d='M50 50 L50 10 Q55 25 65 30 Q55 40 50 50 Z' transform='rotate(180 50 50)'/%3E%3Cpath fill='%23f59e0b' d='M50 50 L50 10 Q45 25 35 30 Q45 40 50 50 Z' transform='rotate(180 50 50)'/%3E%3Cpath fill='%23fbbf24' d='M50 50 L50 10 Q55 25 65 30 Q55 40 50 50 Z' transform='rotate(225 50 50)'/%3E%3Cpath fill='%23f59e0b' d='M50 50 L50 10 Q45 25 35 30 Q45 40 50 50 Z' transform='rotate(225 50 50)'/%3E%3Cpath fill='%23fbbf24' d='M50 50 L50 10 Q55 25 65 30 Q55 40 50 50 Z' transform='rotate(270 50 50)'/%3E%3Cpath fill='%23f59e0b' d='M50 50 L50 10 Q45 25 35 30 Q45 40 50 50 Z' transform='rotate(270 50 50)'/%3E%3Cpath fill='%23fbbf24' d='M50 50 L50 10 Q55 25 65 30 Q55 40 50 50 Z' transform='rotate(315 50 50)'/%3E%3Cpath fill='%23f59e0b' d='M50 50 L50 10 Q45 25 35 30 Q45 40 50 50 Z' transform='rotate(315 50 50)'/%3E%3Ccircle cx='50' cy='50' r='10' fill='%23d97706' /%3E%3C/svg%3E";

    const decorTL = document.createElement('img');
    decorTL.src = mumSvg;
    decorTL.className = 'mum-decoration mum-tl';
    container.appendChild(decorTL);

    const decorBR = document.createElement('img');
    decorBR.src = mumSvg;
    decorBR.className = 'mum-decoration mum-br';
    container.appendChild(decorBR);

    const tag = document.createElement('div'); tag.className = 'tag video'; tag.innerText = '影音欣賞';
    const pageTitle = document.createElement('div'); pageTitle.className = 'content-page-title'; pageTitle.innerText = data.title;
    const videoWrapper = document.createElement('div'); videoWrapper.className = 'video-wrapper';
    videoWrapper.innerHTML = '<iframe src="' + data.videoSrc + '" allow="autoplay" allowfullscreen></iframe>';
    const videoDesc = document.createElement('div'); videoDesc.className = 'video-desc'; videoDesc.innerText = data.description;
    const group = document.createElement('div'); group.className = 'sentence-group'; group.style.alignItems = 'center';

    group.appendChild(tag);
    group.appendChild(pageTitle);
    group.appendChild(videoWrapper);
    group.appendChild(videoDesc);
    container.appendChild(group);
}

export function renderLotusGrowth(data, container) {
    if (typeof window.lotusStep !== 'undefined') window.lotusStep = 0;

    const tag = document.createElement('div'); tag.className = 'tag intro'; tag.innerText = '蓮花三態';
    const stageContainer = document.createElement('div'); stageContainer.className = 'lotus-stage-container';
    stageContainer.onclick = window.handleLotusClick;
    data.items.forEach((item, idx) => {
        stageContainer.innerHTML += '<div class="lotus-item"><img id="lotus-img-' + idx + '" src="' + item.img + '" class="lotus-img"><div id="lotus-text-' + idx + '" class="lotus-text-wrapper">' + item.text + '</div></div>';
    });
    stageContainer.innerHTML += '<div style="position:absolute; bottom:20px; color:white; text-shadow:1px 1px 3px black;">點擊畫面依序顯示：含苞 -> 初綻 -> 盛開</div>';
    const group = document.createElement('div'); group.className = 'sentence-group'; group.style.alignItems = 'center'; group.style.height = '100%';
    group.appendChild(tag); group.appendChild(stageContainer); container.appendChild(group);
}

export function renderTable(data, container) {
    const tag = document.createElement('div'); tag.className = 'tag symbol'; tag.innerText = '植物象徵';
    const pageTitle = document.createElement('div'); pageTitle.className = 'content-page-title'; pageTitle.innerText = data.title;
    const tableContainer = document.createElement('div'); tableContainer.className = 'plant-table-container';
    let tableHtml = '<table class="plant-table"><thead><tr><th style="width: 15%;">植物</th><th style="width: 25%;">象徵意義</th><th style="width: 60%;">舉例 (點擊顯示)</th></tr></thead><tbody>';
    data.rows.forEach((row, idx) => {
        tableHtml += '<tr><td><span class="plant-name">' + row.plant + '</span></td><td><span id="meaning-' + idx + '" class="meaning-cell">' + row.meaning + '</span></td><td><span class="example-btn" onclick="revealMeaning(' + idx + ')">' + row.example + '</span></td></tr>';
    });
    tableHtml += '</tbody></table>';
    tableContainer.innerHTML = tableHtml;
    const group = document.createElement('div'); group.className = 'sentence-group'; group.style.alignItems = 'center';
    group.appendChild(tag); group.appendChild(pageTitle); group.appendChild(tableContainer); container.appendChild(group);
}

export function renderVideo(data, container) {
    if (data.imageSrc) {
        const mainContainer = getMainContainer();
        mainContainer.style.backgroundImage = "url('" + data.imageSrc + "')";
        container.style.backgroundColor = "rgba(255,255,255,0.7)";
        container.style.borderRadius = "20px";
        container.style.margin = "20px";
    }
    const tag = document.createElement('div'); tag.className = 'tag video'; tag.innerText = '影音欣賞';
    const pageTitle = document.createElement('div'); pageTitle.className = 'content-page-title'; pageTitle.innerText = data.title;
    const videoWrapper = document.createElement('div'); videoWrapper.className = 'video-wrapper';
    videoWrapper.innerHTML = '<iframe src="' + data.videoSrc + '" allow="autoplay" allowfullscreen></iframe>';
    const videoDesc = document.createElement('div'); videoDesc.className = 'video-desc'; videoDesc.innerText = data.description;
    const group = document.createElement('div'); group.className = 'sentence-group'; group.style.alignItems = 'center';
    group.appendChild(tag); group.appendChild(pageTitle); group.appendChild(videoWrapper); group.appendChild(videoDesc); container.appendChild(group);
}

export function renderTextStudy(data, container) {
    const tag = document.createElement('div'); tag.className = 'tag study'; tag.innerText = '課文解讀';
    const group = document.createElement('div'); group.className = 'sentence-group'; group.style.alignItems = 'center';
    group.appendChild(tag);
    data.sentences.forEach(sentence => {
        const sentenceDiv = document.createElement('div'); sentenceDiv.className = 'main-text'; sentenceDiv.innerHTML = sentence.text;
        const modalData = { title: data.title, text: sentence.text, notes: sentence.notes, trans: sentence.trans };
        sentenceDiv.onclick = function () { window.openModal(modalData, 'text-study'); };
        group.appendChild(sentenceDiv);
    });
    const hint = document.createElement('div'); hint.innerText = "點擊句子查看詳細解析"; hint.style.color = "#666"; hint.style.marginTop = "15px"; hint.style.fontSize = "1.2rem"; hint.style.fontFamily = "'Noto Sans TC', sans-serif";
    group.appendChild(hint); container.appendChild(group);
}

export function renderClozePassage(data, container) {
    const tag = document.createElement('div'); tag.className = 'tag symbol'; tag.innerText = '植物象徵';
    const pageTitle = document.createElement('div'); pageTitle.className = 'content-page-title'; pageTitle.innerText = data.title;
    const group = document.createElement('div'); group.className = 'sentence-group'; group.style.alignItems = 'center';
    const textContainer = document.createElement('div'); textContainer.className = 'main-text'; textContainer.style.lineHeight = '2.5';

    data.content.forEach((part, idx) => {
        if (part.type === 'text') {
            textContainer.appendChild(document.createElement('span')).innerText = part.text;
        } else if (part.type === 'cloze') {
            textContainer.appendChild(document.createTextNode('（ '));
            const cloze = document.createElement('span'); cloze.className = 'cloze-item'; cloze.id = 'cloze-' + idx; cloze.innerText = part.answer;
            const bubble = document.createElement('div'); bubble.id = 'bubble-cloze-' + idx; bubble.className = 'bubble-popup text-bubble'; bubble.innerText = part.hint;
            cloze.appendChild(bubble);
            cloze.onclick = function (e) { e.stopPropagation(); if (!cloze.classList.contains('revealed')) cloze.classList.add('revealed'); window.toggleBubble('cloze-' + idx, this, e); };
            textContainer.appendChild(cloze);
            textContainer.appendChild(document.createTextNode(' ）' + (part.suffix || '')));
        } else if (part.type === 'term') {
            const term = document.createElement('span'); term.className = 'interactive-passage-term'; term.innerText = part.text; term.id = 'term-' + idx;
            const bubble = document.createElement('div'); bubble.id = 'bubble-term-' + idx; bubble.className = 'bubble-popup text-bubble'; bubble.innerText = part.hint;
            term.appendChild(bubble);
            term.onclick = function (e) { e.stopPropagation(); window.toggleBubble('term-' + idx, this, e); };
            textContainer.appendChild(term);
        }
    });
    group.appendChild(tag); group.appendChild(pageTitle); group.appendChild(textContainer); container.appendChild(group);
}

export function renderCard(data, container, currentPage) {
    const tag = document.createElement('div');
    if (currentPage >= 1 && currentPage <= 2) { tag.className = 'tag knowledge'; tag.innerText = '植物知識'; }
    else if (currentPage === 10) { tag.className = 'tag intro'; tag.innerText = '篇章導讀'; }
    else if (currentPage === 15) { tag.className = 'tag note'; tag.innerText = '閱讀注意'; }
    else if (currentPage >= 16 && currentPage <= 17) { tag.className = 'tag author'; tag.innerText = '作者介紹'; }
    else { tag.className = 'tag'; tag.innerText = '知識點'; }

    const mainText = document.createElement('div'); mainText.className = 'main-text'; mainText.innerHTML = data.text;
    if (data.id !== 2) { mainText.onclick = function () { window.openModal(data); }; } else { mainText.style.cursor = "default"; mainText.onclick = null; }
    if (data.details && data.details.content && data.id === 2) mainText.innerHTML += '<div style="margin-top: 20px; border-top: 1px dashed #ccc; padding-top: 20px;">' + data.details.content + '</div>';

    const hint = document.createElement('div'); hint.innerText = data.id === 2 ? "點擊上方綠色或藍色標題查看圖片" : "點擊卡片查看詳細說明"; hint.style.color = "#666"; hint.style.marginTop = "15px"; hint.style.fontSize = "1.2rem"; hint.style.fontFamily = "'Noto Sans TC', sans-serif";

    const group = document.createElement('div'); group.className = 'sentence-group'; group.style.alignItems = 'center';
    group.appendChild(tag); group.appendChild(mainText); group.appendChild(hint);

    if (currentPage >= 7 && currentPage <= 9) {
        const returnBtn = document.createElement('div'); returnBtn.className = 'return-btn'; returnBtn.innerHTML = '返回「說」的介紹';
        // 注意：這裡假設 jumpToPage 在 window 上
        returnBtn.onclick = function () { window.jumpToPage(4); }; group.appendChild(returnBtn);
    }
    container.appendChild(group);
}
// js/renderers.js

// ... (其他的 render 函數)

export function renderWordMeaningQuiz(data, container) {
    // 1. 頂部導覽列
    const topBar = document.createElement('div');
    topBar.style.width = '100%';
    topBar.style.display = 'flex';
    topBar.style.justifyContent = 'space-between';
    topBar.style.alignItems = 'center';
    topBar.style.marginBottom = '20px';

    const tag = document.createElement('div');
    tag.className = 'tag knowledge'; // 使用現有的 knowledge 標籤樣式
    tag.innerText = data.title;

    const resetBtn = document.createElement('button');
    resetBtn.innerHTML = '重新練習';
    // 這裡我們直接使用一個簡單的重置邏輯，不依賴全域函數
    resetBtn.onclick = function () {
        const answers = container.querySelectorAll('.wm-answer-symbol');
        const items = container.querySelectorAll('.wm-question-item');
        answers.forEach(el => el.classList.remove('opacity-100'));
        answers.forEach(el => el.classList.add('opacity-0'));
        items.forEach(el => el.querySelector('.wm-explanation').style.display = 'none');
        container.querySelector('.practice-container').scrollTop = 0;
    };
    resetBtn.style.backgroundColor = '#57534e';
    resetBtn.style.color = '#ffffff';

    topBar.appendChild(tag);
    topBar.appendChild(resetBtn);

    // 2. 主容器 (模仿你提供的 HTML 樣式)
    const practiceContainer = document.createElement('div');
    practiceContainer.className = 'practice-container w-full max-w-5xl mx-auto bg-white/95 p-8 rounded-xl shadow-md border-2 border-stone-200';

    // 說明文字
    const intro = document.createElement('p');
    intro.className = 'mb-8 text-stone-600 text-2xl text-center font-bold font-serif-tc';
    intro.innerHTML = `${data.intro}<br><span class="text-lg text-stone-400 font-normal mt-2 block">(點擊題目可查看答案與解析)</span>`;
    practiceContainer.appendChild(intro);

    // 題目列表
    const list = document.createElement('div');
    list.className = 'flex flex-col gap-6';

    data.questions.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = 'wm-question-item bg-white border border-stone-200 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer';

        // 點擊事件：切換答案顯示
        div.onclick = function () {
            const ans = this.querySelector('.wm-answer-symbol');
            const exp = this.querySelector('.wm-explanation');

            if (ans.classList.contains('opacity-100')) {
                ans.classList.remove('opacity-100');
                ans.classList.add('opacity-0');
                exp.style.display = 'none';
            } else {
                ans.classList.remove('opacity-0');
                ans.classList.add('opacity-100');
                exp.style.display = 'block';
            }
        };

        // 處理題目文字 highlight
        let formattedText = item.text.replace(/「(.*?)」/g, '「<span class="text-amber-700 font-bold">$1</span>」');

        div.innerHTML = `
            <div class="flex items-start text-3xl text-stone-700 leading-relaxed font-serif-tc">
                <span class="font-bold text-stone-500 mr-4 min-w-[3.5em] font-serif-tc">
                    （<span class="wm-answer-symbol text-red-600 font-bold opacity-0 transition-opacity duration-300 inline-block text-center w-[1.2em]">${item.answer}</span>）
                </span>
                <div class="flex-1">
                    <span class="mr-2 text-stone-400 font-sans text-xl font-bold">${index + 1}.</span>
                    ${formattedText}
                </div>
            </div>
            <div class="wm-explanation mt-4 ml-[4.5em] p-5 bg-red-50 border-l-4 border-red-400 rounded-r text-red-800 text-2xl hidden animate-fade-in-down leading-relaxed font-serif-tc">
                ${item.explanation}
            </div>
        `;
        list.appendChild(div);
    });

    practiceContainer.appendChild(list);

    const group = document.createElement('div');
    group.className = 'sentence-group';
    group.style.alignItems = 'center';
    group.style.width = '100%';

    group.appendChild(topBar);
    group.appendChild(practiceContainer);

    container.appendChild(group);
}