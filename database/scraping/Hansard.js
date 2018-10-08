const cheerio = require('cheerio');
const axios = require('axios');
const mongoose = require('mongoose');
const Hansard = require('../models/Hansard');
const keys = require('../../config/keys');

// mongoose.connect('mongodb://localhost/lace-repo');

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

// still working on an array to get each page, right now the scrape is hardcoded with Dougie.
const hansardRouter = router => {
  router.get('/scrape', (_req, res) => {
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

          Hansard.create(result)
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
  return router;
};
module.exports = hansardRouter;
