<template>
  <form @submit.prevent="handleSubmit">
    <p>
      <label>Name:</label>
      <input v-focus v-model="student.name" require>
    </p>
    <p>
      <label>Type:</label>
      <input v-focus v-model="student.type" require>
    </p>

    <button>Add</button>
  </form>
</template>

<script>

function initPet() {
  return {
    name: '',
    type: ''
  };
}


export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      pet: initPet()
    };
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.pet)
        .then(() => {
          this.pet = initPet();
        });
    }
  }
};
</script>

<style lang="postcss" scoped>

label {
  display: block;
}

input, select {
  width: 150px;
  font-size: 1.05em;
}
</style>

