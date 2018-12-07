const express = require('express');
const app = express();
const morgan = require('morgan');
const students = require('./lib/routes/students');
const tracks = require('./lib/routes/tracks');

// enhanced logging
app.use(morgan('dev'));

// register the json "middleware" body parser
app.use(express.json());

/* Defined routes: METHOD, URL PATH */
// method == app.<method>
// path = app.get('/this/is/path', ...)

app.use('/api/tracks', tracks);
app.use('/api/students', students);


/* end defined routes */

/* configure and start the server */
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});

/* end configure and server start */