const client = require('../db-client');
const students = require('./students.json');
const tracks = require('./tracks');

// "Promise all" does a parallel execution of async tasks
Promise.all(
  tracks.map(track => {
    return client.query(`
      INSERT INTO track (name, short_name)
      VALUES ($1, $2);
    `,
    [track.name, track.shortName]);
  })
)
  .then(() => {
    return Promise.all(
      students.map(student => {
        return client.query(`
          INSERT INTO student (name, track_id, start_date)
          SELECT 
            $1 as name, 
            id as track_id,
            $2 as start_date
          FROM track
          WHERE short_name = $3;
        `,
        [student.name, student.startDate, student.track]);
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