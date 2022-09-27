<template>
  <picture
    :class="sizing"
  >
    <source
      v-if="webpSrc"
      class="content"
      :sizes="size"
      :srcset="image(webpSrc)"
      type="image/webp"
    />
    <img :srcset="image(src)" loading="lazy" :alt="alt" :sizes="size"
    ref="observedElement"
    @brk-resized="resizedCallback" />
  </picture>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { ro } from "../../helpers/ComponentResize";

const props = defineProps({
  sizing: {
    type: String,
  },
  src: {
    type: Array,
    required: true,
  },
  webpSrc: {
    type: Array,
  },
  alt: {
    type: String,
    default: "",
  },
});

const size = ref();
const observedElement = ref();

function image(imgSrc) {
  let img = "";
  imgSrc.forEach((image) => {
    img += image.path + " " + image.width + ",";
  });
  return `${img.slice(0, -1)}`;
}

function resizedCallback(e) {
  size.value = e.detail.width + "px";
}

onMounted(() => {
  ro.observe(observedElement.value);
});
</script>

<style lang="scss" scoped>
picture {
  display: block;
  &:not(.vertical) {
    width: 100%;
  }
}
img {
  display: block;
  width: 100%;
}
.vertical {
  height: 100%;
  img {
    height: 100%;
    min-width:1px;
    width: auto;
  }
}
.cover {
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
.contain {
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
}
</style>
