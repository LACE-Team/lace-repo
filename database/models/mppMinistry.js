/* eslint-disable */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mppMinistrySchema = new Schema({
  Honorific: {
    type: String,
  },
  Name: {
    type: String,
    required: true,
  },
  OfficeType: {
    type: String,
    required: true,
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
    required: true,
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
const mppministries = mongoose.model('mppministries', mppMinistrySchema);

module.exports = mppministries;