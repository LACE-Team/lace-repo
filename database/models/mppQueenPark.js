/* eslint-disable */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mppQueenParkSchema = new Schema({
  Honorific: {
    type: String,
  },
  Name: {
    type: String,
    required: true,
    text: true,
  },
  OfficeType: {
    type: String,
    text: true,
  },
  Department: {
    type: String,
  },
  Suite: {
    type: String,
  },
  Street: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
  Province: {
    type: String,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
  PostalCode: {
    type: String,
    required: true,
    text: true,
  },
  EmailAddress: {
    type: String,
  },
  Telephone: {
    type: String,
    required: true,
  },
  Fax: {
    type: String,
  },
});
// This creates our model from the above schema, using mongoose's model method
const mppqueenparks = mongoose.model('mppqueenparks', mppQueenParkSchema);

module.exports = mppqueenparks;