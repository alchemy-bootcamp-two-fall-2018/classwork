const express = require('express');
const app = express();
const morgan = require('morgan');
const pg = require('pg');

// enhanced logging
app.use(morgan('dev'));

// register the json "middleware" body parser
app.use(express.json());

/* Connect to pg */
const Client = pg.Client;
const dbUrl = 'postgres://localhost:5432/school';
const client = new Client(dbUrl);
client.connect();
/* end connect pg */


/* Defined routes: METHOD, URL PATH */

// method == app.<method>
// path = app.get('/this/is/path', ...)
app.get('/api/students', (req, res) => {
  // TODO: reimplement queries
  // // do we have a name query param?
  // if(req.query.name) {

  client.query(`
    SELECT id, name FROM students;
  `)
    .then(result => {
      res.json(result.rows);
    });

});

app.get('/api/students/:id', (req, res) => {
  client.query(`
    SELECT * FROM students WHERE id = $1;
  `,
  [req.params.id])
    .then(result => {
      res.json(result.rows[0]);
    });
});

app.post('/api/students', (req, res) => {
  const body = req.body;

  client.query(`
    INSERT INTO students (name, description, track, start_date)
    VALUES($1, $2, $3, $4)
    RETURNING id, name, description, track, start_date as "startDate";
  `,
  [body.name, body.description, body.track, body.startDate])
    .then(result => {
      res.json(result.rows[0]);
    });
});

/* end defined routes */

/* configure and start the server */
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});

/* end configure and server start */