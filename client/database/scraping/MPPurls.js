// app.get('/scrape', (req, res) => {
//     axios.get('https://www.ola.org/en/members/current').then(response => {
//       const $ = cheerio.load(response.data);
//       $('.is-active').each((i, element) => {
//         const result = {};
//         result.name = $(element)
//           .find('a')
//           .text();
//         const urlArray = [];
//         const url = $(element)
//           .find('a')
//           .attr('href');
//         result.url = `https://www.ola.org${url}`;
//         urlArray.push(result.url);
//         // console.log(urlArray);
//         db.MPPurl.create(result)
//           .then(MPPurl => {
//             console.log(MPPurl);
//           })
//           .catch(err => res.json(err));
//       });
  
//       // Send a "Scrape Complete" message to the browser
//       res.send('Scrape Complete');
//     });
//   });
  
