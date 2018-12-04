<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="student.name" require>
    <button>Add</button>
  </form>
</template>

<script>
export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      student: {
        name: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.student)
        .then(() => {
          this.student = { name: '' };
        });
    }
  }
};
</script>

<style>

</style>
