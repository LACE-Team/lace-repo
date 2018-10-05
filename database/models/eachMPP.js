/* eslint-disable */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// schema to grab data out of careerDetails array
const CareerDetailSchema = new Schema({
  parliamentNumber: String,
  positions: [String],
});
// schema for eachMPP (
const eachMPPSchema = new Schema({
  url: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  party: {
    type: String,
  },
  dateOfService: {
    type: String,
  },
  careerTimeline: {
    type: String,
  },
  careerDetails: {
    type: [CareerDetailSchema],
  },
  currentRiding: {
    type: String,
  },
  ridingMap: {
    type: String,
  },
});

// This creates our model from the above schema, using mongoose's model method
const eachMPP = mongoose.model('eachMPP', eachMPPSchema);

module.exports = eachMPP;
