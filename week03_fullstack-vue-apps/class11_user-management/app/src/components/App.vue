<template>
  <div class="app">
    <header>
      <img src="../assets/logo.png">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/pets">Pets</RouterLink>
      </nav>
    </header>

    <main>
      <RouterView v-if="user" :user="user"/>
      <Auth v-else
        :onSignUp="handleSignUp"
        :onSignIn="handleSignIn"
      />
    </main>
    
  </div>
</template>

<script>
import Auth from './auth/Auth';

export default {
  data() {
    return {
      user: null
    };
  },
  components: {
    Auth
  },
  methods: {
    handleSignUp(profile) {
      console.log('would sign up', profile);
    },
    handleSignIn(credentials) {
      console.log('would sign in', credentials);
    }
  }
};
</script>

<style scoped>

header {
  height: 75px;
  background: lightsteelblue;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header img {
  height: 100%;
}

nav a {
  text-decoration: none;
  color: black;
  margin: 3px;
  padding: 3px;
  border: 1px solid black;
}

main {
  padding: 8px;
}


</style>
