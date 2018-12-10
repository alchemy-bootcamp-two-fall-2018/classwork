<template>
  <ul v-if="pets">
    <Pet v-for="pet in pets" 
      :key="pet.id"
      :pet="pet"/>
  </ul>

</template>

<script>
import Pet from './Pet';

export default {
  props: {
    pets: null
  },
  components: {
    Pet
  }
};
</script>

<style lang="postcss" scoped>

</style>

