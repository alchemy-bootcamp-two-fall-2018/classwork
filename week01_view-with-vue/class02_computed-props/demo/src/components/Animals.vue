<template>
  <ul>
    <Animal v-for="animal in animals"
      v-bind:key="animal.name"
      v-bind:animal="animal"/>
  </ul>
</template>

<script>
import Animal from './Animal.vue';

export default {
  props: {
    animals: Array
  },
  components: {
    Animal
  }
};
</script>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  list-style-type: none;
  margin: 0;
  padding: 0;
  }

</style>
