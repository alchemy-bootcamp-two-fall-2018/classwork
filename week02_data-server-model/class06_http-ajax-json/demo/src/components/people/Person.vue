<template>
  <li>
    <RouterLink :to="`/people/${person.id}`" >
      {{person.name}} born {{person.birth_year}}
    </RouterLink>
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
