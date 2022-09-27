import BrkCardMediumDensity from "./BrkCardMediumDensity.vue";

/**
 * Export par defaut
 */
export default {
  title: "Composants/Cartes/Carte « Moyenne densité »",
  component: BrkCardMediumDensity,
  decorators: [
    () => {
      document.getElementById("root").setAttribute("style", "width: 150px");
      return { template: "<story/>" };
    },
  ],
  argTypes: {
    brkImageArgs: {
      description: 'Propriétés passées à BrkImage.',
    },
    title: {
      description: 'Titre de la carte.',
    },
    price: {
      description: 'Prix pour jouer.',
    },
    specification: {
      description: 'Un texte descriptif du jeu.',
    },
    link: {
      description: 'Lien de la carte.',
    },
    brkCardSecondaryInfoArgs: {
      description: "Propriétés passées au composant d'info secondaire. Attention à passer les bonnes informations selon le type d'info secondaire choisi.",
    },
    secondaryInfo: {
      control: 'select',
      description: 'Indique le type de contenu secondaire.',
      options: ['', 'BrkCardSecondaryInfoText', 'brkCardSecondaryInfoLogo'],
      name: 'secondaryInfo',
    },
  },
};

/**
 * Template HTML
 */
const Template = (args) => ({
  components: { BrkCardMediumDensity },
  setup() {
    return { args };
  },
  template: '<brk-card-medium-density v-bind="args" />',
});

/**
 * Export de stories
 */
export const cardMediumDensity = Template.bind({});

cardMediumDensity.args = {
  brkImageArgs: {
    src: [{ path: "/assets/bg-monopoly-16x9.png", width: "300w" }],
    alt: "Jeu de monopoly",
  },
  title: "Monopoly sur 2 lignes",
  price: "0.10$ à 10$",
  specification: "*Progressifs multiples",
  link: "https://atlas.loto-quebec.com/",
  brkCardSecondaryInfoArgs: {
    backgroundColor: "#304ed0",
    text: "",
    subText: "5 000 000$*",
  },
  secondaryInfo: 'BrkCardSecondaryInfoText',
  
};
cardMediumDensity.storyName = "Avec info secondaire texte";


export const withSecondaryLogo = Template.bind({});
withSecondaryLogo.args = {
  brkImageArgs: {
    src: [{ path: "/assets/bg-monopoly-16x9.png", width: "300w" }],
    alt: "Jeu de monopoly",
  },
  title: "Monopoly sur 2 lignes",
  price: "0.10$ à 10$",
  specification: "*Progressifs multiples",
  link: "https://atlas.loto-quebec.com/",
  brkCardSecondaryInfoArgs: {
    backgroundColor: "#304ed0",
    brkImageArgs: {
      alt: "Logo mega jackpot",
      src: [{ path: "/assets/logo_MegaJackpotsCleopatra.png", width: "300w" }],
    },
  },
  secondaryInfo: 'brkCardSecondaryInfoLogo',
};
withSecondaryLogo.storyName = "Avec info secondaire logo"