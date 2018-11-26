<template>
    <ul>
        <li>
            <h3>Monkey D Luffy the Captain</h3>
            <img src="https://upload.wikimedia.org/wikipedia/en/c/cb/Monkey_D_Luffy.png">
        </li>
    </ul>
</template>

<script>
export default {

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
