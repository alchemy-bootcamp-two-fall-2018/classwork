const express = require('express');
const client = require('../../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap

router
  .get('/', (req, res) => {
    client.query(`
      SELECT 
        student.id, 
        student.name as name,
        start_date as "startDate",
        track.id as "trackId",  
        track.name as track
      FROM student
      JOIN track
      ON student.track_id = track.id
      ORDER BY start_date DESC, name ASC;
    `)
      .then(result => {
        res.json(result.rows);
      });
  })

  .get('/:id', (req, res) => {
    client.query(`
      SELECT * FROM student WHERE id = $1;
    `,
    [req.params.id])
      .then(result => {
        res.json(result.rows[0]);
      });
  })

  .post('/', (req, res) => {
    const body = req.body;

    client.query(`
      INSERT INTO student (name, track_id, start_date)
      VALUES($1, $2, $3)
      RETURNING id;
    `,
    [body.name, body.trackId, body.startDate])
      .then(result => {
        const id = result.rows[0].id;
        
        return client.query(`
          SELECT 
            student.id, 
            student.name as name,
            start_date as "startDate",
            track.id as "trackId",  
            track.name as track
          FROM student
          JOIN track
          ON student.track_id = track.id 
          WHERE student.id = $1;
        `,
        [id]);
      })
      .then(result => {
        res.json(result.rows[0]);
      });
  });

module.exports = router;
