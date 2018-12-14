# Class 15: Deployment and Proxy



## Deployment

1. Two-repo solution
1. Create heroku account
1. Download nodejs tools
1. `heroku login`
1. In `server`:
    1. Create heroku project `heroku create`
    1. Add postgres db
        * Dashboard
    1. Run `db` scripts against prod db
        * Additional `.env` required
    1. Add `engine` to `package.json`
1. Deploy:
    1. commit!
    1. `git push heroku master`
    1. `heroku open`
    1. Profit!


## API Proxy

Use APIs that don't allow CORS!

1. Install `superagent`:
    ```sh
    > npm i superagent
    ```
1. require:
    ```js
    const request = require('superagent');
    ```
1. Use to proxy requests:
    ```js
    app.get('/api/restaurants', (req, res, next) => {
      request.get(`${process.env.RESTAURANTS_API}/restaurant-inspections/`)
        .then(result => {
          res.send(result);
          // // you can also massage data:
          // res.send(result.body.results.map(rest => {
          //   return {
          //    address: rest.address,
          //    name: rest.name,
          //    inspectionNumber: rest.inspection_number
          //   };
          // }));
        })
        .catch(next);
    });