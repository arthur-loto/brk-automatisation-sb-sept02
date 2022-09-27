<template>
  <article class="card-medium-density">
    <a :href="link">
      <div class="img-wrapper">
        <BrkImage
          v-bind="brkImageArgs"
          sizing="cover"
          class="cover-image"
        ></BrkImage>
        <div v-if="hasSecondaryInfo" class="secondary-info">
          <BrkCardSecondaryInfoText
            v-if="secondaryInfo == 'BrkCardSecondaryInfoText'"
            v-bind="brkCardSecondaryInfoArgs" class="text"
          ></BrkCardSecondaryInfoText>
          <BrkCardSecondaryInfoLogo
            v-else-if="secondaryInfo == 'brkCardSecondaryInfoLogo'"
            v-bind="brkCardSecondaryInfoArgs" class="logo"
          >
          </BrkCardSecondaryInfoLogo>
        </div>
      </div>
      <component :is="element" class="title">{{ title }}</component>
      <p class="price">{{ price }}</p>
      <p class="specification">{{ specification }}</p>
    </a>
  </article>
</template>

<script setup>
import { computed } from "vue";
import BrkImage from "../BrkImage/BrkImage.vue";
import BrkCardSecondaryInfoText from "../BrkCardSecondaryInfoText/BrkCardSecondaryInfoText.vue";
import BrkCardSecondaryInfoLogo from "../BrkCardSecondaryInfoLogo/BrkCardSecondaryInfoLogo.vue";

const props = defineProps({
  brkImageArgs: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
  },
  price: {
    type: String,
  },
  specification: {
    type: String,
  },
  link: {
    type: String,
  },
  element: {
    type: String,
    default: "h3",
  },
  brkCardSecondaryInfoArgs: {
    type: Object,
  },
  secondaryInfo: {
    type: String,
    default: "",
  },
  text: {
    type: String,
  },
  subText: {
    type: String,
  },
});

const hasSecondaryInfo = computed(() => {
  return props.secondaryInfo != "";
});
</script>

<style lang="scss" scoped>
.card-medium-density {
  --grid-space-x: 1.5rem;
  --grid-space-y: 1.25rem;
  --font-family: graphik_medium, Arial, Helvetica, sans-serif;
  --image-border-radius: 28.09%;
  --image-padding-bottom: 0.5rem;
  --outline: var(--brk-interactive-outline-width) solid var(--brk-interactive-outline-color-focus-standard);
  --outline-offset: var(--brk-interactive-outline-offset);
  --price-padding-bottom: 0.5rem;
  --price-text-color: rgb(97, 95, 95);
  --price-text-size: 0.88rem;
  --specification-text-color: rgb(160, 158, 158);
  --specification-text-size: 0.88rem;
  --title-color: black;
  --title-padding-bottom: 3%;
  --title-text-size: 1.13rem;
  --wrapper-border: 2px solid lightgrey;
  --wrapper-border-radius: 35px;

  font-family: var(--font-family);

  a {
    display: block;
    text-decoration: none;
    &:focus-visible {
      outline: var(--outline);
      outline-offset: var(--outline-offset);
    }
  }

  .cover-image {
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  .img-wrapper {
    border-radius: var(--image-border-radius);
    height: 0;
    overflow: hidden;
    padding-bottom: 100%;
    position: relative;
    width: 100%;
  }

  .secondary-info {
    bottom: 0;
    height: 30px;
    left: 0;
    position: absolute;
    right: 0;
  }

  .text {
    height: 100%;
  }

  .logo {
    height: 100%;
  }

  .price {
    color: var(--price-text-color);
    font-size: var(--price-text-size);
    margin: 0;
    padding-bottom: var(--price-padding-bottom);
  }
  .specification {
    color: var(--specification-text-color);
    font-size: var(--specification-text-size);
    margin: 0;
    padding: 0;
  }
  .title {
    color: var(--title-color);
    display: -webkit-box;
    font-size: var(--title-text-size);
    margin: 0;
    padding-bottom: var(--title-padding-bottom);
    padding-top: var(--image-padding-bottom);
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    width: 100%;
  }
}

</style>