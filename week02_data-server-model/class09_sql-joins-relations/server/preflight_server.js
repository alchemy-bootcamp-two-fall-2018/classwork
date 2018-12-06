// basic express app
const express = require('express');
const app = express();

// logging
const morgan = require('morgan');
app.use(morgan('dev'));

// middleware (cors and read json body)
const cors = require('cors');
app.use(cors());
app.use(express.json());

// connect to the database
const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/livable_cities';
const client = new Client(databaseUrl);
client.connect();

// routes
app.get('/api/neighborhoods', (req, res) => {
  client.query(`
    SELECT 
      id,
      name, 
      city,
      population,
      founded,
      description
    FROM neighborhoods;
  `)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => console.log(err));
});

app.get('/api/neighborhoods/:id', (req, res) => {
  client.query(`
    SELECT 
      id,
      name, 
      city,
      population,
      founded,
      description
    FROM neighborhoods
    WHERE id = $1;
  `,
  [req.params.id]
  )
    .then(result => {
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
  
});

app.post('/api/neighborhoods', (req, res) => {
  console.log('posting');
  const body = req.body;

  client.query(`
    INSERT INTO neighborhoods (name, city, population, founded, description)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `,
  [body.name, body.city, body.population, body.founded, body.description]
  )
    .then(result => {
      // we always get rows back, in this case we just want first one.
      res.send(result.rows[0]);
    })
    .catch(err => console.log(err));
});


// start "listening" (run) the app (server)
app.listen(3000, () => console.log('app running...'));