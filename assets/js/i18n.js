/* ==========================================================================
   Citypass Sacramento (versão PÚBLICO)
   Textos da interface em 4 idiomas. O conteúdo dos 216 nós continua em PT-BR
   nos dados e é traduzido sob demanda em assets/js/app.js.
   ========================================================================== */
'use strict';

const STR = {
    pt: {
        htmlLang: 'pt-BR',
        title: 'Citypass Sacramento',
        metaDesc: 'Citypass Sacramento: explore os pontos turísticos da cidade com o assistente.',
        headerSub: 'Seu assistente local em Sacramento - MG',
        badge: 'IA online',
        temasLabel: 'Escolha um tema para explorar',
        placeholder: 'Escolha um tema acima.',
        think: ['Pensando...', 'Escrevendo resposta...'],
        welcomeDesc: 'Explore a Gruta dos Palhares, o Desemboque, a Basílica, as Cachoeiras, o Colégio Allan Kardec e as Personalidades de Sacramento.',
        start: 'Começar',
        ariaTemas: 'Temas',
        ariaChat: 'Resposta',
        ariaOpts: 'Opções',
        temas: {
            gruta: ['Gruta dos Palhares', 'Caverna de arenito, piscinas e parque'],
            desemboque: ['Desemboque', 'Berço do Triângulo Mineiro'],
            basilica: ['Basílica', 'Fé, torres e relógio alemão'],
            cachoeiras: ['Cachoeiras', 'Ecoturismo e banhos'],
            colegio: ['Colégio Allan Kardec', 'Eurípedes e educação'],
            personalidades: ['Personalidades', 'Carolina, Eurípedes e Lima Duarte']
        }
    },
    en: {
        htmlLang: 'en',
        title: 'Citypass Sacramento',
        metaDesc: 'Citypass Sacramento: explore the city sights with the assistant.',
        headerSub: 'Your local assistant in Sacramento - MG',
        badge: 'AI online',
        temasLabel: 'Choose a theme to explore',
        placeholder: 'Choose a theme above.',
        think: ['Thinking...', 'Writing answer...'],
        welcomeDesc: 'Explore the Palhares Grotto, Desemboque, the Basilica, the Waterfalls, the Allan Kardec School and the Local Figures of Sacramento.',
        start: 'Start',
        ariaTemas: 'Themes',
        ariaChat: 'Answer',
        ariaOpts: 'Options',
        temas: {
            gruta: ['Palhares Grotto', 'Sandstone cave, pools and park'],
            desemboque: ['Desemboque', 'Birthplace of the Triângulo Mineiro'],
            basilica: ['Basilica', 'Faith, towers and German clock'],
            cachoeiras: ['Waterfalls', 'Ecotourism and swimming'],
            colegio: ['Allan Kardec School', 'Eurípedes and education'],
            personalidades: ['Local Figures', 'Carolina, Eurípedes and Lima Duarte']
        }
    },
    es: {
        htmlLang: 'es',
        title: 'Citypass Sacramento',
        metaDesc: 'Citypass Sacramento: explora los puntos turísticos de la ciudad con el asistente.',
        headerSub: 'Tu asistente local en Sacramento - MG',
        badge: 'IA en línea',
        temasLabel: 'Elige un tema para explorar',
        placeholder: 'Elige un tema arriba.',
        think: ['Pensando...', 'Escribiendo respuesta...'],
        welcomeDesc: 'Explora la Gruta de Palhares, Desemboque, la Basílica, las Cascadas, el Colegio Allan Kardec y las Personalidades de Sacramento.',
        start: 'Comenzar',
        ariaTemas: 'Temas',
        ariaChat: 'Respuesta',
        ariaOpts: 'Opciones',
        temas: {
            gruta: ['Gruta de Palhares', 'Caverna de arenisca, piscinas y parque'],
            desemboque: ['Desemboque', 'Cuna del Triângulo Mineiro'],
            basilica: ['Basílica', 'Fe, torres y reloj alemán'],
            cachoeiras: ['Cascadas', 'Ecoturismo y baños'],
            colegio: ['Colegio Allan Kardec', 'Eurípedes y educación'],
            personalidades: ['Personalidades', 'Carolina, Eurípedes y Lima Duarte']
        }
    },
    fr: {
        htmlLang: 'fr',
        title: 'Citypass Sacramento',
        metaDesc: "Citypass Sacramento : explorez les sites de la ville avec l'assistant.",
        headerSub: 'Votre assistant local à Sacramento - MG',
        badge: 'IA en ligne',
        temasLabel: 'Choisissez un thème à explorer',
        placeholder: 'Choisissez un thème ci-dessus.',
        think: ['Réflexion...', 'Rédaction de la réponse...'],
        welcomeDesc: "Explorez la Grotte de Palhares, Desemboque, la Basilique, les Cascades, l'École Allan Kardec et les Personnalités de Sacramento.",
        start: 'Commencer',
        ariaTemas: 'Thèmes',
        ariaChat: 'Réponse',
        ariaOpts: 'Options',
        temas: {
            gruta: ['Grotte de Palhares', 'Grotte de grès, piscines et parc'],
            desemboque: ['Desemboque', 'Berceau du Triângulo Mineiro'],
            basilica: ['Basilique', 'Foi, tours et horloge allemande'],
            cachoeiras: ['Cascades', 'Écotourisme et baignade'],
            colegio: ['Collège Allan Kardec', 'Eurípedes et éducation'],
            personalidades: ['Personnalités', 'Carolina, Eurípedes et Lima Duarte']
        }
    }
};
