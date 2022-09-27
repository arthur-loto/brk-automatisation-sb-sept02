<template>
  <component :is="headerSize" class="title" :class="classes">
    {{ title }}
  </component>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  title: {
    type: String,
  },
  alignment: {
    type: String,
  },
  headerSize: {
    type: String,
  },
  nbrLimitedLines: {
    type: Number,
  },
  isHidden: {
    type: Boolean,
  },
});

const classes = computed(() => {
  let hideTitle = "";
  if (props.isHidden) {
    hideTitle = "visually-hidden";
  }
  let isLimited = "";
  if (props.nbrLimitedLines != null && props.nbrLimitedLines > 0) {
    isLimited = "limited";
  }
  return `
  ${props.alignment} 
  ${hideTitle}
  ${isLimited}
  `;
});
</script>

<style lang="scss" scoped>
/* Mixin */
@mixin limitLines($lineCount) {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: $lineCount;
}

@mixin visually-hidden() {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important; // Fix for https://github.com/twbs/bootstrap/issues/25686
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

.title {
  --nbr-limited-lines: v-bind(nbrLimitedLines);
  --title-color: var(--brk-card-hero-heading-font-color-standard);
  --title-family: var(--brk-card-hero-lg-heading-font-family);
  --title-height: var(--brk-card-hero-lg-heading-line-height);
  --title-margin: 10px 0;
  --title-margin-right: var(--brk-card-hero-heading-margin-right);
  --title-padding: 0;
  --title-size: var(--brk-card-hero-sm-heading-font-size);
  --title-spacing: var(--brk-card-hero-lg-heading-letter-spacing);
  --title-transform: var(--brk-card-hero-heading-text-case);
  --title-weight: var(--brk-card-hero-heading-font-weight);

  @media (min-width: 768px) {
    --title-size: var(--brk-card-hero-md-heading-font-size);
  }
  @media (min-width: 1024px) {
    --title-size: var(--brk-card-hero-lg-heading-font-size);
  }
  /*  @media (min-width: 1200px) {
    --title-size: var(--brk-card-hero-xl-heading-font-size);
  }*/

  color: var(--title-color);
  font-family: var(--title-family);
  font-size: var(--title-size);
  font-weight: var(--title-weight);
  letter-spacing: var(--title-spacing);
  line-height: var(--title-height);
  margin: var(--title-margin);
  margin-right: var(--title-margin-right);
  padding: var(--title-padding);
  text-transform: var(--title-transform);

  &.left {
    text-align: left;
  }
  &.right {
    text-align: right;
  }
  &.center {
    text-align: center;
  }

  &.visually-hidden {
    @include visually-hidden();
  }
  &.limited {
    @include limitLines(var(--nbr-limited-lines));
  }
}
</style>