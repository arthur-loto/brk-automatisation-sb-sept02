<template>
  <component
    :is="element"
    class="brk-button"
    :class="classes"
    :aria-label="accessibilityText"
    :href="link"
    @click="callback"
  >
    {{ label }}
  </component>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  accessibilityText: {
    type: String,
  },
  link: {
    type: String,
  },
  callback: {},
  variant: {
    type: String,
    required: true,
    default: "tertiary",
  },
  size: {
    type: String,
    default: "sm",
  },
  inverted: {
    type: Boolean,
  },
});

const classes = computed(() => {
  return `${props.size} ${props.variant} ${props.inverted ? "inverted" : ""}`;
});
const element = computed(() => {
  if (props.link) {
    return "a";
  } else if (props.callback) {
    return "button";
  } else {
    return "span";
  }
});
</script>

<style lang="scss" scoped>
.brk-button {
  /* tokens généraux */
  --outline: var(--brk-interactive-outline-width) solid transparent;
  --outline-color-focus: var(--brk-interactive-standard-outline-color-focus);
  --outline-offset: var(--brk-interactive-outline-offset);
  --padding: var(--brk-button-padding-top) var(--brk-button-padding-right) var(--brk-button-padding-bottom) var(--brk-button-padding-left);

  &.inverted {
    --outline-color-focus: var(--brk-button-inverted-outline-color-focus);
  }
}

@mixin variantTokens($variant) {
  --background-color: var(--brk-button-#{$variant}-standard-background-color-default);
  --background-color-active: var(--brk-button-#{$variant}-standard-background-color-active);
  --background-color-focus: var(--brk-button-#{$variant}-standard-background-color-focus);
  --background-color-hover: var(--brk-button-#{$variant}-standard-background-color-hover);
  --border: var(--brk-button-#{$variant}-border-width) solid var(--brk-button-#{$variant}-standard-border-color-default);
  --border-color-active: var(--brk-button-#{$variant}-standard-border-color-active);
  --border-color-focus: var(--brk-button-#{$variant}-standard-border-color-focus);
  --border-color-hover: var(--brk-button-#{$variant}-standard-border-color-hover);
  --border-radius: var(--brk-button-#{$variant}-sm-border-radius);
  --box-shadow: var(--brk-button-#{$variant}-standard-box-shadow-default);
  --box-shadow-focus: var(--brk-button-#{$variant}-standard-box-shadow-focus);
  --box-shadow-hover: var(--brk-button-#{$variant}-standard-box-shadow-hover);
  --color: var(--brk-button-#{$variant}-standard-font-color-default);
  --color-active: var(--brk-button-#{$variant}-standard-font-color-active);
  --color-focus: var(--brk-button-#{$variant}-standard-font-color-focus);
  --color-hover: var(--brk-button-#{$variant}-standard-font-color-hover);
  --font-family: var(--brk-button-#{$variant}-sm-label-font-family);
  --font-size: var(--brk-button-#{$variant}-sm-label-font-size);
  --font-weight: var(--brk-button-#{$variant}-sm-label-font-weight);
  --height: var(--brk-button-#{$variant}-sm-height);
  --letter-spacing: var(--brk-button-#{$variant}-sm-label-letter-spacing);
  --line-height: var(--brk-button-#{$variant}-sm-label-line-height);
  --text-decoration: var(--brk-button-#{$variant}-sm-label-text-decoration);
  --text-transform: var(--brk-button-#{$variant}-sm-label-text-case);
  --padding: 0 var(--brk-button-#{$variant}-sm-padding-horizontal);
  &.inverted {
    --background-color: var(--brk-button-#{$variant}-inverted-background-color-default);
    --background-color-active: var(--brk-button-#{$variant}-inverted-background-color-active);
    --background-color-focus: var(--brk-button-#{$variant}-inverted-background-color-focus);
    --background-color-hover: var(--brk-button-#{$variant}-inverted-background-color-hover);
    --border: var(--brk-button-#{$variant}-border-width) solid var(--brk-button-#{$variant}-inverted-border-color-default);
    --border-color-active: var(--brk-button-#{$variant}-inverted-border-color-active);
    --border-color-focus: var(--brk-button-#{$variant}-inverted-border-color-focus);
    --border-color-hover: var(--brk-button-#{$variant}-inverted-border-color-hover);
    --box-shadow: var(--brk-button-#{$variant}-inverted-box-shadow-default);
    --box-shadow-focus: var(--brk-button-#{$variant}-inverted-box-shadow-focus);
    --box-shadow-hover: var(--brk-button-#{$variant}-inverted-box-shadow-hover);
    --color: var(--brk-button-#{$variant}-inverted-font-color-default);
    --color-active: var(--brk-button-#{$variant}-inverted-font-color-active);
    --color-focus: var(--brk-button-#{$variant}-inverted-font-color-focus);
    --color-hover: var(--brk-button-#{$variant}-inverted-font-color-hover);
    --outline-color-focus: var(--brk-interactive-inverted-outline-color-focus);
  }

  $breakpoints: (md, lg, xl);
  @each $bp in $breakpoints {
    &.#{$bp} {
      --border-radius: var(--brk-button-#{$variant}-#{$bp}-border-radius);
      --font-size: var(--brk-button-#{$variant}-#{$bp}-label-font-size);
      --height: var(--brk-button-#{$variant}-#{$bp}-height);
      --padding: 0 var(--brk-button-#{$variant}-#{$bp}-padding-horizontal);
    }
  }
}
/*
.primary {
  @include variantTokens(primary);
}

.secondary {
  @include variantTokens(secondary);
}
*/
.tertiary {
  @include variantTokens(tertiary);
}

.brk-button {
  background-color: var(--background-color);
  border: var(--border);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  color: var(--color);
  cursor: pointer;
  display: inline-flex;
  flex-direction: column;
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  height: var(--height);
  justify-content: center;
  letter-spacing: var(--letter-spacing);
  line-height: var(--line-height);
  margin: 0;
  outline: var(--outline);
  outline-offset: var(--outline-offset);
  padding: var(--padding);
  text-decoration: var(--text-decoration);
  text-transform: var(--text-transform);

  &:active {
    background-color: var(--background-color-active);
    border-color: var(--border-color-active);
    box-shadow: var(--box-shadow-active);
    color: var(--color-active);
  }

  &:focus-visible {
    background-color: var(--background-color-focus);
    border-color: var(--border-color-focus);
    box-shadow: var(--box-shadow-focus);
    color: var(--color-focus);
    outline-color: var(--outline-color-focus);
  }

  &:hover {
    background-color: var(--background-color-hover);
    border-color: var(--border-color-hover);
    box-shadow: var(--box-shadow-hover);
    color: var(--color-hover);
  }
}
</style>