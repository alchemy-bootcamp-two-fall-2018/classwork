const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap

router
  .get('/', (req, res) => {
    client.query(`
      SELECT id, name, type
      FROM pet
      WHERE profile_id = $1;
    `,
    [req.userId])
      .then(result => {
        res.json(result.rows);
      });
  })

  .get('/stats', (req, res) => {
    client.query(`
      SELECT pet_id as "petId", 
        MIN(pet.name) as "petName",
        COUNT(game.id), 
        AVG(score) as "averageScore", 
        MIN(score) as "minimumScore", 
        MAX(score) as "maximumScore"
      FROM game
      JOIN pet
      ON game.pet_id = pet.id
      WHERE pet.profile_id = $1
      GROUP BY pet_id
      ORDER BY "averageScore";
    `,
    [req.userId]
    )
      .then(result => {
        res.json(result.rows);
      });
  })

  .post('/', (req, res) => {
    const body = req.body;

    client.query(`
      INSERT INTO pet (name, type, profile_id)
      VALUES($1, $2, $3)
      RETURNING *;
    `,
    [body.name, body.type, req.userId])
      .then(result => {
        res.json(result.rows[0]);
      });
  })
  
  // pseudo example for goals
  // okay to have "virtual" sub-resource
  .put('/:id/completed', (req, res) => {
    const completed = req.body.completed;

    client.query(`
      UPDATE pet
      SET completed = $1
      WHERE id = $2
      AND profile_id = $3
      RETURNING *;
    `,
    [completed, req.params.id, req.userId]
    )
      .then(result => {
        res.json(result.rows[0]);
      });
  });
  

module.exports = router;
