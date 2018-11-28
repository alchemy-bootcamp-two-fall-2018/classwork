<template>
  <form @submit.prevent="onAdd(animal)">
    <label>
      <span>Name:</span>
      <input v-model="animal.name" required>
    </label>
    <label>
      <span>Size: </span>
      <input v-model="animal.size" required>
    </label>
    <label>
      <span>isPet?</span>
      <input type="checkbox" v-model="animal.isPet">
    </label>
    <label>
      <span>Type:</span>
      <select v-model="animal.type" required>
        <option value="" disabled>Select a Type</option>
        <option 
          v-for="type in animalTypes" 
          v-bind:key="type"
          v-bind:value="type">
          {{type}}
        </option>
      </select>
    </label>
    <label>
      <span>Weight:</span>
      <input type="number" v-model.number="animal.weight" step="10" required>
    </label>
    <label>
      <span>Image:</span>
      <input v-model="animal.img" required>
    </label>
    <label>
      <span>Description:</span>
      <textarea v-model.trim="animal.description"></textarea>
    </label>
    <label>
      <span></span>
      <button type="submit">{{ animalToUpdate ? 'Update' : 'Add'}}</button>
      <button type="button" @click="onCancel">Cancel</button>
    </label>
  </form>
</template>

<script>
export default {
  data() {
    // we can access props in our data function
    const update = this.animalToUpdate || {};
    return {
      animal: {
        name: update.name || '',
        size: update.size || '',
        isPet: update.isPet === false ? false : true,
        type: update.type || '',
        weight: update.weight || 0,
        img: update.img || '',
        description: update.description || ''
      }
    };
  },
  props: {
    animalTypes: Array,
    onAdd: Function,
    onCancel: Function,
    animalToUpdate: Object
  }
};
</script>

<style lang="postcss" scoped>
section {
  background: #aaa;
  padding: 10px;

  label {
    display: flex;
    padding: 3px;

    span {
      display: inline-block;
      width: 90px;
    }

    textarea, input, select {
      width: 200px;
    }

    textarea {
      height: 75px;
    }
  }
}
</style>

