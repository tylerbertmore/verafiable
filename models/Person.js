const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  fullName: String,
  gender: String,
  ageRange: String,
  birthday: Date,
  ethnicity: String,
  religion: String,
  seeking: String,
  children: String,
  wantChildren: String,
  stepParent: String,
  alcoholUse: String,
  cigaretteUse: String,
  marijuanaUse: String
  

}, {timestamps: true})

const Person = mongoose.model('Person', personSchema);

module.exports = Person;