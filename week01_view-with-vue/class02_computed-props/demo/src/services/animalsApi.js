const animals = [
  {
    name: 'cat',
    size: 'small',
    weight: 5,
    img: '/images/cat.jpg'
  },
  {
    name: 'rat',
    size: 'small',
    weight: 1,
    img: '/images/rat.jpg'
  },
  {
    name: 'bird',
    size: 'small',
    weight: 1,
    img: '/images/bird.jpg'
  },
  {
    name: 'dog',
    size: 'small',
    weight: 10,
    img: '/images/dog.png'
  },
  {
    name: 'lion',
    size: 'medium',
    weight: 150,
    img: '/images/lion.png'
  },
  {
    name: 'elk',
    size: 'medium',
    weight: 750,
    img: '/images/elk.jpg'
  },
  {
    name: 'elephant',
    size: 'big',
    weight: 5000,
    img: '/images/elephant.jpg'
  },
  {
    name: 'whale',
    size: 'big',
    weight: 10000,
    img: '/images/whale.jpg'
  }
];


export default {
  getAnimals() {
    return animals;
  }
};