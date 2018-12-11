const client = require('../lib/db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS profile (
    id SERIAL PRIMARY KEY,
    username VARCHAR(256) NOT NULL,
    password VARCHAR(256) NOT NULL
  );

  CREATE TABLE IF NOT EXISTS pet (
    id SERIAL PRIMARY KEY,
    name VARCHAR(256) NOT NULL,
    type VARCHAR(32) NOT NULL,
    profile_id INTEGER NOT NULL REFERENCES profile(id)
  );

  CREATE TABLE IF NOT EXISTS game (
    id SERIAL PRIMARY KEY,
    score INTEGER NOT NULL,
    pet_id INTEGER NOT NULL REFERENCES pet(id)
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });