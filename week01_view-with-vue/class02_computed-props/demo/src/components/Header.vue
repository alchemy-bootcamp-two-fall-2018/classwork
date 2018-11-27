<template>
  <header>
    <label>
      Weight:
      <input type="number" 
        v-model.number="filter.weight" 
        step="100"
      >
    </label>

    <label>
      Type:
      <select v-model="filter.type">
        <option value="">All</option>
        <option 
          v-for="type in types" 
          v-bind:key="type"
          v-bind:value="type">
          {{type}}
        </option>
      </select>
    </label>

    <label>
      IsPet:
      <input type="checkbox" v-model="filter.isPet">
    </label>
  </header>
</template>

<script>
import animalsApi from '../services/animalsApi';

export default {
  data() {
    return {
      types: animalsApi.getTypes()
    };
  },
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
