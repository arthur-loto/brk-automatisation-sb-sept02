<template>
  <div class="brk-card-secondary-info-text" :class="size" :style="bgStyle">
    <p class="info">
      <span class="title">{{ text }}</span>
      <span class="postTitle" v-if="subText">
        {{ subText }}
      </span>
    </p>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";

const props = defineProps({
  backgroundColor: {
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
  subText: {
    type: String,
  },
  size: {
    type: String,
    default: "sm",
  },
});

const bgStyle = computed(() => {
  return props.backgroundColor
    ? "background-color:" + props.backgroundColor
    : "";
});
</script>

<style lang="scss" scoped>
.brk-card-secondary-info-text {
  --background-color: white;
  --color-main-text: blue;
  --color-sub-text: black;
  --font-size-sub-text: 10px;
  --font-size-text: 20px;
  --height: var(--brk-jackpot-hero-sm-height);
  --letter-spacing: 1px;
  --margin: 0px;
  --padding: 0 0 0 0;
  --text-weight: 600;
  --title-font-family: Graphik;

  $breakpoints: (md, lg, xl);
  @each $bp in $breakpoints {
    &.#{$bp} {
      --height: var(--brk-jackpot-hero-#{$bp}-height);
    }
  }

  background-color: var(--background-color);
  height: var(--height);
  margin: var(--margin);

  .title {
    color: var(--color-main-text);
    font-size: var(--font-size-text);
    font-weight: var(--text-weight);
    margin: var(--margin);
    padding: var(--padding);
  }
  .postTitle {
    color: var(--color-sub-text);
    font-size: var(--font-size-sub-text);
    font-weight: var(--text-weight);
    letter-spacing: var(--letter-spacing);
    margin: var(--margin);
    padding: var(--padding);
  }
  .info {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-family: var(--title-font-family);
    height: 100%;
    justify-content: center;
    margin: var(--margin);
  }
}
</style>
