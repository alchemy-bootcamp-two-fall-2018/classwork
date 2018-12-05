<template>
  <form @submit.prevent="handleSubmit">
    <p>
      <label>Name:</label>
      <input v-model="student.name" require>
    </p>
    <p>
      <label>Start Date:</label>
      <input type="date" 
        v-model="student.startDate" 
        required>
    </p>

    <p>
      <label>Track:</label>
      <select v-if="tracks" 
        v-model="student.track" 
        required
      >
        <option v-for="(display, key) in tracks"
          :key="key"
          :value="key"
        >
          {{display}}
        </option>
      </select>
    </p>

    <button>Add</button>
  </form>
</template>

<script>
import api from '../../services/api';

export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      student: {
        name: '',
        startDate: '',
        track: 'js'
      },
      tracks: null
    };
  },
  created() {
    this.tracks = api.getTracks();
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

<style lang="postcss" scoped>

label {
  display: inline-block;
  width: 60px;
}

input, select {
  width: 150px;
  font-size: 1.05em;
}
</style>

