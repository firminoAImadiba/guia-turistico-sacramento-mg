# Guia Turístico Virtual de Sacramento – MG

> **LEIA-ME PARA IAs E DESENVOLVEDORES** — Este README é a fonte oficial de contexto do projeto. Se você é uma IA assumindo este repositório, leia este arquivo inteiro antes de fazer qualquer alteração.

---

## 1. Identidade do Projeto

| Campo | Valor |
|---|---|
| **Nome oficial** | Guia Turístico Virtual de Sacramento – MG |
| **Tipo** | Site chatbot (Single Page Application em arquivo único) |
| **Entrada da aplicação** | `index.html` (markup + sprite SVG inline; CSS/JS em arquivos separados, sem build) |
| **Natureza** | Projeto **privado**, feito como **TCC do curso de Inteligência Artificial do Instituto Madiba**, em Sacramento – MG |
| **Autores** | **Arthur Firmino** e **Maria Clara** (estudantes do curso) |
| **Objetivo social** | Resolver a **falta de guias turísticos suficientes na cidade de Sacramento – MG**, oferecendo um guia virtual acessível pelo navegador |
| **Diferencial declarado** | App **100% feito por IA** (código gerado/assistido por IA, com revisão dos autores) |
| **Idioma obrigatório da interface** | **Português brasileiro (PT-BR)** — todo texto visível, placeholders, botões e respostas do bot DEVEM estar em PT-BR |
| **Público-alvo** | Turistas e moradores de Sacramento – MG, com foco **mobile-first** |

---

## 2. Estado Atual (o que existe HOJE)

O projeto é um **protótipo frontend funcional**, sem backend e sem integração com API externa de IA.

### 2.1. O que já funciona

1. Interface completa: cabeçalho, atalhos rápidos, área de chat, barra de entrada (arquivos separados em `index.html` + `assets/`).
2. **Respostas automáticas (base de conhecimento)**: o JS captura o texto, exibe como bolha de usuário, mostra `Digitando...` (~500 ms) e responde com uma das **5 respostas temáticas** via `findAnswer()` — com normalização que **ignora maiúsculas/minúsculas e acentos** (`normalizeText()`). Texto sem correspondência recebe a **resposta padrão de ajuda** (`FALLBACK_ANSWER`), que lista os 5 temas.
3. **Botões de atalho** que enviam perguntas pré-definidas e disparam o mesmo fluxo (3 atalhos caem nos temas; `Onde Comer e Hospedar` cai no fallback — não há tema de gastronomia cadastrado).
4. **Textarea autoexpansível**: cresce até `max-height: 150px`, depois ativa scroll interno; `Enter` envia, `Shift + Enter` quebra linha.
5. Estética **Liquid Glass / Glassmorphism** sobre fundo verde-floresta animado com blobs.

### 2.2. O que NÃO existe ainda (limitações conhecidas)

- ❌ Nenhuma chamada a API de IA (OpenAI, Gemini, etc.) — decisão low budget: respostas 100% locais.
- ❌ Nenhum backend, banco de dados ou persistência (histórico some ao recarregar).
- ⚠️ Base de conhecimento limitada a **5 temas** com casamento por palavra-chave (sem IA: não entende sinônimos fora da lista nem perguntas compostas de 2 temas — vale o primeiro match na ordem).
- ❌ Sem sistema de build, testes automatizados ou dependências locais — Tailwind via CDN, resto é arquivo estático.

### 2.3. Roadmap sugerido (não implementado)

1. Conectar a uma API de IA com system prompt de guia local de Sacramento.
2. Expandir a base de conhecimento PT-BR (hoje: 5 temas; faltam gastronomia e hospedagem).
3. Persistir histórico em `localStorage`.
4. Adicionar páginas/seções de pontos turísticos (cards com fotos).
5. Modo offline/PWA e acessibilidade avançada.

---

## 3. Estrutura de Arquivos

