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

router.get('/', (req, res) => {
  res.render('people/index')
})


module.exports = router