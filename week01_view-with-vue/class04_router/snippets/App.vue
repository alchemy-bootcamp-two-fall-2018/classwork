<template>
  <div id="app">
    <h1>Router Demo</h1>
    <nav>
      <RouterLink to="/">Go to Home</RouterLink>
      <RouterLink to="/about">Go to About</RouterLink>
      <RouterLink to="/quadrants">Go to Quadrants</RouterLink>
    </nav>
    <RouterView></RouterView>
  </div>
</template>

<script>

export default {

};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

h1, nav {
    text-align: center;
}
</style>
