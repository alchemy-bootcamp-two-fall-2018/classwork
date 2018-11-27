<template>
  <div id="app">
    <Header v-bind:filter="filter"/>
    {{filter}}
    <Animals v-bind:animals="filteredAnimals"/>
  </div>
</template>

<script>
import animalsApi from './services/animalsApi';
import Animals from './components/Animals.vue';
import Header from './components/Header.vue';

export default {
  data() {
    return {
      animals: animalsApi.getAnimals(),
      filter: {
        weight: 0
      }
    };
  },
  components: {
    Header,
    Animals
  },
  computed: {
    filteredAnimals() {
      return this.animals.filter(animal => {
        return animal.weight > this.filter.weight;
      });
    }
  }
};

</script>

<style>

</style>
