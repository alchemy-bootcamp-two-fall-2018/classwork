// url:
// 1) protocol (https://)
// 2) host server  (swapi.co)
// 3) path (/api/people)
// 4) search or query
//    - separated from path via "?"
//    - name=value pairs separated by "&"
//    - use "encodeURIComponent" to escape search values:
//    ?APIKEY=abc123&search=${encodeURIComponent(name)}\

// `https://swapi.co/api/people?search=${encodeURIComponent(searchTerm)}`)

export default {
  // default parameter, will be empty string if nothing provided
  getPeople(searchTerm = '', page = 1) {
    
    if(searchTerm.startsWith('jar')) {
      return Promise.reject(new Error('meesa think that bad search'));
    }


    // return promise-chain so caller gets final output

    // fetch takes: url, [options]
    return fetch(`https://swapi.co/api/people?search=${encodeURIComponent(searchTerm)}&page=${page}`)
      // when the response from the server is received,
      // this callback will be invoked:
      .then(response => response.json());
    // now the second promise returned from this "then"
    // is available to the caller of getPeople

      

  }
};