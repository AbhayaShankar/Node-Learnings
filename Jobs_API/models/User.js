const mongoose = require("mongoose");
const { Schema } = mongoose;

var validateEmail = function (email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
    min: [3, "Enter your full name"],
    max: [60, "Name character too long... Dont write your entire family name."],
  },

  email: {
    type: String,
    required: [true, "Email field is required"],
    lowercase: true,
    unique: true,
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please fill a valid email...",
    ],
  },

  password: {
    type: String,
    required: [true, "Please enter a strong password"],
    min: 6,
    max: 12,
    match: [
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/,
      "Please password with atleast one uppercase letter, one lowercase letter, one number and one special character",
    ],
  },
});

module.exports = mongoose.model("User", UserSchema);
