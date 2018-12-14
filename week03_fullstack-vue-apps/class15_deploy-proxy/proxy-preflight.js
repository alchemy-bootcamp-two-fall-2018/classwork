const RESTAURANTS_API = process.env.RESTAURANTS_API;

app.get('/api/restaurants', auth, (req, res, next) => {
  request.get(`${RESTAURANTS_API}/restaurant-inspections/`)
    .then(result => {
      // superagent makes the response body available as "result.body"
      const body = result.body;
      // we can transform/reshape the data as we want
      const restaurants = body.results.map(rest => {
        return {
          address: rest.address,
          name: rest.name,
          inspectionNumber: rest.inspection_number
        };
      });
      // send it back to the client
      res.send(restaurants);
    })
    .catch(next);
});