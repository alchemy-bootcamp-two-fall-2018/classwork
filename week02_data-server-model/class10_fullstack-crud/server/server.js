const express = require('express');
const app = express();
const morgan = require('morgan');
const students = require('./lib/routes/students');
const client = require('./db-client');

// enhanced logging
app.use(morgan('dev'));

// register the json "middleware" body parser
app.use(express.json());

/* Defined routes: METHOD, URL PATH */
// method == app.<method>
// path = app.get('/this/is/path', ...)

app.get('/api/tracks', (req, res) => {
  client.query(`
    SELECT id, name, short_name as "shortName"
    FROM track
    ORDER BY name;
  `)
    .then(result => {
      res.json(result.rows);
    });
});

app.use(students);


/* end defined routes */

/* configure and start the server */
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});

/* end configure and server start */