<template>
  <button class="main">
    <font-awesome-icon
      :icon="'fa-solid fa-volume-' + (sound ? 'up' : 'xmark')"
      @click="$emit('toggle')"
      class="main"
    />
  </button>
</template>

<script>
export default {
  props: ["sound"],
};
</script>

<style scoped>
.main {
  all: unset;
  padding: 8px;
  position: fixed;
  bottom: 12px;
  left: 12px;
  border-radius: 50%;
  background-color: var(--button-color);
  width: 20px;
  height: 20px;
}
.main:hover {
  cursor: pointer;
}
</style>
