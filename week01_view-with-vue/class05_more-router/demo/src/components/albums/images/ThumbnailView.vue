<template>
  <section>
    <h3>Thumbnail View</h3>
    <ul>
      <li 
        v-for="(image, index) in images"
        :key="index">
        <h4>{{image.title}} <img :src="image.url"></h4>
      </li>
    </ul>
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

img {
  width: 50px;
}

</style>
