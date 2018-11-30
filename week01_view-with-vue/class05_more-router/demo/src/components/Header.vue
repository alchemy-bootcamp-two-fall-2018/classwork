<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/albums">Albums</RouterLink>
    </nav>
    <RouterView name="special"></RouterView>
  </header>
</template>

<script>
export default {

};
</script>

<style>
    nav {
        display: flex;
        justify-content: space-around;
    }    
</style>
