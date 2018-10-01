import { Schema as _Schema, model } from 'mongoose';

// Save a reference to the Schema constructor
const Schema = _Schema;

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
const MPPurl = model('MPPurl', MPPurlSchema);

export default MPPurl;
