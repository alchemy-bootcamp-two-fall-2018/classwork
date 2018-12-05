const express = require('express');
const app = express();
const shortid = require('shortid');
const morgan = require('morgan');

/* This code is our very very simple database */

const fs = require('fs');
const filePath = './scripts/students.json';

function readData() {
  // we don't normally use sync, but fine for today
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}

function saveData(students) {
  const json = JSON.stringify(students, true, 2);
  fs.writeFileSync(filePath, json);
}
/* end database stuff */

// enhanced logging
app.use(morgan('dev'));

// register the json "middleware" body parser
app.use(express.json());


/* Defined routes: METHOD, URL PATH */

// method == app.<method>
// path = app.get('/this/is/path', ...)
app.get('/api/students', (req, res) => {
  const students = readData();

  // do we have a name query param?
  if(req.query.name) {
    // filter students that start with name
    const match = req.query.name.toLowerCase();
    const filtered = students.filter(s => {
      return s.name.toLowerCase().startsWith(match);
    });
    res.json(filtered);
  }
  else {
    // send back all students
    res.json(students);
  }
});

app.post('/api/students', (req, res) => {

  const students = readData();
  const student = req.body;
  student.id = shortid.generate();
  // student.created = new Date();
  students.push(student);
  saveData(students);

  res.json(student);
});

/* end defined routes */

/* configure and start the server */
const PORT = 3000;

app.listen(PORT, () => {
  console.log('server app started on port', PORT);
});

/* end configure and server start */