// Require mongoose
var mongoose = require("mongoose");
//npm packages for validating urls and emails with Mongoose
require('mongoose-type-url');
require('mongoose-type-email');
//bycrypt for encrypting passwords
bcrypt = require('bcrypt'),
SALT_WORK_FACTOR = 10;


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
  password: {
    type: String,
    required: true
  },
  imageURL: {
    type: mongoose.SchemaTypes.Url
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

profileSchema.pre('save', function(next){
  var user = this;

  //only hash the password if it has been modified or is new
  if(!user.isModified('password')) return next();

  //generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
    if(err) return next (err);

    //hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, salt){
      if(err) return next(err);

      //override the cleartext password with the hashed one
      user.password = hash;
      next()
    });
  });

});

profileSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
    if(err) return cb(err);
    cb(null, isMatch);
  });
};

// Create the Profile model using the headlineSchema
var Profile = mongoose.model("Profile", profileSchema);

// Export the Profile model
module.exports = Profile;