import shortid from 'shortid';
import albumData from './albumData';

// check if we saved something to local storage
const json = window.localStorage.getItem('albums');

// if found, use it - otherwise use the seed data
let albums = null;

if(json) {
  albums = JSON.parse(json);
}
else {
  albums = albumData;
  save();
}

function save() {
  window.localStorage.setItem('albums', JSON.stringify(albums));
}

export default {
  getAlbums() {
    return albums;
  },
  getAlbum(id) {
    return albums.find(album => album.id === id);
  },
  add(album) {
    album.id = shortid.generate();
    album.images = [];
    albums.push(album);
    save();
    return album;
  }
};