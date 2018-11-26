<template>
    <ul class="pirates">
        <li v-for="pirate in pirates"
            v-bind:class="{ pirate: true, selected: pirate === selected }"
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
    height: 60%;
    width: auto;
}
</style>