```text
guia-turistico-sacramento-mg/
├── index.html            # Markup + sprite SVG de ícones (sem CSS/JS inline)
├── assets/
│   ├── css/
│   │   └── styles.css    # TODO o CSS customizado (organizado por seções numeradas)
│   └── js/
│       ├── tailwind-config.js  # Paleta floresta do Tailwind CDN
│       └── app.js              # Toda a lógica do chat (organizada por seções numeradas)
├── README.md             # Este arquivo (contexto para IAs e humanos)
└── .git/                 # Repositório git local
```

> ⚠️ **Regra de ouro para IAs:** respeite a separação — estilo vai em `assets/css/styles.css`, lógica em `assets/js/app.js`, markup em `index.html`. O sprite SVG de ícones fica inline no `index.html` de propósito (funciona via `file://`, sem servidor).

---

## 4. Stack Tecnológica

| Camada | Tecnologia | Detalhe |
|---|---|---|
| Estrutura | HTML5 semântico | `lang="pt-BR"`, landmarks `header`/`main`/`section`, `role="log"` + `aria-live="polite"` na área de mensagens |
| Estilo | **Tailwind CSS via CDN** (`https://cdn.tailwindcss.com`) | Config em `assets/js/tailwind-config.js` mapeando a paleta floresta + custom em `assets/css/styles.css` |
| Ícones | **Sprite SVG inline** (estilo Lucide, sem CDN) | Símbolos `i-leaf`, `i-mountain`, `i-landmark`, `i-waves`, `i-utensils`, `i-send`, `i-user` — funciona até via `file://` |
| Lógica | JavaScript vanilla em `assets/js/app.js` | Sem frameworks, sem módulos, sem bundler |
| Fontes | System fonts (padrão Tailwind) | Nenhuma fonte externa carregada |

---

## 5. Design System — Paleta Floresta (OBRIGATÓRIO)

Toda cor da UI deriva estritamente destes 4 HEX. Não introduzir azul/roxo/verde-neon fora da paleta.

| Token | HEX | Uso normativo |
|---|---|---|
| `--forest-primary` | `#478a3f` | Destaques, botões, bolha do usuário, hovers |
| `--forest-dark` | `#375734` | Fundo da página, containers glass (versões semi-transparentes), bolha do guia |
| `--forest-bright` | `#8be381` | Bordas brilhantes, status Online, ícones, timestamps, brilhos/glow |
| `--forest-muted` | `#787d78` | Bordas neutras, textos secundários/dicas |

### 5.1. Fundo ambiente

- Classe `.animated-gradient`: `linear-gradient(-45deg, #1a2b1a, #375734, #2a4a28, #478a3f, #1a2b1a)`, `background-size: 400% 400%`, animação `gradient-shift 16s ease infinite`.
- 5 `.blob-bg` (divs circulares com `filter: blur(90px)`, `opacity: 0.55`, animação `blob 20s infinite`): cores `rgba(71,138,63,0.5)`, `rgba(55,87,52,0.7)`, `rgba(139,227,129,0.35)`, `rgba(71,138,63,0.4)`, `rgba(120,125,120,0.35)`.
- Overlay de ruído SVG sutil (`opacity-5`) para textura.

### 5.2. Glassmorphism (classes customizadas em `assets/css/styles.css`)

- `.glass` → `background: rgba(55,87,52,0.35)` + `backdrop-filter: blur(12px)` + `border: 1px solid rgba(139,227,129,0.25)`.
- `.glass-strong` → `background: rgba(55,87,52,0.55)` + `blur(12px)` + `border: rgba(139,227,129,0.35)` + sombra dupla (externa preta + brilho interno verde).
- `.glass-input` → `background: rgba(55,87,52,0.45)` + borda `rgba(120,125,120,0.5)`; no `:focus`, borda `#8be381` e glow duplo.
- `.bubble-guide` → fundo `rgba(55,87,52,0.6)`, borda `rgba(139,227,129,0.3)`.
- `.bubble-user` → fundo `rgba(71,138,63,0.55)`, borda `rgba(139,227,129,0.5)`.
- Contêineres usam `rounded-2xl`/`rounded-3xl`, bolhas usam `rounded-tl-sm` (guia) e `rounded-tr-sm` (usuário).

