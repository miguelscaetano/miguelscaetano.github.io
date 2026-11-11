(function () {
  const PT = {
    /* ---------- Partilhado ---------- */
    "nav.menu": "Abrir menu",
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.stack": "Stack",
    "nav.contact": "Contacto",
    "projects.phoneAlt": "Ecrã inicial do ParkLog com carros adicionados recentemente",

    /* ---------- Página principal ---------- */
    "meta.title": "Miguel Caetano · Programador de Software",
    "meta.desc": "Portfólio de Miguel Caetano, programador que faz sites, apps para computador e apps para telemóvel. Criador do ParkLog.",
    "hero.available": "Disponível para oportunidades",
    "hero.subtitle": "Programador de software. Faço <strong>sites</strong>, <strong>apps para computador</strong> e <strong>apps para telemóvel</strong>, do primeiro ecrã à integração com IA.",
    "hero.cta": "Ver projetos",
    "hero.cv": "Descarregar CV (PT)",
    "cv.file": "assets/cv-miguel-caetano-pt.pdf",

    "about.label": "01 · Sobre mim",
    "about.title": "Gosto de transformar ideias em apps que dá vontade de usar.",
    "about.codeLabel": "Sobre mim, escrito em código",
    "about.codeComment": "// sobre mim",
    "about.codeStatus": "\"aberto a oportunidades\"",
    "about.p1": "Sou programador e trabalho em web, desktop e mobile. Gosto de pegar numa ideia e levá-la até ao fim: arquitetura, design, performance e os detalhes que fazem a diferença.",
    "about.p2": "O meu projeto principal é o <strong>ParkLog</strong>, uma app para Android e iOS que construí de raiz, com reconhecimento de carros por IA, um backend serverless e 173 testes automáticos. No estágio numa empresa de automação agrícola, levei uma app para sistemas de cultivo inteligente de um protótipo instável até à aprovação na Google Play. Neste momento procuro uma oportunidade para crescer numa equipa de desenvolvimento.",
    "about.f1": "Testes unitários<br />no ParkLog",
    "about.f2": "Plataformas:<br />Android e iOS",
    "about.f3": "Apps<br />bilingues",

    "projects.label": "02 · Projetos",
    "projects.title": "Em destaque",
    "projects.phoneLabel": "Ver o estudo de caso do ParkLog",
    "projects.more": "Mais trabalho meu no <a href=\"https://github.com/caetano14\" target=\"_blank\" rel=\"noopener\">GitHub</a>.",
    "pk.desc": "Uma Pokédex para carros. Tiras uma foto a um carro na rua, a app sugere a marca, o modelo e o ano com IA, calcula a raridade, marca onde o viste e desbloqueia conquistas. Feita em cerca de uma semana; funciona offline, sem conta, e os dados ficam no telemóvel.",
    "pk.f1": "<b>IA sem expor a chave:</b> o modelo é chamado através de um Cloudflare Worker e a app volta a validar a resposta",
    "pk.f2": "<b>A IA sugere, não decide:</b> o reconhecimento é opcional, tem níveis de confiança e pode ser desfeito",
    "pk.f3": "<b>173 testes unitários</b> à lógica (raridade, validação, backups, conquistas), corridos no GitHub Actions",
    "pk.f4": "<b>Dados protegidos:</b> backups em .zip com fotos, tratados como dados não confiáveis ao importar",
    "pk.f5": "<b>116 marcas</b>, motor de raridade, mapa, <b>50 conquistas</b> e interface PT/EN",
    "pk.case": "Ver estudo de caso →",
    "pk.code": "Código ↗",

    "stack.label": "03 · Competências",
    "stack.platforms": "iOS · Xcode e Android",
    "stack.languages": "Linguagens",
    "stack.data": "Dados &amp; ferramentas",
    "stack.jest": "Jest · testes unitários",

    "contact.label": "04 · Contacto",
    "contact.title": "Vamos falar?",
    "contact.text": "Estou aberto a oportunidades, projetos e conversas sobre desenvolvimento de software.",
    "contact.cv": "CV em português (PDF) ↓",
    "contact.cvOther": "CV em inglês (PDF) ↓",
    "cv.otherFile": "assets/cv-miguel-caetano-en.pdf",
    "footer.made": "Feito à mão, sem templates.",

    /* ---------- Estudo de caso: ParkLog ---------- */
    "cs.meta.title": "ParkLog · Estudo de caso · Miguel Caetano",
    "cs.meta.desc": "ParkLog: app em React Native e Expo que reconhece carros por IA e os transforma numa coleção. Arquitetura, decisões técnicas, testes e limitações.",
    "cs.back": "← Voltar aos projetos",
    "cs.label": "Estudo de caso",
    "cs.lead": "<strong>Uma caderneta de bolso para carros.</strong> Vês um carro na rua e tiras-lhe uma foto. A app sugere a marca, o modelo e o ano com um modelo de visão, calcula a raridade, marca onde o viste e desbloqueia conquistas à medida que a coleção cresce. Uma Pokédex para carros.",
    "cs.badge.tests": "173 testes",
    "cs.cta.demo": "▶ Ver demo",
    "cs.cta.code": "Código ↗",

    "cs.facts.typeK": "Tipo",
    "cs.facts.typeV": "Projeto pessoal, feito em cerca de uma semana",
    "cs.facts.platK": "Plataformas",
    "cs.facts.platV": "Android (APK) e iOS",
    "cs.facts.qualK": "Qualidade",
    "cs.facts.qualV": "173 testes unitários · CI no GitHub Actions",

    "cs.demo.label": "01 · Demo",
    "cs.demo.title": "A app a funcionar",
    "cs.demo.note": "O vídeo mostra a app em inglês; o português também está incluído. <a href=\"https://youtu.be/4zAzQh7ZVGI\" target=\"_blank\" rel=\"noopener\">Abrir no YouTube ↗</a>",

    "cs.shows.label": "02 · Em resumo",
    "cs.shows.title": "O que este projeto mostra",
    "cs.shows.1t": "Integração segura com IA",
    "cs.shows.1p": "O modelo é chamado através de um Cloudflare Worker, por isso a chave da API nunca vai dentro da app. A app volta a validar a resposta antes de a usar.",
    "cs.shows.2t": "Pensamento de produto",
    "cs.shows.2p": "O reconhecimento é opcional, nunca guarda nada sozinho, pode ser desfeito e só é sugerido no momento em que faz sentido, não logo na instalação.",
    "cs.shows.3t": "Lógica testável",
    "cs.shows.3p": "Raridade, validação de respostas, limpeza de backups, pesquisa e conquistas são funções puras cobertas por 173 testes, corridos em cada push.",
    "cs.shows.4t": "Segurança dos dados",
    "cs.shows.4p": "Os providers só escrevem depois de carregar, os backups importados são tratados como dados não confiáveis e importar nunca apaga nem substitui nada.",
    "cs.shows.5p": "Tudo vive no dispositivo, sem conta nem backend para manter. O único servidor é o proxy opcional do reconhecimento.",

    "cs.gal.label": "03 · Ecrãs",
    "cs.gal.title": "A app",
    "cs.gal.home": "<b>Home</b>Contador e carros adicionados recentemente, com número estilo Pokédex",
    "cs.gal.add": "<b>Adicionar carro</b>Sugestão da IA com nível de confiança e botão Aplicar",
    "cs.gal.detail": "<b>Detalhe</b>Raridade, país, número de registo, data e hora",
    "cs.gal.collection": "<b>Coleção</b>Agrupada por marca, com pesquisa, filtros e dois tamanhos de cartão",
    "cs.gal.achievements": "<b>Conquistas</b>50 conquistas de quantidade, marcas, raridade, tempo e estilo",
    "cs.gal.profile": "<b>Perfil</b>Reconhecimento opcional, estatísticas e gráfico de raridade",

    "cs.feat.label": "04 · Funcionalidades",
    "cs.feat.title": "O que faz",
    "cs.feat.1t": "Reconhecimento opcional",
    "cs.feat.1p": "Sugere marca, modelo e ano. Com confiança alta preenche os campos vazios; com confiança média ou baixa só mostra uma sugestão para aplicar. Tudo pode ser desfeito.",
    "cs.feat.2t": "Motor de raridade",
    "cs.feat.2p": "Comum, Raro ou Exótico, calculado a partir da marca e de regras por modelo. Não se edita à mão, por isso o mesmo carro tem sempre a mesma raridade.",
    "cs.feat.3t": "116 marcas",
    "cs.feat.3p": "Cerca de 1600 modelos sugeridos. O país vem da marca e só é pedido quando a marca não está na lista.",
    "cs.feat.4t": "Coleção e pesquisa",
    "cs.feat.4p": "Agrupada por marca com cabeçalhos fixos, pesquisa por marca e modelo, filtros por raridade, ano e país, e cartões grandes ou pequenos.",
    "cs.feat.5t": "Local e hora",
    "cs.feat.5p": "Os carros fotografados com a câmara ficam marcados no mapa, com data, hora e um número de registo estilo Pokédex.",
    "cs.feat.6t": "50 conquistas",
    "cs.feat.6p": "Por quantidade, marcas, raridade, tempo e estilo, para dar vontade de voltar à app.",
    "cs.feat.7t": "Backup em .zip",
    "cs.feat.7p": "Exporta e importa a garagem com as fotos. Pode ser guardada no iCloud Drive ou no Google Drive e o Perfil mostra a data do último backup.",
    "cs.feat.8t": "Editar carros",
    "cs.feat.8p": "Marca, modelo e ano podem ser corrigidos depois de guardar; o país e a raridade são recalculados.",
    "cs.feat.9t": "PT/EN e onboarding",
    "cs.feat.9p": "Segue o idioma do telemóvel por defeito, com um primeiro arranque que trata do idioma e das permissões.",

    "cs.arch.label": "05 · Arquitetura",
    "cs.arch.title": "Como está construída",
    "cs.flow.title": "Reconhecimento de um carro",
    "cs.flow.1t": "Foto",
    "cs.flow.1s": "câmara ou galeria",
    "cs.flow.2t": "Redimensionar",
    "cs.flow.3s": "valida token, tipo e tamanho; guarda a chave",
    "cs.flow.4s": "marca, modelo, ano e confiança",
    "cs.flow.5t": "Validação na app",
    "cs.flow.5s": "a resposta volta a ser verificada",
    "cs.flow.6t": "Formulário",
    "cs.flow.6s": "preenche ou sugere, conforme a confiança",
    "cs.arch.tree": "Estrutura do projeto",
    "cs.arch.n1t": "Camadas bem separadas",
    "cs.arch.n1p": "Os ecrãs falam com uma cadeia de providers (<code>I18n → Settings → Cars → Achievements</code>), que usam serviços e lógica pura. Só no fim estão o AsyncStorage, os ficheiros das fotos e o Worker.",
    "cs.arch.n2t": "O servidor está isolado",
    "cs.arch.n2p": "Só o <code>src/services/recognition.js</code> conhece o servidor. Podia ser trocado por um modelo no próprio dispositivo sem mexer nos ecrãs.",
    "cs.arch.n3t": "Falhar sem crashar",
    "cs.arch.n3p": "Os módulos nativos usados num só sítio são carregados quando são precisos: se um faltar, desativa-se uma funcionalidade em vez de a app ir abaixo.",

    "cs.dec.label": "06 · Decisões técnicas",
    "cs.dec.title": "Problemas e como os resolvi",
    "cs.dec.1tag": "Segurança",
    "cs.dec.1t": "A chave da API não pode ir na app",
    "cs.dec.1p": "<b>Problema:</b> uma chave dentro de uma app móvel pode ser extraída.",
    "cs.dec.1s": "<b>Solução:</b> um Worker com menos de 80 linhas guarda a chave como secret e valida cada pedido. O token da app não é um segredo forte, por isso a proteção real é um limite mensal de gastos na conta da API. O Worker não guarda fotos e a localização nunca sai do telemóvel.",
    "cs.dec.2tag": "Produto",
    "cs.dec.2t": "A IA pode enganar-se",
    "cs.dec.2p": "<b>Problema:</b> o modelo pode confundir variantes parecidas do mesmo carro.",
    "cs.dec.2s": "<b>Solução:</b> a IA sugere em vez de decidir. Só as respostas com confiança alta preenchem o formulário sozinhas, e tudo pode ser desfeito. O modelo também é instruído a ignorar texto na imagem e a nunca ler matrículas.",
    "cs.dec.3tag": "Lógica",
    "cs.dec.3t": "Uma raridade consistente",
    "cs.dec.3p": "<b>Problema:</b> se a raridade fosse editável, as coleções deixavam de ser comparáveis.",
    "cs.dec.3s": "<b>Solução:</b> <code>calculateRarity(brand, model)</code> tem duas camadas: a marca define a base e as regras por modelo só a podem subir. As regras comparam palavras inteiras, para que \"M3\" conte e \"M Sport\" não.",
    "cs.dec.4tag": "Dados",
    "cs.dec.4t": "Nunca perder a coleção",
    "cs.dec.4p": "<b>Problema:</b> um primeiro render vazio ou um backup estragado podiam apagar dados reais.",
    "cs.dec.4s": "<b>Solução:</b> os providers só escrevem depois de carregar. Se os dados guardados não se conseguirem ler, é guardada uma cópia do texto original. Os backups importados são limpos campo a campo e nunca substituem nada.",
    "cs.dec.5tag": "Qualidade",
    "cs.dec.5t": "Confiar nas alterações",
    "cs.dec.5p": "<b>Problema:</b> com regras de raridade, conquistas e traduções, era fácil partir algo sem dar conta.",
    "cs.dec.5s": "<b>Solução:</b> a lógica está em funções puras com 173 testes, incluindo os falsos positivos que as regras evitam e a paridade das traduções PT/EN. O GitHub Actions corre o ESLint e os testes em cada push.",
    "cs.dec.6tag": "Distribuição",
    "cs.dec.6t": "Partilhar sem pagar a fatura dos outros",
    "cs.dec.6p": "<b>Problema:</b> um APK público com o reconhecimento ativo deixava qualquer pessoa gastar a conta da API do autor.",
    "cs.dec.6s": "<b>Solução:</b> o APK é compilado de propósito sem o endereço e o token do servidor. Tudo o resto funciona offline, e o reconhecimento aparece no vídeo de demonstração.",

    "cs.stack.label": "07 · Tecnologias",
    "cs.stack.app": "React Native 0.81, Expo SDK 54 (development build, nova arquitetura)",
    "cs.stack.navK": "Navegação",
    "cs.stack.navV": "React Navigation 7 (native stack e bottom tabs)",
    "cs.stack.stateK": "Estado",
    "cs.stack.stateV": "React Context e um contexto de i18n próprio",
    "cs.stack.storeK": "Armazenamento",
    "cs.stack.storeV": "AsyncStorage para dados, document directory para fotos",
    "cs.stack.listsK": "Listas e imagens",
    "cs.stack.proxyK": "Proxy de IA",
    "cs.stack.proxyV": "Cloudflare Worker a chamar a Anthropic Messages API",
    "cs.stack.testsK": "Testes e CI",

    "cs.lim.label": "08 · Honestidade técnica",
    "cs.lim.title": "Limitações e próximos passos",
    "cs.lim.1": "<b>Testes de interface.</b> Os ecrãs e os módulos nativos ainda não têm testes automáticos. Próximo passo: testes de componentes e um teste end-to-end.",
    "cs.lim.2": "<b>Escala dos dados.</b> Os carros são guardados numa só lista JSON. Chega para centenas; para milhares, passaria para SQLite.",
    "cs.lim.3": "<b>Proteção do Worker.</b> Não há limite de pedidos por utilizador. Uma versão de produção teria autenticação, rate limiting e app attestation.",
    "cs.lim.4": "<b>Mapa no Android.</b> No Android o mapa é substituído pelas coordenadas e por um link para a app de mapas, porque o mapa nativo pede uma chave do Google Maps.",
    "cs.lim.5": "<b>Backups.</b> Não são cifrados e só restauram os carros; as definições e as conquistas são reconstruídas a partir deles.",

    "cs.learn.label": "09 · Aprendizagens",
    "cs.learn.title": "O que aprendi",
    "cs.learn.1": "Integrar IA num produto real: a parte que não se vê (chave, validação, custos) dá tanto trabalho como a que se vê.",
    "cs.learn.2": "Desenhar a IA como assistente e não como decisora, com níveis de confiança e a possibilidade de desfazer.",
    "cs.learn.3": "Separar a lógica em funções puras para a poder testar a sério, e montar CI para correr os testes sozinho.",
    "cs.learn.4": "Tratar dados de fora (respostas da API, backups) como não confiáveis.",
    "cs.learn.5": "Levar uma app até ao fim: build, distribuição por APK, README e vídeo de demonstração.",

    "cs.cta.title": "Experimenta",
    "cs.cta.text": "No Android podes instalar o APK. No iPhone, vê o vídeo ou compila a partir do código.",
    "cs.cta.apk": "⬇ Descarregar APK",
    "cs.cta.github": "Código no GitHub ↗",
    "cs.cta.talk": "Falar comigo",
    "cs.footer.home": "Voltar ao início",

    /* ---------- Estudo de caso: estágio ---------- */
    "gl.card.phoneLabel": "Ver o estudo de caso do estágio",
    "gl.card.name": "Monitor de Cultivos",
    "gl.card.tag": "Estágio · Flutter",
    "gl.card.desc": "Uma app móvel para monitorizar sistemas de cultivo inteligente, feita no meu estágio numa empresa de automação agrícola. Peguei num protótipo em Flutter instável, corrigi-o, acrescentei funcionalidades e levei-o até à aprovação na revisão da Google Play.",
    "gl.card.f1": "<b>Comunica com hardware real</b> por TCP e UDP na rede local para mostrar dados dos sensores em tempo real",
    "gl.card.f2": "<b>Valores dos sensores instantâneos</b>, antes demoravam 5 a 10 segundos, com gráficos corrigidos e erros bem tratados",
    "gl.card.f3": "<b>Login com Google, desbloqueio do telemóvel</b>, temas claro/escuro e traduções PT/EN/ES",
    "gl.card.f4": "<b>Testada com beta testers e aprovada</b> na revisão da Google Play",

    "gl.meta.title": "Estudo de caso do estágio · App de monitorização de cultivos · Miguel Caetano",
    "gl.meta.desc": "Estudo de caso do estágio: uma app em Flutter para monitorizar sistemas de cultivo inteligente em tempo real, que estabilizei, melhorei e preparei para a Google Play.",
    "gl.label": "Estudo de caso do estágio",
    "gl.h1": "Estágio",
    "gl.lead": "<strong>Uma app móvel para sistemas de cultivo inteligente.</strong> No meu estágio numa empresa de automação agrícola, peguei num protótipo em Flutter instável, que monitoriza o hardware da empresa, e transformei-o numa app fiável, aprovada na revisão da Google Play.",
    "gl.badge.period": "fev – ago 2025",
    "gl.badge.review": "Aprovada na revisão da Google Play",
    "gl.cta.work": "O que fiz",
    "gl.cta.ba": "Antes vs depois",
    "gl.private": "Os nomes da empresa e do produto não aparecem porque a app é propriedade da empresa. O código é privado e comunica diretamente com o hardware dela.",

    "gl.facts.roleK": "Função",
    "gl.facts.roleV": "Estagiário de desenvolvimento mobile",
    "gl.facts.companyK": "Empresa",
    "gl.facts.companyV": "Automação agrícola",
    "gl.facts.contextK": "Contexto",
    "gl.facts.contextV": "Estágio curricular, licenciatura em Engenharia Informática",

    "gl.ctx.label": "01 · Contexto",
    "gl.ctx.title": "Um sistema de cultivo inteligente que só tinha app para Windows.",
    "gl.ctx.p1": "A empresa desenvolve um sistema modular para automatizar cultivos urbanos e indoor. Um <strong>controlador</strong> central gere todo o sistema e os módulos de energia, luzes e clima, de sensores do solo e de água (pH, EC e nível). Até então, só podia ser acompanhado através de um programa para Windows.",
    "gl.ctx.p2": "Um aluno tinha começado uma app móvel no ano anterior, mas estava incompleta, instável e por publicar: dependências desatualizadas, crashes frequentes, funcionalidades partidas e sem feedback claro quando algo corria mal. O meu trabalho foi pegar nela, corrigi-la, terminá-la e prepará-la para a Play Store.",

    "gl.gal.label": "02 · Ecrãs",
    "gl.gal.title": "A app",
    "gl.gal.dashboard": "<b>Dashboard</b>Módulos, áreas, horários e alarmes num relance",
    "gl.gal.areas": "<b>Horários e áreas</b>Horários ativos com progresso, e cada área de cultivo",
    "gl.gal.module": "<b>Módulo</b>Leituras dos sensores em tempo real: CO₂, humidade, temperatura",
    "gl.gal.chart": "<b>Gráficos</b>Tempo real e histórico, com ON/OFF nas saídas booleanas",
    "gl.alt.dashboard": "Dashboard da app com módulos, áreas, horários e alarmes",
    "gl.alt.areas": "Horários ativos e áreas de cultivo",
    "gl.alt.module": "Sensores de um módulo",
    "gl.alt.chart": "Gráfico de uma saída",
    "gl.alt.before": "Dashboard antes do estágio",
    "gl.alt.after": "Dashboard depois do estágio",

    "gl.ba.label": "03 · Redesign",
    "gl.ba.title": "Dashboard: antes e depois",
    "gl.ba.before": "Antes",
    "gl.ba.after": "Depois",
    "gl.ba.text": "Um resumo no topo, ícones e cores coerentes nos dois temas, cartões alinhados e todas as secções traduzidas para o idioma escolhido.",

    "gl.did.label": "04 · O que fiz",
    "gl.did.title": "De protótipo a produto",
    "gl.did.1t": "Encontrar o controlador",
    "gl.did.1p": "Refiz a pesquisa automática na rede, acrescentei validação de IP e recuperei a pesquisa por número de série e por hostname, que tinha deixado de funcionar, associando-os aos IPs guardados.",
    "gl.did.2t": "Login",
    "gl.did.2p": "Corrigi o login com Google, reconfigurando o Firebase e o fluxo de autenticação, e acrescentei o desbloqueio com o método do próprio telemóvel (impressão digital, rosto, PIN), que só aparece se o aparelho tiver um.",
    "gl.did.3t": "Dados em tempo real e gráficos",
    "gl.did.3p": "Os valores dos sensores passaram de 5 a 10 segundos para aparecerem logo. Corrigi gráficos com unidades e escalas erradas e passei a mostrar as saídas booleanas como ON/OFF em vez de 1/0.",
    "gl.did.4t": "Câmaras",
    "gl.did.4p": "Streams de câmaras RTSP e HTTP com ecrã inteiro, luz de estado e mensagens de erro claras em vez de ecrãs em branco.",
    "gl.did.5t": "Temas e idiomas",
    "gl.did.5p": "Modo claro e escuro guardado no telemóvel, splash screen que segue o tema e traduções completas em português, inglês e espanhol, incluindo as notificações.",
    "gl.did.6t": "Estabilidade",
    "gl.did.6p": "Corrigi crashes (ligar a um IP sem controlador, trocar de controlador depois de terminar sessão, falta de internet), atualizei todas as dependências desatualizadas, resolvi os TODOs do programador anterior e reorganizei os assets.",
    "gl.did.7t": "Publicação na Google Play",
    "gl.did.7p": "Conta de programador, ficha da loja em vários idiomas, featured graphic, página de política de privacidade e build otimizada. A app passou na revisão da Google; o lançamento público fica a cargo da empresa.",
    "gl.did.8t": "Beta testing",
    "gl.did.8p": "Testada pela equipa da empresa, primeiro com o APK partilhado e depois num beta fechado na Google Play, corrigindo o que iam reportando.",
    "gl.did.9t": "Feedback mais claro",
    "gl.did.9p": "Indicadores de carregamento, mensagens de validação e avisos discretos no fundo do ecrã em vez de pop-ups que bloqueiam, para o utilizador saber sempre o que a app está a fazer.",

    "gl.how.label": "05 · Como funciona",
    "gl.how.title": "A comunicação com o hardware",
    "gl.flow.title": "Do sensor ao telemóvel",
    "gl.flow.1t": "Sensores e módulos",
    "gl.flow.1s": "energia, solo e água",
    "gl.flow.2t": "Controlador",
    "gl.flow.2s": "gere o sistema na rede local",
    "gl.flow.3s": "TCP para pedidos fiáveis, UDP para telemetria rápida",
    "gl.flow.4t": "Estado da app",
    "gl.flow.4s": "Provider, SQLite para dados locais",
    "gl.flow.5t": "Ecrãs",
    "gl.flow.5s": "dashboard, módulos, gráficos, câmaras",
    "gl.how.n1t": "Só leitura, de propósito",
    "gl.how.n1p": "A app só lê dados do controlador. A configuração continua no software de desktop, por isso um telemóvel nunca pode deixar um cultivo num estado avariado.",
    "gl.how.n2t": "Local primeiro",
    "gl.how.n2p": "Tal como o próprio controlador, a app funciona na rede local sem depender de um servidor na cloud.",
    "gl.how.n3t": "Trabalhar num código que já existia",
    "gl.how.n3p": "Mantive a arquitetura original (Provider) e melhorei-a por dentro em vez de reescrever tudo, para a empresa ficar com um código que já conhece.",

    "gl.ch.label": "06 · Desafios",
    "gl.ch.title": "Problemas e como os resolvi",
    "gl.ch.1tag": "Código herdado",
    "gl.ch.1t": "O projeto inacabado de outra pessoa",
    "gl.ch.1p": "<b>Problema:</b> a app nem compilava nas versões atuais do Flutter e trazia bugs e TODOs herdados.",
    "gl.ch.1s": "<b>Solução:</b> atualizei as dependências, corrigi as incompatibilidades, estudei o código antes de o mudar e fechei todos os TODOs deixados pelo programador anterior.",
    "gl.ch.2tag": "Rede",
    "gl.ch.2t": "Uma pesquisa que deixou de funcionar",
    "gl.ch.2p": "<b>Problema:</b> a pesquisa do controlador por número de série ou hostname dependia de um método que o Flutter deixou de suportar.",
    "gl.ch.2s": "<b>Solução:</b> a app passou a guardar o número de série e o hostname de cada controlador que encontra, junto com o IP, e pesquisa por esse IP, com validação e avisos claros.",
    "gl.ch.3tag": "Robustez",
    "gl.ch.3t": "Crashes quando a rede falhava",
    "gl.ch.3p": "<b>Problema:</b> um IP sem controlador, uma ligação que caía ou a falta de internet lançavam exceções não tratadas e fechavam a app.",
    "gl.ch.3s": "<b>Solução:</b> tratamento de exceções em todas as ligações, avisos que o utilizador tem de confirmar e um regresso controlado ao ecrã de pesquisa.",
    "gl.ch.4tag": "Dados",
    "gl.ch.4t": "Valores que não faziam sentido",
    "gl.ch.4p": "<b>Problema:</b> valores a zero ficavam a carregar para sempre, módulos desligados apareciam como ligados e os gráficos mostravam °C ou % em saídas ON/OFF.",
    "gl.ch.4s": "<b>Solução:</b> os dados são validados antes de serem desenhados, o estado do módulo é verificado antes de o abrir e os dados booleanos têm um gráfico próprio.",

    "gl.res.label": "07 · Resultados",
    "gl.res.title": "O que mudou",
    "gl.res.1b": "Imediatos",
    "gl.res.1s": "valores dos sensores, antes demoravam 5 a 10 segundos",
    "gl.res.2s": "idiomas: português, inglês e espanhol",
    "gl.res.3s": "beta testers da empresa",
    "gl.res.4s": "aprovada na revisão da Google Play",

    "gl.next.label": "08 · Próximos passos",
    "gl.next.title": "O que faria a seguir",
    "gl.next.1": "<b>Testes automáticos.</b> A app foi testada à mão em vários dispositivos Android; testes unitários às partes críticas seriam o passo seguinte.",
    "gl.next.2": "<b>iOS.</b> O código é multiplataforma, mas publicar na App Store exige um Mac, que não estava disponível.",
    "gl.next.3": "<b>Mais notificações.</b> As notificações push já funcionam; mais tipos de eventos cobririam mais partes do sistema.",
    "gl.next.4": "<b>Vários controladores.</b> Gerir mais do que um controlador ao mesmo tempo, com permissões diferentes.",

    "gl.learn.label": "09 · Aprendizagens",
    "gl.learn.1": "Pegar num código que não escrevi e melhorá-lo, em vez de começar do zero.",
    "gl.learn.2": "Trabalhar com hardware real por TCP e UDP, onde a rede pode falhar e falha.",
    "gl.learn.3": "Trabalhar com uma empresa: feedback da equipa e dos beta testers, prioridades e prazos.",
    "gl.learn.4": "Todo o processo de publicação na Google Play, da ficha da loja à política de privacidade e à revisão.",

    "gl.cta.title": "Queres saber mais?",
    "gl.cta.text": "O código é privado, mas explico com gosto como funciona numa entrevista.",
    "gl.cta.back": "Outros projetos",

    /* ---------- Página 404 ---------- */
    "nf.title": "Página não encontrada · Miguel Caetano",
    "nf.heading": "Página não encontrada",
    "nf.text": "O link pode estar partido ou a página pode ter mudado de sítio.",
    "nf.home": "Voltar ao início",
  };

  const STORAGE_KEY = "lang";
  const original = new WeakMap(); // guarda o inglês de cada elemento

  function store(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage indisponível */ }
  }
  function saved() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function apply(lang) {
    const usePT = lang === "pt";
    document.documentElement.lang = usePT ? "pt" : "en";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      const orig = original.get(el) || {};
      if (orig.html === undefined) { orig.html = el.innerHTML; original.set(el, orig); }
      const text = usePT && PT[key] !== undefined ? PT[key] : orig.html;
      if (el.tagName === "TITLE") el.textContent = text; else el.innerHTML = text;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const orig = original.get(el) || {};
      orig.attrs = orig.attrs || {};
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => s.trim());
        if (!(attr in orig.attrs)) orig.attrs[attr] = el.getAttribute(attr);
        el.setAttribute(attr, usePT && PT[key] !== undefined ? PT[key] : orig.attrs[attr]);
      });
      original.set(el, orig);
    });

    document.querySelectorAll("[data-lang]").forEach((btn) =>
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === (usePT ? "pt" : "en")))
    );
  }

  function setLang(lang) { store(lang); apply(lang); }

  // Idioma inicial: escolha guardada → idioma do browser → inglês
  const browserPT = (navigator.languages || [navigator.language || ""]).some((l) => /^pt\b/i.test(l));
  const initial = saved() || (browserPT ? "pt" : "en");
  apply(initial);

  document.querySelectorAll("[data-lang]").forEach((btn) =>
    btn.addEventListener("click", () => setLang(btn.dataset.lang))
  );

  window.setLang = setLang;
})();
