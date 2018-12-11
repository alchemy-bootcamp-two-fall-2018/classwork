Class 11: User Management
===

## Agenda

* Kata Review
* Lab Review
* Authentication
* Server Environment Variables
* Aggregation

## Authentication

1. Adding [`bcryptjs`](https://www.npmjs.com/package/bcryptjs)
1. [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken)

## SQL Aggregations

1. Use `SELECT` and `JOIN` and `WHERE` to create the "result set" to aggregate
1. Add `GROUP BY` columns
1. Any non-grouped columns in `SELECT` need to be aggregated
1. Use `HAVING` and `LIMIT` to further filter

---
**Time Allowing**

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

## Serving App From `server`

1. Add `public` folder to `server` project
1. Add middleware to `server.js`:
    ```js
    app.use(express.static('public'));
    ```
1. Add scripts to `app` `package.json`:
    ```json
    "scripts": {
        "serve": "vue-cli-service serve",
        "build": "vue-cli-service build",
        "lint": "vue-cli-service lint",
        "copy": "rm -rf ../server/public && cp -R ./dist ../server/public",
        "build:server": "npm run build && npm run copy"
    }
    ```
1. Build and copy to server via:
    ```sh
    > npm run build:server
    ```


 