// js/main.js

// 1. 匯入相依模組
import { pagesData } from './data.js';
import * as Renderers from './renderers.js';
import * as Utils from './utils.js'; // 匯入 Utils 確保副作用(掛載 window) 生效

// 2. 狀態變數
let currentPage = 0;

// 3. 建立渲染器對照表 (Strategy Pattern)
// key 對應 data.js 中的 type 欄位
const rendererMap = {
    'full-image-intro': Renderers.renderFullImageIntro,
    'card-image-bg': Renderers.renderCardImageBg,
    'char-differentiation': Renderers.renderCharDifferentiation,
    'plant-symbol-quiz': Renderers.renderPlantSymbolQuiz,
    'poem-reading': Renderers.renderPoemReading,
    'reading-challenge': Renderers.renderReadingChallenge,
    'interactive-quote': Renderers.renderInteractiveQuote,
    'comparison-table': Renderers.renderComparisonTable,
    'three-flowers-cards': Renderers.renderThreeFlowersCards,
    'analysis-table': Renderers.renderAnalysisTable,
    'thought-question': Renderers.renderThoughtQuestion,
    'quiz-page': Renderers.renderQuizPage,
    'flip-card-game': Renderers.renderFlipCardGame,
    'reading-quiz': Renderers.renderReadingQuiz,
    'grammar-practice': Renderers.renderGrammarPractice,
    'interactive-review': Renderers.renderInteractiveReview,
    'interactive-lotus-traits': Renderers.renderInteractiveLotusTraits,
    'chrysanthemum-video': Renderers.renderChrysanthemumVideo,
    'lotus-growth': Renderers.renderLotusGrowth,
    'table': Renderers.renderTable,
    'video': Renderers.renderVideo,
    'text-study': Renderers.renderTextStudy,
    'cloze-passage': Renderers.renderClozePassage,
    'word-meaning-quiz': Renderers.renderWordMeaningQuiz,
    'card': Renderers.renderCard,
    // 如果有未定義的 type，稍後會使用預設的 renderCard
};

// 4. 初始化程式
document.addEventListener('DOMContentLoaded', () => {
    initNav();
    renderContent();
    setupGlobalListeners();
});

// 5. 設定全域事件監聽器 (取代 HTML 中的 inline onclick)
function setupGlobalListeners() {
    // 導航按鈕
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const quickNav = document.getElementById('quick-nav');

    if (btnPrev) btnPrev.addEventListener('click', () => changePage(-1));
    if (btnNext) btnNext.addEventListener('click', () => changePage(1));
    if (quickNav) quickNav.addEventListener('change', (e) => jumpToPage(e.target.value));

    // Modal 關閉 (點擊背景關閉)
    const modal = document.getElementById('fullscreen-modal');
    if (modal) modal.addEventListener('click', Utils.closeModal);

    // Modal 關閉 (點擊 X 按鈕)
    // 注意：因為 X 按鈕是靜態存在的(在 index.html)，可以直接綁定
    const closeHint = document.querySelector('.modal-close-hint');
    if (closeHint) closeHint.addEventListener('click', Utils.closeModal);

    // 全螢幕圖片關閉
    const modalImg = document.getElementById('fullscreen-modal-image');
    if (modalImg) modalImg.addEventListener('click', Utils.closeFullscreenImage);

    // 鍵盤導航
    document.addEventListener('keydown', (e) => {
        // 如果 Modal 開啟中，ESC 關閉 Modal
        if (modal && modal.classList.contains('open')) {
            if (e.keyCode === 27 || e.key === 'Escape') Utils.closeModal();
            return;
        }

        // 左右鍵換頁
        switch (e.keyCode) {
            case 37: // Left Arrow
                changePage(-1);
                break;
            case 39: // Right Arrow
            case 32: // Space
            case 13: // Enter
                changePage(1);
                break;
        }
    });

    // 事件委派 (Event Delegation) - 處理動態生成內容的特殊點擊
    // 例如首頁的「點擊任意處開始」
    const contentArea = document.getElementById('content-area');
    if (contentArea) {
        contentArea.addEventListener('click', (e) => {
            // 檢查是否點擊了首頁封面 (我們在 renderer 裡加了 data-action="start")
            const startTarget = e.target.closest('[data-action="start"]');
            if (startTarget) {
                changePage(1);
                return;
            }

            // 檢查是否點擊了需要開啟 Modal 的卡片 (renderer 裡加了 data-action="openModal")
            const modalTarget = e.target.closest('[data-action="openModal"]');
            if (modalTarget) {
                // 如果是卡片類型，通常 data 就是當前頁面的 data
                Utils.openModal(pagesData[currentPage]);
            }
        });
    }
}

