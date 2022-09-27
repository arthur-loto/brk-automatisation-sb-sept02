import BrkCardSecondaryInfoText from "./BrkCardSecondaryInfoText.vue";

/**
 * Export par defaut
 */
export default {
  title: "Molécules/Cartes/Info secondaire/Texte",
  component: BrkCardSecondaryInfoText,
  argTypes: {
    backgroundColor: {
      control: { type: "color" },
      description: "Couleur de fond.",
    },
    text: {
      control: { type: "text" },
      description: "Texte principal de la zone d'info secondaire",
    },
    subText: {
      control: { type: "text" },
      description: "Sous-texte de la zone d'info secondaire (Optionnel)",
    },
  },
};

/**
 * Template HTML
 *
 * @param {*} args
 */
const Template = (args) => ({
  components: { BrkCardSecondaryInfoText },
  setup() {
    return { args };
  },
  template: '<brk-card-secondary-info-text v-bind="args" />',
});

/**
 * Export de stories
 */
export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "",
  text: "Table fermée ",
  subText: "de retour à 10h demain",
};
Primary.storyName = "Info secondaire / Table de jeu fermé";
