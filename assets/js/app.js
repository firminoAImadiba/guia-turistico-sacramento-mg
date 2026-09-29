/* ==========================================================================
   Guia Virtual de Sacramento - MG
   Lógica do chat (mock/eco para protótipo — sem API externa)
   ========================================================================== */
'use strict';

/* ---- 1. Referências de DOM ---------------------------------------------- */
const messagesContainer = document.getElementById('messagesContainer');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const chatForm = document.getElementById('chatForm');
const typingIndicator = document.getElementById('typingIndicator');
const shortcutsContainer = document.getElementById('shortcutsContainer');
const shortcutButtons = document.querySelectorAll('.btn-shortcut');

/* ---- 2. Estado ----------------------------------------------------------- */
let isProcessing = false;

// Dispositivo com teclado virtual (mobile/tablet)
const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

/* ---- 3. Atalhos: fade nas bordas conforme a rolagem ---------------------- */
function updateShortcutsFade() {
    const maxScroll = shortcutsContainer.scrollWidth - shortcutsContainer.clientWidth;
    const x = shortcutsContainer.scrollLeft;
    shortcutsContainer.style.setProperty('--fade-l', x > 4 ? '1' : '0');
    shortcutsContainer.style.setProperty('--fade-r', x < maxScroll - 4 ? '1' : '0');
}

shortcutsContainer.addEventListener('scroll', updateShortcutsFade, { passive: true });
window.addEventListener('resize', updateShortcutsFade);
updateShortcutsFade();

/* ---- 4. Utilidades -------------------------------------------------------- */
function scrollToBottom() {
    messagesContainer.scrollTo({ top: messagesContainer.scrollHeight, behavior: 'smooth' });
}

function formatTime() {
    return new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

// Sanitiza texto do usuário (anti-XSS) preservando quebras de linha
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML.replace(/\n/g, '<br>');
}

// Fecha o teclado virtual dispensando o foco do elemento ativo
function dismissKeyboard() {
    if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
    }
}

function autoResizeTextarea() {
    messageInput.style.height = '52px';
    const target = Math.min(messageInput.scrollHeight, 150);
    messageInput.style.height = target + 'px';
    messageInput.style.overflowY = messageInput.scrollHeight > 150 ? 'auto' : 'hidden';
}

/* ---- 5. Base de conhecimento (respostas automáticas) ------------------------- */
// Palavras-chave já normalizadas (minúsculas, sem acento) para comparação.
const KNOWLEDGE_BASE = [
    {
        id: 'gruta',
        keywords: ['gruta', 'palhares', 'espeleologia', 'caverna', 'arenito'],
        answer: `A Gruta dos Palhares fica a cerca de 10 a 12 km do centro (Rodovia Antenor Duarte Vilela) e é a maior caverna de arenito Botucatu das Américas. Seu pórtico impressiona com 22 metros de altura e o salão principal comporta até 5.000 pessoas. Possui 450 metros de galerias mapeadas (acesso restrito às galerias fundas por preservação). O parque oferece piscinas de água natural, restaurante, lanchonete e bosque. A taxa de entrada é de aproximadamente R$ 10,00.`
    },
    {
        id: 'desemboque',
        keywords: ['desemboque', 'povoado', 'desterro', 'rosario', 'casarao', 'queijo', 'galinhada', 'ouro', 'triangulo mineiro'],
        answer: `O Desemboque fica a 60 km do centro urbano (acesso via Chapadão do Bugre) e é o berço do povoamento do Triângulo Mineiro, surgido por volta de 1766 no ciclo do ouro de aluvião. Destaques: Igreja de Nossa Senhora do Desterro (1743-1754, tombada pelo IEPHA), Igreja do Rosário dos Homens Pretos, Casarão Colonial (1993) e a tradição secular do Queijo Minas Artesanal da Canastra. Em julho, acolhe a tradicional Festa de N. Sra. do Desterro com galinhada dos tropeiros.`
    },
    {
        id: 'centro',
        keywords: ['centro', 'sede urbana', 'basilica', 'patrocinio', 'colegio', 'allan kardec', 'mangueiras', 'neoclassico'],
        answer: `No centro urbano destacam-se:

Basílica N. Sra. do Patrocínio: Reconstruída em 1920 em estilo neoclássico, com relógio alemão e título de Basílica Menor pelo Vaticano.

Colégio Allan Kardec: Fundado em 1902 por Eurípedes Barsanulfo, foi a primeira escola de pedagogia espírita do mundo. Hoje abriga o Memorial e o famoso Pátio das Mangueiras.`
    },
    {
        id: 'cachoeiras',
        keywords: ['cachoeira', 'ecoturismo', 'canastra', 'trilha', 'nascente', 'joao inacio', 'parida', 'azulim', 'amanteigado', 'rapel', 'queda'],
        answer: `Sacramento possui mais de 220 cachoeiras catalogadas e integra o Circuito da Canastra. Principais destaques:
• Nascente das Gerais: Queda de 83m com >20 poços naturais (Taxa: R$ 30).
• João Inácio: Complexo de 3 quedas a 65 km da cidade (Taxa: R$ 10 a R$ 25).
• Cachoeira da Parida: Em cânion com queda dupla e poço cristalino (Taxa: R$ 25).
• Azulim: Ideal para rapel e canionismo.
• Amanteigado: Acesso gratuito.`
    },
    {
        id: 'cultura',
        keywords: ['personalidade', 'carolina', 'jesus', 'museu', 'coralia', 'lima duarte', 'euripedes', 'barsanulfo', 'bondes', 'cajuru', 'usina', 'telefone', 'escritor'],
        answer: `Sacramento é terra natal da escritora Carolina Maria de Jesus (nascida em 1914, com acervo de manuscritos na cidade), do educador Eurípedes Barsanulfo e possui forte ligação com o ator Lima Duarte (nascido no Desemboque). O Museu Histórico Corália Venites Maluf guarda o 1º telefone da cidade e a 1ª Constituição Municipal. Outros ícones industriais de 1913 são a Estação dos Bondes (hoje venda de doces e queijos) e a Usina Hidrelétrica Cajuru.`
    }
];

