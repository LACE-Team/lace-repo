// Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongojs = require('mongojs');
const request = require('request');
const cheerio = require('cheerio');
const cheerioTableParser = require('cheerio-tableparser');

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

// Database configuration
const databaseUrl = 'LACE';
const collections = ['Bills'];

// Hook mongojs configuration to the db variable
const db = mongojs(databaseUrl, collections);
db.on('error', error => {
  console.log('Database Error:', error);
});

// Main route (simple Hello World Message)
// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

// Send every other request to the React app
// Define any API routes before this runs
app.get('/scrape', (req, res) => {
  request(
    'https://www.ola.org/en/legislative-business/house-documents/parliament-42/session-1/2018-08-14/hansard#P402_92152',
    (error, response, html) => {
      const $ = cheerio.load(html);
      cheerioTableParser($);

      $('.speakerStart').each((i, element) => {
        const object = $(element).text();

        console.log(object);

        // console.log(typeof object);
        db.Hansard.insert(
          {
            object,
          },
          (err, inserted) => {
            if (err) {
              // Log the error if one is encountered during the query
              console.log(inserted);
              console.log(err);
            }
          }
        );
      });
    }
  );

  // Send a "Scrape Complete" message to the browser
  res.send('Scrape Complete');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Listen on port 3000
app.listen(PORT, () => {
  console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
});
