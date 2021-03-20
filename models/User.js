const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  name: String,
}, {timestamps: true})


userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
