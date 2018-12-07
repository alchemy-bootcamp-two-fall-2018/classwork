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
        v-model="student.trackId" 
        required
      >
        <option value="-1" disabled>Select a Track</option>
        <option v-for="track in tracks"
          :key="track.id"
          :value="track.id"
        >
          {{track.name}} ({{track.shortName}})
        </option>
      </select>
    </p>

    <button>Add</button>
  </form>
</template>

<script>
import api from '../../services/api';

function initStudent() {
  return {
    name: '',
    startDate: '',
    trackId: -1,
  };
}

export default {
  props: {
    onAdd: Function
  },
  data() {
    return {
      student: initStudent(),
      tracks: null
    };
  },
  created() {
    api.getTracks()
      .then(tracks => {
        this.tracks = tracks;
      });
  },
  methods: {
    handleSubmit() {
      this.onAdd(this.student)
        .then(() => {
          this.student = initStudent();
        });

      // If this component was on own app page:
      // api.addStudent(this.student)
      //   .then(saved => {
      //     this.$router.push(`/students/${saved.id}`);
      //   });
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

