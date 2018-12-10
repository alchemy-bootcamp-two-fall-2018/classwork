<template>
    <li>
      <RouterLink :to="`/students/${student.id}`">
        {{student.name}}
      </RouterLink>

      <TrackDisplay :trackId="student.trackId" />
      starting 
      <DateDisplay :date="student.startDate"/>
    </li>
</template>

<script>
import TrackDisplay from '../tracks/TrackDisplay';
import DateDisplay from '../shared/DateDisplay';

export default {
  props: {
    student: null
  },
  components: {
    TrackDisplay,
    DateDisplay
  }
};
</script>

<style lang="postcss" scoped>

</style>

