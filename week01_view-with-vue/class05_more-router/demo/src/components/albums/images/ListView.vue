<template>
  <section>
    <h3>List View</h3>
    <p>There are {{images.length}} image(s)</p>
  </section>
</template>

<script>

export default {
  props: {
    images: Array
  }
};

</script>

<style scoped lang="postcss">

</style>
