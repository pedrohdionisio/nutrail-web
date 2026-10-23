export const ptBR = {
  metadata: {
    title: 'Nutrail — o diário alimentar com IA',
    description:
      'Registre uma refeição com uma foto, um áudio ou poucas palavras e receba os alimentos com calorias e macros. Um app open source construído como produção na AWS.'
  },
  shareImage: {
    alt: 'Nutrail, o diário alimentar com IA, com a tela inicial do app no celular',
    titlePrefix: 'O diário alimentar com',
    titleAccent: 'IA',
    titleSuffix: '',
    description: 'Uma foto, um áudio ou poucas palavras. As calorias e os macros de volta.',
    tags: 'Open source · React Native · AWS serverless'
  },
  language: {
    label: 'Idioma',
    en: 'English',
    pt: 'Português'
  },
  nav: {
    label: 'Navegação principal',
    howItWorks: 'Como funciona',
    calculator: 'Calculadora',
    engineering: 'Engenharia',
    faq: 'Dúvidas',
    github: 'Ver no GitHub'
  },
  hero: {
    sentenceStart: 'Eu',
    resultPrefix: 'O Nutrail encontrou',
    methodLabel: 'Trocar como a refeição foi registrada',
    dishLabel: 'Trocar a refeição',
    methods: {
      PICTURE: 'fotografei',
      VOICE: 'falei',
      TEXT: 'digitei'
    },
    dishes: {
      RICE_AND_BEANS: 'arroz, feijão e frango',
      EGGS_ON_TOAST: 'dois ovos com torrada',
      ACAI_BOWL: 'um açaí com granola',
      SALMON_POKE: 'um poke de salmão',
      BURGER_AND_FRIES: 'um cheeseburger com fritas'
    },
    macros: {
      protein: 'proteína',
      carbohydrate: 'carboidrato',
      fat: 'gordura'
    },
    description:
      'Tire uma foto do prato, grave um áudio ou escreva o que comeu. A IA identifica cada alimento com a quantidade, as calorias e os macros, e compara o dia com metas calculadas para você.',
    primaryAction: 'Ver o código',
    secondaryAction: 'Rodar na sua máquina',
    microcopy: 'Open source · React Native, Node.js e AWS · Roda nas suas próprias contas',
    annotation: 'esse é o app de verdade!',
    screenshotAlt:
      'Tela inicial do Nutrail: 2069 de 2356 kcal no dia, a proteína, o carboidrato e a gordura contra as metas, e as refeições registradas'
  },
  gestures: {
    titlePrefix: 'Registrar uma refeição leva',
    titleAccent: 'um gesto só',
    description:
      'A maioria dos contadores de calorias perde o usuário nas primeiras semanas, porque registrar é buscar alimento por alimento. O Nutrail coloca a IA exatamente nesse atrito.',
    items: {
      PICTURE: {
        title: 'Uma foto do prato',
        description: 'A IA reconhece os alimentos e estima as porções.'
      },
      VOICE: {
        title: 'Um áudio',
        description: 'Conte o que comeu do seu jeito, com as suas palavras.'
      },
      TEXT: {
        title: 'Algumas palavras',
        description: '"120 g de arroz e um filé de frango" já basta.'
      },
      SAVED: {
        title: 'Uma refeição salva',
        description: 'O café de sempre ou uma receita entram de novo em um toque.'
      }
    }
  },
  runIt: {
    titleAccent: 'Rode',
    titleSuffix: 'na sua própria AWS',
    description:
      'O Nutrail é um projeto de portfólio, não um app de loja. Clone, suba a API na sua conta AWS com a sua chave da OpenAI e rode o app no seu celular. São uns cinco minutos, e uma stack parada custa quase nada.',
    copy: 'Copiar',
    copied: 'Copiado',
    primaryAction: 'Rodar na sua máquina',
    secondaryAction: 'Ler a arquitetura',
    caption: 'Uma refeição registrada por foto, analisada em segundos',
    videoLabel:
      'Vídeo: a foto de um prato é enviada, a IA analisa e a refeição aparece com arroz, feijão, bife e batata frita, somando 950 kcal'
  },
  calculator: {
    titlePrefix: 'Suas metas do dia',
    titleAccent: 'em um minuto',
    description:
      'A mesma conta que a API faz no cadastro: a fórmula de Mifflin-St Jeor, o seu nível de atividade e 500 kcal a mais ou a menos pelo objetivo.',
    goalLabel: 'Objetivo',
    goals: {
      LOSE: 'Perder peso',
      MAINTAIN: 'Manter peso',
      GAIN: 'Ganhar peso'
    },
    genderLabel: 'Gênero biológico',
    genders: {
      FEMALE: 'Feminino',
      MALE: 'Masculino'
    },
    ageLabel: 'Idade',
    ageUnit: 'anos',
    heightLabel: 'Altura',
    weightLabel: 'Peso',
    activityLabel: 'Nível de atividade',
    activityLevels: {
      SEDENTARY: 'Sedentário · não me exercito',
      LIGHT: 'Leve · 1 a 2 vezes por semana',
      MODERATE: 'Moderado · 3 a 5 vezes por semana',
      HEAVY: 'Pesado · 6 a 7 vezes por semana',
      ATHLETE: 'Atleta · mais de 7 vezes por semana'
    },
    resultTitle: 'Sua meta diária',
    caloriesUnit: 'kcal por dia',
    macros: {
      protein: 'Proteína',
      carbohydrate: 'Carboidrato',
      fat: 'Gordura'
    },
    footnote:
      'Proteína de 2 g/kg, gordura de 0,9 g/kg e o carboidrato completando as calorias. Uma estimativa, não uma prescrição.'
  },
  engineering: {
    titlePrefix: 'Construído como',
    titleAccent: 'produção',
    description:
      'É um projeto de portfólio, mas feito do jeito que um sistema real é feito. Cada decisão está documentada nos repositórios.',
    items: {
      SERVERLESS: {
        title: '100% serverless',
        description:
          'Uma Lambda por rota, DynamoDB single-table, S3, SQS com fila de mensagens mortas e Cognito. Nada custa enquanto está parado.'
      },
      ARCHITECTURE: {
        title: 'Arquitetura limpa',
        description:
          'Domínio, casos de uso e adapters, com as dependências apontando para dentro e um container de injeção de dependências próprio.'
      },
      PIPELINE: {
        title: 'Um pipeline que tolera falha',
        description:
          'Fotos e áudios vão direto para o S3; a análise roda numa fila com três tentativas e um reprocessamento manual.'
      },
      AI: {
        title: 'Saída da IA validada',
        description:
          'Toda resposta da OpenAI passa por um schema antes de virar uma refeição ou uma receita.'
      },
      DELIVERY: {
        title: 'Entrega contínua',
        description:
          'A main vai para dev; uma tag v* vai para produção em api.nutrail.app depois de uma aprovação, com acesso à AWS por OIDC.'
      },
      TESTS: {
        title: 'Testado sem a nuvem',
        description:
          'A API roda os handlers reais contra fakes em memória; o app renderiza a navegação inteira contra uma API simulada.'
      }
    },
    action: 'Ler a arquitetura'
  },
  faq: {
    title: 'Dúvidas que você pode ter',
    description: 'Ficou alguma outra? O código responde, e ele é todo aberto.',
    action: 'Ver os repositórios',
    items: {
      STORES: {
        question: 'Dá para baixar na App Store?',
        answer:
          'Não. O Nutrail é um projeto de portfólio, então não está nas lojas. Dá para instalar no seu próprio celular em poucos minutos, seguindo o README do app.'
      },
      COST: {
        question: 'Quanto custa para rodar?',
        answer:
          'Uma stack parada custa quase nada: todo recurso da AWS é pago por uso, e o uso leve cabe no free tier. O custo real é a OpenAI, alguns centavos por refeição analisada, com limite de 20 análises e 5 receitas por usuário por dia.'
      },
      AI: {
        question: 'Qual IA ele usa?',
        answer:
          'A OpenAI: a Responses API com saídas estruturadas para refeições e receitas, e a transcrição para os áudios.'
      },
      LANGUAGE: {
        question: 'Funciona em português?',
        answer:
          'Sim. O app, os alimentos que a IA identifica, as receitas e os e-mails seguem o idioma escolhido no perfil: português ou inglês.'
      },
      ACCURACY: {
        question: 'Os números são precisos?',
        answer:
          'São estimativas da IA, como em qualquer app que analisa fotos. Todo item pode ser editado, e mudar a quantidade recalcula na hora.'
      },
      CODE: {
        question: 'Posso ver o código?',
        answer: 'Todo ele, em quatro repositórios públicos: a API, o app, este site e o produto.'
      }
    }
  },
  finalCta: {
    titlePrefix: 'Você leu até aqui.',
    titleAccent: 'Quer ver o código?',
    description:
      'A API, o app e este site estão no GitHub, com a arquitetura e cada decisão explicada.',
    action: 'Abrir os repositórios'
  },
  footer: {
    tagline: 'O diário alimentar com IA. Um projeto de portfólio, construído como produção.',
    product: 'Produto',
    repositories: 'Repositórios',
    author: 'Autor',
    madeBy: 'Feito por Pedro Henrique Dionisio',
    rights: 'Projeto de portfólio, sem fins comerciais.'
  }
};
