<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="keyword">
    <button>Go</button>
  </form>
</template>

<script>
export default {
  props: {
    search: String
  },
  data() {
    return {
      keyword: this.search || ''
    };
  },
  watch: {
    search(value) {
      this.keyword = value;
    }
  },
  methods: {
    handleSubmit() {
      this.$router.push({
        query: {
          search: encodeURIComponent(this.keyword)
        }
      });
    }
  }
};
</script>

<style>

</style>
