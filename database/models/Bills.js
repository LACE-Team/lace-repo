/* eslint-disable */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const billsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  URL: {
    type: String,
    required: true,
  },
  MPP: {
    type: String,
    required: true,
  },
  data: {
    type: String,
    required: true,
    text: true,
  },
});

// This creates our model from the above schema, using mongoose's model method
const bills = mongoose.model('bills', billsSchema);

module.exports = bills;
