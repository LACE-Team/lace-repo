/* eslint-disable */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MPPurlSchema = new Schema({
  url: {
    type: String,
  },
});

// This creates our model from the above schema, using mongoose's model method
const MPPurl = mongoose.model('MPPurl', MPPurlSchema);

module.exports = MPPurl;