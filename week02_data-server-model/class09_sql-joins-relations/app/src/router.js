import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Students from './components/students/Students';
import StudentDetail from './components/students/StudentDetail';

export default new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/students', component: Students },
    { path: '/students/:id', component: StudentDetail },
    { path: '*', redirect: '/' }
  ]
});