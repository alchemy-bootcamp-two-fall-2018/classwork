<template>
  <section>
    <div v-if="!show">
      <button @click="show = true">Add an Animal</button>
    </div>
    <div v-else>
      <h2>Add a new Animal</h2>
      <AnimalForm
        :animalTypes="animalTypes"
        :onAdd="handleAdd"
        :onCancel="() => show = false"/>
    </div>
  </section>
</template>

<script>
import AnimalForm from './AnimalForm';

export default {
  data() {
    return {
      show: false
    };
  },
  components: {
    AnimalForm
  },
  props: {
    animalTypes: Array,
    onAdd: Function
  },
  methods: {
    handleAdd(animal) {
      this.show = false;
      this.onAdd(animal);
    }
  }
};
</script>

<style lang="postcss" scoped>
section {
  background: #aaa;
  padding: 10px;
}
</style>

