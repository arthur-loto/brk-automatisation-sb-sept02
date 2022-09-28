<template>
  <article
    class="brk-card-hero"
    :class="classes"
    ref="observedElement"
    @brk-resized="resizedCallback"
  >
    <div class="wrapper">
      <BrkTripleImages
        class="triple-image-height"
        v-bind="brkTripleImagesArgs"
      ></BrkTripleImages>

      <!-- secondary info -->
      <BrkCardSecondaryInfoJackpot
        v-if="secondaryInfo == 'BrkCardSecondaryInfoJackpot'"
        v-bind="brkSecondaryInfoArgs"
        :size="size"
      ></BrkCardSecondaryInfoJackpot>

      <BrkCardSecondaryInfoText
        v-if="secondaryInfo == 'BrkCardSecondaryInfoText'"
        v-bind="brkSecondaryInfoArgs"
        :size="size"
      ></BrkCardSecondaryInfoText>

      <BrkCardSecondaryInfoLogo
        v-if="secondaryInfo == 'BrkCardSecondaryInfoLogo'"
        v-bind="brkSecondaryInfoArgs"
        :size="size"
      ></BrkCardSecondaryInfoLogo>

      <div class="main-info">
        <div class="content">
          <p class="pre-title" v-if="preTitle.length != 0">{{ preTitle }}</p>
          <h3 class="title">
            <a :href="link" class="title-link">{{ title }}</a>
          </h3>
          <p class="post-title">{{ postTitle }}</p>
        </div>
        <div class="btn-wrapper">
          <BrkButton
            v-bind="brkButtonArgs"
            :size="size"
            variant="tertiary"
          ></BrkButton>
        </div>
      </div>
    </div>

    <BrkCardNav v-if="showNav" v-bind="brkCardNavArgs"></BrkCardNav>
  </article>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import BrkButton from "../BrkButton/BrkButton.vue";
import BrkTripleImages from "../BrkTripleImages/BrkTripleImages.vue";
import BrkCardSecondaryInfoJackpot from "../BrkCardSecondaryInfoJackpot/BrkCardSecondaryInfoJackpot.vue";
import BrkCardSecondaryInfoText from "../BrkCardSecondaryInfoText/BrkCardSecondaryInfoText.vue";
import BrkCardSecondaryInfoLogo from "../BrkCardSecondaryInfoLogo/BrkCardSecondaryInfoLogo.vue";
import BrkCardNav from "../BrkCardNav/BrkCardNav.vue";
import { ro } from "../../helpers/ComponentResize";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  preTitle: {
    type: String,
    default: '',
  },
  postTitle: {
    type: String,
  },
  link: {
    type: String,
    required: true,
  },
  secondaryInfo: {
    type: String,
  },
  showNav: {
    type: Boolean,
  },
  brkButtonArgs: {
    type: Object,
    required: true,
  },
  brkTripleImagesArgs: {
    type: Object,
    required: true,
  },
  brkSecondaryInfoArgs: {
    type: Object,
  },
  brkCardNavArgs: {
    type: Object,
  },
});

const size = ref("sm");
const observedElement = ref();

const classes = computed(() => {
  let classes = size.value;
  if (props.secondaryInfo && props.secondaryInfo.length > 0) {
    console.log("debug secondaryInfo", props.secondaryInfo);
    classes += " has-secondary-info";
  }
  if (!props.preTitle) {
    classes += " no-pre-title";
  }
  return classes;
});

function resizedCallback(e) {
  if (e.detail.width > 780) {
    size.value = "xl";
  } else if (e.detail.width > 630) {
    size.value = "lg";
  } else if (e.detail.width > 450) {
    size.value = "md";
  } else {
    size.value = "sm";
  }
}

onMounted(() => {
  ro.observe(observedElement.value);
});
</script>

