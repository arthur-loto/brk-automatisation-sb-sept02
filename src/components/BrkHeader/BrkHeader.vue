<template>
  <article
    ref="observedElement"
    @brk-resized="resizedCallback"
    class="brk-header"
    :class="classResponsive"
    :style="manageBgStyle()"
  >
    <BrkImage class="image" v-bind="brkImageArgs" />
    <div
      class="full-gradient"
      v-if="sectionGradient && variant === 'section'"
    ></div>
    <div class="container" :class="[alignment, variant]">
      <div class="content">
        <p class="overline">{{ preTitle }}</p>
        <component :is="element" class="title">
          {{ title }}
        </component>
        <p class="description">{{ description }}</p>
        <BrkButton v-bind="brkButtonArgs" variant="tertiary" />
      </div>
    </div>
  </article>
</template>

<script setup>
import BrkButton from "../BrkButton/BrkButton.vue";
import BrkImage from "../BrkImage/BrkImage.vue";
import { ro } from "../../helpers/ComponentResize";
import { onMounted, ref, computed } from "vue";

const classResponsive = ref("sm");

const props = defineProps({
  // Props Image
  brkImageArgs: {
    type: Object,
  },
  // Props Entete
  alignment: {
    type: String,
    required: true,
  },
  backgroundColor: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  element: {
    type: String,
    default: "h3",
  },
  sectionGradient: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  preTitle: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    required: true,
  },
  // Props Bouton
  brkButtonArgs: {
    type: Object,
  },
});

function manageBgStyle() {
  return props.backgroundColor
    ? "background-color:" + props.backgroundColor
    : "";
}

const resizedCallback = (e) => {
  if (e.detail.width > 700) {
    classResponsive.value = "lg";
  } else if (e.detail.width > 500) {
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
.brk-header {
  /* Variables pour entête generale */
  --background-gradient: linear-gradient(
    rgba(255, 255, 255, 0),
    rgb(0, 0, 0, 1)
  );
  --font-family: "Arial";
  --max-width: 1920px;
  --min-height: 450px;

  /* Variables pour le contenu general */
  --content-padding: 20px 20px 20px;
  --content-text-color: grey;

  /* Variables pour entete type section */
  --section-border-radius: 20px;
  --section-content-color: white;
  --section-padding: 20px 20px 20px;

  /* Variables qui dépendent des breakpoints */
  /* Cette section sera à modifier une fois que les tokens seront disponibles*/
  $breakpoints: (sm, md, lg);
  @each $bp in $breakpoints {
    &.#{$bp} {
      --content-margin-sm: 15px 15px 15px;
      --content-margin-md: 30px 30px 30px;
      // --content-margin: var(--#{$bp}) var(--#{$bp}) var(--#{$bp});

      --content-width-md: 50%;
      --content-width-lg: 30%;
      // --content-width: var(--#{$bp});

      --height-sm: 400px;
      --height-md: 450px;
      --height-lg: 500px;
      // --height: var(--#{$bp});

      --description-font-size: 16px;
      --description-font-weight: normal;

      --overline-font-size: 14px;
      --overline-font-weight: normal;
      --overline-italic-font-family: "Times";

      --title-font-size: 24px;
      --title-font-weight: bolder;
    }
  }

  /* Mixin */
  @mixin limitLines($lineCount) {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: $lineCount;
  }

  display: flex;
  height: var(--height-sm);
  font-family: var(--font-family);
  justify-content: center;
  overflow: hidden;
  position: relative;

  & .image {
    height: 100%;
    z-index: -1;
  }
  & .full-gradient {
    background: var(--background-gradient);
    height: 100%;
    position: absolute;
    width: 100%;
  }
  & .container {
    align-items: center;
    bottom: 0px;
    display: flex;
    height: 100%;
    margin: 0 auto;
    max-width: var(--max-width);
    position: absolute;
    width: 100%;
    z-index: 1;
    & .content {
      bottom: 0;
      padding: var(--content-padding);
      position: absolute;
    }
    &.section {
      & .content {
        background: var(--section-content-color);
        border-radius: var(--section-border-radius);
        color: var(--text-color);
        margin: var(--content-margin-sm);
        padding: var(--section-padding);
      }
    }
    &.page {
      background: var(--background-gradient);
      color: var(--content-text-color);
    }
    & .overline {
      @include limitLines(1);
      font-size: var(--overline-font-size);
      font-weight: var(--overline-font-weight);
      em {
        font-family: var(--overline-italic-font-family);
      }
    }
    & .description {
      @include limitLines(1);
      font-size: var(--description-font-size);
      font-weight: var(--description-font-weight);
    }
    & .title {
      @include limitLines(2);
      font-size: var(--title-font-size);
      font-weight: var(--title-font-weight);
    }
  }

  &.md,
  &.lg {
    & .image {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: -1;
    }
    & .container {
      &.page {
        background: none;
      }
      &.section {
        align-items: flex-end;
      }
      & .content {
        margin: var(--content-margin-md);
        position: relative;
        padding: var(--content-padding);
      }
      &.right {
        flex-direction: row-reverse;
      }
    }
  }

  /* Les lignes 233-246 pourront être effacées une fois les tokens intégrés */
  &.md {
    height: var(--height-md);
    & .content {
      max-width: var(--content-width-md);
    }
  }
  &.lg {
    height: var(--height-lg);
    & .content {
      max-width: var(--content-width-lg);
    }
  }
}
</style>