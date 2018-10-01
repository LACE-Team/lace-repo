// app.get('/scrape', (_req, res) => {
//   axios
//     .get(
//       'https://www.ola.org/en/legislative-business/house-documents/parliament-42/session-1/2018-08-14/hansard#P402_92152'
//     )
//     .then(response => {
//       const $ = cheerio.load(response.data);

//       $('.speakerStart').each((_i, element) => {
//         const result = {};

//         result.object = $(element).text();

//         console.log(result);

//         db.Hansard.create(result)
//           .then(dbHansard => {
//             // View the added result in the console
//             console.log(dbHansard);
//           })
//           .catch(err =>
//             // If an error occurred, send it to the client
//             res.json(err)
//           );
//       });
//     });

//   // Send a "Scrape Complete" message to the browser
//   res.send('Scrape Complete');
// });
