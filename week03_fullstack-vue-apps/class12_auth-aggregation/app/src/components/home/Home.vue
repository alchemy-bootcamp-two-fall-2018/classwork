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
