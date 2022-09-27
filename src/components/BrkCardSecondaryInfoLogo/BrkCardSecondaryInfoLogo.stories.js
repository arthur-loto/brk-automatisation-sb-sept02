import BrkCardSecondaryInfoLogo from "./BrkCardSecondaryInfoLogo.vue";

/**
 * Export par defaut
 */
export default {
  title: "Molécules/Cartes/Info secondaire/Logo",
  component: BrkCardSecondaryInfoLogo,
  parameters: { controls: { sort: "alpha" } },
  argTypes: {
    backgroundColor: {
      control: { type: "color" },
      description: "Couleur de fond.",
    },
    brkImageArgs: {
      description: "Propriétés passées à BrkImage.",
    },
  },
};

/**
 * Template HTML
 *
 * @param {*} args
 */
const Template = (args) => ({
  components: { BrkCardSecondaryInfoLogo },
  setup() {
    return { args };
  },
  template: '<brk-card-secondary-info-logo v-bind="args" />',
});

/**
 * Export de stories
 */
export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "",
  brkImageArgs: {
    alt: "Logo mega jackpot",
    src: [{ path: "/assets/logo_MegaJackpotsCleopatra.png", width: "300w" }],
  },
};
Primary.storyName = "Info secondaire / Table de jeu fermé";
