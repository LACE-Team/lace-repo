// app.get('/scrape', (req, res) => {
//   axios.get('https://www.ola.org/en/legislative-business/bills/current').then(response => {
//     const $ = cheerio.load(response.data);
//     cheerioTableParser($);
//     $('.views-row').each((i, element) => {
//       const result = {};

//       result.title = $(element)
//         .find('h2')
//         .text();
//       const URL = $(element)
//         .find('a')
//         .attr('href');
//       result.URL = `https://www.ola.org${URL}`;
//       result.MPP = $(element)
//         .find('p')
//         .text();
//       result.data = $(element).parsetable(false, false, true);

//       if (result.title && result.URL) {
//         db.Bills.create(result)
//           .then(dbBills => {
//             console.log(dbBills);
//           })
//           .catch(err => res.json(err));
//       }
//     });

//     // Send a "Scrape Complete" message to the browser
//     res.send('Scrape Complete');
//   });
// });
