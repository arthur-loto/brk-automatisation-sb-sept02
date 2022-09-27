import BrkHeader from './BrkHeader.vue';

export default {
  title: 'Composants/Header',
  component: BrkHeader,
  parameters: { controls: { sort: 'alpha' } },
  argTypes: {
    // image
    brkImageArgs: {
      table: {
        category: 'Image',
      },
      description: 'Propriétés passées à BrkImage.',
    },
    // header
    alignment: {
      options: ['left', 'right'],
      control: { type: "radio", },
      table: {
        category: 'Entête',
      },
      description: "Définit si l'alignement du contenu textuel est aligné sur le côté gauche (\"left\") ou droit (\"right\").",
    },
    backgroundColor: {
      control: { type: "color", },
      description: 'Couleur de fond. Ce champ doit être vide si une image de fond est présente.',
      table: {
        category: 'Entête',
      },
    },
    description: {
      control: { type: "text", },
      table: {
        category: 'Entête',
      },
      description: "Texte qui va apparaître en-dessous du titre. Ce champ est obligatoire.",
    },
    element: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: "select" },
      table: {
        category: 'Entête',
      },
      description: "Hiérarchie de la balise &lt;&lt; h &gt;&gt; du titre. La balise par défault est le &lt;&lt; h3 &gt;&gt;.",
    },
    preTitle: {
      control: { type: "text", },
      table: {
        category: 'Entête',
      },
      description: "Texte qui va apparaître par-dessus le titre. Ce champ est obligatoire.",
    },
    title: {
      control: { type: "text", },
      table: {
        category: 'Entête',
      },
      description: "Titre de l'entête. Ce champ est obligatoire.",
    },
    variant: {
      options: ['page', 'section'],
      control: { type: "radio", },
      table: {
        category: 'Entête',
      },
      description: "Cette option determine le type d'entête désiré.",
    },
    sectionGradient: {
      control: { type: "boolean", if: {arg: 'variant' === 'section'}},
      table: {
        category: 'Entête',
      },
      description: "Choix d'ajouter un gradient. Option disponible uniquement pour les entêtes de type section.",
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
  components: { BrkHeader },
  setup() {
    return { args };
  },
  template: '<brk-header v-bind="args" />',
});

export const PageLeft = Template.bind({});
PageLeft.args = {
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

  // args Header
  alignment: 'left',
  backgroundColor: '',
  description: 'Courez la chance de gagner le gros lot progressif à chaque partie et avec n\'importe quelle mise!',
  preTitle: 'Machine à sous',
  element: 'h2',
  // sectionGradient: null,
  title: 'MegaJackpots®',
  variant: 'page',

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
PageLeft.storyName = "Entête de page: texte gauche";

export const PageRight = Template.bind({});
PageRight.args = {
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

  // args Header
  alignment: 'right',
  backgroundColor: '#203392',
  description: 'Courez la chance de gagner le gros lot progressif à chaque partie et avec n\'importe quelle mise!',
  element: 'h3',
  title: 'MegaJackpots®',
  preTitle: 'Machine à sous',
  variant: 'page',

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
PageRight.storyName = "Entête de page: texte droite";

export const SectionLeft = Template.bind({});
SectionLeft.args = {
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

  // args Header
  alignment: 'left',
  description: 'Courez la chance de gagner le gros lot!',
  element: 'h3',
  preTitle: 'Machines à sous',
  sectionGradient: false,
  title: '25 nouveaux jeux de machines à sous fraîchement arrivés',
  variant: 'section',

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
SectionLeft.storyName = "Entête de section: texte gauche";

export const SectionRight = Template.bind({});
SectionRight.args = {
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

  // args Header
  alignment: 'right',
  backgroundColor: '#203392',
  description: 'Courez la chance de gagner le gros lot!',
  element: 'h3',
  sectionGradient: false,
  title: '25 nouveaux jeux de machines à sous fraîchement arrivés',
  preTitle: 'Machines à sous',
  variant: 'section',

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
SectionRight.storyName = "Entête de section: texte droite";

export const SectionGradient = Template.bind({});
SectionGradient.args = {
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

  // args Header
  alignment: 'left',
  backgroundColor: '#203392',
  description: 'Courez la chance de gagner le gros lot!',
  element: 'h3',
  sectionGradient: true,
  title: '25 nouveaux jeux de machines à sous fraîchement arrivés',
  preTitle: 'Machines à sous',
  variant: 'section',

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
SectionGradient.storyName = "Entête de section avec gradiant";

export const __namedExportsOrder = [
  "PageLeft",
  "PageRight",
  "SectionLeft",
  "SectionRight",
  "SectionGradient"
];
