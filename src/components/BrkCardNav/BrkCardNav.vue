<template>
  <div class="brk-card-nav" :class="classes">
    <button class="btn-open-menu" :aria-label="ariaLabel" @click="toggleNav">
      <span class="material-icons">more_horiz</span>
    </button>
    <ul>
      <li v-for="link in links" :key="link">
        <a :href="link.url" :target="link.newWindow ? '_blank' : null">
          {{ link.label }}
          <span class="material-icons" aria-hidden="true">chevron_right</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  btnOpenLabel: { type: String, default: 'Ouvrir' },
  btnCloseLabel: { type: String, default: 'Fermer' },
  links: { type: Object, required: true }
});

let isVisible = ref(false);
const classes = computed(() => {
    return isVisible.value ? 'is-visible' : '';
});
const ariaLabel = computed(() => {
    return isVisible.value ? props.btnCloseLabel : props.btnOpenLabel;
});

function toggleNav() {
  console.log("toggling nav", isVisible.value);
  isVisible.value = !isVisible.value;
}
</script>

<style scoped lang="scss">
.brk-card-nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1;

  .btn-open-menu {
    align-items: center;
    background: transparent;
    border: 0;
    border-radius: 50%;
    box-shadow: 0 0 0 transparent;
    color: black;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: 48px;
    justify-content: center;
    padding: 0;
    position: absolute;
    right: 1rem;
    top: 1rem;
    transition: box-shadow ease-in-out 0.1s, background-color ease-in-out 0.1s;
    width: 48px;
  }

  .btn-open-menu:hover,
  .btn-open-menu:focus-visible,
  &.is-visible .btn-open-menu {
    background: #fff;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  .btn-open-menu:focus-visible {
    outline: 2px solid blue;
    outline-offset: 4px;
  }

  ul {
    background: white;
    border-radius: 15px;
    box-shadow: -5px 5px 8px rgba(0, 0, 0, 0.5);
    display: none;
    list-style: none;
    margin: 0;
    margin-right: 1rem;
    margin-top: calc(1rem + 48px + 0.5rem); /* à revoir avec les variables */
    min-width: 10rem;
    overflow: hidden;
    padding: 0;
    width: 60%;
  }

  &.is-visible ul {
    display: block;
  }

  li + li::before {
    background-color: red;
    content: "";
    display: block;
    height: 1px;
    margin: 0 15px;
  }
  a {
    background: white;
    color: black;
    display: block;
    padding: 10px 15px;
    position: relative;
    text-decoration: none;
  }
  a:hover,
  a:focus-visible {
    background: gray;
  }

  a:focus-visible {
    outline: 2px solid black;
    outline-offset: -10px;
  }

  a .material-icons {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
}

.material-icons {
  direction: ltr;
  display: inline-block;
  font-family: "Material Icons";
  font-size: 24px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: 1;
  text-transform: none;
  white-space: nowrap;
  word-wrap: normal;
  -webkit-font-smoothing: antialiased;
}
</style>