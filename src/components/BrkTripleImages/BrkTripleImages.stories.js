import BrkTripleImages from "./BrkTripleImages.vue";

export default {
  title: "Molécules/Images/Image triple",
  component: BrkTripleImages,
  argTypes: {
    bg: {
      description:
        "Image de fond. Cette image est obligatoire dans la création d'une image composée.",
    },
    character: {
      description:
        "Image du personnage. Cette image est située sur l'image de fond.",
    },
    logo: {
      description:
        "Image du logo. Cette image est située au dessus de toute les autres images, au milieu de l'image composite.",
    },
    alt: {
      type: String,
      description:
        "L'attribut alt spécifie un texte alternatif pour une image si l'image ne peux pas être affichée.",
    },
    positionChr: {
      type: String,
      defaultValue: "right",
      control: {
        type: "select",
        options: ["left", "center", "right"],
      },
      description:
        "L'attribut positionChr est utilisé pour définir la position du personnage par rapport au reste de l'image." +
        "Le personnage peut soit se situé à gauche, au centre ou bien à droite de l'image.Si rien n'est entré, l'image se situe à droite.",
    },
  },
};

const Template = (args) => ({
  components: { BrkTripleImages },
  setup() {
    return { args };
  },
  template: '<brk-triple-images v-bind="args" />',
});

export const ThreeImagesWebp = Template.bind({});
ThreeImagesWebp.args = {
  bg: [{ path: "/assets/background_macedonia.png", width: "300w" }],
  bgWebp: [{path: "/assets/bg-KingOfMacedonia@2x.webp",width: "700w",}],
  character: [{ path: "/assets/KingOfMacedonia.png", width: "300w" }],
  characterWebp: [{path: "/assets/perso-KingOfMace-3x4-center-vert.webp", width: "300w"}],
  logo: [{ path: "/assets/logo_macedonia.png", width: "300w" }],
  logoWebp:[{path : "/assets/logo-macedonia-1920x1080px-fr.webp",width:"300w"}],
  alt: "Jeu de alexandre le grand",
};
ThreeImagesWebp.storyName = "Image triple avec WebP";

export const ThreeImages = Template.bind({});
ThreeImages.args = {
  bg: [{ path: "/assets/background_macedonia.png", width: "300w" }],
  character: [{ path: "/assets/KingOfMacedonia.png", width: "300w" }],
  logo: [{ path: "/assets/logo_macedonia.png", width: "300w" }],
  alt: "Jeu de alexandre le grand",
};
ThreeImages.storyName = "Image triple";

export const TwoImages = Template.bind({});
TwoImages.args = {
  bg: [{ path: "/assets/background_macedonia.png", width: "300w" }],
  character: [{ path: "/assets/KingOfMacedonia.png", width: "300w" }],
  alt: "Jeu de alexandre le grand",
};
TwoImages.storyName = "Image double";

export const OneImage = Template.bind({});
OneImage.args = {
  bg: [{ path: "/assets/background_macedonia.png", width: "300w" }],
  alt: "Jeu de alexandre le grand",
};
OneImage.storyName = "Image simple";

export const __namedExportsOrder = [
  "OneImage",
  "TwoImages",
  "ThreeImages",
  "ThreeImagesWebp"
];
