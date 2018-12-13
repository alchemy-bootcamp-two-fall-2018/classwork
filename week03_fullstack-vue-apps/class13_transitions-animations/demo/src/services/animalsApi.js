const animals = [
  {
    name: 'cat',
    size: 'small',
    isPet: true,
    type: 'mammal',
    weight: 5,
    img: '/images/cat.jpg',
    description: `
      <p>What a <strong>nice</strong> pet, 
      unless you are Jordan (then go get a puppy).
      </p>
    `
  },
  {
    name: 'rat',
    size: 'small',
    isPet: true,
    type: 'mammal',
    weight: 1,
    img: '/images/rat.jpg'
  },
  {
    name: 'bird',
    size: 'small',
    isPet: true,
    type: 'avian',
    weight: 1,
    img: '/images/bird.jpg'
  },
  {
    name: 'dog',
    size: 'small',
    isPet: true,
    type: 'mammal',
    weight: 10,
    img: '/images/dog.png'
  },
  {
    name: 'lion',
    size: 'medium',
    isPet: false,
    type: 'mammal',
    weight: 150,
    img: '/images/lion.png'
  },
  {
    name: 'elk',
    size: 'medium',
    isPet: false,
    type: 'mammal',
    weight: 750,
    img: '/images/elk.jpg'
  },
  {
    name: 'komodo dragon',
    size: 'medium',
    isPet: false,
    type: 'reptile',
    weight: 200,
    img: '/images/komododragon.jpg'
  },
  {
    name: 'elephant',
    size: 'big',
    isPet: false,
    type: 'mammal',
    weight: 5000,
    img: '/images/elephant.jpg'
  },
  {
    name: 'whale',
    size: 'big',
    isPet: false,
    type: 'mammal',
    weight: 10000,
    img: '/images/whale.jpg'
  },
  {
    name: 'unicorn',
    size: 'big',
    isPet: true,
    type: 'mammal',
    weight: 2000,
    img: '/images/unicorn.jpg'
  },
  {
    name: 'rubber duck',
    size: 'tiny',
    isPet: true,
    type: 'rubber',
    weight: 1,
    img: '/images/rubber-duck.jpg'
  }
];

const types = [];
// const seen = {};

animals.forEach(animal => {
  const type = animal.type;
  // have we seen this type before?
  // dictionaries can be more efficient for large 
  // sets of data
  // if(seen[type]) {
  if(types.includes(type)) {
    // yes - skip
    return;
  }

  // no - add to list
  types.push(type);
  // seen[type] = true;
});

// For the curious, using a JavaScript Set
// const types = [...new Set(animals.map(a => a.types)).values()];


export default {
  getAnimals() {
    return animals;
  },
  getTypes() {
    return types;
  }
};