// 6. 核心渲染邏輯
function renderContent() {
    try {
        const mainContainer = document.getElementById('main-container');
        const container = document.getElementById('content-area');
        const header = document.getElementById('header-bar');
        const footer = document.getElementById('footer-nav');
        const subtitle = document.getElementById('dynamic-subtitle');

        if (!pagesData || !pagesData[currentPage]) throw new Error("資料載入異常");

        const data = pagesData[currentPage];

        // 更新 Header 副標題
        if (subtitle) subtitle.innerText = data.title;

        // 移除 Loading
        const loader = document.getElementById('loading-indicator');
        if (loader) loader.remove();

        // 重置容器樣式與內容
        container.innerHTML = '';
        container.className = ''; // 移除所有 class (如 no-padding, chrysanthemum-theme)
        container.classList.remove('no-padding'); // 確保移除
        mainContainer.style.backgroundImage = ''; // 清除背景圖

        // 確保關閉所有全螢幕彈窗 (來自 Utils)
        Utils.closeLotusTraitCard();
        Utils.closeAnalysisCard();
        Utils.closeModal();

        // 根據頁面類型判斷 Header/Footer 顯示狀態
        if (data.type === 'full-image-intro') {
            if (header) header.classList.add('hidden-bar');
            if (footer) footer.classList.add('hidden-bar');
            container.classList.add('no-padding');
        } else {
            if (header) header.classList.remove('hidden-bar');
            if (footer) footer.classList.remove('hidden-bar');
        }

        // --- 執行渲染 ---
        const renderFunc = rendererMap[data.type] || Renderers.renderCard; // 找不到就用預設卡片
        renderFunc(data, container, currentPage);

        // 更新導航控制項狀態
        updateControls();

        // 頁面切換動畫效果 (簡單淡入)
        container.style.opacity = 0;
        container.style.transform = 'translateY(10px)';
        requestAnimationFrame(() => {
            container.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            container.style.opacity = 1;
            container.style.transform = 'translateY(0)';
        });

    } catch (e) {
        console.error("渲染錯誤:", e);
        alert("頁面載入失敗: " + e.message);
    }
}

// 7. 導航邏輯
function changePage(delta) {
    if (pagesData.length === 0) return;
    const newPage = currentPage + delta;
    if (newPage >= 0 && newPage < pagesData.length) {
        currentPage = newPage;
        // 稍微延遲讓動畫順暢 (可選)
        renderContent();
    }
}

function jumpToPage(index) {
    Utils.closeModal();
    // 給一點延遲讓 UI 反應
    setTimeout(() => {
        currentPage = parseInt(index);
        renderContent();
    }, 50);
}

function updateControls() {
    const pageIndicator = document.getElementById('page-indicator');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const navSelect = document.getElementById('quick-nav');

    if (pageIndicator) pageIndicator.innerText = `第 ${currentPage + 1} 頁 / 共 ${pagesData.length} 頁`;
    if (btnPrev) btnPrev.disabled = currentPage === 0;
    if (btnNext) btnNext.disabled = currentPage === pagesData.length - 1;
    if (navSelect) navSelect.value = currentPage;
}

function initNav() {
    const nav = document.getElementById('quick-nav');
    if (!nav) return;
    nav.innerHTML = '';
    pagesData.forEach((page, index) => {
        const opt = document.createElement('option');
        opt.value = index;
        opt.text = `${index + 1}. ${page.title}`;
        nav.appendChild(opt);
    });
}

// ==========================================
// 8. 掛載全域導航函數
// ==========================================
// 由於部分 data.js 裡的 HTML 字串 (例如 card 內容) 包含 onclick="jumpToPage(7)"，
// 我們必須將這兩個導航函數掛載到 window 上，否則 inline HTML 會找不到函數。

window.changePage = changePage;
window.jumpToPage = jumpToPage;