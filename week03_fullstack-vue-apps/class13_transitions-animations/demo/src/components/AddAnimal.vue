<template>
  <section>
      <button v-on:click="show = !show">Add an Animal</button>
      <transition name="fade">
        <div v-if="show">
          <h2>Add a new Animal</h2>
          <AnimalForm
            :animalTypes="animalTypes"
            :onAdd="handleAdd"
            :onCancel="() => show = false"/>
          </div>
      </transition>
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
      console.log(animal);
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
.fade-enter-active, .fade-leave-active {
  transition: all 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  /* transform: translateY(-300px);  */
  margin-top: -360px;
}
</style>

