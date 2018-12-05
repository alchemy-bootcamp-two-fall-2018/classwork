const pg = require('pg');
const Client = pg.Client;
const databaseUrl = 'postgres://localhost:5432/school';
const students = require('./students.json');

const client = new Client(databaseUrl);

client.connect()
  .then(() => {
    // "Promise all" does a parallel execution of async tasks
    return Promise.all(
      students.map(student => {
        return client.query(`
          INSERT INTO students (name, description, track, start_date)
          VALUES ($1, $2, $3, $4);
        `,
        [student.name, student.description, student.track, student.start_date]);
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