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
        weight: 0,
        type: '',
        isPet: false
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
        const hasWeight = !this.filter.weight || animal.weight >= this.filter.weight;
        const hasType = !this.filter.type || animal.type === this.filter.type;
        const isPet = !this.filter.isPet || animal.isPet;
        return hasWeight && hasType && isPet;
      });
    }
  }
};

</script>

<style>

</style>
