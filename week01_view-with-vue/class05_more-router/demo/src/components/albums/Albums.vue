<template>
  <section>
    <h2>Albums</h2>
    <button @click="showModal = true">Add a new Album</button>
    <Modal v-if="showModal" :onClose="() => showModal = false">
      <NewAlbum/>
    </Modal>
    <AlbumList :albums="albums"/>
  </section>
</template>

<script>
import albumsApi from '../../services/albumsApi';
import AlbumList from './AlbumList';
import Modal from '../shared/Modal';
import NewAlbum from './NewAlbum';

export default {
  data() {
    return {
      albums: albumsApi.getAlbums(),
      showModal: false
    };
  },
  components: {
    AlbumList,
    Modal,
    NewAlbum
  }
};
</script>

<style>

</style>
