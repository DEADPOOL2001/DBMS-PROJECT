var mongoose = require('mongoose');
const messSchema = new mongoose.Schema({
  courseID:String,
  name:String,
  head:String,
  body :String,
  link:String
});
const Mess = mongoose.model("mess",messSchema);
module.exports = Mess;
