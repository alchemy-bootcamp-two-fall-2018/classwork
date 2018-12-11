import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Pets from './components/pets/Pets';

export default new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/pets', component: Pets },
    { path: '*', redirect: '/' }
  ]
});