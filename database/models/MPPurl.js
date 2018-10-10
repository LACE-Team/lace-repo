/* eslint-disable */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MPPurlSchema = new Schema({
  url: {
    type: String,
  },
});

const MPPurl = mongoose.model('MPPurl', MPPurlSchema);

module.exports = MPPurl;