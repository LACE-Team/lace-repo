/* eslint-disable */
// Dependencies
import seed from './database/seeds1/mppqueenparks';
import array from './docs/larray_eachmpps';

const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const eachMPP = require('./database/models/eachMPP');
const hansard = require('./database/models/Hansard');
const mppqueenparks = require('./database/models/mppQueenPark');
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

// the setup for passport to use the cookiesssss
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// passport routes
require('./routes/authRoutes')(app);

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);
// authRoutes(app);

let billsRouter = express.Router();
billsRouter = require('./database/scraping/Bills')(billsRouter);

let eachmppRouter = express.Router();
eachmppRouter = require('./database/scraping/eachMPP')(eachmppRouter);

let mppUrlRouter = express.Router();
mppUrlRouter = require('./database/scraping/MPPurls')(mppUrlRouter);

let hansardRouter = express.Router();
hansardRouter = require('./database/scraping/Hansard')(hansardRouter);

app.use('/bills', billsRouter);
app.use('/eachmpp', eachmppRouter);
app.use('/mppUrl', mppUrlRouter);
app.use('/hansard', hansardRouter);
app.use('/api/mppName/:name', (req, res) => {
  eachMPP
    .find({ $text: { $search: req.params.name } })
    .then(dbModel => {
      res.json(dbModel);
      console.log(dbModel);
    })
    .catch(err => {
      console.error(err);
      res.status(422).json(err);
    });
});
app.use('/api/hansard/:name', (req, res) => {
  hansard
    .find({ $text: { $search: 'ford' } })
    .then(speech => {
      res.json(speech);
    })
    .catch(err => {
      console.error(err);
      res.status(422).json(err);
    });
});

const result = array.map(a => a.name);

for (let m = 0; m < result.length; m += 1) {
  const last = result[m].substring(result[m].lastIndexOf(' ') + 1);
  
}

// mppqueenparks
//   .find({ $text: { $search: 'anand' } })
//   .then(dbmodel =>
//     eachMPP.findOneAndUpdate(
//       { $text: { $search: 'anand' } },
//       { telephone: dbmodel[0]._id },
//       { fields: 'telephone', new: true }
//     )
//   )
//   .then(dbQp => {
//     console.log(dbQp);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// mppqueenparks
//   .create(seed)
//   .then(dbLibrary => {
//     console.log(dbLibrary);
//   })
//   .catch(err => {
//     console.log(err.message);
//   });

mppqueenparks
  .find({ $text: { $search: 'smith' } })
  .then(dbLibrary => {
    console.log(dbLibrary);
  })
  .catch(err => {
    console.log(err.message);
  });

mongoose.connect('mongodb://localhost/lace-repo');

// mongoose.connect('mongodb://localhost/lace-repo');

// connecting to mlab
// database is called lace-repo, you can see from 'mongoose.connect' code above
// Scraping steps:

// 1) connect to your mongoDB
// 2) yarn start (this is development start, uses nodemon)
// 3) let React app load (loads on 3000)
// 4) open a new tab in your browser
// 5a) to scrape bills: type http://localhost:8080/bills/scrape in browser
// 6) you'll get a "Scrape Complete" if things worked
// 7) must scrape mppUrl before each MPP. To scrape mppurl: type http://localhost:8080/mppUrl/scrape in browser
// 8) remidner, scrape mppUrl first. To scrape eachMPP: type http://localhost:8080/eachMPP/scrape in browser
// 9) to scrape hansard: type http://localhost:8080/hansard/scrape in browser
// 10) view collection in MongoDB in the lace-repo database

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Listen on port 3000
app.listen(PORT, () => {
  console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
});