<style lang="scss" scoped>
.brk-card-hero {
  /** Tokens dépendants des breakpoints */
  $breakpoints: (sm, md, lg, xl);
  @each $bp in $breakpoints {
    &.#{$bp} {
      --content-gap: var(--brk-card-hero-#{$bp}-content-gap);
      --card-padding: var(--brk-card-hero-#{$bp}-padding-vertical) var(--brk-card-hero-#{$bp}-padding-horizontal);
      --image-height: var(--brk-card-hero-#{$bp}-image-height);

      --post-title-font-size: var(--brk-card-hero-#{$bp}-body-font-size);
      --post-title-letter-spacing: var(--brk-card-hero-#{$bp}-body-letter-spacing);
      --post-title-line-height: var(--brk-card-hero-#{$bp}-body-line-height);
      --post-title-paragraph-spacing: var(--brk-card-hero-#{$bp}-body-paragraph-spacing);
      
      --pre-title-font-size: var(--brk-card-hero-#{$bp}-pretitle-font-size);
      --pre-title-letter-spacing: var(--brk-card-hero-#{$bp}-pretitle-letter-spacing);
      --pre-title-line-height: var(--brk-card-hero-#{$bp}-pretitle-line-height);
      --pre-title-paragraph-spacing: var(--brk-card-hero-#{$bp}-pretitle-paragraph-spacing);
      
      --secondary-info-height: var(--brk-jackpot-hero-#{$bp}-height);
      --secondary-info-padding: 0 var(--brk-card-hero-#{$bp}-padding-horizontal);
      
      --title-line-height: var(--brk-card-hero-#{$bp}-heading-line-height);
      --title-font-size: var(--brk-card-hero-#{$bp}-heading-font-size);
      --title-letter-spacing: var(--brk-card-hero-#{$bp}-heading-letter-spacing);
      --title-paragraph-spacing: var(--brk-card-hero-#{$bp}-heading-paragraph-spacing);
      --title-margin: var(--brk-card-hero-#{$bp}-heading-margin-vertical) 0;
    }
  }

  /* Définition des variables selon les tokens */
  --background-color: var(--brk-card-hero-standard-background-color);
  --border: var(--brk-card-hero-border-width) solid
    var(--brk-card-hero-standard-border-color);
  --border-radius: var(--brk-card-hero-border-radius);
  --box-shadow: var(--brk-card-hero-standard-box-shadow-default);
  --box-shadow-hover: var(--brk-card-hero-box-shadow-default-hover);
  --btn-wrapper-margin: var(--pre-title-line-height) 0 0 var(--content-gap);
  
  --outline: var(--brk-interactive-outline-width) solid var(--brk-interactive-standard-outline-color-focus);
  --outline-offset: var(--brk-interactive-outline-offset);

  --post-title-font-color: var(--brk-card-hero-standard-body-font-color);
  --post-title-font-family: var(--brk-card-hero-sm-body-font-family);
  --post-title-font-weight: var(--brk-card-hero-sm-body-font-weight);
  --post-title-text-case: var(--brk-card-hero-sm-body-text-case);
  --post-title-text-decoration: var(--brk-card-hero-sm-body-text-decoration);

  --pre-title-font-color: var(--brk-card-hero-standard-pretitle-font-color);
  --pre-title-font-family: var(--brk-card-hero-sm-pretitle-font-family);
  --pre-title-font-weight: var(--brk-card-hero-sm-pretitle-font-weight);
  --pre-title-text-case: var(--brk-card-hero-sm-pretitle-text-case);
  --pre-title-text-decoration: var(--brk-card-hero-lg-pretitle-text-decoration);

  --title-color: var(--brk-card-hero-standard-heading-font-color);
  --title-font-family: var(--brk-card-hero-sm-heading-font-family);
  --title-font-weight: var(--brk-card-hero-sm-heading-font-weight);
  --title-text-case: var(--brk-card-hero-sm-heading-text-case);
  --title-text-decoration: var(--brk-card-hero-sm-heading-text-decoration);
  
  /* Mixin */
  @mixin limitLines($lineCount) {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: $lineCount;
  }

  /* Style */
  background-color: var(--background-color);
  height: 100%;
  position: relative;
  
  .wrapper {
    background-color: var(--background-color);
    border: var(--border);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;
    &:hover {
      box-shadow: var(--box-shadow-hover);
    }
    &:active {
      box-shadow: var(--box-shadow-active);
    }
  }

  .triple-image-height {
    height: var(--image-height);
  }
  &.has-secondary-info {
    .triple-image-height {
      height: calc(var(--image-height) - var(--secondary-info-height));
    }
  }

  .main-info {
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: var(--card-padding);
  }

  .pre-title {
    @include limitLines(1);
    color: var(--pre-title-font-color);
    font-family: var(--pre-title-font-family);
    font-size: var(--pre-title-font-size);
    font-weight: var(--pre-title-font-weight);
    line-height: var(--pre-title-line-height);
    margin: 0;
    text-decoration: var(--pre-title-text-decoration);
    text-transform: var(--pre-title-text-case);
  }

  .title {
    @include limitLines(2);
    color: var(--title-color);
    font-family: var(--title-font-family);
    font-size: var(--title-font-size);
    font-weight: var(--title-font-weight);
    letter-spacing: var(--title-letter-spacing);
    line-height: var(--title-line-height);
    margin: var(--title-margin);
    text-decoration: var(--title-text-decoration);
    text-transform: var(--title-text-case);
  }

  &.no-pre-title {
    .title {
      padding-top: var(--pre-title-line-height);
    }
  }

  .title-link {
    color: var(--title-color);
    outline: 0;
    text-decoration: var(--title-text-decoration);
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

  .post-title {
    @include limitLines(1);
    color: var(--post-title-font-color);
    font-family: var(--post-title-font-family);
    font-size: var(--post-title-font-size);
    font-weight: var(--post-title-font-weight);
    letter-spacing: var(--post-title-letter-spacing);
    line-height: var(--post-title-line-height);
    margin: 0;
    text-decoration: var(--post-title-text-decoration);
    text-transform: var(--post-title-text-case);
  }

  .btn-wrapper {
    margin: var(--btn-wrapper-margin);
    position: relative; /* Pour s'assurer que le bouton est par-dessus le lien de la carte */
  }
}
</style>