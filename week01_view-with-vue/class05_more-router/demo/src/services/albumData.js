import shortid from 'shortid';

export default [
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