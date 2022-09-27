import BrkButton from './BrkButton.vue';

export default {
  title: 'Atomes/Bouton',
  component: BrkButton,
  argTypes: {
    label: {
      control: { type: 'text' },
      description: "Libellé du bouton.",
    },
    accessibilityText : {
      control: { type: 'text' },
      description : 'Texte pour les lecteurs d\'ecrans.',
    },
    link: {
      control: { type: 'text' },
      description:
        "Lien (URL) du bouton. Transforme le bouton en lien avec la balise &lt;a&gt;.",
    },
    variant: {
      control: "select",
      description: "Indique le style du bouton entre primaire, secondaire et tertiaire.",
      options: ["primary", "secondary", "tertiary"],
    },
    size: {
      control: { type: 'select' },
      description: "Indique la taille du bouton.",
      options: ['sm', 'md', 'lg', 'xl'],
    },
    inverted: {
      control: { type: "boolean" },
      description: "Active le visuel inversé.",
    },
    callback: {
      description: "Reçoit une méthode JavaScript à appeler au clic du bouton."
    }
  },
};

const Template = (args) => ({
  components: { BrkButton },
  setup() {
    return { args };
  },
  template: '<brk-button v-bind="args" />',
});

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Bouton',
  accessibilityText: 'Bouton tertiaire',
  variant: 'tertiary',
  size: 'md',
  link: 'http://loto-quebec.com',
  inverted: false,
  callback: () => { console.log('click'); }
};
Tertiary.storyName = "Tertiaire";