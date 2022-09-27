import BrkCardSecondaryInfoJackpot from './BrkCardSecondaryInfoJackpot.vue'

/**
 * Export par defaut
 */
export default {
  title: 'Molécules/Cartes/Info secondaire/Lot progressif',
  component: BrkCardSecondaryInfoJackpot,
  argTypes: {
    backgroundColor: {
      control: { type: 'color' },
      description: 'Couleur de fond.',
    },
    text: {
      control: { type: 'text' },
      description: 'Texte à afficher',
    },
    totalAmount: {
      control: { type: 'text' }, //probleme dans storybook quand le type est "number"
      description: 'Montant ($) total à afficher',
    },
    format: {
      control: { type: 'select' },
      description:
        `Langue pour le format du montant affiché.<br />
        \`fr\`: 1 000 000$<br />
        \`en\`: $1,000,000
        `,
      options: ['fr', 'en'],
    },
    brkImageArgs: {
      description: "Propriétés passées à BrkImage."
    }
  },
}

/**
 * Template HTML
 *
 * @param {*} args
 */
const Template = (args) => ({
  components: { BrkCardSecondaryInfoJackpot },
  setup() {
    return { args }
  },
  template: '<brk-card-jackpot v-bind="args" />',
})

/**
 * Export de stories
 */
export const Primary = Template.bind({})
Primary.args = {
  backgroundColor: '',
  text: 'Lot progressif',
  totalAmount: '5573029',
  format: 'fr',
  
}
Primary.storyName = 'Lot progressif';

export const Secondary = Template.bind({})
Secondary.args = {
  backgroundColor: '',
  text: 'Lot progressif',
  totalAmount: '5573029',
  format: 'fr',
  brkImageArgs: {
    alt: 'Logo mega jackpot',
    src: [{ path: '/assets/logo_MegaJackpotsCleopatra.png', width: '300w' }]
  }
}
Secondary.storyName = 'Lot progressif avec logo';