var mongoose = require('mongoose');
const waitingSchema = new mongoose.Schema({
  fName : String,
  Lname : String,
  Uname : String,
  email : String,
  Address : String,
  Password : String,
  Country : String,
  State : String,
  Zip_code : Number
});
const Waiting = mongoose.model("Waiting",waitingSchema);

module.exports = Waiting;
