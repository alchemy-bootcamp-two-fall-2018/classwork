<template>
  <div id="app">
    <Pirates/>
  </div>
</template>

<script>
import Pirates from './components/Pirates.vue';

export default {
  components: {
    // Pirates: Pirates
    Pirates
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
