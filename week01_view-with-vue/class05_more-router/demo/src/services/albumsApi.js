import shortid from 'shortid';

const albums = [
  { 
    id: shortid.generate(), 
    title: 'Cute Bunnies', 
    images: [
      { 
        title: 'so cute', 
        url: 'https://static.boredpanda.com/blog/wp-content/uploads/2015/09/cute-bunnies-102__605.jpg' 
      }
    ] 
  },
  { id: shortid.generate(), title: 'Cute Kittens', images: [] },
  { id: shortid.generate(), title: 'Cute Puppies', images: [] },
];

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
    return album;
  }
};