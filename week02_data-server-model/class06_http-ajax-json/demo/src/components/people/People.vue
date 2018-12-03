<template>
  <section class="people">
    <h2>People</h2>

    <PeopleSearch :onSearch="handleSearch" :search="search"/>
    
    <Loader :loading="loading"/>

    <p v-if="search">Searching for &quot;{{ search }}&quot;</p>
     
    <pre v-show="error" class="error">
      {{error}}
    </pre>

    <div class="search-container">
      <ul v-if="people">
        <Person v-for="(person, i) in people"
          :key="i"
          :person="person"
        />
      </ul>

    </div>

  </section>
</template>

<script>
import api from '../../services/api';
import Person from './Person';
import PeopleSearch from './PeopleSearch';
import Loader from './Loader';

export default {
  data() {
    return {
      people: null,
      loading: false,
      error: null,
      search: decodeURIComponent(this.$route.query.search),
      total: 0
    };
  },
  components: {
    Person,
    PeopleSearch,
    Loader
  },
  created() {
    this.searchPeople();
  },
  watch: {
    $route(newRoute, oldRoute) {
      const newSearch = newRoute.query.search;
      const oldSearch = oldRoute.query.search;
      if(newSearch === oldSearch) return;
      
      this.handleSearch(decodeURIComponent(newSearch));
    }
  },
  methods: {
    handleSearch(search) {
      this.search = search || '';
      this.searchPeople();
    },
    searchPeople() {
      this.loading = true;
      this.error = null;

      api.getPeople(this.search)
        .then(response => {
          this.people = response.results;
          this.loading = false;
        })
        .catch(err => {
          this.error = err.message;
          this.people = null;
          this.loading = false;
        });
    }
  }
};
</script>

<style>

.error {
  color: red;
}

.loader {
  position: absolute;
  top: 0; right: 0;
  bottom: 0; left: 0;
  color: white;
  font-weight: bolder;
  background: rgba(0, 0, 0, .6);
}
</style>
