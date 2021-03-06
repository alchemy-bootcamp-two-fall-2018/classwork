const express = require('express');
const app = express();
const morgan = require('morgan');
const auth = require('./routes/auth');
const pets = require('./routes/pets');

// enhanced logging
app.use(morgan('dev'));

// register the json "middleware" body parser
app.use(express.json());

function checkAuth(req, res, next) {
  const userId = req.get('Authorization');
  if(!userId) {
    res.status(401).json({ error: 'no authorization found' });
    return;
  }
  req.userId = userId;
  next();
}

// register our routes
app.use('/api/auth', auth);
app.use('/api/pets', checkAuth, pets);

module.exports = app;