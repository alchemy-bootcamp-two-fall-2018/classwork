<template>
  <ul>
    <Animal v-for="animal in animals"
      v-bind:key="animal.name"
      v-bind:animal="animal"/>
  </ul>
</template>

<script>
import animalsApi from '../services/animalsApi';
import Animal from './Animal.vue';

export default {
  data() {
    return {
      animals: animalsApi.getAnimals()
    };
  },
  components: {
    Animal
  }
};
</script>

<style scoped>

</style>
