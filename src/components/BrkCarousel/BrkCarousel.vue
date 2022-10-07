<template>
  <div class="brk-carousel">
    <div class="glide" ref="glideElement">
      <div class="glide__arrows" data-glide-el="controls">
        <button
          class="glide__arrow glide__arrow--left"
          data-glide-dir="|<"
          :disabled="glideArrows.disableLeft"
          :aria-label="accessibilityTextLeft"
        >
        <!-- this is a test -->
          &lt;
        </button>
        <button
          class="glide__arrow glide__arrow--right"
          data-glide-dir="|>"
          :disabled="glideArrows.disableRight"
          :aria-label="accessibilityTextRight"
        >
          &gt;
        </button>
      </div>

      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li class="glide__slide" v-for="slot in slotList" :key="slot">
            <slot :name="slot"></slot>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import Glide from "@glidejs/glide";
import { ref, onMounted, reactive, useSlots, computed } from "vue";

const slots = useSlots();
const props = defineProps({
  nbrPerView: {
    type: Object,
  },
  accessibilityTextLeft: {
    type: String,
  },
  accessibilityTextRight: {
    type: String,
  },
});

const slotList = computed(() => {
  return Object.keys(slots);
});

const glideArrows = reactive({
  disableLeft: true,
  disableRight: true,
});
const glideElement = ref();

onMounted(() => {
  const config = {
    type: "slider",
    perView: props.nbrPerView.desktop,
    focusAt: 0,
    perSwipe: "|",
    rewind: false,
    bound: true,
    breakpoints: {
      800: {
        perView: props.nbrPerView.tablet,
      },
      480: {
        perView: props.nbrPerView.mobile,
      },
    },
  };
  let glide = new Glide(glideElement.value, config);
  glide.mount({ glideArrowDisabler });
});

function glideArrowDisabler(Glide, Components, Events) {
  return {
    mount() {
      //Fonctionne seulement si rewind est false
      if (Glide.settings.rewind) {
        return;
      }

      Glide.on(["mount.after", "run"], () => {
        // Filter out arrows_control
        for (let controlItem of Components.Controls.items) {
          if (controlItem.className !== "glide__arrows") {
            continue;
          }

          // Fleche de gauche: Ajouter/retirer l'attribut disabled
          if (Glide.index === 0) {
            glideArrows.disableLeft = true; // Si debut, cacher la fleche
          } else {
            glideArrows.disableLeft = false; // Afficher la fleche sinon
          }

          // Fleche de droite: Ajouter/retirer l'attribut disabled
          if (
            Glide.index ===
            Components.Sizes.length - Glide.settings.perView
          ) {
            glideArrows.disableRight = true; // Si derniere slide, cacher la fleche
          } else {
            glideArrows.disableRight = false; // Afficher la fleche sinon
          }
        }
      });
    },
  };
}
</script>

<style lang="scss" scoped>
@import "@glidejs/glide/dist/css/glide.core.min.css";
@import "@glidejs/glide/dist/css/glide.theme.min.css";

.brk-carousel {
  .glide__slide {
    height: auto;
  }
  
  .glide__arrow {
    color: black;
  }
  
  .glide__arrow:focus {
    outline: solid 1px;
  }
  
  button[disabled] {
    display: none;
  }
}

</style>
