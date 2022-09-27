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
  --outline-color-focus: var(--brk-interactive-outline-color-focus-standard);
  --outline-offset: var(--brk-interactive-outline-offset);
  --padding: var(--brk-button-padding-top) var(--brk-button-padding-right) var(--brk-button-padding-bottom) var(--brk-button-padding-left);

  &.inverted {
    --outline-color-focus: var(--brk-button-outline-color-focus-inverted);
  }
}

@mixin variantTokens($variant) {
  --background-color: var(--brk-button-#{$variant}-background-color-default-standard);
  --background-color-active: var(--brk-button-#{$variant}-background-color-active-standard);
  --background-color-focus: var(--brk-button-#{$variant}-background-color-focus-standard);
  --background-color-hover: var(--brk-button-#{$variant}-background-color-hover-standard);
  --border: var(--brk-button-#{$variant}-border-width) solid var(--brk-button-#{$variant}-border-color-default-standard);
  --border-color-active: var(--brk-button-#{$variant}-border-color-active-standard);
  --border-color-focus: var(--brk-button-#{$variant}-border-color-focus-standard);
  --border-color-hover: var(--brk-button-#{$variant}-border-color-hover-standard);
  --border-radius: var(--brk-button-#{$variant}-sm-border-radius);
  --box-shadow: var(--brk-button-#{$variant}-box-shadow-default-standard);
  --box-shadow-focus: var(--brk-button-#{$variant}-box-shadow-focus-standard);
  --box-shadow-hover: var(--brk-button-#{$variant}-box-shadow-hover-standard);
  --color: var(--brk-button-#{$variant}-font-color-default-standard);
  --color-active: var(--brk-button-#{$variant}-font-color-active-standard);
  --color-focus: var(--brk-button-#{$variant}-font-color-focus-standard);
  --color-hover: var(--brk-button-#{$variant}-font-color-hover-standard);
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
    --background-color: var(--brk-button-#{$variant}-background-color-default-inverted);
    --background-color-active: var(--brk-button-#{$variant}-background-color-active-inverted);
    --background-color-focus: var(--brk-button-#{$variant}-background-color-focus-inverted);
    --background-color-hover: var(--brk-button-#{$variant}-background-color-hover-inverted);
    --border: var(--brk-button-#{$variant}-border-width) solid var(--brk-button-#{$variant}-border-color-default-inverted);
    --border-color-active: var(--brk-button-#{$variant}-border-color-active-inverted);
    --border-color-focus: var(--brk-button-#{$variant}-border-color-focus-inverted);
    --border-color-hover: var(--brk-button-#{$variant}-border-color-hover-inverted);
    --box-shadow: var(--brk-button-#{$variant}-box-shadow-default-inverted);
    --box-shadow-focus: var(--brk-button-#{$variant}-box-shadow-focus-inverted);
    --box-shadow-hover: var(--brk-button-#{$variant}-box-shadow-hover-inverted);
    --color: var(--brk-button-#{$variant}-font-color-default-inverted);
    --color-active: var(--brk-button-#{$variant}-font-color-active-inverted);
    --color-focus: var(--brk-button-#{$variant}-font-color-focus-inverted);
    --color-hover: var(--brk-button-#{$variant}-font-color-hover-inverted);
    --outline-color-focus: var(--brk-interactive-outline-color-focus-inverted);
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