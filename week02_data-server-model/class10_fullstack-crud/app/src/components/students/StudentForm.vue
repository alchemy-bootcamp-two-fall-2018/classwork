<template>
  <form @submit.prevent="handleSubmit">
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

export default {
  props: {
    onEdit: Function,
    label: String
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
      this.onEdit(this.student);
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

