import BrkCardNav from './BrkCardNav.vue'

export default {
  title: 'Molécules/Cartes/Navigation',
  component: BrkCardNav,
  argTypes: {
    btnOpenLabel: {
      description: `Libellé d'ouverture du menu pour les lecteurs d'écran.`
    },
    btnCloseLabel: {
      description: `Libellé de fermeture du menu pour les lecteurs d'écran.`
    },
    links: {
      description: `Liste des liens à afficher dans le menu.<br />Le format à utiliser est le suivant:<br />
      \`[ { url: "page-web.html", label: "Ma page web", newWindow: true } ]\`<br />
      \`url\`: url de la page à ouvrir<br />
      \`label\`: libellé à afficher dans le menu<br />
      \`newWindow\`: ouvrir dans un nouvel onglet (true) ou non (false)
      `
    }
  }
}

const Template = (args) => ({
  components: { BrkCardNav },
  setup() {
    return { args }
  },
  template: '<brk-card-nav v-bind="args" />',
})

export const Primary = Template.bind({})
Primary.args = {
  btnOpenLabel: 'Ouvrir le menu du jeu',
  btnCloseLabel: 'Fermer le menu du jeu',
  links: [
    { url: 'http://www.perdu.com', label: 'Perdu', newWindow: true },
    { url: 'http://www.google.com', label: 'Google', newWindow: false },
    { url: 'https://www.nyan.cat/', label: 'Nyan Cat', newWindow: true },
  ],
}
Primary.storyName = "Navigation";