### 5.3. Animações CSS (keyframes no `<style>`)

- `gradient-shift` (fundo), `blob` (bolhas de fundo), `pulse-glow` (indicador Online + `.status-dot`), `slideUp` (entrada das mensagens, `.message-bubble`), `typing` (3 pontinhos do `Digitando...`).
- Respeito a `prefers-reduced-motion: reduce` (animações desativadas).

---

## 6. Anatomia da Interface (de cima para baixo no `index.html`)

### 6.1. Header (`.glass-strong`, `rounded-b-3xl`)

- Título: `Guia Virtual de Sacramento` (ícone `fa-leaf` em `#8be381`).
- Subtítulo: `Seu assistente local em Sacramento - MG` (cor `rgba(139,227,129,0.8)`).
- Indicador de status: pílula `.glass` com `.status-dot` (verde `#8be381` pulsante) + texto `Online`.

### 6.2. Seção de Atalhos Rápidos

- Contêiner `.glass-strong rounded-2xl`, rótulo `Atalhos rápidos`.
- Lista horizontal com scroll (`overflow-x-auto`, `scrollbar-hide`), 4 botões `.btn-shortcut`:
  1. 📍 `Gruta dos Palhares` (`data-message="Gruta dos Palhares"`, ícone `fa-mountain`)
  2. 📜 `Povoado do Desemboque` (`data-message="Povoado do Desemboque"`, ícone `fa-landmark`)
  3. 🏞️ `Cachoeiras e Trilhas` (`data-message="Cachoeiras e Trilhas"`, ícone `fa-water`)
  4. ☕ `Onde Comer e Hospedar` (`data-message="Onde Comer e Hospedar"`, ícone `fa-utensils`)
- ⚠️ O **rótulo visível contém emoji**, mas o **`data-message` (texto enviado) é sem emoji**. Ao adicionar atalhos, manter esse padrão.

### 6.3. Área de Chat

- Contêiner `.glass-strong rounded-3xl`, altura `min-height: 320px; max-height: 60vh`, `overflow: hidden`.
- `#messagesContainer`: `overflow-y-auto`, `role="log"`, `aria-live="polite"`.
- Mensagem inicial do guia: `Bem-vindo a Sacramento! Como posso ajudar você hoje?` + timestamp `Agora mesmo`.
- `#typingIndicator` (inicia com `hidden`): avatar + texto `Digitando...` + 3 pontos animados.
- Bolhas do guia alinhadas à esquerda; do usuário à direita (`flex-row-reverse`).

### 6.4. Barra de Entrada

- Contêiner `.glass-strong rounded-2xl` com `<form id="chatForm">`.
- `<textarea id="messageInput" rows="1">` com placeholder `Digite sua mensagem aqui...`.
- Botão `#sendBtn` (`.send-btn`, ícone `fa-paper-plane`).
- Texto de ajuda: `Pressione Enter para enviar e Shift + Enter para quebrar linha.`

---

## 7. Lógica JavaScript (referência exata para IAs)

Todo o JS está em `assets/js/app.js`. Funções e IDs:

