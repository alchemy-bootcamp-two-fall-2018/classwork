
const animals = [
  {
    name: 'cat',
    size: 'small',
    weight: 5
  },
  {
    name: 'rat',
    size: 'small',
    weight: 1
  },
  {
    name: 'bird',
    size: 'small',
    weight: 1
  },
  {
    name: 'dog',
    size: 'small',
    weight: 10
  },
  {
    name: 'lion',
    size: 'medium',
    weight: 150
  },
  {
    name: 'elk',
    size: 'medium',
    weight: 750
  },
  {
    name: 'elephant',
    size: 'big',
    weight: 5000
  },
  {
    name: 'whale',
    size: 'big',
    weight: 10000
  }
];

const allSizes = animals.map(animal => {
  return animal.size;
});

const seen = {};

const sizes = allSizes.filter(size => {
  if(seen[size]) return false;
  seen[size] = true;
  return true;
});

export default {
  getAnimals() {
    return animals;
  },
  getSizes() {
    return sizes;
  }
};