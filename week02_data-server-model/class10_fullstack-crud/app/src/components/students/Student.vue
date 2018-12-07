<template>
    <li>
      <RouterLink :to="`/students/${student.id}`">
        {{student.name}}
      </RouterLink>

      <TrackDisplay :trackId="student.trackId" />
      starting 
      {{formattedStartDate}}
    </li>
</template>

<script>
import TrackDisplay from '../tracks/TrackDisplay';

export default {
  props: {
    student: null
  },
  components: {
    TrackDisplay
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

