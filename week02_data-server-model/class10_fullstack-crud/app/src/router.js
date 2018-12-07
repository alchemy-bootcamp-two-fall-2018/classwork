import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Students from './components/students/Students';
import StudentDetail from './components/students/StudentDetail';
// import AddStudent from './components/students/AddStudent';
import TrackAdmin from './components/tracks/TrackAdmin';

export default new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/students', component: Students },
    // { path: '/students/add', component: AddStudent },
    { path: '/students/:id', component: StudentDetail },
    { path: '/tracks', component: TrackAdmin },
    { path: '*', redirect: '/' }
  ]
});