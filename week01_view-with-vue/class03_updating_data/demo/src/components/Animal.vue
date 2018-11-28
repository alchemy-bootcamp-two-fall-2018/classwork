<template>
  <li>
    <img v-bind:src="animal.img" />
    <div class="info">
      <h3>{{ animal.name }}</h3>
      <p>size: {{ animal.size }}</p>
      <p>weight: {{ animal.weight }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    animal: Object
  }
};
</script>

<style scoped>
li {
  position: relative;
  height: 300px;
}
img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
}
.info {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
}
h3, p {
  margin: 0;
}
</style>
