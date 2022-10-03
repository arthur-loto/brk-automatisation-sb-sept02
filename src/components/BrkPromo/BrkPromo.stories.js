import BrkPromo from './BrkPromo.vue';

export default {
  title: 'Composants/Promo',
  component: BrkPromo,
  parameters: { controls: { sort: 'alpha' } },
  argTypes: {
    // image
    brkImageArgs: {
      table: {
        category: 'Image',
      },
      description: 'Propriétés passées à BrkImage.',
    },
    // promo
    backgroundColor: {
      control: { type: "color", },
      description: 'Couleur de fond. Ce champ doit être vide si une image de fond est présente.',
      table: {
        category: 'Promo Props',
      },
    },
    description: {
      control: { type: "text", },
      table: {
        category: 'Promo Text',
      },
      description: "Texte qui va apparaître en-dessous du titre. Ce champ est obligatoire.",
    },
    element: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: "select" },
      table: {
        category: 'Promo Text',
      },
      description: "Hiérarchie de la balise &lt;&lt; h &gt;&gt; du titre. La balise par défault est le &lt;&lt; h3 &gt;&gt;.",
    },
    isGradient: {
      control: { type: "boolean", if: { arg: 'variant' === 'secondary' } },
      table: {
        category: 'Promo Props',
      },
      description: "Choix d'ajouter un gradient. Option disponible uniquement pour les promos de type secondary. Nécessite une couleur de fond définie.",
    },
    preTitle: {
      control: { type: "text", },
      table: {
        category: 'Promo Text',
      },
      description: "Texte qui va apparaître par-dessus le titre. Ce champ est obligatoire.",
    },
    textAlignment: {
      options: ['left', 'right'],
      control: { type: "radio", },
      table: {
        category: 'Promo Text',
      },
      description: "Définit si l'alignement du contenu textuel est aligné sur le côté gauche (\"left\") ou droit (\"right\").",
    },
    title: {
      control: { type: "text", },
      table: {
        category: 'Promo Text',
      },
      description: "Titre de la promo. Ce champ est obligatoire.",
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: "radio", },
      table: {
        category: 'Promo Props',
      },
      description: "Cette option determine le type de promo désiré.",
    },
    // bouton
    brkButtonArgs: {
      table: {
        category: 'Bouton',
      },
      description: 'Propriétés passées à BrkButton.',
    },
  },
};

const Template = (args) => ({
  components: { BrkPromo },
  setup() {
    return { args };
  },
  template: '<brk-Promo v-bind="args" />',
});

export const primaryLeft = Template.bind({});
primaryLeft.args = {
  // args BrkImage
  brkImageArgs: {
    alt: 'Arrière plan Jackpot',
    sizing: 'cover',
    src: [
      { path: "/assets/casino-jeux-entete-16-9.webp", width: "1920w" },
      { path: "/assets/entete-mega-jackpot_4x3.png", width: "1400w" },
      { path: "/assets/entete-mega-jackpot_1x1.png", width: "1080w" }
    ],
    link: 'https://google.com',
  },

  // args Promo
  backgroundColor: '',
  description: 'Courez la chance de gagner le gros lot progressif à chaque partie et avec n\'importe quelle mise!',
  element: 'h2',
  preTitle: 'Machine à sous',
  textAlignment: 'left',
  title: 'MegaJackpots®',
  variant: 'primary',

  // args BrkBouton
  brkButtonArgs: {
    accessibilityText: "",
    callback: () => { console.log('click'); },
    inverted: false,
    label: "Jouer",
    link: 'https://google.com',
    size: "lg",
  }
};
primaryLeft.storyName = "Promo primary : texte gauche";

export const primaryRight = Template.bind({});
primaryRight.args = {
  // args BrkImage
  brkImageArgs: {
    alt: 'Arrière plan Jackpot',
    sizing: 'cover',
    src: [
      { path: "/assets/entete-mega-jackpot_16x9.png", width: "1920w" },
      { path: "/assets/entete-mega-jackpot_4x3.png", width: "1400w" },
      { path: "/assets/entete-mega-jackpot_1x1.png", width: "1080w" }
    ],
    link: 'https://google.com',
  },

  // args Promo
  backgroundColor: '#203392',
  description: 'Courez la chance de gagner le gros lot progressif à chaque partie et avec n\'importe quelle mise!',
  element: 'h3',
  preTitle: 'Machine à sous',
  textAlignment: 'right',
  title: 'MegaJackpots®',
  variant: 'primary',

  // args BrkBouton
  brkButtonArgs: {
    accessibilityText: "",
    callback: () => { console.log('click'); },
    inverted: false,
    label: "Jouer",
    link: 'https://google.com',
    size: "lg",
  }
};
primaryRight.storyName = "Promo primary: texte droite";

export const secondaryLeft = Template.bind({});
secondaryLeft.args = {
  // args BrkImage
  brkImageArgs: {
    alt: 'Arrière plan Jackpot',
    sizing: 'cover',
    src: [
      { path: "/assets/entete-mega-jackpot_16x9.png", width: "1920w" },
      { path: "/assets/entete-mega-jackpot_4x3.png", width: "1400w" },
      { path: "/assets/entete-mega-jackpot_1x1.png", width: "1080w" }
    ],
    link: 'https://google.com',
  },

  // args Promo
  description: 'Courez la chance de gagner le gros lot!',
  element: 'h3',
  isGradient: false,
  preTitle: 'Machines à sous',
  textAlignment: 'left',
  title: '25 nouveaux jeux de machines à sous fraîchement arrivés',
  variant: 'secondary',

  // args BrkBouton
  brkButtonArgs: {
    accessibilityText: "",
    callback: () => { console.log('click'); },
    inverted: false,
    label: "Voir les nouveautés",
    link: 'https://google.com',
    size: "lg",
  }
};
secondaryLeft.storyName = "Promo secondary: texte gauche";

