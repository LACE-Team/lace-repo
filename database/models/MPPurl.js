const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const MPPurlSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

// This creates our model from the above schema, using mongoose's model method
const MPPurl = mongoose.model('MPPurl', MPPurlSchema);

module.exports = MPPurl;
