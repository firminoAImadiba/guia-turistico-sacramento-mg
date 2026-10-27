/* ==========================================================================
   Citypass Sacramento (versão PÚBLICO)
   Painel de resposta única + 2 opções.
   Interface em PT/EN/ES/FR (assets/js/i18n.js). Conteúdo dos 216 nós em PT-BR
   nos dados e traduzido sob demanda com cache local.
   ========================================================================== */
'use strict';

/* ---- 1. Referências de DOM ---------------------------------------------- */
const messagesContainer = document.getElementById('messagesContainer');
const typingIndicator = document.getElementById('typingIndicator');
const typingPhase = document.getElementById('typingPhase');
const shortcutsContainer = document.getElementById('shortcutsContainer');
const shortcutButtons = document.querySelectorAll('[data-tema]');
const dockSection = document.getElementById('dockSection');
const optionsContainer = document.getElementById('optionsContainer');
const welcomeScreen = document.getElementById('welcomeScreen');
const startBtn = document.getElementById('startBtn');
const headerSub = document.getElementById('headerSub');
const temasLabel = document.getElementById('temasLabel');
const welcomeDesc = document.getElementById('welcomeDesc');
const badgeTexts = document.querySelectorAll('.badge-text');
const langButtons = document.querySelectorAll('[data-lang]');
const metaDesc = document.querySelector('meta[name="description"]');

/* ---- 2. Estado ----------------------------------------------------------- */
let isBusy = false;
let started = false;
let current = null; // { tema, num }
let lang = 'pt';
try {
    const saved = localStorage.getItem('citypass_lang');
    if (saved && STR[saved]) lang = saved;
} catch (e) { /* sem storage: segue em PT */ }

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function T() {
    return STR[lang] || STR.pt;
}

/* ---- 3. Atalhos: fade nas bordas ------------------------------------------ */
function updateShortcutsFade() {
    if (!shortcutsContainer) return;
    const maxScroll = shortcutsContainer.scrollWidth - shortcutsContainer.clientWidth;
    const x = shortcutsContainer.scrollLeft;
    shortcutsContainer.style.setProperty('--fade-l', x > 4 ? '1' : '0');
    shortcutsContainer.style.setProperty('--fade-r', x < maxScroll - 4 ? '1' : '0');
}

if (shortcutsContainer) {
    shortcutsContainer.addEventListener('scroll', updateShortcutsFade, { passive: true });
    window.addEventListener('resize', updateShortcutsFade);
    updateShortcutsFade();
}

