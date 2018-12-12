<template>
  <transition-group name="flip-list" tag="ul">
    <Animal v-for="animal in animals"
      @click.native="onSelect(animal)"
      :key="animal.name"
      :animal="animal"/>
  </transition-group>
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
  height: calc(100vh - 150px);
  width: 50vw;
  overflow-y: auto;
}

.flip-list-move {
  transition: transform 1s;
}
</style>
