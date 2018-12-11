<template>
    <li>{{pet.name}} the {{pet.type}}</li>
</template>

<script>
export default {
  props: {
    pet: null
  }
};
</script>

<style lang="postcss" scoped>
li {
  padding: 10px 0;
}
</style>

