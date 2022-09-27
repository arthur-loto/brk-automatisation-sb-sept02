import BrkImage from "./BrkImage.vue";

export default {
  title: "Atomes/Image",
  component: BrkImage,
  argTypes: {
    alt: {
      control: { type: "text" },
      description:
        "Texte alternatif pour l'image quand celle-ci ne peut pas être affichée et pour l'accessibilité.",
    },
    src: {
      description:
        `Objet JSON pour définir la source des images à utiliser.<br />Le format à utiliser est le suivant:<br />\`[
          { path: '/chemin-vers-image.jpg', width: '300w' } ]\`<br />
          \`path\`: chemin complet de l'image<br />
          \`width\`: largeur de l'image source en pixels, avec un w à la suite de l'entier<br />
          Pour utiliser des sources multiples, il faut répéter l'objet dans la liste autant de fois que nécessaire.<br />`,
    },
    webpSrc: {
      description:
        `(Optionnel) Objet JSON pour définir la source des images de type WebP à utiliser dans les navigateurs qui supportent ce format.<br />
        Le format à utiliser est le même que \`src\`.`,
    },
    sizing: {
      control: {
        type: "select",
        options: ["", "vertical", "contain", "cover"],
      },
      description:
        `Mode de dimensionnement de l'image.<br />
        \`vertical\`: 100% de la hauteur du parent, largeur auto<br />
        \`contain\`: 100% de la hauteur et de la largeur du parent, image entière visible<br />
        \`cover\`: 100% de la hauteur et de la largeur du parent, image possiblement coupée`,
    },
  },
};

const Template = (args) => ({
  components: { BrkImage },
  setup() {
    return { args };
  },
  template: '<brk-image v-bind="args" />',
});

export const imageWebp = Template.bind({});
imageWebp.args = {
  src: [
    { path: "/assets/placeholder/300.gif", width: "300w" },
    { path: "/assets/placeholder/600.gif", width: "600w" },
    { path: "/assets/placeholder/1200.gif", width: "1200w" },
    { path: "/assets/placeholder/1600.gif", width: "1600w" },
  ],
  webpSrc: [
    { path: "/assets/placeholder/300.webp", width: "300w" },
    { path: "/assets/placeholder/600.webp", width: "600w" },
    { path: "/assets/placeholder/1200.webp", width: "1200w" },
    { path: "/assets/placeholder/1600.webp", width: "1600w" },
  ],
  alt: "background-monopoly",
  sizing: "",
};
imageWebp.storyName = "Image avec WebP";

export const image = Template.bind({});
image.args = {
  src: [
    { path: "/assets/placeholder/300.gif", width: "300w" },
    { path: "/assets/placeholder/600.gif", width: "600w" },
    { path: "/assets/placeholder/1200.gif", width: "1200w" },
    { path: "/assets/placeholder/1600.gif", width: "1600w" },
  ],
  alt: "background-monopoly",
  sizing: "",
};

export const __namedExportsOrder = ["image", "imageWebp"];
