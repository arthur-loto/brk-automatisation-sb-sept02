import BrkText from "./BrkText.vue";

/**
 * Export par defaut
 */
export default {
  title: "Atomes/Texte",
  component: BrkText,
  argTypes: {
    textContent: {
      description: "Contenu HTML à afficher",
      control: { type: "text" },
    },
  },
};

/**
 * Template HTML
 *
 * @param {*} args
 */
const Template = (args) => ({
  components: { BrkText },
  setup() {
    return { args };
  },
  template: `
  <BrkText v-bind="args" v-html="args.textContent"></BrkText>
  `,
});

/**
 * Export de stories
 */
export const Primary = Template.bind({});
Primary.args = {
  textContent: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>
          <strong>Cras non augue cursus,</strong> dictum tellus at, <em>interdum ligula.</em></p>
          <ul>
            <li>Nam sed risus quis neque accumsan viverra vel eu nisl.</li>
            <li>Aliquam eget justo aliquet, ultrices dui sit amet, lobortis libero.</li>
            <li>Pellentesque vestibulum enim id nisi aliquam, a finibus metus aliquam.</li>
            <li>Phasellus tincidunt ligula vel lobortis pretium.</li>
          </ul>
          <ol>
            <li>Donec molestie enim et tristique placerat.</li>
            <li>Aenean varius ante nec metus convallis, eget tincidunt leo iaculis.</li>
            <li>Praesent venenatis urna ac nunc tempor, ac tincidunt nisi ornare.</li>
            <li>Curabitur vitae sem a velit eleifend dapibus.</li>
            <li>Nunc ac odio dictum, cursus nibh et, posuere dolor.</li>
            <li>Proin blandit sapien at velit sodales, eu lobortis diam vehicula.</li>
          </ol>
          <p>Nam <strong>suscipit justo</strong> nec bibendum pulvinar.<br>
          Aliquam tempus dolor eget <em>mauris hendrerit volutpat.</em>
          Pellentesque et leo at nunc <a href="#">placerat malesuada</a>.</p>`,
};
Primary.storyName = "Texte";
