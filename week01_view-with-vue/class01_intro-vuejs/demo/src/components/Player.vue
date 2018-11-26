<template>
    <section>
        <div v-if="pirate">
            <h2>{{pirate.name}}</h2>
            <p>{{pirate.role}} of {{pirate.crew}}</p>
            <img v-bind:src="pirate.image">
        </div>
        <div v-else>Please choose a pirate for your player</div>
    </section>
</template>

<script>
export default {
    props: {
        pirate: Object
    }
};
</script>

<style>

</style>
