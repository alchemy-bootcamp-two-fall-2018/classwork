<template>
    <li>
      <RouterLink :to="`/students/${student.id}`">{{student.name}}</RouterLink>
      {{student.track}} starting {{formattedStartDate}}
    </li>
</template>

<script>
export default {
  props: {
    student: null
  },
  computed: {
    formattedStartDate() {
      return new Date(this.student.startDate).toLocaleDateString();
    }
  }
};
</script>

<style lang="postcss" scoped>

</style>

