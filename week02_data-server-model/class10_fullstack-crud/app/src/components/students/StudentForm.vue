<template>
  <form @submit.prevent="onSubmit(student)">
    <p>
      <label>Name:</label>
      <input v-focus v-model="student.name" require>
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

    <button>{{label || 'Add'}}</button>
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

function copyStudent(student) {
  return {
    id: student.id,
    name: student.name,
    startDate: student.startDate.split('T')[0],
    trackId: student.trackId
  };
}

export default {
  props: {
    onSubmit: Function,
    label: String,
    studentToEdit: Object
  },
  data() {
    return {
      student: this.studentToEdit 
        ? copyStudent(this.studentToEdit) 
        : initStudent(),
      tracks: null
    };
  },
  created() {
    api.getTracks()
      .then(tracks => {
        this.tracks = tracks;
      });
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

