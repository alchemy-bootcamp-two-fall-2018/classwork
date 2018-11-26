<template>
    <ul class="pirates">
        <li v-for="pirate in pirates"
            v-bind:class="{ pirate: true, selected: pirate === selected }"
            v-bind:key="pirate.name"
            v-on:click="onSelect(pirate)">
            <img v-bind:src="pirate.image">
            <h3>{{pirate.name}} the {{pirate.role}}</h3>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        pirates: Array,
        selected: Object,
        onSelect: Function
    }
};
</script>

<style>

.pirates {
    display: flex;
    flex-wrap: wrap;
}

.pirate {
    list-style: none;
    position: relative;
    width: 200px;
    height: 200px;
    border: 1px solid #aaa;
    text-align: center;
    margin-right: 3px;
    cursor: pointer;
}

.pirate.selected {
    background: pink;
}

.pirate h3 {
    text-shadow: 1px 1px 1px white;
}

.pirate img {
    height: 70%;
    width: auto;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    margin: auto;
}
</style>
