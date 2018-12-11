<template>
  <form @submit.prevent="handleSubmit">
    <label>Name:</label>
    <input v-focus v-model="pet.name" require>
    <label>Type:</label>
    <input v-focus v-model="pet.type" require>
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

form {
  border: 1px solid #aaa;
  padding: 10px;
}

input, button {
  margin: 0 5px;
}

input {
  width: 125px;
  font-size: 1.05em;
}
</style>

