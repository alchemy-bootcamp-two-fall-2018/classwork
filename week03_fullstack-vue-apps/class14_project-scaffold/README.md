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
1. Project clean and adjustment:
    * Delete `HelloWorld.vue` and remove from `App.vue`
    * Move `App.vue` into `components` folder
    * Change `main.js` import of `App.vue`
    * Change `logo.png` import in `App.vue` (if you want to keep)
1. Add boilerplace (and template): 
    * `.eslintrc`
    * `main.css`
    * `vue.config.js`
    * `router.js` (as template, remove unused routes)
    * `main.js` (will replace existing file)
    * `/home/Home.vue` (template Home page)
1. Fix `babel.config.js`
    * semicolon
    * add `/* eslint-env node */` as first line
1. Install additional dev modules:
    ```
    > npm i -D postcss-cli postcss-easy-import postcss-loader postcss-nested postcss-simple-vars
    ```
1. Install additional runtime modules:
    ```
    > npm i vue-router
    ```
1. Add `<RouterView></RouterView>` in `App.vue` template section
1. Test that it all works:
    ```
    > npm run serve
    ```

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
1. Create `.env` and `.env.example`
    * `DATABASE_URL`
    * `PORT`
    * `APP_SECRET`
    * api keys, etc
1. Add `require('dotenv').config();` to any file that is a entry point:
    * `server.js`
    * db script files
1. Replace values in code with `process.env.KEY_NAME`
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
1. Add `public` dir
    * `> mkdir public`
    * add middleware in `app.js`:
        * `app.use(express.static('public'));`
    * Test that it works
        * add `index.html`
        * inspect `localhost:3000`

## App Talks to Server

1. Add `services/api.js`
1. Add `test` method to hit server and return rows
1. Fetch in `App.vue` and display via `{{results}}`
1. Test it out

## App Builds to Server

1. run `npm run build` and inspect `dist`
1. Add new `script` in `package.json`:
    * `"build:prod": "npm run build && rm -rf ../project-server/public && cp -R dist ../project-server/public"`
    * (change to correct server folder name)
1. Go to `localhost:3000` and check that it worked!
1. Note for server's updated `public` folder (which now should have minified code in it from app):
    * Double-check the `package.json` in the root of your `project-server` and make sure that it says `"test": "npm run lint"` under your `scripts`
    * Then, in the root of your `project-server` directory, add a new file called `.eslintignore` and add `public` to the first line. This will make ESLint ignore everything in the public directory (so Travis will pass)


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
