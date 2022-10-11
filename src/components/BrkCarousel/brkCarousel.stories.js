import BrkCarousel from "./BrkCarousel.vue";
import BrkCardHero from "../BrkCardHero/BrkCardHero.vue";
import BrkCardPromo from "../BrkCardPromo/BrkCardPromo.vue";

/**
 * Export par defaut
 */
export default {
  title: "Composants/Carousel",
  component: BrkCarousel,
  subcomponents: { BrkCardHero, BrkCardPromo },
  argTypes: {
    nbrPerView: {
      description: "Nombre de cartes que le carrousel affiche en mode desktop",
    },
    accessibilityTextLeft: {
      control: { type: 'text' },
      description : 'Texte pour les lecteurs d\'ecrans. Flèche de gauche (précédent)',
    },
    accessibilityTextRight: {
      control: { type: 'text' },
      description : 'Texte pour les lecteurs d\'ecrans. Flèche de droite (suivant)',
    },
  },
};

/**
 * Template HTML pour carousel contenant des cartes hero
 */
const Template = (args) => ({
  components: { BrkCarousel, BrkCardHero },
  setup() {
    return { args };
  },
  template: `
  <BrkCarousel v-bind="args">
    <BrkCardHero v-bind="args.brkCardsHero">
  </BrkCarousel>
  `,
  // template: `
  // <BrkCarousel v-bind="args">
  //   <template v-for="(card, index) in args.brkCardsHero" :key="card" v-slot:["item"+index]>
  //     <BrkCardHero v-bind="card">
  //   </template>
  // </BrkCarousel>
  // `,
});

/**
 * Export de la story Carousel Carte Hero
 */
export const CardHero = Template.bind({});
CardHero.args = {
  nbrPerView: {
    desktop: 3,
    tablet: 2,
    mobile: 1,
  },
  accessibilityTextLeft: 'Précédent',
  accessibilityTextRight: 'Suivant',

  brkCardsHero: {
    title: "Titre du jeu",
    preTitle: "Pré titre",
    postTitle: "Post titre",
    link: "https://google.ca",
    secondaryInfo: "BrkCardSecondaryInfoJackpot",
    showNav: false,
    brkButtonArgs: {
      label: "Jouer!",
      link: "https://google.com",
    },
    brkTripleImagesArgs: {
      bg: [
        {
          path: "/assets/background_macedonia.png",
          width: "300w",
        },
      ],
      character: [
        {
          path: "/assets/KingOfMacedonia.png",
          width: "300w",
        },
      ],
      logo: [
        {
          path: "/assets/logo_macedonia.png",
          width: "300w",
        },
      ],
      alt: "King of Macédonia",
    },
    brkSecondaryInfoArgs: {
      brkImageArgs: {
        src: [
          {
            path: "/assets/logo_MegaJackpotsCleopatra.png",
            width: "300w",
          },
        ],
        alt: "Logo mega jackpot",
      },
      backgroundColor: "#2d2feb",
      text: "Logo mega jackpot",
      totalAmount: "1000000",
      format: "fr",
    },
    brkCardNavArgs: {
      btnOpenLabel: "Ouvrir le menu du jeu",
      btnCloseLabel: "Fermer le menu du jeu",
      links: [
        { url: "http://www.perdu.com", label: "Perdu", newWindow: true },
        { url: "http://www.google.com", label: "Google", newWindow: false },
        { url: "https://www.nyan.cat/", label: "Nyan Cat", newWindow: true },
      ],
    },
  },
};
CardHero.storyName = "Carte « Héro »";

/**
 * Template HTML pour carousel contenant des cartes promo
 */
const Template2 = (args) => ({
  components: { BrkCarousel, BrkCardPromo },
  setup() {
    return { args };
  },
  template: `<BrkCarousel v-bind="args">  
    <template v-for="(card, index) in args.brkCardsPromo" :key="card" v-slot:["item"+index]><BrkCardPromo v-bind="card" /></template>
    </BrkCarousel>`,
});

/**
 * Export de la story Carousel Carte Promo
 */
