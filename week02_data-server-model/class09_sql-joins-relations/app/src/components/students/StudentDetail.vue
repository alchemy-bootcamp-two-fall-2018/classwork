<template>
  <section v-if="student">
    <h2>{{student.name}}</h2>
    <p>
      {{student.description}}
    </p>
    <p>
      Start Date: {{student.startDate}}
    </p>
    <p>
      Track: {{student.track}}
    </p>
  </section>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      student: null
    };
  },
  created() {
    api.getStudent(this.$route.params.id)
      .then(student => {
        this.student = student;
      });
  }
};
</script>

<style lang="postcss" scoped>

</style>

