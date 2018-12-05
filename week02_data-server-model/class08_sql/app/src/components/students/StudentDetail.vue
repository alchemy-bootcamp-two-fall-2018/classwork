<template>
  <section>
    <h2>{{student.name}}</h2>
    <p>
      DOB: {{student.dob}}
    </p>
    <p>

    </p>
  </section>
</template>

<script>
export default {
  props: {
    students: null
  }
};
</script>

<style lang="postcss" scoped>

</style>

