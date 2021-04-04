const express = require('express');
const router = express.Router();
const db = require('../models');
const multer = require('multer');


const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function(req, file, cb){
    cb(null, new Date().toISOString() + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  // accept file
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
    cb(null, true);
  } else {
    //reject a file
    cb(null, false);
  }
}

const upload = multer({
  storage: storage, 
  limits: {
  fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
})



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

router.get('/:personId', isLoggedIn, (req, res) => {
  db.Person.findById(req.params.personId, (err, foundPerson) => {
    if(err) return console.log(err)
    res.render('people/show', {person: foundPerson})
  })
})

/// Edit get
router.get('/:personId/edit', isLoggedIn, (req, res) => {
  db.Person.findById(req.params.personId, (err, foundPerson) => {
    if(err) return console.log(err)
    res.render('people/edit', {person: foundPerson})
  })
})
/// Edit Put
router.put('/:personId', isLoggedIn, (req, res) => {
  db.Person.findByIdAndUpdate(req.params.personId,
      req.body,
      {new: true},
      (err, updated) => {
          if(err) return console.log(err);
          req.flash('success', 'The Person was updated successfully');
          res.redirect(`${updated._id}`)
      }
  )
})

// Pictures get
router.get('/:personId/pictures', isLoggedIn, (req, res) => {
  db.Person.findById(req.params.personId, (err, foundPerson) => {
    if(err) return console.log(err)
    res.render('people/pictures', {person: foundPerson})
  })
})

router.post('/:personId/pictures',upload.array('uploadedImages', 5), isLoggedIn, (req, res) => {
  db.Person.findByIdAndUpdate(req.params.personId,
      {
        uploadedImages: req.files,
        uploadedImageImgOne: req.files[0].path,
        uploadedImageImgTwo: req.files[1].path,
        uploadedImageImgThree: req.files[2].path,
        uploadedImageImgFour: req.files[3].path,
        uploadedImageImgFive: req.files[4].path,
      },
      (err, updated) => {
          if(err) return console.log(err);
          req.flash('success', `The Photos were added for ${updated.firstName} successfully`);
          console.log(req.files)
          res.redirect(`/people`)
      }
  )
})



module.exports = router