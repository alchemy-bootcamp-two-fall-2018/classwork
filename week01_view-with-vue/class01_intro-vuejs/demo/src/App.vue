<template>
  <div id="app">
    <Pirates 
        v-bind:pirates="pirates"
        v-bind:onSelect="handleSelect"/>
  </div>
</template>

<script>
import Pirates from './components/Pirates';
import pirates from './pirate-data';

export default {
    data() {
        return {
            pirates,
            selected: null
        };
    },
    components: {
        // Pirates: Pirates
        Pirates
    },
    methods: {
        handleSelect(pirate) {
            console.log('user selected pirate', pirate.name);
        }
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
