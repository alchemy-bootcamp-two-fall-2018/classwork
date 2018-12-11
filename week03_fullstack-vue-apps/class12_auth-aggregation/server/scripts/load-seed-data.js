const client = require('../lib/db-client');
const bcrypt = require('bcryptjs');

const pets = [
  { name: 'Felix', type: 'cat' },
  { name: 'Tweety', type: 'bird' },
  { name: 'Duchess', type: 'cat' }
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

client.query(`
  INSERT INTO profile (username, hash)
  VALUES ($1, $2)
  RETURNING id;
`,
['martypdx', bcrypt.hashSync('abc123', 8)]
)
  .then(result => {
    const profile = result.rows[0];

    return Promise.all(
      pets.map(pet => {
        return client.query(`
          INSERT INTO pet (name, type, profile_id)
          VALUES ($1, $2, $3)
          RETURNING id;
        `,
        [pet.name, pet.type, profile.id])
          .then(result => result.rows[0].id);
      })
    );
  })
  .then(petIds => {
    return Promise.all(
      petIds.map(id => {
        const count = getRandomInt(10, 100);
        return Promise.all(
          new Array(count).fill(null).map(() => {
            return client.query(`
              INSERT INTO game (score, pet_id)
              VALUES ($1, $2);
            `, 
            [getRandomInt(50, 200), id]
            );
          })
        );
      })
    );
  })
  .then(
    () => console.log('seed data load complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });