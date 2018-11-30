<template>
  <section v-if="album">
    <h2>{{album.title}}</h2>
    <h3>Images</h3>
    <p>
      <button @click="showModal = true">Add a new Image</button>
    </p>
    <Modal v-if="showModal" :onClose="() => showModal = false">
      <AddImage :onAdd="handleImageAdd"/>
    </Modal>
    <nav>
      <RouterLink to="./thumbnail">Thumbnail</RouterLink>
      <RouterLink to="./list">List</RouterLink>
      <RouterLink to="./gallery">Gallery</RouterLink>
    </nav>

    <RouterView :images="album.images">DEFAULT VIEW</RouterView>

  </section>
</template>

<script>
import albumsApi from '../../services/albumsApi';
import Modal from '../shared/Modal';
import AddImage from './images/AddImage';

export default {
  data() {
    return {
      album: null,
      showModal: false
    };
  },
  components: {
    Modal,
    AddImage
  },
  created() {
    this.album = albumsApi.getAlbum(this.$route.params.id);
    if(!this.album) {
      this.$router.push('/albums');
    }
  },
  methods: {
    handleImageAdd(image) {
      console.log('AddImage hosted in Model sez', image);
    }
  }
};
</script>

<style>

.modal {
  position: fixed;
  top: 0; left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .5);
}

.content {
  background: white;
  padding: 40px;
}

nav a {
  padding: 5px;
}


</style>
