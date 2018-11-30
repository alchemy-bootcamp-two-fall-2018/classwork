import VueRouter from 'vue-router';
import Home from './components/home/Home';
import Albums from './components/albums/Albums';
import AlbumDetail from './components/albums/AlbumDetail';
import NewAlbum from './components/albums/NewAlbum';
import ThumbnailView from './components/albums/images/ThumbnailView';
import ListView from './components/albums/images/ListView';
import GalleryView from './components/albums/images/GalleryView';

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { 
      path: '/albums', 
      component: Albums
    },
    { path: '/albums/new', component: NewAlbum },
    { 
      path: '/albums/:id', 
      component: AlbumDetail,
      children: [
        { path: 'thumbnail', component: ThumbnailView },
        { path: 'list', component: ListView },
        { path: 'gallery', component: GalleryView },
        { path: '', redirect: 'thumbnail' },
      ] 
    },
    { path: '*', redirect: '/' }
  ]
});