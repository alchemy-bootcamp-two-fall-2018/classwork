<template>
  <Modal :onClose="() => this.$router.back()">
    <section>
      <h3>Gallery View</h3>
      {{selectedIndex}}
      <p>
        <!-- <button @click="setIndex(-1)" :disabled="selectedIndex === 0">&lt;</button> -->
        <button @click="setIndex(-1)">&lt;</button>
        {{color}}
        <button @click="setIndex(1)">&gt;</button>
      </p>
    </section>
  </Modal>
</template>

<script>
import Modal from '../../shared/Modal';

export default {
  data() {
    return {
      colors: ['red', 'blue', 'green'],
      selectedIndex: 0
    };
  },
  props: {
    images: Array
  },
  components: {
    Modal
  },
  computed: {
    color() {
      return this.colors[this.selectedIndex];
    }
  },
  methods: {
    setIndex(amt) {
      this.selectedIndex += amt;
      if(this.selectedIndex === this.colors.length) {
        this.selectedIndex = 0;
      }
      else if(this.selectedIndex < 0) {
        this.selectedIndex = this.colors.length - 1;
      }
      // this.selectedIndex = this.selectedIndex % this.colors.length;
    }
  }
};

</script>

<style scoped lang="postcss">

</style>
