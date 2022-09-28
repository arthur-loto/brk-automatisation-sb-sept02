import BrkSearchBar from "./BrkSearchBar.vue";

/**
 * Export par defaut
 */
export default {
  title: "Molécules/Champ de recherche",
  component: BrkSearchBar,
  argTypes: {
    placeholder: {
      description: "Le mot à afficher (en placeholder) dans le champ de recherche. (Ex: Search, Recherche, Filtrer, etc)",
      control: { type: "text" },
    },
    invisibleLabel: {
      description: "Texte pour les lecteurs d'écran.",
      control: { type: "text" },
    }
  },
};

/**
 * Template HTML
 *
 * @param {*} args
 */
const Template = (args) => ({
  components: { BrkSearchBar },
  setup() {
    return { args };
  },
  template: `
    <BrkSearchBar v-bind="args"></BrkSearchBar>
    `,
});

/**
 * Export de stories
 */
export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Recherche",
  invisibleLabel: "Effectuez une recherche",
};
Primary.storyName = "Champ de recherche";
