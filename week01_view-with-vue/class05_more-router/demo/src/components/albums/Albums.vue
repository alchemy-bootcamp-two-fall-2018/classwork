<template>
  <section>
    <h2>Albums</h2>
    <RouterLink to="/albums/new">Add a new Album</RouterLink>
    <AlbumList :albums="albums"/>
  </section>
</template>

<script>
import albumsApi from '../../services/albumsApi';
import AlbumList from './AlbumList';

export default {
  data() {
    return {
      albums: albumsApi.getAlbums()
    };
  },
  components: {
    AlbumList
  }
};
</script>

<style>

</style>