/* ---- 4. Utilidades -------------------------------------------------------- */
function scrollToBottom() {
    messagesContainer.scrollTo({ top: messagesContainer.scrollHeight, behavior: 'smooth' });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function wait(ms) {
    return new Promise(function (r) { setTimeout(r, ms); });
}

function getNode(tema, num) {
    const list = NOS_DATA[tema];
    if (!list) return null;
    const key = String(num).padStart(2, '0');
    for (let i = 0; i < list.length; i++) {
        if (list[i].num === key) return list[i];
    }
    return null;
}

function temaTitulo(id) {
    const t = T().temas[id];
    if (t) return t[0];
    for (let i = 0; i < TEMAS.length; i++) {
        if (TEMAS[i].id === id) return TEMAS[i].titulo;
    }
    return id;
}

/* ---- 5. Idioma -------------------------------------------------------------- */
function applyLang() {
    const s = T();
    document.documentElement.lang = s.htmlLang;
    document.title = s.title;
    if (metaDesc) metaDesc.setAttribute('content', s.metaDesc);
    if (headerSub) headerSub.textContent = s.headerSub;
    if (temasLabel) temasLabel.textContent = s.temasLabel;
    if (welcomeDesc) welcomeDesc.textContent = s.welcomeDesc;
    if (startBtn && !started) startBtn.textContent = s.start;
    badgeTexts.forEach(function (el) { el.textContent = s.badge; });
    shortcutButtons.forEach(function (btn) {
        const t = s.temas[btn.dataset.tema];
        const span = btn.querySelector('span');
        if (t && span) span.textContent = t[0];
    });
    langButtons.forEach(function (btn) {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    const sectionTemas = document.querySelector('section[aria-label="Temas"]');
    if (sectionTemas) sectionTemas.setAttribute('aria-label', s.ariaTemas);
    const sectionChat = document.querySelector('section[aria-label="Conversa"], section[aria-label="Answer"], section[aria-label="Respuesta"], section[aria-label="Réponse"]');
    if (sectionChat) sectionChat.setAttribute('aria-label', s.ariaChat);
    if (dockSection) dockSection.setAttribute('aria-label', s.ariaOpts);
    try {
        localStorage.setItem('citypass_lang', lang);
    } catch (e) { /* sem storage */ }
    if (started && !current) renderPlaceholder();
}

function setLang(next) {
    if (!STR[next] || next === lang) return;
    lang = next;
    applyLang();
    if (started && current && !isBusy) {
        isBusy = true;
        setOptionsEnabled(false);
        showNodeInternal(current.tema, current.num).then(function () {
            isBusy = false;
        });
    }
}

/* ---- 6. Tradução sob demanda (com cache) -------------------------------------
   Interface (botões, títulos, fases) traduzida manualmente em i18n.js.
   Conteúdo dos nós: MyMemory -> Google (fallback) -> texto original.
   Cache persistente: o que já foi visto não é traduzido de novo. */
const mtMemCache = {};
let mtStore = {};
try {
    mtStore = JSON.parse(localStorage.getItem('citypass_mt') || '{}');
} catch (e) { mtStore = {}; }

function mtSave() {
    try {
        const keys = Object.keys(mtStore);
        if (keys.length > 800) {
            const keep = {};
            keys.slice(-800).forEach(function (k) { keep[k] = mtStore[k]; });
            mtStore = keep;
        }
        localStorage.setItem('citypass_mt', JSON.stringify(mtStore));
    } catch (e) { /* quota: mantém só memória */ }
}

function djb2(text) {
    let h = 5381;
    for (let i = 0; i < text.length; i++) {
        h = ((h << 5) + h + text.charCodeAt(i)) >>> 0;
    }
    return h.toString(36);
}

function mtGet(key) {
    if (mtMemCache[key]) return mtMemCache[key];
    if (mtStore[key]) {
        mtMemCache[key] = mtStore[key];
        return mtStore[key];
    }
    return null;
}

function mtPut(key, value) {
    mtMemCache[key] = value;
    mtStore[key] = value;
    mtSave();
}

async function fetchTimeout(url, ms) {
    const ctrl = new AbortController();
    const timer = setTimeout(function () { ctrl.abort(); }, ms);
    try {
        const res = await fetch(url, { signal: ctrl.signal });
        return res;
    } finally {
        clearTimeout(timer);
    }
}

async function mtViaMyMemory(text, target) {
    const url = 'https://api.mymemory.translated.net/get?q=' + encodeURIComponent(text) +
        '&langpair=pt|' + encodeURIComponent(target);
    const res = await fetchTimeout(url, 12000);
    if (!res.ok) throw new Error('http ' + res.status);
    const data = await res.json();
    if (!data || !data.responseData || typeof data.responseData.translatedText !== 'string') {
        throw new Error('resposta inválida');
    }
    if (data.responseStatus !== 200 && data.responseStatus !== '200') throw new Error('status ' + data.responseStatus);
    return data.responseData.translatedText;
}

async function mtViaGoogle(text, target) {
    const url = 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=pt&tl=' +
        encodeURIComponent(target) + '&dt=t&q=' + encodeURIComponent(text);
    const res = await fetchTimeout(url, 12000);
    if (!res.ok) throw new Error('http ' + res.status);
    const data = await res.json();
    let out = '';
    const sentences = data[0] || [];
    for (let i = 0; i < sentences.length; i++) {
        if (sentences[i][0]) out += sentences[i][0];
    }
    if (!out) throw new Error('vazio');
    return out;
}

async function translateChunk(text, target) {
    const key = target + ':' + djb2(text);
    const hit = mtGet(key);
    if (hit) return hit;
    let out = null;
    try {
        out = await mtViaMyMemory(text, target);
    } catch (e1) {
        try {
            out = await mtViaGoogle(text, target);
        } catch (e2) {
            out = text;
        }
    }
    mtPut(key, out);
    return out;
}

function splitChunks(text, maxLen) {
    // Agrupa parágrafos em pedaços curtos (limite do provedor gratuito).
    const paras = text.split(/\n+/).map(function (p) { return p.trim(); }).filter(Boolean);
    const chunks = [];
    let cur = '';
    paras.forEach(function (p) {
        if ((cur + '\n\n' + p).trim().length > maxLen && cur) {
            chunks.push(cur.trim());
            cur = p;
        } else {
            cur = (cur ? cur + '\n\n' : '') + p;
        }
    });
    if (cur.trim()) chunks.push(cur.trim());
    return chunks.length ? chunks : [text];
}

async function translateText(text, target) {
    const chunks = splitChunks(text, 450);
    const parts = await Promise.all(chunks.map(function (c) {
        return translateChunk(c, target);
    }));
    return parts.join('\n\n');
}

async function localizeNode(node) {
    if (lang === 'pt' || !node) {
        return {
            text: node.text,
            optA: node.optA ? node.optA.label : '',
            optB: node.optB ? node.optB.label : ''
        };
    }
    const results = await Promise.all([
        translateText(node.text, lang),
        translateText(node.optA ? node.optA.label : '', lang),
        translateText(node.optB ? node.optB.label : '', lang)
    ]);
    return { text: results[0], optA: results[1], optB: results[2] };
}

/* ---- 7. Indicador de geração ----------------------------------------------- */
function showTyping() {
    typingIndicator.classList.remove('hidden');
    typingIndicator.classList.add('flex');
    scrollToBottom();
}

function hideTyping() {
    typingIndicator.classList.add('hidden');
    typingIndicator.classList.remove('flex');
}

async function aiThink(textLen) {
    showTyping();
    const phases = T().think;
    const base = Math.min(500 + textLen * 0.3, 1700);
    const step = base / phases.length;
    for (let i = 0; i < phases.length; i++) {
        typingPhase.textContent = phases[i];
        scrollToBottom();
        await wait(reduceMotion ? 60 : step + Math.random() * 160);
    }
}

/* ---- 8. Painel de resposta --------------------------------------------------- */
function splitParagraphs(text) {
    return text.split(/\n+/).map(function (p) { return p.trim(); }).filter(Boolean);
}

function renderPlaceholder() {
    messagesContainer.innerHTML =
        '<p class="text-center text-sm sm:text-base" style="color: rgba(220,235,220,0.6);">' +
        escapeHtml(T().placeholder) + '</p>';
}

async function streamAnswer(fullText) {
    messagesContainer.innerHTML = '';
    const card = document.createElement('div');
    card.className = 'message-bubble glass-strong rounded-3xl shadow-2xl px-5 py-4 sm:px-6 sm:py-5';
    card.innerHTML = '<div class="answer-body space-y-3 stream-caret"></div>';
    messagesContainer.appendChild(card);
    const body = card.querySelector('.answer-body');
    const paras = splitParagraphs(fullText);
    for (let i = 0; i < paras.length; i++) {
        const p = document.createElement('p');
        p.className = 'stream-para bubble-text text-white text-sm sm:text-base leading-relaxed';
        p.style.whiteSpace = 'pre-wrap';
        p.innerHTML = escapeHtml(paras[i]).replace(/\n/g, '<br>');
        body.appendChild(p);
        scrollToBottom();
        await wait(reduceMotion ? 30 : 200 + Math.random() * 220);
    }
    body.classList.remove('stream-caret');
    scrollToBottom();
}

/* ---- 9. Opções -------------------------------------------------------------- */
function setOptionsEnabled(enabled) {
    const btns = optionsContainer.querySelectorAll('button');
    btns.forEach(function (b) { b.disabled = !enabled; });
}

function hideDock() {
    dockSection.classList.add('hidden');
    optionsContainer.innerHTML = '';
}

function addOptionButton(label, onClick) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'choice-btn glass px-4 py-3 rounded-xl text-sm text-white flex items-center gap-2 shadow-md';
    btn.innerHTML = '<span>' + escapeHtml(label) + '</span>';
    btn.addEventListener('click', onClick);
    optionsContainer.appendChild(btn);
    return btn;
}

function renderNodeOptions(node, tema, labels) {
    optionsContainer.innerHTML = '';
    if (node.optA && node.optA.target) {
        addOptionButton(labels.optA, function () { chooseOption(tema, node, 'A'); });
    }
    if (node.optB && node.optB.target) {
        addOptionButton(labels.optB, function () { chooseOption(tema, node, 'B'); });
    }
    dockSection.classList.remove('hidden');
    setOptionsEnabled(true);
}

/* ---- 10. Fluxo ---------------------------------------------------------------- */
function resolveTarget(tema, opt) {
    if (!opt || !opt.target) return { tema: tema, num: '01' };
    if (opt.target === 'MENU') return { tema: tema, num: '01' };
    if (opt.cross) return { tema: opt.cross, num: opt.target };
    return { tema: tema, num: opt.target };
}

async function startTema(tema) {
    if (isBusy || !started) return;
    isBusy = true;
    setOptionsEnabled(false);
    hideDock();
    await showNodeInternal(tema, '01');
    isBusy = false;
}

async function chooseOption(tema, node, which) {
    if (isBusy || !started) return;
    isBusy = true;
    setOptionsEnabled(false);
    const opt = which === 'A' ? node.optA : node.optB;
    const dest = resolveTarget(tema, opt);
    await showNodeInternal(dest.tema, dest.num);
    isBusy = false;
}

async function showNodeInternal(tema, num) {
    const node = getNode(tema, num) || getNode(tema, '01');
    current = { tema: tema, num: node.num };
    const localizedPromise = localizeNode(node);
    await aiThink(node.text.length);
    const localized = await localizedPromise;
    hideTyping();
    await streamAnswer(localized.text);
    renderNodeOptions(node, tema, localized);
    scrollToBottom();
}

/* ---- 11. Eventos ------------------------------------------------------------- */
shortcutButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (!isBusy && started) startTema(btn.dataset.tema);
    });
});

langButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        setLang(btn.dataset.lang);
    });
});

if (startBtn) {
    startBtn.addEventListener('click', async function () {
        if (started || isBusy) return;
        started = true;
        welcomeScreen.classList.add('welcome-hide');
        await wait(reduceMotion ? 50 : 380);
        welcomeScreen.remove();
        renderPlaceholder();
    });
}

if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', scrollToBottom);
}

/* ---- 12. Inicialização ------------------------------------------------------- */
applyLang();
renderPlaceholder();
updateShortcutsFade();
