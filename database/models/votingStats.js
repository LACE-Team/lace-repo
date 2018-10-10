const mongoose = require('mongoose');
/* eslint-disable */
const Schema = mongoose.Schema;

const votingStatsSchema = new Schema({
    bill2: {
      read2: String,
      read3: String,
    },
    bill5: {
      read1: String,
      timeAllocation: String,
      read2: String,
      read3: String,
    },
    bill27: {
      read1: String,
      timeAllocation: String,
      read2: String,
      read3: String,
    },
});

const votingStats = mongoose.model('votingStats', votingStatsSchema);

module.exports = votingStats;
