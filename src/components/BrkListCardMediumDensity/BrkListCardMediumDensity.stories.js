import BrkListCardMediumDensity from './BrkListCardMediumDensity.vue'
import BrkCardMediumDensity from '../BrkCardMediumDensity/BrkCardMediumDensity.vue'

/**
 * Export par defaut
 */
export default {
  title: 'Composants/Cartes/ Carte « Moyenne densité »',
  component: BrkListCardMediumDensity,
  subcomponents: { BrkCardMediumDensity }, //👈 Ajout de BrkCardMediumDensity en tant que sous-composant
  decorators: [
    () => {
      document.getElementById('root').setAttribute('style', 'width: 400px')
      return { template: '<story/>' }
    },
  ],
  argTypes: {},
}

/**
 * Template HTML
 */
const Template = (args) => ({
  components: { BrkListCardMediumDensity, BrkCardMediumDensity },
  setup() {
    return { args }
  },
  template:
    `
    <BrkListCardMediumDensity>
      <BrkCardMediumDensity v-for="card in args.brkCardList" v-bind="card" />
    </BrkListCardMediumDensity>
    `,
})

/**
 * Export de stories
 */
export const listCardMediumDensity = Template.bind({})

listCardMediumDensity.args = {
  brkCardList: [
    {
      brkImageArgs: {
        src: [{ path: '/assets/bg-monopoly-16x9.png', width: '300w' }],
        alt: 'Jeu de monopoly',
      },
      title: 'Monopoly sur 2 lignes',
      price: '0.10$ à 10$',
      specification: '*Progressifs multiples',
      link: 'https://atlas.loto-quebec.com/',
      brkCardSecondaryInfoArgs: {
        backgroundColor: '#304ed0',
        text: '',
        subText: '5 000 000$*',
      },
      secondaryInfo: 'BrkCardSecondaryInfoText',
    },
    {
      brkImageArgs: {
        src: [{ path: '/assets/bg-monopoly-16x9.png', width: '300w' }],
        alt: 'Jeu de monopoly',
      },
      title: 'Titre du jeu',
      price: '0.10$ à 10$',
      specification: '*Progressifs multiples',
      link: 'https://atlas.loto-quebec.com/',
      brkCardSecondaryInfoArgs: {
        backgroundColor: "#304ed0",
        brkImageArgs: {
          alt: "Logo mega jackpot",
          src: [{ path: "/assets/logo_MegaJackpotsCleopatra.png", width: "300w" }],
        },
      },
      secondaryInfo: 'brkCardSecondaryInfoLogo',
    },
    {
      brkImageArgs: {
        src: [{ path: '/assets/bg-monopoly-16x9.png', width: '300w' }],
        alt: 'Jeu de monopoly',
      },
      title: 'Un dernier jeu',
      price: '0.10$ à 10$',
      specification: '*Progressifs multiples',
      link: 'https://atlas.loto-quebec.com/',
    },
  ],
}
listCardMediumDensity.storyName = 'Liste de cartes'
