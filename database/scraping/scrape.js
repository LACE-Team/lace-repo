// Database configuration
const databaseUrl = 'LACE';
// const collections = ['Bills'];
const collections = ['Hansard'];
// Hook mongojs configuration to the db variable
const db = mongojs(databaseUrl, collections);
db.on('error', error => {
  console.log('Database Error:', error);
});




// app.get('/scrape', (req, res) => {
//   request('https://www.ola.org/en/legislative-business/bills/current', (error, response, html) => {
//     const $ = cheerio.load(html);
//     cheerioTableParser($);

//     $('.views-row').each((i, element) => {
//       const title = $(element)
//         .find('h2')
//         .text();
//       const URL = $(element)
//         .find('a')
//         .attr('href');
//       const MPP = $(element)
//         .find('p')
//         .text();
//       const data = $(element).parsetable(false, false, true);

//       // let date = $(element).find("td").eq(0).text()
//       // let billStage = $(element).find("td").eq(1).text()
//       // let activity =  $(element).find("td").eq(2).text()
//       // let committee =  $(element).find("td").eq(3).text()

//       // If this found element had both a title and a link
//       if (title && URL) {
//         // Insert the data in the scrapedData db
//         db.scrapedData.insert(
//           {
//             title,
//             URL,
//             MPP,
//             data,
//             // date, billStage, activity, committee
//           },
//           (err, inserted) => {
//             if (err) {
//               // Log the error if one is encountered during the query
//               console.log(err);
//             } else {
//               // Otherwise, log the inserted data
//               console.log(inserted);
//             }
//           }
//         );
//       }
//     });
//   });

app.get('/scrape', (req, res) => {
  request(
    'https://www.ola.org/en/legislative-business/house-documents/parliament-42/session-1/2018-08-14/hansard#P402_92152',
    (error, response, html) => {
      const $ = cheerio.load(html);
      cheerioTableParser($);

      $('.speakerStart').each((i, element) => {
        let object = $(element).text();
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