import type { ptBR } from './ptBR';

export const enUS: typeof ptBR = {
  metadata: {
    title: 'Nutrail — the AI food diary',
    description:
      'Log a meal with a picture, a voice note or a few words and get the foods back with calories and macros. An open source app built like production on AWS.'
  },
  shareImage: {
    alt: 'Nutrail, the AI food diary, with the app home screen on a phone',
    titlePrefix: 'The',
    titleAccent: 'AI',
    titleSuffix: 'food diary',
    description: 'A picture, a voice note or a few words in. Calories and macros out.',
    tags: 'Open source · React Native · AWS serverless'
  },
  language: {
    label: 'Language',
    en: 'English',
    pt: 'Português'
  },
  nav: {
    label: 'Main navigation',
    howItWorks: 'How it works',
    calculator: 'Calculator',
    engineering: 'Engineering',
    faq: 'FAQ',
    github: 'View on GitHub'
  },
  hero: {
    sentenceStart: 'I',
    resultPrefix: 'Nutrail found',
    methodLabel: 'Change how the meal was logged',
    dishLabel: 'Change the meal',
    methods: {
      PICTURE: 'snapped',
      VOICE: 'said',
      TEXT: 'typed'
    },
    dishes: {
      RICE_AND_BEANS: 'rice, beans and chicken',
      EGGS_ON_TOAST: 'two eggs on toast',
      ACAI_BOWL: 'an açaí bowl',
      SALMON_POKE: 'a salmon poke',
      BURGER_AND_FRIES: 'a cheeseburger with fries'
    },
    macros: {
      protein: 'protein',
      carbohydrate: 'carbs',
      fat: 'fat'
    },
    description:
      'Take a picture of the plate, record a voice note or type what you ate. The AI names every food with its quantity, calories and macros, and measures the day against goals calculated for you.',
    primaryAction: 'See the code',
    secondaryAction: 'Run it yourself',
    microcopy: 'Open source · React Native, Node.js and AWS · Runs on your own accounts',
    annotation: 'this is the real app!',
    screenshotAlt:
      'Nutrail home screen: 2069 of 2356 kcal for the day, protein, carbohydrate and fat against the goals, and the logged meals'
  },
  gestures: {
    titlePrefix: 'Logging a meal takes',
    titleAccent: 'one gesture',
    description:
      'Most calorie counters lose their users in the first weeks, because logging means searching a database food by food. Nutrail puts the AI right where that friction is.',
    items: {
      PICTURE: {
        title: 'A picture of the plate',
        description: 'The AI recognizes the foods and estimates the portions.'
      },
      VOICE: {
        title: 'A voice note',
        description: 'Say what you ate the way you would tell a friend.'
      },
      TEXT: {
        title: 'A few words',
        description: '"120 g of rice and a chicken fillet" is enough.'
      },
      SAVED: {
        title: 'A saved meal',
        description: 'Your usual breakfast or a recipe goes back in with one tap.'
      }
    }
  },
  runIt: {
    titleAccent: 'Run it',
    titleSuffix: 'on your own AWS',
    description:
      'Nutrail is a portfolio project, not a store app. Clone it, deploy the API to your AWS account with your OpenAI key and run the app on your phone. It takes about five minutes, and an idle stack costs close to nothing.',
    copy: 'Copy',
    copied: 'Copied',
    primaryAction: 'Run it yourself',
    secondaryAction: 'Read the architecture',
    caption: 'A meal logged by picture, analyzed in seconds',
    videoLabel:
      'Video: a picture of a plate is sent, the AI analyzes it and the meal shows up with rice, beans, steak and fries, adding up to 950 kcal'
  },
  calculator: {
    titlePrefix: 'Your daily goals',
    titleAccent: 'in one minute',
    description:
      'The same math the API runs on sign-up: the Mifflin-St Jeor formula, your activity level and 500 kcal up or down for your goal.',
    goalLabel: 'Goal',
    goals: {
      LOSE: 'Lose weight',
      MAINTAIN: 'Maintain weight',
      GAIN: 'Gain weight'
    },
    genderLabel: 'Biological sex',
    genders: {
      FEMALE: 'Female',
      MALE: 'Male'
    },
    ageLabel: 'Age',
    ageUnit: 'years',
    heightLabel: 'Height',
    weightLabel: 'Weight',
    activityLabel: 'Activity level',
    activityLevels: {
      SEDENTARY: 'Sedentary · I do not exercise',
      LIGHT: 'Light · 1 to 2 times a week',
      MODERATE: 'Moderate · 3 to 5 times a week',
      HEAVY: 'Heavy · 6 to 7 times a week',
      ATHLETE: 'Athlete · more than 7 times a week'
    },
    resultTitle: 'Your daily goal',
    caloriesUnit: 'kcal a day',
    macros: {
      protein: 'Protein',
      carbohydrate: 'Carbohydrate',
      fat: 'Fat'
    },
    footnote:
      'Protein at 2 g/kg, fat at 0.9 g/kg and carbohydrate completing the calories. An estimate, not a prescription.'
  },
  engineering: {
    titlePrefix: 'Built like',
    titleAccent: 'production',
    description:
      'It is a portfolio project, built the way a real system is built. Every decision is documented in the repositories.',
    items: {
      SERVERLESS: {
        title: '100% serverless',
        description:
          'One Lambda per route, a DynamoDB single table, S3, SQS with a dead-letter queue and Cognito. Nothing costs money while idle.'
      },
      ARCHITECTURE: {
        title: 'Clean architecture',
        description:
          'Domain, use cases and adapters, with dependencies pointing inwards and a dependency injection container of its own.'
      },
      PIPELINE: {
        title: 'A pipeline that tolerates failure',
        description:
          'Pictures and voice notes go straight to S3; the analysis runs from a queue with three attempts and a manual retry.'
      },
      AI: {
        title: 'Validated AI output',
        description:
          'Every OpenAI response is checked against a schema before it becomes a meal or a recipe.'
      },
      DELIVERY: {
        title: 'Continuous delivery',
        description:
          'main deploys dev; a v* tag deploys prod at api.nutrail.app after an approval, signing in to AWS through OIDC.'
      },
      TESTS: {
        title: 'Tested without the cloud',
        description:
          'The API runs its real handlers against in-memory fakes; the app renders the whole navigation against a mocked API.'
      }
    },
    action: 'Read the architecture'
  },
  faq: {
    title: 'Questions you may have',
    description: 'Anything else? The code answers it, and all of it is open.',
    action: 'See the repositories',
    items: {
      STORES: {
        question: 'Can I download it from the App Store?',
        answer:
          'No. Nutrail is a portfolio project, so it is not in the stores. You can install it on your own phone in a few minutes, following the app README.'
      },
      COST: {
        question: 'How much does it cost to run?',
        answer:
          'An idle stack costs close to nothing: every AWS resource is pay-per-use, and light use fits the free tier. The real cost is OpenAI, a few cents per analyzed meal, capped at 20 analyses and 5 recipes per user a day.'
      },
      AI: {
        question: 'Which AI does it use?',
        answer:
          'OpenAI: the Responses API with structured outputs for meals and recipes, and speech-to-text for voice notes.'
      },
      LANGUAGE: {
        question: 'Does it work in Portuguese?',
        answer:
          'Yes. The app, the foods the AI names, the recipes and the e-mails follow the language chosen in the profile: Portuguese or English.'
      },
      ACCURACY: {
        question: 'How accurate are the numbers?',
        answer:
          'They are AI estimates, like in any app that reads pictures. Every item can be edited, and changing a quantity recalculates on the spot.'
      },
      CODE: {
        question: 'Can I see the code?',
        answer:
          'All of it, in four public repositories: the API, the app, this website and the product overview.'
      }
    }
  },
  finalCta: {
    titlePrefix: 'You read this far.',
    titleAccent: 'Want to see the code?',
    description:
      'The API, the app and this website are on GitHub, with the architecture and every decision explained.',
    action: 'Open the repositories'
  },
  footer: {
    tagline: 'The AI food diary. A portfolio project, built like production.',
    product: 'Product',
    repositories: 'Repositories',
    author: 'Author',
    madeBy: 'Made by Pedro Henrique Dionisio',
    rights: 'A portfolio project, with no commercial use.'
  }
};