| Símbolo | Tipo | Papel |
|---|---|---|
| `#messagesContainer` | DOM | Lista de mensagens (scroll suave) |
| `#messageInput` | DOM (`textarea`) | Entrada do usuário |
| `#sendBtn` | DOM (`button`) | Envio |
| `#chatForm` | DOM (`form`) | Intercepta `submit` com `preventDefault` |
| `#typingIndicator` | DOM | Mostra/oculta `Digitando...` (alterna `hidden`/`flex`) |
| `.btn-shortcut` | DOM (4x) | Atalhos; texto em `dataset.message` |
| `isProcessing` | `boolean` | Trava de concorrência — impede envios duplos |
| `scrollToBottom()` | fn | `scrollTo({top: scrollHeight, behavior:'smooth'})` |
| `KNOWLEDGE_BASE` | array (5 entradas) | Cada entrada: `{id, keywords[], answer}` — ordem de avaliação: gruta → desemboque → centro → cachoeiras → cultura |
| `FALLBACK_ANSWER` | string | Resposta padrão "não entendi" + lista dos 5 temas |
| `normalizeText(text)` | fn | `toLowerCase` + `normalize('NFD')` sem diacríticos + troca pontuação por espaço — torna o match insensível a caixa/alento/acentos |
| `findAnswer(userText)` | fn | Retorna a 1ª resposta cuja palavra-chave aparece no texto normalizado; senão, `FALLBACK_ANSWER` |
| `formatTime()` | fn | `toLocaleTimeString('pt-BR', {hour:'2-digit', minute:'2-digit'})` |
| `escapeHtml(text)` | fn | Sanitiza via `textContent` e converte `\n` em `<br>` (anti-XSS) |
| `autoResizeTextarea()` | fn | `height:auto` → `min(scrollHeight,150px)`; `overflowY` auto só acima de 150px |
| `createMessageElement(text,sender)` | fn | Monta bolha; `sender` ∈ `{'user','guide'}` |
| `addMessage(text,sender)` | fn | Anexa bolha + scroll |
| `showTyping()` / `hideTyping()` | fn | Alterna indicador |
| `processMessage(userText)` | `async` fn | **FLUXO CORE**: trava → desabilita input → `addMessage(user)` → limpa + redimensiona → `showTyping` → `await 500ms` → `hideTyping` → `addMessage(findAnswer(userText),'guide')` → reabilita + `blur` (mobile) / foca (desktop) |

### Eventos ligados

- `chatForm.submit` → `preventDefault` + `processMessage(messageInput.value)`.
- Cada `.btn-shortcut.click` → `processMessage(btn.dataset.message)` (se não estiver processando).
- `messageInput.keydown`: `Enter` sem `Shift` → `preventDefault` + envia; `Shift+Enter` → comportamento nativo (nova linha).
- `messageInput.input` → `autoResizeTextarea()` a cada tecla.

---

## 8. Como Executar (sem build, sem install)

1. Clone ou abra a pasta: `guia-turistico-sacramento-mg/`.
2. Abra `index.html` direto no navegador (duplo clique) **ou** sirva localmente:
   ```powershell
   # opção 1 — servidor estático rápido (Python)
   python -m http.server 8000
   # abra http://localhost:8000/index.html
   ```
3. Requer internet (CDN do Tailwind). Sem internet, o layout quebra — isso é esperado no protótipo.

---

## 9. Como Testar Manualmente (checklist PT-BR)

- [ ] Mensagem inicial do guia aparece em PT-BR.
- [ ] Digitar `Fale sobre a Gruta dos Palhares` → resposta da Gruta (distância, pórtico 22m, R$ 10).
- [ ] Digitar `QUAL A HISTÓRIA DO POVOADO DO DESEMBOQUE?` (tudo maiúsculo) → resposta do Desemboque.
- [ ] Digitar `cachoeiras` / `museu` / `basilica` (sem acento) → respostas de cachoeiras / cultura / centro.
- [ ] Digitar `oi, tudo bem?` ou `Onde Comer e Hospedar` → resposta padrão "Desculpe, não entendi..." listando os 5 temas.
- [ ] `Shift+Enter` insere nova linha sem enviar; quebras de linha aparecem na bolha (via `<br>`).
- [ ] Textarea cresce ao digitar e limita em 150px com scroll interno.
- [ ] Os 3 atalhos temáticos respondem o tema certo; o de gastronomia cai no fallback.
- [ ] Duplo-Enter rápido não duplica mensagens (trava `isProcessing`).
- [ ] Layout mobile (320px) sem scroll horizontal; atalhos com scroll lateral.

