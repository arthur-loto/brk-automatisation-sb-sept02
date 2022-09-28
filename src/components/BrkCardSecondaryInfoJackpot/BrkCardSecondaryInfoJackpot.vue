<template>
  <div
    class="brk-card-jackpot"
    :class="size"
    :style="bgStyle"
  >
    <p>
      <BrkImage
        v-if="hasImage"
        v-bind="brkImageArgs"
        sizing="vertical"
        class="brk-image"
      ></BrkImage>
      <span v-else class="title">{{ text }}</span>
      <span class="jackpot" :class="classes">
        <span v-for="span in amountStructure" :key="span" :class="span.class">
          {{ span.text }}
        </span>
      </span>
    </p>
  </div>
</template>

<script setup>
import BrkImage from "../BrkImage/BrkImage.vue";
import { onMounted, ref, computed } from "vue";

const props = defineProps({
  backgroundColor: {
    type: String,
  },
  brkImageArgs: {
    type: Object,
  },
  text: {
    type: String,
    required: true,
    default: "Lot Progressif",
  },
  totalAmount: {
    type: String,
    required: true,
    default: "0",
  },
  format: {
    type: String,
    required: true,
    default: "fr",
  },
  size: {
    type: String,
    default: "sm"
  }
});

const hasImage = computed(() => {
  return ( props.brkImageArgs && typeof props.brkImageArgs === 'object' );
});

const classes = computed(() => {
  return props.format ? "format-" + props.format : "";
});

const bgStyle = computed(() => {
  return props.backgroundColor
    ? "background-color:" + props.backgroundColor
    : "";
});

const amountStructure = computed(() => {
  let str = props.totalAmount;
  let numbers = [];
  for (let i = 0; i < str.length; i++) {
    numbers.push(str.charAt(i));
  }
  let reverseNumbers = numbers.reverse();
  let amountStructure = [];

  for (let i = 0; i < reverseNumbers.length; i++) {
    let j = i % 3;
    let structSpan = {};
    if (j == 0 && i > 0) {
      let structSeparator = {
        class: "separator",
        text: "",
      };

      amountStructure.unshift(structSeparator);
    }
    structSpan.class = "digit";
    structSpan.text = reverseNumbers[i];

    amountStructure.unshift(structSpan);
  }

  let dollar = {
    class: "dollar",
    text: "$",
  };

  if (props.format == "fr") {
    amountStructure.push(dollar);
  } else {
    amountStructure.unshift(dollar);
  }

  return amountStructure;
});
</script>

<style lang="scss" scoped>
.brk-card-jackpot {
  /* box */
  --background-color: var(--brk-jackpot-hero-standard-background-color);
  /* --border-width: var(--brk-jackpot-hero-body-box-border-width);
      Il n'y a pas de token pour le border-width de la boite 
      Alternative temporaire : */
  --border-width: var(--brk-jackpot-hero-amount-digit-border-width);
  --content-gap: var(--brk-jackpot-hero-sm-content-gap);
  --height: var(--brk-jackpot-hero-sm-height);

  /* digit */
  --digit-background-color: var(--brk-jackpot-hero-standard-body-box-background-color);
  --digit-border-radius: var(--brk-jackpot-hero-amount-digit-border-radius);
  --digit-color: var(--brk-jackpot-hero-standard-body-font-color);
  --digit-font-family: var(--brk-jackpot-hero-sm-body-font-family);
  --digit-font-size: var(--brk-jackpot-hero-sm-body-font-size);
  --digit-font-weight: var(--brk-jackpot-hero-sm-body-font-weight);
  --digit-gap: var(--brk-jackpot-hero-sm-amount-digit-margin);
  --digit-group-gap: var(--brk-jackpot-hero-sm-amount-group-margin);
  --digit-height: var(--brk-jackpot-hero-sm-amount-digit-height);
  --digit-width: var(--brk-jackpot-hero-sm-amount-digit-width);

  --symbol-font-color: var(--brk-jackpot-hero-standard-symbol-font-color);

  /* box */
  --padding: 0 var(--brk-jackpot-hero-sm-padding-horizontal);

  /* title */
  --title-color: var(--brk-jackpot-hero-standard-heading-font-color);
  --title-font-family: var(--brk-jackpot-hero-sm-heading-font-family);
  --title-font-size: var(--brk-jackpot-hero-sm-heading-font-size);
  --title-font-weight: var(--brk-jackpot-hero-sm-heading-font-weight);
  --title-line-height: var(--brk-jackpot-hero-sm-heading-line-height);

  $breakpoints: (md, lg, xl);
  @each $bp in $breakpoints {
    &.#{$bp} {
      --content-gap: var(--brk-jackpot-hero-#{$bp}-content-gap);
      --digit-font-size: var(--brk-jackpot-hero-#{$bp}-body-font-size);
      --digit-group-gap: var(--brk-jackpot-hero-#{$bp}-amount-group-margin);
      --digit-height: var(--brk-jackpot-hero-#{$bp}-amount-digit-height);
      --digit-margin: var(--brk-jackpot-hero-#{$bp}-amount-digit-margin);
      --digit-width: var(--brk-jackpot-hero-#{$bp}-amount-digit-width);
      --group-margin: var(--brk-jackpot-hero-#{$bp}-amount-group-margin);
      --height: var(--brk-jackpot-hero-#{$bp}-height);
      --title-font-size: var(--brk-jackpot-hero-#{$bp}-heading-font-size);
      --title-line-height: var(--brk-jackpot-hero-#{$bp}-heading-line-height);
    }
  }

  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
  height: var(--height);
  justify-content: center;
  padding: var(--padding);

  & > p {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
  }

  .brk-image {
    height: var(--height);
  }

  .title {
    color: var(--title-color);
    display: -webkit-box;
    font-family: var(--title-font-family);
    font-size: var(--title-font-size);
    font-weight: var(--title-font-weight);
    margin: var(--content-gap);
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    width: 80%; /* token a venir */
  }

  .jackpot {
    align-items: center;
    display: flex;
    flex-direction: row;

    & > span {
      align-content: center;
      display: grid;
      font-family: var(--digit-font-family);
      font-size: var(--digit-font-size);
      font-weight: var(--digit-font-weight);
      height: var(--digit-height);
      justify-content: center;
      margin: 0 var(--digit-gap);
    }

    .digit {
      background-color: var(--digit-background-color);
      border-radius: var(--digit-border-radius);
      color: var(--digit-color);
      width: var(--digit-width);
    }

    .dollar {
      color: var(--symbol-font-color);
    }

    .separator {
      color: var(--symbol-font-color);
      text-align: center;
      width: var(--digit-group-gap);
    }

    &.format-en .separator::before {
      content: ",";
    }

    span:last-of-type {
      margin-right: 0;
    }
  }
}
</style>