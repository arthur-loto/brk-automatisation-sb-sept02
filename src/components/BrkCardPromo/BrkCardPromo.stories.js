import BrkCardPromo from "./BrkCardPromo.vue";

export default {
  title: "Composants/Cartes/Carte « Promo »",
  component: BrkCardPromo,
  argTypes: {
    preTitle: {
      control: {type: "text"},
      description:"Texte descriptif de la carte promo",
      table: {
        category: 'Carte Promo',
      },
    },
    title:{
      control: {type: "text",},
      description:"Titre de la carte promo",
      table: {
        category: 'Carte Promo',
      },
    },
    link:{
      control: {type: "text",},
      description:"Lien de la carte promo",
      table: {
        category: 'Carte Promo',
      },
    },
    positionImg: {
      options: ['left','right'],
      control: {type: "radio",},
      description:"Position désirée pour l'image en mode tablette et desktop. Il n'y a pas d'option de positionnement en mode mobile.",
      table: {
        category: 'Carte Promo',
      },
    },
    backgroundColor:{
      control: {type: "color",},
      description: 'Couleur de fond.',
      table: {
        category: 'Carte Promo',
      },
    },
    element: {
      options: ['h1','h2','h3','h4','h5','h6'],
      control: {type: "select"},
      table: {
        category: 'Carte Promo',
      },

    },
    brkImageArgs: {
      description:"Propriétés passées à BrkImage.",
      table: {
        category: 'Image',
      },
    },
    brkButtonArgs: {
      control: {type: "object",},
      description:"Propriétés passées à BrkButton.",
      table: {
        category: 'Bouton',
      },
    },
  },
};

const Template = (args) => ({
    components: {BrkCardPromo },
    setup() {
      return { args };
    },
    template: '<brk-card-promo v-bind="args" />',
  });

export const Primary = Template.bind({});
Primary.args = {
  brkImageArgs: {
    src: [{ path:"/assets/card-promo-img.png", width:"1080w"}],
    webpSrc:[{path:"/assets/card-promo-img.webp",width:"1080w"}],
    alt:'100% légal',
  },
  preTitle: 'Ce Mardi 1er janvier 2099',
  title: 'Le gros lot du Lotto Max est de 50 MILLION$',
  positionImg: 'left',
  link:"https://www.espacejeux.com/fr/casino/accueil#_ga=2.141842358.52539034.1659106954-258049662.1651673841",
  brkButtonArgs: {
    label: 'À vous de jouer!',
    link: 'https://google.com',
  },

};
