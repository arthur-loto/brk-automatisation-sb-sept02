import BrkTitle from "./BrkTitle.vue";

/**
 * Export par defaut
 */
export default {
  title: "Atomes/Titre",
  component: BrkTitle,
  argTypes: {
    title: {
      description: "Texte à afficher",
      control: { type: "text" },
    },
    alignment: {
      description: "Alignement du texte",
      options: ["left", "right", "center"],
      control: { type: "radio" },
    },
    headerSize: {
      description: "Niveau de titre HTML à utiliser",
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    nbrLimitedLines: {
      description: "Limite le nombre de lignes affichées",
      control: { type: "number" },
    },
    isHidden: {
      control: { type: "boolean" },
      description: "Active/cache le titre.",
    },
  },
};

/**
 * Template HTML
 *
 * @param {*} args
 */
const Template = (args) => ({
  components: { BrkTitle },
  setup() {
    return { args };
  },
  template: '<BrkTitle v-bind="args" />',
});

/**
 * Export de stories
 */
export const Primary = Template.bind({});
Primary.args = {
  title: "Titre primaire",
  headerSize: "h2",
  alignment: "center",
  nbrLimitedLines: null,
  isHidden: false,
};
Primary.storyName = "Titre";
