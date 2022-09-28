<template>
  <div class="text">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  textContent: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.text {
  --bold-weight: bold;
  --color: var(--brk-card-hero-standard-body-font-color);
  --font-family: var(--brk-card-hero-lg-body-font-family);
  --height: var(--brk-card-hero-lg-body-line-height);
  --italic-style: italic;
  --link-color: hotpink;
  --link-active-color: blueviolet;
  --link-hover-color: deeppink;
  --link-visited-color: palevioletred;
  --list-margin: 16px 0 16px;
  --list-elements-margin: 5px 0;
  --list-padding-left: 40px;
  --list-style-type-ordered: decimal;
  --list-style-type-unordered: circle; 
  --margin: 10px 0;
  --padding: 0;
  --paragraph-margin: 16px 0;
  --size: var(--brk-card-hero-md-body-font-size);
  --spacing: var(--brk-card-hero-heading-letter-spacing);
  --text-transform: var(--brk-card-hero-heading-text-case);
  --weight: var(--brk-card-hero-heading-font-weight);

  color: var(--color);
  font-family: var(--font-family);
  font-size: var(--size);
  font-weight: var(--weight);
  letter-spacing: var(--spacing);
  line-height: var(--height);
  margin: var(--margin);
  padding: var(--padding);
  text-transform: var(--text-transform);

  :deep(p) {
    margin: var(--paragraph-margin);
  }
  :deep(strong) {
    font-weight: var(--bold-weight);
  }
  :deep(em) {
    font-style: var(--italic-style);
  }
  :deep(a) {
    color: var(--link-color);
  }
  :deep(a:visited) {
    color: var(--link-visited-color);
  }
  :deep(a:hover) {
    color: var(--link-hover-color);
  }
  :deep(a:active) {
    color: var(--link-active-color);
  }
  :deep(ul) {
    list-style-type: var(--list-style-type-unordered);
    margin: var(--list-margin);
    padding-left: var(--list-padding-left);
  }
  :deep(ol) {
    list-style-type: var(--list-style-type-ordered);
    margin: var(--list-margin);
    padding-left: var(--list-padding-left);
  }
  :deep(li) {
    margin: var(--list-elements-margin);
  }
}
</style>
