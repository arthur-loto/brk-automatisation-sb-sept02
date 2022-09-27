<template>
  <div class="card-medium-density-list">
    <slot />
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.card-medium-density-list {
  --grid-space-x: 1.5rem;
  --grid-space-y: 1.25rem;
  --wrapper-border: 2px solid lightgrey;
  --wrapper-border-radius: 35px;

  border: var(--wrapper-border);
  border-radius: var(--wrapper-border-radius);
  display: grid;
  grid-gap: var(--grid-space-y) var(--grid-space-x);
  grid-template-columns: 1fr 1fr;
  list-style: none;
  margin: 0;
  padding: 25px;
}
</style>
