// Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongojs = require('mongojs');
const request = require('request');
const cheerio = require('cheerio');
const cheerioTableParser = require('cheerio-tableparser');
const passport = require('passport');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
// Initialize Express
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
app.use(passport.initialize());
require('./config/passport');

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Hook mongojs configuration to the db variable
// const db = mongojs(databaseUrl, collections);
// db.on('error', error => {
//   console.log('Database Error:', error);
// });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Listen on port 3000
app.listen(PORT, () => {
  console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
});

module.exports = app;
