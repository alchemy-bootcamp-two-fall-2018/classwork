const client = require('../lib/db-client');

const pets = [
  { name: 'Felix', type: 'cat' },
  { name: 'Tweety', type: 'bird' },
  { name: 'Duchess', type: 'cat' }
];

client.query(`
  INSERT INTO profile (username, password)
  VALUES ($1, $2)
  RETURNING id;
`,
['martypdx', 'abc123']
)
  .then(result => {
    const profile = result.rows[0];

    return Promise.all(
      pets.map(pet => {
        return client.query(`
          INSERT INTO pet (name, type, profile_id)
          VALUES ($1, $2, $3)
        `,
        [pet.name, pet.type, profile.id]);
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