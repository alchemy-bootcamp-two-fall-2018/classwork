// "require" pg
const pg = require('pg');
// Use the pg Client
const Client = pg.Client;
// database url
const databaseUrl = 'postgres://localhost:5432/school';
// on windows, linux, or other systems where you need to 
// specify username and password
// const databaseUrl = 'postgres://<username>:<password>@localhost:5432/liveable_cities';

const client = new Client(databaseUrl);

client.connect();

client.query(`
  SELECT * FROM students;
`)
  .then(results => {
    console.log(results.rows);
  })
  .catch(err => {
    console.log(err);
  });
