<template>
  <ul>
    <Animal v-for="animal in animals"
      @click.native="onSelect(animal)"
      :key="animal.name"
      :animal="animal"/>
  </ul>
</template>

<script>
import Animal from './Animal.vue';

export default {
  props: {
    animals: Array,
    onSelect: Function
  },
  components: {
    Animal
  }
};
</script>

<style scoped lang="postcss">
@import '../styles.css';
ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($card-size, 1fr));
  list-style-type: none;
  margin: 0;
  padding: 0;
  max-height: 50vh;
  overflow-y: auto;
}
</style>
