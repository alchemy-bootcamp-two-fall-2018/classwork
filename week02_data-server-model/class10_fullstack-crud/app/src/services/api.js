
let tracks = null;

const getPostOptions = data => {
  return {
    method: 'POST',
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
    return fetch('/api/students', getPostOptions(student))
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
    return fetch('/api/tracks', getPostOptions(track))
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