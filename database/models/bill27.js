/* eslint-disable */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bill27Schema = new Schema({
  Member: {
    type: String,
    required: true,
  },
  FirstReading_August9_2018CarriedonDiv: {
    type: String,
    required: false,
  },
});

const bill27 = mongoose.model('bill27', bill27Schema);
// bill27
//   .find({})
//   .then(vote => {
//     console.log(`my${vote}`);
//   })
//   .catch(err => console.log(err));
module.exports = bill27;
