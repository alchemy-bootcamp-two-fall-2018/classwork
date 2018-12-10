<template>
  <section class="pets">
    <h2>Students</h2>
    <AddPet :onAdd="handleAdd"/>
    <PetList :pets="pets"/>
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
      .then(students => {
        this.students = students;
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

