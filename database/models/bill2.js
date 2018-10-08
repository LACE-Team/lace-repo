/* eslint-disable */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bill2Schema = new Schema({
  Member: {
    type: String,
    required: true,
  },
  FirstReading_July16_2018Carried: {
    type: String,
    required: false,
  },
  SecondReading_July_25_2018Carried: {
    type: String,
    required: false,
  },
  ThirdReading_July_25_2018Carried: {
    type: String,
    required: false,
  },
});

const bill2 = mongoose.model('bill2', bill2Schema);
bill2
  .find({})
  .then(vote => {
    console.log(`my${vote}`);
  })
  .catch(err => console.log(err));
module.exports = bill2;