export const CardPromo = Template2.bind({});
CardPromo.args = {
  nbrPerView: {
    desktop: 3,
    tablet: 2,
    mobile: 1,
  },
  accessibilityTextLeft: 'Précédent',
  accessibilityTextRight: 'Suivant',

  // brkCardsPromo: [
  //   //Item 1
  //   {
  //     brkImageArgs: {
  //       src: [{ path: "/assets/card-promo-img.png", width: "1080w" }],
  //       webpSrc: [{ path: "/assets/card-promo-img.webp", width: "1080w" }],
  //       alt: "100% légal",
  //     },
  //     preTitle: "Ce Mardi 1er janvier 2099",
  //     title: "Le gros lot du Lotto Max est de 50 MILLION$",
  //     positionImg: "left",
  //     link: "https://www.espacejeux.com/fr/casino/accueil#_ga=2.141842358.52539034.1659106954-258049662.1651673841",
  //     brkButtonArgs: {
  //       label: "À vous de jouer!",
  //       link: "https://google.com",
  //     },
  //   },
  
  //   //Item 2
  //   {
  //     brkImageArgs: {
  //       src: [{ path: "/assets/card-promo-img.png", width: "1080w" }],
  //       webpSrc: [{ path: "/assets/card-promo-img.webp", width: "1080w" }],
  //       alt: "100% légal",
  //     },
  //     preTitle: "Incroyable! Des donuts avec des yeux!",
  //     title: "Vous courez la chance de gagner des donuts à volonté",
  //     positionImg: "left",
  //     link: "https://www.espacejeux.com/fr/casino/accueil#_ga=2.141842358.52539034.1659106954-258049662.1651673841",
  //     brkButtonArgs: {
  //       label: "Jouer!",
  //       link: "https://google.com",
  //     },
  //   },
  
  //   //Item 3
  //   {
  //     brkImageArgs: {
  //       src: [{ path: "/assets/card-promo-img.png", width: "1080w" }],
  //       webpSrc: [{ path: "/assets/card-promo-img.webp", width: "1080w" }],
  //       alt: "100% légal",
  //     },
  //     preTitle: "Êtes vous fan de chats?",
  //     title: "Le gros lot de cette semaine est de 50 chatons",
  //     positionImg: "left",
  //     link: "https://www.espacejeux.com/fr/casino/accueil#_ga=2.141842358.52539034.1659106954-258049662.1651673841",
  //     brkButtonArgs: {
  //       label: "Play!",
  //       link: "https://www.nyan.cat/",
  //     },
  //   },
  
  //   //Item 4
  //   {
  //     brkImageArgs: {
  //       src: [{ path: "/assets/card-promo-img.png", width: "1080w" }],
  //       webpSrc: [{ path: "/assets/card-promo-img.webp", width: "1080w" }],
  //       alt: "100% légal",
  //     },
  //     preTitle: "Ce Lundi 1er mai 3033",
  //     title: "Le gros lot est de 50 MILLION$",
  //     positionImg: "left",
  //     link: "https://www.espacejeux.com/fr/casino/accueil#_ga=2.141842358.52539034.1659106954-258049662.1651673841",
  //     brkButtonArgs: {
  //       label: "Participer!",
  //       link: "https://google.com",
  //     },
  //   },
  
  //   //Item 5
  //   {
  //     brkImageArgs: {
  //       src: [{ path: "/assets/card-promo-img.png", width: "1080w" }],
  //       webpSrc: [{ path: "/assets/card-promo-img.webp", width: "1080w" }],
  //       alt: "100% légal",
  //     },
  //     preTitle: "Ce Mardi 1er janvier 2099",
  //     title: "Le gros lot du Lotto Max est de 50 MILLION$",
  //     positionImg: "left",
  //     link: "https://www.espacejeux.com/fr/casino/accueil#_ga=2.141842358.52539034.1659106954-258049662.1651673841",
  //     brkButtonArgs: {
  //       label: "À vous de jouer!",
  //       link: "https://google.com",
  //     },
  //   },
  // ],
};
CardPromo.storyName = "Carte « Promo »";
