<template>
  <section v-if="student">
    <div class="name-header">
      <h2>
        {{student.name}}
      </h2>
      <EditStudent 
        :student="student"
        :onEdit="handleEdit"/>
    </div>

    <p>
      {{student.description}}
    </p>
    <p>
      Start Date: <DateDisplay :date="student.startDate"/>
    </p>
    <p>
      Track: <TrackDisplay :trackId="student.trackId"/>
    </p>
  </section>
</template>

<script>
import api from '../../services/api';
import TrackDisplay from '../tracks/TrackDisplay';
import DateDisplay from '../shared/DateDisplay';
import EditStudent from './EditStudent';

export default {
  data() {
    return {
      student: null
    };
  },
  components: {
    TrackDisplay,
    DateDisplay,
    EditStudent
  },
  created() {
    api.getStudent(this.$route.params.id)
      .then(student => {
        this.student = student;
      });
  },
  methods: {
    handleEdit(student) {
      return api.updateStudent(student)
        .then(updated => {
          this.student = updated;
        });
    }
  }
};
</script>

<style lang="postcss" scoped>

.name-header {
  display: flex;
  align-items: center;

  h2 {
    display: inline-block;
    margin-right: 10px;
  }
}
</style>

