<template>
  <section v-if="animal">
    <h3>
      {{animal.name}}
      <button @click="onEdit">✎</button>
    </h3>
    <p>This is a {{animal.size}} {{animal.type}} 
      typically weighing {{animal.weight}}kg.
    </p>
    <p v-if="animal.isPet">
      The {{animal.name}} makes a lovely pet.
    </p>
    <p>
      <img :src="animal.img">
    </p>
    <div v-html="animal.description"></div>
  </section>

</template>

<script>
export default {
  props: {
    animal: Object,
    onEdit: Function
  }
};
</script>

<style scoped lang="postcss">

section {
  padding: 10px;
  color: white;

  img {
    max-height: 25vh;
  }
}

</style>
