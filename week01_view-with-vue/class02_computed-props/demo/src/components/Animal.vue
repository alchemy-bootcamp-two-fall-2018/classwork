<template>
  <li>
    <img v-bind:src="animal.img" />
    <div class="info">
      <h3>{{ animal.name }}</h3>
      <p>size: {{ animal.size }}</p>
      <p>weight: {{ animal.weight }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    animal: Object
  }
};
</script>

<style scoped>
img {
  width: 100%;
  max-width: 300px;
}
</style>
