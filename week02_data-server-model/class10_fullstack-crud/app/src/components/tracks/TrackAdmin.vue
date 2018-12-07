<template>
  <section>
    <h2>Track Admin</h2>
    <ul>
      <li v-for="track in tracks"
        :key="track.id">
        {{track.name}}
      </li>
    </ul>

    <form @submit.prevent="handleAdd">
      <input v-model="trackName">
      <button>Add</button>
    </form>
  </section>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      tracks: null,
      trackName: ''
    };
  },
  created() {
    api.getTracks()
      .then(tracks => {
        this.tracks = tracks;
      });
  },
  methods: {
    handleAdd() {
      api.addTrack(this.trackName)
        .then(() => {
          this.trackName = '';
        });
    }
  }
};
</script>

<style>

</style>
