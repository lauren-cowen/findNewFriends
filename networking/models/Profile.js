// Require mongoose
var mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

var profileSchema = new Schema({
  // First Name, a string, must be entered
  firtsName: {
    type: String,
    required: true,
  },
  // Last Name, a string, must be entered
  lastName: {
    type: String,
    required: true
  },
  // e-mail, a string, must be entered
  eMail: {
    type: mongoose.SchemaTypes.Email,
    required: true
  },
  // date is just a string
  generation: {
    type: String,
    required: true
  },
  quizQuestion1: {
    type: Boolean,
    default: false
  },
  quizQuestion2: {
  	type: Boolean,
  	default: false
  },
  quizQuestion3: {
  	type: String,
  	required: true
  }
  matches: {
  	type: Array,
  	default: []
  }
});

// Create the Profile model using the headlineSchema
var Profile = mongoose.model("Profile", profileSchema);

// Export the Profile model
module.exports = Profile;