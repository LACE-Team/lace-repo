/* eslint-disable */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bill5Schema = new Schema({
  Member: {
    type: String,
    required: true,
  },
  FirstReading_July30_2018CarriedonDiv: {
    type: String,
    required: false,
  },
  TimeAllocation_August14_2018CarriedonDiv: {
    type: String,
    required: false,
  },
  SecondReading_August_14_2018CarriedonDiv: {
    type: String,
    required: false,
  },
  ThirdReading_August_14_2018CarriedonDiv: {
    type: String,
    required: false,
  },
});

const bill5 = mongoose.model('bill5', bill5Schema);
// bill5
//   .find({})
//   .then(vote => {
//     console.log(`my${vote}`);
//   })
//   .catch(err => console.log(err))

module.exports = bill5;
