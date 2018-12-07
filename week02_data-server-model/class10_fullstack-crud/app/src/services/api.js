
let tracks = null;

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
  
  getStudents() {
    return fetch('/api/students')
      .then(response => response.json());      
  },

  getStudent(id) {
    return fetch(`/api/students/${id}`)
      .then(response => response.json());
  },

  addStudent(student) {
    return fetch('/api/students', getOptions('POST', student))
      .then(response => response.json());
  },

  updateStudent(student) {
    return fetch(
      `/api/students/${student.id}`, 
      getOptions('PUT', student)
    )
      .then(response => response.json());
  },

  getTracks() {
    if(tracks) {
      return Promise.resolve(tracks);
    }
    else {
      return fetch('/api/tracks')
        .then(response => response.json())
        .then(fetchedTracks => {
          tracks = fetchedTracks;
          return tracks;
        });
    }
  },

  addTrack(track) {
    return fetch('/api/tracks', getOptions('POST', track))
      .then(response => response.json())
      .then(saved => {
        tracks.push(saved);
        tracks.sort((a, b) => {
          if(a.name > b.name) return 1;
          if(a.name < b.name) return -1;
          return 0;
        });
      });
  }
};