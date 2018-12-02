/* eslint-disable */
const cheerio = require('cheerio');
const axios = require('axios');
const CronJob = require('cron').CronJob;
const eachmpp = require('../models/eachMPP');
const db = require('../models/MPPurl');

// const eachmppScraper = new CronJob('50 * * * * *', () => {
const eachmppScraper = new CronJob('* 2 23 1 1 *', () => {
  const d = new Date();
  console.log('Second:', d);
  db.find({}, { _id: 0.0, __v: 0.0 }, (err, docs) => {
    const urlArray = docs.map(el => el.url);

    urlArray.forEach(element => {
      axios(element).then(response => {
        const $ = cheerio.load(response.data);
        const result = {};
        result.url = element;
        result.name = $('h1.field-content')
          .text()
          .replace(/ *\([^)]*\) */g, '')
          .replace(/\s+/g, ' ')
          .trim();
        let index = result.name.lastIndexOf(' ')
        result.lastName = result.name.substring(index +1)
        const photo = $('.views-field-field-image')
          .find('img')
          .attr('src');
        result.photo = `https://www.ola.org${photo}`;
        result.party = $('.views-field-field-party').text();
        result.dateOfService = $('.block-views-blockmember-block-6')
          .find($('.view-content'))
          .text()
          .trim()
          .replace(/(\n*)\n/g, '$1');
        result.careerDetails = [];
        const careerDetails = $('#block-views-block-member-member-role-history')
          .find('.view-content')
          .children();
        for (let i = 0; i < careerDetails.length; i += 2) {
          const parliamentNumber = $(careerDetails[i])
            .text()
            .replace(/\n/g, '');
          const allPositions = $(careerDetails[i + 1]).find('.field-content');
          const positions = [];
          for (let j = 0; j < allPositions.length; j += 1) {
            if (
              $(allPositions[j])
                .text()
                .startsWith('Minister') ||
              $(allPositions[j])
                .text()
                .startsWith('Premier') ||
              $(allPositions[j])
                .text()
                .startsWith('Leader')
            ) {
              positions.push(
                $(allPositions[j])
                  .text()
                  .replace(/[\r\n]+/g, '')
              );
            }
          }
          result.careerDetails.push({
            parliamentNumber,
            positions,
          });
        }
        result.currentRiding = $('.views-field-name').text();
        result.ridingMap = $('.views-field-field-riding-map')
          .find('a')
          .attr('href');
        eachmpp
          .create(result)
          .then(dbeachMPP => {
            console.log(dbeachMPP);
          })
          .catch(err => res.json(err));
      });
    });
  });
})
eachmppScraper.start();
// eachmppScraper.stop();

module.exports = eachmppScraper;