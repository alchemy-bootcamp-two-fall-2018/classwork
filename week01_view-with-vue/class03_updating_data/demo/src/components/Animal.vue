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

<style scoped lang="postcss">
li {
  position: relative;
  height: 150px;
  overflow: hidden;
  &:hover {
    img {
      transform: scale(1.3);
      filter: grayscale(0);
    }
    .info {
      bottom: 0;
    }
  }
}

img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
  transition: 500ms;
  filter: grayscale(1);
}
.info {
  transition: 500ms;
  position: absolute;
  bottom: -100px;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 5px;
}
h3, p {
  margin: 0;
}

</style>
