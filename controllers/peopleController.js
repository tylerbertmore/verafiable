const express = require('express');
const router = express.Router();
const db = require('../models');



function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
      return next();
  }
  req.flash('error', 'You must sign in to view that!');
  res.redirect('/login');
}

router.get('/', isLoggedIn, (req, res) => {
  db.Person.find({})
  .sort({'createdAt': -1})
  .exec((err, foundPeople) => {
    if(err) return console.log(err);
    res.render('people/index', {allPeople: foundPeople})
  })
})

router.get('/:userId', isLoggedIn, (req, res) => {
  db.Person.findById(req.params.userId, (err, foundUser) => {
    if(err) return console.log(err)
    res.render('people/show', {person: foundUser})
  })
})

/// Edit get
router.get('/:userId/edit', isLoggedIn, (req, res) => {
  db.Person.findById(req.params.userId, (err, foundUser) => {
    if(err) return console.log(err)
    res.render('people/edit', {person: foundUser})
  })
})
/// Edit Put
router.put('/:user', isLoggedIn, (req, res) => {
  db.Person.findByIdAndUpdate(req.params.user,
      req.body,
      {new: true},
      (err, updated) => {
          if(err) return console.log(err);
          req.flash('success', 'The Person was updated successfully');
          res.redirect(`${updated._id}`)
      }
  )
})


module.exports = router