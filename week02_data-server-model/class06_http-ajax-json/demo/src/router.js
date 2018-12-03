import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import People from './components/people/People.vue';

export default new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/people', component: People },
    { path: '*', redirect: '/' }
  ]
});