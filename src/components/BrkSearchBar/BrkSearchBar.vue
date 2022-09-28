<template>
  <form class="brk-search-bar">
    <fieldset>
      <label class="search-label" for="search">
        <span class="visually-hidden">{{ invisibleLabel }}</span>
        <img class="search-icon" src="/assets/search-icon.png" alt="" />
      </label>
      <input
        id="search"
        class="search-input"
        type="text"
        :placeholder="placeholder"
      />
    </fieldset>
  </form>
</template>

<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  invisibleLabel: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
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

.brk-search-bar {
  --icon-height: 20px;
  --icon-width: 20px;
  --placeholder-color: #495057;
  --placeholder-opacity: 75%;
  --search-input-bg-color: white;
  --search-input-border: 1px solid;
  --search-input-border-color: #ced4da;
  --search-input-border-radius: 3px;
  --search-input-color: #495057;
  --search-input-focus-bg-color: ivory;
  --search-input-focus-border-color: black;
  --search-input-focus-outline: 0;
  --search-input-font: var(--brk-card-hero-lg-heading-font-family);
  --search-input-font-size: 14px;
  --search-input-font-weight: 400;
  --search-input-height: 40px;
  --search-input-padding: 9px 9px 9px 35px;

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .search-label {
    left: 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .visually-hidden {
    @include visually-hidden();
  }

  .search-icon {
    display: block;
    height: var(--icon-height);
    width: var(--icon-width);
  }

  .search-input {
    background: var(--search-input-bg-color);
    border: var(--search-input-border);
    border-color: var(--search-input-border-color);
    border-radius: var(--search-input-border-radius);
    box-sizing: border-box;
    color: var(--search-input-color);
    display: block;
    font-family: var(--search-input-font);
    font-size: var(--search-input-font-size);
    font-weight: var(--search-input-font-weight);
    height: var(--search-input-height);
    padding: var(--search-input-padding);
    width: 100%;

    &:focus {
      background: var(--search-input-focus-bg-color);
      border-color: var(--search-input-focus-border-color);
      outline: var(--search-input-focus-outline);
    }

    &::placeholder {
      color: var(--placeholder-color);
      opacity: var(--placeholder-opacity);
    }
  }
}
</style>