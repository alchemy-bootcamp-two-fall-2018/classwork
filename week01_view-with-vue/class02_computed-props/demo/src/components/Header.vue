<template>
  <header>
    <label>
      Weight:
      <input type="number" v-model.number="filter.weight" step="100">
    </label>
  </header>
</template>

<script>
export default {
  props: {
    filter: Object
  }
};
</script>

<style scoped>
header {
  background: steelblue;
  color: white;
  padding: 10px;
}

</style>
