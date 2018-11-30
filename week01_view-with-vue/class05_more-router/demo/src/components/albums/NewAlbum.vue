<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="album.title" required>
    <button>Add</button>
  </form>
</template>

<script>
import albumsApi from '../../services/albumsApi';

export default {
  data() {
    return {
      album: {
        title: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      // tell the api about adding this album
      const saved = albumsApi.add(this.album);
      // when done, let's go that "page"
      this.$router.push(`/albums/${saved.id}`);
    }
  }
};
</script>

