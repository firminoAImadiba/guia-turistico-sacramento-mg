'use strict';
/* Dados das correntes de conversa - gerado a partir de tcc/nos/*.txt (6 temas x 36 nos = 216). Nao editar a mao. */
const NOS_DATA = {
 "gruta": [
  {
   "num": "01",
   "text": "Seja bem-vindo ao módulo de exploração da monumental Gruta dos Palhares, a maior caverna de arenito Botucatu das Américas!\nLocalizada a cerca de 10 a 12 km do centro de Sacramento, na Rodovia Antenor Duarte Vilela, a gruta é o cartão-postal natural mais famoso do Triângulo Mineiro.\nO local surpreende logo na chegada por sua grandiosidade geológica, formada no período Jurássico-Cretáceo há milhões de anos.\nSua entrada monumental conta com um pórtico gigante de 22 metros de altura, equivalente a um prédio de sete andares.\nO primeiro salão interno é gigantesco e possui capacidade estimada para abrigar confortavelmente até 5.000 pessoas reunidas.\nHistoricamente descoberta em meados do século XIX, a caverna serviu de inspiração, reflexão e meditação para Eurípedes Barsanulfo.\nA área externa do parque foi totalmente urbanizada, oferecendo piscinas de água natural corrente, restaurante típico mineiro e bosquetes preservados.\nAlém disso, as reentrâncias de rocha servem de santuário ecológico para colônias de maritacas, andorinhas e papagaios nativos do Cerrado.\nProtegida por tombamento municipal desde 1989 e regulamentada pela Lei nº 340/1991, é um patrimônio inestimável de Minas Gerais.\nComo você deseja iniciar a nossa jornada virtual pelos mistérios e atrações da Gruta dos Palhares?",
   "question": "Por qual aspecto da Gruta dos Palhares você gostaria de começar nossa visita guiada?",
   "optA": {
    "label": "Quero conhecer os detalhes geológicos e as galerias profundas da caverna.",
    "target": "02",
    "cross": null,
    "raw": "Ir para NÓ 02"
   },
   "optB": {
    "label": "Prefiro saber sobre a infraestrutura de lazer, piscinas e visitação no parque.",
    "target": "03",
    "cross": null,
    "raw": "Ir para NÓ 03"
   }
  },
  {
   "num": "02",
   "text": "A formação rochosa da Gruta dos Palhares é composta por arenito Botucatu, uma rocha sedimentar originada de antigos desertos pré-históricos.\nDiferente das cavernas calcárias tradicionais que possuem estalactites, as paredes de arenito têm textura granular e coloração avermelhada característica.\nA extensão total mapeada por espeleólogos atinge aproximadamente 450 metros de profundidade desdobrando-se em diversas galerias secundárias.\nEntretanto, a rocha de arenito apresenta altíssima fragilidade estrutural e grande sensibilidade aos processos de erosão e desgaste.\nPor motivos de segurança pública contra desabamentos e para preservação do microclima interno, o acesso livre restringe-se ao salão principal.\nO salão de entrada conta com iluminação artística especial que realça as formas e os contornos esculpidos pela natureza ao longo das eras.\nAs galerias mais profundas continuam fechadas ao público geral, sendo reservadas estritamente para pesquisas científicas e acadêmicas autorizadas.\nDentro do grande salão, a temperatura permanece agradável e constante durante todo o ano, criando um refúgio do calor do Cerrado.\nMonitoramentos constantes garantem que o fluxo de visitantes não comprometa a estabilidade nem a fauna subterrânea da cavidade rochosa.\nO que você acha mais interessante investigar sobre o ecossistema e as lendas da gruta?",
   "question": "Qual mistério geológico ou ambiental você quer desvendar agora?",
   "optA": {
    "label": "Quero entender a fauna de aves que habita os paredões da caverna.",
    "target": "04",
    "cross": null,
    "raw": "Ir para NÓ 04"
   },
   "optB": {
    "label": "Quero saber quais personalidades históricas já exploraram esta caverna.",
    "target": "05",
    "cross": null,
    "raw": "Ir para NÓ 05"
   }
  },
  {
   "num": "03",
   "text": "O Parque Municipal da Gruta dos Palhares foi estruturado para receber famílias e turistas com conforto durante todo o dia.\nSua atração mais popular na área externa são as piscinas de água natural e corrente, abastecidas pelas nascentes do próprio complexo.\nA água é límpida, gelada e extremamente renovável, sendo uma excelente opção para se refrescar após a caminhada pelo parque.\nPara a gastronomia, o complexo dispõe de restaurante à la carte especializado na autêntica e farta culinária mineira de fogão a lenha.\nHá também lanchonetes rápidas, sorveterias e quiosques espalhados pelas áreas sombreadas do bosque para pequenos lanches.\nAs crianças contam com um parque infantil completo montado sobre a grama, em meio a árvores nativas do bioma Cerrado.\nPara o acesso ao parque e utilização das dependências, é cobrada uma taxa simbólica de manutenção de aproximadamente R$ 10,00 por visitante.\nVale ressaltar que é rigorosamente proibido entrar na caverna transportando alimentos ou bebidas para evitar contaminação do solo.\nÉ o destino ideal para quem busca aliar a contemplação da natureza com uma estrutura completa de lazer e descanso.\nGostaria de detalhar os serviços do parque ou entender a localização e transporte?",
   "question": "O que você quer conferir sobre a experiência prática dentro do parque?",
   "optA": {
    "label": "Quero ver as regras de visitação, horários e dicas de segurança.",
    "target": "06",
    "cross": null,
    "raw": "Ir para NÓ 06"
   },
   "optB": {
    "label": "Quero descobrir como chegar e a localização exata no mapa.",
    "target": "07",
    "cross": null,
    "raw": "Ir para NÓ 07"
   }
  },
  {
   "num": "04",
   "text": "Os paredões externos e a boca monumental do salão da Gruta dos Palhares abrigam um verdadeiro berçário natural de avifauna.\nNas frestas, reentrâncias e pequenas saliências do arenito, milhares de aves encontraram o local perfeito para abrigo e nidificação.\nO destaque fica para as ruidosas colônias de maritacas e papagaios que fazem ecoar seus cantos por toda a extensão do vale ao amanhecer.\nAo final da tarde, acontece o espetáculo do regresso das andorinhas, que dão rasantes impressionantes antes de adentrar a gruta.\nA presença dessas aves em grande densidade transforma a visitação em um ponto de atração para observadores de pássaros e fotógrafos.\nBiólogos e ambientalistas monitoram periodicamente as espécies para garantir que o ruído dos turistas não afete a reprodução dos animais.\nA vegetação ao redor da gruta atua como corredor ecológico, fornecendo frutos do Cerrado como pequi e baru para a alimentação das aves.\nRespeitar o silêncio nas proximidades dos ninhos é uma das normas fundamentais repassadas aos guias e visitantes do parque.\nEssa integração harmoniosa entre a caverna física e a vida silvestre torna o passeio uma aula viva de ecologia regional.\nQuer avançar para entender a vegetação do entorno ou prefere conhecer as lendas do local?",
   "question": "Qual caminho ecológico ou histórico vamos seguir a seguir?",
   "optA": {
    "label": "Quero conhecer a flora nativa do Cerrado que cerca a Gruta.",
    "target": "08",
    "cross": null,
    "raw": "Ir para NÓ 08"
   },
   "optB": {
    "label": "Quero saber quais histórias e lendas envolvem o interior da caverna.",
    "target": "09",
    "cross": null,
    "raw": "Ir para NÓ 09"
   }
  },
  {
   "num": "05",
   "text": "A magnitude da Gruta dos Palhares atraiu, ao longo das décadas, personalidades de destaque da história, ciência e cultura brasileira.\nUm dos visitantes mais ilustres foi Alberto Santos Dumont, o pai da aviação, que encantou-se com a imponência do portal de entrada.\nO renomado escritor Monteiro Lobato também esteve no local, registrando impressões sobre a beleza cênica do arenito e a energia da região.\nNa esfera espiritual e educacional, o médium e professor Eurípedes Barsanulfo frequentava assiduamente o salão principal da caverna.\nBarsanulfo buscava a tranquilidade e a acústica do salão rochoso para momentos de leitura profunda, reflexão e preces silenciosas.\nPesquisadores e geólogos internacionais visitam o local até hoje para estudar a resistência e a erosão do arenito Botucatu.\nA Gruta também serviu de cenário para produções audiovisuais, documentários ambientais e ensaios fotográficos de expressão nacional.\nEssa rica bagagem cultural e histórica agregou valor imaterial à caverna, tornando-a um ponto de convergência de ideias e saberes.\nCada cantinho do salão iluminado guarda a memória dessas grandes figuras que caminharam sobre suas pedras no passado.\nQuer saber mais sobre o legado de Eurípedes na gruta ou sobre a preservação oficial do monumento?",
   "question": "Qual aspecto da memória da caverna você quer explorar agora?",
   "optA": {
    "label": "Quero entender a relação espiritual de Eurípedes Barsanulfo com a Gruta.",
    "target": "10",
    "cross": null,
    "raw": "Ir para NÓ 10"
   },
   "optB": {
    "label": "Quero detalhes sobre como o município protegeu a caverna por lei.",
    "target": "11",
    "cross": null,
    "raw": "Ir para NÓ 11"
   }
  },
  {
   "num": "06",
   "text": "Para garantir a preservação do ecossistema e a segurança de todos, o Parque da Gruta adota normas claras de visitação.\nO horário usual de funcionamento do complexo vai de terça-feira a domingo, das 08h às 17h, com encerramento das piscinas um pouco antes.\nA taxa de entrada de R$ 10,00 destina-se à manutenção da limpeza, segurança patrimonial e conservação dos jardins e banheiros.\nDentro do salão da caverna, é terminantemente proibido fumar, utilizar caixas de som de alta intensidade ou descartar qualquer resíduo.\nRecomenda-se aos visitantes o uso de calçados fechados e confortáveis com solado antiderrapante para caminhada nas áreas rochosas.\nApesar do piso no salão inicial ser plano e de fácil navegação, a umidade natural da rocha exige atenção contra escorregões.\nCapacetes de proteção não são obrigatórios no salão iluminado, mas o acesso além da linha demarcada é bloqueado por correntes.\nO parque conta com monitores preparados para orientar turistas sobre os limites de acesso e a história de cada ponto da caverna.\nEssas medidas garantem que a Gruta dos Palhares continue intacta para as próximas gerações de moradores e turistas de Sacramento.\nDeseja saber mais sobre as opções de alimentação dentro do parque ou dicas para crianças?",
   "question": "Como podemos detalhar sua visita para torná-la ainda mais confortável?",
   "optA": {
    "label": "Quero ver os detalhes do restaurante e cardápio de comidas típicas.",
    "target": "12",
    "cross": null,
    "raw": "Ir para NÓ 12"
   },
   "optB": {
    "label": "Quero saber sobre a acessibilidade e estrutura para crianças e idosos.",
    "target": "13",
    "cross": null,
    "raw": "Ir para NÓ 13"
   }
  },
  {
   "num": "07",
   "text": "A Gruta dos Palhares está situada estrategicamente na Zona Rural de Sacramento, a uma distância de aproximadamente 10 a 12 km do centro.\nO acesso é feito de forma rápida e totalmente pavimentada pela Rodovia Antenor Duarte Vilela, com excelente sinalização viária.\nSaindo da praça central da cidade, o trajeto de carro ou ônibus leva cerca de 15 minutos em velocidade cruzeiro e com belas paisagens.\nO parque oferece um amplo estacionamento próprio e gratuito para carros de passeio, motos e ônibus de excursão escolar ou turística.\nPara quem não está de carro próprio, há opções de táxi, transporte por aplicativo e linhas de transporte rural em horários específicos.\nA aproximação do parque é marcada pela mudança da vegetação e pelo surgimento dos paredões rochosos ao fundo do vale verdejante.\nO portal de entrada do parque conta com recepção física, guichê para pagamento de taxa e mapas informativos sobre o complexo.\nA proximidade com a sede urbana facilita fazer um passeio de meio período na gruta e almoçar ou passear no centro histórico à tarde.\nÉ o ponto de partida perfeito para quem está começando a explorar as maravilhas do município de Sacramento.\nQuer continuar explorando o entorno rural ou saber sobre o clima na região?",
   "question": "Qual informação de deslocamento ou logística você precisa agora?",
   "optA": {
    "label": "Quero conhecer outros atrativos próximos situados na mesma rodovia.",
    "target": "14",
    "cross": null,
    "raw": "Ir para NÓ 14"
   },
   "optB": {
    "label": "Quero saber a melhor época do ano e clima para visitar a Gruta.",
    "target": "15",
    "cross": null,
    "raw": "Ir para NÓ 15"
   }
  },
  {
   "num": "08",
   "text": "O entorno do Parque Municipal da Gruta dos Palhares é envolvido por remanescentes muito bem preservados do bioma Cerrado.\nO visitante pode contemplar árvores cascas-grossas, galhos contorcidos e folhas rígidas, típicas da vegetação de savana brasileira.\nEspécies como o pequi, o barbatimão, a ipê-amarelo e o pau-terra ornamentam a paisagem e florescem em diferentes épocas do ano.\nDurante a primavera, a florada dos ipês transforma o contraste das pedras avermelhadas com o céu azul em um cenário fotográfico único.\nO solo arenoso ao redor da gruta retém pouca água na superfície, permitindo a sobrevivência de vegetações adaptadas à seca.\nPequenos mamíferos como micos, esquilos (caxinguelês) e quatis são vistos com frequência transitando pelas copas dos arvoredos.\nO parque mantém trilhas de caminhada leve em meio a esse bosque para que o visitante possa praticar banho de floresta e contemplação.\nA preservação dessa mata de galeria é crucial para manter o fluxo d'água cristalina que alimenta as piscinas naturais do parque.\nÉ uma oportunidade ímpar para estudantes e entusiastas da botânica estudarem o Cerrado em seu estado nativo e protegido.\nQuer ver mais sobre a origem das águas das piscinas ou sobre passeios em trilhas?",
   "question": "Qual elemento da natureza da Gruta dos Palhares te chama mais atenção?",
   "optA": {
    "label": "Quero entender como funcionam as nascentes e as piscinas do parque.",
    "target": "16",
    "cross": null,
    "raw": "Ir para NÓ 16"
   },
   "optB": {
    "label": "Quero saber sobre as trilhas ecológicas de caminhada no parque.",
    "target": "17",
    "cross": null,
    "raw": "Ir para NÓ 17"
   }
  },
  {
   "num": "09",
   "text": "Ao longo dos mais de cem anos de exploração, a Gruta dos Palhares acumulou um rico acervo de narrativas do imaginário popular.\nAntigos moradores relatam histórias sobre o som do vento nas frestas das rochas, que em noites calmas lembra um suave sussurro afinado.\nOutra lenda famosa fala sobre passagens secretas não mapeadas que supostamente conectariam a gruta a outras cavidades da região da Canastra.\nEmbora a ciência comprove que as galerias terminam em bloqueios de rocha e areia aos 450 metros, o mito da passagem longa persiste.\nTropeiros do século XIX contavam que o salão principal servia de abrigo seguro contra tempestades avassaladoras durante suas longas viagens.\nA excelente acústica do grande vão rochoso também alimentou contos sobre ecos misteriosos e orquestras invisíveis tocando no interior.\nA própria iluminação natural que entra pela entrada de 22 metros cria fachos de luz cênicos que parecem portais de energia natural.\nEssas histórias são transmitidas entre gerações e contadas com entusiasmo pelos guias locais aos grupos de estudantes e turistas.\nMitos e fatos científicos se misturam, enriquecendo a magia de caminhar sob o enorme teto de arenito Botucatu.\nQuer explorar o aspecto acústico do salão ou continuar ouvindo sobre o folclore de Sacramento?",
   "question": "Quer se aprofundar na ciência do som da gruta ou nas tradições locais?",
   "optA": {
    "label": "Quero entender a acústica do salão e como ela é usada para eventos.",
    "target": "18",
    "cross": null,
    "raw": "Ir para NÓ 18"
   },
   "optB": {
    "label": "Quero ver outras tradições culturais e folclóricas de Sacramento.",
    "target": "19",
    "cross": null,
    "raw": "Ir para NÓ 19"
   }
  },
  {
   "num": "10",
   "text": "A ligação de Eurípedes Barsanulfo com a Gruta dos Palhares é um dos capítulos mais tocantes do patrimônio imaterial de Sacramento.\nNo início do século XX, o educador caminhava rotineiramente até a caverna para buscar o isolamento necessário às suas reflexões filosóficas.\nSob a proteção do arenito, Eurípedes lia obras clássicas, preparava suas aulas revolucionárias e realizava suas preces e meditações.\nO ambiente fresco e silencioso do salão natural servia como refúgio renovador diante de sua intensa rotina na cidade e no colégio.\nMuitos dos seus seguidores e alunos registram em biografias que Eurípedes encontrava na Gruta uma profunda sintonização com a natureza.\nAinda hoje, caravanas de adeptos do espiritismo de todo o Brasil e do exterior visitam a gruta para conhecer o espaço de meditação do mestre.\nExiste um respeito quase sagrado mantido pelos visitantes no canto do salão onde o educador costumava se sentar para ler seus livros.\nA presença de Eurípedes consolida a Gruta dos Palhares não apenas como um ponto turístico natural, mas como um marco de paz espiritual.\nEssa atmosfera de tranquilidade é percebida por quase todas as pessoas que adentram o monumental pórtico de entrada.\nDeseja conhecer mais sobre a obra de Eurípedes na cidade ou sobre o turismo religioso?",
   "question": "Qual vertente do legado espiritual da cidade você prefere investigar?",
   "optA": {
    "label": "Quero saber sobre o Colégio Allan Kardec fundado por Eurípedes no centro.",
    "target": "20",
    "cross": null,
    "raw": "Ir para NÓ 20"
   },
   "optB": {
    "label": "Quero ver o panorama geral do turismo religioso e de fé em Sacramento.",
    "target": "21",
    "cross": null,
    "raw": "Ir para NÓ 21"
   }
  },
  {
   "num": "11",
   "text": "A proteção jurídica da Gruta dos Palhares começou formalmente com o Decreto Municipal de Tombamento promulgado em 07 de novembro de 1989.\nAnos depois, o Poder Legislativo de Sacramento reforçou a tutela ambiental e cultural criando a Lei Municipal nº 340 em 1991.\nEsses instrumentos legais transformaram a área em Parque Municipal, proibindo qualquer tipo de exploração minerária de arenito no perímetro.\nA lei estabeleceu normas rígidas de ocupação do solo ao redor da caverna, impedindo desmatamentos e construções desordenadas.\nO Tombamento reconhece a gruta como bem de valor paisagístico, geológico, histórico e científico inestimável para a comunidade local.\nGraças a esse rigor normativo, a Gruta dos Palhares mantém sua integridade física sem pichações ou danos graves nas paredes rochosas.\nConselhos Municipais de Meio Ambiente e de Patrimônio Cultural fiscalizam constantemente o plano de manejo da unidade de conservação.\nA taxa de entrada arrecadada é gerida com foco na manutenção desses padrões rígidos de conservação e sustentabilidade do parque.\nÉ um exemplo de como a legislação municipal pode salvar uma maravilha natural do impacto do turismo predatório.\nQuer saber mais sobre projetos ambientais no parque ou sobre o suporte ao visitante?",
   "question": "Qual aspecto da gestão sustentável do parque você gostaria de conhecer?",
   "optA": {
    "label": "Quero ver como funcionam os projetos ambientais de educação no parque.",
    "target": "22",
    "cross": null,
    "raw": "Ir para NÓ 22"
   },
   "optB": {
    "label": "Quero detalhes sobre a estrutura do centro de visitantes e recepção.",
    "target": "23",
    "cross": null,
    "raw": "Ir para NÓ 23"
   }
  },
  {
   "num": "12",
   "text": "O restaurante do Parque Municipal da Gruta dos Palhares é uma atração à parte para quem aprecia a verdadeira culinária de Minas Gerais.\nInstalado em uma estrutura rústica e arejada com vista para o bosque, ele serve pratos farto preparados com tempero caseiro tradicional.\nO cardápio destaca iguarias como o frango ao molho pardo, tutu de feijão, costelinha de porco pururucada e linguiça artesanal local.\nAos finais de semana e feriados, o almoço costuma ser servido no sistema de buffet livre sobre o tradicional fogão a lenha.\nPara acompanhar as refeições, são oferecidos sucos naturais de frutas da estação e cervejas artesanais produzidas na região do Triângulo.\nA área de sobremesas faz jus à fama da cidade, apresentando doces de leite cristalizados, compotas de figo e goiabada caseira.\nAo lado do restaurante, pequenas lanchonetes vendem pão de queijo quentinho, pastel na hora, sorvetes de frutas do Cerrado e água de coco.\nA estrutura comporta com tranquilidade grandes grupos de excursão, mediante agendamento prévio com a administração do parque.\nAlmoçar ao som dos pássaros e com a brisa da gruta é um dos pontos altos de toda a viagem a Sacramento.\nDeseja conhecer outros locais famosos para comer na cidade ou saber sobre a produção de doces?",
   "question": "Qual detalhe da gastronomia de Sacramento você quer explorar a seguir?",
   "optA": {
    "label": "Quero saber onde encontrar os melhores doces e queijos na cidade.",
    "target": "24",
    "cross": null,
    "raw": "Ir para NÓ 24"
   },
   "optB": {
    "label": "Quero ver as opções de hospedagem próximas ao restaurante da Gruta.",
    "target": "25",
    "cross": null,
    "raw": "Ir para NÓ 25"
   }
  },
  {
   "num": "13",
   "text": "O Parque da Gruta dos Palhares foi planejado para oferecer acessibilidade e conforto para visitantes de todas as idades.\nA partir do estacionamento até a praça central do parque e restaurante, o piso é calçado e possui rampas de suave inclinação.\nPessoas da terceira idade e cadeirantes encontram caminhos pavimentados que levam até bem próximo do portal de entrada da caverna.\nO acesso ao interior do salão principal é plano e sem degraus complexos, facilitando a locomoção de carrinhos de bebê e mobilidade reduzida.\nA área dos banheiros é equipada com sanitários adaptados e fraldários limpos para atendimento de famílias com crianças pequenas.\nPara os pequenos, além da piscina infantil de águas rasas, há um playground ao ar livre sobre gramado sombreado e protegido.\nBancos de descanso em madeira e alvenaria estão posicionados estrategicamente por todo o percurso entre as árvores do bosque.\nEquipes de apoio e brigadistas permanecem no local nos dias de maior movimento para garantir auxílio rápido em qualquer emergência.\nÉ um passeio totalmente democrático, seguro e acolhedor para reunir várias gerações da mesma família em um só dia.\nQuer ver dicas de vestuário e preparação para o passeio ou sobre fotografias no local?",
   "question": "Qual orientação prática deixará seu passeio mais seguro e proveitoso?",
   "optA": {
    "label": "Quero dicas de roupas, calçados e equipamentos para levar no dia.",
    "target": "26",
    "cross": null,
    "raw": "Ir para NÓ 26"
   },
   "optB": {
    "label": "Quero sugestões dos melhores ângulos para tirar fotos incríveis da gruta.",
    "target": "27",
    "cross": null,
    "raw": "Ir para NÓ 27"
   }
  },
  {
   "num": "14",
   "text": "A Rodovia Antenor Duarte Vilela, que conecta Sacramento à Gruta dos Palhares, abriga outros pontos de interesse rural e natural.\nAo longo dos seus 12 km de extensão, o visitante contempla fazendas centenárias dedicadas à cafeicultura e à pecuária leiteira.\nHá propriedades rurais no entorno que abrem suas portas para a venda direta do famoso Queijo Minas Artesanal da Canastra.\nPequenos alambiques familiares e tendas de doces caseiros funcionam nas margens da pista, oferecendo degustação gratuita de produtos.\nMirantes naturais dispostos nas curvas da rodovia permitem avistar o vale do Rio Borá e os contornos recortados da Serra da Canastra ao fundo.\nPara os amantes do ciclismo de estrada e mountain bike, a rodovia é uma das rotas favoritas da região devido ao relevo ondulado e bonito.\nDá para combinar a visita à Gruta com uma parada estratégica para compras rurais e fotos nas pontes e riachos do trajeto.\nA viagem de volta ao centro urbano revela o contraste perfeito entre a tranquilidade da roça e o patrimônio arquitetônico da cidade.\nÉ um corredor turístico que sintetiza a vocação rural e acolhedora do município mineiro.\nDeseja saber mais sobre as fazendas de queijo Canastra ou sobre rotas de ciclismo?",
   "question": "Qual experiência ao longo do caminho você deseja explorar agora?",
   "optA": {
    "label": "Quero entender como funciona a visitação nas fazendas produtoras de queijo.",
    "target": "28",
    "cross": null,
    "raw": "Ir para NÓ 28"
   },
   "optB": {
    "label": "Quero dicas sobre trilhas de bike e caminhadas ecológicas no vale.",
    "target": "29",
    "cross": null,
    "raw": "Ir para NÓ 29"
   }
  },
  {
   "num": "15",
   "text": "A Gruta dos Palhares pode ser visitada durante os doze meses do ano, mas cada estação oferece uma experiência diferente ao turista.\nDurante os meses de inverno (de maio a agosto), o clima é seco, os dias são ensolarados e a visibilidade na rodovia é perfeita.\nNessa época fria, as águas das piscinas ficam bem geladas, tornando o passeio focado na contemplação da caverna e almoço típico.\nJá no verão (de dezembro a março), o calor é intenso e as chuvas tropicais deixam a vegetação do Cerrado com um verde exuberante.\nÉ no verão que as piscinas de água natural do parque atingem seu ápice de visitação, oferecendo um alívio térmico perfeito.\nPara fotografia, os meses de setembro e outubro são fantásticos devido à floração dos ipês e ao céu azul sem nuvens do cerrado.\nRecomenda-se chegar logo pela manhã, por volta das 09h, para pegar o parque mais tranquilo e ter melhor iluminação solar dentro da gruta.\nA iluminação natural penetra com maior intensidade no salão entre às 10h e 13h, criando reflexos dourados nas paredes de arenito.\nIndependentemente do mês escolhido, a gruta mantém sua temperatura interna agradável e acolhedora para os visitantes.\nQuer saber como fica o movimento nos feriados nacionais ou dicas de roteiro de 1 dia?",
   "question": "Como você prefere planejar a data da sua visita à Gruta dos Palhares?",
   "optA": {
    "label": "Quero ver um roteiro recomendado para aproveitar 1 dia inteiro em Sacramento.",
    "target": "30",
    "cross": null,
    "raw": "Ir para NÓ 30"
   },
   "optB": {
    "label": "Quero saber como evitar filas e dias de maior aglomeração no parque.",
    "target": "31",
    "cross": null,
    "raw": "Ir para NÓ 31"
   }
  },
  {
   "num": "16",
   "text": "As águas cristalinas que abastecem as piscinas e duchas do Parque da Gruta têm origem em nascentes protegidas do alto do morro.\nO solo arenoso atua como um filtro natural gigantesco, purificando a água da chuva enquanto ela percola pelas camadas rochosas.\nAs nascentes emergem limpas e puras na superfície, sendo canalizadas com cuidado para alimentar os tanques de banho do parque.\nComo a água é corrente e não estagnada, não há necessidade de adição maciça de produtos químicos como o cloro das piscinas urbanas.\nA sensação de se banhar em uma piscina de água natural viva é revitalizante, deixando a pele limpa e a mente renovada.\nO excedente das piscinas segue por calhas naturais até desaguar no córrego local que ajuda a encorpar a bacia do Rio Borá.\nA qualidade dessas águas é testada periodicamente pelas autoridades sanitárias para garantir total segurança aos banhistas.\nO som suave da água caindo nas duchas do parque combina harmonicamente com o canto das maritacas nos paredões da caverna.\nÉ uma das experiências sensoriais mais elogiadas por quem visita o complexo turístico nos dias quentes de verão.\nQuer saber mais sobre os rios e cachoeiras de Sacramento ou sobre passeios de aventura?",
   "question": "Quer expandir seu passeio para as grandes cachoeiras da região de Sacramento?",
   "optA": {
    "label": "Quero conhecer as principais cachoeiras catalogadas no município.",
    "target": "32",
    "cross": null,
    "raw": "Ir para NÓ 32"
   },
   "optB": {
    "label": "Quero detalhes sobre a bacia hidrográfica e a represa do Rio Grande.",
    "target": "33",
    "cross": null,
    "raw": "Ir para NÓ 33"
   }
  },
  {
   "num": "17",
   "text": "Além da visita ao salão da caverna, o Parque Municipal da Gruta dos Palhares oferece trilhas curtas de caminhada em seu perímetro.\nSão caminhos sombreados pela mata de galeria que contornam a base do paredão rochoso e levam a mirantes de observação da flora.\nAs trilhas têm nível de dificuldade fácil, sendo totalmente adequadas para iniciantes, idosos e grupos de crianças em idade escolar.\nAo longo do trajeto, placas explicativas identificam as árvores nativas do Cerrado pelo nome popular e nome científico.\nEm alguns pontos altos do percurso, é possível avistar todo o vale e observar a fenda monumental da entrada da gruta por outro ângulo.\nO ar puro do bosque e o contato com a terra batida proporcionam uma imersão relaxante em meio à natureza preservada.\nRecomenda-se caminhar sem pressa, prestando atenção nos sons da floresta, como o estalar dos galhos e o canto dos pássaros.\nGuias locais podem ser contratados para grupos que desejam uma aula mais aprofundada sobre a ecologia e geologia do parque.\nÉ um complemento perfeito para quem quer exercitar o corpo e descansar a mente longe do barulho da cidade.\nQuer saber sobre outras trilhas mais longas no município ou sobre esportes de aventura?",
   "question": "Qual tipo de caminhada ou esporte de natureza você busca na região?",
   "optA": {
    "label": "Quero saber sobre trilhas de nível moderado em cânions e cachoeiras.",
    "target": "34",
    "cross": null,
    "raw": "Ir para NÓ 34"
   },
   "optB": {
    "label": "Quero dicas de esportes radicais como rapel e canionismo nas proximidades.",
    "target": "35",
    "cross": null,
    "raw": "Ir para NÓ 35"
   }
  },
  {
   "num": "18",
   "text": "A acústica do salão de entrada da Gruta dos Palhares é um fenômeno fascinante proporcionado pelo formato côncavo do teto de arenito.\nO grande vão funciona como uma caixa de ressonância natural que amplia suavemente os sons produzidos em seu interior sem distorção.\nEm ocasiões especiais no passado, o salão já foi palco de apresentações de corais, recitais de violino e apresentações acústicas.\nO efeito do som ecoando nas paredes de pedra de 22 metros de altura cria uma atmosfera solene e emocionante para os ouvintes.\nDurante a visitação normal, o tom de voz deve ser mantido moderado para que todos possam desfrutar do ambiente sem poluição sonora.\nQuando uma pessoa sussurra em determinada parede da entrada, a onda sonora pode ser ouvida com clareza a vários metros de distância.\nEurípedes Barsanulfo aproveitava essa qualidade acústica para declamar trechos de obras educativas e ensinar seus alunos ao ar livre.\nMúsicos e estudantes de física costumam admirar a forma como as frequências graves e agudas se comportam dentro do arenito.\nÉ uma experiência auditiva que se soma ao impacto visual da grandiosidade da caverna.\nDeseja saber como a prefeitura organiza eventos culturais na gruta ou no centro histórico?",
   "question": "Qual lado da programação cultural de Sacramento você deseja conhecer?",
   "optA": {
    "label": "Quero conhecer os eventos culturais e festas tradicionais da cidade.",
    "target": "36",
    "cross": null,
    "raw": "Ir para NÓ 36"
   },
   "optB": {
    "label": "Quero voltar e revisar os dados técnicos e dimensões da Gruta dos Palhares.",
    "target": "01",
    "cross": null,
    "raw": "Ir para NÓ 01"
   }
  },
  {
   "num": "19",
   "text": "Sacramento é uma cidade rica em manifestações folclóricas, religiosidade popular e tradições mantidas há mais de um século.\nAlém da Gruta dos Palhares, o município celebra festas tradicionais como a Folia de Reis e as Congadas no segundo semestre.\nGrupos de congo e moçambique percorrem as ruas do centro com suas fardas coloridas, tambores e cantos em louvor a São Benedito.\nA gastronomia de rua também reflete essa identidade, com quitandadeiras vendendo biscoitos de polvilho, broas e queijo fresco.\nNo Distrito do Desemboque, a tradicional Festa de Nossa Senhora do Desterro resgata a cultura dos antigos tropeiros do Ouro.\nA literatura de cordel, as contações de causos na praça e a produção de artesanato em madeira e tecelagem completam o cenário.\nToda essa rica herança cultural está conectada com a história da ocupação do Triângulo Mineiro e do Alto Paranaíba.\nQuem visita a Gruta dos Palhares é convidado a esticar a viagem e imergir nessas manifestações vivas do povo sacramentano.\nÉ uma verdadeira viagem no tempo e na identidade cultural do interior de Minas Gerais.\nQuer conhecer o núcleo histórico do Desemboque ou o centro de artesanato da cidade?",
   "question": "Qual polo cultural de Sacramento você deseja explorar a seguir?",
   "optA": {
    "label": "Quero conhecer a história do Povoado do Desemboque, o berço do Triângulo.",
    "target": "09",
    "cross": "desemboque",
    "raw": "Ir para NÓ 09 (Gira para Desemboque)"
   },
   "optB": {
    "label": "Quero ver os detalhes da Estação dos Bondes e venda de artesanato local.",
    "target": "24",
    "cross": null,
    "raw": "Ir para NÓ 24"
   }
  },
  {
   "num": "20",
   "text": "O Colégio Allan Kardec, fundado por Eurípedes Barsanulfo em 1902, é um dos marcos mais importantes da história de Sacramento.\nFoi a primeira instituição de ensino do mundo a aplicar abertamente a pedagogia espírita no ensino de crianças e jovens.\nLocalizado na sede urbana de Sacramento, o colégio ofereceu instrução primária e secundária gratuita para milhares de alunos carentes.\nO edifício histórico é preservado e funciona como memorial cultural, recebendo visitantes e pesquisadores da educação e filosofia.\nNo interior, pode-se visitar o Pátio das Mangueiras e o Jasmineiro, locais arborizados onde Eurípedes ministrava aulas ao ar livre.\nO acervo do museu do colégio conserva cadernos originais, fotos da época, mobília do século XX e documentos históricos da instituição.\nA filosofia de ensino de Eurípedes unia a ciência, a moral, a natureza e a espiritualidade de forma inovadora para a época.\nO percurso da Gruta dos Palhares até o Colégio Allan Kardec é um roteiro clássico de turismo pedagógico e espiritual na cidade.\nÉ um local de profunda reflexão sobre o poder da educação transformadora e do amor ao próximo.\nQuer saber mais sobre o Museu Histórico da cidade ou sobre a Basílica Matriz?",
   "question": "Qual outro monumento do centro urbano de Sacramento você quer visitar?",
   "optA": {
    "label": "Quero conhecer a Basílica de Nossa Senhora do Patrocínio e sua arquitetura.",
    "target": "21",
    "cross": null,
    "raw": "Ir para NÓ 21"
   },
   "optB": {
    "label": "Quero saber o que ver no Museu Histórico Corália Venites Maluf.",
    "target": "23",
    "cross": null,
    "raw": "Ir para NÓ 23"
   }
  },
  {
   "num": "21",
   "text": "A Basílica Santuário de Nossa Senhora do Patrocínio é o coração religioso e arquitetônico da área urbana de Sacramento.\nConstruída na praça principal, ela ocupa exatamente o mesmo local onde foi erguida a primeira capela da cidade em 1820.\nA estrutura atual foi concluída em 1920 em estilo neoclássico, impondo-se na paisagem urbana com suas imponentes torres.\nO topo da torre ostenta um histórico relógio importado da Alemanha que marca as horas e badala por todo o centro da cidade.\nDevido ao seu valor histórico, beleza artística e intensa devoção popular, recebeu do Vaticano o título sagrado de Basílica Menor.\nNo altar-mor repousa a imagem centenária de Nossa Senhora do Patrocínio, tombada pelo patrimônio municipal como bem cultural sacro.\nOs vitrais coloridos, os afrescos do teto e a marcenaria dos altares atraem admiradores da arte sacra e arquitetura religiosa.\nÉ um espaço de silêncio, oração e contemplação situado no meio do acolhedor comércio da praça central de Sacramento.\nFaz par com o turismo de fé representado pela Gruta dos Palhares e pelos memoriais de Eurípedes Barsanulfo.\nQuer conhecer a história da escritora Carolina Maria de Jesus ou a Estação dos Bondes?",
   "question": "Qual personalidade ou monumento urbano você quer descobrir a seguir?",
   "optA": {
    "label": "Quero saber sobre a escritora Carolina Maria de Jesus, nascida em Sacramento.",
    "target": "36",
    "cross": null,
    "raw": "Ir para NÓ 36"
   },
   "optB": {
    "label": "Quero ver a história da antiga Estação dos Bondes Elétricos de 1913.",
    "target": "24",
    "cross": null,
    "raw": "Ir para NÓ 24"
   }
  },
  {
   "num": "22",
   "text": "O Parque Municipal da Gruta dos Palhares é uma sala de aula a céu aberto para projetos de educação ambiental na região.\nEscolas públicas e privadas de todo o Triângulo Mineiro organizam excursões frequentes para estudo prático de ciências.\nAlunos aprendem no local sobre formação de rochas sedimentares, ciclo da água, bioma Cerrado e conservação de espécies.\nGuias ambientais conduzem as turmas através do bosque e realizam palestras dinâmicas na área do anfiteatro do parque.\nAções de plantio de mudas nativas do Cerrado são promovidas periodicamente para recompor áreas de borda e proteger as nascentes.\nPlacas educativas pelo parque ensinam sobre a importância da reciclagem e o impacto do lixo nas cavernas naturais.\nO parque incentiva que os estudantes registrem o passeio em redações, fotografias e trabalhos de pesquisa científica.\nA conscientização desenvolvida nas crianças garante que a população local cresça respeitando e protegendo a Gruta.\nÉ a ciência, a sustentabilidade e a preservação do patrimônio funcionando na prática.\nQuer saber mais sobre horários para excursões ou sobre a infraestrutura da recepção?",
   "question": "Quer detalhes sobre como agendar visitas de grupos ou sobre a estrutura técnica?",
   "optA": {
    "label": "Quero saber como agendar viagens de grupos e excursões ao parque.",
    "target": "23",
    "cross": null,
    "raw": "Ir para NÓ 23"
   },
   "optB": {
    "label": "Quero voltar às opções de lazer e piscinas naturais do complexo.",
    "target": "03",
    "cross": null,
    "raw": "Ir para NÓ 03"
   }
  },
  {
   "num": "23",
   "text": "O centro de apoio ao visitante do Parque da Gruta dos Palhares foi desenhado para prestar atendimento rápido e completo.\nLogo na chegada, o guichê de atendimento fornece informações atualizadas sobre as regras do parque, preços e horários.\nMapeamentos visuais e infográficos na recepção mostram o corte geológico da caverna e a localização de cada serviço.\nA equipe de atendimento é formada por moradores locais treinados para tirar dúvidas sobre a história da cidade e indicar rotas.\nSanitários amplos, limpos e acessíveis situam-se ao lado do portal de entrada para maior comodidade antes da caminhada.\nHá também um ponto de informações turísticas que distribui folhetos sobre outros atrativos de Sacramento e da Canastra.\nO espaço conta com telefones de emergência, kit de primeiros socorros e brigadistas prontos para qualquer necessidade.\nSe você precisa de indicações sobre onde se hospedar ou onde encontrar um guia credenciado, a recepção é o lugar certo.\nTudo foi organizado para que a sua chegada ao complexo seja tranquila, rápida e acolhedora.\nDeseja saber sobre a rede hoteleira de Sacramento ou sobre a gastronomia típica?",
   "question": "Qual serviço de apoio na cidade você precisa para sua viagem?",
   "optA": {
    "label": "Quero ver opções de pousadas e hotéis para se hospedar em Sacramento.",
    "target": "25",
    "cross": null,
    "raw": "Ir para NÓ 25"
   },
   "optB": {
    "label": "Quero saber sobre compras de produtos artesanais e lembrancinhas.",
    "target": "24",
    "cross": null,
    "raw": "Ir para NÓ 24"
   }
  },
  {
   "num": "24",
   "text": "A experiência gastronômica em Sacramento atinge o ápice na compra do Queijo Minas Artesanal e dos doces caseiros tradicionais.\nA cidade conta com o centro de vendas instalado na restaurada Estação dos Bondes Elétricos, no centro urbano.\nLá você encontra o legítimo Queijo da Canastra produzido em fazendas locais, com maturações que variam de fresco a curado.\nOs doces de leite de Sacramento são famosos na região por sua textura cremosa e pelo uso de receitas centenárias sem conservantes.\nDestacam-se também as compotas de frutas do Cerrado, figo rami, goiabada cascão e o tradicional Doce de Leite com Morango.\nO artesanato em tecelagem manual, peças em madeira entalhada e bordados feitos por artesãs locais também estão à venda.\nÉ o lugar perfeito para comprar lembranças da viagem e apoiar diretamente a economia dos pequenos produtores rurais.\nA recepção calorosa dos comerciantes mineiros torna a degustação dos queijos e doces um momento inesquecível.\nImpossível sair de Sacramento sem levar uma sacola repleta desses saboreis autênticos da roça.\nDeseja conhecer o processo de fabricação do queijo nas fazendas ou sobre a história da Estação dos Bondes?",
   "question": "O que mais te atrai na cultura e gastronomia rural mineira?",
   "optA": {
    "label": "Quero saber como é feito o famoso Queijo Minas Artesanal nas fazendas.",
    "target": "28",
    "cross": null,
    "raw": "Ir para NÓ 28"
   },
   "optB": {
    "label": "Quero ver a história do prédio da Estação dos Bondes de 1913.",
    "target": "21",
    "cross": null,
    "raw": "Ir para NÓ 21"
   }
  },
  {
   "num": "25",
   "text": "A rede de hospedagem de Sacramento atende desde o turista que busca simplicidade até quem prefere o aconchego do turismo rural.\nNo centro urbano, há hotéis executivos e pousadas históricas que permitem fazer tudo a pé pela praça e restaurantes centrais.\nPara quem busca imersão na natureza, há opções de hotéis-fazenda e pousadas rurais situadas ao longo da rodovia da Gruta.\nEssas pousadas rurais oferecem chalés privativos, café da manhã colonial com queijo fresco e fogão a lenha no jantar.\nA área de camping dentro da propriedade da Cachoeira Nascente das Gerais e de outros complexos é perfeita para mochileiros.\nReservas antecipadas são altamente recomendadas durante feriados prolongados, datas festivas e no período de férias escolares.\nMuitos estabelecimentos oferecem pacotes que incluem passeios guiados à Gruta dos Palhares e rotas de cachoeiras na Canastra.\nA hospitalidade mineira é o grande diferencial, garantindo conversas boas na beira do fogão e acolhimento familiar.\nDormir com o silêncio da roça e acordar com o canto dos passarinhos é o fechamento perfeito para seu dia de passeio.\nDeseja saber mais sobre as cachoeiras próximas ou sobre roteiros de ecoturismo?",
   "question": "Qual a sua prioridade para os próximos dias de viagem pela cidade?",
   "optA": {
    "label": "Quero ver a lista de cachoeiras imperdíveis para banho e contemplação.",
    "target": "32",
    "cross": null,
    "raw": "Ir para NÓ 32"
   },
   "optB": {
    "label": "Quero informações sobre passeios de barco e pesca na represa do Rio Grande.",
    "target": "33",
    "cross": null,
    "raw": "Ir para NÓ 33"
   }
  },
  {
   "num": "26",
   "text": "Para aproveitar a Gruta dos Palhares com máximo conforto e sem imprevistos, arrumar a mochila corretamente faz toda a diferença.\nRoupas leves e respiráveis são as mais indicadas para o clima da região, além de trajes de banho se for usar as piscinas.\nNos pés, prefira tênis de caminhada com boa aderência ou sandálias papetes presas ao calcanhar para maior firmeza nas pedras.\nProtetor solar e repelente contra insetos são itens indispensáveis para quem vai caminhar nas trilhas e bosques do parque.\nLeve uma garrafa de água reutilizável para se manter hidratado durante o passeio sob o sol do Cerrado.\nComo não é permitido entrar com comida na gruta, faça seus lanches nas áreas externas autorizadas ou no restaurante.\nPara quem deseja fotografar o interior da caverna, a câmera do celular costuma dar conta, mas uma lanterna pequena ajuda nos detalhes.\nTenha sempre um casaco leve na mochila caso faça o passeio no final da tarde durante os meses de inverno.\nCom essa preparação simples, sua visita será tranquila, segura e inesquecível do começo ao fim.\nQuer dicas para tirar as fotos mais bonitas da gruta ou sobre a segurança no parque?",
   "question": "Qual detalhe prático de fotografia ou segurança você deseja ver?",
   "optA": {
    "label": "Quero ver as melhores dicas de fotografia para registrar a entrada da caverna.",
    "target": "27",
    "cross": null,
    "raw": "Ir para NÓ 27"
   },
   "optB": {
    "label": "Quero voltar e conferir as regras de visitação e horários.",
    "target": "06",
    "cross": null,
    "raw": "Ir para NÓ 06"
   }
  },
  {
   "num": "27",
   "text": "Fotografar a Gruta dos Palhares é o sonho de qualquer amante da fotografia de paisagens e arquitetura natural.\nO ângulo mais famoso é feito do lado de fora do salão, enquadrando todo o arco monumental de 22 metros contra o céu.\nEntre às 10h e 13h, a luz do sol entra obliquamente pela entrada da gruta, criando feixes de luz dourada magníficos na poeira suspensa.\nPara capturar toda a grandiosidade do salão interno com o celular, utilize o modo grande-angular (0.5x) se disponível no seu aparelho.\nComo a luz interna é suave e cênica, mantenha a câmera bem firme para evitar que as fotos fiquem tremidas no escuro.\nIncluir uma pessoa na foto junto ao portal de entrada é um ótimo truque para dar noção de escala da altura monumental da rocha.\nNa área externa, as cores avermelhadas do arenito Botucatu contrastam incrivelmente com o verde escuro das árvores do Cerrado.\nAs piscinas naturais com o reflexo das árvores na água limpa também garantem registros belíssimos para publicar nas redes sociais.\nRespeite sempre as áreas isoladas para fotos, não ultrapassando as correntes de proteção nem subindo em rochas instáveis.\nQuer conhecer outros pontos fotográficos imperdíveis na cidade, como a Basílica ou Cachoeiras?",
   "question": "Qual outro cenário instagramável de Sacramento você quer conhecer?",
   "optA": {
    "label": "Quero ver os ângulos fotográficos da Basílica e do Colégio Allan Kardec.",
    "target": "21",
    "cross": null,
    "raw": "Ir para NÓ 21"
   },
   "optB": {
    "label": "Quero ver as paisagens fotográficas das cachoeiras do município.",
    "target": "32",
    "cross": null,
    "raw": "Ir para NÓ 32"
   }
  },
  {
   "num": "28",
   "text": "A produção do Queijo Minas Artesanal na região de Sacramento e da Canastra é uma arte reconhecida como Patrimônio Imaterial do Brasil.\nO segredo centenário reside no uso do leite cru de vaca recém-tirado, do \"pingo\" (fermento natural) e do coalho tradicional.\nApós a prensagem manual na fôrma, as peças de queijo recebem sal grosso na superfície e vão para os prateleiras de madeira maturar.\nA maturação pode durar de alguns dias a meses, desenvolvendo casca amarelada, textura macia e sabor levemente ácido marcante.\nMuitas fazendas familiares produtoras abrem suas portas para que os turistas acompanhem a ordenha e a fabricação logo cedo.\nNo final do tour rural, é servida uma degustação harmonizada com doces caseiros, pão de queijo quentinho e café recém-coado.\nO Queijo da Canastra produzido em Sacramento ostenta selos de indicação geográfica e premiações em concursos internacionais na França.\nComprar o queijo direto das mãos do produtor rural é uma das vivências mais autênticas e saborosas da viagem a Minas Gerais.\nÉ a valorização da cultura do campo traduzida em um produto de qualidade mundial inquestionável.\nDeseja saber mais sobre a gastronomia no centro urbano ou sobre eventos na roça?",
   "question": "Qual vertente da cultura do campo você quer explorar a seguir?",
   "optA": {
    "label": "Quero conhecer o restaurante de comida mineira dentro do Parque da Gruta.",
    "target": "12",
    "cross": null,
    "raw": "Ir para NÓ 12"
   },
   "optB": {
    "label": "Quero saber sobre a Festa do Desemboque e a galinhada dos tropeiros.",
    "target": "19",
    "cross": null,
    "raw": "Ir para NÓ 19"
   }
  },
  {
   "num": "29",
   "text": "O relevo acidentado e as paisagens preservadas em volta da Gruta dos Palhares atraem praticantes de caminhadas e pedaladas rurais.\nA rota que liga o centro de Sacramento até o Parque da Gruta possui 12 km de asfalto com acostamento e colinas suaves.\nPara os praticantes de mountain bike (MTB), há dezenas de estradas de terra secundárias que cruzam fazendas, riachos e serras.\nO circuito \"Rota das Grutas e Cachoeiras\" é mapeado por GPS e permite aos ciclistas explorar paisagens exuberantes com segurança.\nAo longo do percurso, é comum encontrar pontos de apoio em vilarejos e venda de água de coco, frutas e queijo fresco.\nGrupos de pedal de toda a região se reúnem nos finais de semana para fazer o trajeto e terminar o treino com banho nas piscinas da gruta.\nA caminhada ecológica (trekking) é ideal para quem busca desacelerar, respirar ar puro e observar a fauna e flora locais.\nRecomenda-se sempre usar capacete, luvas, sinalização no pedal e levar kits de reparo de pneu e bastante água na mochila.\nUma forma saudável, ativa e sustentável de vivenciar a natureza abençoada do município de Sacramento.\nQuer conhecer outras rotas de aventura em cânions e cachoeiras altas?",
   "question": "Quer subir o nível de aventura conhecendo as cachoeiras de acesso técnico?",
   "optA": {
    "label": "Quero ver as rotas para a Cachoeira da Parida e Cânion do Azulim.",
    "target": "34",
    "cross": null,
    "raw": "Ir para NÓ 34"
   },
   "optB": {
    "label": "Quero ver as cachoeiras mais tranquilas com acesso fácil para a família.",
    "target": "30",
    "cross": null,
    "raw": "Ir para NÓ 30"
   }
  },
  {
   "num": "30",
   "text": "Para quem tem apenas 1 dia para visitar Sacramento, este roteiro otimizado garante que você aproveite os melhores atrativos:\nManhã (08h30 às 12h00): Vá direto para a Gruta dos Palhares. Explore o salão de arenito, tire fotos no pórtico e faça a caminhada pelo bosque.\nAlmoço (12h30 às 14h00): Saboreie a culinária mineira no fogão a lenha do restaurante da Gruta ou volte para almoçar no centro histórico.\nTarde (14h30 às 17h00): Faça o circuito cultural urbano visitando a Basílica N. Sra. do Patrocínio, Colégio Allan Kardec e Museu Histórico.\nFinal de Tarde (17h00 às 18h00): Pare na antiga Estação dos Bondes para degustar e comprar queijos, doces de leite e artesanato local.\nSe você tiver um segundo dia, dedique-o integralmente para banhos de cachoeira na Nascente das Gerais ou visita ao Desemboque.\nEsse itinerário equilibra perfeitamente o turismo de natureza, a imersão histórica, a fé e as compras gastronômicas.\nSacramento é uma cidade acolhedora e segura, facilitando o deslocamento rápido entre todos esses pontos marcantes.\nUm dia intenso, enriquecedor e que deixará um gostinho de quero voltar em breve para explorar mais.\nGostaria de detalhes sobre os custos médios desse roteiro ou opções para um final de semana completo?",
   "question": "Como prefere ajustar o planejamento do seu tempo em Sacramento?",
   "optA": {
    "label": "Quero expandir o roteiro para um final de semana completo de 2 dias.",
    "target": "31",
    "cross": null,
    "raw": "Ir para NÓ 31"
   },
   "optB": {
    "label": "Quero conferir a lista completa de cachoeiras para o segundo dia de viagem.",
    "target": "32",
    "cross": null,
    "raw": "Ir para NÓ 32"
   }
  },
  {
   "num": "31",
   "text": "Para aproveitar o Parque da Gruta dos Palhares com tranquilidade e sem filas, o planejamento de horário e dia é fundamental.\nSábados, domingos e feriados nacionais são os dias de maior movimento, quando o parque recebe caravanas e grupos de fora.\nSe você busca silêncio total para meditar ou fotografar sem pessoas ao fundo, prefira visitar de terça a sexta-feira pela manhã.\nDurante a semana, o salão da gruta permanece calmo e o som das aves nos paredões pode ser ouvido com máxima clareza.\nChegar às 08h30 da manhã garante estacionamento na sombra e acesso exclusivo às piscinas naturais limpas e vazias.\nO restaurante do parque começa a servir o almoço a partir das 11h30; chegar cedo evita esperas para mesas nos dias de pico.\nPara compra de ingressos no guichê, o atendimento costuma ser ágil, mas levar o valor de R$ 10,00 em dinheiro facilita o troco.\nEvite dias de chuva torrencial prolongada caso seu foco seja fazer trilhas de terra ou banhar-se nas piscinas abertas.\nCom essas dicas simples de agendamento, sua experiência turística na Gruta será impecável e muito relaxante.\nQuer ver como combinar o passeio com atrações tranquilas no centro da cidade?",
   "question": "O que você quer explorar no centro urbano nos horários de descanso do parque?",
   "optA": {
    "label": "Quero ver os pontos do centro cultural e museus da cidade.",
    "target": "20",
    "cross": null,
    "raw": "Ir para NÓ 20"
   },
   "optB": {
    "label": "Quero conferir os locais de compras de doces e produtos locais.",
    "target": "24",
    "cross": null,
    "raw": "Ir para NÓ 24"
   }
  },
  {
   "num": "32",
   "text": "Sacramento é um verdadeiro paraíso hídrico, contando com mais de 220 cachoeiras catalogadas em seu vasto território rural.\nA mais famosa e estruturada é a **Cachoeira Nascente das Gerais**, com impressionantes 83 metros de queda e mais de 20 poços naturais.\nO complexo da **Cachoeira do João Inácio**, a 65 km do centro, oferece 3 quedas sequenciais em um rio limpo cercado por vegetação.\nPara os aventureiros, a **Cachoeira da Parida** encanta por estar encravada em um cânion com queda dupla e águas cristalinas.\nA **Cachoeira Azulim** destaca-se por sua queda de 10 metros ideal para quem pratica esportes radicais como o rapel aquático.\nQuem busca facilidade para a família encontra na **Cachoeira do César** um local com praia de pedras e águas calmas e rasas.\nJá a **Cachoeira do Amanteigado** é uma excelente opção com poço fundo para banho e acesso totalmente gratuito.\nMuitas dessas quedas d'água exigem o pagamento de pequena taxa de preservação aos proprietários rurais (entre R$ 10 e R$ 30).\nElas completam a experiência turística de quem visita a Gruta dos Palhares e quer se lavar nas águas puras da Canastra.\nQuer detalhes específicos sobre a estrutura da Cachoeira Nascente das Gerais ou da Parida?",
   "question": "Qual cachoeira você quer detalhar na sua pesquisa turística agora?",
   "optA": {
    "label": "Quero ver os detalhes da Cachoeira Nascente das Gerais (83m e estrutura).",
    "target": "16",
    "cross": null,
    "raw": "Ir para NÓ 16"
   },
   "optB": {
    "label": "Quero ver as cachoeiras de acesso radical como a Parida e Azulim.",
    "target": "34",
    "cross": null,
    "raw": "Ir para NÓ 34"
   }
  },
  {
   "num": "33",
   "text": "A hidrografia de Sacramento é marcada pela forte presença do Rio Grande e do seu afluente local, o Rio Borá.\nO represamento das águas pela Usina Hidrelétrica de Jaguara formou um imenso lago navegável no Bairro Rural do Cipó.\nO local transformou-se em um polo de lazer aquático, muito procurado para passeios de lancha, jet-ski e navegação de barcos.\nPescadores esportivos frequentam a represa em busca de peixes nobres do Cerrado, como o tucunaré, a tucunaré-azul e o tucunaré-amarelo.\nO Bairro do Cipó conta com estrutura de ranchos para aluguel, quiosques à beira-lago, restaurantes de peixe frito e áreas de camping.\nAnualmente, as águas do reservatório são palco da tradicional e emocionante Procissão Fluvial de Nossa Senhora Aparecida.\nÉ uma paisagem completamente diferente das montanhas da gruta, oferecendo horizontes largos e pôr do sol espetacular sobre a água.\nUma excelente alternativa para quem gosta de atividades náuticas e lazer em família na água doce de Minas Gerais.\nGostaria de saber mais sobre a história industrial da usina ou sobre os passeios de barco?",
   "question": "Qual atração ligada às águas do Rio Grande você deseja explorar?",
   "optA": {
    "label": "Quero ver a história da Usina Cajuru de 1913 que abastecia os bondes.",
    "target": "24",
    "cross": null,
    "raw": "Ir para NÓ 24"
   },
   "optB": {
    "label": "Quero voltar e pesquisar mais sobre a Gruta dos Palhares e suas nascentes.",
    "target": "01",
    "cross": null,
    "raw": "Ir para NÓ 01"
   }
  },
  {
   "num": "34",
   "text": "Para os amantes de ecoturismo e caminhadas com dose de aventura, a Cachoeira da Parida é um dos destinos mais impressionantes.\nA atração fica escondida em um cânion rochoso estreito e preservado, exigindo uma caminhada técnica de cerca de 1,5 km por trilha.\nPara alcançar a queda principal e o poço mais profundo, o visitante precisa em determinado trecho atravessar a água a nadar.\nDevido às características de cânion fechado e profundidade, recomenda-se fortemente a contratação de guias locais credenciados.\nA visão da queda dupla desaguando no poço de tom verde-esmeralda cercado por paredões de rocha compensa todo o esforço físico.\nA propriedade conta com uma lagoa rasa auxiliar mais tranquila e área reservada para camping sob as árvores do Cerrado.\nA taxa de visitação para conservação da área fica em torno de R$ 25,00 por pessoa, garantindo a preservação do cânion intacto.\nÉ um passeio inesquecível para quem tem boa mobilidade, sabe nadar e busca contato selvagem com a natureza de Sacramento.\nQuer saber sobre esportes de descida em corda como o rapel nas cachoeiras?",
   "question": "Qual esporte de aventura ou trilha técnica te interessa saber mais?",
   "optA": {
    "label": "Quero saber sobre a prática de rapel aquático e canionismo na Cachoeira Azulim.",
    "target": "35",
    "cross": null,
    "raw": "Ir para NÓ 35"
   },
   "optB": {
    "label": "Quero voltar para opções de passeios tranquilos e sem esforço físico.",
    "target": "03",
    "cross": null,
    "raw": "Ir para NÓ 03"
   }
  },
  {
   "num": "35",
   "text": "A Cachoeira Azulim é o ponto de encontro consagrado dos praticantes de esportes radicais em Sacramento, especialmente o canionismo.\nCom uma queda principal de 10 metros enquadrada por um cânion de rocha vertical, ela oferece as condições perfeitas para o rapel aquático.\nEquipes especializadas de aventura organizam descidas guiadas com equipamentos de proteção individual como capacetes, neoprenes e cadeirinhas.\nA sensação de descer a parede rochosa molhada com a força da água caindo ao lado é pura adrenalina e superação pessoal.\nO riacho que forma a cachoeira corre por leito rochoso com formações esculpidas pela correnteza ao longo de milhares de anos.\nA trilha de acesso até a entrada do cânion exige caminhada de nível moderado por entre a vegetação nativa da serra.\nAlém do rapel, o local permite saltos de pontos seguros em poços profundos, sempre sob a orientação rigorosa dos instrutores.\nÉ uma atividade que atrai grupos de jovens e aventureiros de todo o estado em busca de desafios em meio à natureza.\nUma prova da diversidade de experiências que o ecoturismo de Sacramento reserva aos seus visitantes.\nDeseja saber mais sobre como agendar passeios com guias locais ou sobre o patrimônio cultural?",
   "question": "Qual informação final você deseja para concluir seu planejamento de aventura?",
   "optA": {
    "label": "Quero ver informações sobre eventos culturais e literatura na cidade.",
    "target": "36",
    "cross": null,
    "raw": "Ir para NÓ 36"
   },
   "optB": {
    "label": "Quero retornar ao início da navegação na Gruta dos Palhares.",
    "target": "01",
    "cross": null,
    "raw": "Ir para NÓ 01"
   }
  },
  {
   "num": "36",
   "text": "Para fechar com chave de ouro o panorama de Sacramento, o resgate da memória literária de **Carolina Maria de Jesus** é fundamental.\nNascida no município em 14 de março de 1914, a autora de \"Quarto de Despejo\" viveu sua infância e estudou no Colégio Allan Kardec.\nO município detém a custódia preciosa de cadernos originais, manuscritos inéditos e objetos pessoais doados pela família da escritora.\nA Prefeitura e pesquisadores trabalham na estruturação de um memorial dedicado a preservar e difundir seu legado literário internacional.\nCarolina é orgulho para a cidade, representando a força da mulher negra, da literatura periférica e do pensamento crítico brasileiro.\nConhecer sua terra natal e caminhar pelas ruas onde ela aprendeu as primeiras letras traz uma dimensão emocionante à visitação.\nEssa união entre a natureza monumental da Gruta dos Palhares, a fé, a história colonial do Desemboque e a literatura consolida Sacramento.\nUm destino completo no interior de Minas Gerais que acolhe os visitantes com cultura, paisagens incríveis e povo caloroso.\nEsperamos que este guia virtual ajude você a planejar uma viagem inesquecível pelo nosso município!",
   "question": "Como deseja finalizar sua consulta interativa sobre a Gruta dos Palhares e Sacramento?",
   "optA": {
    "label": "Recomeçar o passeio virtual pela Gruta dos Palhares desde o NÓ 01.",
    "target": "01",
    "cross": null,
    "raw": "Ir para NÓ 01"
   },
   "optB": {
    "label": "Encerrar e voltar ao Menu Principal do Citypass.",
    "target": "MENU"
   }
  }
 ],
 "desemboque": [
  {
   "num": "01",
   "text": "Seja bem-vindo ao módulo de exploração do histórico Povoado do Desemboque, a joia colonial de Sacramento!\nConhecido como o grande berço da civilização e do povoamento do Triângulo Mineiro e Alto Paranaíba no século XVIII.\nSua fundação remonta aos anos de 1740, impulsionada pela frenética corrida do ouro no lendário Sertão da Farinha Podre.\nLocalizado a cerca de 38 quilômetros do centro urbano de Sacramento, o vilarejo preserva uma atmosfera de paz bucólica.\nSuas calçadas de pedras brutas e casarões em taipa de pilão e pau a pique transportam o visitante para a era colonial.\nO povoado abriga duas preciosidades do patrimônio sacro mineiro: a Igreja de N. Sra. do Desterro e a do Rosário dos Pretos.\nCercado por vales verdes, riachos de águas cristalinas e serras do Cerrado, é o refúgio perfeito para o turismo cultural.\nA hospitalidade de seus poucos e atenciosos moradores mantém vivas as tradições dos antigos tropeiros e garimpeiros.\nCaminhar pelo Desemboque é pisar no local exato de onde partiram as expedições que fundaram dezenas de cidades da região.\nComo você deseja iniciar a nossa jornada virtual pelas origens e segredos do Povoado do Desemboque?",
   "question": "Por qual aspecto histórico ou cultural do Desemboque você gostaria de começar?",
   "optA": {
    "label": "Quero entender as origens do povoamento no século XVIII e a febre do ouro.",
    "target": "02",
    "cross": null,
    "raw": "Ir para NÓ 02"
   },
   "optB": {
    "label": "Prefiro conhecer as duas igrejas coloniais centenárias e sua arquitetura.",
    "target": "03",
    "cross": null,
    "raw": "Ir para NÓ 03"
   }
  },
  {
   "num": "02",
   "text": "A história do Desemboque começou por volta de 1743, quando faiscadores e garimpeiros descobriram ouro de aluvião na região.\nO povoado cresceu rapidamente ao longo do lendário Caminho das Goiases, servindo de entreposto para os bandeirantes.\nPor décadas, a povoação foi o centro administrativo e religioso de um imenso território conhecido como Sertão da Farinha Podre.\nCentenas de garimpeiros, comerciantes, tropeiros e pessoas escravizadas povoavam as margens do Córrego das Palhas em busca de riqueza.\nQuando os depósitos auríferos começaram a se esgotar no século XIX, a economia local migrou para a pecuária e a agricultura.\nA transferência da sede do município para a atual cidade de Sacramento em 1857 fez o povoado congelar no tempo.\nEsse isolamento geográfico involuntário acabou protegendo o conjunto arquitetônico e a autenticidade das tradições locais.\nHoje, o sítio histórico do Desemboque é um valioso documento vivo da ocupação do interior do Brasil do século XVIII.\nUm local onde cada pedra do calçamento e cada parede de adobe guarda fragmentos de histórias de bravura e devoção.\nO que você gostaria de explorar em seguida sobre o legado do período colonial do Desemboque?",
   "question": "Qual atração histórica você prefere detalhar neste momento?",
   "optA": {
    "label": "Quero ver a história da Igreja Matriz de Nossa Senhora do Desterro.",
    "target": "04",
    "cross": null,
    "raw": "Ir para NÓ 04"
   },
   "optB": {
    "label": "Quero conhecer a Igreja de Nossa Senhora do Rosário dos Pretos.",
    "target": "05",
    "cross": null,
    "raw": "Ir para NÓ 05"
   }
  },
  {
   "num": "03",
   "text": "O maior tesouro arquitetônico do Desemboque reside no conjunto formado por suas duas igrejas coloniais centenárias.\nA Igreja Matriz de Nossa Senhora do Desterro é o templo principal, destacando-se pela simplicidade e elegância barroca.\nConstruída em meados do século XVIII, ela possui retábulo de madeira entalhada e altar-mor dedicado à padroeira do povoado.\nA poucos metros de distância ergue-se a Igreja de Nossa Senhora do Rosário, edificada pela comunidade de negros escravizados.\nA Igreja do Rosário apresenta uma estrutura singela em madeira e alvenaria, sendo o centro das festividades da Congada.\nAmbos os templos são tombados pelo Instituto Estadual do Patrimônio Histórico e Artístico de Minas Gerais (IEPHA/MG).\nA presença de duas igrejas tão próximas revela a divisão social e a profunda religiosidade que marcavam a sociedade colonial.\nOs sinos das duas torres continuam ressoando pelo vale durante as celebrações religiosas e festas tradicionais do vilarejo.\nVisitar esses templos é vivenciar a fé sincera e a arte sacra rústica produzida no interior de Minas nos primórdios da ocupação.\nQual das duas igrejas coloniais do Desemboque você gostaria de conhecer em detalhes primeiro?",
   "question": "Qual templo sacro colonial você quer explorar agora?",
   "optA": {
    "label": "Quero detalhes sobre a Matriz de Nossa Senhora do Desterro.",
    "target": "04",
    "cross": null,
    "raw": "Ir para NÓ 04"
   },
   "optB": {
    "label": "Quero detalhes sobre a Igreja de Nossa Senhora do Rosário dos Pretos.",
    "target": "05",
    "cross": null,
    "raw": "Ir para NÓ 05"
   }
  },
  {
   "num": "04",
   "text": "A Igreja Matriz de Nossa Senhora do Desterro é considerada uma das edificações religiosas mais antigas do oeste mineiro.\nSua estrutura em madeira e taipa possui fachada simples com porta central em madeira nobre e janelões no piso superior.\nNo interior do templo, o visitante surpreende-se com a beleza do altar-mor trabalhado em talha de madeira de estilo barroco.\nA imagem de Nossa Senhora do Desterro no nicho central remonta ao século XVIII, trazida pelos primeiros povoadores da vila.\nO piso em tábuas largas de madeira e o forro do teto mantêm as características originais das reformas efetuadas no século XIX.\nDurante o mês de agosto, a igreja torna-se o ponto focal da tradicional Festa da Padroeira, atraindo devotos de toda a região.\nO silêncio do templo convida à oração e à contemplação da simplicidade arquitetônica da época do garimpo de ouro.\nProcessos de conservação preventiva garantem a integridade da madeira e das pinturas sacras contra a ação do tempo.\nA igreja é o monumento que simboliza a resistência espiritual e a fundação histórica de toda a comunidade de Sacramento.\nQuer ver detalhes da arte sacra do altar-mor ou saber sobre as festividades religiosas da padroeira?",
   "question": "Qual aspecto da Matriz de N. Sra. do Desterro você prefere seguir pesquisando?",
   "optA": {
    "label": "Quero saber sobre os retábulos, imagens e acervo de arte sacra.",
    "target": "08",
    "cross": null,
    "raw": "Ir para NÓ 08"
   },
   "optB": {
    "label": "Quero saber como funciona a tradicional Festa da Padroeira em agosto.",
    "target": "07",
    "cross": null,
    "raw": "Ir para NÓ 07"
   }
  },
  {
   "num": "05",
   "text": "A Igreja de Nossa Senhora do Rosário dos Pretos é um símbolo vivo da fé, cultura e resistência afro-brasileira no Desemboque.\nEdificada no século XVIII pelos membros da Irmandade dos Homens Pretos, a igreja ostenta linhas rústicas e encantadoras.\nSua fachada neoclássica simplificada guarda um interior modesto, com altares em madeira pintada de cores suaves e acolhedoras.\nO templo foi erguido com o trabalho braçal dos escravizados que buscavam um espaço próprio de devoção, solidariedade e oração.\nÉ ao redor da Igreja do Rosário que acontecem os momentos mais emocionantes dos festejos de Congada e Moçambique no povoado.\nO som cadenciado dos tambores, os cantos ancestrais e o estalar dos bastões de madeira ecoam na pequena praça gramada da igreja.\nA restauração do prédio preservou os esteios de madeira de lei e a cobertura de telhas cerâmicas moldadas nas coxas.\nO local inspira respeito e admiração pela contribuição decisiva da população negra na formação cultural de Sacramento.\nUm verdadeiro santuário da memória afro-descendente que emociona todos os visitantes que passam pelo Desemboque.\nGostaria de saber mais sobre as celebrações da Congada ou sobre o tombamento estadual das igrejas?",
   "question": "O que te chama mais atenção na Igreja do Rosário e na cultura local?",
   "optA": {
    "label": "Quero ver detalhes sobre as festas de Congada, Moçambique e Folia de Reis.",
    "target": "19",
    "cross": null,
    "raw": "Ir para NÓ 19"
   },
   "optB": {
    "label": "Quero entender as ações de tombamento e preservação do patrimônio.",
    "target": "11",
    "cross": null,
    "raw": "Ir para NÓ 11"
   }
  },
  {
   "num": "06",
   "text": "O Desemboque ostenta com orgulho o título de \"Berço do Triângulo Mineiro\" por ter originado a ocupação humana regional.\nDe sua área partiram os desbravadores que fundaram povoados que mais tarde deram origem a Uberaba, Araxá, Franca e Sacramento.\nAs rotas de tropeiros que cruzavam o arraial transportavam mantimentos, gado, tecidos e ferramentas importadas da Europa.\nO local funcionava como um centro comercial dinâmico no meio do sertão, reunindo pessoas de diversas partes do Brasil colonial.\nNas proximidades do povoado ainda existem ruínas de antigos engenhos, moinhos de água e velhas estruturas de contenção de pedra.\nEsses vestígios arqueológicos demonstram a engenharia empírica utilizada pelos moradores para extrair ouro e processar grãos.\nA preservação dessa memória permite compreender como a economia de subsistência garantiu a permanência da população no local.\nEstudantes e pesquisadores frequentam o Desemboque para realizar estudos de história, antropologia e arquitetura colonial.\nÉ uma verdadeira aula aberta sobre a formação territorial, social e econômica do interior do estado de Minas Gerais.\nDeseja conhecer os sítios de ruínas de pedra ou prefere passear pelas ruas centrais do povoado?",
   "question": "Qual cenário histórico e físico do Desemboque você quer conhecer agora?",
   "optA": {
    "label": "Quero saber sobre as ruínas históricas e os velhos garimpos desativados.",
    "target": "10",
    "cross": null,
    "raw": "Ir para NÓ 10"
   },
   "optB": {
    "label": "Quero passear virtualmente pelas calçadas de pedras e casas centenárias.",
    "target": "13",
    "cross": null,
    "raw": "Ir para NÓ 13"
   }
  },
  {
   "num": "07",
   "text": "As festividades religiosas no Povoado do Desemboque são momentos de reencontro, devoção comunitária e resgate das tradições.\nA Festa de Nossa Senhora do Desterro, realizada anualmente em agosto, atrai centenas de ex-moradores e fiéis de toda a região.\nA programação conta com novenas solenes, alvoradas festivas, missas cantadas e procissões pelas ruas iluminadas por velas.\nBarracas de comidinhas caipiras oferecem pastel de feira, quentão, galinhada, feijão tropeiro e doces caseiros preparados em fogão a lenha.\nLeilões de prendas rurais, apresentações de violeiros e mastro festivo decorado completam a animação do povoado.\nAs famílias abrem as portas de suas casas históricas para acolher parentes e visitantes com o acolhedor café com broa de milho.\nO clima de confraternização transforma o calmo vilarejo em um ponto pulsante de celebração da cultura sertaneja tradicional.\nÉ a oportunidade perfeita para vivenciar a autêntica religiosidade popular de Minas Gerais mantida com amor por gerações.\nUma experiência emocionante que une fé católica, gastronomia de raiz e hospitalidade mineira em um só lugar.\nQuer conhecer a gastronomia dos tropeiros servida nessas festas ou saber sobre opções de hospedagem?",
   "question": "Qual detalhe da vivência cultural do povoado você gostaria de explorar?",
   "optA": {
    "label": "Quero ver os pratos típicos da culinária caipira e dos tropeiros no Desemboque.",
    "target": "28",
    "cross": null,
    "raw": "Ir para NÓ 28"
   },
   "optB": {
    "label": "Quero saber como funciona a hospedagem e o aluguel de ranchos no vilarejo.",
    "target": "25",
    "cross": null,
    "raw": "Ir para NÓ 25"
   }
  },
  {
   "num": "08",
   "text": "O acervo de arte sacra preservado na Igreja Matriz de Nossa Senhora do Desterro é um tesouro de valor inestimável.\nO retábulo do altar-mor exibe talhas em madeira com motivos florais e anjos entalhados por artesãos anônimos do século XVIII.\nA imagem titular de Nossa Senhora do Desterro representa a fuga da Sagrada Família para o Egito, com entalhe delicado e pintura rica.\nHá também imagens coloniais de São José, Santo Antônio e São Sebastião dispostas nos nichos e retábulos laterais do templo.\nA pia batismal em pedra-sabão e o confessionário em madeira maciça são peças originais que testemunharam séculos de sacramentos.\nPinturas e policromias antigas foram cuidadosamente restauradas para reter a pátina do tempo e a autenticidade dos materiais.\nEspecialistas em arte barroca destacam a ingenuidade e a força expressiva das peças sacras produzidas no Sertão da Farinha Podre.\nA conservação desse acervo conta com a vigilância constante da paróquia e do Conselho do Patrimônio Cultural de Sacramento.\nUm patrimônio precioso que permanece protegido no coração do povoado para a admiração dos visitantes e devotos.\nQuer ouvir causos e lendas sobre tesouros escondidos na igreja ou entender as restaurações do prédio?",
   "question": "Qual vertente da memória do templo colonial te atrai mais?",
   "optA": {
    "label": "Quero conhecer os projetos de restauração e tombamento do templo.",
    "target": "11",
    "cross": null,
    "raw": "Ir para NÓ 11"
   },
   "optB": {
    "label": "Quero ouvir as lendas locais e causos de ouros escondidos nas paredes.",
    "target": "09",
    "cross": null,
    "raw": "Ir para NÓ 09"
   }
  },
  {
   "num": "09",
   "text": "O isolamento e a longevidade do Povoado do Desemboque alimentaram um rico imaginário popular repleto de lendas e causos.\nAntigos moradores contam histórias sobre botijas de ouro e moedas imperiais enterradas nos quintais dos velhos casarões coloniais.\nDiz a tradição oral que garimpeiros em fuga escondiam suas fortunas em cavidades de paredes de taipa antes de abandonar o arraial.\nOutra lenda famosa fala sobre o som de passos de tropeiros fantasma e cascalho sendo lavado no córrego nas noites de lua cheia.\nHá também relatos sobre túneis secretos subterrâneos que conectariam as duas igrejas coloniais para fuga em momentos de conflito.\nEmbora muitas dessas narrativas sejam fruto do folclore local, elas conferem um charme misterioso e fascinante ao vilarejo.\nSentar nas calçadas ao fim da tarde para ouvir os idosos contarem essas histórias é uma das melhores vivências no Desemboque.\nEsses causos passados de geração em geração preservam a identidade viva e o espírito romântico da época do garimpo.\nÉ o folclore mineiro em sua forma mais pura, encantando crianças e adultos que visitam o vilarejo histórico.\nDeseja conhecer os sítios de garimpo real de onde vinha o ouro ou prefere caminhar pelo povoado?",
   "question": "Para onde vamos conduzir nosso passeio pelo imaginário do Desemboque?",
   "optA": {
    "label": "Quero ver os garimpos desativados e ruínas de alvenaria de pedra.",
    "target": "10",
    "cross": null,
    "raw": "Ir para NÓ 10"
   },
   "optB": {
    "label": "Quero fazer um passeio a pé pelas calçadas de pedras e casas coloniais.",
    "target": "13",
    "cross": null,
    "raw": "Ir para NÓ 13"
   }
  },
  {
   "num": "10",
   "text": "Os arredores do Povoado do Desemboque abrigam ruínas arqueológicas que testemunham a intensa atividade mineradora do século XVIII.\nÀs margens do Córrego das Palhas e do Rio das Velhas, ainda é possível identificar mundéis, regos de água e muros de contenção.\nEssas estruturas de pedra sobreposta eram erguidas pelos garimpeiros para lavar o cascalho aurífero e separar as pepitas de ouro.\nMuitos desses paredões de pedra permanecem firmes no meio da vegetação nativa do Cerrado, resistindo à ação do tempo e das chuvas.\nPesquisadores de arqueologia industrial e histórica catalogaram esses sítios como valiosos registros da tecnologia mineradora colonial.\nA caminhada até algumas dessas ruínas combina ecoturismo suave com uma imersão profunda na história do desbravamento do interior.\nO ar puro do vale e o som das águas correndo entre as pedras criam uma atmosfera contemplativa e mágica durante a Trilha.\nA visita deve ser feita preferencialmente acompanhada por condutores locais para garantir a segurança e preservar o patrimônio.\nUm passeio imperdível para quem deseja ver de perto os vestígios da corrida do ouro que deu origem ao Triângulo Mineiro.\nQuer conhecer a natureza dos rios e córregos da região ou saber como chegar ao Desemboque?",
   "question": "Qual informação prática ou ecológica você deseja acessar agora?",
   "optA": {
    "label": "Quero ver os detalhes do Córrego das Palhas e opções de banho de rio.",
    "target": "14",
    "cross": null,
    "raw": "Ir para NÓ 14"
   },
   "optB": {
    "label": "Quero saber as rotas de acesso e como chegar de carro saindo de Sacramento.",
    "target": "15",
    "cross": null,
    "raw": "Ir para NÓ 15"
   }
  },
  {
   "num": "11",
   "text": "O Povoado do Desemboque é um bem cultural protegido por instrumentos formais de tombamento em níveis estadual e municipal.\nO Instituto Estadual do Patrimônio Histórico e Artístico de Minas Gerais (IEPHA/MG) tombou o conjunto urbano e suas igrejas.\nEssa proteção legal garante a conservação das fachadas coloniais, do traçado das ruas de pedras e do ambiente paisagístico.\nO Conselho Municipal do Patrimônio Cultural de Sacramento (COMPAC) fiscaliza reformas e orienta moradores na preservação dos imóveis.\nProjetos de restauração com técnicas tradicionais de adobe, pau a pique e pintura a cal mantêm a originalidade dos casarões.\nA comunidade local participa ativamente da salvaguarda de seu patrimônio, reconhecendo no turismo sustentável uma fonte de orgulho.\nO tombamento protege não apenas as edificações físicas, mas também a paisagem natural dos vales que emolduram o vilarejo histórico.\nA gestão responsável evita descaracterizações arquitetônicas e garante que o Desemboque continue sendo um portal para o passado.\nUm exemplo bem-sucedido de preservação da memória colonial no interior do estado de Minas Gerais.\nQuer saber mais sobre o meio ambiente do entorno ou sobre os condutores turísticos comunitários?",
   "question": "Qual aspecto da organização do turismo e preservação você prefere ver?",
   "optA": {
    "label": "Quero saber sobre a flora, fauna e serras do Cerrado que cercam o vilarejo.",
    "target": "17",
    "cross": null,
    "raw": "Ir para NÓ 17"
   },
   "optB": {
    "label": "Quero saber como contratar condutores locais para passeios no povoado.",
    "target": "22",
    "cross": null,
    "raw": "Ir para NÓ 22"
   }
  },
  {
   "num": "12",
   "text": "O ponto de apoio ao visitante no Desemboque oferece um acolhimento carinhoso marcado pelos sabores autênticos da roça mineira.\nPequenas quitandarias e casas de moradores vendem biscoitos de polvilho assados na hora, broas de fubá e pães de queijo recheados.\nDoces caseiros em compota como goiabada, doce de leite cremoso, figo e mamão ralado são produzidos por quitandeiras tradicionais.\nLicores artesanais preparados com frutas nativas do Cerrado, como pequi, mangaba e jatobá, encantam o paladar dos turistas.\nO artesanato local inclui bordados à mão, peças de crochê, trançados de palha e pequenas réplicas esculpidas das igrejas coloniais.\nConversar com as moradoras enquanto se saboreia um café passado no coador de pano é uma das experiências mais marcantes da viagem.\nO pequeno comércio aceita pagamentos em dinheiro e via PIX, embora o sinal de internet possa oscilar em dias chuvosos.\nComprar esses produtos diretamente dos artesãos fortalece a economia comunitária e valoriza o trabalho das famílias rurais.\nLevar um pedaço da doçura e do artesanato do Desemboque para casa é prolongar as memórias afetivas desse destino singular.\nDeseja saber sobre almoços típicos caipiras feitos em fogão a lenha ou sobre hospedagem?",
   "question": "Qual detalhe dos serviços e sabores do povoado você deseja conhecer?",
   "optA": {
    "label": "Quero ver os detalhes da gastronomia caipira e almoços servidos na comunidade.",
    "target": "28",
    "cross": null,
    "raw": "Ir para NÓ 28"
   },
   "optB": {
    "label": "Quero ver opções de pousadas comunitárias e chalés rústicos no Desemboque.",
    "target": "25",
    "cross": null,
    "raw": "Ir para NÓ 25"
   }
  },
  {
   "num": "13",
   "text": "Realizar um passeio a pé pelo núcleo urbano do Desemboque é um convite ao desacelerar e à contemplação do tempo passado.\nO traçado das ruas é irregular e calçado com pedras brutas do tipo \"pé de moleque\", assentadas manualmente no século XVIII.\nAs casas coloniais alinham-se lado a lado, ostentando portas de madeira maciça, janelas de guilhotina e fachadas brancas e coloridas.\nMuitas edificações conservam a estrutura interna de pau a pique e taipas grossas que mantêm o ambiente fresco durante o dia.\nPequenos jardins floridos com quaresmeiras, rosas e roseiras enfeitam as frentes dos casarões e praças do povoado.\nNo centro do vilarejo, um cruzeiro de madeira marca o ponto de reunião dos moradores para orações e encontros comunitários.\nCaminhar por essas vielas sem pressa, ouvindo o canto dos pássaros e o vento no vale, renova as energias de qualquer visitante.\nNão há tráfego intenso de veículos, buzinas ou barulho urbano, apenas o som puro da natureza e a tranquilidade sertaneja.\nÉ o cenário perfeito para quem busca silêncio, inspiração artística, paz de espírito e boas conversas com os locais.\nDeseja ver dicas de calçados para caminhar nas pedras ou conselhos para tirar fotos incríveis?",
   "question": "Qual orientação prática vai ajudar a planejar sua caminhada no povoado?",
   "optA": {
    "label": "Quero dicas de roupas, calçados e cuidados para caminhar nas ruas de pedras.",
    "target": "26",
    "cross": null,
    "raw": "Ir para NÓ 26"
   },
   "optB": {
    "label": "Quero sugestões dos melhores ângulos para fotografar o casario e igrejas.",
    "target": "27",
    "cross": null,
    "raw": "Ir para NÓ 27"
   }
  },
  {
   "num": "14",
   "text": "A natureza no entorno do Desemboque é generosa e marcada pela presença constante de águas puras e paisagens preservadas.\nO Córrego das Palhas cruza o vale bem próximo ao povoado, oferecendo poços de águas cristalinas perfeitos para um banho renovador.\nMais adiante, o Rio das Velhas serpenteia entre formações rochosas, criando pequenas praias de cascalho e corredeiras suaves.\nA vegetação ciliar protege as margens dos rios, abrigando espécies de árvores nativas do Cerrado como ingás, ipês e jatobás.\nDurante os meses mais quentes do ano, as piscinas naturais do córrego tornam-se o ponto de encontro favorito de moradores e turistas.\nO som da água correndo sobre as pedras cria uma trilha sonora relaxante que embala todo o ambiente do vilarejo colonial.\nPescadores amadores encontram nas águas da região espécies nativas de peixes de água doce em momentos de lazer responsável.\nA preservação ambiental das nascentes é mantida com rigor pela comunidade local para garantir a pureza dos recursos hídricos.\nUma integração perfeita entre a história da corrida do ouro e a exuberância ecológica do interior de Minas Gerais.\nQuer saber mais sobre passeios por trilhas ecológicas ou sobre os banhos de rio?",
   "question": "Qual atração natural você prefere explorar detalhadamente agora?",
   "optA": {
    "label": "Quero detalhes sobre os poços para banho no Córrego das Palhas e cachoeiras.",
    "target": "32",
    "cross": null,
    "raw": "Ir para NÓ 32"
   },
   "optB": {
    "label": "Quero saber sobre a Trilha dos Tropeiros e passeios de caminhada ecológicos.",
    "target": "29",
    "cross": null,
    "raw": "Ir para NÓ 29"
   }
  },
  {
   "num": "15",
   "text": "A viagem até o Povoado do Desemboque a partir do centro urbano de Sacramento é uma verdadeira atração turística à parte.\nO percurso possui cerca de 38 quilômetros, predominantemente por estradas rurais de terra batida que cortam belas fazendas.\nO trajeto passa por vales profundos, campos de cultivo, pastagens tradicionais e trechos preservados da vegetação de Cerrado.\nDurante a época de seca (maio a outubro), a estrada apresenta boas condições de rodagem para veículos de passeio comuns.\nNo período chuvoso (novembro a março), recomenda-se maior atenção e, preferencialmente, o uso de veículos mais altos ou 4x4.\nPlacas indicativas ao longo da rota orientam os motoristas, mas baixar o mapa offline antes de sair da cidade é aconselhável.\nA viagem leva em média de 50 minutos a 1 hora e 15 minutos, permitindo rodar em velocidade baixa e admirar o visual do interior.\nAo aproximar-se do povoado, a vista panorâmica do vale com as torres das igrejas despontando entre as árvores é emocionante.\nUma travessia contemplativa que prepara o espírito do visitante para o ambiente de paz e nostalgia que o aguarda no Desemboque.\nDeseja saber mais sobre recomendações de segurança na estrada ou ver o roteiro de 1 dia no povoado?",
   "question": "Como prefere dar prosseguimento ao planejamento da sua viagem rodoviária?",
   "optA": {
    "label": "Quero dicas práticas sobre sinal de celular, combustível e época do ano.",
    "target": "26",
    "cross": null,
    "raw": "Ir para NÓ 26"
   },
   "optB": {
    "label": "Quero ver um roteiro recomendado para aproveitar 1 dia completo no Desemboque.",
    "target": "30",
    "cross": null,
    "raw": "Ir para NÓ 30"
   }
  },
  {
   "num": "16",
   "text": "As celebrações litúrgicas e sacramentos nas igrejas coloniais do Desemboque ocorrem em um ambiente de profunda espiritualidade.\nMissas festivas são celebradas periodicamente por sacerdotes da Paróquia de Sacramento, reunindo a comunidade local e visitantes.\nDurante a Semana Santa e a Festa da Padroeira, o templo de N. Sra. do Desterro ganha ornamentação de flores do campo e velas.\nCânticos religiosos acompanhados por violas caipiras e harmônios transmitem uma emoção singela e marcante a todos os presentes.\nBatizados de crianças filhas de famílias com raízes no povoado continuam sendo realizados na Pia Batismal secular da matriz.\nCasamentos comunitários e renovações de votos matrimoniais encontram nas igrejas coloniais o cenário bucólico dos sonhos.\nMesmo fora dos horários de celebração, as portas das igrejas frequentemente permanecem abertas para orações individuais e silêncio.\nA devoção a Nossa Senhora do Desterro protege os viajantes e lembre os fiéis da busca por abrigo e paz em tempos difíceis.\nUm espaço sagrado onde a fé sertaneja manifesta-se em sua forma mais autêntica, acolhedora e edificante.\nQuer saber como acompanhar o calendário religioso ou entender a conexão do Desemboque com Sacramento?",
   "question": "Qual vertente da prática religiosa ou histórica do vilarejo você deseja ver?",
   "optA": {
    "label": "Quero ver o calendário anual de festividades religiosas do Desemboque.",
    "target": "31",
    "cross": null,
    "raw": "Ir para NÓ 31"
   },
   "optB": {
    "label": "Quero saber como o Desemboque se conecta com a história da cidade de Sacramento.",
    "target": "01",
    "cross": null,
    "raw": "Ir para NÓ 01"
   }
  },
  {
   "num": "17",
   "text": "A geografia que envolve o Povoado do Desemboque é caracterizada por vales encaixados e serras com vegetação de Cerrado.\nA altitude e a topografia do terreno proporcionam um microclima agradável, com noites frescas mesmo durante os meses de verão.\nA flora local ostenta espécies emblemáticas do ecossistema como ipês-amarelos, barbatimões, muricis, pequireiros e canelas-de-ema.\nDurante os meses da primavera, a florada dos ipês colore as encostas das serras em tons vibrantes de amarelo, rosa e branco.\nMirantes naturais situados nas partes mais altas do vale oferecem vistas panorâmicas de tirar o fôlego de todo o sítio histórico.\nO ar puro sem contaminação urbana permite enxergar o horizonte distante com extrema clareza sob o céu azul de Minas Gerais.\nCaminhadas matinais pelas cristas das serras revelam a vastidão das paisagens rurais que mantêm o povoado isolado e protegido.\nO contato com esse ambiente natural preservado transmite uma sensação de tranquilidade profunda e desconexão do estresse.\nUm paraíso para amantes da botânica, da fotografia de natureza e da contemplação de paisagens místicas.\nDeseja saber mais sobre a fauna nativa do vale ou sobre rotas de esporte de aventura?",
   "question": "Qual aspecto da natureza do Desemboque você quer investigar agora?",
   "optA": {
    "label": "Quero saber sobre os animais nativos, pássaros e fauna do vale.",
    "target": "18",
    "cross": null,
    "raw": "Ir para NÓ 18"
   },
   "optB": {
    "label": "Quero saber sobre passeios de mountain bike e caminhadas ecológicas.",
    "target": "29",
    "cross": null,
    "raw": "Ir para NÓ 29"
   }
  },
  {
   "num": "18",
   "text": "A fauna nativa da região do Desemboque beneficia-se da baixa densidade populacional e do estado de conservação do Cerrado.\nAves coloridas habitam as copas das árvores do vale, tornando o povoado um excelente local para a prática de observação de pássaros.\nÉ comum avistar tucanos-toco, araras-canindé, seriemas, seriema-do-cerrado, joão-de-barro e diversos tipos de beija-flores.\nPequenos mamíferos como micos-estrela, tamanduás-mirim, quatis e tapitis circulam livremente pelas áreas florestadas do córrego.\nAo amanhecer e no final da tarde, o canto das aves ecoa pelas serras, criando uma sinfonia natural inesquecível para o visitante.\nBiólogos e fotógrafos de natureza encontram no vale um refúgio rico para documentação e pesquisa da biodiversidade do oeste mineiro.\nO respeito dos moradores locais em relação aos animais garante que a fauna continue convivendo pacificamente no entorno.\nA observação respeitosa e sem interferência é a regra de ouro para quem deseja desfrutar dessa riqueza ecológica.\nUm verdadeiro santuário da vida silvestre preservado a poucos passos das históricas igrejas coloniais.\nDeseja saber como visitar os rios da região ou retornar ao menu de atrações históricas?",
   "question": "Como prefere direcionar a continuidade do seu roteiro pelo Desemboque?",
   "optA": {
    "label": "Quero conhecer os poços para banho no Córrego das Palhas e rios do entorno.",
    "target": "32",
    "cross": null,
    "raw": "Ir para NÓ 32"
   },
   "optB": {
    "label": "Quero retornar ao menu de história colonial e arquitetura do vilarejo.",
    "target": "06",
    "cross": null,
    "raw": "Ir para NÓ 06"
   }
  },
  {
   "num": "19",
   "text": "A riqueza do patrimônio imaterial do Desemboque ganha vida através das tradicionais manifestações do folclore afro-brasileiro.\nGrupos de Congada e Moçambique do povoado e da região mantêm vivas danças e rituais que remontam aos tempos da escravidão.\nOs dançadores vestem fardamentos coloridos, fitas decoradas e espelhos que refletem a luz durante as evoluções na praça.\nO som grave dos tambores de madeira combinado ao ritmo dos caxixis e pandeiros emociona moradores e turistas que assistem aos festejos.\nOs Ternos de Conga prestam homenagem a Nossa Senhora do Rosário e a São Benedito na porta da igreja secular dos pretos.\nNo período de festas do início do ano, os Ternos de Folia de Reis percorrem as casas do povoado entoando versos e profecias.\nEssas tradições passam de pais para filhos com orgulho, garantindo a continuidade da identidade cultural e da memória negra.\nAssistir a uma apresentação folclórica no Desemboque é ser transportado para a essência mais profunda da alma popular mineira.\nUma celebração de ritmo, devoção, resistência e fraternidade que marca para sempre a memória de quem a vivencia.\nDeseja saber mais sobre a Igreja do Rosário onde ocorrem as danças ou sobre a comida das festas?",
   "question": "Qual vertente da tradição afro-brasileira você deseja aprofundar?",
   "optA": {
    "label": "Quero ver os detalhes da construção da Igreja do Rosário dos Pretos.",
    "target": "05",
    "cross": null,
    "raw": "Ir para NÓ 05"
   },
   "optB": {
    "label": "Quero saber sobre a gastronomia típica servida nos dias de festa folclórica.",
    "target": "28",
    "cross": null,
    "raw": "Ir para NÓ 28"
   }
  },
  {
   "num": "20",
   "text": "O Povoado do Desemboque está intimamente ligado à biografia e à memória afetiva de grandes personalidades brasileiras.\nUma das conexões mais famosas é com o consagrado ator **Lima Duarte**, cujos ancestrais nasceram e viveram nesta região sertaneja.\nO próprio ator declara frequentemente seu amor profundo pelas raízes no Desemboque e pela cultura sertaneja tradicional mineira.\nHistoriadores também registram a passagem de bandeirantes lendários como Bartolomeu Bueno da Silva por estas estradas coloniais.\nSacerdotes, educadores e líderes políticos que moldaram a história de Minas Gerais iniciaram suas jornadas neste povoado pioneiro.\nAs histórias dessas figuras ilustres misturam-se com as memórias das famílias tradicionais que nunca deixaram o vilarejo.\nPercorrer as ruas do Desemboque é caminhar pelo cenário que inspirou narrativas sobre a coragem do povo do interior do Brasil.\nA preservação dessas biografias fortalece o orgulho da comunidade e enriquece a experiência dos visitantes interessados em história.\nUm ponto de convergência de trajetórias humanas extraordinárias que marcaram a arte, a cultura e a história nacional.\nDeseja saber mais sobre as histórias de Lima Duarte no povoado ou ver o acervo documental?",
   "question": "Qual personalidades ou registro histórico do Desemboque você quer conhecer?",
   "optA": {
    "label": "Quero saber mais sobre a ligação afetiva do ator Lima Duarte com o Desemboque.",
    "target": "21",
    "cross": null,
    "raw": "Ir para NÓ 21"
   },
   "optB": {
    "label": "Quero conhecer o acervo de fotos antigas e documentos do sítio histórico.",
    "target": "23",
    "cross": null,
    "raw": "Ir para NÓ 23"
   }
  },
  {
   "num": "21",
   "text": "A relação do ator Lima Duarte com a região do Desemboque revela a força da memória afetiva e das origens sertanejas.\nNascido no distrito próximo de Nossa Senhora do Desterro do Areal, o ator cresceu em contato com as tradições do povoado.\nEm diversas entrevistas, Lima Duarte relembra com carinho os causos contados pelos velhos tropeiros e o som dos sinos das igrejas.\nA sonoridade do sotaque, o linguajar caipira autêntico e a sabedoria popular do Desemboque influenciaram sua carreira artística.\nO ator costuma visitar a região em momentos de descanso, sendo recebido com afeto e simplicidade pelos moradores locais.\nSua presença ajuda a dar visibilidade à importância da preservação do patrimônio histórico e ambiental do vilarejo colonial.\nPara o povo de Sacramento e do Desemboque, Lima Duarte é um verdadeiro embaixador da cultura e da alma sertaneja mineira.\nSuas memórias reforçam o valor imaterial das histórias contadas ao redor dos fogões a lenha e das praças do interior.\nUm laço vivo entre a simplicidade do vilarejo histórico e a história da televisão e do cinema brasileiro.\nQuer ver conselhos de fotografia para registrar os cenários que inspiraram o ator ou ver os documentos?",
   "question": "Qual aspecto da memória artística e cultural você prefere acessar?",
   "optA": {
    "label": "Quero ver sugestões para fotografar os cenários bucólicos do vilarejo.",
    "target": "27",
    "cross": null,
    "raw": "Ir para NÓ 27"
   },
   "optB": {
    "label": "Quero ver detalhes do acervo de fotos antigas e documentos históricos.",
    "target": "23",
    "cross": null,
    "raw": "Ir para NÓ 23"
   }
  },
  {
   "num": "22",
   "text": "O receptivo turístico no Povoado do Desemboque é feito de forma comunitária, acolhedora e altamente personalizada.\nMoradores locais capacitados como condutores culturais e ambientais acompanham os visitantes pelos pontos históricos do povoado.\nDurante o percurso, os condutores compartilham conhecimentos sobre a arquitetura colonial, causos antigos e a botânica do Cerrado.\nAs visitas guiadas podem ser combinadas previamente com a associação de moradores ou diretamente no ponto de apoio do vilarejo.\nA presença do condutor local enriquece o passeio, permitindo acessar detalhes das igrejas que poderiam passar despercebidos.\nGrupos de estudantes, pesquisadores e excursões de turismo cultural encontram total apoio para suas atividades pedagógicas.\nO atendimento simples e atencioso faz com que o turista se sinta como um convidado de honra nas casas dos moradores.\nA renda obtida com as visitas guiadas é revertida diretamente para as famílias do povoado, fortalecendo a economia local.\nUma forma justa, humana e sustentável de promover o turismo comunitário no interior de Minas Gerais.\nQuer saber mais sobre as opções de transporte de grupos ou sobre almoços em casas de moradores?",
   "question": "Qual informação de apoio ao visitante você necessita para seu planejamento?",
   "optA": {
    "label": "Quero ver dicas de transporte e acessibilidade para grupos e caravanas.",
    "target": "15",
    "cross": null,
    "raw": "Ir para NÓ 15"
   },
   "optB": {
    "label": "Quero saber como agendar almoço caipira preparado pelas moradoras do povoado.",
    "target": "12",
    "cross": null,
    "raw": "Ir para NÓ 12"
   }
  },
  {
   "num": "23",
   "text": "O pequeno Centro de Apoio ao Turista e acervo documental do Desemboque preserva imagens e registros raros do passado.\nFotografias em sépia mostram a estrutura do povoado nas primeiras décadas do século XX antes das restaurações modernas.\nDocumentos antigos relatam as doações de terras, inventários de garimpeiros e registros de batismos realizados nas igrejas.\nO acervo conta também com ferramentas agrícolas e de mineração utilizadas pelos primeiros povoadores no século XVIII.\nMapas históricos revelam o traçado do antigo Caminho das Goiases e a localização exata dos garimpos ao longo dos rios.\nPainéis educativos explicam as técnicas construtivas da taipa de pilão, do adobe e da estrutura de pau a pique.\nA visita ao acervo é rápida, gratuita e oferece uma contextualização histórica valiosa antes da caminhada pelas ruas de pedra.\nMonitores voluntários da comunidade orientam os visitantes e tiram dúvidas sobre a formação territorial de Sacramento.\nUm pequeno museu vivo que guarda com zelo as raízes da ocupação do oeste mineiro para as futuras gerações.\nDeseja saber mais sobre a fundação de Sacramento a partir do Desemboque ou ver o roteiro de 1 dia?",
   "question": "Qual caminho de exploração histórica você deseja seguir agora?",
   "optA": {
    "label": "Quero entender como a fundação de Sacramento se deu a partir do Desemboque.",
    "target": "06",
    "cross": null,
    "raw": "Ir para NÓ 06"
   },
   "optB": {
    "label": "Quero ver a sugestão de roteiro de 1 dia completo para visitar o povoado.",
    "target": "30",
    "cross": null,
    "raw": "Ir para NÓ 30"
   }
  },
  {
   "num": "24",
   "text": "A tradição da produção de cachaça artesanal de alambique é uma herança cultural mantida em fazendas no entorno do Desemboque.\nAlambiques de cobre alimentados por fogueiras a lenha processam o garapa fresca da cana-de-açúcar cultivada nos vales.\nO processo de fermentação caipira utiliza fubá de milho e leveduras naturais, garantindo o sabor característico e encorpado.\nAs cachaças descansam em tonéis de madeiras nobres brasileiras como amburana, jequitibá-rosa, carvalho e bálsamo.\nVisitar um alambique artesanal nas proximidades do povoado permite acompanhar desde a moagem da cana até a destilação final.\nAo fim do passeio, os visitantes participam de degustações guiadas de cachaças brancas e envelhecidas de altíssima qualidade.\nPequenas garrafas artesanais podem ser adquiridas diretamente com os produtores como lembrança típica da região.\nA produção segue normas sanitárias e ambientais de qualidade, combinando tradição secular com controle de pureza.\nUma imersão na cultura da cachaça de alambique que é um dos grandes símbolos da gastronomia e herança mineira.\nQuer saber mais sobre onde provar a culinária caipira e harmonize com cachaça ou sobre os queijos?",
   "question": "Qual riqueza gastronômica da roça você quer explorar a seguir?",
   "optA": {
    "label": "Quero ver os detalhes da culinária caipira típica do Desemboque.",
    "target": "28",
    "cross": null,
    "raw": "Ir para NÓ 28"
   },
   "optB": {
    "label": "Quero saber sobre as lojas de doces e queijos locais no ponto de apoio.",
    "target": "12",
    "cross": null,
    "raw": "Ir para NÓ 12"
   }
  },
  {
   "num": "25",
   "text": "Se hospedar no Povoado do Desemboque é uma oportunidade única de vivenciar a paz e o ritmo sereno do interior mineiro.\nHá opções de hospedagem em pousadas comunitárias simples, chalés rústicos e ranchos familiares para aluguel de temporada.\nOs quartos são aconchegantes, oferecendo camas confortáveis, banheiros limpos e varandas com vista para as serras e vales.\nDormir no Desemboque proporciona a experiência inesquecível de ouvir apenas o silêncio da noite e o coaxar dos sapos nos riachos.\nO céu noturno sem poluição luminosa revela um espetáculo estrelado impressionante, ideal para observação de constelações.\nPela manhã, os hóspedes despertam com o canto dos passarinhos e o aroma do café fresco coado na hora acompanhado de pão de queijo.\nComo o número de leitos é reduzido no povoado, é fundamental realizar a reserva com antecedência nos períodos de festas.\nA acolhida atenciosa dos proprietários faz com que o visitante se sinta integrado à rotina tranquila da comunidade rural.\nA escolha perfeita de descanso para quem deseja se desligar da correria das grandes cidades e renovar as energias.\nQuer saber mais sobre o comércio local de alimentação ou sobre a natureza das serras?",
   "question": "Qual informação vai complementar melhor seu planejamento de hospedagem?",
   "optA": {
    "label": "Quero saber onde tomar café e fazer refeições durante a estadia.",
    "target": "12",
    "cross": null,
    "raw": "Ir para NÓ 12"
   },
   "optB": {
    "label": "Quero ver as opções de passeios pela natureza no entorno das pousadas.",
    "target": "17",
    "cross": null,
    "raw": "Ir para NÓ 17"
   }
  },
  {
   "num": "26",
   "text": "Para garantir que sua visita ao Povoado do Desemboque seja totalmente proveitosa e confortável, considere algumas dicas práticas:\nCalçados: Use tênis resistentes ou botas de caminhada sem salto para andar com segurança nas pedras brutas e trilhas de terra.\nSinal de Celular: A cobertura de telefonia móvel é limitada no vale; avise familiares e baixe mapas e informações com antecedência.\nCombustível: Abasteça totalmente o veículo na cidade de Sacramento antes de pegar a estrada de terra em direção ao povoado.\nDinheiro em Espécie: Leve notas trocadas para compras artesanais e pequenas despesas, pois nem todas as máquinas aceitam cartão.\nProteção Solar e Roupas: Leve protetor solar, chapéu, repelente para insetos e um agasalho leve para o friozinho do fim de tarde.\nPreservação do Lixo: Recolha todo o seu lixo e não retire pedras, plantas ou objetos históricos do povoado ou dos rios.\nRespeito à Comunidade: Mantenha o tom de voz suave e peça permissão antes de fotografar os moradores e os interiores das casas.\nSeguindo essas recomendações simples, sua viagem ao Desemboque será tranquila, segura e inesquecível para todos.\nDeseja ver a sugestão de roteiro completo de 1 dia ou conselhos de fotografia no povoado?",
   "question": "Qual orientação você gostaria de consultar para concluir sua preparação?",
   "optA": {
    "label": "Quero ver a sugestão de roteiro completo de 1 dia no Desemboque.",
    "target": "30",
    "cross": null,
    "raw": "Ir para NÓ 30"
   },
   "optB": {
    "label": "Quero ver dicas de fotografia para registrar o casario e igrejas.",
    "target": "27",
    "cross": null,
    "raw": "Ir para NÓ 27"
   }
  },
  {
   "num": "27",
   "text": "Fotografar o Povoado do Desemboque é um verdadeiro presente para entusiastas da fotografia histórica e de paisagem.\nA luz suave do início da manhã ilumina a fachada da Igreja de Nossa Senhora do Desterro, realçando sua brancura no fundo verde.\nAo final da tarde, os raios de sol dourados incidem sobre as pedras brutas do calçamento, criando sombras e texturas incríveis.\nPosicione-se na praça central para capturar enquadramentos que reúnam o casario colonial, o cruzeiro de madeira e as torres.\nPara fotos de detalhes, foque nas fechaduras de ferro forjado, nas janelas de madeira trabalhada e nos muros de taipa.\nFotografar o interior das igrejas requer sensibilidade: desative o flash para preservar a pintura antiga e o clima místico.\nDo topo das serras que cercam o vale, é possível tirar fotos panorâmicas espetaculares mostrando todo o conjunto urbano colonial.\nEm dias de festa folclórica, as cores vibrantes das roupas da Congada produzem retratos culturais cheios de vida e emoção.\nCada ângulo do Desemboque revela uma composição poética que retrata a essência da Minas Gerais profunda e bucólica.\nQuer saber mais sobre as paisagens naturais do entorno para fotografar ou sobre a caminhada no povoado?",
   "question": "Qual tipo de cenário você deseja fotografar na sua visita?",
   "optA": {
    "label": "Quero fotografar as paisagens naturais das serras, rios e vegetação.",
    "target": "17",
    "cross": null,
    "raw": "Ir para NÓ 17"
   },
   "optB": {
    "label": "Quero focar na arquitetura colonial do casario e das ruas de pedras.",
    "target": "13",
    "cross": null,
    "raw": "Ir para NÓ 13"
   }
  },
  {
   "num": "28",
   "text": "A culinária caipira do Desemboque é uma celebração dos sabores autênticos da roça mineira preparados com carinho e tradição.\nO prato mais famoso do povoado é a saborosa Galinhada Caipira com pequi e guariroba, preparada com frango caipira criado solto.\nO Feijão Tropeiro bem temperado com torresmo crocante, couve fatiada fininha e ovos caipiras fritos é outra iguaria imperdível.\nCostelinha de porco com canjiquinha, tutu de feijão, frango ao molho pardo e pernil assado compõem os almoços festivos.\nAs refeições são preparadas lentamente em fogões a lenha e servidas em panelas de pedra-sabão ou ferro fundido que mantêm o calor.\nSaladas de verduras colhidas nas hortas orgânicas dos moradores e farofas de milho caseiras acompanham os pratos principais.\nPara a sobremesa, nada supera o doce de goiaba com queijo Minas fresco, a ambrosia e o doce de leite puro em compota.\nEssa gastronomia rica reflete a herança dos tropeiros e fazendeiros que povoaram a região desde o século XVIII.\nUma experiência sensorial inesquecível que alimenta o corpo e a alma com o verdadeiro sabor de Minas Gerais.\nQuer saber onde saborear essas refeições no povoado ou conhecer a tradição das festas da Congada?",
   "question": "Qual informação gastronômica ou cultural você deseja acessar agora?",
   "optA": {
    "label": "Quero saber onde fazer refeições e provar a comida caipira no Desemboque.",
    "target": "12",
    "cross": null,
    "raw": "Ir para NÓ 12"
   },
   "optB": {
    "label": "Quero saber sobre a festa da Congada e as refeições comunitárias.",
    "target": "19",
    "cross": null,
    "raw": "Ir para NÓ 19"
   }
  },
  {
   "num": "29",
   "text": "O trajeto entre Sacramento e o Povoado do Desemboque é um dos roteiros favoritos dos praticantes de mountain bike (MTB) e ecoturismo.\nA estrada rural apresenta relevo ondulado com subidas desafiadoras, descidas emocionantes e vistas deslumbrantes das serras.\nCiclistas de todo o estado organizam pedaladas em grupo para vencer os 38 km de terra e celebrar a chegada no povoado colonial.\nCaminhantes e praticantes de trekking realizam a Trilha dos Tropeiros, percorrendo antigos caminhos utilizados no período do garimpo.\nAo longo do percurso, há pontos de parada estratégicos sob a sombra de árvores nativas para hidratação e contemplação do visual.\nA chegada ao povoado é recompensada com uma água de coco gelada, guaraná caipira ou um caldo quente nas lanchonetes locais.\nGrupos de ciclistas costumam agendar um almoço caipira com as moradoras para repor as energias após a atividade física.\nA infraestrutura simples do vilarejo acolhe com entusiasmo os esportistas que respeitam o meio ambiente e a tranquilidade local.\nUma forma ativa, sustentável e saudável de conectar esporte, natureza exuberante e história colonial em um só passeio.\nQuer saber sobre poços de água cristalina para banho após a pedalada ou sobre as ruínas dos garimpos?",
   "question": "Qual atração esportiva ou natural você quer adicionar ao seu roteiro?",
   "optA": {
    "label": "Quero ver os poços de água limpa e riachos para banho após o exercício.",
    "target": "32",
    "cross": null,
    "raw": "Ir para NÓ 32"
   },
   "optB": {
    "label": "Quero saber sobre a rota que leva às ruínas e garimpos desativados.",
    "target": "10",
    "cross": null,
    "raw": "Ir para NÓ 10"
   }
  },
  {
   "num": "30",
   "text": "Para quem deseja aproveitar 1 dia completo no Povoado do Desemboque com máximo aproveitamento, siga este roteiro sugerido:\nManhã (08h00 às 11h30): Saia cedo de Sacramento. Chegando ao povoado, faça a caminhada a pé pelas ruas de pedra e visite as duas igrejas.\nMeio-Dia (11h30 às 13h30): Delicie-se com um autêntico almoço caipira preparado em fogão a lenha em uma das casas de apoio do vilarejo.\nTarde (13h30 às 16h00): Visite o acervo histórico, converse com moradores locais e faça uma caminhada até o Córrego das Palhas para banho.\nFim de Tarde (16h00 às 17h30): Pare para tomar um café com broa de milho, compre doces e artesanatos e contemple o pôr do sol na praça.\nRetorno (17h30): Inicie o retorno para a cidade de Sacramento antes do anochecer completo para uma viagem tranquila pela estrada de terra.\nEsse itinerário garante uma imersão equilibrada entre história, arquitetura, religiosidade, gastronomia e natureza sem pressa.\nUm dia inesquecível em um dos lugares mais autênticos e preservados de toda a região do Triângulo Mineiro.\nGostaria de saber qual é a melhor época do ano para realizar esse passeio ou ver os banhos de rio?",
   "question": "Como você prefere ajustar os detalhes do seu roteiro de 1 dia?",
   "optA": {
    "label": "Quero saber qual a melhor época do ano e clima para visitar o Desemboque.",
    "target": "31",
    "cross": null,
    "raw": "Ir para NÓ 31"
   },
   "optB": {
    "label": "Quero conferir os detalhes sobre os poços e rios para banho no vilarejo.",
    "target": "32",
    "cross": null,
    "raw": "Ir para NÓ 32"
   }
  },
  {
   "num": "31",
   "text": "O Povoado do Desemboque pode ser visitado durante todo o ano, mas cada estação oferece uma atmosfera e atrativos próprios.\nDe maio a setembro (Estação Seca): É a época ideal para viajar. O clima é firme, as estradas de terra estão excelentes e o céu é azul.\nEm agosto ocorre a concorrida Festa de Nossa Senhora do Desterro, trazendo grande animação e festejos religiosos para o vilarejo.\nDe outubro a abril (Estação Chuvosa): As chuvas deixam a vegetação do Cerrado verdejante e aumentam o volume dos rios e córregos.\nEntretanto, nessa época é necessário maior cuidado na estrada de terra, sendo recomendados veículos mais altos para evitar atolamentos.\nNos meses de dezembro e janeiro, as festividades natalinas e de Reis movimentam as tradições religiosas com Folias e cantorias.\nDurante o outono, as noites tornam-se agradavelmente frias, criando o clima perfeito para saborear vinhos, caldos e cachaça caipira.\nIndependente do mês escolhido, a paz bucólica do vilarejo e a receptividade do povo do Desemboque estarão sempre de portas abertas.\nUm destino permanente de beleza, cultura de raiz e tranquilidade no interior de Minas Gerais.\nDeseja ver outras atrações turísticas no município de Sacramento para combinar com o Desemboque?",
   "question": "Como deseja dar sequência à sua pesquisa de viagem pelo município?",
   "optA": {
    "label": "Quero conhecer as festas patronais e o calendário religioso de agosto.",
    "target": "07",
    "cross": null,
    "raw": "Ir para NÓ 07"
   },
   "optB": {
    "label": "Quero ver como conectar a viagem ao Desemboque com a cidade de Sacramento.",
    "target": "33",
    "cross": null,
    "raw": "Ir para NÓ 33"
   }
  },
  {
   "num": "32",
   "text": "Os poços para banho no Córrego das Palhas e no Rio das Velhas são verdadeiros oásis naturais ao redor do Desemboque.\nO Poço da Igreja, localizado a uma curta caminhada do centro do povoado, oferece águas rasas, calmas e cristalinas para banho.\nSuas pedras lisas formam bancos naturais onde os visitantes podem sentar e relaxar ouvindo o barulho suave da correnteza.\nMais abaixo, pequenas quedas d'água formam duchas naturais excelentes para massagear as costas e renovar a energia do corpo.\nAs margens sombreadas por árvores nativas são perfeitas para momentos de descanso, leitura e piqueniques em família.\nA água é limpa e pura, proveniente de nascentes preservadas nas serras que cercam o vale do Desemboque.\nÉ fundamental manter o local impecável, recolhendo todo o lixo produzido e evitando o uso de sabões poluentes nas águas.\nA integração entre o banho de rio e a visita ao conjunto histórico colonial torna a experiência completa e revigorante.\nUm presente da natureza para quem visita o berço histórico do oeste mineiro com respeito e carinho.\nQuer saber mais sobre as ações de tombamento do patrimônio ou retornar ao início das igrejas?",
   "question": "Qual informação vai ajudar a concluir sua pesquisa sobre as atrações do vilarejo?",
   "optA": {
    "label": "Quero ver informações sobre o tombamento e conservação ambiental.",
    "target": "11",
    "cross": null,
    "raw": "Ir para NÓ 11"
   },
   "optB": {
    "label": "Quero voltar ao menu principal das igrejas coloniais do povoado.",
    "target": "03",
    "cross": null,
    "raw": "Ir para NÓ 03"
   }
  },
  {
   "num": "33",
   "text": "A rota que conecta o Povoado do Desemboque à sede urbana de Sacramento forma um dos circuitos turísticos mais ricos de Minas Gerais.\nEssa conexão permite unir a tranquilidade colonial do garimpo do século XVIII à grandiosidade arquitetônica da cidade de Sacramento.\nO visitante pode passar a manhã explorando as ruas de pedra e igrejas do Desemboque e a tarde conhecendo a Basílica central.\nAo longo do percurso de 38 km entre o povoado e a cidade, a paisagem transita de vales rústicos para áreas de cafeicultura moderna.\nA viagem permite compreender a evolução histórica da região, desde o povoamento aurífero inicial até o desenvolvimento urbano.\nO circuito conta com sinalização nas estradas principais e opções de paradas em empórios rurais para compra de queijo Canastra.\nUma oportunidade perfeita para quem deseja montar um roteiro de final de semana inesquecível pelo Triângulo Mineiro.\nA união do patrimônio rural colonial com o patrimônio urbano neoclássico faz do município de Sacramento um destino único.\nDeseja saber mais sobre a rota que conecta o Desemboque ao Parque da Gruta dos Palhares ou à Basílica?",
   "question": "Qual atração turística de Sacramento você quer conectar ao Desemboque agora?",
   "optA": {
    "label": "Quero ver como integrar o Desemboque ao Parque da Gruta dos Palhares.",
    "target": "34",
    "cross": null,
    "raw": "Ir para NÓ 34"
   },
   "optB": {
    "label": "Quero ver como conectar o Desemboque à Basílica de N. Sra. do Patrocínio.",
    "target": "35",
    "cross": null,
    "raw": "Ir para NÓ 35"
   }
  },
  {
   "num": "34",
   "text": "Combinar a visita ao histórico Povoado do Desemboque com o Parque Municipal da Gruta dos Palhares é uma jornada fantástica.\nEnquanto o Desemboque revela o berço histórico da colonização e da fé no século XVIII, a Gruta exibe a imponência da natureza.\nA Gruta dos Palhares é a maior caverna de rocho arenito da América Latina, com seu pórtico monumental de 80 metros de altura.\nApós percorrer as calçadas de pedra do Desemboque, o turista pode seguir para a Gruta para caminhar por seus bosques e piscinas.\nA distância entre o Desemboque e a Gruta dos Palhares é de aproximadamente 45 km, sendo facilmente percorrida em 1 hora de viagem.\nAmbos os atrativos contam com pontos de apoio, restaurantes típicos e área de descanso para toda a família.\nEsse contraste entre a obra humana colonial e a monumentalidade geológica torna a viagem extremamente diversificada e rica.\nUm roteiro completo que atende tanto aos apaixonados por história e cultura quanto aos amantes do ecoturismo e aventura.\nUma experiência turística inesquecível que mostra todas as faces e belezas do município de Sacramento.\nQuer retornar ao início da navegação pelo Desemboque ou seguir para a Basílica na cidade?",
   "question": "Para onde você prefere navegar a partir deste ponto?",
   "optA": {
    "label": "Quero retornar ao NÓ 01 para recomeçar o guia do Desemboque.",
    "target": "01",
    "cross": null,
    "raw": "Ir para NÓ 01"
   },
   "optB": {
    "label": "Quero ver a conexão do Desemboque com o Centro Histórico e a Basílica.",
    "target": "35",
    "cross": null,
    "raw": "Ir para NÓ 35"
   }
  },
  {
   "num": "35",
   "text": "A integração entre o Desemboque e o Centro Histórico de Sacramento representa a ponte entre a origem e a consolidação do município.\nFoi das ruínas e do esgotamento do garimpo no Desemboque que os pioneiros migraram para fundar a Capela do Santíssimo em 1820.\nEssa nova povoação cresceu e deu origem à atual cidade de Sacramento e à imponente Basílica de Nossa Senhora do Patrocínio.\nPortanto, compreender o Desemboque é fundamental para entender a grandiosidade e a identidade do povo de Sacramento.\nAs tradições religiosas, a gastronomia caipira, os causos e a acolhida calorosa são traços culturais idênticos em ambos os locais.\nRealizar esse circuito completo é fazer uma verdadeira viagem no tempo, caminhando do século XVIII ao século XX.\nSacramento orgulha-se de manter preservados esses dois polos de história, fé, arte e beleza no coração de Minas Gerais.\nEsperamos que esta exploração virtual inspire você a visitar pessoalmente esses tesouros do patrimônio brasileiro!\nGostaria de concluir nossa jornada interativa ou recomeçar a navegação virtual pelo Desemboque?",
   "question": "Como deseja prosseguir para finalizar seu conhecimento sobre o Desemboque?",
   "optA": {
    "label": "Ir para o NÓ 36 para ver a mensagem de encerramento do módulo.",
    "target": "36",
    "cross": null,
    "raw": "Ir para NÓ 36"
   },
   "optB": {
    "label": "Retornar ao NÓ 01 para explorar outros caminhos da árvore do Desemboque.",
    "target": "01",
    "cross": null,
    "raw": "Ir para NÓ 01"
   }
  },
  {
   "num": "36",
   "text": "Chegamos ao final da nossa árvore de navegação interativa pelo **Histórico Povoado do Desemboque** em Sacramento!\nEste vilarejo secular é o verdadeiro testemunho vivo da coragem dos garimpeiros, tropeiros e escravizados do século XVIII.\nCom suas igrejas de Nossa Senhora do Desterro e do Rosário, suas calçadas de pedras e vales verdes, ele aguarda sua visita.\nEsperamos que todas as informações, rotas, dicas práticas, gastronomia e histórias tenham ajudado a planejar sua viagem.\nO Desemboque é mais do que um ponto no mapa: é um reencontro emocionante com as raízes e a alma de Minas Gerais.\nAgradecemos por navegar conosco por esta preciosidade do patrimônio cultural, histórico e ambiental mineiro!\nQue sua jornada real pelas terras do Sertão da Farinha Podre seja recheada de paz, boas conversas e grandes descobertas!\nBoa viagem e sejam sempre bem-vindos ao Povoado do Desemboque e ao município de Sacramento!",
   "question": "Como deseja finalizar sua consulta interativa sobre o Povoado do Desemboque?",
   "optA": {
    "label": "Recomeçar o passeio virtual pelo Desemboque desde o NÓ 01.",
    "target": "01",
    "cross": null,
    "raw": "Ir para NÓ 01"
   },
   "optB": {
    "label": "Encerrar e voltar ao Menu Principal do Citypass.",
    "target": "MENU"
   }
  }
 ],
 "basilica": [
  {
   "num": "01",
   "text": "Seja bem-vindo ao módulo de exploração da imponente Basílica Santuário de Nossa Senhora do Patrocínio do Santíssimo Sacramento!\nLocalizada no coração da sede urbana, no centro da Praça Getúlio Vargas, a igreja é o principal marco religioso e arquitetônico da cidade.\nO templo atual ocupa exatamente o mesmo terreno histórico onde foi erguida a primeira capela do povoado no distante ano de 1820.\nSua edificação imponente resultou de uma ampla reconstrução concluída no ano de 1920, adotando elegantes linhas da arquitetura neoclássica.\nEm reconhecimento à sua profunda relevância histórica, cultural e à devoção regional, o templo recebeu do Vaticano o título de Basílica Menor.\nEssa honraria concedida pela Santa Sé estabelece um vínculo litúrgico e espiritual direto da matriz de Sacramento com o Papa.\nSuas imponentes torres abrigam um clássico e preciso relógio importado da Alemanha no início do século XX que marca as horas da cidade.\nNo altar-mor repousa a imagem histórica de Nossa Senhora do Patrocínio, tombada pelo patrimônio municipal por seu valor artístico e sacro.\nA igreja combina fé, arte, arquitetura monumental e histórias que acompanharam todo o desenvolvimento do município de Sacramento.\nComo você deseja iniciar a nossa visita guiada virtual pela Basílica de Nossa Senhora do Patrocínio?",
   "question": "Por qual aspecto da Basílica você gostaria de começar nossa exploração?",
   "optA": {
    "label": "Quero conhecer os detalhes arquitetônicos neoclássicos, torres e o relógio alemão.",
    "target": "02",
    "cross": null,
    "raw": "Ir para NÓ 02"
   },
   "optB": {
    "label": "Prefiro entender a história do título de Basílica Menor e a devoção patronal.",
    "target": "03",
    "cross": null,
    "raw": "Ir para NÓ 03"
   }
  },
  {
   "num": "02",
   "text": "A arquitetura da Basílica de Nossa Senhora do Patrocínio destaca-se pela simetria rigorosa e imponência características do estilo neoclássico.\nProjetada para substituir a antiga capela colonial de 1820, a estrutura concluída em 1920 apresenta colunas vistosas e fachada monumental.\nSuas torres elevadas dominam o horizonte do centro urbano de Sacramento, servindo como ponto de referência visual em toda a cidade.\nUm dos maiores destaques de sua fachada é o relógio mecânico trazido da Alemanha e instalado durante as reformas de modernização.\nO mecanismo do relógio alemão funciona com extrema precisão há mais de um século, badalando seus sinos a cada hora cheia do dia.\nA entrada principal conta com portões trabalhados e escadarias em mármore que dão acesso direto à nave central da nave da igreja.\nO teto interno abriga afrescos e pinturas sacras de grande valor artístico, retratando passagens bíblicas e a vida da Virgem Maria.\nA luz natural ganha tons coloridos e suaves ao atravessar os vitrais historiados instalados nas laterais das paredes superiores.\nÉ um verdadeiro templo das artes plásticas e da engenharia religiosa do início do século XX no interior do estado de Minas Gerais.\nO que você acha mais interessante investigar sobre o interior e os tesouros artísticos do templo?",
   "question": "Qual elemento artístico ou estrutural do interior da igreja você deseja ver?",
   "optA": {
    "label": "Quero detalhes sobre a imagem tombada no altar-mor e a decoração interna.",
    "target": "04",
    "cross": null,
    "raw": "Ir para NÓ 04"
   },
   "optB": {
    "label": "Quero saber como funciona o relógio alemão e o campanário das torres.",
    "target": "05",
    "cross": null,
    "raw": "Ir para NÓ 05"
   }
  },
  {
   "num": "03",
   "text": "A elevação da matriz de Sacramento ao título de Basílica Menor é uma distinção reservada pelo Vaticano a templos de excepcional relevância.\nO Decreto Papal reconheceu a importância da igreja como centro de peregrinação, devoção popular e preservação da tradição católica.\nPor ser uma Basílica Menor, o templo possui o privilégio de ostentar os símbolos papais tradicionais: o Tintinábulo e o Conopeu.\nEsses insígnias litúrgicas ficam expostas no presbitério, simbolizando a união espiritual direta do santuário local com a Santa Sé em Roma.\nA devoção a Nossa Senhora do Patrocínio no município remonta às expedições do Padre Hermógenes e aos fundadores do povoado em 1820.\nTodos os anos, milhares de fiéis e devotos de toda a região do Triângulo Mineiro e Alto Paranaíba participam das celebrações patronais.\nAs missas solenes, procissões e festividades religiosas mobilizam a comunidade e fortalecem o patrimônio imaterial de Sacramento.\nA basílica atua não apenas como local de culto, mas como guardiã da memória espiritual e das tradições de fé da população.\nCaminhar por seus corredores é sentir a vibração das orações de várias gerações de sacramentanos que por ali passaram.\nGostaria de detalhar as festas religiosas patronais ou conhecer a origem colonial da capela primitiva?",
   "question": "O que você quer conferir sobre a história de fé ligada à Basílica?",
   "optA": {
    "label": "Quero conhecer a história da Capela Primitiva de 1820 e a fundação da vila.",
    "target": "06",
    "cross": null,
    "raw": "Ir para NÓ 06"
   },
   "optB": {
    "label": "Quero ver como funcionam as festas patronais e novenas no mês de setembro.",
    "target": "07",
    "cross": null,
    "raw": "Ir para NÓ 07"
   }
  },
  {
   "num": "04",
   "text": "O altar-mor da Basílica de Nossa Senhora do Patrocínio é uma obra-prima de talha e marcenaria decorativa em estilo neoclássico.\nNo nicho central do altar repousa a imagem histórica de Nossa Senhora do Patrocínio, entalhada em madeira e com acabamento rico em detalhes.\nEsta imagem sacra foi oficialmente tombada pelo Conselho do Patrimônio Cultural de Sacramento pelo seu inestimável valor histórico e artístico.\nAos pés da padroeira, o retábulo apresenta ornamentos folheados, colunas trabalhadas e elementos em relevo que encantam os visitantes.\nOs altares laterais do templo são dedicados ao Santíssimo Sacramento, a São José e a outros santos tradicionais da devoção popular.\nO teto sobre o presbitério é decorado com pinturas que utilizam técnicas de perspectiva, criando um efeito visual de profundidade cênica.\nO sacrário, trabalhado em metais nobres, guarda o Santíssimo Sacramento sob luzes que permanecem acesas para adoração dos fiéis.\nBancos em madeira nobre dispostos ao longo da nave principal acomodam confortavelmente centenas de fiéis em grandes celebrações.\nCada detalhe do mobiliário foi pensado para induzir ao recolhimento, à contemplação estética e à oração silenciosa.\nQuer avançar para entender a restauração dos vitrais e pinturas ou prefere conhecer os eventos da praça?",
   "question": "Qual aspecto da preservação e beleza interna do santuário vamos seguir?",
   "optA": {
    "label": "Quero saber sobre os vitrais coloridos e os projetos de restauração do templo.",
    "target": "08",
    "cross": null,
    "raw": "Ir para NÓ 08"
   },
   "optB": {
    "label": "Quero saber quais eventos acontecem na Praça Getúlio Vargas ao redor da igreja.",
    "target": "09",
    "cross": null,
    "raw": "Ir para NÓ 09"
   }
  },
  {
   "num": "05",
   "text": "O relógio alemão localizado na torre esquerda da Basílica é uma das peças mecânicas mais fascinantes do patrimônio industrial urbano.\nImportado da Alemanha nas primeiras décadas do século XX, o mecanismo é composto por engrenagens pesadas em bronze e cabos de aço.\nO sistema funciona por meio de contrapesos que exigem corda periódica feita manualmente por zadores qualificados da comunidade.\nOs sinos de bronze da torre estão conectados diretamente ao mecanismo do relógio, soando batidas harmônicas a cada quarto de hora.\nAlém de marcar o tempo oficial no centro urbano, as badaladas dos sinos regulavam o ritmo de trabalho das antigas fazendas vizinhas.\nEm datas festivas e celebrações religiosas solenes, os sinos executam toques festivos específicos conhecidos por toda a população local.\nA visita técnica ao topo da torre revela uma visão panorâmica em 360 graus de toda a cidade de Sacramento e das serras ao redor.\nA conservação impecável do relógio após mais de 100 anos demonstra o carinho e o cuidado da paróquia com seu patrimônio histórico.\nÉ um verdadeiro símbolo da modernização e do orgulho técnico da Sacramento do início do século passado.\nQuer saber mais sobre o panorama visto do alto da torre ou sobre a proteção de patrimônio do prédio?",
   "question": "Qual aspecto da memória técnica e paisagística da Basílica você quer explorar?",
   "optA": {
    "label": "Quero saber sobre o tombamento municipal e preservação do prédio da matriz.",
    "target": "11",
    "cross": null,
    "raw": "Ir para NÓ 11"
   },
   "optB": {
    "label": "Quero ver a vista da cidade e a localização da praça no mapa urbano.",
    "target": "07",
    "cross": null,
    "raw": "Ir para NÓ 07"
   }
  },
  {
   "num": "06",
   "text": "A história da Basílica está umbilicalmente ligada ao processo de fundação do município de Sacramento na primeira metade do século XIX.\nEm 1820, o clérigo Padre Hermógenes Cassimiro de Araújo Branswick obteve a licença eclesiástica para erguer uma primeira capela na região.\nO templo inicial foi batizado como Capela do Santíssimo Sacramento Apresentado pelo Patrocínio de Maria, dando origem ao nome da cidade.\nAo redor desta rústica capela de taipa e madeira, os primeiros moradores construíram suas casas, formando o núcleo urbano primitivo.\nEm 1857 o povoado foi elevado a freguesia e, mais tarde, em 1876, alcançou a categoria oficial de cidade de Sacramento.\nConforme a população crescia impulsionada pela cafeicultura, a antiga capela colonial tornou-se pequena para acomodar os fiéis.\nIsso motivou a liderança comunitária e a igreja a realizarem a grande reconstrução neoclássica que culminou na catedral atual em 1920.\nO local é, portanto, o marco zero geográfico, histórico, urbano e afetivo de onde brotou todo o município de Sacramento.\nConhecer a Basílica é viajar no tempo até o momento exato em que os primeiros bandeirantes e povoadores fixaram residência no local.\nDeseja saber mais sobre as personalidades históricas ligadas à igreja ou sobre as rotas turísticas do centro?",
   "question": "Como podemos detalhar seu conhecimento sobre as origens do centro histórico?",
   "optA": {
    "label": "Quero ver a ligação da Basílica com personalidades como Eurípedes e Carolina Maria.",
    "target": "10",
    "cross": null,
    "raw": "Ir para NÓ 10"
   },
   "optB": {
    "label": "Quero ver o roteiro para caminhar a pé pelo centro histórico ao redor da matriz.",
    "target": "13",
    "cross": null,
    "raw": "Ir para NÓ 13"
   }
  },
  {
   "num": "07",
   "text": "A Praça Getúlio Vargas, onde se ergue a Basílica de Nossa Senhora do Patrocínio, é o coração social e cultural de Sacramento.\nO traçado do entorno é arborizado, contando com jardins bem cuidados, bancos de descanso, fonte luminosa e calçadas largas.\nDurante a Festa da Padroeira, a praça transforma-se em um vibrante centro de convivência comunitária, fé e gastronomia típica.\nBarracas de comidas tradicionais vendem caldos, pasteis, doces caseiros, quentão e pratos da culinária mineira para os visitantes.\nO espaço também acolhe procissões luminosas, apresentações de retretas por bandas de música locais e shows culturais ao ar livre.\nPara quem visita a cidade, a praça ao redor da Basílica é o ponto ideal para tomar um café, saborear um pão de queijo e passear.\nA facilidade de acesso é total, estando cercada pelo comércio local, bancos, farmácias, lanchonetes e pousadas históricas.\nÀ noite, a iluminação cênica projetada sobre a fachada da Basílica destaca suas colunas neoclássicas, criando um visual deslumbrante.\nÉ um ponto de encontro obrigatório para famílias, turistas, fotógrafos e moradores que buscam tranquilidade e boa conversa.\nQuer explorar os estabelecimentos gastronômicos ao redor ou saber sobre o clima e horários de celebração?",
   "question": "Qual informação de visitação ou lazer no centro urbano você precisa agora?",
   "optA": {
    "label": "Quero saber os horários das missas, visitação e funcionamento do santuário.",
    "target": "06",
    "cross": null,
    "raw": "Ir para NÓ 06"
   },
   "optB": {
    "label": "Quero dicas de docerias, cafés e lojas de artesanato próximas à Basílica.",
    "target": "12",
    "cross": null,
    "raw": "Ir para NÓ 12"
   }
  },
  {
   "num": "08",
   "text": "Os vitrais da Basílica Santuário de Nossa Senhora do Patrocínio constituem um conjunto de arte vítrea de enorme valor estético.\nProduzidos por ateliers especializados do início do século XX, eles contam com peças de vidro colorido importadas da Europa.\nCada painel retrata uma cena sacra importante, como o Nascimento de Jesus, a Anunciação, a Crucificação e os Sacramentos da Igreja.\nA orientação das janelas permite que a luz do sol da manhã e da tarde filtre cores vibrantes de azul, vermelho e dourado na nave.\nEsse jogo de luzes e sombras cria uma atmosfera mística e serena que convida ao recolhimento e à apreciação da arte religiosa.\nProjetos periódicos de manutenção e restauração limpam e reforçam os chumbos que fixam as pequenas peças de vidro nos painéis.\nA conservação dos vitrais é mantida com o apoio do Conselho Municipal do Patrimônio Cultural e doações dos próprios fiéis.\nFotógrafos e historiadores da arte consideram o conjunto de vitrais da matriz de Sacramento um dos mais bonitos do oeste mineiro.\nÉ uma verdadeira galeria de arte sacra aberta diariamente ao público e aos visitantes da cidade.\nQuer ver mais sobre a nave central e o som do órgão da igreja ou sobre as lendas locais?",
   "question": "Qual detalhe do patrimônio artístico do santuário te chama mais atenção?",
   "optA": {
    "label": "Quero entender a acústica e a sonoridade da nave central durante as celebrações.",
    "target": "18",
    "cross": null,
    "raw": "Ir para NÓ 18"
   },
   "optB": {
    "label": "Quero saber sobre as memórias e histórias contadas pelos antigos moradores.",
    "target": "09",
    "cross": null,
    "raw": "Ir para NÓ 09"
   }
  },
  {
   "num": "09",
   "text": "A Basílica de Nossa Senhora do Patrocínio está envolvida em ricas tradições e memórias orais registradas na cidade de Sacramento.\nAntigos moradores contam histórias sobre os grandes mutirões populares organizados para o transporte das pedras na reforma de 1920.\nA comunidade inteira se mobilizava em carros de boi e carroças para trazer materiais das pedreiras e oleiras do entorno da cidade.\nOutra tradição famosa é o repique especial dos sinos que anunciava grandes marcos históricos nacionais e vitórias comunitárias.\nDurante as secas históricas do século passado, os fiéis realizavam procissões de penitência saindo da Basílica em direção à zona rural.\nA imagem da padroeira no altar-mor também possui relatos de fé de devotos que alcançaram graças e curas atribuídas à sua intercessão.\nAs festividades da padroeira mantêm vivas as tradicionais alvoradas festivas, onde a banda de música acorda a cidade ao amanhecer.\nEssas memórias imateriais passam de pais para filhos, mantendo o sentimento de pertencimento e orgulho pela basílica centenária.\nA igreja atua como o grande fio condutor que une o passado colonial do município ao seu presente vibrante e religioso.\nQuer explorar o aspecto do patrimônio imaterial ou continuar conhecendo os pontos turísticos vizinhos?",
   "question": "Quer se aprofundar nas tradições culturais ou nas rotas de turismo no centro?",
   "optA": {
    "label": "Quero ver outras manifestações culturais como as Congadas e Folia de Reis.",
    "target": "19",
    "cross": null,
    "raw": "Ir para NÓ 19"
   },
   "optB": {
    "label": "Quero ver os pontos turísticos localizados a poucos passos da Basílica.",
    "target": "13",
    "cross": null,
    "raw": "Ir para NÓ 13"
   }
  },
  {
   "num": "10",
   "text": "Por estar localizada no centro cívico e histórico de Sacramento, a Basílica faz cruzamento com a vida de ilustres personalidades.\nO educador e médium Eurípedes Barsanulfo cresceu no centro urbano e participou ativamente da vida comunitária e cultural da praça.\nAntes de sua transição para o espiritismo e fundação do Colégio Allan Kardec, Eurípedes frequentou a igreja e suas irmandades.\nA escritora Carolina Maria de Jesus, nascida em Sacramento em 1914, foi batizada na igreja matriz em suas primeiras semanas de vida.\nCarolina caminhava pela praça Getúlio Vargas em sua infância a caminho da escola, tendo o contorno das torres como cenário familiar.\nO ator Lima Duarte, nascido no próximo distrito do Desemboque, possui laços afetivos com as tradições religiosas celebradas no templo.\nA basílica foi também o espaço de ordenação e atuação de sacerdotes e bispos que projetaram o nome de Sacramento em todo o Brasil.\nA presença dessas personalidades na praça central confere à Basílica um papel central na biografia dos grandes nomes da cidade.\nO templo assistiu e registrou os passos de figuras que marcaram a educação, a literatura, a arte e a fé em nosso país.\nDeseja conhecer mais sobre o Colégio Allan Kardec de Eurípedes ou sobre o Acervo de Carolina Maria de Jesus?",
   "question": "Qual vertente da memória cultural das personalidades você prefere investigar?",
   "optA": {
    "label": "Quero saber sobre o Colégio Allan Kardec e o Memorial Eurípedes Barsanulfo.",
    "target": "20",
    "cross": null,
    "raw": "Ir para NÓ 20"
   },
   "optB": {
    "label": "Quero saber detalhes sobre o Acervo da escritora Carolina Maria de Jesus.",
    "target": "36",
    "cross": null,
    "raw": "Ir para NÓ 36"
   }
  },
  {
   "num": "11",
   "text": "A proteção e salvaguarda da Basílica de Nossa Senhora do Patrocínio são garantidas pelos instrumentos do Patrimônio Cultural de Sacramento.\nO conjunto arquitetônico do templo e seu acervo móvel, incluindo a imagem da padroeira, são protegidos por Tombamento Municipal.\nEssa tutela legal impede qualquer alteração estrutural desordenada, garantindo que as características neoclássicas originais sejam mantidas.\nO Conselho Municipal do Patrimônio Cultural (COMPAC) realiza vistorias técnicas periódicas nas torres, telhado, estrutura e vitrais.\nRecursos do Fundo Municipal do Patrimônio Cultural (FUMPAC) são destinados a auxiliar em obras de conservação preventiva do prédio.\nO Tombamento reconhece a matriz não apenas como um templo religioso, mas como um monumento histórico de valor coletivo incalculável.\nA Basílica também está inventariada no Instituto Estadual do Patrimônio Histórico e Artístico de Minas Gerais (IEPHA/MG).\nEssa gestão responsável garante que o monumento continue preservado e seguro para as futuras gerações de sacramentanos.\nÉ um exemplo de união entre a administração pública, a Igreja Católica e a sociedade civil na defesa da memória mineira.\nQuer saber mais sobre outros prédios tombados na cidade ou sobre o Museu Histórico Municipal?",
   "question": "Qual aspecto da gestão do patrimônio histórico da cidade você gostaria de conhecer?",
   "optA": {
    "label": "Quero saber sobre o Museu Histórico Municipal Corália Venites Maluf.",
    "target": "23",
    "cross": null,
    "raw": "Ir para NÓ 23"
   },
   "optB": {
    "label": "Quero ver os detalhes de prédios industriais tombados como a Estação dos Bondes.",
    "target": "24",
    "cross": null,
    "raw": "Ir para NÓ 24"
   }
  },
  {
   "num": "12",
   "text": "O entorno imediato da Basílica, na Praça Getúlio Vargas, é o local perfeito para vivenciar o comércio tradicional e a acolhida mineira.\nA poucos passos da entrada da igreja, os visitantes encontram cafés históricos que servem pão de queijo assado na hora e broa de milho.\nAs docerias artesanais da praça oferecem degustação do famoso Doce de Leite de Sacramento, compotas caseiras e queijo ralado fresco.\nEmpórios rurais vendem peças do autêntico Queijo Minas Artesanal da Canastra, vindo diretamente das fazendas do município.\nHá também lojas especializadas em artigos religiosos onde fiéis podem adquirir terços, imagens da padroeira e lembranças abençoadas.\nRestaurantes no estilo \"self-service\" e à la carte servem o tradicional almoço mineiro com tutu de feijão, frango ensopado e couve.\nÀ tarde, os bancos da praça em frente à Basílica ficam repletos de moradores locais para a tradicional conversa de fim de dia.\nO comércio ao redor da igreja aceita cartões de crédito, PIX e dinheiro, funcionando em horários amplos para atender os turistas.\nÉ uma imersão completa nos sabores, aromas e na hospitalidade única que torna o interior de Minas Gerais famoso no mundo todo.\nDeseja conhecer outros locais famosos para compras na cidade ou saber sobre pousadas no centro?",
   "question": "Qual detalhe dos serviços e comércio no centro de Sacramento você quer explorar?",
   "optA": {
    "label": "Quero ver o centro de compras de produtos regionais na antiga Estação dos Bondes.",
    "target": "24",
    "cross": null,
    "raw": "Ir para NÓ 24"
   },
   "optB": {
    "label": "Quero ver as opções de hospedagem e pousadas situadas próximas à praça.",
    "target": "25",
    "cross": null,
    "raw": "Ir para NÓ 25"
   }
  },
  {
   "num": "13",
   "text": "Iniciar um roteiro a pé a partir da Basílica de Nossa Senhora do Patrocínio é a melhor forma de explorar o centro histórico de Sacramento.\nSaindo da porta principal do santuário, você pode percorrer a Praça Getúlio Vargas e admirar o casario preservado do século XIX.\nA apenas três blocos de distância, encontra-se o prédio histórico do Colégio Allan Kardec, marco mundial da pedagogia espírita.\nCaminhando mais alguns metros, chega-se ao Museu Histórico Municipal Corália Venites Maluf, repleto de relíquias da fundação do município.\nA antiga Estação dos Bondes Elétricos de 1913 também fica no perímetro central, hoje transformada em centro de artesanato e doces.\nO trajeto é plano, seguro, possui calçadas arborizadas e placas indicativas que facilitam a navegação do turista a pé.\nAo longo do caminho, o visitante passa por praças menores, fachadas coloridas e estabelecimentos comerciais tradicionais de família.\nFazer esse passeio a pé leva cerca de duas a três horas, permitindo fotografar e conversar com os moradores pelo caminho.\nÉ o complemento urbano perfeito para quem passou a manhã visitando as maravilhas naturais da Gruta dos Palhares.\nQuer ver dicas de vestuário para esse passeio a pé ou sugestões para tirar as melhores fotos das torres?",
   "question": "Qual orientação prática deixará seu passeio pelo centro histórico mais agradável?",
   "optA": {
    "label": "Quero sugestões de ângulos e iluminação para tirar fotos incríveis da Basílica.",
    "target": "27",
    "cross": null,
    "raw": "Ir para NÓ 27"
   },
   "optB": {
    "label": "Quero dicas de roupas, calçados e melhor horário para caminhar no centro.",
    "target": "26",
    "cross": null,
    "raw": "Ir para NÓ 26"
   }
  },
  {
   "num": "14",
   "text": "A partir do centro histórico da Basílica, o visitante pode se deslocar facilmente para os grandes atrativos rurais de Sacramento.\nA Rodovia Antenor Duarte Vilela conecta a praça da matriz diretamente ao Parque Municipal da Gruta dos Palhares em apenas 15 minutos.\nOutra Rota Rústica segue em direção ao histórico Povoado do Desemboque, cruzando as paisagens do Chapadão do Bugre por estradas de terra.\nPara quem busca água e ecoturismo, estradas bem sinalizadas levam ao complexo de cachoeiras e à represa do Rio Grande no Bairro do Cipó.\nAgências locais de receptivo e táxis organizam translado saindo da praça da Basílica para todos os pontos turísticos da zona rural.\nA proximidade do centro urbano com a natureza permite tomar um café da manhã na praça, passar o dia na roça e retornar para jantar.\nO contraste entre o patrimônio arquitetônico religioso da Basílica e a natureza selvagem da Canastra torna Sacramento única.\nÉ a combinação ideal para quem deseja unir turismo cultural, fé, gastronomia e passeios de ecoturismo em uma única viagem.\nA cidade funciona como o ponto de apoio logístico perfeito com seus hotéis, postos de combustível e serviços de saúde.\nDeseja saber mais sobre as atrações da Gruta dos Palhares ou sobre as cachoeiras do município?",
   "question": "Qual destino rural você deseja conectar ao seu roteiro a partir da Basílica?",
   "optA": {
    "label": "Quero ver informações sobre o Parque Municipal da Gruta dos Palhares.",
    "target": "01",
    "cross": "gruta",
    "raw": "Ir para NÓ 01 (Gira para Gruta)"
   },
   "optB": {
    "label": "Quero ver as opções de cachoeiras e ecoturismo espalhadas pelo município.",
    "target": "32",
    "cross": null,
    "raw": "Ir para NÓ 32"
   }
  },
  {
   "num": "15",
   "text": "A Basílica de Nossa Senhora do Patrocínio pode ser visitada durante todo o ano, apresentando encantos específicos em cada época.\nNo mês de setembro, o santuário vive seu momento mais movimentado com a celebração da Festa da Padroeira e a novena solene.\nDurante o inverno (junho a agosto), o clima ameno do interior convida a passeios a pé pela praça e degustação de cafés e caldos quentes.\nNa primavera e verão, os jardins da Praça Getúlio Vargas ficam floridos, destacando o contraste do céu azul com a fachada clara do templo.\nDurante a Semana Santa, a Basílica é palco de procissões seculares, missas solenes do Lava-Pés e a confecção dos tapetes de serragem.\nNo período do Natal, a praça central recebe iluminação cênica especial, presépio em tamanho natural e apresentações de corais sacros.\nA igreja permanece aberta diariamente das 07h às 19h para visitas silenciosas, oração pessoal e contemplação da arquitetura.\nIndependente do mês escolhido, a hospitalidade do povo sacramentano e a paz do interior da igreja estão sempre presentes.\nÉ um refúgio permanente de serenidade e beleza no coração de Minas Gerais.\nQuer saber como fica a programação no período da festa padroeira ou dicas de roteiro de 1 dia?",
   "question": "Como você prefere planejar a data da sua visita ao centro e à Basílica?",
   "optA": {
    "label": "Quero ver um roteiro recomendado para aproveitar 1 dia inteiro no centro histórico.",
    "target": "30",
    "cross": null,
    "raw": "Ir para NÓ 30"
   },
   "optB": {
    "label": "Quero saber como agendar visitas guiadas para grupos de estudantes ou caravanas.",
    "target": "22",
    "cross": null,
    "raw": "Ir para NÓ 22"
   }
  },
  {
   "num": "16",
   "text": "As celebrações e sacramentos na Basílica Santuário de Nossa Senhora do Patrocínio seguem uma rotina litúrgica bem organizada.\nMissas diárias são celebradas na nave central em horários fixos pela manhã e ao final da tarde, acolhendo fiéis locais e visitantes.\nAos domingos, o templo realiza celebrações solenes com a presença do coral paroquial e execução de cantos sacros no órgão eletrônico.\nConfissões individuais são atendidas pelos sacerdotes da paróquia em horários específicos nos confessionários de madeira entalhada.\nBatizados, casamentos de casais da região e jubileus de ordenação preenchem a agenda do santuário nos finais de semana.\nDurante as missas de festa patronal, a Basílica atinge sua capacidade máxima com devotos ocupando toda a nave central e corredores.\nO atendimento da secretaria paroquial funciona ao lado do templo para emissão de certidões, intenções de missa e informações litúrgicas.\nSua condição de Basílica permite que os fiéis alcancem indulgências plenárias em datas festivas estabelecidas pela Santa Sé.\nÉ um centro vivo de espiritualidade católica, mantendo a chama da fé acesa há mais de dois séculos em Sacramento.\nQuer saber mais sobre as tradições da festa patronal de setembro ou sobre o acervo sacro do museu?",
   "question": "Qual vertente da prática religiosa e cultural do santuário você quer explorar?",
   "optA": {
    "label": "Quero detalhes sobre a programação da festa patronal de Nossa Senhora do Patrocínio.",
    "target": "07",
    "cross": null,
    "raw": "Ir para NÓ 07"
   },
   "optB": {
    "label": "Quero saber sobre as peças de arte sacra preservadas no Museu Histórico.",
    "target": "23",
    "cross": null,
    "raw": "Ir para NÓ 23"
   }
  },
  {
   "num": "17",
   "text": "O entorno da Basílica e as praças de Sacramento contam com árvores centenárias que emolduram a arquitetura neoclássica do santuário.\nPalmeiras imperiais, oitizeiros e ipês frondosos fornecem sombra fresca para os visitantes que descansam nos bancos de alvenaria.\nDurante os meses de agosto e setembro, a floração dos ipês amarelos e rosa ao redor da praça cria um contraste fotográfico magnífico com as torres.\nPássaros nativos do Cerrado como bem-te-vis, sanhaços, beija-flores e sabias frequentam as copas das árvores da praça ao amanhecer.\nO cuidado com o paisagismo do entorno é mantido pela prefeitura em parceria com a comunidade e comerciantes do centro.\nCanteiros floridos com azaleias e moscadinhos delimitam os caminhos que levam até as rampas de acesso da entrada da igreja.\nO ar puro das montanhas do Triângulo Mineiro sopra pela praça, proporcionando um clima agradável para caminhadas a qualquer hora.\nEssa integração entre a vegetação bem cuidada e a imponência da pedra da Basílica torna a Praça Getúlio Vargas um cartão-postal vivo.\nÉ o espaço perfeito para relaxar, ler um livro ou simplesmente contemplar a rotina tranquila da vida no interior mineiro.\nQuer saber mais sobre as opções de lazer ao ar livre no centro urbano ou em parques naturais?",
   "question": "Qual ambiente natural da cidade você prefere pesquisar na sequência?",
   "optA": {
    "label": "Quero ver os detalhes das caminhadas e bosques no Parque da Gruta dos Palhares.",
    "target": "01",
    "cross": null,
    "raw": "Ir para NÓ 01"
   },
   "optB": {
    "label": "Quero dicas de esportes ao ar livre e rotas de ciclismo no entorno da cidade.",
    "target": "29",
    "cross": null,
    "raw": "Ir para NÓ 29"
   }
  },
  {
   "num": "18",
   "text": "A acústica interior da Basílica de Nossa Senhora do Patrocínio foi projetada para ampliar com clareza a voz humana e o som da música sacra.\nO pé-direito elevado da nave central aliado ao formato em abóbada do teto faz com que as ondas sonoras se propaguem suavemente.\nEm apresentações de corais e mestre de capela, o eco natural do templo gera uma reverberação majestosa típica de catedrais europeias.\nDurante as grandes solenidades, os cantos litúrgicos entoados pela assembleia e acompanhados por instrumentos encantam os presentes.\nO sistema de som moderno instalado na igreja utiliza colunas de alto-falantes direcionais para evitar distorções no som falado.\nIsso permite que as homilias dos sacerdotes sejam ouvidas com total nitidez em todos os cantos, incluindo os altares laterais.\nEstudantes de arquitetura religiosa costumam estudar a proporção do espaço e a disposição das janelas para a propagação da voz.\nO silêncio absoluto que reina no templo fora dos horários de missa transmite uma sensação imediata de paz e tranquilidade espiritual.\nUma experiência auditiva e sensorial inesquecível para quem adentra este espaço sagrado no centro de Sacramento.\nDeseja saber como a paróquia organiza eventos culturais e recitais ou sobre as pinturas do teto?",
   "question": "Qual lado da produção artística da Basílica você deseja conhecer a seguir?",
   "optA": {
    "label": "Quero conhecer o acervo de pinturas sacras e restauração do teto da igreja.",
    "target": "08",
    "cross": null,
    "raw": "Ir para NÓ 08"
   },
   "optB": {
    "label": "Quero voltar e revisar a história da reconstrução do prédio neoclássico em 1920.",
    "target": "02",
    "cross": null,
    "raw": "Ir para NÓ 02"
   }
  },
  {
   "num": "19",
   "text": "A fé celebrada na Basílica Santuário transborda para as ruas através de ricas manifestações da cultura popular e folclore mineiro.\nNo período natalino e no início de janeiro, os Ternos de Folia de Reis visitam o presépio da Basílica para entoar suas profecias e cantos.\nVestidos com fardas coloridas e empunhando violas, pandeiros e sanfonas, os foliões mantêm viva uma tradição trazida pelos pioneiros.\nNas festas de São Benedito e do Rosário, os grupos de Congada e Moçambique desfilam pela praça da matriz com tambores e danças.\nEssas manifestações representam a resistência cultural afro-brasileira e a devoção sincera que une diferentes etnias e classes sociais.\nA Basílica acolhe esses grupos folclóricos abençoando suas bandeiras e instrumentistas na porta principal do santuário.\nÉ um momento espetacular de encontro entre a liturgia oficial da Igreja e o dinamismo da cultura popular tradicional de Minas Gerais.\nTuristas e pesquisadores do folclore nacional encontram em Sacramento um campo rico de vivência e documentação dessas festas.\nA praça em frente à matriz transforma-se em um palco vivo de cores, ritmos, sonoridades e devoção popular contagiosa.\nQuer conhecer a história do Povoado do Desemboque de onde surgiram muitas dessas tradições?",
   "question": "Qual polo cultural e histórico do município você deseja explorar a seguir?",
   "optA": {
    "label": "Quero conhecer a história do Povoado do Desemboque e suas igrejas coloniais.",
    "target": "09",
    "cross": null,
    "raw": "Ir para NÓ 09"
   },
   "optB": {
    "label": "Quero ver os detalhes da antiga Estação dos Bondes Elétricos no centro urbano.",
    "target": "24",
    "cross": null,
    "raw": "Ir para NÓ 24"
   }
  },
  {
   "num": "20",
   "text": "A proximidade física entre a Basílica de N. Sra. do Patrocínio e o Colégio Allan Kardec conta a história da diversidade em Sacramento.\nA pouca distância da matriz católia, o educador Eurípedes Barsanulfo fundou em 1902 a primeira escola de pedagogia espírita do mundo.\nEssa convivência no mesmo perímetro urbano fez com que Sacramento se projetasse nacionalmente como um polo de ecumenismo e respeito.\nHoje, o prédio histórico do Colégio Allan Kardec permanece aberto como museu e centro cultural, preservando a memória de Eurípedes.\nO visitante pode percorrer o Pátio das Mangueiras, o Jasmineiro, o Salão Principal e a sala de acervo mantida por Corina Novelino.\nA rota que conecta a Basílica ao Colégio Allan Kardec atrai milhares de turistas interessados em história, educação e espiritualidade.\nO município orgulha-se de ter acolhido em seu centro urbano movimentos de fé e educação que transformaram a vida de tantas pessoas.\nAmbos os edifícios são protegidos como bens culturais de suma importância para a identidade do povo sacramentano.\nÉ uma aula prática de convivência harmoniosa, amor à cultura, valorização da história e tolerância religiosa.\nQuer saber mais sobre o Museu Histórico da cidade ou sobre a escritora Carolina Maria de Jesus?",
   "question": "Qual outro monumento cultural do centro de Sacramento você quer visitar?",
   "optA": {
    "label": "Quero saber detalhes sobre o Acervo da escritora Carolina Maria de Jesus.",
    "target": "36",
    "cross": null,
    "raw": "Ir para NÓ 36"
   },
   "optB": {
    "label": "Quero saber o que ver no Museu Histórico Municipal Corália Venites Maluf.",
    "target": "23",
    "cross": null,
    "raw": "Ir para NÓ 23"
   }
  },
  {
   "num": "21",
   "text": "A devoção a Nossa Senhora do Patrocínio tem raízes profundas na história de Sacramento, remontando às origens da colonização.\nOs primeiros povoadores recorriam à proteção da Virgem Maria para superar os desafios da travessia dos sertões do Brasil Central.\nA imagem da padroeira no altar-mor da Basílica carrega esse simbolismo de acolhimento, proteção e esperança para as famílias.\nO título de \"Patrocínio\" refere-se à proteção materna de Maria sobre as necessidades temporais e espirituais da comunidade.\nDurante os momentos difíceis da história da cidade, como epidemias e crises agrícolas, a população reunia-se no templo para rezar.\nA festa promovida em sua homenagem reúne missas solenes, procissão com a imagem florida e o tradicional canto do hino da padroeira.\nFamílias de sacramentanos residentes em outras capitais retornam à cidade natal em setembro para renovar sua devoção no santuário.\nA figura da padroeira está estampada no brasão oficial do município, demonstrando sua integração com a identidade local.\nÉ o coração afetivo que pulsa no centro da cidade e une todos os moradores sob o mesmo teto centenário.\nQuer conhecer a história da igreja matriz do Desemboque ou sobre o artesanato sacro?",
   "question": "Qual manifestação religiosa de Sacramento você prefere conhecer a seguir?",
   "optA": {
    "label": "Quero saber sobre as igrejas coloniais do Desemboque (N. Sra. do Desterro e Rosário).",
    "target": "09",
    "cross": null,
    "raw": "Ir para NÓ 09"
   },
   "optB": {
    "label": "Quero ver as opções de hospedagem próximas ao santuário no centro.",
    "target": "25",
    "cross": null,
    "raw": "Ir para NÓ 25"
   }
  },
  {
   "num": "22",
   "text": "A Basílica de Nossa Senhora do Patrocínio recebe rotineiramente grupos de peregrinos, excursões escolares e caravanas de turistas.\nA pastoral de acolhida do santuário organiza atendimento receptivo para grupos que desejam conhecer a história e arquitetura do prédio.\nVisitas guiadas podem ser agendadas previamente junto à secretaria paroquial para acompanhamento por monitores locais.\nOs estudantes aprendem no local sobre história de Minas Gerais, estilos arquitetônicos, arte sacra e preservação do patrimônio.\nO templo conta com infraestrutura de rampa de acessibilidade na entrada lateral para pessoas com deficiência e idosos.\nBanheiros limpos e adaptados situam-se no anexo paroquial para atendimento de caravanas e famílias em viagem.\nHá espaço reservado para estacionamento de ônibus de turismo nas vias laterais da Praça Getúlio Vargas com fácil desembarque.\nBrochuras informativas com o histórico da Basílica e dados do tombamento são distribuídas aos visitantes no balcão de recepção.\nÉ uma acolhida calorosa organizada para que o visitante se sinta em casa durante sua passagem por Sacramento.\nQuer saber mais sobre agendamentos de grupos ou sobre os horários de funcionamento?",
   "question": "Quer detalhes sobre como agendar viagens de grupos ou sobre a infraestrutura da praça?",
   "optA": {
    "label": "Quero saber os horários das missas, visitação e funcionamento do santuário.",
    "target": "06",
    "cross": null,
    "raw": "Ir para NÓ 06"
   },
   "optB": {
    "label": "Quero voltar e ver as opções de gastronomia e restaurantes no entorno.",
    "target": "12",
    "cross": null,
    "raw": "Ir para NÓ 12"
   }
  },
  {
   "num": "23",
   "text": "O Museu Histórico Municipal Corália Venites Maluf é a parada perfeita para quem deseja aprofundar-se na história da cidade.\nInstalado em um belo casarão histórico no centro urbano, a poucos metros da Basílica, o museu guarda um acervo riquíssimo.\nEntre os objetos em exposição, destacam-se o primeiro telefone de parede utilizado na cidade e aparelhos de rádio antigos.\nO museu conserva mobílias do século XIX, indumentárias de época, utensílios da zona rural e fotos raras da construção da Basílica.\nUma das relíquias mais valiosas do acervo é o livro original contendo o documento da primeira Constituição do Município.\nO espaço também preserva documentos sobre a fundação do Desemboque, a expansão do café e o transporte pelos bondes elétricos.\nMonitores capacitados conduzem os visitantes pelas salas temáticas, contando detalhes e causos da formação de Sacramento.\nA visita ao museu complementa de forma impecável a imersão histórica iniciada na Praça Getúlio Vargas e na Basílica.\nÉ uma viagem ao passado que revela o pioneirismo e a riqueza cultural do povo do Triângulo Mineiro.\nDeseja saber mais sobre outros edifícios históricos como a Estação dos Bondes ou sobre a literatura local?",
   "question": "Qual monumento do centro histórico você quer descobrir agora?",
   "optA": {
    "label": "Quero ver a história da antiga Estação dos Bondes Elétricos de 1913.",
    "target": "24",
    "cross": null,
    "raw": "Ir para NÓ 24"
   },
   "optB": {
    "label": "Quero saber sobre a escritora Carolina Maria de Jesus e seu acervo.",
    "target": "36",
    "cross": null,
    "raw": "Ir para NÓ 36"
   }
  },
  {
   "num": "24",
   "text": "A antiga Estação dos Bondes Elétricos é um dos mais importantes marcos do patrimônio industrial de Sacramento.\nConstruído em 1913, o edifício abrigava o ponto central do moderno sistema de transporte público sobre trilhos da cidade.\nPara alimentar os bondes elétricos e iluminar a cidade, foi construída na mesma época a histórica Usina Hidrelétrica Cajuru no Rio Borá.\nApós a desativação dos bondes, o prédio da estação foi totalmente restaurado e requalificado para servir à comunidade.\nHoje, o espaço funciona como o principal centro de comercialização de produtos regionais, artesanato local e doces típicos.\nLá o visitante pode degustar e comprar o legítimo Queijo Canastra, doces de leite cremosos, licores e compotas caseiras.\nO prédio preserva os traços arquitetônicos industriais do início do século XX, servindo como lindo cenário para fotografias.\nÉ a combinação perfeita entre a preservação da memória do transporte histórico e a valorização dos produtores rurais locais.\nUm ponto turístico imperdível localizado no centro urbano de Sacramento, próximo à Basílica de Nossa Senhora do Patrocínio.\nDeseja saber mais sobre a produção do Queijo Minas Artesanal ou sobre onde se hospedar?",
   "question": "O que mais te atrai no patrimônio e na gastronomia de Sacramento?",
   "optA": {
    "label": "Quero saber como é feito o famoso Queijo Minas Artesanal nas fazendas.",
    "target": "28",
    "cross": null,
    "raw": "Ir para NÓ 28"
   },
   "optB": {
    "label": "Quero ver as opções de pousadas e hotéis no centro histórico.",
    "target": "25",
    "cross": null,
    "raw": "Ir para NÓ 25"
   }
  },
  {
   "num": "25",
   "text": "Se hospedar no centro histórico de Sacramento permite ao turista vivenciar o charme da cidade a partir da Praça Getúlio Vargas.\nHá opções de hotéis tradicionais e pousadas familiares instaladas em casarões restaurados nas proximidades da Basílica.\nFicar no centro facilita fazer passeios a pé até o Colégio Allan Kardec, Museu Histórico, restaurantes e lojas de doces.\nO visitante pode acorda com o som dos sinos da Basílica badalando e desfrutar de um farto café da manhã com produtos da roça.\nPara quem prefere a tranquilidade do campo, há hotéis-fazenda e pousadas rurais situadas ao longo da rodovia que leva à Gruta.\nA rede hoteleira da cidade oferece opções para todos os orçamentos, garantindo conforto, Wi-Fi, estacionamento e segurança.\nDurante as grandes festas religiosas e feriados nacionais, é altamente recomendável realizar a reserva com antecedência.\nA hospitalidade mineira está presente no atendimento caloroso dos proprietários, sempre prontos a dar boas dicas do município.\nA escolha perfeita de pouso para descansar após um dia de exploração pelo patrimônio e natureza de Sacramento.\nDeseja saber mais sobre os restaurantes do centro ou sobre o roteiro pelas cachoeiras?",
   "question": "Qual a sua prioridade para os próximos dias de viagem pela cidade?",
   "optA": {
    "label": "Quero ver a lista das principais cachoeiras de Sacramento para banho.",
    "target": "32",
    "cross": null,
    "raw": "Ir para NÓ 32"
   },
   "optB": {
    "label": "Quero ver o restaurante típico localizado dentro do Parque da Gruta dos Palhares.",
    "target": "12",
    "cross": null,
    "raw": "Ir para NÓ 12"
   }
  },
  {
   "num": "26",
   "text": "Para realizar o passeio a pé pelo centro histórico ao redor da Basílica com total conforto, algumas orientações práticas ajudam bastante.\nRecomenda-se o uso de calçados confortáveis e fechados, ideais para caminhar nos paralelepípedos e calçadas da praça.\nRoupas leves são indicadas durante o dia, mas é bom levar um casaco fino caso vá frequentar missas noturnas na igreja.\nRespeitar o silêncio e o ambiente sagrado do templo durante as celebrações e orações pessoais é uma norma fundamental.\nFotografias com flash são desaconselhadas no interior do santuário para preservar as pinturas sacras antigas e o recolhimento.\nGarrafas de água podem ser reabastecidas nos estabelecimentos do centro, mantendo o visitante hidratado nas caminhadas.\nO centro urbano é extremamente seguro, permitindo caminhar com tranquilidade mesmo nos horários do início da noite.\nA maior parte do comércio e atrações culturais aceita pagamento via PIX e cartões digitais, facilitando as compras de viagens.\nCom esses cuidados simples, sua caminhada pelo centro histórico será relaxante, enriquecedora e inesquecível.\nQuer dicas sobre os melhores horários e luzes para tirar fotos da fachada da Basílica?",
   "question": "Qual detalhe prático de fotografia ou passeios você deseja ver?",
   "optA": {
    "label": "Quero ver as melhores dicas de fotografia para registrar a Basílica e suas torres.",
    "target": "27",
    "cross": null,
    "raw": "Ir para NÓ 27"
   },
   "optB": {
    "label": "Quero voltar e ver a rota a pé pelos monumentos do centro urbano.",
    "target": "13",
    "cross": null,
    "raw": "Ir para NÓ 13"
   }
  },
  {
   "num": "27",
   "text": "Fotografar a Basílica de Nossa Senhora do Patrocínio rende imagens espetaculares para guardar de lembrança da viagem a Sacramento.\nO melhor enquadramento da fachada completa é feito a partir do centro da Praça Getúlio Vargas, utilizando as palmeiras como moldura.\nA luz do sol da manhã ilumina diretamente a fachada principal, destacando as cores neoclássicas e o relógio alemão no topo da torre.\nAo final da tarde, a hora de ouro produz reflexos avermelhados nas janelas e vitrais, criando uma iluminação cênica natural e suave.\nÀ noite, a iluminação especial do templo acende-se, permitindo fotos noturnas impressionantes das colunas e das torres sob o céu estrelado.\nNo interior, utilize o enquadramento centralizado a partir da nave em direção ao altar-mor para capturar a simetria das abóbadas.\nFotografar os vitrais por dentro aproveitando a luz que vem de fora gera contrastes coloridos ricos para postar nas redes sociais.\nRespeite os momentos de celebração litúrgica, evitando circular com câmeras ou fotografar durante a celebração das missas.\nCada detalhe do templo revela a imponência da arquitetura religiosa que transforma o centro da cidade em um cartão-postal.\nQuer conhecer outros pontos fotográficos marcantes em Sacramento, como a Gruta dos Palhares ou cachoeiras?",
   "question": "Qual outro cenário marcante de Sacramento você quer conhecer?",
   "optA": {
    "label": "Quero ver as dicas de fotografia do pórtico monumental da Gruta dos Palhares.",
    "target": "01",
    "cross": null,
    "raw": "Ir para NÓ 01"
   },
   "optB": {
    "label": "Quero ver as paisagens fotográficas das grandes cachoeiras de Sacramento.",
    "target": "32",
    "cross": null,
    "raw": "Ir para NÓ 32"
   }
  },
  {
   "num": "28",
   "text": "O Queijo Minas Artesanal da Canastra produzido nas fazendas de Sacramento é um dos maiores orgulho gastronômicos do município.\nA tradição mantida desde o século XVIII utiliza leite cru de vaca recém-tirado, o \"pingo\" tradicional e salivação com sal grosso.\nAs peças descansam em prateleiras de madeira nativa, desenvolvendo uma casca amarelada e sabor que combina rusticidade e acidez.\nA visitação a fazendas produtoras rurais no município permite acompanhar o trabalho do queijeiro desde a ordenha do gado ao amanhecer.\nNo final do passeio pelas instalações de maturação, o visitante participa de degustações com café coado no pano e doces de leite.\nO Queijo da Canastra produzido no município ostenta premiações nacionais e internacionais pela sua excelência de sabor e textura.\nAo visitar o centro histórico da Basílica, o turista pode adquirir peças de queijos diretamente nas lojas da antiga Estação dos Bondes.\nLevar um queijo curado para casa é garantir que o sabor inesquecível da viagem a Minas Gerais acompanhe você por muito tempo.\nÉ a valorização direta dos produtores rurais e da herança gastronômica imaterial do Triângulo Mineiro.\nDeseja saber mais sobre a gastronomia no centro urbano ou sobre eventos rurais?",
   "question": "Qual vertente da culinária mineira você quer explorar a seguir?",
   "optA": {
    "label": "Quero conhecer as docerias e lojas de artesanato ao redor da Basílica.",
    "target": "12",
    "cross": null,
    "raw": "Ir para NÓ 12"
   },
   "optB": {
    "label": "Quero saber sobre as festas e a galinhada dos tropeiros no Desemboque.",
    "target": "19",
    "cross": null,
    "raw": "Ir para NÓ 19"
   }
  },
  {
   "num": "29",
   "text": "A cidade de Sacramento e sua zona rural oferecem excelentes rotas para praticantes de corrida urbana, caminhadas e ciclismo.\nA partir da Praça Getúlio Vargas, ciclistas de estrada e mountain bike (MTB) iniciam trajetos que levam a vilarejos e paisagens rurais.\nA avenida que conecta a Basílica à saída para a Gruta dos Palhares possui trechos arborizados e iluminação, ideal para caminhadas no fim de tarde.\nPara quem pratica ciclismo, a rota até a Gruta dos Palhares (12 km de asfalto) é uma das preferidas pelo relevo ondulado e seguro.\nEstradas de terra batida partindo do centro levam aos cânions, fazendas de café, alambiques e mirantes da Serra da Canastra.\nGrupos de ciclismo locais recebem visitantes de fora, compartilhando rotas de GPS e dicas dos melhores pontos de apoio na roça.\nApós o exercício físico, nada melhor do que retornar à praça da Basílica para relaxar, tomar uma água de coco e conversar.\nA integração entre o esporte ao ar livre e o turismo histórico torna a estadia na cidade ativa, saudável e revitalizante.\nUma forma sustentável e cheia de energia para explorar todas as vertentes do município de Sacramento.\nQuer saber mais sobre as cachoeiras de acesso técnico ou esportes radicais?",
   "question": "Quer subir o nível de aventura conhecendo as cachoeiras radicais da região?",
   "optA": {
    "label": "Quero ver as rotas para a Cachoeira da Parida e Cânion do Azulim.",
    "target": "34",
    "cross": null,
    "raw": "Ir para NÓ 34"
   },
   "optB": {
    "label": "Quero ver as cachoeiras mais tranquilas com acesso fácil para a família.",
    "target": "30",
    "cross": null,
    "raw": "Ir para NÓ 30"
   }
  },
  {
   "num": "30",
   "text": "Para quem deseja aproveitar 1 dia focado no patrimônio cultural e religioso no centro de Sacramento, este roteiro é ideal:\nManhã (08h30 às 12h00): Comece pela Basílica de N. Sra. do Patrocínio. Aprecie os vitrais, visite o altar-mor e tire fotos na Praça Getúlio Vargas.\nAlmoço (12h00 às 13h30): Delicie-se com a autêntica comida mineira em um dos restaurantes tradicionais situados ao redor da praça central.\nTarde (13h30 às 17h00): Faça o percurso a pé visitando o Colégio Allan Kardec, o Museu Histórico e a antiga Estação dos Bondes Elétricos.\nFinal de Tarde (17h00 às 18h00): Pare para um café com pão de queijo e compre queijos e doces de leite nas lojas especializadas do centro.\nSe você tiver um segundo dia na cidade, dedique-o para visitar o Parque da Gruta dos Palhares ou as cachoeiras do município.\nEsse itinerário garante uma imersão profunda na história, na fé, na arquitetura e na gastronomia sem pressa e com muito conforto.\nA proximidade entre todas essas atrações torna o passeio agradável para todas as idades, desde crianças a idosos.\nUm dia inesquecível no coração cultural de uma das cidades mais históricas do Triângulo Mineiro.\nGostaria de detalhes sobre as opções para expandir a viagem para um final de semana completo?",
   "question": "Como prefere ajustar o planejamento do seu tempo em Sacramento?",
   "optA": {
    "label": "Quero expandir o roteiro para um final de semana completo incluindo a Gruta.",
    "target": "31",
    "cross": null,
    "raw": "Ir para NÓ 31"
   },
   "optB": {
    "label": "Quero conferir a lista completa de cachoeiras para o segundo dia de viagem.",
    "target": "32",
    "cross": null,
    "raw": "Ir para NÓ 32"
   }
  },
  {
   "num": "31",
   "text": "Planejar a visita à Basílica e ao centro urbano considerando o calendário de eventos garante uma experiência muito rica.\nSe o seu objetivo é vivenciar a religiosidade e o clima de festa, visite durante a Festa da Padroeira em meados de setembro.\nDurante essa época, a praça Getúlio Vargas fica repleta de barracas, apresentações culturais e missas solenes no santuário.\nSe você busca tranquilidade para fotografar a arquitetura e visitar os museus com calma, prefira os dias de semana (terça a quinta).\nAos domingos pela manhã, o centro ganha vida com os moradores locais frequentando as missas e passeando na praça com as crianças.\nO comércio de doces e queijos na Estação dos Bondes funciona nos finais de semana, facilitando as compras dos turistas de fora.\nPara evitar imprevistos com fechamento de museus, programe suas visitas culturais para os horários entre 09h e 16h30.\nLeve em consideração que a cidade é calma e acolhedora, permitindo ajustar o ritmo do passeio de acordo com suas preferências.\nCom esse planejamento simples, sua passagem por Sacramento será proveitosa, relaxante e repleta de boas memórias.\nQuer ver como combinar o passeio do centro com atrações naturais no município?",
   "question": "O que você quer explorar na zona rural após visitar o centro histórico?",
   "optA": {
    "label": "Quero ver informações sobre a Gruta dos Palhares e suas piscinas naturais.",
    "target": "01",
    "cross": null,
    "raw": "Ir para NÓ 01"
   },
   "optB": {
    "label": "Quero ver as opções de cachoeiras e passeios de ecoturismo no município.",
    "target": "32",
    "cross": null,
    "raw": "Ir para NÓ 32"
   }
  },
  {
   "num": "32",
   "text": "Além do rico patrimônio religioso da Basílica, o município de Sacramento é abençoado com mais de 220 cachoeiras catalogadas.\nA **Cachoeira Nascente das Gerais** destaca-se com seus 83 metros de queda e complexo com restaurantes e poços naturais.\nA **Cachoeira do João Inácio** oferece 3 quedas sequenciais em meio à vegetação preservada, com área para acampamento.\nA **Cachoeira da Parida** é encravada em um belo cânion com queda dupla e poço verde-esmeralda para quem gosta de nadar.\nPara praticantes de esportes radicais como o rapel aquático, a **Cachoeira Azulim** apresenta as condições perfeitas em seu cânion.\nFamílias com crianças encontram na **Cachoeira do César** um local com praia de pedras e águas rasas e calmas para banho.\nJá a **Cachoeira do Amanteigado** é uma ótima opção com poço fundo para banho e acesso totalmente gratuito aos visitantes.\nAs cachoeiras espalham-se por diferentes regiões do município, exigindo pequenos deslocamentos de carro por estradas rurais.\nCombinar a visita cultural na Basílica com banhos de cachoeira renovadores é o segredo para uma viagem perfeita a Sacramento.\nQuer detalhes específicos sobre a estrutura da Cachoeira Nascente das Gerais ou da Parida?",
   "question": "Qual cachoeira você quer detalhar na sua pesquisa turística agora?",
   "optA": {
    "label": "Quero ver os detalhes da Cachoeira Nascente das Gerais (83m e estrutura).",
    "target": "16",
    "cross": null,
    "raw": "Ir para NÓ 16"
   },
   "optB": {
    "label": "Quero ver as cachoeiras de acesso radical como a Parida e Azulim.",
    "target": "34",
    "cross": null,
    "raw": "Ir para NÓ 34"
   }
  },
  {
   "num": "33",
   "text": "A presença do Rio Grande e da Represa de Jaguara confere a Sacramento opções fantásticas de ecoturismo e navegação.\nNo Bairro Rural do Cipó, os visitantes encontram marinas, ranchos para aluguel, restaurantes de peixe frito e áreas de camping.\nO reservatório do Rio Grande forma um imenso lago navegável, muito procurado para passeios de lancha, jet-ski e pesca esportiva.\nPescadores de todo o Brasil frequentam as águas de Sacramento em busca de peixes nobres como o tucunaré e a tucunaré-azul.\nAnualmente, o reservatório é palco da tradicional Procissão Fluvial de Nossa Senhora Aparecida, reunindo dezenas de embarcações ornamentadas.\nA ligação histórica com as águas também passa pelo Rio Borá, que alimentava a antiga Usina Hidrelétrica Cajuru construída em 1913.\nA usina gerava energia para os bondes elétricos e abastecia a iluminação pública das cidades de Sacramento e Conquista.\nÉ o lado náutico e industrial que se soma ao patrimônio religioso da Basílica e às montanhas da Serra da Canastra.\nUma diversidade de cenários que surpreende todos os turistas que visitam o município mineiro.\nGostaria de saber mais sobre a história industrial da usina ou sobre os passeios de barco?",
   "question": "Qual atração ligada às águas da cidade você deseja explorar?",
   "optA": {
    "label": "Quero ver a história da Usina Cajuru de 1913 que abastecia os bondes.",
    "target": "24",
    "cross": null,
    "raw": "Ir para NÓ 24"
   },
   "optB": {
    "label": "Quero voltar e pesquisar mais sobre a Basílica de N. Sra. do Patrocínio.",
    "target": "01",
    "cross": null,
    "raw": "Ir para NÓ 01"
   }
  },
  {
   "num": "34",
   "text": "Para quem deseja se aventurar após conhecer a cultura do centro histórico, a Cachoeira da Parida é um destino imperdível.\nLocalizada em um cânion estreito e preservado, ela exige uma caminhada técnica por trilha em meio à vegetação do Cerrado.\nEm determinado trecho da trilha no cânion, o visitante precisa nadar pelo canal de água para alcançar a queda principal.\nA recompensa é a visão monumental da queda dupla caindo sobre um poço cristalino cercado por altos paredões de rocha.\nRecomenda-se a contratação de guias rurais locais credenciados para realizar o percurso com total segurança e orientação.\nA propriedade particular oferece área reservada para camping sob as árvores e uma lagoa rasa auxiliar para relaxar.\nA taxa de preservação de R$ 25,00 por visitante garante a conservação desse santuário ecológico escondido na zona rural.\nUm passeio perfeito para renovar as energias e vivenciar o lado selvagem e exuberante da natureza de Sacramento.\nQuer saber mais sobre esportes radicais como o rapel na Cachoeira Azulim?",
   "question": "Qual esporte de aventura ou trilha técnica te interessa saber mais?",
   "optA": {
    "label": "Quero saber sobre a prática de rapel aquático e canionismo na Cachoeira Azulim.",
    "target": "35",
    "cross": null,
    "raw": "Ir para NÓ 35"
   },
   "optB": {
    "label": "Quero voltar para opções de passeios tranquilos no centro histórico.",
    "target": "03",
    "cross": null,
    "raw": "Ir para NÓ 03"
   }
  },
  {
   "num": "35",
   "text": "A Cachoeira Azulim é o ponto de referência para os praticantes de esportes radicais e canionismo que visitam Sacramento.\nSua queda de 10 metros de altura corre por um cânion rochoso estreito, criando o cenário ideal para a descida em rapel aquático.\nEquipes de turismo de aventura fornecem instrutores qualificados e equipamentos de segurança como capacetes e neoprenes.\nA emoção de descer a parede rochosa molhada pela correnteza atrai grupos de jovens e aventureiros de todo o país.\nO leito rochoso do riacho apresenta piscinas naturais formadas pela erosão das águas ao longo de milhares de anos.\nA caminhada de acesso até o topo do cânion passa por matorrais preservados do Cerrado, oferecendo contato direto com a flora.\nAlém do rapel, a área permite saltos orientados em poços fundos para quem busca uma dose extra de adrenalina na natureza.\nÉ o contraponto radical e dinâmico à serenidade e reflexão oferecidas pela Basílica de Nossa Senhora do Patrocínio.\nUma demonstração da incrível variedade de atrativos turísticos reunidos em um único município de Minas Gerais.\nDeseja saber mais sobre o patrimônio literário de Carolina Maria de Jesus ou sobre o centro histórico?",
   "question": "Qual informação final você deseja para concluir seu planejamento?",
   "optA": {
    "label": "Quero ver informações sobre a escritora Carolina Maria de Jesus e seu acervo.",
    "target": "36",
    "cross": null,
    "raw": "Ir para NÓ 36"
   },
   "optB": {
    "label": "Quero retornar ao início da navegação na Basílica de N. Sra. do Patrocínio.",
    "target": "01",
    "cross": null,
    "raw": "Ir para NÓ 01"
   }
  },
  {
   "num": "36",
   "text": "Para concluir nosso roteiro pela Basílica e pelo centro urbano, é essencial homenagear a escritora **Carolina Maria de Jesus**.\nNascida em Sacramento em 14 de março de 1914, a autora do aclamado livro \"Quarto de Despejo\" viveu sua infância neste centro histórico.\nFoi na matriz de Nossa Senhora do Patrocínio que Carolina foi batizada e deu seus primeiros passos pelas calçadas da praça central.\nO município guarda a custódia preciosa de manuscritos inéditos, cadernos originais e objetos pessoais doados por sua família.\nA prefeitura e pesquisadores atuam no projeto de implementação de um memorial para salvaguardar e divulgar sua obra internacional.\nCarolina representa a força da mulher negra, a genialidade da literatura periférica e o orgulho cultural de Sacramento no mundo.\nVisitar o centro de Sacramento é conectar-se com essa terra que gerou ícones da educação, da arte, da fé e da literatura brasileira.\nUnindo a grandiosidade da Basílica, a Gruta dos Palhares, o Desemboque e Carolina Maria de Jesus, o município é um tesouro vivo.\nEsperamos que este guia virtual completo auxilie você a planejar uma viagem inesquecível pelo patrimônio de Sacramento!",
   "question": "Como deseja finalizar sua consulta interativa sobre a Basílica de N. Sra. do Patrocínio?",
   "optA": {
    "label": "Recomeçar o passeio virtual pela Basílica desde o NÓ 01.",
    "target": "01",
    "cross": null,
    "raw": "Ir para NÓ 01"
   },
   "optB": {
    "label": "Encerrar e voltar ao Menu Principal do Citypass.",
    "target": "MENU"
   }
  }
 ],
 "cachoeiras": [
  {
   "num": "01",
   "text": "Seja bem-vindo ao módulo de exploração do patrimônio natural e ecoturístico de Sacramento!\nA cidade de Sacramento é mundialmente abençoada com uma das maiores riquezas hídricas do sudoeste mineiro.\nCercada pelas belezas do Cerrado e próxima à Serra da Canastra, a região ostenta dezenas de quedas d'água e poços cristalinos.\nSuas cachoeiras variam desde opções com infraestrutura e fácil acesso até refúgios intocados em canyons imponentes.\nAlém do valor recreativo, os rios e cachoeiras locais sustentam ecossistemas ricos em biodiversidade de fauna e flora.\nLocais como o Parque Ecológico da Gruta dos Palhares e as cachoeiras do Basílio e Sampaio atritam milhares de ecoturistas.\nMergulhar nessas águas puras é uma oportunidade singular para renovar as energias e conectar-se diretamente com a natureza.\nO turismo sustentável na região visa preservar essa herança natural inestimável para as futuras gerações.\nPreparamos um guia completo interativo para você planejar suas aventuras, banhos de cachoeira e caminhadas ecológicas.\nComo você prefere iniciar a nossa jornada virtual pelas cachoeiras e maravilhas naturais de Sacramento?",
   "question": "Por qual aspecto do ecoturismo de Sacramento você gostaria de começar?",
   "optA": {
    "label": "Quero entender a formação geográfica e o bioma do Cerrado na região.",
    "target": "02",
    "cross": null,
    "raw": "Ir para NÓ 02"
   },
   "optB": {
    "label": "Prefiro conhecer diretamente as principais cachoeiras e atrativos hídricos.",
    "target": "03",
    "cross": null,
    "raw": "Ir para NÓ 03"
   }
  },
  {
   "num": "02",
   "text": "A formação geográfica de Sacramento é marcada pelo encontro de formações rochosas do Arenito Botucatu e basalto.\nEssa geologia singular propiciou o surgimento de impressionantes cânions, cavernas de arenito e inúmeros cursos d'água.\nInserida no bioma Cerrado, a vegetação local varia entre matas de galeria, veredas com buritis e campos limpos.\nOs rios que cortam o município alimentam a bacia do Rio Grande, formando cascatas de águas límpidas e mineralizadas.\nA altitude e o relevo acidentado favorecem o surgimento de quedas d'água de alturas variadas em vales profundos.\nO solo permeável permite a filtragem natural da água, garantindo a transparência dos poços propícios para banho.\nDurante o ano, o ciclo de chuvas altera significativamente o volume do fluxo d'água e a paisagem ao entorno.\nCompreender essa geografia ajuda o visitante a apreciar melhor o valor ecológico e a fragilidade desses ecossistemas.\nUma verdadeira joia geológica e hídrica no interior do estado de Minas Gerais.\nQuer conhecer o Parque Ecológico da Gruta e Cachoeira dos Palhares ou explorar a Cachoeira do Basílio?",
   "question": "Qual atrativo natural você deseja detalhar a seguir?",
   "optA": {
    "label": "Quero conhecer o famoso Parque Ecológico dos Palhares e sua queda d'água.",
    "target": "04",
    "cross": null,
    "raw": "Ir para NÓ 04"
   },
   "optB": {
    "label": "Quero explorar os detalhes e o acesso para a bela Cachoeira do Basílio.",
    "target": "05",
    "cross": null,
    "raw": "Ir para NÓ 05"
   }
  },
  {
   "num": "03",
   "text": "As cachoeiras de Sacramento destacam-se pela diversidade de cenários, volume d'água e opções para todos os perfis.\nDentre as mais frequentadas destaca-se a Cachoeira dos Palhares, localizada dentro do parque ecológico municipal.\nA Cachoeira do Basílio encanta pelos seus múltiplos patamares e poços profundos cercados por vegetação nativa.\nJá a Cachoeira do Sampaio é famosa pelas suas águas calmas e límpidas, perfeitas para um banho relaxante em família.\nPara os aventureiros que buscam cenários mais rústicos, a Cachoeira da Parida oferece trilhas e paisagens intocadas.\nA maioria dos atrativos possui acesso por estradas de terra bem conservadas que cortam fazendas e paisagens rurais.\nA prática do ecoturismo responsável e o respeito às normas de conservação são essenciais em todas as visitas.\nCada queda d'água possui suas próprias particularidades de profundidade, correnteza e estrutura receptiva.\nUma coleção inesgotável de refúgios naturais prontos para proporcionar momentos inesquecíveis de lazer.\nQuer ver os detalhes da Cachoeira dos Palhares ou prefere a tranquilidade da Cachoeira do Sampaio?",
   "question": "Qual destas cachoeiras desperta mais a sua curiosidade?",
   "optA": {
    "label": "Quero informações completas sobre o Parque e Cachoeira dos Palhares.",
    "target": "04",
    "cross": null,
    "raw": "Ir para NÓ 04"
   },
   "optB": {
    "label": "Quero ver detalhes sobre a atmosfera relaxante da Cachoeira do Sampaio.",
    "target": "06",
    "cross": null,
    "raw": "Ir para NÓ 06"
   }
  },
  {
   "num": "04",
   "text": "A Cachoeira dos Palhares está inserida no interior do Parque Ecológico da Gruta dos Palhares, a 10 km do centro.\nO parque conta com uma estrutura receptiva completa, oferecendo segurança, banheiros, lanchonete e área verde.\nA queda d'água principal é cercada por formações rochosas de arenito e densa vegetação ciliar bem preservada.\nO acesso até a área da cachoeira é feito por trilhas pavimentadas e escadarias com corrimão de apoio.\nO local é extremamente seguro para famílias, idosos e crianças que buscam um contato fácil e direto com a natureza.\nPróximo à queda, é possível sentir o spray de água fresca renovando as energias em dias quentes de verão.\nA área do parque também abriga a monumental Gruta dos Palhares, a maior caverna de arenito da América Latina.\nEssa combinação de cachoeira, caverna e infraestrutura torna o local a atração natural número um de Sacramento.\nIdeal para quem deseja passar o dia inteiro com conforto sem abrir mão do contato com o meio ambiente.\nDeseja saber mais sobre a infraestrutura do parque ou fazer a trilha ecológica da área?",
   "question": "Qual informação prática sobre o Parque dos Palhares você quer consultar?",
   "optA": {
    "label": "Quero ver detalhes da infraestrutura de lazer, quiosques e serviços do parque.",
    "target": "07",
    "cross": null,
    "raw": "Ir para NÓ 07"
   },
   "optB": {
    "label": "Quero conhecer as características das trilhas ecológicas e da flora do parque.",
    "target": "08",
    "cross": null,
    "raw": "Ir para NÓ 08"
   }
  },
  {
   "num": "05",
   "text": "A Cachoeira do Basílio é uma das quedas d'água mais impressionantes e fotogênicas do município de Sacramento.\nFormada por uma imponente parede rochosa, a água despenca em um amplo e convidativo poço para natação.\nO local é muito procurado por jovens e amantes do ecoturismo em busca de mergulhos renovadores e aventura.\nA luz do sol incidindo sobre a água durante as manhãs cria tons esverdeados e prateados na superfície do poço.\nO acesso envolve um trecho de estrada de terra seguido por uma trilha curta com grau moderado de inclinação.\nPor estar em ambiente mais nativo, o visitante deve levar seus próprios mantimentos e recolher todo o lixo produzido.\nÉ recomendável atenção ao nadar perto da queda devido à força da correnteza e à variação de profundidade.\nO cenário exuberante da mata de galeria ao entorno proporciona uma sensação profunda de isolamento e paz.\nUma parada obrigatória para quem deseja vivenciar a energia bruta das cachoeiras do sudoeste mineiro.\nQuer saber mais sobre o nível de dificuldade da trilha ou ver dicas para fotografar a Cachoeira do Basílio?",
   "question": "Como prefere orientar o seu interesse pela Cachoeira do Basílio?",
   "optA": {
    "label": "Quero detalhes sobre a trilha de acesso, caminhada e nível de dificuldade.",
    "target": "09",
    "cross": null,
    "raw": "Ir para NÓ 09"
   },
   "optB": {
    "label": "Quero ver dicas de fotografia e melhores ângulos para registrar a queda.",
    "target": "10",
    "cross": null,
    "raw": "Ir para NÓ 10"
   }
  },
  {
   "num": "06",
   "text": "A Cachoeira do Sampaio destaca-se pela sua beleza bucólica e por proporcionar um ambiente extremamente relaxante.\nCom quedas menores e poços rasos e cristalinos, é o destino preferido para quem deseja banhos de água calmarina.\nA vegetação ao redor oferece sombra natural ao longo de todo o dia, perfeita para momentos de descanso e leitura.\nO som suave da água correndo pelas pedras cria uma atmosfera natural de meditação e desaceleração.\nO acesso é relativamente tranquilo, permitindo a chegada de veículos de passeio até áreas próximas à margem do rio.\nO fundo do poço é composto predominantemente por pedras lisas e areia clara, facilitando o caminhar na água.\nPor ser uma área preservada, o silêncio do local é interrompido apenas pelo canto das aves nativas do Cerrado.\nExcelente opção para piqueniques em família, respeitando sempre a regra do descarte correto dos resíduos.\nUm verdadeiro refúgio de paz onde o tempo parece correr em um ritmo mais lento e harmonioso.\nQuer saber como chegar à Cachoeira do Sampaio ou entender as regras de segurança para banho?",
   "question": "Qual informação prática sobre a Cachoeira do Sampaio você deseja?",
   "optA": {
    "label": "Quero instruções de logística e orientação sobre como chegar ao local.",
    "target": "11",
    "cross": null,
    "raw": "Ir para NÓ 11"
   },
   "optB": {
    "label": "Quero entender as orientações de segurança e cuidados essenciais no banho.",
    "target": "12",
    "cross": null,
    "raw": "Ir para NÓ 12"
   }
  },
  {
   "num": "07",
   "text": "O Parque Ecológico da Gruta dos Palhares conta com uma estrutura pensada para acolher visitantes de todas as idades.\nO complexo possui amplo estacionamento gratuito, portaria com controle de acesso e sanitários limpos e adaptados.\nUma lanchonete e restaurante no local servem porções, bebidas geladas e pratos típicos da culinária mineira.\nÁreas arborizadas com quiosques e bancos convidam o visitante a relaxar à sombra entre um passeio e outro.\nPara as crianças, o parque dispõe de playground e áreas gramadas com espaço para brincadeiras ao ar livre.\nA presença de monitores e funcionários garante a organização, a limpeza e o apoio informativo aos turistas.\nAs alamedas do parque são asfaltadas e calçadas, permitindo fácil deslocamento de cadeirantes e carrinhos de bebê.\nA proximidade entre a lanchonete, a gruta e a área da cachoeira torna o passeio prático e nada cansativo.\nUma infraestrutura exemplar que alia a conservação ambiental ao conforto e bem-estar dos visitantes.\nDeseja conhecer a Gruta dos Palhares no mesmo parque ou ver os horários de funcionamento?",
   "question": "Como deseja prosseguir no planejamento da sua visita ao Parque dos Palhares?",
   "optA": {
    "label": "Quero ver informações sobre a famosa Gruta dos Palhares localizada no parque.",
    "target": "13",
    "cross": null,
    "raw": "Ir para NÓ 13"
   },
   "optB": {
    "label": "Quero consultar os horários de funcionamento, taxas e regras do parque.",
    "target": "18",
    "cross": null,
    "raw": "Ir para NÓ 18"
   }
  },
  {
   "num": "08",
   "text": "As trilhas internas do Parque dos Palhares oferecem uma aula prática e viva sobre o ecossistema do Cerrado mineiro.\nDurante a caminhada de acesso à cachoeira, é possível contemplar árvores casca-grossa e plantas medicinais nativas.\nOrquídeas, bromélias e samambaias ornamentam os paredões rochosos e troncos ao longo de todo o percurso.\nPlacas educativas instaladas nas trilhas identificam espécies da flora local, enriquecendo o passeio ecológico.\nA área é abrigo para diversas espécies de pássaros, tucanos, maritacas, macacos-prego e pequeninos roedores.\nOs caminhos são sombreados pela copa das árvores, proporcionando um microclima agradável mesmo nos dias quentes.\nO ruído da brisa nas folhas misturado ao som da água caindo cria uma sinfonia relaxante durante a caminhada.\nAs trilhas são limpas e bem sinalizadas, dispensando a necessidade de contratação de guias para o trajeto interno.\nUma excelente oportunidade para a prática de caminhadas leves e contemplação direta da biodiversidade.\nQuer saber mais sobre a fauna e flora do Cerrado mineiro ou ver dicas para fotografar a natureza?",
   "question": "Qual aspecto ambiental das trilhas você deseja aprofundar agora?",
   "optA": {
    "label": "Quero conhecer mais sobre a fauna e flora características do Cerrado em Sacramento.",
    "target": "19",
    "cross": null,
    "raw": "Ir para NÓ 19"
   },
   "optB": {
    "label": "Quero ver dicas de fotografia para registrar plantas, aves e paisagens nas trilhas.",
    "target": "10",
    "cross": null,
    "raw": "Ir para NÓ 10"
   }
  },
  {
   "num": "09",
   "text": "A trilha para a Cachoeira do Basílio exige um nível moderado de preparo físico e atenção dos praticantes.\nO percurso possui cerca de 1,5 km a partir do ponto onde os veículos costumam estacionar na área rural.\nO caminho apresenta trechos com terreno irregular, pedras soltas, raízes expostas e pequenas subidas acentuadas.\nRecomenda-se o uso de tênis com bom solado antiderrapante ou botas de caminhada para evitar escorregões.\nDurante a época de chuvas, alguns trechos da trilha podem apresentar lamaçal e pedras úmidas e escorregadias.\nO trajeto cruza áreas abertas e trechos de mata fechada, sendo ideal levar repelente de insetos e protetor solar.\nPessoas com mobilidade reduzida ou problemas articulares graves devem avaliar a caminhada com cautela.\nFazer a caminhada em ritmo leve, apreciando o visual do vale, torna o trajeto prazeroso e revigorante.\nA recompensa ao chegar e avistar a imponente queda d'água faz cada passo do trajeto valer a pena.\nDeseja consultar a lista de equipamentos recomendados ou entender sobre segurança e trombas d'água?",
   "question": "Qual informação de preparação para a trilha do Basílio você prefere ver?",
   "optA": {
    "label": "Quero ver a lista de roupas, calçados e equipamentos indicados para trekking.",
    "target": "14",
    "cross": null,
    "raw": "Ir para NÓ 14"
   },
   "optB": {
    "label": "Quero saber quais cuidados tomar contra o fenômeno da tromba d'água no verão.",
    "target": "15",
    "cross": null,
    "raw": "Ir para NÓ 15"
   }
  },
  {
   "num": "10",
   "text": "Fotografar as cachoeiras de Sacramento exige pequenas técnicas para capturar toda a magia e fluidez do cenário.\nPara obter aquele efeito \"véu de noiva\" na água caindo, utilize um tripé e ajuste a câmera para longa exposição.\nNos smartphones, ative o modo noturno ou utilize aplicativos que simulem a velocidade lenta do obturador.\nO uso de filtros polarizadores ajuda a eliminar reflexos indesejados na água e realça as cores das pedras e plantas.\nOs melhores horários para fotografar são o início da manhã e o fim da tarde, quando a luz solar fica mais suave.\nEvite o meio-dia, pois a luz solar direta no topo da queda cria contrastes muito fortes e sombras duras no poço.\nAproveite as pedras cobertas de musgo e a vegetação nativa para criar molduras naturais nas suas composições.\nInclua pessoas na cena para dar uma noção clara de escala e da magnitude da queda d'água.\nProteja sempre seus equipamentos eletrônicos com capas impermeáveis para evitar danos causados pelo respingo.\nQuer saber quais são os melhores horários para visitar as cachoeiras ou ver o checklist de mochilas?",
   "question": "Qual detalhe vai te ajudar a preparar seu ensaio fotográfico nas cachoeiras?",
   "optA": {
    "label": "Quero ver os melhores horários do dia para banho, iluminação e tranquilidade.",
    "target": "31",
    "cross": null,
    "raw": "Ir para NÓ 31"
   },
   "optB": {
    "label": "Quero ver como proteger equipamentos e o que levar na mochila de ataque.",
    "target": "23",
    "cross": null,
    "raw": "Ir para NÓ 23"
   }
  },
  {
   "num": "11",
   "text": "O acesso às cachoeiras de Sacramento envolve trechos de rodovias asfaltadas combinados com estradas municipais de terra.\nPara chegar à maioria das cachoeiras rurais, o visitante percorre trechos que cruzam belas fazendas da região.\nA sinalização nas estradas rurais é simples, tornando recomendável o uso de aplicativos de GPS ou mapas offline.\nEm períodos de seca prolongada, a poeira nas estradas de terra é intensa, exigindo atenção com a distância dos veículos.\nDurante o período chuvoso (de novembro a março), buracos e trechos com lama podem exigir maior cuidado ao dirigir.\nMotoristas devem respeitar os limites de velocidade baixa, atentando para a travessia de gado e animais silvestres.\nPostos de combustível e oficinas mecânicas estão concentrados na área urbana do município de Sacramento.\nCertifique-se de sair da cidade com o tanque cheio e pneus calibrados antes de iniciar o circuito natural.\nUma viagem rural bucólica que revela aos poucos as paisagens do cerrado e os vales escondidos de Minas.\nQuer saber se necessita de um veículo 4x4 ou ver a importância de contratar guias locais?",
   "question": "Qual dúvida sobre o deslocamento até as cachoeiras você quer esclarecer?",
   "optA": {
    "label": "Quero saber se preciso de carro 4x4 ou se carros de passeio comuns chegam aos locais.",
    "target": "25",
    "cross": null,
    "raw": "Ir para NÓ 25"
   },
   "optB": {
    "label": "Quero saber sobre a contratação de guias locais e condutores ambientais.",
    "target": "16",
    "cross": null,
    "raw": "Ir para NÓ 16"
   }
  },
  {
   "num": "12",
   "text": "A prática de banho em cachoeiras exige responsabilidade e respeito rigoroso às condições do meio ambiente.\nSempre teste a profundidade do poço antes de saltar e jamais mergulhe de cabeça em locais desconhecidos.\nPedras submersas, troncos e correntes de fundo representam riscos invisíveis a partir da superfície.\nAproxime-se da queda d'água principal com cautela, pois a força da água caindo pode empurrar o nadador para baixo.\nConsumo de bebidas alcoólicas antes ou durante o banho de cachoeira é uma das maiores causas de acidentes ecológicos.\nEvite caminhar sobre pedras úmidas com limo ou musgo, pois são extremamente escorregadias e causam quedas sérias.\nEm dias de chuva nas cabeceiras dos rios, saia imediatamente da água ao notar aumento do volume ou mudança de cor.\nCrianças e pessoas que não sabem nadar devem fazer uso obrigatório de coletes salva-vidas homologados.\nRespeitar a natureza e os próprios limites garante uma experiência de lazer inesquecível e totalmente segura.\nQuer aprender mais sobre o perigo de trombas d'água ou ver a política de preservação e lixo zero?",
   "question": "Qual norma de segurança ou conduta ecológica você quer aprofundar?",
   "optA": {
    "label": "Quero entender em detalhes o que é a tromba d'água e como se prevenir.",
    "target": "15",
    "cross": null,
    "raw": "Ir para NÓ 15"
   },
   "optB": {
    "label": "Quero ver as regras da política de \"Lixo Zero\" e conservação dos rios.",
    "target": "29",
    "cross": null,
    "raw": "Ir para NÓ 29"
   }
  },
  {
   "num": "13",
   "text": "Localizada no mesmo parque da cachoeira, a Gruta dos Palhares é uma obra-prima esculpida pela natureza ao longo de eras.\nCom uma abertura monumental de mais de 20 metros de altura, é considerada a maior caverna de arenito das Américas.\nSeu interior espaçoso e iluminação natural proporcionam uma caminhada fascinante por salões rochosos Seculares.\nA gruta abriga um microclima fresco e misterioso, sendo lar de colônias de aves e morcegos insetívoros.\nA lenda local diz que as águas que brotam das paredes da gruta possuem propriedades purificadoras e medicinais.\nPassarelas de pedra facilitam o acesso dos visitantes ao primeiro salão sem danificar o frágil ecossistema interno.\nPesquisadores e geólogos de todo o mundo visitam a estrutura para estudar o processo de erosão do arenito.\nCombinar a visita à gruta com o banho de cachoeira cria um roteiro ecológico completo dentro de Sacramento.\nUm espetáculo visual inesquecível que impressiona pela imponência e grandiosidade das paredes de rocha.\nDeseja saber como estruturar um roteiro combinando Gruta + Cachoeiras ou retornar às informações do parque?",
   "question": "Como deseja prosseguir na sua navegação ecológica?",
   "optA": {
    "label": "Quero ver a sugestão de roteiro unindo a Gruta dos Palhares e outras cachoeiras.",
    "target": "27",
    "cross": null,
    "raw": "Ir para NÓ 27"
   },
   "optB": {
    "label": "Quero voltar para as informações gerais da infraestrutura do Parque dos Palhares.",
    "target": "04",
    "cross": null,
    "raw": "Ir para NÓ 04"
   }
  },
  {
   "num": "14",
   "text": "Estar adequadamente equipado é o primeiro passo para garantir o conforto e a segurança durante as caminhadas ecológicas.\nCalçados: Dê preferência a tênis velhos com boa aderência ou botas de trekking já amaciadas nos pés.\nRoupas: Vista roupas leves, de secagem rápida (como poliamida ou dry-fit) e leve uma troca de roupa seca no carro.\nProteção Solar: Chapéu ou boné, óculos de sol e protetor solar biodegradável são itens indispensáveis no Cerrado.\nProteção contra Insetos: Repelentes ajudam a manter mosquitos e pernilongos afastados durante o percurso da mata.\nHidratação: Garrafa reutilizável ou cantil com pelo menos 1,5 litro de água por pessoa para manter o corpo hidratado.\nMochila Pequena: Uma mochila de costas de 15 a 20 litros permite carregar seus pertences deixando as mãos livres.\nSacos Impermeáveis: Protegem celulares, carteiras e câmeras em caso de chuva súbita ou travessia de trechos aquáticos.\nEstar bem preparado transforma uma caminhada cansativa em uma vivência agradável e revigorante na natureza.\nQuer ver a lista de alimentos recomendados para a mochila de trilha ou voltar ao nível de dificuldade?",
   "question": "Qual informação de apoio ao ecoturista você deseja consultar?",
   "optA": {
    "label": "Quero ver dicas de alimentação saudável e hidratação para levar na mochila.",
    "target": "23",
    "cross": null,
    "raw": "Ir para NÓ 23"
   },
   "optB": {
    "label": "Quero voltar para as dicas do nível de dificuldade e acesso da trilha do Basílio.",
    "target": "09",
    "cross": null,
    "raw": "Ir para NÓ 09"
   }
  },
  {
   "num": "15",
   "text": "A tromba d'água (ou cabeça d'água) é o aumento súbito e violento do volume de um rio provocado por chuvas na cabeceira.\nO perigo reside no fato de que pode estar chovendo forte na nascente a quilômetros de distância, enquanto na cachoeira faz sol.\nSinais de alerta: Mudança rápida na cor da água (de cristalina para marrom/barrenta) e presença de galhos boiando.\nOutro sinal claro é o aumento repentino do barulho da queda d'água e a elevação rápida do nível da água na margem.\nO que fazer: Ao notar qualquer um desses sinais, saia da água imediatamente e suba para as margens mais altas do vale.\nJamais tente atravessar o rio para buscar pertences se a correnteza já estiver aumentando de velocidade.\nFique atento às previsões do tempo e evite cachoeiras em vales fechados nos dias com alerta de tempestades tropicais.\nNo período de seca (maio a setembro), o risco de tromba d'água é praticamente nulo nas cachoeiras da região.\nA prevenção e a observação atenta da natureza são as melhores ferramentas para garantir um passeio seguro.\nDeseja saber qual a melhor época do ano para visitar as cachoeiras ou ver as regras de segurança no banho?",
   "question": "Qual caminho de orientação você quer seguir para garantir sua segurança?",
   "optA": {
    "label": "Quero consultar a análise do clima e das estações do ano (Seca vs Chuva) em Sacramento.",
    "target": "32",
    "cross": null,
    "raw": "Ir para NÓ 32"
   },
   "optB": {
    "label": "Quero rever as regras fundamentais para um banho de cachoeira seguro.",
    "target": "12",
    "cross": null,
    "raw": "Ir para NÓ 12"
   }
  },
  {
   "num": "16",
   "text": "A contratação de guias e condutores ambientais locais enriquece imensamente a experiência de ecoturismo em Sacramento.\nProfissionais locais conhecem detalhadamente as trilhas, a variação dos rios e os pontos mais seguros para banho.\nAlém da segurança, os guias compartilham causos, histórias locais e identificam espécies raras da flora e fauna.\nPara cachoeiras localizadas em propriedades privadas ou de difícil acesso, o condutor facilita a autorização de entrada.\nA contratação do serviço movimenta a economia local e valoriza os moradores que atuam na preservação do patrimônio.\nGrupos de estudantes, famílias grandes e praticantes de trekking avançado beneficiam-se diretamente desse acompanhamento.\nCentros de atendimento ao turista e pousadas em Sacramento fornecem contatos de condutores credenciados no município.\nNavegar por vales remotos com quem conhece cada pedra do caminho garante tranquilidade absoluta durante a caminhada.\nUma decisão inteligente que transforma um simples passeio em uma verdadeira expedição de conhecimento e aventura.\nDeseja conhecer cachoeiras mais afastadas e secretas da região ou ver informações sobre transportes?",
   "question": "Para onde você deseja prosseguir na sua pesquisa sobre os passeios?",
   "optA": {
    "label": "Quero saber sobre cachoeiras secretas e circuitos rústicos de aventura na região.",
    "target": "26",
    "cross": null,
    "raw": "Ir para NÓ 26"
   },
   "optB": {
    "label": "Quero ver informações sobre as estradas e condições de transporte até os pontos.",
    "target": "11",
    "cross": null,
    "raw": "Ir para NÓ 11"
   }
  },
  {
   "num": "17",
   "text": "A região de Sacramento atrai entusiastas de esporte de aventura, corrida de montanha, montanhismo e cicloturismo.\nSuas estradas rurais de terra e serras acentuadas formam cenários ideais para rotas desafiadoras de Mountain Bike (MTB).\nAtletas de toda a região frequentam os circuitos que ligam as cachoeiras para treinos e eventos esportivos de aventura.\nA prática do boia-cross e do rapel é realizada em trechos específicos de rios e cânions sob supervisão técnica.\nCaminhadas de longa distância (trekkings de um ou dois dias) cortam as chapadas conectando cachoeiras e vilarejos.\nA combinação de ar puro, altimetria variada e paradas estratégicas para banhos gelados motiva os praticantes do esporte.\nEventos locais de corrida de trilha celebram a integração entre o esporte de rendimento e a preservação do Cerrado.\nPara os praticantes de esportes ao ar livre, Sacramento é um playground natural vasto e repleto de desafios.\nSempre lembrando da importância de respeitar os limites do corpo e utilizar equipamentos de proteção individual.\nGostaria de ver uma sugestão de roteiro de 1 dia pelas cachoeiras ou saber sobre o clima e estações?",
   "question": "Qual informação prática você deseja visualizar a seguir?",
   "optA": {
    "label": "Quero ver uma sugestão de roteiro prático de 1 dia pelas cachoeiras da cidade.",
    "target": "30",
    "cross": null,
    "raw": "Ir para NÓ 30"
   },
   "optB": {
    "label": "Quero consultar o calendário do clima e estações mais adequadas para o esporte.",
    "target": "32",
    "cross": null,
    "raw": "Ir para NÓ 32"
   }
  },
  {
   "num": "18",
   "text": "Para planejar sua visita ao Parque Ecológico da Gruta dos Palhares e sua cachoeira, fique atento às informações de acesso:\nHorário de Funcionamento: O parque funciona normalmente de terça a domingo, das 08h00 às 17h00.\nSegunda-feira: O local geralmente fecha para manutenção da área verde e limpeza das estruturas internas.\nTaxa de Entrada: A entrada no parque e o acesso à área da cachoeira e gruta possuem valores acessíveis e simbólicos.\nEstacionamento: Vagas amplas disponíveis para carros de passeio, motocicletas, ônibus de excursão e vans de turismo.\nRegras da Cachoeira: É proibido levar garrafas de vidro ou utensílios cortantes para a margem da água.\nAnimais de Estimação: Recomenda-se consultar a administração do parque antes de levar pets para as áreas de trilha.\nSom Automotivo: Caixas de som altas e buzinas são proibidas para garantir o sossego da fauna e dos visitantes.\nCumprir os horários e regras garante a conservação desse espaço público abençoado que orgulha os sacramentanos.\nDeseja saber o que carregar na mochila de passeio ou como chegar ao parque saindo do centro?",
   "question": "Qual orientação logística sobre o Parque dos Palhares você quer consultar?",
   "optA": {
    "label": "Quero ver o checklist de itens sugeridos para carregar na mochila de passeio.",
    "target": "23",
    "cross": null,
    "raw": "Ir para NÓ 23"
   },
   "optB": {
    "label": "Quero ver as instruções para chegar de carro saindo da praça central de Sacramento.",
    "target": "25",
    "cross": null,
    "raw": "Ir para NÓ 25"
   }
  },
  {
   "num": "19",
   "text": "A biodiversidade ao redor das cachoeiras de Sacramento é um dos maiores atrativos para amantes da vida selvagem.\nA vegetação ciliar atua como um corredor ecológico vital, protegendo as nascentes e fornecendo alimento para a fauna.\nÁrvores marcantes como o pequi, a sucupira, o ipê-amarelo e o jatobá ornamentam as margens das estradas e trilhas.\nNa fauna, é comum avistar bandos de seriemas, tucanos-toco, papagaios e diversas espécies de beija-flores coloridos.\nCom um pouco de sorte e silêncio, mamíferos como o tamanduá-bandeira, o quati e o veado-campeiro podem ser observados.\nO bioma Cerrado é considerado a \"caixa d'água do Brasil\", pois suas nascentes abastecem as principais bacias do país.\nA preservação dessas matas garante que a água das cachoeiras continue limpa, pura e abundante durante as décadas.\nPraticantes de observação de aves (birdwatching) encontram nas trilhas das cachoeiras um verdadeiro paraíso de espécies.\nRespeitar a vida selvagem, mantendo distância segura e não alimentando os animais, é regra de ouro no ecoturismo.\nDeseja saber mais sobre as trilhas do Parque Palhares ou ver a política de conservação ambiental?",
   "question": "Como prefere continuar sua exploração ambiental?",
   "optA": {
    "label": "Quero voltar e rever as características das trilhas ecológicas no Parque dos Palhares.",
    "target": "08",
    "cross": null,
    "raw": "Ir para NÓ 08"
   },
   "optB": {
    "label": "Quero ver as ações necessárias para preservar o ecossistema dos rios e cachoeiras.",
    "target": "29",
    "cross": null,
    "raw": "Ir para NÓ 29"
   }
  },
  {
   "num": "20",
   "text": "A Cachoeira da Parida figura entre as opções mais rústicas e encantadoras para os exploradores de Sacramento.\nInserida em um vale profundo, essa queda d'água sobressai-se pelas paredes rochosas escuras e vegetação nativa densa.\nO acesso exige um trecho maior de caminhada em trilha não pavimentada, sendo ideal para quem aprecia o trekking puro.\nSuas águas são geladas e extremamente limpas, proporcionando um choque térmico revigorante após a caminhada.\nPor não possuir infraestrutura comercial no local, o ambiente preserva o silêncio e o isolamento da natureza selvagem.\nO poço para banho é amplo, permitindo nadar com tranquilidade contemplando o topo da queda e a copa das árvores.\nÉ fundamental que o visitante vá acompanhado e informe a terceiros o destino escolhido antes de iniciar o passeio.\nA beleza cênica e o clima de mistério do vale tornam a Cachoeira da Parida um refúgio inesquecível.\nUm destino perfeito para quem quer se afastar das multidões e vivenciar o ecoturismo em sua essência.\nDeseja ver recomendações de segurança e acesso para a Parida ou ver outras cachoeiras secretas?",
   "question": "Qual o seu próximo passo na descoberta da Cachoeira da Parida?",
   "optA": {
    "label": "Quero ver os detalhes de segurança, acesso e o que levar para a Cachoeira da Parida.",
    "target": "21",
    "cross": null,
    "raw": "Ir para NÓ 21"
   },
   "optB": {
    "label": "Quero saber sobre outras cachoeiras rústicas e secretas na zona rural de Sacramento.",
    "target": "26",
    "cross": null,
    "raw": "Ir para NÓ 26"
   }
  },
  {
   "num": "21",
   "text": "Visitar a Cachoeira da Parida exige planejamento prévio para que o passeio ocorra com total conforto e segurança.\nComo a área não conta com lanchonetes ou pontos de venda, leve lanches leves, frutas e água suficiente para o dia.\nEm virtude da umidade constante da mata ciliar, a trilha pode apresentar trechos com pedras e solo bem escorregadios.\nUso de calçado fechado e resistente é obrigatório para evitar torções ou escorregões durante a subida e descida do vale.\nO sinal de telefonia celular pode ser instável ou inexistente no fundo do vale, reforçando a necessidade de atenção.\nEvite fazer o trajeto sozinho; prefira ir em dupla ou acompanhado por um condutor ambiental que conheça a região.\nLeve uma pequena lanterna de cabeça caso o passeio se estenda até o início do anoitecer nas trilhas sombreadas.\nLembre-se de recolher absolutamente todos os resíduos de embalagens, cascas de frutas e papéis que produzir.\nA compensação por este planejamento é desfrutar de um cenário paradisíaco e intocado no coração de Minas Gerais.\nQuer ver a lista de equipamentos para caminhada ou voltar para o panorama geral das cachoeiras?",
   "question": "Qual informação vai complementar melhor a sua preparação?",
   "optA": {
    "label": "Quero consultar o guia de roupas e equipamentos sugeridos para caminhadas rústicas.",
    "target": "14",
    "cross": null,
    "raw": "Ir para NÓ 14"
   },
   "optB": {
    "label": "Quero retornar ao panorama geral com a lista de todas as principais cachoeiras.",
    "target": "03",
    "cross": null,
    "raw": "Ir para NÓ 03"
   }
  },
  {
   "num": "22",
   "text": "Uma das combinações mais ricas para um roteiro em Sacramento é unir o ecoturismo de cachoeiras com a história do Desemboque.\nO Povoado do Desemboque, situado a cerca de 38 km do centro, é o berço histórico do povoamento do Brasil Central.\nApós passar a manhã renovando as energias nas águas de uma cachoeira, o visitante pode seguir para o vilarejo colonial.\nO povoado conserva igrejas seculares do século XVIII, casario histórico preservado e uma atmosfera de paz do interior.\nA estrada que liga Sacramento ao Desemboque cruza vales, pontes de pedra antigas e cursos d'água cristalinos.\nRestaurantes comunitários no Desemboque servem almoço com comida caipira feita em fogão a lenha de dar água na boca.\nEssa integração permite vivenciar em um único dia a imponência da natureza do Cerrado e a riqueza da história mineira.\nUm passeio inesquecível para famílias, historiadores e viajantes que buscam vivências autênticas no interior de Minas.\nUma experiência cultural e ecológica que enriquece a bagagem de qualquer visitante em Sacramento.\nDeseja ver a sugestão de roteiro de final de semana ou como integrar ao centro histórico urbano?",
   "question": "Como prefere montar o seu itinerário combinado em Sacramento?",
   "optA": {
    "label": "Quero ver a proposta de roteiro completo de final de semana unindo natureza e história.",
    "target": "34",
    "cross": null,
    "raw": "Ir para NÓ 34"
   },
   "optB": {
    "label": "Quero ver como combinar o passeio de cachoeira com o centro histórico urbano.",
    "target": "27",
    "cross": null,
    "raw": "Ir para NÓ 27"
   }
  },
  {
   "num": "23",
   "text": "Preparar uma mochila leve e funcional é essencial para desfrutar de um dia agradável nas cachoeiras de Sacramento.\nAlimentação: Leve barra de cereais, castanhas, frutas secas, sanduíches naturais e biscoitos em embalagens leves.\nHidratação: Água potável é indispensável; isotônicos ou água de coco em caixinha ajudam a repor os sais minerais.\nPrimeiros Socorros: Monte um kit básico com curativos adesivos, antisséptico, pomada para picadas e analgésico.\nHigiene: Leve toalha de secagem rápida (microfibra), sabonete biodegradável e saco plástico para colocar roupas úmidas.\nManejo de Lixo: Saco de lixo extra para recolher todo e qualquer resíduo gerado por você e até mesmo por terceiros.\nDocumentos e Dinheiro: Traga documento com foto e dinheiro em espécie, pois alguns locais rurais não aceitam cartão.\nCapa de Chuva: Uma capa leve e compacta pode salvar seu passeio caso ocorra uma pancada de chuva de verão.\nOrganizar sua mochila com antecedência garante autonomia e evita imprevistos desagradáveis no meio do mato.\nQuer saber mais sobre piqueniques conscientes e descarte de lixo ou ver dicas de transporte?",
   "question": "Qual aspecto prático da mochila você quer aprofundar?",
   "optA": {
    "label": "Quero ver dicas de piquenique consciente e alimentação de baixo impacto ecológico.",
    "target": "24",
    "cross": null,
    "raw": "Ir para NÓ 24"
   },
   "optB": {
    "label": "Quero ver opções de roupas e calçados ideais para enfrentar as trilhas das cachoeiras.",
    "target": "14",
    "cross": null,
    "raw": "Ir para NÓ 14"
   }
  },
  {
   "num": "24",
   "text": "A prática do piquenique nas cachoeiras deve seguir os conceitos éticos do ecoturismo moderno e do mínimo impacto.\nAlimentos Naturais: Dê preferência a alimentos que não gerem muitas embalagens plásticas descartáveis de uso único.\nDescarte de Orgânicos: Cascas de frutas e restos de comida não devem ser jogados na mata, pois alteram a dieta da fauna.\nAcomodação: Utilize cangas ou lona leve para sentar nas margens do rio sem pisotear a vegetação de porte baixo.\nFogo e Churrasco: É estritamente proibido fazer fogueiras ou churrascos nas margens dos rios e mata ciliar pelo risco de incêndio.\nUtensílios: Leve copos, pratos e talheres reutilizáveis em vez de itens descartáveis de plástico que voam com o vento.\nÁgua Limpa: Não lave pratos, panelas ou use detergentes diretamente nas águas límpidas dos poços de cachoeira.\nDeixe o Local Melhor: Tenha por hábito recolher pequenas sujeiras encontradas pelo caminho antes de retornar para casa.\nApreciar uma refeição ao som da queda d'água é um privilégio que exige responsabilidade de todos os visitantes.\nDeseja saber sobre a preservação ambiental e recursos hídricos ou ver dicas de restaurantes caipiras pós-trilha?",
   "question": "Para onde deseja direcionar o foco das suas refeições no passeio?",
   "optA": {
    "label": "Quero ver detalhes sobre a preservação e conservação dos rios de Sacramento.",
    "target": "29",
    "cross": null,
    "raw": "Ir para NÓ 29"
   },
   "optB": {
    "label": "Quero saber sobre restaurantes de comida caipira em Sacramento para almoçar após a trilha.",
    "target": "25",
    "cross": null,
    "raw": "Ir para NÓ 25"
   }
  },
  {
   "num": "25",
   "text": "Após um dia de caminhada e banhos gelados nas cachoeiras, a gastronomia de Sacramento é o complemento perfeito.\nA cidade conta com restaurantes tradicionais no centro e na zona rural servindo o melhor da culinária mineira caipira.\nO cardápio típico inclui feijão tropeiro, frango a passarinho, tutú de feijão, pernil assado e couve refogada na hora.\nPara sobremesa, o famoso queijo canastra e queijijinho artesanal combinado com doce de leite e goiabada cascão.\nMuitos estabelecimentos rurais oferecem ambiente familiar com mesas de madeira sob a sombra de mangueiras centenárias.\nEm termos de transporte, carros de passeio convencionais chegam tranquilamente à maioria das cachoeiras principais.\nPara atrativos mais isolados ou em dias de forte chuva, veículos com tração 4x4 garantem maior segurança nas estradas de terra.\nPostos de combustível no centro urbano oferecem suporte para calibragem de pneus e abastecimento geral.\nA acolhida afetuosa do povo mineiro e a fartura da mesa transformam o almoço em um momento memorável do dia.\nDeseja ver a sugestão de roteiro de 1 dia pelas cachoeiras ou ver o fechamento sobre ecoturismo?",
   "question": "Como deseja prosseguir com as informações de viagem?",
   "optA": {
    "label": "Quero consultar o roteiro sugerido de 1 dia combinando cachoeira e gastronomia.",
    "target": "30",
    "cross": null,
    "raw": "Ir para NÓ 30"
   },
   "optB": {
    "label": "Quero ver uma síntese da importância de Sacramento como polo de ecoturismo.",
    "target": "35",
    "cross": null,
    "raw": "Ir para NÓ 35"
   }
  },
  {
   "num": "26",
   "text": "Para os entusiastas de ecoturismo que já conhecem os pontos tradicionais, Sacramento guarda cachoeiras secretas.\nPequenas cascatas e poços escondidos ao longo de riachos secundários oferecem privacidade e cenários intocados.\nLocais como a Cachoeira do Lobo e pequenas quedas no Vale do Borá exigem caminhadas longas por trilhas pouco marcadas.\nO acesso a essas joias escondidas muitas vezes cruza propriedades particulares, exigindo autorização prévia dos donos.\nA presença de um guia local é indispensável para localizar as entradas corretas e evitar que o visitante se perca na mata.\nNesses pontos isolados, a sensação de conexão com a natureza virgem é amplificada pelo silêncio sepulcral do vale.\nNão há qualquer tipo de sinalização, estrutura ou socorro próximo, exigindo autonomia total do grupo de caminhantes.\nA preservação desses refúgios depende do compromisso ético dos visitantes de manter o local rigorosamente intocado.\nUma experiência exclusiva para aventureiros experientes que buscam a verdadeira essência da exploração selvagem.\nDeseja saber mais sobre como contratar condutores locais ou conhecer a Cachoeira da Parida?",
   "question": "Qual alternativa você prefere para sua jornada de aventura?",
   "optA": {
    "label": "Quero ver informações sobre como contratar guias e condutores ambientais locais.",
    "target": "16",
    "cross": null,
    "raw": "Ir para NÓ 16"
   },
   "optB": {
    "label": "Quero conhecer os detalhes de acesso e trilha para a Cachoeira da Parida.",
    "target": "20",
    "cross": null,
    "raw": "Ir para NÓ 20"
   }
  },
  {
   "num": "27",
   "text": "Combinar a energia refrescante das cachoeiras com o patrimônio histórico urbano é uma excelente pedida em Sacramento.\nSugestão: Dedique o período da manhã para explorar o Parque dos Palhares, tomando um banho de cachoeira e visitando a gruta.\nAo meio-dia, retorne à área urbana de Sacramento e saboreie um generoso almoço caipira em restaurante no centro histórico.\nDurante a tarde, faça um passeio a pé pela Praça Getúlio Vargas, visitando a imponente Basílica e os casarões seculares.\nReserve o fim da tarde para visitar o Colégio Allan Kardec e o Memorial Eurípedes Barsanulfo no coração da cidade.\nEste itinerário equilibrado oferece uma visão rica de Sacramento, unindo natureza exuberante, história, cultura e fé.\nA proximidade dos atrativos em relação ao centro torna o deslocamento rápido, permitindo aproveitar cada minuto.\nO contraste entre o verde do Cerrado e a arquitetura neoclássica urbana encanta os viajantes de todas as origens.\nUm dia completo que agrada a todos os perfis de turísticas, desde aventureiros até amantes da cultura e história.\nDeseja ver a versão focada exclusivamente em cachoeiras (1 dia) ou o roteiro de final de semana completo?",
   "question": "Qual formato de roteiro se adapta melhor à sua disponibilidade de tempo?",
   "optA": {
    "label": "Quero ver o roteiro prático focado exclusivamente no circuito de cachoeiras (1 dia).",
    "target": "30",
    "cross": null,
    "raw": "Ir para NÓ 30"
   },
   "optB": {
    "label": "Quero ver a opção de roteiro completo para um final de semana em Sacramento (2 dias).",
    "target": "34",
    "cross": null,
    "raw": "Ir para NÓ 34"
   }
  },
  {
   "num": "28",
   "text": "Viajar com crianças para as cachoeiras de Sacramento exige a escolha de atrativos com águas calmas e boa acessibilidade.\nO Parque Ecológico da Gruta dos Palhares é a escolha número um para famílias com crianças de todas as idades.\nO parque oferece caminhos calçados, banheiros, lanchonete e poços rasos e monitorados na área do ribeirão.\nA Cachoeira do Sampaio também é altamente recomendada devido aos seus poços de águas tranquilas e prairinhas de areia.\nOrientações: Mantenha as crianças sempre sob visão direta e utilize boias de braço ou coletes salva-vidas apropriados.\nEvite levar os pequenos para cachoeiras de trilhas longas e íngremes sob o sol forte para evitar insolação e cansaço.\nProtetor solar, chapéu, repelente e bastante água potável devem ser mantidos ao alcance das mãos durante todo o tempo.\nEnsinar as crianças a respeitarem a natureza e não jogarem lixo no chão transforma o passeio em um momento educativo.\nMomentos de diversão em família nas águas limpas do Cerrado rendem memórias afetivas que duram para a vida inteira.\nDeseja rever as atrações do Parque dos Palhares ou entender mais sobre a Cachoeira do Sampaio?",
   "question": "Qual destas opções familiares você deseja consultar novamente?",
   "optA": {
    "label": "Quero rever as atrações familiares e estrutura do Parque Ecológico dos Palhares.",
    "target": "04",
    "cross": null,
    "raw": "Ir para NÓ 04"
   },
   "optB": {
    "label": "Quero rever a descrição e características calmas da Cachoeira do Sampaio.",
    "target": "06",
    "cross": null,
    "raw": "Ir para NÓ 06"
   }
  },
  {
   "num": "29",
   "text": "A conservação dos recursos hídricos de Sacramento é vital para a manutenção da vida e do ecoturisno na região.\nAs águas puras que despencam das cachoeiras dependem diretamente da preservação das nascentes nas chapadas do Cerrado.\nO desmatamento ilegal, as queimadas e o descarte inadequado de lixo representam ameaças sérias a esse patrimônio natural.\nCampanhas de conscientização ambiental incentivam moradores e turistas a adotarem a conduta do \"Não Deixe Rastros\".\nProjetos de reflorestamento de matas ciliares ajudam a proteger as margens dos rios contra o assoreamento e erosão.\nO turismo ecológico, quando feito de forma sustentável, gera renda para a comunidade e incentiva a preservação.\nEvite o uso de xampus e sabonetes convencionais na água dos rios, pois os químicos afetam a vida dos peixes e anfíbios.\nSua atitude consciente durante a visita garante que essas cachoeiras continuem limpas e vivas para as próximas gerações.\nPreservar Sacramento é proteger um dos santuários ecológicos mais valiosos e belos do estado de Minas Gerais.\nQuer ver como a fauna e flora dependem dessa preservação ou saber sobre o futuro do ecoturismo regional?",
   "question": "Qual desdobramento da questão ambiental você quer analisar?",
   "optA": {
    "label": "Quero ver como a preservação beneficia a rica fauna e flora do bioma Cerrado.",
    "target": "19",
    "cross": null,
    "raw": "Ir para NÓ 19"
   },
   "optB": {
    "label": "Quero entender a visão de futuro do ecoturismo sustentável no município.",
    "target": "33",
    "cross": null,
    "raw": "Ir para NÓ 33"
   }
  },
  {
   "num": "30",
   "text": "Para quem deseja vivenciar um dia perfeito dedicado exclusivamente às cachoeiras de Sacramento, siga esta sugestão:\nManhã (08h30 às 11h30): Visita ao Parque Ecológico da Gruta dos Palhares. Caminhe pelas trilhas, conheça a caverna e tome um banho na cachoeira.\nAlmoço (12h00 às 13h30): Delicie-se com uma autêntica refeição caipira em um restaurante rural ou no centro urbano da cidade.\nTarde (14h00 às 17h00): Siga para a Cachoeira do Basílio ou Cachoeira do Sampaio. Desfrute das águas límpidas e relaxe ao som da natureza.\nFim de Tarde (17h30): Contemple o pôr do sol nas chapadas de Sacramento enquanto retorna à cidade para um café caipira com queijo.\nEste roteiro otimizado combina conforto, segurança, diversão na água, paisagens espetaculares e boa gastronomia.\nÉ uma programação equilibrada que pode ser realizada com veículos de passeio comuns durante a maior parte do ano.\nUma imersão completa no que de melhor o patrimônio natural do sudoeste mineiro tem a oferecer aos seus visitantes.\nDeseja saber a época ideal do ano para realizar esse roteiro ou ampliar para um final de semana?",
   "question": "Como deseja ajustar o seu planejamento a partir deste roteiro de 1 dia?",
   "optA": {
    "label": "Quero verificar qual o melhor mês do ano (estação seca vs chuva) para realizar o passeio.",
    "target": "32",
    "cross": null,
    "raw": "Ir para NÓ 32"
   },
   "optB": {
    "label": "Quero conferir a proposta de roteiro ampliado para um final de semana de 2 dias.",
    "target": "34",
    "cross": null,
    "raw": "Ir para NÓ 34"
   }
  },
  {
   "num": "31",
   "text": "Saber escolher o momento certo para visitar as cachoeiras faz toda a diferença na sua experiência de ecoturismo.\nInício da Manhã (08h00 às 10h30): Período ideal para quem busca tranquilidade, ar puro, pouca gente e observação de aves.\nMeio do Dia (11h00 às 14h30): Horário em que o sol está mais alto, tornando o banho d'água refrescante e agradável.\nA luz solar direta incidindo sobre os poços revela os tons esverdeados e a transparência impressionante da água.\nFim da Tarde (15h30 às 17h00): Excelente horário para fotos com luz suave e quente, ideal para contemplação do pôr do sol.\nEvite permanecer nos rios após o pôr do sol, pois a iluminação natural cai rapidamente, dificultando o retorno pelas trilhas.\nEm dias muito quentes nos finais de semana de verão, os atrativos principais tendem a receber um fluxo maior de banhistas.\nPlanejar o horário do seu passeio garante fotos fantásticas, banhos agradáveis e maior comunhão com a natureza.\nDeseja ver técnicas de fotografia para aplicar nesses horários ou dicas de passeios com crianças?",
   "question": "Qual informação vai enriquecer mais o planejamento dos seus horários?",
   "optA": {
    "label": "Quero rever as dicas de fotografia e ajustes da câmera para capturar as cachoeiras.",
    "target": "10",
    "cross": null,
    "raw": "Ir para NÓ 10"
   },
   "optB": {
    "label": "Quero ver quais são os melhores horários e cachoeiras para levar crianças e idosos.",
    "target": "28",
    "cross": null,
    "raw": "Ir para NÓ 28"
   }
  },
  {
   "num": "32",
   "text": "A escolha da época da viagem influencia diretamente na paisagem e nas condições das cachoeiras em Sacramento.\nEstação Chuvosa (Novembro a Março):\nAs cachoeiras atingem o seu volume máximo de água, exibindo quedas d'água com força e imponência espetaculares.\nA vegetação do Cerrado fica intensamente verde e as temperaturas elevadas convidam para banhos constantes.\nAtenção: Aumenta o risco de trombas d'água e estradas de terra podem apresentar trechos com lama.\nEstação Seca (Maio a Setembro):\nAs águas dos poços ficam extremamente cristalinas e calmas, ideais para banho e natação segura.\nDias ensolarados com céu azul de brigadeiro e noites frescas; o risco de chuva ou tromba d'água é baixíssimo.\nO volume d'água das cachoeiras diminui um pouco, mas a acessibilidade nas estradas rurais fica muito mais tranquila.\nAmbas as estações possuem seus encantos únicos, dependendo do perfil do visitante e do tipo de aventura desejada.\nDeseja saber mais sobre os alertas de tromba d'água no verão ou rever a sugestão de roteiro?",
   "question": "Qual esclarecimento sobre as estações você deseja consultar agora?",
   "optA": {
    "label": "Quero ver detalhes de prevenção contra trombas d'água na estação chuvosa.",
    "target": "15",
    "cross": null,
    "raw": "Ir para NÓ 15"
   },
   "optB": {
    "label": "Quero ver novamente a sugestão de roteiro de 1 dia pelas cachoeiras.",
    "target": "30",
    "cross": null,
    "raw": "Ir para NÓ 30"
   }
  },
  {
   "num": "33",
   "text": "O ecoturismo sustentável consolidou-se como um dos pilares estratégicos para o desenvolvimento futuro de Sacramento.\nA atividade econômica gera empregos diretos e indiretos no comércio, hotelaria, gastronomia e condutores ambientais.\nAo mesmo tempo, incentiva a preservação das áreas verdes privadas por meio da criação de reservas ecológicas (RPPNs).\nA conscientização da comunidade e dos turistas garante que os recursos hídricos permaneçam protegidos e despoluídos.\nSacramento destaca-se como um modelo no sudoeste mineiro de convivência harmoniosa entre agronegócio e conservação.\nA estruturação de novos circuitos de trilhas e a melhoria da sinalização turística facilitam o acesso dos visitantes.\nInvestir na preservação da natureza é garantir a qualidade de vida dos sacramentanos e o encantamento dos viajantes.\nUm compromisso coletivo que une o amor à terra mineira e a visão de futuro de um turismo ético e responsável.\nVisitar as cachoeiras de Sacramento é apoiar e fazer parte ativamente desta causa de amor ao meio ambiente.\nDeseja ver a síntese do patrimônio natural de Sacramento ou retornar ao início do módulo?",
   "question": "Como prefere conduzir os momentos finais desta exploração?",
   "optA": {
    "label": "Quero ver o resumo da riqueza natural e do ecoturismo de Sacramento.",
    "target": "35",
    "cross": null,
    "raw": "Ir para NÓ 35"
   },
   "optB": {
    "label": "Quero retornar ao NÓ 01 para explorar outros caminhos do guia das cachoeiras.",
    "target": "01",
    "cross": null,
    "raw": "Ir para NÓ 01"
   }
  },
  {
   "num": "34",
   "text": "Para quem possui tempo e deseja uma imersão total em Sacramento, o Roteiro de Final de Semana (2 dias) é perfeito:\nDia 1 - Ecoturismo & Natureza Exuberante:\nManhã: Chegada ao Parque Ecológico da Gruta dos Palhares; explore a gruta monumental e tome um banho de cachoeira.\nAlmoço: Almoço tradicional caipira em restaurante rural da região.\nTarde: Siga para a Cachoeira do Basílio para fotos e banho de poço no fim de tarde.\nNoite: Jantar aconchegante no centro histórico de Sacramento e caminhada noturna pela Praça Getúlio Vargas.\nDia 2 - História, Cultura & Vilarejo Colonial:\nManhã: Visita guiada ao Colégio Allan Kardec e ao Memorial Eurípedes Barsanulfo na área urbana.\nMeio-Dia: Viagem de 38 km até o histórico Povoado do Desemboque com almoço caipira feito em fogão a lenha.\nTarde: Passeio a pé pelo Desemboque, visitando as igrejas do século XVIII e pontes de pedra antigas antes do retorno.\nUm final de semana inesquecível que combina aventura na água, paz espiritual, arquitetura secular e a melhor gastronomia mineira.\nDeseja ver a síntese final da experiência em Sacramento ou rever o roteiro de apenas 1 dia?",
   "question": "Como deseja concluir a análise dos roteiros de viagem?",
   "optA": {
    "label": "Quero ver a síntese do patrimônio natural e da experiência de ecoturismo.",
    "target": "35",
    "cross": null,
    "raw": "Ir para NÓ 35"
   },
   "optB": {
    "label": "Quero reexaminar o roteiro simplificado focado em 1 dia de viagem.",
    "target": "30",
    "cross": null,
    "raw": "Ir para NÓ 30"
   }
  },
  {
   "num": "35",
   "text": "As cachoeiras e o patrimônio natural de Sacramento representam um dos tesouros mais valiosos do interior de Minas Gerais.\nDas formações impressionantes da Gruta e Cachoeira dos Palhares aos poços cristalinos do Basílio e Sampaio.\nA combinação entre o bioma Cerrado preservedo, a riqueza das águas e a hospitalidade mineira cria um destino único no país.\nSeja para descansar em família, praticar esportes de aventura ou renovar energias na água limpa, Sacramento acolhe a todos.\nO ecoturismo sustentável garante que essa dádiva natural continue brilhando e encantando viajantes do mundo inteiro.\nEsperamos que esta árvore interativa tenha fornecido todas as informações necessárias para você planejar uma jornada memorável.\nA magia das quedas d'água, o ar puro das serras e a gastronomia caipira aguardam por sua visita em solo sacramentano!\nPrepare sua mochila, traga seu espírito aventureiro e venha se encantar com as belezas naturais desta terra abençoada.\nAgradecemos por explorar conosco o mapa das águas e maravilhas naturais de Sacramento!\nDeseja ir para a mensagem final de encerramento do módulo ou recomeçar a navegação interativa?",
   "question": "Como deseja prosseguir para finalizar seu conhecimento sobre as cachoeiras?",
   "optA": {
    "label": "Ir para o NÓ 36 para ver a mensagem final de encerramento do módulo.",
    "target": "36",
    "cross": null,
    "raw": "Ir para NÓ 36"
   },
   "optB": {
    "label": "Retornar ao NÓ 01 para explorar outros caminhos da árvore de navegação.",
    "target": "01",
    "cross": null,
    "raw": "Ir para NÓ 01"
   }
  },
  {
   "num": "36",
   "text": "Chegamos ao final da nossa árvore de navegação interativa pelas **Cachoeiras e Maravilhas Naturais de Sacramento**!\nEsta terra abençoada por rios cristalinos, cachoeiras majestosas e pelo bioma Cerrado aguarda sua visita de braços abertos.\nEsperamos que as informações ecológicas, logísticas, de segurança e os roteiros tenham ajudado a planejar sua aventura.\nLembre-se sempre de praticar o turismo responsável: respeite a natureza, recolha seu lixo e apoie a comunidade local.\nAs águas puras de Sacramento são um convite permanente à renovação das energias, à paz e ao encantamento com a criação.\nAgradecemos por navegar conosco por este guia completo do ecoturismo no sudoeste mineiro!\nQue sua jornada pelas trilhas e cachoeiras de Sacramento seja repleta de alegria, segurança, saúde e grandes descobertas!\nBoa viagem e seja sempre muito bem-vindo ao circuito de águas e cachoeiras de Sacramento!",
   "question": "Como deseja finalizar sua consulta interativa sobre as cachoeiras de Sacramento?",
   "optA": {
    "label": "Recomeçar o passeio virtual pelas Cachoeiras desde o NÓ 01.",
    "target": "01",
    "cross": null,
    "raw": "Ir para NÓ 01"
   },
   "optB": {
    "label": "Encerrar e voltar ao Menu Principal do Citypass Sacramento.",
    "target": "MENU"
   }
  }
 ],
 "colegio": [
  {
   "num": "01",
   "text": "Seja bem-vindo ao módulo de exploração do histórico Colégio Allan Kardec de Sacramento!\nReconhecido historicamente como a primeira escola de orientação espírita do Brasil, fundada em 1907.\nIdealizado e dirigido pelo emérito educador, médium e farmacêutico sacramentano Eurípedes Barsanulfo.\nO colégio nasceu com a nobre missão de oferecer ensino laico, gratuito e profundamente humanista a todos.\nSua arquitetura neoclássica do início do século XX permanece preservada no coração da cidade de Sacramento.\nMais do que uma escola, o local tornou-se um marco divisor na história da pedagogia e da caridade no interior mineiro.\nAtualmente, o espaço abriga o Memorial Eurípedes Barsanulfo, museu histórico e o Centro Espírita Esperança e Caridade.\nVisitantes de várias partes do mundo frequentam o local em busca de conhecimento histórico e inspiração espiritual.\nSua trajetória une ciência, filosofia, amor ao próximo e inovações pedagógicas muito à frente do seu tempo.\nComo você prefere iniciar a nossa viagem virtual pela memória e legado do Colégio Allan Kardec?",
   "question": "Por qual aspecto do Colégio Allan Kardec você gostaria de começar?",
   "optA": {
    "label": "Quero entender as origens de sua fundação e a transição do antigo Liceu.",
    "target": "02",
    "cross": null,
    "raw": "Ir para NÓ 02"
   },
   "optB": {
    "label": "Prefiro conhecer a vida e a liderança do educador Eurípedes Barsanulfo.",
    "target": "03",
    "cross": null,
    "raw": "Ir para NÓ 03"
   }
  },
  {
   "num": "02",
   "text": "A história do Colégio Allan Kardec começou formalmente em 1902, originalmente sob o nome de Liceu Sacramentano.\nFundado por Eurípedes Barsanulfo e jovens intelectuais da cidade, o Liceu era uma instituição de ensino tradicional.\nApós a conversão de Eurípedes à Doutrina Espírita em 1904, o jovem professor enfrentou forte incompreensão da sociedade da época.\nMuitos pais retiraram seus filhos do Liceu por preconceito religioso, levando ao encerramento temporário das atividades.\nSem esmorecer, em 31 de janeiro de 1907, Eurípedes reabriu a instituição sob o nome de Colégio Allan Kardec.\nO colégio assumiu uma proposta totalmente gratuita e inclusiva, acolhendo crianças ricas, pobres e órfãs sem distinção.\nFoi a primeira escola regular do país a adotar a filosofia espírita aliada ao ensino científico e humanista de excelência.\nA instituição manteve suas portas abertas de forma ininterrupta e brilhante até o falecimento de seu fundador em 1918.\nO prédio do colégio tornou-se um símbolo de coragem, quebra de paradigmas e amor dedicado à educação pública e fraterna.\nO que você gostaria de explorar a seguir sobre os métodos e a filosofia dessa instituição revolucionária?",
   "question": "Qual vertente pedagógica ou histórica do colégio você prefere detalhar?",
   "optA": {
    "label": "Quero conhecer os métodos pedagógicos inovadores aplicados nas salas de aula.",
    "target": "04",
    "cross": null,
    "raw": "Ir para NÓ 04"
   },
   "optB": {
    "label": "Quero entender a história da conversão espiritual de Eurípedes Barsanulfo.",
    "target": "20",
    "cross": null,
    "raw": "Ir para NÓ 20"
   }
  },
  {
   "num": "03",
   "text": "Eurípedes Barsanulfo nasceu em Sacramento no dia 1º de maio de 1880, em uma família humilde e numerosa.\nDesde muito jovem demonstrou inteligência prodigiosa, profunda sensibilidade moral e vocação para o ensino.\nCom apenas 22 anos, já lecionava e participava ativamente da vida política, jornalística e cultural do município.\nAtuou como vereador em Sacramento, defendendo melhorias na iluminação pública, saneamento e assistência aos necessitados.\nComo médium e farmacêutico homeopata na Farmácia Esperança, atendeu gratuitamente milhares de doentes de toda a região.\nSua vida foi um exemplo de abnegação completa, dividindo seu tempo entre as aulas do colégio, a farmácia e a caridade.\nEurípedes antecipou em décadas conceitos de pedagogia afetiva e respeito integral ao desenvolvimento da criança.\nFaleceu precocemente em 1º de novembro de 1918, vítima da epidemia global de Gripe Espanhola, amparando os doentes.\nSua memória permanece viva na cidade e no coração de admiradores e estudiosos da educação e da espiritualidade.\nQual das realizações de Eurípedes Barsanulfo no colégio você gostaria de conhecer agora?",
   "question": "Qual faceta de Eurípedes Barsanulfo você deseja investigar?",
   "optA": {
    "label": "Quero ver como ele organizava os métodos de ensino e disciplinas no colégio.",
    "target": "04",
    "cross": null,
    "raw": "Ir para NÓ 04"
   },
   "optB": {
    "label": "Quero saber sobre suas faculdades mediúnicas e os atendimentos na Farmácia.",
    "target": "21",
    "cross": null,
    "raw": "Ir para NÓ 21"
   }
  },
  {
   "num": "04",
   "text": "A pedagogia aplicada no Colégio Allan Kardec apresentava métodos surpreendentes e avançados para o início do século XX.\nInspirado pelos princípios de Johann Heinrich Pestalozzi e Sócrates, Eurípedes aboliu completamente os castigos físicos.\nAs aulas eram pautadas pelo diálogo afetuoso, pelo estímulo ao raciocínio crítico e pelo respeito à individualidade dos alunos.\nNão havia provas escritas punitivas tradicionais nem sistemas rígidos de reprovação que gerassem ansiedade nas crianças.\nA aprendizagem era avaliada de forma contínua e dinâmica por meio de observações diárias e gincanas culturais públicas.\nO professor assumia o papel de um facilitador e amigo, estimulando a curiosidade natural e o amor ao conhecimento.\nMeninos e meninas estudavam juntos nas mesmas salas, uma prática mista raríssima nas escolas daquele período no Brasil.\nA união entre rigor acadêmico, afetividade e desenvolvimento das virtudes morais tornou o ensino do colégio uma referência.\nMuitos dos alunos formados por Eurípedes tornaram-se professores, médicos e líderes comunitários destacados na sociedade.\nQuer ver as disciplinas lecionadas no colégio ou entender o papel da arte e do teatro nas aulas?",
   "question": "Qual aspecto prático das aulas do Colégio Allan Kardec te desperta mais interesse?",
   "optA": {
    "label": "Quero saber sobre as disciplinas científicas, como botânica, física e astronomia.",
    "target": "06",
    "cross": null,
    "raw": "Ir para NÓ 06"
   },
   "optB": {
    "label": "Quero ver como o teatro e as artes eram usados no desenvolvimento dos alunos.",
    "target": "07",
    "cross": null,
    "raw": "Ir para NÓ 07"
   }
  },
  {
   "num": "05",
   "text": "O compromisso com a gratuidade absoluta do ensino foi um dos pilares centrais mantidos no Colégio Allan Kardec.\nEurípedes Barsanulfo mantinha a escola sem cobrar mensalidades, dependendo do trabalho voluntário e de doações espontâneas.\nFamílias sem recursos financeiros encontravam no colégio a oportunidade de oferecer educação de alto nível aos seus filhos.\nO material escolar e os livros didáticos eram disponibilizados gratuitamente para os alunos que não podiam comprá-los.\nCrianças de diferentes classes sociais conviviam em perfeita harmonia, aprendendo na prática os valores da fraternidade.\nO colégio também mantinha um regime de acolhimento para orfãos e jovens vindos de fazendas distantes do município.\nA inclusão de alunos negros e de origens humildes garantia uma verdadeira democratização do acesso ao saber na região.\nEssa postura humanitária fez com que o colégio ganhasse o respeito até mesmo daqueles que divergiam de sua filosofia.\nUm exemplo pioneiro de responsabilidade social e amor incondicional à infância que marcou a história de Sacramento.\nGostaria de ver como eram feitas as avaliações por gincanas ou entender a formação moral dos alunos?",
   "question": "Qual detalhe da convivência e do ensino no colégio você quer explorar?",
   "optA": {
    "label": "Quero ver detalhes sobre os festivais de conhecimento e gincanas de fim de ano.",
    "target": "10",
    "cross": null,
    "raw": "Ir para NÓ 10"
   },
   "optB": {
    "label": "Quero entender como a formação moral espírita era abordada nas aulas.",
    "target": "08",
    "cross": null,
    "raw": "Ir para NÓ 08"
   }
  },
  {
   "num": "06",
   "text": "O currículo do Colégio Allan Kardec era de uma riqueza impressionante, abrangendo matérias científicas e humanísticas completas.\nAs disciplinas incluíam Língua Portuguesa, Literatura, Francês, Matemática, Geografia, História Geral e do Brasil.\nNo campo das ciências naturais, os alunos estudavam Física, Química, Zoologia, Botânica e Noções de Medicina e Higiene.\nAs aulas de Astronomia eram lendárias: Eurípedes levava os alunos para o pátio à noite para observar as estrelas e planetas.\nAs lições de Botânica eram ministradas em caminhadas pelos campos de Sacramento, estudando a flora nativa do Cerrado.\nLaboratórios simples com aparelhos e maquetes permitiam aos estudantes realizar experimentos práticos de física e química.\nO ensino da Filosofia e da Psicologia estimulava os jovens a refletir sobre o sentido da vida e a razão da existência.\nA erudição de Eurípedes permitia que ele lecionasse quase todas as matérias com profunda clareza e entusiasmo contagiante.\nUma formação acadêmica sólida que preparava os jovens tanto para os exames oficiais quanto para a vida em sociedade.\nQuer ver como a astronomia e as ciências se conectavam com a natureza ou prefere ver a parte artística?",
   "question": "Qual área do conhecimento no Colégio Allan Kardec chama mais sua atenção?",
   "optA": {
    "label": "Quero ver o uso das aulas práticas de botânica no estudo de plantas medicinais.",
    "target": "19",
    "cross": null,
    "raw": "Ir para NÓ 19"
   },
   "optB": {
    "label": "Quero saber sobre a utilização do teatro e da música no processo educativo.",
    "target": "07",
    "cross": null,
    "raw": "Ir para NÓ 07"
   }
  },
  {
   "num": "07",
   "text": "A arte ocupava um lugar de destaque no projeto pedagógico idealizado por Eurípedes Barsanulfo no Colégio Allan Kardec.\nO teatro pedagógico era utilizado semanalmente como ferramenta para trabalhar a timidez, a oratória e a empatia dos alunos.\nDe forma genial, Eurípedes atribuía papéis desinibidos para alunos introvertidos e papéis de reflexão para os extrovertidos.\nPeças teatrais escritas pelo próprio professor ou adaptadas de clássicos eram encenadas na escola e abertas à comunidade.\nA música também estava sempre presente, com corais infantis e aulas de canto que harmonizavam o ambiente escolar.\nPintura, desenho e trabalhos manuais estimulavam a criatividade e a coordenação motora dos estudantes de todas as idades.\nOs festivais artísticos ao final dos semestres transformavam a escola em um centro cultural fervilhante em Sacramento.\nA expressão artística era entendida por Eurípedes como a linguagem da alma, fundamental para o equilíbrio emocional do indivíduo.\nEssa abordagem integrada transformava o ato de aprender em uma vivência leve, harmoniosa e profundamente marcante.\nDeseja saber como funcionavam as gincanas de avaliação ou ver a formação moral dos estudantes?",
   "question": "Qual continuidade você prefere dar ao estudo do projeto pedagógico do colégio?",
   "optA": {
    "label": "Quero ver como funcionavam as gincanas públicas no lugar das provas tradicionais.",
    "target": "10",
    "cross": null,
    "raw": "Ir para NÓ 10"
   },
   "optB": {
    "label": "Quero saber sobre o ensino da moral espírita e do Evangelho nas salas de aula.",
    "target": "08",
    "cross": null,
    "raw": "Ir para NÓ 08"
   }
  },
  {
   "num": "08",
   "text": "O ensino da moral no Colégio Allan Kardec fundamentava-se nos princípios do Espiritismo e no Evangelho de Jesus Cristo.\nTodas as manhãs, as atividades escolares começavam com uma prece simples, uma leitura reflexiva e momentos de serenidade.\nAs aulas de moral e ética não impunham dogmas religiosos nem procuravam doutrinar coercitivamente os estudantes.\nO foco era o desenvolvimento das virtudes universais: o amor ao próximo, a tolerância, o perdão, a honestidade e a caridade.\nO estudo d'O Livro dos Espíritos e d'O Evangelho segundo o Espiritismo de Allan Kardec servia como guia de reflexão filosófica.\nOs alunos eram incentivados a praticar o bem no seu dia a dia, auxiliando colegas com dificuldades e respeitando a natureza.\nA pluralidade religiosa era respeitada, e a escola acolhia filhos de famílias de diferentes crenças com total consideração.\nA atmosfera de paz e fraternidade criada no ambiente escolar deixava marcas profundas na formação do caráter dos jovens.\nUm modelo pioneiro de educação moral laica e espiritualizada que formou cidadãos conscientes e atuantes.\nDeseja conhecer o Grupo Espírita Esperança e Caridade ou ver os serviços da evangelização atual?",
   "question": "Qual extensão espiritual da obra de Eurípedes você deseja conhecer agora?",
   "optA": {
    "label": "Quero ver a história do Grupo Espírita Esperança e Caridade criado por ele.",
    "target": "14",
    "cross": null,
    "raw": "Ir para NÓ 14"
   },
   "optB": {
    "label": "Quero saber sobre a evangelização infantil e as reuniões de jovens nos dias de hoje.",
    "target": "28",
    "cross": null,
    "raw": "Ir para NÓ 28"
   }
  },
  {
   "num": "09",
   "text": "Funcionando em total sintonia com o Colégio Allan Kardec, a Farmácia Esperança foi fundada por Eurípedes Barsanulfo em 1905.\nNa farmácia, Eurípedes manipulava medicamentos homeopáticos e distribuía gratuitamente remédios para a população carente.\nMuitas das receitas homeopáticas eram obtidas por meio da mediunidade de Eurípedes, com a orientação espiritual do Dr. Bezerra de Menezes.\nPessoas de várias regiões do Brasil viajavam até Sacramento em busca de socorro físico, tratamentos e conforto espiritual.\nO atendimento aos doentes ocorria nos horários de folga do colégio, demonstrando a incrível capacidade de trabalho de Eurípedes.\nNenhum centavo era cobrado pelas consultas ou pelos medicamentos manipulados no laboratório da própria farmácia.\nA atuação conjunta do colégio e da farmácia transformou Sacramento em um farol de assistência médica, educacional e espiritual.\nA tradição do manipulado homeopático e da caridade médica permaneceu registrada nos anais da história do município.\nUm testemunho eloqüente de dedicação ao alívio das dores humanas sem qualquer interesse material ou de projeção.\nQuer ver detalhes sobre os fenômenos de mediunidade e cura ou saber os horários de visitação atual do Memorial?",
   "question": "Para qual aspecto da memória e atendimento você quer seguir?",
   "optA": {
    "label": "Quero saber mais sobre os relatos de mediunidade, desdobramento e curas de Eurípedes.",
    "target": "21",
    "cross": null,
    "raw": "Ir para NÓ 21"
   },
   "optB": {
    "label": "Quero consultar os horários de visitação, palestras e passes no espaço do colégio.",
    "target": "18",
    "cross": null,
    "raw": "Ir para NÓ 18"
   }
  },
  {
   "num": "10",
   "text": "Um dos eventos mais célebres do Colégio Allan Kardec eram os Festivais de Conhecimento e Gincanas de final de ano.\nEm vez de exames individuais e estressantes, os alunos demonstravam o conhecimento adquirido em gincanas públicas abertas.\nO teatro da cidade ou o pátio do colégio ficavam lotados de pais, moradores e visitantes de São Paulo, Minas e Mato Grosso.\nOs estudantes respondiam a perguntas sorteadas sobre geografia, ciências, história, matemática e literatura diante do público.\nAs gincanas envolviam declamação de poesias, interpretação de peças, experimentos científicos e apresentações musicais.\nA atmosfera era de celebração do saber e cooperação entre as equipes de alunos, eliminando a rivalidade nociva.\nA erudição e a segurança com que as crianças respondiam aos questionamentos deixavam os espectadores maravilhados.\nEsses festivais pedagógicos tornaram a reputação do Colégio Allan Kardec conhecida em vários estados brasileiros.\nEra a prova viva da eficiência de um ensino baseado no afeto, na motivação interna e no prazer de aprender.\nDeseja entender a relevância desse modelo para a pedagogia brasileira ou conhecer as disciplinas ministradas?",
   "question": "Como prefere dar prosseguimento ao seu itinerário de exploração pedagógica?",
   "optA": {
    "label": "Quero ver como a ciência, a botânica e a física eram ensinadas no colégio.",
    "target": "06",
    "cross": null,
    "raw": "Ir para NÓ 06"
   },
   "optB": {
    "label": "Quero entender o legado histórico e a influência dessa pedagogia no Brasil.",
    "target": "33",
    "cross": null,
    "raw": "Ir para NÓ 33"
   }
  },
  {
   "num": "11",
   "text": "O prédio do Colégio Allan Kardec é uma das joias arquitetônicas mais icônicas e preservadas do patrimônio de Sacramento.\nConstruído a partir de 1902 em estilo neoclássico simplificado, ele possui fachada simétrica com grandes janelões em arco.\nA edificação térrea destaca-se pelas linhas elegantes, pintura em tons claros e portas em madeira nobre trabalhada.\nNo interior, os amplos salões com pé-direito alto e piso de madeira acolhiam as turmas de alunos com excelente ventilação e luz.\nO pátio interno ajardinado conserva o clima de tranquilidade onde Eurípedes conversava com os estudantes e ministrava aulas.\nPlacas comemorativas e bustos no jardim prestam homenagem ao fundador e aos colaboradores históricos da instituição.\nO edifício passou por restaurações conservativas que mantiveram intactas suas características estruturais e estéticas originais.\nTombado como patrimônio cultural municipal, o prédio é um ponto de parada obrigatório para quem visita o centro da cidade.\nUma estrutura secular que continua emanando uma atmosfera inconfundível de paz, aprendizado e espiritualidade.\nQuer conhecer o Memorial Eurípedes Barsanulfo no interior do prédio ou dicas de ângulos para fotografar a fachada?",
   "question": "Qual informação referente ao espaço físico do prédio você deseja consultar agora?",
   "optA": {
    "label": "Quero conhecer o acervo do Memorial Eurípedes Barsanulfo instalado no prédio.",
    "target": "12",
    "cross": null,
    "raw": "Ir para NÓ 12"
   },
   "optB": {
    "label": "Quero ver sugestões dos melhores ângulos para fotografar a arquitetura do colégio.",
    "target": "31",
    "cross": null,
    "raw": "Ir para NÓ 31"
   }
  },
  {
   "num": "12",
   "text": "No interior do histórico prédio funciona o Memorial Eurípedes Barsanulfo, um espaço museológico de imenso valor afetivo e cultural.\nO acervo reúne objetos pessoais de Eurípedes, incluindo seus óculos, canetas, carteira de trabalho, roupas e utensílios.\nMóveis originais da antiga Farmácia Esperança, frascos de manipulação e balanças de precisão estão expostos ao público.\nDocumentos históricos, como a ata de fundação do colégio, diários de classe, livros de presença e correspondências, estão preservados.\nUma vasta coleção de fotografias em sépia retrata as turmas de alunos, os festivais culturais e o cotidiano da Sacramento de 1900.\nPainéis explicativos e recursos multimídia guiam o visitante pela linha do tempo da vida de Eurípedes e da evolução da escola.\nMonitores capacitados acompanham as visitas, contando causos e contextualizando os detalhes de cada peça em exposição.\nA visitação ao Memorial é gratuita e oferece uma verdadeira imersão na história da educação e do espiritismo brasileiro.\nUm local emocionante que sensibiliza os visitantes pela simplicidade e pela grandeza do legado preservado.\nDeseja saber sobre a livraria de obras espíritas e acervo bibliográfico ou ver os horários de visitação?",
   "question": "O que você prefere pesquisar na sequência sobre o Memorial e o colégio?",
   "optA": {
    "label": "Quero saber sobre a livraria de livros, músicas e materiais educativos do colégio.",
    "target": "24",
    "cross": null,
    "raw": "Ir para NÓ 24"
   },
   "optB": {
    "label": "Quero ver os horários de funcionamento, exposições e recepção de caravanas.",
    "target": "18",
    "cross": null,
    "raw": "Ir para NÓ 18"
   }
  },
  {
   "num": "13",
   "text": "O ano de 1918 marcou um momento doloroso e decisivo na história do Colégio Allan Kardec e do município de Sacramento.\nA terrível epidemia de Gripe Espanhola atingiu a cidade, infectando centenas de moradores e gerando pânico na população.\nEurípedes Barsanulfo transformou a escola e a farmácia em postos de socorro, atendendo incansavelmente os doentes dia e noite.\nExausto pelo esforço sobre-humano e pela dedicação total ao próximo, o próprio Eurípedes acabou contraindo o vírus da gripe.\nNo dia 1º de novembro de 1918, aos 38 anos de idade, Eurípedes desencarnou, provocando uma comoção indescritível na cidade.\nMilhares de pessoas compareceram ao seu sepultamento, em uma das maiores demonstrações de carinho da história do oeste mineiro.\nCom a ausência de seu fundador e líder, o Colégio Allan Kardec encerrou suas atividades escolares regulares naquele período.\nEntretanto, o ideal pedagógico e a chama da caridade acesos por Eurípedes jamais se apagaram no coração da comunidade.\nAnos mais tarde, a obra continuou através do centro espírita e de novos projetos educacionais erguidos por seus seguidores.\nDeseja saber como a Escola Eurípedes Barsanulfo foi criada em 1975 ou ver o histórico do Grupo Espírita?",
   "question": "Qual desdobramento histórico pós-1918 você gostaria de conhecer?",
   "optA": {
    "label": "Quero saber sobre a criação da nova Escola Eurípedes Barsanulfo por Corina e Thomaz.",
    "target": "15",
    "cross": null,
    "raw": "Ir para NÓ 15"
   },
   "optB": {
    "label": "Quero conhecer as atividades mantidas pelo Grupo Espírita Esperança e Caridade.",
    "target": "14",
    "cross": null,
    "raw": "Ir para NÓ 14"
   }
  },
  {
   "num": "14",
   "text": "O Grupo Espírita Esperança e Caridade foi fundado por Eurípedes Barsanulfo em 1905, funcionando acoplado à escola.\nEssa instituição tornou-se a matriz de todas as atividades de estudo, assistência social e evangelização desenvolvidas no local.\nNas dependências do grupo ocorrem até hoje exposições do Evangelho, reuniões de passes e grupos de estudos doutrinários.\nA instituição atende centenas de pessoas semanalmente com trabalhos de acolhimento fraterno e distribuição de mantimentos.\nVoluntários mantêm viva a filosofia de dedicação ao próximo ensinada por Eurípedes há mais de um século em Sacramento.\nA instituição produz e disponibiliza livros, áudios e conteúdos de evangelização utilizados em todo o território nacional.\nO ambiente mantido pelo grupo é de profunda serenidade, convidando à reflexão interior e ao refazer das energias espirituais.\nAs reuniões públicas acontecem em dias e horários fixos durante a semana, recebendo moradores e visitantes de outras cidades.\nUm ponto de apoio espiritual contínuo que preserva intacta a chama do ideal de fé, esperança e caridade no interior de Minas.\nQuer conhecer a Farmácia Esperança acoplada ou consultar os horários de palestras e passes públicos?",
   "question": "Qual informação sobre as atividades do Grupo Espírita você prefere acessar?",
   "optA": {
    "label": "Quero ver os detalhes da Farmácia Esperança e do atendimento fraterno homeopático.",
    "target": "09",
    "cross": null,
    "raw": "Ir para NÓ 09"
   },
   "optB": {
    "label": "Quero consultar os horários das reuniões públicas, passes e estudos semanais.",
    "target": "18",
    "cross": null,
    "raw": "Ir para NÓ 18"
   }
  },
  {
   "num": "15",
   "text": "Em 1975, a herança pedagógica do Colégio Allan Kardec renasceu com a fundação da nova Escola Eurípedes Barsanulfo.\nIdealizada e construída pelo casal de educadores e devotados seguidores Corina Novelino e Thomaz Novelino.\nA nova escola foi erguida em Sacramento com o objetivo de dar continuidade ao ensino gratuito e humanista de Eurípedes.\nAtualmente, a Escola Eurípedes Barsanulfo atende gratuitamente a centenas de crianças e adolescentes da comunidade local.\nSeu projeto pedagógico combina as diretrizes da educação nacional moderna com os princípios de evangelização de espíritos.\nAs crianças recebem ensino pré-escolar e fundamental, alimentação, material didático e atividades culturais e artísticas.\nA instituição é mantida por meio de doações, convênios e pelo trabalho voluntário de uma vasta rede de colaboradores.\nA criação da escola garantiu que a semente plantada em 1907 continuasse frutificando no presente com extrema qualidade.\nUm motivo de imenso orgulho para os cidadãos de Sacramento e um modelo de gestão educacional filantrópica.\nQuer saber mais sobre o trabalho dos educadores Corina e Thomaz Novelino ou sobre a evangelização infantil?",
   "question": "Qual vertente do legado educacional moderno você deseja aprofundar?",
   "optA": {
    "label": "Quero saber a biografia e a contribuição dos educadores Corina e Thomaz Novelino.",
    "target": "16",
    "cross": null,
    "raw": "Ir para NÓ 16"
   },
   "optB": {
    "label": "Quero ver como funciona a Evangelização Infantil e Mocidade aos domingos.",
    "target": "28",
    "cross": null,
    "raw": "Ir para NÓ 28"
   }
  },
  {
   "num": "16",
   "text": "Corina Novelino e Thomaz Novelino foram figuras fundamentais para a preservação e expansão do legado de Eurípedes Barsanulfo.\nCorina Novelino (1912-1980), educadora e escritora de talento, dedicou sua vida a pesquisar e documentar a biografia de Eurípedes.\nSeu livro \"Eurípedes, o Homem e a Missão\" é considerado a obra biográfica de referência sobre a vida do abnegado professor.\nThomaz Novelino (1901-2000), médico e pedagogo, utilizou seus recursos e liderança para estruturar a Escola Eurípedes Barsanulfo.\nJuntos, o casal dedicou décadas de trabalho incansável à causa da educação gratuita e à divulgação da pedagogia espírita.\nEles também incentivaram a criação de grupos de estudo, corais infantis e a publicação de obras didáticas e evangelizadoras.\nO Coral Corina Novelino, ativo até hoje em Sacramento, homenageia a memória dessa dedicada educadora e poetisa.\nO exemplo de vida do casal Novelino demonstra como o ideal de Eurípedes inspirou e continua inspirando gerações de educadores.\nSuas biografias estão entrelaçadas de forma perpétua à história da educação e do espiritismo no Brasil.\nDeseja saber mais sobre a Escola Eurípedes Barsanulfo atual ou sobre o tradicional Encontro de Julho?",
   "question": "Qual atividade ou evento você deseja explorar a seguir?",
   "optA": {
    "label": "Quero conhecer o histórico da Escola Eurípedes Barsanulfo e seu atendimento atual.",
    "target": "15",
    "cross": null,
    "raw": "Ir para NÓ 15"
   },
   "optB": {
    "label": "Quero saber detalhes sobre o tradicional Encontro de Julho realizado no colégio.",
    "target": "17",
    "cross": null,
    "raw": "Ir para NÓ 17"
   }
  },
  {
   "num": "17",
   "text": "O Colégio Allan Kardec é o palco de grandes eventos culturais, filosóficos e espirituais de projeção nacional.\nO mais famoso deles é o tradicional **Encontro de Julho**, realizado anualmente no mês de julho no próprio colégio.\nO evento reúne centenas de congressistas, educadores, pesquisadores e famílias vindos de diversos estados do Brasil.\nA programação conta com seminários, palestras, painéis sobre a evangelização de espíritos, apresentações artísticas e musicais.\nDurante o Encontro, são debatidos temas como pedagogia amorosa, saúde mental, formação moral da infância e literatura espírita.\nO Encontro de Julho dispõe de transmissão ao vivo pelas redes sociais, permitindo a participação de milhares de internautas.\nOutra data marcante é o mês de maio, quando se celebra o aniversário de nascimento de Eurípedes Barsanulfo com homenagens.\nEssas reuniões festivas transformam Sacramento em um polo vibrante de confraternização, fraternidade e troca de experiências.\nUma oportunidade ímpar para vivenciar a energia acolhedora e a alegria contagiante que caracterizam o ambiente do colégio.\nGostaria de ver os horários normais de visitação durante a semana ou saber a melhor época do ano para viajar?",
   "question": "Como prefere orientar o seu planejamento de visitação e eventos?",
   "optA": {
    "label": "Quero ver os horários normais de abertura do prédio, palestras e passes públicos.",
    "target": "18",
    "cross": null,
    "raw": "Ir para NÓ 18"
   },
   "optB": {
    "label": "Quero saber qual a melhor época do ano e clima para visitar o colégio e a cidade.",
    "target": "32",
    "cross": null,
    "raw": "Ir para NÓ 32"
   }
  },
  {
   "num": "18",
   "text": "O Colégio Allan Kardec mantém portas abertas para receber visitantes, caravanas e simpatizantes ao longo de toda a semana.\nExposições do Evangelho e aplicação de passes ocorrem em dias específicos, como segundas, sextas e domingos pela manhã.\nÀs segundas e sextas-feiras, os trabalhos públicos do Evangelho ocorrem tradicionalmente às 09h00 e às 19h00.\nAos domingos, das 10h00 às 12h00, há recepção especial de caravanas e visitação guiada ao Memorial Eurípedes Barsanulfo.\nGrupos de estudos doutrinários, estudo da mediunidade e evangelização de espíritos funcionam nos períodos noturnos.\nO espaço dispõe de acessibilidade e de monitores preparados para prestar informações históricas e acolhimento fraternal.\nRecomenda-se aos visitantes chegarem com alguns minutos de antecedência para desfrutar da atmosfera de silêncio e oração.\nA entrada para todas as reuniões públicas e a visitação ao museu histórico são totalmente gratuitas.\nUma experiência enriquecedora que combina cultura, resgate histórico, paz de espírito e aprendizado moral.\nQuer saber mais sobre dicas de comportamento durante a visita ou sobre o ambiente espiritual da sala de passe?",
   "question": "Qual informação prática sobre a visita você quer consultar agora?",
   "optA": {
    "label": "Quero ver dicas de vestuário, fotos e comportamento durante a visitação ao espaço.",
    "target": "23",
    "cross": null,
    "raw": "Ir para NÓ 23"
   },
   "optB": {
    "label": "Quero entender o clima de serenidade e o atendimento espiritual das salas de passe.",
    "target": "29",
    "cross": null,
    "raw": "Ir para NÓ 29"
   }
  },
  {
   "num": "19",
   "text": "A integração da Botânica com a Medicina Homeopática foi um dos campos mais fascinantes explorados por Eurípedes Barsanulfo.\nDurante os passeios com os alunos do Colégio Allan Kardec pelas matas de Sacramento, ele ensinava a identificar plantas medicinais.\nEspécies como a erva-pombinha, arnica-do-cerrado, carqueja, ipê-roxo e hortelã eram estudadas em suas propriedades biológicas.\nEurípedes explicava a importância de respeitar o equilíbrio da flora nativa e o ciclo de vida dos vegetais no ecossistema.\nMuitas das espécies catalogadas eram posteriormente utilizadas no preparo de chás, fitoterápicos e essências homeopáticas.\nAs aulas de campo estimulavam nos jovens o amor à natureza, a observação científica atenta e o respeito pela criação divina.\nEssa abordagem prática tornava o aprendizado vibrante, ligando o conhecimento dos livros ao ambiente real da região.\nA tradição de valorizar as plantas e a saúde natural permanece viva no imaginário popular do município até os dias atuais.\nUma lição de ecologia prática e sustentabilidade ministrada muito antes dessas palavras entrarem no vocabulário pedagógico.\nDeseja saber mais sobre os métodos pedagógicos do colégio ou sobre a Farmácia de manipulação homeopática?",
   "question": "Qual caminho de pesquisa você quer seguir a partir desta prática científica?",
   "optA": {
    "label": "Quero retornar ao menu de métodos pedagógicos e disciplinas lecionadas.",
    "target": "04",
    "cross": null,
    "raw": "Ir para NÓ 04"
   },
   "optB": {
    "label": "Quero saber como essas plantas eram usadas na Farmácia Esperança mantida por ele.",
    "target": "09",
    "cross": null,
    "raw": "Ir para NÓ 09"
   }
  },
  {
   "num": "20",
   "text": "O processo de conversão espiritual de Eurípedes Barsanulfo ao Espiritismo é uma das passagens mais marcantes de sua biografia.\nCriado em uma família católica fervorosa, o jovem Eurípedes era atuante na paróquia local e liderava a Irmandade de São Vicente.\nEm 1903, seu tio Mariano da Silva apresentou-lhe o livro \"Depois da Morte\", do célebre autor francês Léon Denis.\nA leitura das páginas da obra provocou um profundo impacto na mente analítica e no coração do jovem professor.\nEm seguida, Eurípedes presenciou fenômenos mediúnicos de efeitos físicos e mensagens psicografadas na Fazenda Santa Maria.\nApós estudos rigorosos das obras de Allan Kardec e vivências diretas, convenceu-se da realidade da sobrevivência da alma.\nSua transição para o Espiritismo exigiu imensa coragem moral, pois enfrentou incompreensão e discriminação na sociedade da época.\nA conversão reorientou completamente sua trajetória, levando-o a fundar o Colégio Allan Kardec e a Farmácia Esperança.\nUma decisão consciente que transformou a vida de Eurípedes e inscreveu a cidade de Sacramento na história do Espiritismo.\nQuer saber mais sobre a biografia de Eurípedes ou sobre seus fenômenos de mediunidade e curas?",
   "question": "Qual desdobramento da vida de Eurípedes Barsanulfo você deseja explorar?",
   "optA": {
    "label": "Quero ver mais detalhes sobre sua vida, nascimento e dedicação à caridade.",
    "target": "03",
    "cross": null,
    "raw": "Ir para NÓ 03"
   },
   "optB": {
    "label": "Quero conhecer os relatos sobre sua mediunidade, receitas e fenômenos de cura.",
    "target": "21",
    "cross": null,
    "raw": "Ir para NÓ 21"
   }
  },
  {
   "num": "21",
   "text": "Eurípedes Barsanulfo é reconhecido na historiografia espírita como um dos médiuns mais completos e versáteis do Brasil.\nApresentava faculdades mediúnicas de psicografia, vidência, audição, desdobramento espiritual e receituário homeopático.\nRelatos históricos documentados registram casos de desdobramento em que Eurípedes prestava socorro enquanto seu corpo repousava.\nNa Farmácia Esperança, ele prescrevia medicamentos homeopáticos de extrema eficácia sob a orientação do espírito Dr. Bezerra de Menezes.\nApesar das faculdades extraordinárias, Eurípedes manteve extrema humildade, jamais cobrando nada ou buscando glória pessoal.\nSua mediunidade era colocada integralmente a serviço da caridade, do consolo dos aflitos e do ensino das verdades morais.\nSua conduta irrepreensível serviu para desmistificar o Espiritismo e demonstrar a seriedade dos fenômenos espirituais.\nPessoas das mais variadas posições sociais e de diferentes regiões do país atestaram os benefícios de suas orientações.\nSua vida foi a maior prova prática do lema espírita: \"Fora da caridade não há salvação\".\nGostaria de ver os remédios e a história da Farmácia Esperança ou entender o impacto do seu falecimento em 1918?",
   "question": "Qual rumo deseja dar à exploração das ações de Eurípedes?",
   "optA": {
    "label": "Quero saber mais sobre o funcionamento e o acervo da antiga Farmácia Esperança.",
    "target": "09",
    "cross": null,
    "raw": "Ir para NÓ 09"
   },
   "optB": {
    "label": "Quero entender o momento histórico de sua morte durante a Gripe Espanhola de 1918.",
    "target": "13",
    "cross": null,
    "raw": "Ir para NÓ 13"
   }
  },
  {
   "num": "22",
   "text": "A fundação e o funcionamento do Colégio Allan Kardec transformaram a cidade de Sacramento em um polo de atração nacional.\nDesde o início do século XX, a cidade passou a receber fluxo constante de caravanas, educadores e famílias de várias regiões.\nO turismo pedagógico e religioso impulsionou o desenvolvimento do comércio local, da hotelaria e do transporte no município.\nA presença de visitantes trouxe intercâmbio cultural e intelectual contínuo para a população da aprazível cidade mineira.\nHoje, Sacramento é reconhecida internacionalmente no meio espírita como um dos principais pontos de peregrinação e estudo.\nO respeito e o carinho com que a comunidade sacramentana preserva a memória do colégio encantam a todos os viajantes.\nA atmosfera de acolhimento e a hospitalidade tradicional de Minas Gerais tornam a visita uma experiência inesquecível.\nO colégio tornou-se um dos mais importantes símbolos da identidade cultural, histórica e espiritual do município.\nUm patrimônio vivo que orgulha os moradores de Sacramento e inspira visitantes de todas as origens.\nQuer saber sobre opções de hospedagem na cidade ou ver a sugestão de roteiro de 1 dia?",
   "question": "Como prefere dar prosseguimento ao planejamento de sua viagem a Sacramento?",
   "optA": {
    "label": "Quero ver informações sobre pousadas, hotéis e estrutura receptiva em Sacramento.",
    "target": "25",
    "cross": null,
    "raw": "Ir para NÓ 25"
   },
   "optB": {
    "label": "Quero ver um roteiro sugerido de 1 dia completo focado na memória de Eurípedes.",
    "target": "30",
    "cross": null,
    "raw": "Ir para NÓ 30"
   }
  },
  {
   "num": "23",
   "text": "Para aproveitar ao máximo a sua visitação ao Colégio Allan Kardec e ao Memorial Eurípedes Barsanulfo, siga estas recomendações:\nSilêncio e Respeito: Mantenha um tom de voz suave em todo o prédio, respeitando as atividades de estudo, oração e reflexão.\nFotografias: Fotos sem flash são permitidas nas áreas externas e nas salas do museu; evite fotos durante reuniões de passe.\nTrajes: Recomenda-se o uso de vestuário discreto e confortável, condizente com um ambiente de recolhimento e estudo.\nCrianças: O espaço acolhe famílias com carinho; incentive os jovens a observarem as peças do museu com cuidado e respeito.\nAcervo de Livros: Reserve um tempo para conhecer a livraria local, que oferece vasto acervo de obras educativas e históricas.\nAtendimento Fraterno: Caso necessite de orientação ou conversa fraterna, informe-se com os receptivos no saguão do colégio.\nEntrada Gratuita: Não há cobrança de ingressos para nenhuma das dependências, museu ou reuniões públicas do colégio.\nSeguindo essas orientações simples, sua visita será de paz, aprendizado e profunda harmonização espiritual e cultural.\nDeseja saber mais sobre os materiais da livraria ou sobre as técnicas para fotografar o prédio histórico?",
   "question": "Qual orientação prática vai te ajudar a concluir o planejamento da visita?",
   "optA": {
    "label": "Quero conhecer o acervo de livros, CDs de música e materiais educativos da livraria.",
    "target": "24",
    "cross": null,
    "raw": "Ir para NÓ 24"
   },
   "optB": {
    "label": "Quero ver sugestões dos melhores ângulos e luz para fotografar o prédio neoclássico.",
    "target": "31",
    "cross": null,
    "raw": "Ir para NÓ 31"
   }
  },
  {
   "num": "24",
   "text": "A Livraria do Colégio Allan Kardec dispõe de um valioso acervo literário e audiovisual dedicado à educação e ao Espiritismo.\nEstão disponíveis biografias detalhadas de Eurípedes Barsanulfo, escritas por biógrafos como Corina Novelino e outros autores.\nA literatura infantil e juvenil ocupa lugar de destaque, com livros ilustrados voltados para a formação moral e virtudes humanistas.\nObras clássicas codificadas por Allan Kardec e livros do pensador francês Léon Denis podem ser adquiridos pelos visitantes.\nColetâneas de músicas instrumentais ao piano e álbuns do tradicional Coral Corina Novelino estão disponíveis em CD e meio digital.\nMateriais didáticos produzidos pela equipe do Grupo Espírita Esperança e Caridade servem de apoio para evangelizadores de todo o país.\nLivros de estudo sobre mediunidade, recepção de espíritos e pedagogia amorosa enriquecem o catálogo para pesquisadores.\nToda a renda obtida com a venda dos livros e materiais é revertida para a manutenção das obras sociais e da escola gratuita.\nLevar um livro do Colégio Allan Kardec para casa é prolongar o aprendizado e apoiar a continuidade dessa causa nobre.\nQuer saber mais sobre o Memorial Eurípedes Barsanulfo ou sobre as aulas de evangelização para crianças?",
   "question": "Qual informação referente ao conhecimento e literatura você quer acessar?",
   "optA": {
    "label": "Quero ver novamente as informações sobre o Memorial Eurípedes Barsanulfo.",
    "target": "12",
    "cross": null,
    "raw": "Ir para NÓ 12"
   },
   "optB": {
    "label": "Quero saber como funciona a Evangelização Infantil e Mocidade aos domingos.",
    "target": "28",
    "cross": null,
    "raw": "Ir para NÓ 28"
   }
  },
  {
   "num": "25",
   "text": "A cidade de Sacramento possui uma rede hoteleira e gastronômica aconchegante para acolher visitantes do Colégio Allan Kardec.\nHá opções de hotéis centrais situados a poucos quarteirões do colégio, permitindo deslocamento a pé com total comodidade.\nPousadas urbanas e rurais oferecem acomodações confortáveis, com o tradicional café da manhã mineiro recheado de quitutes.\nRestaurantes no centro da cidade servem o melhor da culinária caipira, como feijão tropeiro, frango com quiabo e doces caseiros.\nPara caravanas e grupos grandes, recomenda-se realizar reservas com antecedência, especialmente nos meses de maio e julho.\nO trânsito tranquilo e a segurança de Sacramento tornam as caminhadas noturnas pelo centro histórico uma atividade agradável.\nMoradores locais e comerciantes estão habituados a acolher os turistas com extrema simpatia e atenção fraterna.\nA infraestrutura simples e charmosa da cidade garante uma estadia relaxante, revigorante e muito acolhedora para a família.\nUma base perfeita para explorar não apenas o colégio, mas todos os atrativos históricos e naturais do município.\nDeseja ver a sugestão de roteiro de 1 dia em Sacramento ou saber como chegar aos outros pontos turísticos?",
   "question": "Como prefere dar sequência ao planejamento logístico de sua viagem?",
   "optA": {
    "label": "Quero ver um roteiro sugerido de 1 dia focando no colégio e pontos históricos.",
    "target": "30",
    "cross": null,
    "raw": "Ir para NÓ 30"
   },
   "optB": {
    "label": "Quero ver a conexão do colégio com o centro histórico e a Basílica central.",
    "target": "27",
    "cross": null,
    "raw": "Ir para NÓ 27"
   }
  },
  {
   "num": "26",
   "text": "O Colégio Allan Kardec é um campo fascinante de pesquisa para estudantes de História, Pedagogia, Sociologia e Espiritismo.\nO acervo do colégio e da biblioteca guarda atas originais, diários de classe da década de 1910 e correspondências históricas.\nPesquisadores encontram no local registros preciosos sobre a introdução da coeducação (ensino misto) no interior do Brasil.\nA documentação revela como a pedagogia de Pestalozzi foi adaptada e praticada com sucesso no sertão de Minas Gerais.\nEstudiosos da história da saúde pública pesquisam os registros de manipulados homeopáticos da antiga Farmácia Esperança.\nA instituição facilita o acesso de graduandos, mestrandos e doutorandos às fontes primárias mediante agendamento prévio.\nTeses e dissertações defendidas em importantes universidades brasileiras têm o Colégio Allan Kardec como tema central.\nA equipe do Memorial oferece suporte informativo para acadêmicos interessados na biografia e método de Eurípedes.\nUm verdadeiro celeiro de conhecimento histórico que continua a revelar tesouros sobre a evolução do ensino brasileiro.\nQuer saber mais sobre o acervo do Memorial ou sobre os materiais bibliográficos disponíveis na livraria?",
   "question": "Qual fonte de pesquisa histórica você gostaria de consultar em seguida?",
   "optA": {
    "label": "Quero ver detalhes sobre o acervo de fotos e documentos do Memorial.",
    "target": "12",
    "cross": null,
    "raw": "Ir para NÓ 12"
   },
   "optB": {
    "label": "Quero consultar os livros históricos e biografias disponíveis na livraria do colégio.",
    "target": "24",
    "cross": null,
    "raw": "Ir para NÓ 24"
   }
  },
  {
   "num": "27",
   "text": "O Colégio Allan Kardec está estrategicamente localizado próximo ao núcleo histórico e arquitetônico da cidade de Sacramento.\nA pouca distância de caminhada encontra-se a Praça Getúlio Vargas e a imponente Basílica de Nossa Senhora do Patrocínio.\nO percurso a pé pelas ruas arborizadas do centro permite admirar casarões preservados do final do século XIX e início do XX.\nA proximidade entre o colégio espírita e a igreja matriz católica reflete a convivência pacífica das tradições em Sacramento.\nPequenos cafés, sorveterias tradicionais e lojas de artesanato local enriquecem o passeio pelas imediações do colégio.\nA caminhada pelo centro urbano é plana e acessível, proporcionando um passeio agradável para pessoas de todas as idades.\nVisitar o colégio e em seguida caminhar pelas praças centrais é a combinação ideal para compreender a alma de Sacramento.\nUm roteiro cultural imperdível que une arquitetura neoclássica, memória religiosa, paz e hospitalidade mineira.\nGostaria de ver detalhes sobre a arquitetura do prédio do colégio ou seguir para outros atrativos do município?",
   "question": "Para onde você deseja direcionar sua exploração a partir do centro da cidade?",
   "optA": {
    "label": "Quero ver detalhes arquitetônicos da fachada e prédio neoclássico do colégio.",
    "target": "11",
    "cross": null,
    "raw": "Ir para NÓ 11"
   },
   "optB": {
    "label": "Quero ver como integrar o passeio ao colégio com a Gruta dos Palhares ou Desemboque.",
    "target": "34",
    "cross": null,
    "raw": "Ir para NÓ 34"
   }
  },
  {
   "num": "28",
   "text": "A Evangelização Infantil e as atividades de Mocidade no Colégio Allan Kardec continuam sendo uma prioridade absoluta.\nAos domingos pela manhã, turmas divididas por faixa etária recebem ensinamentos morais de forma lúdica, alegre e interativa.\nHistorinhas, peças teatrais, desenhos, músicas e brincadeiras são utilizados para transmitir virtudes como amor e respeito.\nOs jovens da Mocidade Espírita debatem temas atuais da juventude sob a luz da filosofia espírita e do pensamento científico.\nO Coral Corina Novelino reúne crianças e adolescentes para ensaios semanais, promovendo a arte e a educação musical.\nA formação recebida pelos jovens fortalece os laços de família, a responsabilidade social e o respeito à diversidade.\nEvangelizadores voluntários passam por constante preparação pedagógica para oferecer acolhimento amoroso aos estudantes.\nAs salas de aula acolhedoras e ajardinadas do colégio secular continuam ecoando as risadas e o entusiasmo das novas gerações.\nA garantia viva de que a missão iniciada por Eurípedes em 1907 permanece pulsante, jovem e renovada no presente.\nQuer saber mais sobre os eventos anuais como o Encontro de Julho ou sobre a harmonia espiritual do local?",
   "question": "Qual aspecto da vivência comunitária e espiritual você deseja ver agora?",
   "optA": {
    "label": "Quero saber mais sobre o Encontro de Julho e eventos de formação.",
    "target": "17",
    "cross": null,
    "raw": "Ir para NÓ 17"
   },
   "optB": {
    "label": "Quero conhecer o ambiente de serenidade das reuniões públicas e sala de passes.",
    "target": "29",
    "cross": null,
    "raw": "Ir para NÓ 29"
   }
  },
  {
   "num": "29",
   "text": "Adentrar as dependências do Colégio Allan Kardec é vivenciar uma atmosfera de profunda harmonia, paz e serenidade interior.\nMuitos visitantes relatam sentir uma suave sensação de bem-estar ao cruzarem o portão e caminharem pelos corredores históricos.\nA sala de passes e os ambientes de oração do Grupo Espírita são mantidos com extrema limpeza fluídica e silêncio respeitoso.\nDurante as reuniões públicas, a música ambiente ao piano e as leituras do Evangelho auxiliam no refazer das energias físicas e mentais.\nO pátio arborizado com árvores frondosas oferece um espaço perfeito para a leitura, meditação e contemploção da natureza.\nO atendimento fraterno acolhe pessoas em momentos de dor, dúvida ou busca por conforto com absoluta privacidade e amor.\nNão há cobrança por nenhum tipo de assistência espiritual, mantendo rigorosamente a máxima do \"Dai de graça o que de graça recebestes\".\nUm verdadeiro refúgio de paz no coração de Sacramento, aberto a todas as pessoas, independentemente de sua crença religiosa.\nUma oportunidade de renovação espiritual e pausa reconfortante na correria da vida moderna.\nDeseja consultar os horários de passe e reuniões ou ver a sugestão de roteiro de 1 dia em Sacramento?",
   "question": "Como deseja prosseguir para organizar sua vivência no espaço?",
   "optA": {
    "label": "Quero consultar a grade de horários das reuniões públicas e recepção de caravanas.",
    "target": "18",
    "cross": null,
    "raw": "Ir para NÓ 18"
   },
   "optB": {
    "label": "Quero ver a sugestão de roteiro de 1 dia focado na visita ao colégio e pontos históricos.",
    "target": "30",
    "cross": null,
    "raw": "Ir para NÓ 30"
   }
  },
  {
   "num": "30",
   "text": "Para quem deseja vivenciar 1 dia inesquecível focado na memória de Eurípedes Barsanulfo em Sacramento, siga este roteiro:\nManhã (08h30 às 11h30): Chegada ao Colégio Allan Kardec. Faça a visita guiada ao Memorial, conheça a livraria e o prédio histórico.\nMeio-Dia (11h30 às 13h30): Almoço saboroso em um dos restaurantes tradicionais de comida caipira no centro histórico da cidade.\nTarde (13h30 às 16h00): Caminhada pela Praça Getúlio Vargas, visita à Basílica e à casa histórica onde Eurípedes viveu com sua família.\nFim de Tarde (16h00 às 17h30): Parada para um café com queijo Minas fresco e momentos de oração ou reflexão no pátio do colégio.\nNoite (19h00): Se for dia de reunião pública (segunda ou sexta), participe da exposição do Evangelho e aplicação de passes.\nEste itinerário garante uma imersão profunda na história, na espiritualidade, na arquitetura e na gastronomia de Sacramento.\nUm dia pleno de emoção e aprendizado que renova os sentimentos e enriquece a bagagem cultural do visitante.\nGostaria de saber a melhor época do ano para realizar esse passeio ou ver atrações naturais para integrar ao roteiro?",
   "question": "Como prefere complementar os detalhes do seu roteiro em Sacramento?",
   "optA": {
    "label": "Quero consultar a melhor época do ano, clima e calendário de eventos na cidade.",
    "target": "32",
    "cross": null,
    "raw": "Ir para NÓ 32"
   },
   "optB": {
    "label": "Quero saber como integrar o passeio urbano às atrações naturais como a Gruta dos Palhares.",
    "target": "34",
    "cross": null,
    "raw": "Ir para NÓ 34"
   }
  },
  {
   "num": "31",
   "text": "Registrar fotograficamente o Colégio Allan Kardec é um prazer para entusiastas da arquitetura histórica e do patrimônio.\nA fachada neoclássica do prédio recebe a luz dourada do sol da manhã, destacando os detalhes dos arcos das janelas e portas.\nPosicione-se no lado oposto da rua para capturar a simetria completa da edificação com o céu azul de Sacramento ao fundo.\nNo pátio interno, os jardins floridos oferecem belos primeiros planos para fotos dos bustos e das placas comemorativas.\nNo interior do Memorial, foque nos detalhes dos objetos antigos da farmácia, como balanças de precisão e frascos de vidro.\nDesative o flash do celular ou câmera ao fotografar documentos e quadros antigos para evitar danos ao acervo histórico.\nO clima bucólico do pátio ao final da tarde proporciona composições poéticas e repletas de sensibilidade e luz suave.\nFotografar as crianças do coral ou eventos requer autorização prévia da organização em respeito à privacidade.\nCada imagem capturada no colégio eterniza a beleza simples e a dignidade de um monumento vivo da educação brasileira.\nQuer ver mais sobre o prédio neoclássico ou sobre os arredores históricos no centro da cidade?",
   "question": "Qual cenário você deseja fotografar e conhecer com mais detalhes?",
   "optA": {
    "label": "Quero ver informações históricas e arquitetônicas sobre o prédio do colégio.",
    "target": "11",
    "cross": null,
    "raw": "Ir para NÓ 11"
   },
   "optB": {
    "label": "Quero explorar os arredores do centro histórico e a praça principal de Sacramento.",
    "target": "27",
    "cross": null,
    "raw": "Ir para NÓ 27"
   }
  },
  {
   "num": "32",
   "text": "O Colégio Allan Kardec e a cidade de Sacramento podem ser visitados com excelente proveito durante todos os meses do ano.\nDe maio a setembro (Estação Seca): O clima é ameno e firme, com dias ensolarados e noites frescas ideais para caminhadas urbanas.\nO mês de maio é marcado por celebrações do nascimento de Eurípedes Barsanulfo, e julho sedia o tradicional Encontro.\nDe outubro a abril (Estação Chuvosa): As temperaturas são mais elevadas e as vegetações dos jardins do colégio ficam verdejantes.\nO período de férias escolares no início do ano atrai muitas famílias com crianças para conhecer o Memorial e a cidade.\nNos finais de semana normais, a visitação ao Memorial permanece tranquila, permitindo um contato calmo e personalizado.\nIndependentemente da época escolhida, a acolhida fraterna dos voluntários do colégio estará sempre de portas abertas.\nUm destino permanente de aprendizado, paz e inspiração moral no sudoeste do estado de Minas Gerais.\nDeseja saber mais sobre o Encontro de Julho ou ver o roteiro sugerido de 1 dia na cidade?",
   "question": "Como deseja continuar navegando pelas informações do colégio?",
   "optA": {
    "label": "Quero ver mais detalhes sobre a programação e inscrições do Encontro de Julho.",
    "target": "17",
    "cross": null,
    "raw": "Ir para NÓ 17"
   },
   "optB": {
    "label": "Quero rever a sugestão de roteiro completo de 1 dia para visitar o colégio.",
    "target": "30",
    "cross": null,
    "raw": "Ir para NÓ 30"
   }
  },
  {
   "num": "33",
   "text": "O legado do Colégio Allan Kardec ultrapassou as fronteiras de Sacramento e exerceu profunda influência na pedagogia brasileira.\nA experiência demonstrou na prática a viabilidade de uma escola laica, gratuita e mista baseada no afeto e sem castigos.\nEducadores de diversas regiões inspiraram-se nos métodos de Eurípedes para criar escolas comunitárias e espíritas pelo país.\nA união pioneira entre o ensino científico rigoroso e a formação moral do caráter serviu de referência pedagógica moderna.\nO colégio comprovou que a motivação interna e a alegria de aprender produzem resultados superiores à disciplina coercitiva.\nA memória dessa conquista histórica permanece viva em livros, teses acadêmicas e congressos de educação em todo o Brasil.\nO Colégio Allan Kardec é um verdadeiro patrimônio imaterial da educação humanista e do pensamento livre em nosso país.\nUma demonstração clara de que a dedicação amorosa de um único homem pode transformar a história de toda uma sociedade.\nUm motivo de contínua inspiração para professores, pais e idealistas que acreditam no poder transformador da educação.\nQuer saber mais sobre o vínculo histórico do colégio com a cidade de Sacramento ou rever o início?",
   "question": "Como prefere prosseguir para caminhar rumo à conclusão deste módulo?",
   "optA": {
    "label": "Quero ver o resumo da centralidade do colégio na identidade cultural de Sacramento.",
    "target": "35",
    "cross": null,
    "raw": "Ir para NÓ 35"
   },
   "optB": {
    "label": "Quero retornar ao NÓ 04 para rever as inovadoras disciplinas lecionadas.",
    "target": "04",
    "cross": null,
    "raw": "Ir para NÓ 04"
   }
  },
  {
   "num": "34",
   "text": "Integrar a visita ao Colégio Allan Kardec com os outros grandes atrativos de Sacramento enriquece muito a viagem ao município.\nApós vivenciar a história e a espiritualidade do colégio no centro, o visitante pode explorar o ecoturismo na Gruta dos Palhares.\nA monumental caverna de arenito fica a apenas 10 km do centro da cidade, oferecendo paisagens exuberantes e parques arborizados.\nOutra opção imperdível é viajar 38 km por estrada de terra até o histórico Povoado do Desemboque, o berço da colonização regional.\nEssa combinação perfeita de turismo cultural, espiritual, histórico e ecológico torna o município de Sacramento único.\nUm final de semana é o tempo ideal para desfrutar com calma do colégio, da gastronomia caipira, da gruta e do vilarejo colonial.\nA diversidade de atrações agrada a todas as idades, desde crianças até idosos em busca de descanso e inspiração.\nSacramento firma-se como um dos destinos turísticos mais autênticos, acolhedores e surpreendentes do interior de Minas Gerais.\nDeseja rever a relação entre o colégio e o centro histórico de Sacramento ou prosseguir para a conclusão?",
   "question": "Como prefere conduzir o encerramento do seu roteiro por Sacramento?",
   "optA": {
    "label": "Quero ver a conexão do colégio com o Centro Histórico e a Basílica da cidade.",
    "target": "27",
    "cross": null,
    "raw": "Ir para NÓ 27"
   },
   "optB": {
    "label": "Quero ver a síntese do vínculo histórico entre Sacramento e o Colégio Allan Kardec.",
    "target": "35",
    "cross": null,
    "raw": "Ir para NÓ 35"
   }
  },
  {
   "num": "35",
   "text": "A trajetória do Colégio Allan Kardec funde-se de maneira permanente com a própria história e identidade da cidade de Sacramento.\nO colégio impulsionou a educação, a assistência médica homeopática e a vida cultural do município nas primeiras décadas do século XX.\nA presença de Eurípedes Barsanulfo projetou Sacramento no mapa do ensino laico e do movimento espírita internacional.\nA preservação amorosa do prédio histórico pelo povo sacramentano demonstra o respeito à memória de seus grandes pioneiros.\nVisitar o Colégio Allan Kardec é compreender a essência generosa, fraterna e acolhedora que caracteriza a gente de Sacramento.\nUma jornada que une fé racional, amor à ciência, arte, caridade incondicional e respeito profundo à dignidade humana.\nAgradecemos por acompanhar cada detalhe da história dessa instituição secular que continua a iluminar mentes e corações.\nEsperamos que esta exploração virtual inspire você a conhecer pessoalmente este tesouro do patrimônio histórico brasileiro!\nDeseja ir para a mensagem final de encerramento do módulo ou recomeçar a navegação interativa?",
   "question": "Como deseja prosseguir para finalizar seu conhecimento sobre o Colégio Allan Kardec?",
   "optA": {
    "label": "Ir para o NÓ 36 para ver a mensagem final de encerramento do módulo.",
    "target": "36",
    "cross": null,
    "raw": "Ir para NÓ 36"
   },
   "optB": {
    "label": "Retornar ao NÓ 01 para explorar outros caminhos da árvore de navegação.",
    "target": "01",
    "cross": null,
    "raw": "Ir para NÓ 01"
   }
  },
  {
   "num": "36",
   "text": "Chegamos ao final da nossa árvore de navegação interativa pelo **Histórico Colégio Allan Kardec** de Sacramento!\nEsta instituição secular é o testemunho vivo do amor à educação, da coragem pedagógica e da caridade incondicional.\nCom seu prédio neoclássico, o Memorial Eurípedes Barsanulfo e o centro espírita, o colégio aguarda sua visita de braços abertos.\nEsperamos que as informações históricas, pedagógicas, visuais e práticas tenham ajudado a planejar sua viagem a Sacramento.\nO Colégio Allan Kardec é mais do que um monumento histórico: é um convite permanente à fraternidade e ao bem.\nAgradecemos por navegar conosco por este marco de valor inestimável da cultura, história e espiritualidade do Brasil!\nQue sua jornada real pelas terras de Sacramento seja abençoada com muita paz, saúde, aprendizado e grandes descobertas!\nBoa viagem e sejam sempre bem-vindos ao Colégio Allan Kardec e à cidade de Sacramento!",
   "question": "Como deseja finalizar sua consulta interativa sobre o Colégio Allan Kardec?",
   "optA": {
    "label": "Recomeçar o passeio virtual pelo Colégio Allan Kardec desde o NÓ 01.",
    "target": "01",
    "cross": null,
    "raw": "Ir para NÓ 01"
   },
   "optB": {
    "label": "Encerrar e voltar ao Menu Principal do Citypass Sacramento.",
    "target": "MENU"
   }
  }
 ],
 "personalidades": [
  {
   "num": "01",
   "text": "Seja bem-vindo ao módulo de exploração das personalidades ilustres e históricas de Sacramento!\nA cidade de Sacramento foi berço e lar de figuras extraordinárias de projeção nacional e internacional.\nSua história é marcada pelo pioneirismo na literatura, na educação, na ação social, na fé e na política.\nDentre seus nomes mais proeminentes destaca-se a escritora Carolina Maria de Jesus, autêntica voz da literatura brasileira.\nNa área da educação e da filantropia, destaca-se o educador e líder espírita Eurípedes Barsanulfo.\nAlém deles, pioneiros do Povoado do Desemboque e líderes comunitários ajudaram a moldar a identidade do Triângulo Mineiro.\nConhecer a vida dessas personalidades é mergulhar na riqueza cultural, humana e histórica de Minas Gerais.\nSeus legados continuam vivos em memoriais, escolas, museus e na memória afetiva do povo sacramentano.\nPreparamos um guia completo interativo para você explorar a biografia e o impacto desses grandes personagens.\nPor qual grande personalidade ou aspecto cultural de Sacramento você gostaria de começar nossa jornada?",
   "question": "Qual legado histórico de Sacramento desperta mais o seu interesse?",
   "optA": {
    "label": "Quero conhecer a vida e a obra da escritora Carolina Maria de Jesus.",
    "target": "02",
    "cross": null,
    "raw": "Ir para NÓ 02"
   },
   "optB": {
    "label": "Prefiro explorar a trajetória do educador e filantropo Eurípedes Barsanulfo.",
    "target": "03",
    "cross": null,
    "raw": "Ir para NÓ 03"
   }
  },
  {
   "num": "02",
   "text": "Carolina Maria de Jesus (1914–1977) nasceu em Sacramento e tornou-se uma das maiores escritoras do Brasil.\nNascida em uma família de agricultores humildes, viveu sua infância e juventude na zona rural e urbana da cidade.\nAinda jovem, frequentou por cerca de dois anos o Colégio Allan Kardec, onde aprendeu a ler e a escrever.\nEssa alfabetização precoce despertou nela uma paixão insaciável pela leitura e pelo registro diário de suas vivências.\nMais tarde, ao migrar para São Paulo e residir na favela do Canindé, transformou seus cadernos em diários marcantes.\nSua obra-prima, \"Quarto de Despejo: Diário de uma Favela\", publicada em 1960, vendeu centenas de milhares de exemplares.\nTraduzida para mais de 15 idiomas, Carolina deu voz, dignidade e lirismo à realidade da população marginalizada.\nSua escrita crua, poética e denunciadora revolucionou a literatura brasileira e o pensamento sociológico.\nHoje, Sacramento celebra com orgulho a memória de sua filha mais ilustre e universal.\nDeseja conhecer os detalhes da infância de Carolina em Sacramento ou focar no sucesso de suas obras literárias?",
   "question": "Qual fase da vida de Carolina Maria de Jesus você deseja detalhar agora?",
   "optA": {
    "label": "Quero saber mais sobre sua infância, juventude e o período em que viveu em Sacramento.",
    "target": "04",
    "cross": null,
    "raw": "Ir para NÓ 04"
   },
   "optB": {
    "label": "Quero entender o impacto de \"Quarto de Despejo\" e sua consagração literária mundial.",
    "target": "05",
    "cross": null,
    "raw": "Ir para NÓ 05"
   }
  },
  {
   "num": "03",
   "text": "Eurípedes Barsanulfo (1880–1918) foi um dos maiores educadores, jornalistas, políticos e líderes espíritas do Brasil.\nNascido em Sacramento, dedicou toda a sua breve e intensa vida ao ensino gratuito e ao amparo dos necessitados.\nFundou o Liceu Sacramentano e, posteriormente, o histórico Colégio Allan Kardec em 1907.\nSeu método pedagógico era revolucionário para a época: aboliu castigos físicos e promovia o ensino integrado da ciência e ética.\nCriou a Farmácia Espírita Esperança, onde manipulava e distribuía medicamentos gratuitamente para a população pobre.\nAtuou como vereador na Câmara Municipal de Sacramento, destacando-se pela defesa dos direitos dos desfavorecidos.\nSua dedicação humanitária atingiu o ápice durante a pandemia da Gripe Espanhola em 1918, cuidando dos doentes até falecer.\nSeu legado de amor, educação libertadora e caridade atrai milhares de visitantes e pesquisadores a Sacramento.\nUma referência moral e intelectual que marcou profundamente a história do estado de Minas Gerais.\nQuer conhecer o projeto pedagógico do Colégio Allan Kardec ou saber sobre suas ações de caridade e saúde?",
   "question": "Qual dimensão da vida de Eurípedes Barsanulfo você prefere analisar?",
   "optA": {
    "label": "Quero conhecer sua atuação revolucionária na educação e o Colégio Allan Kardec.",
    "target": "06",
    "cross": null,
    "raw": "Ir para NÓ 06"
   },
   "optB": {
    "label": "Quero entender suas ações de assistência social, medicina homeopática e saúde pública.",
    "target": "07",
    "cross": null,
    "raw": "Ir para NÓ 07"
   }
  },
  {
   "num": "04",
   "text": "A infância de Carolina Maria de Jesus em Sacramento foi marcada pela simplicidade, pelo trabalho no campo e pela curiosidade.\nConhecida carinhosamente na cidade pelo apelido de \"Bitita\", cresceu em um ambiente rural de extrema modéstia.\nSua mãe, Maria Carolina da Conceição, trabalhou como lavradora e lavadeira para sustentar a família.\nAos sete anos, graças ao incentivo de uma benfeitora local, Carolina frequentou o Colégio Allan Kardec em Sacramento.\nApesar de ter permanecido na escola por apenas dois anos, o aprendizado das letras transformou completamente seu destino.\nBitita devorava jornais velhos, livros doados e qualquer pedaço de papel impresso que encontrava na cidade.\nAs memórias dessa infância no interior de Minas foram mais tarde registradas em seu livro autobiográfico \"Diário de Bitita\".\nA paisagem de Sacramento, a religiosidade popular e as desigualdades do pós-Abolição marcaram profundamente sua visão de mundo.\nEssa base cultural mineira acompanhou a escritora ao longo de toda a sua trajetória criativa.\nQuer saber mais sobre o letramento de Carolina com seus professores ou conhecer o museu dedicado a ela em Sacramento?",
   "question": "Qual desdobramento sobre a infância de Carolina você quer consultar?",
   "optA": {
    "label": "Quero entender como o processo de alfabetização influenciou sua paixão pela escrita.",
    "target": "32",
    "cross": null,
    "raw": "Ir para NÓ 32"
   },
   "optB": {
    "label": "Quero ver informações sobre o acervo e o espaço cultural dedicado a Carolina em Sacramento.",
    "target": "09",
    "cross": null,
    "raw": "Ir para NÓ 09"
   }
  },
  {
   "num": "05",
   "text": "Em 1958, o jornalista Audálio Dantas descobriu os diários de Carolina enquanto fazia uma reportagem na favela do Canindé.\nImpressionado com a força poética e a precisão do relato de Carolina, Audálio ajudou a viabilizar a publicação do material.\nEm 1960 foi lançado \"Quarto de Despejo: Diário de uma Favela\", que se tornou um fenômeno editorial instantâneo.\nO livro esgotou sucessivas tiragens em poucas semanas, vendendo mais de 100 mil exemplares no Brasil.\nCarolina relatava com crudeza e sensibilidade a luta diária contra a fome, o preconceito e a busca pelo sustento dos filhos.\nA repercussão rompeu fronteiras, e a obra foi traduzida para mais de 15 idiomas e distribuída em mais de 40 países.\nCarolina viajou pelo Brasil e exterior para lançar seu livro, sendo aclamada por intelectuais, críticos e pelo público.\nSua conquista provou o poder da literatura como ferramenta de denúncia social e emancipação humana.\nUma obra atemporal que continua sendo estudada em universidades e escolas em todo o planeta.\nDeseja entender a projeção internacional da obra ou conhecer os outros livros publicados por Carolina?",
   "question": "Qual aspecto da produção literária de Carolina você deseja aprofundar?",
   "optA": {
    "label": "Quero ver detalhes sobre a repercussão internacional e a recepção crítica da obra.",
    "target": "10",
    "cross": null,
    "raw": "Ir para NÓ 10"
   },
   "optB": {
    "label": "Quero conhecer seus outros livros publicados, como \"Casa de Alvenaria\" e \"Diário de Bitita\".",
    "target": "22",
    "cross": null,
    "raw": "Ir para NÓ 22"
   }
  },
  {
   "num": "06",
   "text": "O Colégio Allan Kardec, fundado por Eurípedes Barsanulfo em 31 de janeiro de 1907 em Sacramento, foi um marco no Brasil.\nFoi uma das primeiras instituições de ensino no país a adotar a coeducação (aulas mistas para meninos e meninas).\nEurípedes recusou a utilização de palmatórias ou qualquer punição física, promovendo uma pedagogia baseada no afeto e respeito.\nO currículo escolar incluía disciplinas avançadas como Astronomia, Botânica, Física, Filosofia, Música e Línguas.\nO colégio contava com um laboratório de ciências, biblioteca e um observatório astronômico montado pelo próprio Eurípedes.\nAlunos de diversas cidades e estados viajavam para Sacramento para estudar sob a orientação visionária do professor.\nMuitos estudantes de famílias sem recursos financeiros recebiam bolsas de estudo integrais e material didático gratuito.\nA instituição formou gerações de cidadãos engajados, educadores e profissionais de destaque em todo o país.\nUm exemplo pioneiro de educação pública, laica, inclusiva e voltada para o desenvolvimento integral do ser humano.\nDeseja saber mais sobre as aulas práticas de astronomia e ciências ou conhecer a filosofia do ensino de Eurípedes?",
   "question": "Qual elemento da prática educacional do Colégio Allan Kardec você quer explorar?",
   "optA": {
    "label": "Quero detalhes sobre as aulas de astronomia, ciências e o observatório do colégio.",
    "target": "24",
    "cross": null,
    "raw": "Ir para NÓ 24"
   },
   "optB": {
    "label": "Quero entender a filosofia de ensino amorosa e integrativa inspirada em Pestalozzi.",
    "target": "25",
    "cross": null,
    "raw": "Ir para NÓ 25"
   }
  },
  {
   "num": "07",
   "text": "Além da atuação pedagógica, Eurípedes Barsanulfo notabilizou-se pelo trabalho humanitário e de assistência médica.\nFundou a Farmácia Espírita Esperança, onde manipulava e distribuía medicamentos à base de ervas medicinais e homeopatia.\nDiariamente, atendeu centenas de doentes e necessitados que vinham de várias partes de Minas e de outros estados.\nEurípedes não cobrava pelas consultas nem pelos remédios, dedicando suas horas de descanso ao socorro dos enfermos.\nSua profunda empatia e capacidade de escuta confortavam famílias inteiras em momentos de sofrimento e dor.\nDurante a epidemia da Gripe Espanhola de 1918, transformou o Colégio Allan Kardec em um hospital de emergência.\nMesmo exausto, visitava os doentes em suas casas, oferecendo medicação, alimento e amparo espiritual.\nSua dedicação aos mais fracos tornou seu nome sinônimo de fraternidade, caridade e amor ao próximo.\nUm exemplo de vida que continua a inspirar obras sociais e instituições filantrópicas por todo o Brasil.\nDeseja saber mais sobre a atuação de Eurípedes na pandemia de 1918 ou ver detalhes da Farmácia Esperança?",
   "question": "Qual capítulo do trabalho humanitário de Eurípedes você deseja consultar?",
   "optA": {
    "label": "Quero ver os detalhes da atuação heroica de Eurípedes durante a epidemia de Gripe Espanhola.",
    "target": "28",
    "cross": null,
    "raw": "Ir para NÓ 28"
   },
   "optB": {
    "label": "Quero conhecer a história da Farmácia Espírita Esperança e a medicação gratuita.",
    "target": "29",
    "cross": null,
    "raw": "Ir para NÓ 29"
   }
  },
  {
   "num": "08",
   "text": "Para compreender a grandeza de Carolina Maria de Jesus, é preciso analisar o contexto social de Sacramento no século XX.\nNas primeiras décadas do século, a sociedade do interior mineiro mantinha fortes estruturas patriarcais e raciais.\nSendo uma mulher negra e pobre em um período pós-Abolição, Carolina enfrentou imensas barreiras de exclusão social.\nContudo, sua determinação em aprender a ler e seu espírito altivo permitiram que ela superasse essas limitações.\nSua escrita recusou a posição de vítima passiva, tornando-se uma observadora crítica e sagaz da realidade ao seu redor.\nCarolina registrava com precisão os costumes, os preconceitos velados e as lutas cotidianas da população periférica.\nSua trajetória prova que o talento e o intelecto sobressaem mesmo nas condições mais adversas da história.\nSacramento reconhece hoje o papel fundamental de Carolina no combate ao racismo e na valorização da mulher negra.\nSua voz ecoa como um símbolo eterno de resistência, dignidade e liberdade criativa.\nQuer saber como o processo de letramento mudou sua vida ou ver como a cidade homenageia Carolina atualmente?",
   "question": "Como deseja prosseguir na reflexão sobre o legado social de Carolina?",
   "optA": {
    "label": "Quero ver como a paixão pela leitura e letramento impulsionou sua carreira.",
    "target": "16",
    "cross": null,
    "raw": "Ir para NÓ 16"
   },
   "optB": {
    "label": "Quero conhecer os espaços de memória e homenagens prestadas a Carolina em Sacramento.",
    "target": "09",
    "cross": null,
    "raw": "Ir para NÓ 09"
   }
  },
  {
   "num": "09",
   "text": "Sacramento preserva com carinho a memória e o legado de Carolina Maria de Jesus em seus espaços culturais e educativos.\nA cidade conta com um acervo dedicado à escritora no Arquivo Público Municipal e na Casa da Cultura de Sacramento.\nDocumentos históricos, edições raras de seus livros e fotografias da infância e juventude estão preservados para consulta.\nEscolas públicas do município realizam projetos pedagógicos anuais voltados para o estudo de sua obra literária.\nA figura de Carolina também está presente em murais artísticos e nomes de espaços públicos pela cidade.\nEm datas comemorativas, como o centenário do seu nascimento, Sacramento promove simpósios e feiras literárias.\nEstudantes, pesquisadores de universidades e turistas visitam a cidade para conhecer o berço da célebre autora.\nA preservação desse patrimônio imaterial fortalece a identidade cultural e o orgulho do povo sacramentano.\nUma justa e permanente celebração à vida da mulher que transformou a literatura e a história social do Brasil.\nDeseja conhecer o roteiro literário urbano de Sacramento ou ver análises críticas de suas obras?",
   "question": "Qual atividade cultural associada a Carolina você prefere explorar agora?",
   "optA": {
    "label": "Quero ver a sugestão de roteiro literário pelas ruas e espaços culturais de Sacramento.",
    "target": "19",
    "cross": null,
    "raw": "Ir para NÓ 19"
   },
   "optB": {
    "label": "Quero ver a análise crítica e o valor sociológico da obra \"Quarto de Despejo\".",
    "target": "20",
    "cross": null,
    "raw": "Ir para NÓ 20"
   }
  },
  {
   "num": "10",
   "text": "O impacto internacional de \"Quarto de Despejo\" colocou Carolina Maria de Jesus no centro do debate cultural global.\nA obra foi lançada em países como Estados Unidos, França, Alemanha, Itália, Japão, Rússia e Argentina.\nA crítica internacional comparou a força de seu relato aos diários de Anne Frank e às obras de Fyodor Dostoyevsky.\nCarolina tornou-se uma das autoras brasileiras mais lidas e traduzidas de todos os tempos no exterior.\nUniversidades renomadas de Harvard, Sorbonne e Oxford incluíram seus textos em programas de estudos latino-americanos.\nSeu diário ofereceu ao mundo uma perspectiva autêntica e sem filtros sobre a pobreza e a urbanização do Brasil do século XX.\nAtravés de sua escrita, Carolina deu visibilidade global às lutas da mulher trabalhadora e da população negra.\nMesmo décadas após sua publicação, o livro continua vendendo milhares de cópias e inspirando novas edições.\nUm verdadeiro marco que projeta a literatura brasileira e as raízes sacramentanas para os quatro cantos do mundo.\nDeseja saber como se deu a parceria com Audálio Dantas ou explorar a continuação de suas memórias?",
   "question": "Para onde você quer direcionar a leitura sobre o impacto da obra?",
   "optA": {
    "label": "Quero saber mais sobre a parceria e a descoberta da autora por Audálio Dantas.",
    "target": "21",
    "cross": null,
    "raw": "Ir para NÓ 21"
   },
   "optB": {
    "label": "Quero conhecer o livro \"Casa de Alvenaria\", que narra sua vida após o sucesso.",
    "target": "23",
    "cross": null,
    "raw": "Ir para NÓ 23"
   }
  },
  {
   "num": "11",
   "text": "Além de \"Quarto de Despejo\", Carolina Maria de Jesus deixou uma vasta e riquíssima produção literária pós-fama.\nEm 1961, publicou \"Casa de Alvenaria: Diário de uma Ex-Favelada\", relatando sua transição para a nova vida de escritora.\nLançou também o romance \"Pedaços da Fome\" (1963) e o livro de provérbios e reflexões \"Provérbios\" (1963).\nApós seu falecimento em 1977, obras inéditas deixadas em manuscritos foram organizadas e publicadas postumamente.\nDentre as publicações póstumas destaca-se \"Diário de Bitita\", editado inicialmente na França e depois no Brasil.\nRecentemente, a editora Companhia das Letras iniciou a republicação de seus cadernos originais sem cortes editoriais.\nA recuperação do acervo completo revelou que Carolina também escreveu poemas, peças de teatro e composições musicais.\nEm 2021, a Universidade Federal do Rio de Janeiro (UFRJ) concedeu-lhe o título de Doutora Honoris Causa pós-morte.\nUm reconhecimento tardio, porém fundamental, à genialidade e à contribuição de Carolina para as letras brasileiras.\nDeseja conhecer os detalhes de \"Diário de Bitita\" ou ver o papel de Carolina como símbolo antirracista?",
   "question": "Qual aspecto da maturidade e do legado de Carolina você prefere consultar?",
   "optA": {
    "label": "Quero conhecer os detalhes do livro \"Diário de Bitita\" e suas memórias de infância.",
    "target": "22",
    "cross": null,
    "raw": "Ir para NÓ 22"
   },
   "optB": {
    "label": "Quero ver como Carolina tornou-se um símbolo global do movimento negro e feminista.",
    "target": "23",
    "cross": null,
    "raw": "Ir para NÓ 23"
   }
  },
  {
   "num": "12",
   "text": "A prática pedagógica de Eurípedes Barsanulfo no Colégio Allan Kardec fundamentava-se na razão, no amor e na natureza.\nInspirado pelos ideais do educador suíço Johann Heinrich Pestalozzi, defendia que a educação deve cultivar o coração e a mente.\nAs aulas eram dinâmicas e frequentemente realizadas ao ar livre, promovendo a observação direta das plantas e rios.\nEurípedes encorajava o pensamento crítico e o questionamento dos alunos, estimulando a curiosidade científica.\nEle mesmo construiu mapas, maquetes e aparelhos científicos para demonstrar fenômenos físicos e geográficos aos estudantes.\nO colégio promovia saraus de poesia, recitais de música e apresentações teatrais abertas a toda a comunidade de Sacramento.\nEurípedes mantinha uma postura serena e acolhedora, tornando-se uma figura paternal e respeitada por todos os alunos.\nEssa atmosfera de liberdade e respeito mútuo fez do Colégio Allan Kardec um modelo de excelência educacional no país.\nMuitos educadores contemporâneos estudam a pedagogia de Eurípedes como referência de ensino humanizado.\nDeseja saber mais sobre as aulas de astronomia de Eurípedes ou conhecer o museu dedicado a ele?",
   "question": "Qual informação prática sobre o legado educacional de Eurípedes você deseja?",
   "optA": {
    "label": "Quero conhecer os detalhes sobre o observatório e as aulas práticas de astronomia.",
    "target": "24",
    "cross": null,
    "raw": "Ir para NÓ 24"
   },
   "optB": {
    "label": "Quero ver detalhes sobre o Memorial Eurípedes Barsanulfo localizado em Sacramento.",
    "target": "13",
    "cross": null,
    "raw": "Ir para NÓ 13"
   }
  },
  {
   "num": "13",
   "text": "O Memorial Eurípedes Barsanulfo em Sacramento é um dos pontos culturais e de peregrinação mais importantes da região.\nLocalizado junto ao histórico edifício do Colégio Allan Kardec, o espaço preserva intacta a memória do educador.\nO acervo reúne objetos pessoais de Eurípedes, como seus móveis, vestuário, instrumentos de trabalho e livros didáticos.\nManuscritos originais, cartas, documentos da Farmácia Esperança e fotografias de época estão expostos ao público.\nO museu conta com monitores treinados que relatam passagens marcantes da vida e dos feitos de Eurípedes na cidade.\nA atmosfera do local transmite paz e recolhimento, convidando os visitantes à reflexão sobre a fraternidade e a sabedoria.\nAnualmente, o Memorial recebe caravanas de turistas, estudantes e pesquisadores de todo o Brasil e do exterior.\nÉ uma parada obrigatória para quem deseja compreender a alma histórica, educacional e espiritual de Sacramento.\nUm espaço sagrado de preservação da memória e de inspiração para as futuras gerações.\nDeseja saber mais sobre o turismo filosófico/religioso na cidade ou ver os documentos preservados no acervo?",
   "question": "Qual aspecto do Memorial Eurípedes Barsanulfo você deseja aprofundar?",
   "optA": {
    "label": "Quero ver informações sobre o turismo da fé, filosofia e visitação ao Memorial.",
    "target": "26",
    "cross": null,
    "raw": "Ir para NÓ 26"
   },
   "optB": {
    "label": "Quero entender o valor histórico dos manuscritos e documentos preservados no acervo.",
    "target": "27",
    "cross": null,
    "raw": "Ir para NÓ 27"
   }
  },
  {
   "num": "14",
   "text": "O trabalho humanitário de Eurípedes Barsanulfo na área da saúde destacou-se pela gratuidade e pelo pioneirismo.\nInconformado com a falta de médicos e remédios para os mais pobres em Sacramento, dedicou-se ao estudo da medicina.\nAprofundou-se em botânica e homeopatia, desenvolvendo fórmulas fitoterápicas com plantas nativas do Cerrado mineiro.\nNa Farmácia Espírita Esperança, manipulava os remédios e os entregava sem cobrar qualquer valor dos pacientes.\nPessoas com doenças graves ou consideradas incuráveis pela medicina da época buscavam o auxílio de Eurípedes.\nCom paciência infinita, ele atendia a todos, oferecendo tratamento para o corpo e palavras de consolo para a alma.\nSua reputação de médico dos pobres espalhou-se rapidamente, atraindo filas na porta de sua residência e farmácia.\nEurípedes provou que a verdadeira caridade se faz com ação concreta, dedicação integral e amor desinteressado.\nSeu trabalho na saúde pública antecipou conceitos modernos de medicina comunitária e integrativa.\nQuer saber mais sobre o combate à pandemia de Gripe Espanhola em 1918 ou ver a história da farmácia?",
   "question": "Qual conquista de Eurípedes na saúde você quer detalhar?",
   "optA": {
    "label": "Quero ver os detalhes da atuação heroica na epidemia de Gripe Espanhola de 1918.",
    "target": "28",
    "cross": null,
    "raw": "Ir para NÓ 28"
   },
   "optB": {
    "label": "Quero ver o funcionamento e a história da Farmácia Espírita Esperança.",
    "target": "29",
    "cross": null,
    "raw": "Ir para NÓ 29"
   }
  },
  {
   "num": "15",
   "text": "Eurípedes Barsanulfo teve também uma marcante e honrada atuação na vida política e institucional de Sacramento.\nFoi eleito vereador para a Câmara Municipal de Sacramento, atuando com ética inquestionável e visão de futuro.\nEm seu mandato, defendeu projetos voltados para a expansão da iluminação pública e saneamento básico na cidade.\nLutou pela criação de escolas rurais públicas para garantir que as crianças do campo tivessem acesso à alfabetização.\nRecusava qualquer tipo de privilégio financeiro decorrente do cargo, doando verbas para obras de assistência social.\nSua conduta na política era pautada pelo interesse público, pela transparência e pelo compromisso com os humildes.\nSua liderança comunitária inspirou outros cidadãos a se engajarem no desenvolvimento ético e social do município.\nA atuação política de Eurípedes mostrou que é possível exercer a vida pública com absoluta integridade e espírito de servir.\nUm exemplo de cidadania plena que enobrece a história da política mineira.\nDeseja saber mais sobre a transição espiritual de Eurípedes ou conhecer outros pioneiros da cidade?",
   "question": "Como deseja dar sequência à exploração do contexto histórico de Sacramento?",
   "optA": {
    "label": "Quero ver o contexto de sua transição do catolicismo tradicional para o espiritismo.",
    "target": "03",
    "cross": null,
    "raw": "Ir para NÓ 03"
   },
   "optB": {
    "label": "Quero conhecer outros pioneiros históricos de Sacramento e do Povoado do Desemboque.",
    "target": "31",
    "cross": null,
    "raw": "Ir para NÓ 31"
   }
  },
  {
   "num": "16",
   "text": "A trajetória de aprendizado de Carolina Maria de Jesus é uma das histórias mais inspiradoras da cultura brasileira.\nAos sete anos, analfabeta, ingressou no Colégio Allan Kardec após uma benfeitora pagar seus primeiros materiais.\nA experiência da sala de aula abriu-lhe as portas de um mundo inteiramente novo de conhecimento e imaginação.\nEm apenas dois anos de estudo formal, aprendeu a ler, escrever e realizar operações matemáticas fundamentais.\nQuando teve de deixar a escola para trabalhar, não abandonou a paixão pelos livros e pela escrita cotidiana.\nCarolina lia dicionários completos para expandir seu vocabulário e anotava palavras novas em seus cadernos.\nDesenvolveu uma escrita própria, mesclando o registro lírico, a norma culta aprendida na escola e a oralidade popular.\nSeu amor pelo saber transformou uma criança pobre do interior no maior fenômeno literário de sua época.\nUma prova incontestável de que o acesso à educação de qualidade tem o poder de libertar e transformar vidas.\nDeseja saber mais sobre as influências de seus professores em Sacramento ou ver análises de seus livros?",
   "question": "Qual aspecto do aprendizado de Carolina você deseja detalhar?",
   "optA": {
    "label": "Quero ver como a escola e o prof. José Inácio influenciaram sua infância.",
    "target": "32",
    "cross": null,
    "raw": "Ir para NÓ 32"
   },
   "optB": {
    "label": "Quero conhecer a análise literária de seu estilo poético e realista.",
    "target": "17",
    "cross": null,
    "raw": "Ir para NÓ 17"
   }
  },
  {
   "num": "17",
   "text": "O estilo literário de Carolina Maria de Jesus é único e objeto de profundos estudos acadêmicos em todo o mundo.\nSua escrita caracteriza-se pelo realismo cru da vida cotidiana combinado com metáforas poéticas surpreendentes.\nCarolina inventou termos e construções frasais originais para expressar a dor da fome e a beleza da esperança.\nEm suas obras, a fome é personificada como uma entidade \"amarela\" que tortura e degrada a condição humana.\nAo mesmo tempo, sua narrativa demonstra uma dignidade inabalável e uma aguçada ironia sobre os poderosos.\nEla dominava a arte do diário, transformando anotações banais de rotina em literatura de alto valor sociológico.\nSua linguagem autêntica desafiou os padrões rígidos da academia tradicional, abrindo caminhos para a literatura marginal.\nHoje, linguistas e críticos literários reconhecem a sofisticação e a relevância estética de seu projeto de escrita.\nUma voz autêntica que redefiniu o que é considerado alta literatura no Brasil contemporâneo.\nDeseja saber mais sobre o valor sociológico de \"Quarto de Despejo\" ou ver o acervo mantido em Sacramento?",
   "question": "Qual desdobramento sobre a escrita de Carolina você prefere consultar?",
   "optA": {
    "label": "Quero ver a análise do valor sociológico e denúncia social de \"Quarto de Despejo\".",
    "target": "20",
    "cross": null,
    "raw": "Ir para NÓ 20"
   },
   "optB": {
    "label": "Quero ver as informações sobre o acervo preservado na Casa da Cultura em Sacramento.",
    "target": "09",
    "cross": null,
    "raw": "Ir para NÓ 09"
   }
  },
  {
   "num": "18",
   "text": "A valorização da memória de Carolina Maria de Jesus em Sacramento envolve importantes iniciativas culturais e escolares.\nO Arquivo Público Municipal mantém documentos históricos digitalizados sobre a família e a passagem de Carolina na cidade.\nExposições permanentes e temporárias na Casa da Cultura apresentam fotografias, réplicas de cadernos e objetos de época.\nBibliotecas da rede pública contam com acervos completos de todas as edições e biografias já lançadas sobre a autora.\nProjetos de mediação de leitura incentivam crianças e jovens sacramentanos a lerem e reinterpretarem a obra de Carolina.\nPesquisadores universitários encontram suporte documental e acolhida na cidade para o desenvolvimento de teses e dissertações.\nEsse compromisso com a memória garante que as novas gerações reconheçam o valor histórico de sua concidadã.\nSacramento firma-se assim não apenas como o berço da escritora, mas como um polo ativo de difusão de seu legado.\nUma referência nacional na preservação da memória da literatura negra e feminina brasileira.\nDeseja ver a sugestão de roteiro literário pelas ruas da cidade ou conhecer \"Diário de Bitita\"?",
   "question": "Qual opção de exploração cultural você deseja acessar agora?",
   "optA": {
    "label": "Quero ver o roteiro literário urbano pelos pontos históricos frequentados por Carolina.",
    "target": "19",
    "cross": null,
    "raw": "Ir para NÓ 19"
   },
   "optB": {
    "label": "Quero conhecer a fundo o livro \"Diário de Bitita\" e suas memórias rurais.",
    "target": "22",
    "cross": null,
    "raw": "Ir para NÓ 22"
   }
  },
  {
   "num": "19",
   "text": "Para quem visita Sacramento, realizar um roteiro literário urbano em homenagem a Carolina é uma experiência marcante.\nO percurso começa no centro histórico, na praça onde se localiza o prédio original do antigo Colégio Allan Kardec.\nEm seguida, o visitante segue para a Casa da Cultura de Sacramento, onde consulta o acervo e a exposição permanente.\nO roteiro passa por ruas e bairros antigos mencionados em seus escritos de juventude e no \"Diário de Bitita\".\nParadas estratégicas em painéis artísticos e murais urbanos homenageiam trechos poéticos e frases célebres da autora.\nGuia e mapa temático estão disponíveis para orientar moradores e turistas durante a caminhada cultural.\nTerminar o passeio em um café tradicional saboreando quitutes mineiros permite trocar impressões sobre a visita.\nUm passeio leve, enriquecedor e emocionante que conecta a literatura diretamente à geografia de Sacramento.\nDeseja saber como integrar este roteiro ao turismo pelas cachoeiras ou ver o roteiro de final de semana?",
   "question": "Como prefere organizar seus passeios culturais e naturais em Sacramento?",
   "optA": {
    "label": "Quero ver como combinar o roteiro cultural das personalidades com o turismo de cachoeiras.",
    "target": "34",
    "cross": null,
    "raw": "Ir para NÓ 34"
   },
   "optB": {
    "label": "Quero ver a proposta de roteiro completo de final de semana na cidade.",
    "target": "35",
    "cross": null,
    "raw": "Ir para NÓ 35"
   }
  },
  {
   "num": "20",
   "text": "\"Quarto de Despejo: Diário de uma Favela\" é amplamente considerado um clássico da sociologia e da literatura brasileira.\nA obra oferece uma visão privilegiada e interna sobre as transformações urbanas do Brasil na década de 1950.\nCarolina expõe a exclusão social, a ausência de saneamento, a violência e as dificuldades econômicas das periferias.\nO título metáfora compara a favela ao \"quarto de despejo\" da cidade, onde a sociedade esconde o que não quer ver na sala de estar.\nSua escrita precisa desmonta mitos da democracia racial e revela a dura realidade vivida pelas mulheres chefes de família.\nA obra é leitura obrigatória nos principais vestibulares do país e em cursos de Graduação e Pós-Graduação.\nSociólogos, historiadores e críticos literários apontam a obra como um documento fundamental da história social do Brasil.\nA sensibilidade de Carolina transformou a dor individual em uma potente denúncia coletiva e universal.\nUm texto que continua assustadoramente atual e necessário para a compreensão das cidades brasileiras.\nDeseja saber mais sobre o reencontro de Carolina com o sucesso ou conhecer \"Casa de Alvenaria\"?",
   "question": "Qual caminho de leitura crítica você prefere seguir?",
   "optA": {
    "label": "Quero entender o processo de edição e a descoberta por Audálio Dantas.",
    "target": "21",
    "cross": null,
    "raw": "Ir para NÓ 21"
   },
   "optB": {
    "label": "Quero conhecer o livro \"Casa de Alvenaria\" e a mudança de vida da autora.",
    "target": "23",
    "cross": null,
    "raw": "Ir para NÓ 23"
   }
  },
  {
   "num": "21",
   "text": "A história do encontro entre Audálio Dantas e Carolina Maria de Jesus em abril de 1958 é um capítulo célebre do jornalismo.\nAudálio, então um jovem repórter do jornal \"Folha da Noite\", foi à favela do Canindé para cobrir a expansão do local.\nAo ver Carolina repreender adultos usando frases extraídas de seus diários, o repórter percebeu a raridade daquela mulher.\nPediu para ver seus cadernos e deparou-se com mais de 20 cadernos de diários, poesias, peças teatrais e romances.\nPercebendo que a verdadeira reportagem era a própria escrita de Carolina, Audálio publicou trechos de seus diários no jornal.\nA resposta dos leitores foi imediata e avassaladora, levando à organização do manuscrito para o lançamento em livro.\nAudálio garantiu que o texto de Carolina fosse mantido com a grafia original, preservando sua autenticidade estilística.\nA parceria entre o repórter e a escritora mudou para sempre a história da imprensa e da literatura nacional.\nUm marco de sensibilidade jornalística que revelou um dos maiores talentos das letras brasileiras.\nDeseja conhecer a repercussão internacional da publicação ou ver as obras póstumas?",
   "question": "Qual informação relacionada ao sucesso de Carolina você quer consultar?",
   "optA": {
    "label": "Quero ver os detalhes da repercussão internacional da obra em mais de 15 idiomas.",
    "target": "10",
    "cross": null,
    "raw": "Ir para NÓ 10"
   },
   "optB": {
    "label": "Quero ver os detalhes das publicações póstumas e cadernos inéditos.",
    "target": "11",
    "cross": null,
    "raw": "Ir para NÓ 11"
   }
  },
  {
   "num": "22",
   "text": "\"Diário de Bitita\" é um dos livros mais afetuosos e importantes para compreender as raízes mineiras de Carolina Maria de Jesus.\nA obra reúne memórias da infância e juventude da autora passadas em Sacramento e em cidades vizinhas do Triângulo Mineiro.\nCarolina retrata com detalhes a vida rural, as festas religiosas, a medicina popular e o cotidiano das famílias pobres.\nO texto revela como a garotinha Bitita observava criticamente as injustiças sociais e o preconceito da época.\nPublicado primeiramente na França sob o título \"Journal de Bitita\" em 1982, o livro só chegou ao mercado brasileiro anos depois.\nÉ um documento precioso para historiadores estudarem o cotidiano das populações negras no interior mineiro pós-Abolição.\nPara os moradores e visitantes de Sacramento, a leitura do livro é uma viagem no tempo pelas ruas e fazendas da região.\nUma narrativa repleta de nostalgia, poesia, lirismo e amor incondicional às suas origens na terra natal.\nUma leitura indispensável para quem deseja conhecer a essência e o coração da escritora sacramentana.\nDeseja saber mais sobre a infância em Sacramento ou ver como o livro é trabalhado nas escolas locais?",
   "question": "Qual aspecto do livro \"Diário de Bitita\" desperta seu interesse?",
   "optA": {
    "label": "Quero rever os detalhes de sua infância humilde e a vida em Sacramento.",
    "target": "04",
    "cross": null,
    "raw": "Ir para NÓ 04"
   },
   "optB": {
    "label": "Quero ver como a obra é celebrada e preservada em espaços culturais da cidade.",
    "target": "18",
    "cross": null,
    "raw": "Ir para NÓ 18"
   }
  },
  {
   "num": "23",
   "text": "Hoje, Carolina Maria de Jesus é mundialmente aclamada como um dos maiores símbolos do movimento negro e feminista.\nSua vida e obra representam a capacidade das mulheres negras de produzirem pensamento crítico e arte da mais alta qualidade.\nCarolina desafiou o estigma de que a periferia é apenas espaço de carência, mostrando-a como polo de criação e cultura.\nMovimentos sociais e coletivos literários em todo o mundo adotam seu nome e suas frases como lemas de emancipação.\nNo Brasil, prêmios literários, bibliotecas, centros culturais e escolas são batizados em sua homenagem.\nEm 2021, o Museu de Arte Moderna de São Paulo (MAM) e o Instituto Moreira Salles realizaram grandes exposições sobre sua obra.\nA recuperação de seus cadernos originais reforça seu papel como intelectual complexa, compositora, poetisa e dramaturga.\nSacramento orgulha-se de ter sido o berço dessa mulher extraordinária que inspirou gerações de leitores e ativistas.\nSeu legado de coragem, arte e dignidade permanece vivo e pulsante na consciência do povo brasileiro.\nDeseja ver a proposta de roteiro das personalidades ou saber mais sobre as homenagens póstumas?",
   "question": "Como deseja prosseguir na navegação sobre o legado de Carolina?",
   "optA": {
    "label": "Quero ver os detalhes do título de Doutora Honoris Causa e homenagens recentes.",
    "target": "11",
    "cross": null,
    "raw": "Ir para NÓ 11"
   },
   "optB": {
    "label": "Quero ver como visitar os locais históricos em um roteiro prático por Sacramento.",
    "target": "34",
    "cross": null,
    "raw": "Ir para NÓ 34"
   }
  },
  {
   "num": "24",
   "text": "O fascínio de Eurípedes Barsanulfo pelas ciências físicas e pela astronomia marcou profundamente sua atuação pedagógica.\nNo Colégio Allan Kardec, instalou um observatório astronômico equipado com telescópio, globos e cartas celestes.\nNas noites estreladas do Cerrado mineiro, reunia alunos e moradores para observar os planetas, a Lua e as constelações.\nAproveitava a contemplação do universo para ensinar matemática, física, geografia e noções de ética e transcendência.\nEurípedes acreditava que o estudo do cosmos ampliava a mente humana e despertava o sentimento de humildade e respeito.\nSuas aulas de ciências naturais incluíam excursões pelo campo para coleta de plantas e estudo da geologia local.\nEsse ensino prático e experimental estava décadas à frente do sistema educacional tradicional do início do século XX.\nAlunos do colégio guardavam para sempre na memória as noites de observação do céu sob a orientação do mestre.\nUma combinação perfeita entre rigor científico, encanto pela natureza e formação filosófica do indivíduo.\nDeseja saber mais sobre os métodos pedagógicos sem punições ou conhecer o Memorial Eurípedes Barsanulfo?",
   "question": "Qual desdobramento do trabalho pedagógico de Eurípedes você quer ver?",
   "optA": {
    "label": "Quero entender a filosofia do ensino amoroso e a ausência de castigos físicos.",
    "target": "25",
    "cross": null,
    "raw": "Ir para NÓ 25"
   },
   "optB": {
    "label": "Quero ver informações de visitação ao Memorial Eurípedes Barsanulfo em Sacramento.",
    "target": "13",
    "cross": null,
    "raw": "Ir para NÓ 13"
   }
  },
  {
   "num": "25",
   "text": "A filosofia educacional de Eurípedes Barsanulfo baseava-se no princípio de que educar é instruir o intelecto e cultivar a alma.\nInspirando-se nas ideias do educador Pestalozzi e na doutrina espírita, propôs uma escola amorosa e acolhedora.\nEm uma época em que o uso da palmatória e da humilhação era comum, Eurípedes aboliu qualquer forma de violência física ou verbal.\nA disciplina era mantida pelo diálogo, pela compreensão mútua, pelo exemplo do professor e pela persuasão racional.\nO currículo do Colégio Allan Kardec combinava ciências exatas, ciências humanas, artes, música e deveres éticos.\nO ensino era laico no conteúdo acadêmico, promovendo o respeito à liberdade de consciência e de crença dos alunos.\nA instituição atendeu ricos e pobres com o mesmo padrão de excelência, promovendo a integração e a fraternidade social.\nEssa visão inovadora influenciou diversos educadores e escolas do Triângulo Mineiro e do Brasil Central.\nUm modelo pioneiro de pedagogia humanista que mantém sua atualidade e força inspiradora no século XXI.\nDeseja ver detalhes sobre os acervos e documentos preservados no museu ou sobre suas ações sociais?",
   "question": "Qual aspecto da vida de Eurípedes você prefere acessar a seguir?",
   "optA": {
    "label": "Quero ver informações sobre a Farmácia Esperança e as consultas gratuitas.",
    "target": "29",
    "cross": null,
    "raw": "Ir para NÓ 29"
   },
   "optB": {
    "label": "Quero conhecer os documentos e objetos pessoais preservados no Memorial.",
    "target": "27",
    "cross": null,
    "raw": "Ir para NÓ 27"
   }
  },
  {
   "num": "26",
   "text": "Sacramento é um dos destinos mais importantes do Brasil para praticantes do turismo filosófico, histórico e de fé.\nA cidade acolhe anualmente milhares de caravanas e visitantes interessados na trajetória de Eurípedes Barsanulfo.\nA visitação concentra-se no complexo do Colégio Allan Kardec, no Memorial Eurípedes Barsanulfo e na Farmácia Esperança.\nOs visitantes participam de momentos de reflexão, palestras, pesquisas históricas e visitas guiadas ao museu.\nA cidade oferece infraestrutura receptiva com hotéis, pousadas aconchegantes e restaurantes de culinária mineira.\nO clima de tranquilidade da cidade e a receptividade calorosa dos moradores tornam a experiência edificante e pacífica.\nMuitos turistas aproveitam a viagem para combinar a rota espiritual e cultural com o ecoturismo das cachoeiras locais.\nEssa integração entre fé, história e natureza proporciona um roteiro completo de renovação física e interior.\nUm turismo ético e acolhedor que projeta o nome de Sacramento em todo o território nacional.\nDeseja ver a proposta de roteiro integrado (Cultura + Fé + Cachoeiras) ou explorar o acervo documental?",
   "question": "Qual informação de viagem você deseja visualizar?",
   "optA": {
    "label": "Quero ver a proposta de roteiro integrado combinando cultura, fé e cachoeiras.",
    "target": "34",
    "cross": null,
    "raw": "Ir para NÓ 34"
   },
   "optB": {
    "label": "Quero ver detalhes sobre o acervo documental e manuscritos preservados.",
    "target": "27",
    "cross": null,
    "raw": "Ir para NÓ 27"
   }
  },
  {
   "num": "27",
   "text": "O acervo documental preservado no Memorial Eurípedes Barsanulfo em Sacramento é de valor inestimável para a historiografia.\nEntre as peças conservadas estão livros de matrícula do Colégio Allan Kardec com registros de centenas de alunos.\nO museu guarda cartas manuscritas, diários de aula, cadernos de receitas de fitoterapia e artigos publicados em jornais.\nEstão expostos também o telescópio utilizado no observatório astronômico, globos terrestres e mobílias originais de época.\nFotografias históricas retratam a Sacramento do início do século XX, suas ruas de calçamento pé-de-moleque e festas rurais.\nHistoriadores e pesquisadores de universidades utilizam o arquivo para estudos sobre a história da educação e do espiritismo.\nA digitalização do acervo vem sendo realizada para garantir a preservação do papel e facilitar o acesso a estudantes.\nA visita ao museu permite uma verdadeira viagem no tempo, revelando o ambiente de trabalho do insigne educador.\nUm patrimônio cultural e educacional impecavelmente conservado que orgulha a comunidade sacramentana.\nDeseja saber mais sobre os momentos finais da vida de Eurípedes na pandemia de 1918 ou ver sua carreira política?",
   "question": "Qual momento histórico de Eurípedes você deseja conhecer?",
   "optA": {
    "label": "Quero ver os detalhes de sua dedicação na pandemia de Gripe Espanhola de 1918.",
    "target": "28",
    "cross": null,
    "raw": "Ir para NÓ 28"
   },
   "optB": {
    "label": "Quero saber sobre seu mandato como vereador na Câmara Municipal de Sacramento.",
    "target": "30",
    "cross": null,
    "raw": "Ir para NÓ 30"
   }
  },
  {
   "num": "28",
   "text": "Em outubro de 1918, a avassaladora pandemia da Gripe Espanhola atingiu o Brasil e chegou ao interior de Minas Gerais.\nA cidade de Sacramento foi duramente atingida, com centenas de moradores doentes e pânico generalizado na população.\nEurípedes Barsanulfo suspendeu as aulas do Colégio Allan Kardec e transformou o prédio em um hospital improvisado.\nTrabalhando sem descanso dia e noite, manipulava remédios, preparava caldos e atendia pessoalmente aos enfermos.\nMesmo quando a maioria das pessoas temia o contágio, Eurípedes entrava nas casas mais humildes para socorrer as famílias.\nGravemente exausto pelo esforço físico e pela dedicação extrema, acabou contraindo a terrível enfermidade.\nEm 1º de novembro de 1918, aos 38 anos de idade, Eurípedes Barsanulfo faleceu, provocando comoção profunda na cidade.\nMilhares de moradores acompanharam seu sepultamento, chorando a perda do mestre, do médico dos pobres e do amigo.\nSua morte heroica coroou uma vida inteiramente dedicada ao amor, à caridade e ao serviço da humanidade.\nDeseja conhecer a história da Farmácia Esperança ou ver a atuação de outros pioneiros históricos da cidade?",
   "question": "Qual informação deseja consultar após esta passagem histórica?",
   "optA": {
    "label": "Quero conhecer a história da Farmácia Espírita Esperança fundada por Eurípedes.",
    "target": "29",
    "cross": null,
    "raw": "Ir para NÓ 29"
   },
   "optB": {
    "label": "Quero saber sobre outros pioneiros históricos de Sacramento e do Povoado do Desemboque.",
    "target": "31",
    "cross": null,
    "raw": "Ir para NÓ 31"
   }
  },
  {
   "num": "29",
   "text": "A Farmácia Espírita Esperança, fundada por Eurípedes Barsanulfo em Sacramento, foi um marco na assistência social pública.\nCriada para suprir a escassez de recursos médicos na região, a farmácia funcionava em anexo ao Colégio Allan Kardec.\nEurípedes estudou profundamente as propriedades medicinais das plantas do Cerrado e os princípios da homeopatia.\nManipulava pessoalmente xaropes, pomadas, tinturas e medicamentos homeopáticos de forma artesanal e rigorosa.\nAtendia individualmente cada paciente, ouvindo suas queixas, diagnosticando a enfermidade e entregando o remédio.\nA farmácia manteve suas portas abertas para todas as pessoas, independentemente de classe social, cor ou religião.\nA gratuidade absoluta dos remédios e consultas garantiu tratamento de saúde para a população mais carente de Sacramento.\nMesmo após a partida de Eurípedes, o trabalho de assistência farmacêutica e filantrópica continuou a inspirar a cidade.\nUm exemplo duradouro de amor ao próximo que marcou para sempre a memória da saúde pública comunitária em Minas.\nDeseja saber mais sobre seu mandato como vereador ou ver o roteiro turístico pelas personalidades?",
   "question": "Como deseja prosseguir na sua navegação pelas informações?",
   "optA": {
    "label": "Quero ver detalhes sobre a atuação política e os projetos de lei de Eurípedes.",
    "target": "30",
    "cross": null,
    "raw": "Ir para NÓ 30"
   },
   "optB": {
    "label": "Quero ver a proposta de roteiro prático para visitar os pontos históricos em Sacramento.",
    "target": "34",
    "cross": null,
    "raw": "Ir para NÓ 34"
   }
  },
  {
   "num": "30",
   "text": "Na Câmara Municipal de Sacramento, o vereador Eurípedes Barsanulfo destacou-se pela independência ética e espírito público.\nEleito com expressiva votação popular, utilizou o mandato exclusivamente para promover melhorias para a população.\nApresentou projetos de lei para a instalação de escolas públicas primárias nos distritos rurais mais afastados do centro.\nDefendeu o investimento municipal em iluminação pública, saneamento e melhoria das estradas rurais de escoamento.\nOpôs-se firmemente a privilégios fiscais para grandes proprietários, exigindo justiça na cobrança dos impostos municipais.\nEurípedes doava integralmente o subsídio a que tinha direito como vereador para obras de caridade e compra de livros.\nSua postura conciliadora, porém firme nos princípios éticos, granjeou o respeito até mesmo de seus opositores políticos.\nSua passagem pela vida pública provou que a política pode ser uma forma nobre e legítima de servir à coletividade.\nUm legado de integridade cidadã que continua sendo exemplo para os gestores públicos do Triângulo Mineiro.\nDeseja saber mais sobre os fundadores de Sacramento e do Povoado do Desemboque ou ver os roteiros?",
   "question": "Para onde você deseja direcionar sua exploração histórica?",
   "optA": {
    "label": "Quero conhecer os pioneiros históricas do Povoado do Desemboque e fundadores da cidade.",
    "target": "31",
    "cross": null,
    "raw": "Ir para NÓ 31"
   },
   "optB": {
    "label": "Quero ver a sugestão de roteiro de 1 dia sobre as Personalidades de Sacramento.",
    "target": "34",
    "cross": null,
    "raw": "Ir para NÓ 34"
   }
  },
  {
   "num": "31",
   "text": "Além de Carolina Maria de Jesus e Eurípedes Barsanulfo, Sacramento possui uma rica galeria de pioneiros e fundadores.\nA história da região remonta ao século XVIII com a fundação do Povoado do Desemboque, o berço do povoamento regional.\nBandeirantes, garimpeiros e agricultores estabeleceram-se no Desemboque durante a corrida do ouro rumo a Goiás e Mato Grosso.\nLíderes históricos como o Coronel José Afonso de Almeida desempenharam papel decisivo na emancipação e crescimento de Sacramento.\nA cidade também foi lar de importantes educadores, poetas, musicistas, historiadores e artesãos ao longo dos séculos XIX e XX.\nEssa vertente cultural diversificada moldou a vocação de Sacramento como polo de sabedoria, arte e acolhida.\nCasarões coloniais, igrejas seculares no Desemboque e a arquitetura urbana do centro contam essa saga secular.\nConhecer essas personalidades e pioneiros é compreender a própria formação territorial e cultural do Brasil Central.\nUma herança histórica valiosa e preservada com orgulho pela comunidade sacramentana.\nDeseja saber mais sobre a integração entre as personalidades e a história do Desemboque ou ver os roteiros?",
   "question": "Qual aspecto da história geral de Sacramento você quer acessar?",
   "optA": {
    "label": "Quero ver como conectar a história das personalidades ao passeio no Povoado do Desemboque.",
    "target": "35",
    "cross": null,
    "raw": "Ir para NÓ 35"
   },
   "optB": {
    "label": "Quero consultar o roteiro urbano prático de 1 dia centrado nas figuras históricas da cidade.",
    "target": "34",
    "cross": null,
    "raw": "Ir para NÓ 34"
   }
  },
  {
   "num": "32",
   "text": "O processo de alfabetização de Carolina Maria de Jesus no Colégio Allan Kardec de Sacramento foi decisivo na sua vida.\nSeu primeiro professor, José Inácio, percebeu a inteligência viva da garotinha e dedicou especial atenção ao seu aprendizado.\nMesmo com roupas humildes e enfrentando o preconceito social da época, Bitita encontrou na escola um ambiente acolhedor.\nAprendeu a decodificar as letras em poucos meses, encantando-se com a magia das palavras escritas nos quadros e livros.\nA leitura abriu horizontes para a menina, permitindo-lhe viajar pela imaginação e compreender a sociedade ao seu redor.\nAo deixar a escola após dois anos para ajudar na renda familiar, levou consigo o hábito inabalável de escrever todos os dias.\nAnos mais tarde, em São Paulo, essa semente plantada na infância em Sacramento floresceu em seus diários famosos.\nCarolina repetia com frequência que a leitura foi a sua verdadeira libertação e o maior tesouro de sua vida.\nUma prova do impacto transformador que um professor dedicado e uma escola acolhedora podem ter no destino de uma criança.\nDeseja rever as informações sobre a infância de Carolina ou ver o acervo mantido na cidade?",
   "question": "Qual informação complementar sobre Carolina você prefere consultar?",
   "optA": {
    "label": "Quero rever as informações sobre sua infância e juventude na zona rural de Sacramento.",
    "target": "04",
    "cross": null,
    "raw": "Ir para NÓ 04"
   },
   "optB": {
    "label": "Quero ver informações sobre o museu e o acervo da escritora na Casa da Cultura local.",
    "target": "09",
    "cross": null,
    "raw": "Ir para NÓ 09"
   }
  },
  {
   "num": "33",
   "text": "A relação afetiva de Carolina Maria de Jesus com sua terra natal, Sacramento, permaneceu viva ao longo de toda a sua existência.\nMesmo vivendo na metrópole paulistana, recordava com saudade os rios, as serras, os ipês e o ar puro do interior mineiro.\nEm seus escritos, frequentemente mencionava o sabor das frutas do Cerrado, a broa de milho e a acolhida do povo de Minas.\nAs paisagens de Sacramento serviram de cenário poético para suas memórias infantis registradas em \"Diário de Bitita\".\nQuando alcançou a fama nacional nos anos 1960, Carolina fez questão de exaltar suas raízes sacramentanas nas entrevistas.\nA cidade, por sua vez, resgatou com orgulho a memória de sua filha ilustre, celebrando seu nome em praças e eventos literários.\nEsse vínculo afetuoso entre a escritora e sua terra natal reforça a importância de Sacramento na literatura brasileira.\nUm encontro eterno entre a poesia de uma grande autora e a beleza histórica do interior de Minas Gerais.\nDeseja saber mais sobre o centenário de seu nascimento ou ver as homenagens na literatura nacional?",
   "question": "Como deseja prosseguir na consulta sobre Carolina e Sacramento?",
   "optA": {
    "label": "Quero ver como foram as celebrações do centenário de nascimento de Carolina na cidade.",
    "target": "09",
    "cross": null,
    "raw": "Ir para NÓ 09"
   },
   "optB": {
    "label": "Quero ver os detalhes das homenagens recentes e do título de Doutora Honoris Causa.",
    "target": "11",
    "cross": null,
    "raw": "Ir para NÓ 11"
   }
  },
  {
   "num": "34",
   "text": "Sugestão de Roteiro Temático de 1 Dia: \"Personalidades e Memória Cultural de Sacramento\":\nManhã (08h30 às 11h30) - Circuito Eurípedes Barsanulfo:\nVisita ao Memorial Eurípedes Barsanulfo e ao prédio histórico do Colégio Allan Kardec.\nConheça a Farmácia Espírita Esperança e contemple o acervo documental e os objetos pessoais do educador.\nAlmoço (12h00 às 13h30):\nSaboreie um tradicional almoço mineiro caipira em restaurante no centro histórico de Sacramento.\nTarde (14h00 às 17h00) - Circuito Carolina Maria de Jesus:\nVisita à Casa da Cultura de Sacramento e ao Arquivo Público para consultar o acervo dedicado à escritora.\nCaminhada literária a pé pelas praças e ruas históricas frequentadas por Carolina e citadas em \"Diário de Bitita\".\nFim de Tarde (17h30):\nCafé da tarde caipira com pão de queijo, broa e queijo canastra enquanto aprecia a arquitetura neoclássica do centro.\nUm dia inesquecível de imersão em cultura, história, educação libertadora e literatura de nível internacional!\nDeseja saber como expandir este roteiro para um final de semana completo incluindo o Desemboque?",
   "question": "Como deseja ajustar o planejamento da sua viagem cultural?",
   "optA": {
    "label": "Quero ver a proposta de Roteiro de Final de Semana unindo história, cultura e natureza.",
    "target": "35",
    "cross": null,
    "raw": "Ir para NÓ 35"
   },
   "optB": {
    "label": "Quero ver como integrar este roteiro cultural ao passeio pelas cachoeiras da cidade.",
    "target": "26",
    "cross": null,
    "raw": "Ir para NÓ 26"
   }
  },
  {
   "num": "35",
   "text": "Proposta de Roteiro de Final de Semana Completo em Sacramento (2 Dias):\nDia 1 - Personalidades, Cultura e Fé:\nManhã: Roteiro cultural Eurípedes Barsanulfo (Memorial, Colégio Allan Kardec e Farmácia Esperança).\nAlmoço: Almoço caipira no centro urbano de Sacramento.\nTarde: Roteiro literário Carolina Maria de Jesus (Casa da Cultura, Arquivo Público e centro histórico).\nNoite: Jantar agradável na Praça Getúlio Vargas e passeio noturno pela iluminação da Basílica.\nDia 2 - História Colonial e Maravilhas Naturais:\nManhã: Viagem até o histórico Povoado do Desemboque; visite as igrejas do Séc. XVIII e conheça a saga dos pioneiros.\nAlmoço: Almoço tradicional em restaurante comunitário no Desemboque com comida em fogão a lenha.\nTarde: Banho de cachoeira refrescante no Parque Ecológico dos Palhares ou na Cachoeira do Sampaio.\nUm final de semana perfeito que harmoniza a memória das grandes personalidades, a história colonial e as águas do Cerrado.\nDeseja ver a síntese do patrimônio humano de Sacramento ou ir para o encerramento do módulo?",
   "question": "Como prefere conduzir os momentos finais da sua navegação?",
   "optA": {
    "label": "Quero ver a síntese geral sobre o valor das personalidades ilustres de Sacramento.",
    "target": "36",
    "cross": null,
    "raw": "Ir para NÓ 36"
   },
   "optB": {
    "label": "Quero retornar ao NÓ 01 para reexaminar os caminhos da árvore interativa.",
    "target": "01",
    "cross": null,
    "raw": "Ir para NÓ 01"
   }
  },
  {
   "num": "36",
   "text": "Chegamos ao final da nossa árvore de navegação interativa pelas **Personalidades Ilustres de Sacramento**!\nEsta terra abençoada produziu mentes brilhantes, corações generosos e vozes inesquecíveis que orgulham o Brasil.\nA trajetória poética de Carolina Maria de Jesus e a missão amorosa de Eurípedes Barsanulfo são faróis da nossa cultura.\nJunto aos pioneiros do Desemboque e aos educadores locais, eles construíram um patrimônio humano incomparável.\nEsperamos que este guia completo tenha enriquecido seu conhecimento sobre a história, a literatura, a educação e a fé.\nAo visitar Sacramento, caminhe por suas ruas e memoriais com o olhar atento à grandeza desses personagens.\nAgradecemos por navegar conosco por este módulo de resgate e celebração da memória cultural do sudoeste mineiro!\nQue a coragem de Carolina e o amor de Eurípedes sirvam de inspiração permanente para a sua jornada!\nSeja sempre muito bem-vindo à cidade histórica, cultural e acolhedora de Sacramento!",
   "question": "Como deseja concluir sua consulta interativa sobre as personalidades de Sacramento?",
   "optA": {
    "label": "Recomeçar o passeio virtual pelas Personalidades desde o NÓ 01.",
    "target": "01",
    "cross": null,
    "raw": "Ir para NÓ 01"
   },
   "optB": {
    "label": "Encerrar e voltar ao Menu Principal do Citypass Sacramento.",
    "target": "MENU"
   }
  }
 ]
};
const TEMAS = [
  { id: 'gruta', titulo: 'Gruta dos Palhares', icone: 'i-mountain', desc: 'Caverna de arenito, piscinas e parque' },
  { id: 'desemboque', titulo: 'Povoado do Desemboque', icone: 'i-landmark', desc: 'Berco do Triangulo Mineiro' },
  { id: 'basilica', titulo: 'Basilica do Patrocinio', icone: 'i-church', desc: 'Fe, torres e relogio alemao' },
  { id: 'cachoeiras', titulo: 'Cachoeiras e Trilhas', icone: 'i-waves', desc: 'Ecoturismo e banhos' },
  { id: 'colegio', titulo: 'Colegio Allan Kardec', icone: 'i-book', desc: 'Euripedes e educacao' },
  { id: 'personalidades', titulo: 'Personalidades', icone: 'i-user', desc: 'Carolina, Euripedes e Lima Duarte' }
];