---

## 10. Convenções para Futuras Alterações (instruções diretas à IA)

1. **Separação respeitada**: CSS só em `assets/css/styles.css`, JS só em `assets/js/app.js`, config do Tailwind só em `assets/js/tailwind-config.js`. Nada de `<style>` ou `<script>` inline no HTML.
2. **PT-BR sempre**: nenhum texto de UI em inglês. Placeholders, `aria-labels`, timestamps (`pt-BR`) e respostas do bot em português.
3. **Paleta fechada**: usar só os 4 HEX da Seção 5 (via `rgba()` quando precisar de transparência). Não reintroduzir azul/roxo do protótipo antigo.
4. **Preservar a base de conhecimento**: manter `KNOWLEDGE_BASE`, `normalizeText`, `findAnswer` e `FALLBACK_ANSWER`. Novas respostas = nova entrada `{id, keywords[], answer}` (keywords sempre minúsculas e sem acento); a ordem do array define prioridade em caso de empate.
5. **XSS**: nunca remover `escapeHtml`; todo texto do usuário passa por ele antes do `innerHTML`.
6. **Acessibilidade**: manter `role="log"`, `aria-live`, `aria-labels`, foco devolvido ao input após resposta e contraste de texto branco sobre verde-escuro.
7. **Responsivo primeiro**: testar em 360px; novos componentes devem usar classes Tailwind responsivas (`sm:`, `lg:`).
8. **Sem dependências locais**: novas libs só via CDN e com fallback mental (o que acontece se o CDN falhar?).
9. **Commits**: mensagens curtas em PT-BR (ex.: `feat: adiciona seção de cachoeiras`, `fix: corrige scroll do chat no mobile`).

---

## 11. Integração Futura com IA (guia, ainda não implementado)

Quando os autores pedirem a IA real, o ponto de troca é **somente** a função `findAnswer()`: substituí-la por `fetch` a uma API (mantendo `FALLBACK_ANSWER` para erro de rede), sem mexer no resto do fluxo — `showTyping`/`hideTyping` (aumentar o tempo conforme a latência) e tratamento de erro em PT-BR (ex.: `Desculpe, não consegui responder agora. Tente novamente.`). A chave de API **nunca** deve ser exposta no frontend público — prever um backend proxy ou função serverless antes de publicar.

---

## 12. Contexto Local — Sacramento, MG (domínio do TCC)

Sacramento é um município do Triângulo Mineiro/Alto Paranaíba (MG) com apelo para **turismo de natureza, história e religiosidade**. Os temas cobertos pelos atalhos (e futuros conteúdos do bot) são:

- **Gruta dos Palhares**: principal cartão-postal natural da região.
- **Povoado do Desemboque**: núcleo histórico, origem da ocupação local.
- **Cachoeiras e Trilhas**: ecoturismo no entorno.
- **Onde Comer e Hospedar**: gastronomia mineira e hospedagem local.

> Nota para IAs: ao gerar conteúdo turístico futuro, sinalizar claramente o que é **texto provisório/mock** vs. **informação verificada**, para não inventar endereços, preços ou horários.

---

## 13. Autores e Créditos

- **Arthur Firmino** — estudante, curso de IA, Instituto Madiba (Sacramento – MG). Coautor e codesenvolvedor.
- **Maria Clara** — estudante, curso de IA, Instituto Madiba (Sacramento – MG). Coautora e codesenvolvedora.
- **Instituto Madiba** — instituição de ensino promotora do curso e do TCC.
- Código gerado com assistência de IA e revisado pelos autores — em linha com a proposta de ser um projeto "100% feito por IA".

---

## 14. Licença e Uso

Projeto **privado e acadêmico** (TCC). Todos os direitos reservados aos autores. Não distribuir, publicar ou reutilizar sem autorização expressa de Arthur Firmino e Maria Clara.
