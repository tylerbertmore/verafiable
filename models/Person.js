const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: String,
  originallyFrom: String,
  seeking: String,
  ageRange: String,
  birthday: Date,
  ethnicity: String,
  religion: String,
  politics: String,
  children: String,
  wantChildren: String,
  stepParent: String,
  alcoholUse: String,
  cigaretteUse: String,
  marijuanaUse: String,
  exercise: String,
  tattoos: String,
  partnerTattoos: String,
  piercings: String,
  socialMedia: String,
  military: String,
  militaryBranch: String,
  partnerMilitary: String,
  livingSituation: String,
  livingStatus: String,
  areaOfTown: String,
  outdoorsy: String,
  outdoorActivities: String,
  prevMarried: String,
  prevMarriedAmount: Number,
  hobbies: String,
  pets: String,
  petTypes: String,
  books: String,
  bookTypes: String,
  tv: String,
  tvTypes: String,
  movies: String,
  favMovieGenre: String,
  gamer: String,
  favGameGenre: String
  

}, {timestamps: true})

const Person = mongoose.model('Person', personSchema);

module.exports = Person;