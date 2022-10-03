<template>
  <article
    ref="observedElement"
    @brk-resized="resizedCallback"
    class="brk-promo"
    :class="[classResponsive, variant, { 'border-radius': variant === 'secondary' }]"
    :style="[bgStyle]"
  >
    <div
      class="image-container"
      :class="[{ gradient: isGradient }]"
      :style="['--gradient-bottom:' + backgroundColor]"
    >
      <BrkImage class="image" :class="imageAlignment" v-bind="brkImageArgs" />
    </div>

    <div class="text-container" :class="[textAlignment, variant]">
      <div class="content">
        <p class="preTitle">{{ preTitle }}</p>
        <component :is="element" class="title">
          {{ title }}
        </component>
        <p class="description" v-if="variant !== 'secondary'">
          {{ description }}
        </p>
        <BrkButton v-bind="brkButtonArgs" variant="tertiary" />
      </div>
    </div>
  </article>
</template>

<script setup>
import BrkButton from "../BrkButton/BrkButton.vue";
import BrkImage from "../BrkImage/BrkImage.vue";
import { ro } from "../../helpers/ComponentResize";
import { computed, onMounted, ref } from "vue";

const classResponsive = ref("sm");

const props = defineProps({
  // Props Image
  brkImageArgs: {
    type: Object,
  },
  // Props Promo
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
  isGradient: {
    type: Boolean,
    default: false,
  },
  textAlignment: {
    type: String,
    required: true,
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

const imageAlignment = computed(() => {
  if (props.textAlignment === "left" && props.variant === "secondary") {
    return "image-right";
  }
  if (props.textAlignment === "right" && props.variant === "secondary") {
    return "image-left";
  }
});

const bgStyle = computed(() => {
  return props.backgroundColor
    ? "background-color:" + props.backgroundColor
    : "";
});

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

  @mixin variantTokens($variant) {
    --border-width: var(--brk-promo-#{$variant}-border-width);
    --background-color: var(--brk-promo-#{$variant}-standard-background-color);
    --body-font-color: var(--brk-promo-#{$variant}-standard-body-font-color);
    --border-color: var(--brk-promo-#{$variant}-standard-border-color);
    --gradient-color: var(--brk-promo-#{$variant}-standard-gradient-color);
    --heading-font-color: var(--brk-promo-#{$variant}-standard-heading-font-color);
    --pretitle-font-color: var(--brk-promo-#{$variant}-standard-pretitle-font-color);

    &.inverted {
      --background-color: var(--brk-promo-#{$variant}-inverted-background-color);
      --body-font-color: var(--brk-promo-#{$variant}-inverted-body-font-color);
      --border-color: var(--brk-promo-#{$variant}-inverted-border-color);
      --gradient-color: var(--brk-promo-#{$variant}-inverted-gradient-color);
      --heading-font-color: var(--brk-promo-#{$variant}-inverted-heading-font-color);
      --pretitle-font-color: var(--brk-promo-#{$variant}-inverted-pretitle-font-color);
    }

    $breakpoints: (sm, md, lg, xl);
      @each $bp in $breakpoints {
        &.#{$bp} {
          --body-font-family: var(--brk-promo-#{$variant}-#{$bp}-body-font-family);
          --body-font-size: var(--brk-promo-#{$variant}-#{$bp}-body-font-size);
          --body-font-weight: var(--brk-promo-#{$variant}-#{$bp}-body-font-weight);
          --body-letter-spacing: var(--brk-promo-#{$variant}-#{$bp}-body-letter-spacing);
          --body-line-height: var(--brk-promo-#{$variant}-#{$bp}-body-line-height);
          --body-margin-top: var(--brk-promo-#{$variant}-#{$bp}-body-margin-top);
          --body-paragraph-spacing: var(--brk-promo-#{$variant}-#{$bp}-body-paragraph-spacing);
          --body-text-case: var(--brk-promo-#{$variant}-#{$bp}-body-text-case);
          --body-text-decoration: var(--brk-promo-#{$variant}-#{$bp}-body-text-decoration);
          --container-width: var(--brk-promo-#{$variant}-#{$bp}-container-width);
          --content-gap: var(--brk-promo-#{$variant}-#{$bp}-content-gap);
          --gradient-height: var(--brk-promo-#{$variant}-#{$bp}-gradient-height);
          --heading-font-family: var(--brk-promo-#{$variant}-#{$bp}-heading-font-family);
          --heading-font-size: var(--brk-promo-#{$variant}-#{$bp}-heading-font-size);
          --heading-font-weight: var(--brk-promo-#{$variant}-#{$bp}-heading-font-weight);
          --heading-letter-spacing: var(--brk-promo-#{$variant}-#{$bp}-heading-letter-spacing);
          --heading-line-height: var(--brk-promo-#{$variant}-#{$bp}-heading-line-height);
          --heading-paragraph-spacing: var(--brk-promo-#{$variant}-#{$bp}-heading-paragraph-spacing);
          --heading-text-case: var(--brk-promo-#{$variant}-#{$bp}-heading-text-case);
          --heading-text-decoration: var(--brk-promo-#{$variant}-#{$bp}-heading-text-decoration);
          --image-height: var(--brk-promo-#{$variant}-#{$bp}-image-height);
          --padding-horizontal: var(--brk-promo-#{$variant}-#{$bp}-padding-horizontal);
          --padding-vertical: var(--brk-promo-#{$variant}-#{$bp}-padding-vertical);
          --pretitle-font-family: var(--brk-promo-#{$variant}-#{$bp}-pretitle-font-family);
          --pretitle-font-size: var(--brk-promo-#{$variant}-#{$bp}-pretitle-font-size);
          --pretitle-font-weight: var(--brk-promo-#{$variant}-#{$bp}-pretitle-font-weight);
          --pretitle-letter-spacing: var(--brk-promo-#{$variant}-#{$bp}-pretitle-letter-spacing);
          --pretitle-line-height: var(--brk-promo-#{$variant}-#{$bp}-pretitle-line-height);
          --pretitle-margin-bottom: var(--brk-promo-#{$variant}-#{$bp}-pretitle-margin-bottom);
          --pretitle-paragraph-spacing: var(--brk-promo-#{$variant}-#{$bp}-pretitle-paragraph-spacing);
          --pretitle-text-case: var(--brk-promo-#{$variant}-#{$bp}-pretitle-text-case);
          --pretitle-text-decoration: var(--brk-promo-#{$variant}-#{$bp}-pretitle-text-decoration);            
        }
    }
  
  }


.primary {
  @include variantTokens(primary);
}  

.secondary {
  @include variantTokens(secondary);
}  

.tertiary {
  @include variantTokens(tertiary);
}  
  






.brk-promo {
  border-width: var(--border-width);
  background-color: var(--background-color);
  border-color: var(--border-color);
  display: flex; // Encore pas sûr
  flex-direction: column; // Encore pas sûr
  //gradient: var(--gradient-color); ????
  min-width: var(--min-width); // Encore pas sûr
  overflow: hidden; // Encore pas sûr
  position: relative; // Encore pas sûr


  & .text-container {
    align-items: center; // Encore pas sûr
    display: flex; // Encore pas sûr
    width: 100%; // Encore pas sûr
    
    /* Reprise CSS Ai Vi (par Arthur) */ 
    align-items: center;
    bottom: 0px;
    display: flex;
    height: 100%;
    margin: 0 auto;
    max-width: var(--max-width);
    position: absolute;
    width: 100%;
    z-index: 1;
    /* Fin Reprise CSS Ai Vi (par Arthur) */








    & .content {
      color: var(--body-font-color);
      font-family: var(--body-font-family);
      font-size: var(--body-font-size);
      font-weight: var(--body-font-weight);
      letter-spacing: var(--body-letter-spacing);
      line-height: var(--body-line-height);
      margin-top: var(--body-margin-top);
      word-spacing: var(--body-paragraph-spacing); // Est-ce celà - renommer token?
      text-transform: var(--body-text-case); // Renommer token?
      text-decoration: var(--body-text-decoration);

      /* Reprise CSS Ai Vi (par Arthur) */
      margin: var(--content-margin-md);
      position: relative;
      padding: var(--content-padding);
      /* Fin Reprise CSS Ai Vi (par Arthur) */






    
      // Se caler sur le nom des tokens pour la classe ?
      & .title {
        color: var(--heading-font-color);
        font-family: var(--heading-font-family);
        font-size: var(--heading-font-size);
        font-weight: var(--heading-font-weight);
        letter-spacing: var(--heading-letter-spacing);
        line-height: var(--heading-line-height);
        word-spacing: var(--heading-paragraph-spacing); // Est-ce celà - renommer token?
        text-transform: var(--heading-text-case); // Renommer token?
        text-decoration: var(--heading-text-decoration);
        
      }

      & .preTitle {
        color: var(--pretitle-font-color);
        font-family: var(--pretitle-font-family);
        font-size: var(--pretitle-font-size);
        font-weight: var(--pretitle-font-weight);
        letter-spacing: var(--pretitle-letter-spacing);
        line-height: var(--pretitle-line-height);
        margin-bottom: var(--pretitle-margin-bottom);
        word-spacing: var(--pretitle-paragraph-spacing); // Est-ce celà - renommer token?
        text-transform: var(--pretitle-text-case); // Renommer token?
        text-decoration: var(--pretitle-text-decoration);            
      }   
    }
  } 
}


      

//$breakpoints: (sm, md, lg);
// @each $bp in $breakpoints {
//    &.#{$bp} {
//      }
//   }
  




// Archives d'Ai-Vi
.brk-header {
  /* Variables pour entête generale */
  --secondary-border-radius: var (--brk-promo-secondary-border-radius);
  --default--background-color: var(--brk-promo-primary-standard-background-color);
  --gradient-top: #ffffff00;
  --gradient-bottom: #000000;
  --min-width: 200px;
  --background-gradient-color: linear-gradient(
    var(--gradient-top),
    var(--gradient-bottom)
  );
  --background-gradient-height: var(--brk-promo-primary-lg-gradient-height);
  --image-height: var(--brk-promo-primary-lg-image-height);
  --font-family: "Arial";
  --max-width: 1920px;
  --min-height: 450px;

  /* Variables pour le contenu general */
  --content-padding: 20px 20px 20px;
  --content-text-color: var(--brk-promo-primary-standard-body-font-color);

  /* Variables pour entete type tertiary */
  --tertiary-border-radius: 20px;
  --tertiary-content-color: white;
  --tertiary-padding: 20px 20px 20px;

  /* Variables qui dépendent des breakpoints */
  /* Cette section sera à modifier une fois que les tokens seront disponibles*/
  $breakpoints: (sm, md, lg);
  @each $bp in $breakpoints {
    &.#{$bp} {
      --content-margin-sm: 0px 15px 15px;
      --content-margin-md: 30px 30px 30px;
      // --content-margin: var(--#{$bp}) var(--#{$bp}) var(--#{$bp});

      --content-width-md: 30%;
      --content-width-lg: 50%;
      // --content-width: var(--#{$bp});

      --height-sm: 400px;
      --height-md: 450px;
      --height-lg: 500px;
      // --height: var(--#{$bp});

      --description-font-size: var(--brk-promo-primary-lg-body-font-size);
      --description-font-weight: var(--brk-promo-primary-lg-body-font-weight);
      --description-font-family: var(--brk-promo-primary-lg-body-font-family);

      --preTitle-font-size: 14px;
      --preTitle-font-weight: normal;
      --preTitle-italic-font-family: "Times";

      --title-font-size: var(--brk-promo-primary-lg-heading-font-size);
      --title-font-weight: var(--brk-promo-primary-lg-heading-font-weight);
      --title-font-family: var(--brk-promo-primary-lg-heading-font-family);
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
  flex-direction: column;
  background-color: var(--default-background-color);
  font-family: var(--font-family);
  min-width: var(--min-width);
  overflow: hidden;
  position: relative;
  &.border-radius {
    border-radius: var(--secondary-border-radius);
  }

  & .image {
    width: 100;
    z-index: 0;
  }
  & .gradient::after {
    background: var(--background-gradient-color);
    bottom: 250px;
    content: "";
    display: block;
    height: var(--background-gradient-height);
    position: absolute;
    width: 100%;
  }
  & .image-container {
    height: var(--image-height);
  }
  & .text-container {
    align-items: center;
    background-color: black;
    display: flex;
    height: 250px;
    margin: 0 auto;
    max-width: var(--max-width);
    width: 100%;
    & .content {
      padding: var(--content-padding);
      box-sizing: border-box;
    }
    &.tertiary {
      & .content {
        background: var(--tertiary-content-color);
        border-radius: var(--tertiary-border-radius);
        color: var(--text-color);
        margin: var(--content-margin-sm);
        padding: var(--tertiary-padding);
      }
    }
    &.primary,
    &.secondary {
      color: var(--content-text-color);
    }
    & .preTitle {
      @include limitLines(1);
      font-size: var(--preTitle-font-size);
      font-weight: var(--preTitle-font-weight);
      em {
        font-family: var(--preTitle-italic-font-family);
      }
    }
    & .description {
      @include limitLines(2);
      font-family: var(--description-font-family);
      font-size: var(--description-font-size);
      font-weight: var(--description-font-weight);
    }
    & .title {
      @include limitLines(2);
      font-size: var(--title-font-size);
      font-weight: var(--title-font-weight);
      font-family: var(--title-font-family);
    }
  }

  &.md,
  &.lg {
    & .image-container {
      height: 0;
      & .image-left {
        width: 50%;
      }
      & .image-right {
        width: 50%;
        right: 0;
      }
      & .image {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    & .text-container {
      background: none;
      height: 100%;
      max-width: 1920px;
      &.tertiary {
        align-items: flex-end;
      }
      & .content {
        width: 50%;
        position: relative;
        padding: var(--content-padding);
      }
      &.right {
        flex-direction: row-reverse;
      }
    }
    & .gradient::after {
      bottom: 0;
    }
  }

  /* Les lignes 233-246 pourront être effacées une fois les tokens intégrés */
  &.md {
    height: var(--height-md);
  }
  &.lg {
    height: var(--height-lg);
  }
}

// --brk-promo-primary-border-width: 1px;
//   --brk-promo-primary-inverted-background-color: #000000;
//   --brk-promo-primary-inverted-body-font-color: #ffffff;
//   --brk-promo-primary-inverted-border-color: #e6e6e6;
//   --brk-promo-primary-inverted-gradient-color: linear-gradient(180deg, #00000000 0%, #000000 100%);
//   --brk-promo-primary-inverted-heading-font-color: #ffffff;
//   --brk-promo-primary-inverted-pretitle-font-color: #ffffff;

//   --brk-promo-primary-lg-body-letter-spacing: 2%;
//   --brk-promo-primary-lg-body-line-height: 100%;
//   --brk-promo-primary-lg-body-paragraph-spacing: 0;
//   --brk-promo-primary-lg-body-text-case: none;
//   --brk-promo-primary-lg-body-text-decoration: none;
//   --brk-promo-primary-lg-content-gap: 8px;
//   --brk-promo-primary-lg-content-margin-bottom: 16px;

//   --brk-promo-primary-lg-heading-letter-spacing: -2%;
//   --brk-promo-primary-lg-heading-line-height: 110%;
//   --brk-promo-primary-lg-heading-paragraph-spacing: 0;
//   --brk-promo-primary-lg-heading-text-case: none;
//   --brk-promo-primary-lg-heading-text-decoration: none;

//   --brk-promo-primary-lg-padding-horizontal: 24px;
//   --brk-promo-primary-lg-padding-vertical: 24px;
//   --brk-promo-primary-lg-pretitle-font-family: Arial;
//   --brk-promo-primary-lg-pretitle-font-size: 15px;
//   --brk-promo-primary-lg-pretitle-font-weight: Bold;
//   --brk-promo-primary-lg-pretitle-letter-spacing: -2%;
//   --brk-promo-primary-lg-pretitle-line-height: 15px;
//   --brk-promo-primary-lg-pretitle-paragraph-spacing: 0;
//   --brk-promo-primary-lg-pretitle-text-case: none;
//   --brk-promo-primary-lg-pretitle-text-decoration: none;

//   --brk-promo-primary-standard-border-color: #e6e6e6;
//   --brk-promo-primary-standard-gradient-color: linear-gradient(180deg, #ffffff00 0%, #ffffff 100%);
//   --brk-promo-primary-standard-heading-font-color: #060606;
//   --brk-promo-primary-standard-pretitle-font-color: #060606; //est-ce que le content va tjrs etre la meme couleur?

  
  // --brk-promo-secondary-border-radius: 16px;
  // --brk-promo-secondary-border-width: 1px;
  // --brk-promo-secondary-inverted-background-color: #000000;
  // --brk-promo-secondary-inverted-body-font-color: #ffffff;
  // --brk-promo-secondary-inverted-border-color: #e6e6e6;
  // --brk-promo-secondary-inverted-gradient-color: linear-gradient(180deg, #00000000 0%, #000000 100%);
  // --brk-promo-secondary-inverted-heading-font-color: #ffffff;
  // --brk-promo-secondary-inverted-pretitle-font-color: #ffffff;
  
  // --brk-promo-secondary-lg-body-font-family: Arial;
  // --brk-promo-secondary-lg-body-font-size: 16px;
  // --brk-promo-secondary-lg-body-font-weight: Regular;
  // --brk-promo-secondary-lg-body-letter-spacing: 2%;
  // --brk-promo-secondary-lg-body-line-height: 100%;
  // --brk-promo-secondary-lg-body-paragraph-spacing: 0;
  // --brk-promo-secondary-lg-body-text-case: none;
  // --brk-promo-secondary-lg-body-text-decoration: none;
  
  // --brk-promo-secondary-lg-content-gap: 16px;
  // --brk-promo-secondary-lg-content-margin-bottom: 16px;
  // --brk-promo-secondary-lg-gradient-height: 75px;
  // --brk-promo-secondary-lg-heading-font-family: Graphik;
  // --brk-promo-secondary-lg-heading-font-size: 32px;
  // --brk-promo-secondary-lg-heading-font-weight: Super;
  // --brk-promo-secondary-lg-heading-letter-spacing: -2%;
  // --brk-promo-secondary-lg-heading-line-height: 110%;
  // --brk-promo-secondary-lg-heading-paragraph-spacing: 0;
  // --brk-promo-secondary-lg-heading-text-case: none;
  // --brk-promo-secondary-lg-heading-text-decoration: none;
  // --brk-promo-secondary-lg-image-height: 300px;
  // --brk-promo-secondary-lg-padding-horizontal: 24px;
  // --brk-promo-secondary-lg-padding-vertical: 24px;
  // --brk-promo-secondary-lg-pretitle-font-family: Arial;
  // --brk-promo-secondary-lg-pretitle-font-size: 15px;
  // --brk-promo-secondary-lg-pretitle-font-weight: Bold;
  // --brk-promo-secondary-lg-pretitle-letter-spacing: -2%;
  // --brk-promo-secondary-lg-pretitle-line-height: 15px;
  // --brk-promo-secondary-lg-pretitle-paragraph-spacing: 0;
  // --brk-promo-secondary-lg-pretitle-text-case: none;
  // --brk-promo-secondary-lg-pretitle-text-decoration: none;
  // --brk-promo-secondary-md-body-font-family: Arial;
  // --brk-promo-secondary-md-body-font-size: 13px;
  // --brk-promo-secondary-md-body-font-weight: Regular;
  // --brk-promo-secondary-md-body-letter-spacing: 2%;
  // --brk-promo-secondary-md-body-line-height: 100%;
  // --brk-promo-secondary-md-body-paragraph-spacing: 0;
  // --brk-promo-secondary-md-body-text-case: none;
  // --brk-promo-secondary-md-body-text-decoration: none;
  // --brk-promo-secondary-md-content-gap: 8px;
  // --brk-promo-secondary-md-content-margin-bottom: 16px;
  // --brk-promo-secondary-md-gradient-height: 67.5px;
  // --brk-promo-secondary-md-heading-font-family: Graphik;
  // --brk-promo-secondary-md-heading-font-size: 28px;
  // --brk-promo-secondary-md-heading-font-weight: Super;
  // --brk-promo-secondary-md-heading-letter-spacing: -2%;
  // --brk-promo-secondary-md-heading-line-height: 110%;
  // --brk-promo-secondary-md-heading-paragraph-spacing: 0;
  // --brk-promo-secondary-md-heading-text-case: none;
  // --brk-promo-secondary-md-heading-text-decoration: none;
  // --brk-promo-secondary-md-image-height: 270px;
  // --brk-promo-secondary-md-padding-horizontal: 16px;
  // --brk-promo-secondary-md-padding-vertical: 20px;
  // --brk-promo-secondary-md-pretitle-font-family: Arial;
  // --brk-promo-secondary-md-pretitle-font-size: 12px;
  // --brk-promo-secondary-md-pretitle-font-weight: Bold;
  // --brk-promo-secondary-md-pretitle-letter-spacing: -2%;
  // --brk-promo-secondary-md-pretitle-line-height: 12px;
  // --brk-promo-secondary-md-pretitle-paragraph-spacing: 0;
  // --brk-promo-secondary-md-pretitle-text-case: none;
  // --brk-promo-secondary-md-pretitle-text-decoration: none;
  // --brk-promo-secondary-sm-body-font-family: Arial;
  // --brk-promo-secondary-sm-body-font-size: 16px;
  // --brk-promo-secondary-sm-body-font-weight: Regular;
  // --brk-promo-secondary-sm-body-letter-spacing: 2%;
  // --brk-promo-secondary-sm-body-line-height: 120%;
  // --brk-promo-secondary-sm-body-paragraph-spacing: 0;
  // --brk-promo-secondary-sm-body-text-case: none;
  // --brk-promo-secondary-sm-body-text-decoration: none;
  // --brk-promo-secondary-sm-content-gap: 4px;
  // --brk-promo-secondary-sm-content-margin-bottom: 12px;
  // --brk-promo-secondary-sm-gradient-height: 43px;
  // --brk-promo-secondary-sm-heading-font-family: Graphik;
  // --brk-promo-secondary-sm-heading-font-size: 40px;
  // --brk-promo-secondary-sm-heading-font-weight: Super;
  // --brk-promo-secondary-sm-heading-letter-spacing: -2%;
  // --brk-promo-secondary-sm-heading-line-height: 110%;
  // --brk-promo-secondary-sm-heading-paragraph-spacing: 0;
  // --brk-promo-secondary-sm-heading-text-case: none;
  // --brk-promo-secondary-sm-heading-text-decoration: none;
  // --brk-promo-secondary-sm-image-height: 172px;
  // --brk-promo-secondary-sm-padding-horizontal: 16px;
  // --brk-promo-secondary-sm-padding-vertical: 15px;
  // --brk-promo-secondary-sm-pretitle-font-family: Arial;
  // --brk-promo-secondary-sm-pretitle-font-size: 13px;
  // --brk-promo-secondary-sm-pretitle-font-weight: Bold;
  // --brk-promo-secondary-sm-pretitle-letter-spacing: 0%;
  // --brk-promo-secondary-sm-pretitle-line-height: 115%;
  // --brk-promo-secondary-sm-pretitle-paragraph-spacing: 0;
  // --brk-promo-secondary-sm-pretitle-text-case: none;
  // --brk-promo-secondary-sm-pretitle-text-decoration: none;
  // --brk-promo-secondary-standard-background-color: #ffffff;
  // --brk-promo-secondary-standard-body-font-color: #000000;
  // --brk-promo-secondary-standard-border-color: #e6e6e6;
  // --brk-promo-secondary-standard-box-shadow-default: 0px 0px 0px 0px #000000;
  // --brk-promo-secondary-standard-box-shadow-hover: 0px 2px 8px 0px #e6e6e6;
  // --brk-promo-secondary-standard-gradient-color: linear-gradient(180deg, #ffffff00 0%, #ffffff 100%);
  // --brk-promo-secondary-standard-heading-font-color: #000000;
  // --brk-promo-secondary-standard-pretitle-font-color: #000000;
  // --brk-promo-secondary-xl-body-font-family: Arial;
  // --brk-promo-secondary-xl-body-font-size: 15px;
  // --brk-promo-secondary-xl-body-font-weight: Regular;
  // --brk-promo-secondary-xl-body-letter-spacing: -2%;
  // --brk-promo-secondary-xl-body-line-height: 110%;
  // --brk-promo-secondary-xl-body-paragraph-spacing: 0;
  // --brk-promo-secondary-xl-body-text-case: none;
  // --brk-promo-secondary-xl-body-text-decoration: none;
  // --brk-promo-secondary-xl-container-width: 312px;
  // --brk-promo-secondary-xl-content-gap: 24px;
  // --brk-promo-secondary-xl-content-margin-bottom: 16px;
  // --brk-promo-secondary-xl-gradient-height: 142px;
  // --brk-promo-secondary-xl-heading-font-family: Graphik;
  // --brk-promo-secondary-xl-heading-font-size: 32px;
  // --brk-promo-secondary-xl-heading-font-weight: Super;
  // --brk-promo-secondary-xl-heading-letter-spacing: -2%;
  // --brk-promo-secondary-xl-heading-line-height: 110%;
  // --brk-promo-secondary-xl-heading-paragraph-spacing: 0;
  // --brk-promo-secondary-xl-heading-text-case: none;
  // --brk-promo-secondary-xl-heading-text-decoration: none;
  // --brk-promo-secondary-xl-image-height: 568px;
  // --brk-promo-secondary-xl-padding-horizontal: 24px;
  // --brk-promo-secondary-xl-padding-vertical: 24px;
  // --brk-promo-secondary-xl-pretitle-font-family: Arial;
  // --brk-promo-secondary-xl-pretitle-font-size: 15px;
  // --brk-promo-secondary-xl-pretitle-font-weight: Bold;
  // --brk-promo-secondary-xl-pretitle-letter-spacing: -2%;
  // --brk-promo-secondary-xl-pretitle-line-height: 15px;
  // --brk-promo-secondary-xl-pretitle-paragraph-spacing: 0;
  // --brk-promo-secondary-xl-pretitle-text-case: none;
  // --brk-promo-secondary-xl-pretitle-text-decoration: none;
  // --brk-promo-tertiary-border-width: 1px;
  // --brk-promo-tertiary-frame-border-radius: 16px;
  // --brk-promo-tertiary-inverted-background-color: #000000;
  // --brk-promo-tertiary-inverted-body-font-color: #000000;
  // --brk-promo-tertiary-inverted-border-color: #e6e6e6;
  // --brk-promo-tertiary-inverted-frame-color: #ffffff;
  // --brk-promo-tertiary-inverted-gradient-color: linear-gradient(180deg, #00000000 0%, #000000 100%);
  // --brk-promo-tertiary-inverted-heading-font-color: #000000;
  // --brk-promo-tertiary-inverted-pretitle-font-color: #000000;
  // --brk-promo-tertiary-lg-content-gap: 16px;
  // --brk-promo-tertiary-lg-content-margin-bottom: 16px;
  // --brk-promo-tertiary-lg-gradient-height: 75px;
  // --brk-promo-tertiary-lg-image-height: 300px;
  // --brk-promo-tertiary-lg-padding-horizontal: 24px;
  // --brk-promo-tertiary-lg-padding-vertical: 24px;
  // --brk-promo-tertiary-md-content-gap: 8px;
  // --brk-promo-tertiary-md-content-margin-bottom: 16px;
  // --brk-promo-tertiary-md-gradient-height: 67.5px;
  // --brk-promo-tertiary-md-image-height: 270px;
  // --brk-promo-tertiary-md-padding-horizontal: 16px;
  // --brk-promo-tertiary-md-padding-vertical: 20px;
  // --brk-promo-tertiary-sm-content-gap: 4px;
  // --brk-promo-tertiary-sm-content-margin-bottom: 12px;
  // --brk-promo-tertiary-sm-frame-padding-horizontal: 10px;
  // --brk-promo-tertiary-sm-frame-padding-vertical: 10px;
  // --brk-promo-tertiary-sm-gradient-height: 43px;
  // --brk-promo-tertiary-sm-image-height: 172px;
  // --brk-promo-tertiary-sm-padding-horizontal: 16px;
  // --brk-promo-tertiary-sm-padding-vertical: 15px;
  // --brk-promo-tertiary-standard-background-color: #ffffff;
  // --brk-promo-tertiary-standard-body-font-color: #ffffff;
  // --brk-promo-tertiary-standard-border-color: #e6e6e6;
  // --brk-promo-tertiary-standard-frame-color: #000000;
  // --brk-promo-tertiary-standard-gradient-color: linear-gradient(180deg, #ffffff00 0%, #ffffff 100%);
  // --brk-promo-tertiary-standard-heading-font-color: #ffffff;
  // --brk-promo-tertiary-standard-pretitle-font-color: #ffffff;
  // --brk-promo-tertiary-xl-container-width: 312px;
  // --brk-promo-tertiary-xl-content-gap: 24px;
  // --brk-promo-tertiary-xl-content-margin-bottom: 16px;
  // --brk-promo-tertiary-xl-gradient-height: 142px;
  // --brk-promo-tertiary-xl-image-height: 568px;
  // --brk-promo-tertiary-xl-padding-horizontal: 24px;
  // --brk-promo-tertiary-xl-padding-vertical: 24px;





</style>
