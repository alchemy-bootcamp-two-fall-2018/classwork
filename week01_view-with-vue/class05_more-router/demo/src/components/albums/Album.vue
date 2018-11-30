<template>
  <li>
    <RouterLink :to="`/albums/${album.id}`">{{album.title}}</RouterLink>
  </li>
</template>

<script>
export default {
  props: {
    album: Object
  }
};
</script>

<style>

</style>
