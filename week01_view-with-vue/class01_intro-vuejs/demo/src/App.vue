<template>
  <div id="app">
    <Pirates 
        v-bind:pirates="pirates"
        v-bind:selected="selected"
        v-bind:onSelect="handleSelect"/>
    <Player
        v-bind:pirate="selected"/>
  </div>
</template>

<script>
import Pirates from './components/Pirates';
import Player from './components/Player';
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
        Pirates,
        Player
    },
    methods: {
        handleSelect(pirate) {
            this.selected = pirate;
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
