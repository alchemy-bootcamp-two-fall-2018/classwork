<template>
    <ul>
        <li v-for="pirate in pirates"
            v-bind:key="pirate.name"
            v-on:click="onSelect(pirate)">
            <h3>{{pirate.name}} the {{pirate.role}}</h3>
            <img v-bind:src="pirate.image">
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        pirates: Array,
        onSelect: Function
    }
};
</script>

<style>
li {
    position: relative;
    display: inline-block;
    width: 200px;
    height: 200px;
    border: 1px solid #aaa;
    text-align: center;
    margin-right: 3px;
    cursor: pointer;
}

h3 {
    text-shadow: 1px 1px 1px white;
}

img {
    position: absolute;
    top: 0; left: 0; right: 0;
    margin-top: 10px;
    height: 100%;
    width: auto;
    z-index: -1;
    margin: auto;
}
</style>
