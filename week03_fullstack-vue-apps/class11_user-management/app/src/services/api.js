const getOptions = (method, data) => {
  return {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
};

export default {
  
  getPets() {
    return fetch('/api/pets')
      .then(response => response.json());      
  },

  addPet(pet) {
    return fetch('/api/pets', getOptions('POST', pet))
      .then(response => response.json());
  },

};