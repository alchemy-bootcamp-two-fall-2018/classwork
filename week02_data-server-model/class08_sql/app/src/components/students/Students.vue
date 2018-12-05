<template>
  <section class="students">
    <h2>Students</h2>
    
    <AddStudent :onAdd="handleAdd"/>

    <ul v-if="students">
      <li v-for="student in students" :key="student.id">
        {{student.name}}
      </li>
    </ul>
  </section>
</template>

<script>
import api from '../../services/api';
import AddStudent from './AddStudent';

export default {
  data() {
    return {
      students: null,
      error: null
    };
  },
  components: {
    AddStudent
  },
  created() {
    api.getStudents()
      .then(students => {
        this.students = students;
      })
      .catch(err => {
        this.error = err;
      });
  },
  methods: {
    handleAdd(student) {
      return api.addStudent(student)
        .then(saved => {
          this.students.push(saved);
        });
    }
  }
  
};
</script>

<style lang="postcss" scoped>

</style>

