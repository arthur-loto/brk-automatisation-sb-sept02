<template>
  <div class="brk-card-secondary-info-logo" :class="size" :style="bgStyle">
    <BrkImage
      class="image"
      v-if="hasImage"
      v-bind="brkImageArgs"
      sizing="vertical"
    ></BrkImage>
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
const hasImage = computed(() => {
  return props.brkImageArgs && typeof props.brkImageArgs === "object";
});
</script>

<style lang="scss" scoped>
.brk-card-secondary-info-logo {
  --height: var(--brk-jackpot-hero-sm-height);

  $breakpoints: (md, lg, xl);
  @each $bp in $breakpoints {
    &.#{$bp} {
      --height: var(--brk-jackpot-hero-#{$bp}-height);
    }
  }

  align-items: center;
  background-color: #0b5db7;
  color: white;
  display: flex;
  flex-direction: row;
  height: var(--height);
  justify-content: center;
  margin: 0;

  .image {
    height: 100%;
    justify-content: center;
    min-width: 10px;
    width: auto;
  }
}
</style>
