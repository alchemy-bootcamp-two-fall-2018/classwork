<template>
  <section class="people">
    <h2>People</h2>

    <PeopleSearch :onSearch="handleSearch" :search="search"/>
    
    <Loader :loading="loading"/>

    <p>
      <button @click="handlePage(-1)" :disabled="page === 1">Prev</button>
      Searching for &quot;{{ search }}&quot; - found {{total}} - page {{page}} of {{totalPages}}
      <button @click="handlePage(1)" :disabled="totalPages === page">Next</button>
    </p>
     
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
      page: decodeURIComponent(this.$route.query.page) || 1,
      total: 0,
      perPage: 10
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
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.perPage);
    }
  },
  watch: {
    $route(newRoute, oldRoute) {
      const newSearch = newRoute.query.search;
      const oldSearch = oldRoute.query.search;
      let newPage = newRoute.query.page;
      const oldPage = oldRoute.query.page;
      if(newSearch === oldSearch && newPage === oldPage) return;
      if(newSearch !== oldSearch) {
        newPage = 1;
      }
      this.search = decodeURIComponent(newSearch);
      this.page = newPage;
      this.searchPeople();
    }
  },
  methods: {
    handleSearch(search) {
      this.search = search || '';
      this.page = 1;
      this.recordPage();
      this.searchPeople();
    },
    handlePage(increment) {
      this.page += increment;
      this.recordPage();
    },
    recordPage() {
      this.$router.push({
        query: {
          search: encodeURIComponent(this.search),
          page: this.page
        }
      });
    },
    searchPeople() {
      this.loading = true;
      this.error = null;

      api.getPeople(this.search, this.page)
        .then(response => {
          this.people = response.results;
          this.total = response.count;
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
