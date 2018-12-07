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
      Track: <TrackDisplay :trackId="student.trackId"/>
    </p>
  </section>
</template>

<script>
import api from '../../services/api';
import TrackDisplay from '../tracks/TrackDisplay';

export default {
  data() {
    return {
      student: null
    };
  },
  components: {
    TrackDisplay
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

