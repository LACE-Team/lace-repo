// Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const mongojs = require('mongojs');
// const request = require('request');
const cheerio = require('cheerio');
const axios = require('axios');
// const cheerioTableParser = require('cheerio-tableparser');
const mongoose = require('mongoose');
const db = require('./client/database/models');

// Initialize Express
const app = express();
const PORT = process.env.PORT || 8080;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
mongoose.connect('mongodb://localhost/lace-repo');

// database is called lace-repo, you can see from 'mongoose.connect' code above
// Scraping steps:
// **uncomment lines 5-12, and 25
// 1) connect to your mongoDB
// 2) open Database folder, open scraping folder, copy code from "scrape" file
// 3) save
// 4) yarn start (this is development start, uses nodemon)
// 5) let React app load (loads on 3000)
// 6) open a new tab in your browser and type http://localhost:8080/scrape in browser
// 7) you'll get a "Scrape Complete" if things worked
// 8) come back to this page and you will see results in the console.
// 9) view collection in MongoDB in the lace-repo database

// copy Entire scrape file just below here
// HERE//
app.get('/scrape', (_req, res) => {
  axios
    .get(
      'https://www.ola.org/en/legislative-business/house-documents/parliament-42/session-1/2018-08-14/hansard#P402_92152'
    )
    .then(response => {
      const $ = cheerio.load(response.data);

      $('.speakerStart').each((_i, element) => {
        const result = {};

        result.object = $(element).text();

        console.log(result);

        db.Hansard.create(result)
          .then(dbHansard => {
            // View the added result in the console
            console.log(dbHansard);
          })
          .catch(err =>
            // If an error occurred, send it to the client
            res.json(err)
          );
      });
    });

  // Send a "Scrape Complete" message to the browser
  res.send('Scrape Complete');
});
// scrape code goes ABOVE here!!
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Listen on port 3000
app.listen(PORT, () => {
  console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
});
