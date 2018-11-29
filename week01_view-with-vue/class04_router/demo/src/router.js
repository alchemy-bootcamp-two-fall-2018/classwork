import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Albums from './components/albums/Albums';
import AlbumDetail from './components/albums/AlbumDetail';
import NewAlbum from './components/albums/NewAlbum';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/albums', component: Albums },
    { path: '/albums/new', component: NewAlbum },
    { path: '/albums/:id', component: AlbumDetail },
    { path: '*', redirect: '/' }
  ]
});