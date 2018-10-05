const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HansardSchema = Schema({
  name: {
    type: String,
  },
  speech: {
    type: String,
  },
});

const Hansard = mongoose.model('Hansard', HansardSchema);

module.exports = Hansard;
