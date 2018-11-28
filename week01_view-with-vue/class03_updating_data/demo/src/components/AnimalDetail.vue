<template>
  <section>
    <div v-if="edit">
      <h2>Edit {{animal.name}}</h2>
      <AnimalForm
        :animalToUpdate="animal"
        :animalTypes="animalTypes"
        :onAdd="handleEdit"
        :onCancel="() => edit = false"/>
    </div>
    <AnimalViewer 
      v-if="!edit"
      :animal="animal"
      :onEdit="() => edit = true"/>
  </section>
</template>

<script>
import AnimalViewer from './AnimalViewer';
import AnimalForm from './AnimalForm';

export default {
  data() {
    return {
      edit: false
    };
  },
  props: {
    animal: Object,
    animalTypes: Array,
    onEdit: Function
  },
  components: {
    AnimalViewer,
    AnimalForm
  },
  methods: {
    handleEdit(updatedAnimal) {
      this.edit = false;
      this.onEdit(this.animal, updatedAnimal);
    }
  }
};
</script>

<style scoped lang="postcss">
  section {
    padding: 10px;
    color: white;
  }

</style>
