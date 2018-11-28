<template>
  <div id="app">
    <Header 
      :sort="sort" 
      :filter="filter" 
      :types="animalTypes"/>

    <AddAnimal 
      :onAdd="handleAdd"
      :animalTypes="animalTypes"/>

    <Animals 
      :animals="sortedAnimals" 
      :onSelect="handleSelect"/>

    <AnimalDetail 
      :animal="selected"
      :animalTypes="animalTypes"
      :onEdit="handleEdit"/>

  </div>
</template>

<script>
import animalsApi from './services/animalsApi';
import Header from './components/Header.vue';
import Animals from './components/Animals.vue';
import AnimalDetail from './components/AnimalDetail.vue';
import AddAnimal from './components/AddAnimal.vue';

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
      },
      selected: null
    };
  },
  components: {
    Header,
    Animals,
    AnimalDetail,
    AddAnimal
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
  },
  methods: {
    handleSelect(animal) {
      this.selected = animal;
    },
    handleAdd(animal) {
      this.animals.push(animal);
      this.handleSelect(animal);
    },
    handleEdit(old, animal) {
      const index = this.animals.indexOf(old);
      this.animals.splice(index, 1, animal);
      this.handleSelect(animal);
    }
  }
};

</script>

<style>

</style>