const FALLBACK_ANSWER = `Desculpe, não entendi sua pergunta.

Posso falar sobre:
• Gruta dos Palhares
• Desemboque
• Centro urbano
• Cachoeiras e ecoturismo
• Personalidades e museu

Digite uma dessas opções ou toque em um atalho rápido!`;

// Normaliza: minúsculas, sem acentos, sem pontuação — "GRUTA" = "grutá" = "gruta"
function normalizeText(text) {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function findAnswer(userText) {
    const normalized = normalizeText(userText);
    for (const entry of KNOWLEDGE_BASE) {
        if (entry.keywords.some(function (kw) { return normalized.includes(kw); })) {
            return entry.answer;
        }
    }
    return FALLBACK_ANSWER;
}

/* ---- 6. Mensagens ---------------------------------------------------------- */
function createMessageElement(text, sender) {
    const wrapper = document.createElement('div');
    const isUser = sender === 'user';
    wrapper.className = 'message-bubble flex items-start gap-3' + (isUser ? ' flex-row-reverse' : '');
    wrapper.dataset.sender = sender;

    const bubbleClass = isUser ? 'bubble-user rounded-tr-sm' : 'bubble-guide rounded-tl-sm';
    const icon = isUser ? 'i-user' : 'i-leaf';

    wrapper.innerHTML =
        '<div class="w-9 h-9 rounded-2xl glass flex items-center justify-center flex-shrink-0 shadow-lg">' +
            '<svg class="icon-lg" style="color: #8be381;"><use href="#' + icon + '"/></svg>' +
        '</div>' +
        '<div class="' + bubbleClass + ' px-4 py-3 rounded-2xl max-w-[85%] min-w-0">' +
            '<p class="bubble-text text-white text-sm sm:text-base leading-relaxed" style="white-space: pre-wrap;' + (isUser ? ' text-align: right;' : '') + '">' + escapeHtml(text) + '</p>' +
            '<span class="text-xs block mt-1 ' + (isUser ? 'text-left' : 'text-right') + '" style="color: rgba(139,227,129,0.6);">' + formatTime() + '</span>' +
        '</div>';
    return wrapper;
}

function addMessage(text, sender) {
    const el = createMessageElement(text, sender);
    messagesContainer.appendChild(el);
    scrollToBottom();
    return el;
}

function showTyping() {
    typingIndicator.classList.remove('hidden');
    typingIndicator.classList.add('flex');
    scrollToBottom();
}

function hideTyping() {
    typingIndicator.classList.add('hidden');
    typingIndicator.classList.remove('flex');
}

/* ---- 7. Fluxo principal (resposta automática) --------------------------------- */
async function processMessage(userText) {
    if (isProcessing || !userText.trim()) return;
    isProcessing = true;

    messageInput.disabled = true;
    sendBtn.disabled = true;

    addMessage(userText, 'user');

    messageInput.value = '';
    autoResizeTextarea();

    showTyping();
    await new Promise(function (r) { setTimeout(r, 500); });
    hideTyping();

    addMessage(findAnswer(userText), 'guide');

    messageInput.disabled = false;
    sendBtn.disabled = false;
    // No mobile fecha o teclado após enviar; no desktop mantém o foco
    if (isTouchDevice) {
        dismissKeyboard();
    } else {
        messageInput.focus();
    }
    isProcessing = false;
}

/* ---- 8. Eventos ------------------------------------------------------------- */
chatForm.addEventListener('submit', function (e) {
    e.preventDefault();
    processMessage(messageInput.value);
});

shortcutButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (!isProcessing) processMessage(btn.dataset.message);
    });
});

// Enter envia, Shift+Enter quebra linha
messageInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        processMessage(messageInput.value);
    }
});

messageInput.addEventListener('input', autoResizeTextarea);

/* ---- 9. Inicialização ---------------------------------------------------------- */
autoResizeTextarea();

// Reposiciona o chat quando o teclado virtual abre/fecha
if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', scrollToBottom);
}

// Não força foco no mobile (evita abrir o teclado sozinho)
if (!isTouchDevice) {
    messageInput.focus();
}
