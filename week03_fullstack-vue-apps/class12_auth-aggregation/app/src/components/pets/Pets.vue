<template>
  <section class="pets">
    <h2>My Pets</h2>
    <h3>Add a New Pet</h3>
    <AddPet :onAdd="handleAdd"/>
    <h3>Current Pets</h3>
    <PetList v-if="pets && pets.length > 0" :pets="pets"/>
    <p v-else>Add a pet to get started!</p>
  </section>
</template>

<script>
import api from '../../services/api';
import AddPet from './AddPet';
import PetList from './PetList';

export default {
  data() {
    return {
      pets: null
    };
  },
  components: {
    AddPet,
    PetList
  },
  created() {
    api.getPets()
      .then(pets => {
        this.pets = pets;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleAdd(pet) {
      return api.addPet(pet)
        .then(saved => {
          this.pets.push(saved);
        });
    }
  }
  
};
</script>

<style lang="postcss" scoped>

</style>

