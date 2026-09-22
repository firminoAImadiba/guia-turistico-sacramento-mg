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

/* ---- 5. Mensagens ---------------------------------------------------------- */
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

/* ---- 6. Fluxo principal (mock/eco) ------------------------------------------ */
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

    addMessage('Você disse: ' + userText, 'guide');

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

/* ---- 7. Eventos ------------------------------------------------------------- */
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

/* ---- 8. Inicialização ---------------------------------------------------------- */
autoResizeTextarea();

// Reposiciona o chat quando o teclado virtual abre/fecha
if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', scrollToBottom);
}

// Não força foco no mobile (evita abrir o teclado sozinho)
if (!isTouchDevice) {
    messageInput.focus();
}
