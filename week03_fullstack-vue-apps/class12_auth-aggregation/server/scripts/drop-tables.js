const client = require('../lib/db-client');

client.query(`
  DROP TABLE IF EXISTS game;
  DROP TABLE IF EXISTS pet;
  DROP TABLE IF EXISTS profile;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });