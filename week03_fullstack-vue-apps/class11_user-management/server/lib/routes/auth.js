const router = require('express').Router();
const client = require('../db-client');

router
  .post('/signup', (req, res) => {

    const body = req.body;
    const username = body.username;
    const password = body.password;
    
    // username and password needs to exist
    if(!username || !password) {
      res.status(400).json({ error: 'username and password required' });
      return;
    }

    // username needs to not exist already
    client.query(`
      SELECT id
      FROM profile
      WHERE username = $1;
    `,
    [username])  
      .then(result => {
        if(result.rows.length > 0) {
          res.status(400).json({ error: 'username already exists' });
          return;
        }

        console.log('creating new user profile...');

        // insert into profile the new user
        client.query(`
          INSERT into profile (username, password)
          VALUES ($1, $2)
          RETURNING *;
        `,
        [username, password]
        )
          .then(result => {
            // return profile object that has id that will be used as a token
            res.json(result.rows[0]);
          });
      });
  });

module.exports = router;