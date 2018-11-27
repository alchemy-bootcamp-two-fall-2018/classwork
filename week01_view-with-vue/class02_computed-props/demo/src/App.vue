<template>
  <div id="app">
    <Header 
      v-bind:sort="sort" 
      v-bind:filter="filter" 
      v-bind:types="animalTypes"/>

    <Animals v-bind:animals="sortedAnimals"/>
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
      // types: animalsApi.getTypes(),
      filter: {
        weight: 0,
        type: '',
        isPet: false
      },
      sort: {
        field: 'name',
        direction: 1
      }
    };
  },
  components: {
    Header,
    Animals
  },
  computed: {
    animalTypes() {
      const types = [];
      this.animals.forEach(animal => {
        if(!types.includes(animal.type)) {
          types.push(animal.type);
        }
      });
      return types;
    },
    filteredAnimals() {
      return this.animals.filter(animal => {
        const hasWeight = !this.filter.weight || animal.weight >= this.filter.weight;
        const hasType = !this.filter.type || animal.type === this.filter.type;
        const isPet = !this.filter.isPet || animal.isPet;
        return hasWeight && hasType && isPet;
      });
    },
    sortedAnimals() {
      const field = this.sort.field;
      const direction = this.sort.direction;

      return this.filteredAnimals.slice().sort((a, b) => {
        if(a[field] > b[field]) {
          return 1 * direction;
        }

        if(a[field] < b[field]) {
          return -1 * direction;
        }

        return 0;
      });
    }
  }
};

</script>

<style>

</style>
