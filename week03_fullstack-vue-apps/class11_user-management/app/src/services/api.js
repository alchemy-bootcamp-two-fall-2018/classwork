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
  
  signUp(profile) {
    return fetch('/api/auth/signup', getOptions('POST', profile))
      .then(response => response.json());
  },

  signIn(credentials) {
    return fetch('/api/auth/signup', getOptions('POST', credentials))
      .then(response => response.json());
  },

  getPets() {
    return fetch('/api/pets')
      .then(response => response.json());      
  },

  addPet(pet) {
    return fetch('/api/pets', getOptions('POST', pet))
      .then(response => response.json());
  }

};