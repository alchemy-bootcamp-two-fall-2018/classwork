<template>
  <li>
    {{person.name}} born {{person.birth_year}}
  </li>
</template>

<script>

export default {
  props: {
    person: Object
  }
};

</script>

<style>

</style>
