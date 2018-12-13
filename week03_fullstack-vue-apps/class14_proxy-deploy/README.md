Proxy Server - Deployment
===

## Announcements, Review and Questions

* ?

## Scaffolding

### Repos

1. Two repos:
    * `app`
    * `server`
1. Make local directory for project
1. Clone both repos into project directory (siblings)

### App

1. `cd` into `app` repo
1. `> vue create .`
    * Follow prompts
1. `> code .`


### Server

1. `cd` into `server` repo
1. `> npm init`
    * Follow prompts
1. `> npm i express morgan jsonwebtoken bcryptjs nodemon dotenv pg`
1. `> npm i eslint -D`
1. `> code .`
1. Copy in boilerplate files:
    * `server.js`
    * `.eslintrc`
    * `.gitignore`
        ```
        node_modules
        .env
        ```
    * `.travis.yml`
1. `> mkdir lib scripts`
1. Copy in template boilerplate for:
    * `scripts/create-tables.js`
    * `scripts/drop-tables.js`
    * (optional: `scripts/seed-date.js`)
1. Add npm scripts:
    ```json
      "scripts": {
        "create-tables": "node scripts/create-tables.js",
        "drop-tables": "node scripts/drop-tables.js",
        "load-seed-data": "node scripts/load-seed-data.js",
        "recreate-tables": "npm run drop-tables && npm run create-tables",
        "db-load-all": "npm run recreate-tables && npm run load-seed-data",
        "lint": "eslint .",
        "pretest": "npm run lint",
        "test": "exit 0",
        "start": "nodemon server.js"
    },
    ```
1. Add `app.js` template with auth route
1. Add boilerplate:
    * `db-client.js`
    * `jwt`
1. Add auth route template: 
    * `> mkdir lib/routes`
    * Copy template `auth.js` into `routes`
    * (adjust user profile columns as needed to `auth.js`)
1. Create database in postgres
    * (local only - deployed will have db already)
1. Set db name in `db-client`
1. Add temporary "hello world":
    * route at `/` in `app.js`
    * Run server (`npm start`) and see that it works
1. Test DB connection
    * load seed data
    * do SQL query in "hello world"
    * Test in browser that it works at `localhost:3000`


## Deployment

1. Two-repo solution
1. Create heroku account
1. Download nodejs tools
1. `heroku login`
1. In `server`:
    1. Create heroku project `heroku create`
    1. Add postgres db
    1. Run `db` scripts against prod db
    1. Add `engine` to `package.json`
1. Deploy:
    1. commit!
    1. `git push heroku master`
    1. `heroku open`
    1. Profit!

## Environment Variables

1. Install `dotenv`:
    ```sh
    > npm i dotenv
    ```
1. **Add `.env` to `.gitignore`**
1. Create `.env` file at root of server project:
    ```sh
    PORT=3000
    SOME_API_KEY=1234
    DATABASE_URL=postgres://localhost:5432/eateries
    ```
1. Create `.env.example` file at root of server project:
    ```sh
    PORT=
    SOME_API_KEY=
    DATABASE_URL=
    ```
1. Require _as very first line_ of `server.js`, `create-tables.js`, `drop-tables.js` and `seed-data.js`:
    ```js
    require('dotenv').config()
    ```
1. Access via:
    ```js
    const PORT = process.env.PORT;
    ```
    ```js
    const DATABASE_URL = process.env.DATABASE_URL;
    ```

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
