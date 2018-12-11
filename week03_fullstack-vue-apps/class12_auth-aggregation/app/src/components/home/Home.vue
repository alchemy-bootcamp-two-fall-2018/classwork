<template>
  <section>
    <h2>Welcome to My Kewl Pets!</h2>
    <p>
      <RouterLink to="/pets">view pets</RouterLink>
    </p>
    <table v-if="stats">
      <thead>
        <tr>
          <th>Name</th>
          <th>Count</th>
          <th>Average</th>
          <th>Min</th>
          <th>Max</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="stat in stats"
          :key="stat.petId">
          <td>{{stat.petName}}</td>
          <td>{{stat.count}}</td>
          <td>{{stat.averageScore}}</td>
          <td>{{stat.minimumScore}}</td>
          <td>{{stat.maximumScore}}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import api from '../../services/api';

export default {
  data() {
    return {
      stats: null
    };
  },
  created() {
    api.getPetStats()
      .then(stats => this.stats = stats);
  }
};
</script>

<style lang="postcss" scoped>

table {
  width: 100%;
  max-width: 600px;
  border-collapse: collapse;

  th, td {
    text-align: right;
  }

  td {
    padding: 10px 3px;
  }

  th:first-child, td:first-child {
    text-align: left;
  }

  tr:nth-child(even) {
    background: rgba(0, 0, 0, .1);
  }

}
</style>
