<template>
  <form @submit.prevent="onAdd(image)">
    <FormControl label="Title">
      <input v-model="image.title" required>
    </FormControl>
    <FormControl label="Url">
      <input v-model="image.url" required>
    </FormControl>
    <FormControl>
      <button>Add</button>
    </FormControl>
  </form>
</template>

<script>
import FormControl from '../../shared/FormControl';

export default {
  data() {
    return {
      image: {
        title: '',
        url: ''
      }
    };
  },
  props: {
    onAdd: Function
  },
  components: {
    FormControl
  }
};

</script>

<style lang="postcss" scoped>

</style>
