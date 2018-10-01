import { Schema as _Schema, model } from 'mongoose';

// Save a reference to the Schema constructor
const Schema = _Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const HansardSchema = new Schema({
  // `title` is required and of type String
  object: {
    type: String,
  },
});

// This creates our model from the above schema, using mongoose's model method
const Hansard = model('Hansard', HansardSchema);

// Export the Article model
export default Hansard;
