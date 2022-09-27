import BrkCardNavStories from '../BrkCardNav/BrkCardNav.stories'
import BrkCardHero from './BrkCardHero.vue'

export default {
  title: 'Composants/Cartes/Carte « Héro »',
  component: BrkCardHero,
  argTypes: {
    title: {
      description: 'Titre de la carte.',
    },
    preTitle: {
      description: 'Pré-titre de la carte.',
    },
    postTitle: {
      description: 'Post-titre de la carte.',
    },
    link: {
      description: `Lien de la carte.<br />
      Ce lien est actif sur toute la carte à l'exception du bouton.<br />
      Pour le lien du bouton, il faut passer l'information dans \`brkButtonArgs\`.`,
    },
    secondaryInfo: {
      control: 'select',
      description: 'Indique le type de contenu secondaire.',
      options: ['', 'BrkCardSecondaryInfoJackpot', 'BrkCardSecondaryInfoText'],
      name: 'secondaryInfo',
    },
    showNav: {
      description: 'Afficher ou pas la navigation',
    },
    brkButtonArgs: {
      description: 'Propriétés passées à BrkButton.',
    },
    brkTripleImagesArgs: {
      description: 'Propriétés passées à BrkTripleImages.',
    },
    brkSecondaryInfoArgs: {
      description: 'Propriétés passées à secondaryInfo.',
    },
    brkCardNavArgs: {
      description: 'Propriétés passées à BrkCardNav.',
    },
  },
}

const Template = (args) => ({
  components: { BrkCardHero },
  setup() {
    return { args }
  },
  template: '<brk-card-hero v-bind="args" />',
})

export const Base = Template.bind({})
Base.args = {
  title: 'Titre du jeu',
  preTitle: 'Pré titre',
  postTitle: 'Post titre',
  link: 'https://google.ca',
  secondaryInfo: '',
  showNav: false,
  brkButtonArgs: {
    label: 'Jouer!',
    link: 'https://google.com',
  },
  brkTripleImagesArgs: {
    bg: [
      {
        path: '/assets/background_macedonia.png',
        width: '300w',
      },
    ],
    character: [
      {
        path: '/assets/KingOfMacedonia.png',
        width: '300w',
      },
    ],
    logo: [
      {
        path: '/assets/logo_macedonia.png',
        width: '300w',
      },
    ],
    alt: 'King of Macédonia',
  },
}
Base.storyName = 'Base'

export const WithJackpot = Template.bind({})
WithJackpot.args = {
  title: 'Titre du jeu',
  preTitle: 'Pré titre',
  postTitle: 'Post titre',
  link: 'https://google.ca',
  secondaryInfo: 'BrkCardSecondaryInfoJackpot',
  showNav: false,
  brkButtonArgs: {
    label: 'Jouer!',
    link: 'https://google.com',
  },
  brkTripleImagesArgs: {
    bg: [
      {
        path: '/assets/background_macedonia.png',
        width: '300w',
      },
    ],
    character: [
      {
        path: '/assets/KingOfMacedonia.png',
        width: '300w',
      },
    ],
    logo: [
      {
        path: '/assets/logo_macedonia.png',
        width: '300w',
      },
    ],
    alt: 'King of Macédonia',
  },
  brkSecondaryInfoArgs: {
    brkImageArgs: {
      src: [
        {
          path: '/assets/logo_MegaJackpotsCleopatra.png',
          width: '300w',
        },
      ],
      alt: 'Logo mega jackpot',
    },
    backgroundColor: '#2d2feb',
    text: 'Logo mega jackpot',
    totalAmount: '1000000',
    format: 'fr',
  },
  brkCardNavArgs: {
    btnOpenLabel: 'Ouvrir le menu du jeu',
    btnCloseLabel: 'Fermer le menu du jeu',
    links: [
      { url: 'http://www.perdu.com', label: 'Perdu', newWindow: true },
      { url: 'http://www.google.com', label: 'Google', newWindow: false },
      { url: 'https://www.nyan.cat/', label: 'Nyan Cat', newWindow: true },
    ],
  },
}
WithJackpot.storyName = 'Avec Jackpot'

export const WithText = Template.bind({})
WithText.args = {
  title: 'Titre du jeu',
  preTitle: 'Pré titre',
  postTitle: 'Post titre',
  link: 'https://google.ca',
  secondaryInfo: 'BrkCardSecondaryInfoText',
  showNav: false,
  brkButtonArgs: {
    label: 'Jouer!',
    link: 'https://google.com',
  },
  brkTripleImagesArgs: {
    bg: [
      {
        path: '/assets/background_macedonia.png',
        width: '300w',
      },
    ],
    character: [
      {
        path: '/assets/KingOfMacedonia.png',
        width: '300w',
      },
    ],
    logo: [
      {
        path: '/assets/logo_macedonia.png',
        width: '300w',
      },
    ],
    alt: 'King of Macédonia',
  },
  brkSecondaryInfoArgs: {
    backgroundColor: '#ffcccc',
    text: 'Table fermée ',
    subText: 'de retour à 10h demain',
  },
}
WithText.storyName = 'Avec texte'

export const WithLogo = Template.bind({})
WithLogo.args = {
  title: 'Titre du jeu',
  preTitle: 'Pré titre',
  postTitle: 'Post titre',
  link: 'https://google.ca',
  secondaryInfo: 'BrkCardSecondaryInfoLogo',
  showNav: false,
  brkButtonArgs: {
    label: 'Jouer!',
    link: 'https://google.com',
  },
  brkTripleImagesArgs: {
    bg: [
      {
        path: '/assets/background_macedonia.png',
        width: '300w',
      },
    ],
    character: [
      {
        path: '/assets/KingOfMacedonia.png',
        width: '300w',
      },
    ],
    logo: [
      {
        path: '/assets/logo_macedonia.png',
        width: '300w',
      },
    ],
    alt: 'King of Macédonia',
  },
  brkSecondaryInfoArgs: {
    backgroundColor: "#333333",
    brkImageArgs: {
      alt: "Logo mega jackpot",
      src: [{ path: "/assets/logo_MegaJackpotsCleopatra.png", width: "300w" }],
    },
  },
}
WithLogo.storyName = 'Avec logo'

/*
Story grille
*/
const GridTemplate = (args) => ({
  components: { BrkCardHero },
  setup() {
    return { args }
  },

  template: `
  <div style="display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: 1fr; grid-gap: 20px;">
    <BrkCardHero
      v-for="card in args.cards"  
      v-bind="card"
    />
  </div>`,
})

export const Grid = GridTemplate.bind({})
Grid.args = {
  cards: [
    Base.args,
    Object.assign({}, WithJackpot.args, {
      title: "Exemple de titre très long qui va forcer la limitation de l'affichage sur deux lignes",
      preTitle: "Exemple de pré-titre trop long qui va forcer la limitation de l'affichage sur une ligne",
      postTitle: "Exemple de description trop longue qui va forcer la limitation de l'affichage sur une ligne"
    }),
    WithText.args,
    WithLogo.args
  ],
}
Grid.storyName = 'Exemple en grille'

export const __namedExportsOrder = ['Base', 'WithJackpot', 'WithText', 'WithLogo', 'Grid']
