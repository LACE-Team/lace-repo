import { Schema as _Schema, model } from 'mongoose';

// Save a reference to the Schema constructor
const Schema = _Schema;

// schema to grab data out of careerDetails array
const CareerDetailSchema = new Schema({
  parliamentNumber: String,
  positions: [String],
});
// schema for eachMPP (
const eachMPPSchema = new Schema({
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
const eachMPP = model('eachMPP', eachMPPSchema);

export default eachMPP;