export const secondaryRight = Template.bind({});
secondaryRight.args = {
  // args BrkImage
  brkImageArgs: {
    alt: 'Arrière plan Jackpot',
    sizing: 'cover',
    src: [
      { path: "/assets/entete-mega-jackpot_16x9.png", width: "1920w" },
      { path: "/assets/entete-mega-jackpot_4x3.png", width: "1400w" },
      { path: "/assets/entete-mega-jackpot_1x1.png", width: "1080w" }
    ],
    link: 'https://google.com',
  },

  // args Promo
  backgroundColor: '#203392',
  description: 'Courez la chance de gagner le gros lot!',
  element: 'h3',
  isGradient: false,
  preTitle: 'Machines à sous',
  textAlignment: 'right',
  title: '25 nouveaux jeux de machines à sous fraîchement arrivés',
  variant: 'secondary',

  // args BrkBouton
  brkButtonArgs: {
    accessibilityText: "",
    callback: () => { console.log('click'); },
    inverted: false,
    label: "Voir les nouveautés",
    link: 'https://google.com',
    size: "lg",
  }
};
secondaryRight.storyName = "Promo secondary: texte droite";

export const tertiaryLeft = Template.bind({});
tertiaryLeft.args = {
  // args BrkImage
  brkImageArgs: {
    alt: 'Arrière plan Jackpot',
    sizing: 'cover',
    src: [
      { path: "/assets/entete-mega-jackpot_16x9.png", width: "1920w" },
      { path: "/assets/entete-mega-jackpot_4x3.png", width: "1400w" },
      { path: "/assets/entete-mega-jackpot_1x1.png", width: "1080w" }
    ],
    link: 'https://google.com',
  },

  // args Promo
  description: 'Courez la chance de gagner le gros lot!',
  element: 'h3',
  isGradient: false,
  preTitle: 'Machines à sous',
  textAlignment: 'left',
  title: '25 nouveaux jeux de machines à sous fraîchement arrivés',
  variant: 'tertiary',

  // args BrkBouton
  brkButtonArgs: {
    accessibilityText: "",
    callback: () => { console.log('click'); },
    inverted: false,
    label: "Voir les nouveautés",
    link: 'https://google.com',
    size: "lg",
  }
};
tertiaryLeft.storyName = "Promo tertiary: texte gauche";

export const tertiaryRight = Template.bind({});
tertiaryRight.args = {
  // args BrkImage
  brkImageArgs: {
    alt: 'Arrière plan Jackpot',
    sizing: 'cover',
    src: [
      { path: "/assets/entete-mega-jackpot_16x9.png", width: "1920w" },
      { path: "/assets/entete-mega-jackpot_4x3.png", width: "1400w" },
      { path: "/assets/entete-mega-jackpot_1x1.png", width: "1080w" }
    ],
    link: 'https://google.com',
  },

  // args Promo
  backgroundColor: '#203392',
  description: 'Courez la chance de gagner le gros lot!',
  element: 'h3',
  isGradient: false,
  preTitle: 'Machines à sous',
  textAlignment: 'right',
  title: '25 nouveaux jeux de machines à sous fraîchement arrivés',
  variant: 'tertiary',

  // args BrkBouton
  brkButtonArgs: {
    accessibilityText: "",
    callback: () => { console.log('click'); },
    inverted: false,
    label: "Voir les nouveautés",
    link: 'https://google.com',
    size: "lg",
  }
};
tertiaryRight.storyName = "Promo tertiary: texte droite";

export const gradient = Template.bind({});
gradient.args = {
  // args BrkImage
  brkImageArgs: {
    alt: 'Arrière plan Jackpot',
    sizing: 'cover',
    src: [
      { path: "/assets/entete-mega-jackpot_16x9.png", width: "1920w" },
      { path: "/assets/entete-mega-jackpot_4x3.png", width: "1400w" },
      { path: "/assets/entete-mega-jackpot_1x1.png", width: "1080w" }
    ],
    link: 'https://google.com',
  },

  // args Promo
  backgroundColor: '#203392',
  description: 'Courez la chance de gagner le gros lot!',
  element: 'h3',
  isGradient: true,
  preTitle: 'Machines à sous',
  textAlignment: 'left',
  title: '25 nouveaux jeux de machines à sous fraîchement arrivés',
  variant: 'primary',

  // args BrkBouton
  brkButtonArgs: {
    accessibilityText: "",
    callback: () => { console.log('click'); },
    inverted: false,
    label: "Voir les nouveautés",
    link: 'https://google.com',
    size: "lg",
  }
};
gradient.storyName = "Promo avec gradiant";

export const __namedExportsOrder = [
  "primaryLeft",
  "primaryRight",
  "secondaryLeft",
  "secondaryRight",
  "tertiaryLeft",
  "tertiaryRight",
  "gradient"
];
