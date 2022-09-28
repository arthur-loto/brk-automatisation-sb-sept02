<template>
  <article
    @brk-resized="resizedCallback"
    ref="observedElement"
    class="brk-card-promo"
    :class="classResponsive"
    :style="bgStyle"
  >
    <div class="content-wrapper" :class="props.positionImg">
      <div class="image">
        <brk-image v-bind="brkImageArgs"></brk-image>
      </div>
      <div class="content">
        <p class="pre-title">{{ props.preTitle }}</p>
        <component :is="element" class="title" >
          <a :href="link" class="title-link">{{ props.title }}</a>
        </component>
        <brk-button
          class="btn-wrapper"
          v-bind="brkButtonArgs"
          :variant="tertiary"
          size="md"
        ></brk-button>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  name: "brk-card-promo",
};
</script>
<script setup>
import { onMounted, ref,computed } from "vue";
import { ro } from "../../helpers/ComponentResize";
import BrkImage from "../BrkImage/BrkImage.vue";
import BrkButton from "../BrkButton/BrkButton.vue";

const classResponsive = ref("sm");

const props = defineProps({
  positionImg: {
    type: String,
    default: "right",
  },
  title: {
    type: String,
  },
  preTitle: {
    type: String,
  },
  link: {
    type: String,
  },
  backgroundColor: {
    type: String,
  },
  element: {
    type:String,
    default: "h3",
  },
  brkImageArgs: {
    type: Object,
  },
  brkButtonArgs: {
    type: Object,
    required: true,
  },
});

const bgStyle = computed(() => {
  return props.backgroundColor
    ? "background-color:" + props.backgroundColor
    : "";
});

const resizedCallback = (e) => {
  if (e.detail.width > 500) {
    classResponsive.value = "md";
  } else {
    classResponsive.value = "sm";
  }
};
const observedElement = ref(null);
onMounted(() => {
  ro.observe(observedElement.value);
});
</script>

<style lang="scss" scoped>

.brk-card-promo {
  --background-color: rgb(11, 93, 183);
  --border-radius: 20px;
  --color: white;
  --content-padding: 0 20px 20px 20px;
  --content-width: 100%;
  --font-family: Arial, Helvetica, sans-serif;
  --img-width: 50%;
  --margin-right: auto;
  --margin-top: 0px;
  --max-height: 50%;
  --min-width: 200px;
  --outline: var(--brk-card-hero-border-width) solid
    var(--brk-card-hero-standard-border-color); /* Ne se trouvent pas dans les tokens */
  --outline-offset: 0px; /* Ne se trouvent pas dans les tokens */
  --pre-title-font-size: 16px;
  --pre-title-line-height: 20px;
  --title-font-size: 30px;
  --title-margin: 4px 0 14px 0;

  &.md {
    --content-padding: 0 20px 0 20px;
    --pre-title-font-size: 20px;
    --title-font-size: 26px;
  }

    /* Mixin */
  @mixin limitLines($lineCount) {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: $lineCount;
  }

  background-color: var(--background-color);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  min-width: var(--min-width);
  overflow: hidden;
  position: relative;

  .content {
    padding: 20px;
  }
  .pre-title {
    @include limitLines(1);
    color: var(--color);
    font-family: var(--font-family);
    font-size: var(--pre-title-font-size);
    line-height: var(--pre-title-line-height);
    margin: 0;
  }
  .title {
    @include limitLines(3);
    color: var(--color);
    font-family: var(--font-family);
    font-size: var(--title-font-size);
    margin: var(--title-margin);
  }
  .title-link {
    color: var(--color);
    outline: 0;
    text-decoration: none;
    &::after {
      border-radius: var(--border-radius);
      bottom: 0;
      content: "";
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    }
    &:focus-visible::after {
      outline: var(--outline);
      outline-offset: var(--outline-offset);
    }
  }

  &.md {
    align-items: center;
    justify-content: space-between;
    .content-wrapper {
      display: flex;
      justify-content: center;
      width: var(--content-width);
      &.content-wrapper.right {
        flex-direction: row-reverse;
      }
    }
    & .image {
      width: var(--img-width);
    }
    & .content {
      align-items: flex-start;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      max-width: 50%;
    }
  }
  .btn-wrapper {
    margin: var(--btn-wrapper-margin);
    position: relative; /* Pour s'assurer que le bouton est par-dessus le lien de la carte */
  }
}
</style>
