// MODULES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const passport = require('passport');
const flash = require('connect-flash');
const LocalStrategy = require('passport-local');
require('dotenv').config();
const PORT = process.env.PORT;
const ctrl = require('./controllers');
const db = require('./models');   


// VIEW ENGINE
app.set('view engine', 'ejs');

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
      return next();
  }
  req.flash('error', 'You must sign in first');
  res.redirect('/login');
}


//MIDDLEWARE
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));




app.use(require('express-session')({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true, 
  cookie: {
      httpOnly: true,
      expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge: 1000 * 60 * 60 * 24 * 7
  }
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(db.User.authenticate()));
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());
app.use(flash());

app.use((req, res, next) => {
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.currentUser = req.user;
  next();
});


app.use((req, res, next) => {
  const method = req.method;
  const path = req.url;
  const timestamp = new Date().toLocaleTimeString();
  console.log(`${method} ${path} ${timestamp}`);
  next(); 
});

/// ROUTES

app.get('/', (req, res) => {
  res.render('index');
})

app.get('/usertest', (req, res) => {
  res.render('usertest');
})

// SIGN UP GET
app.get('/signup', (req, res) => {
  res.render('users/signup')
})
// SIGN UP POST
app.post('/signup', async (req, res) => {
  try{
      const newUser = new db.User({username: req.body.username, name: req.body.name, role: req.body.role})
      const registeredUser = await db.User.register(newUser, req.body.password)
      req.login(registeredUser, err => {
          if(err) return console.log(err);
          req.flash('success', 'Successfully Registered!')
          res.redirect('/people/index');
      })
  } catch(e){
      req.flash('error', e.message);
      res.redirect('signup');
  }
})

// LOGIN GET
app.get('/login', (req, res) => {
  res.render('users/login');
});
//LOGIN POST
app.post('/login', passport.authenticate('local', {
  failureFlash: true,
  failureRedirect: '/login',
  }), (req, res) => {
  req.flash('success', 'Successfully logged in!');
  res.redirect('/people/');
});

//LOGOUT GET
app.get('/logout', (req, res) => {
  req.logout();
  req.flash('success', 'You have logged out Successfully');
  res.redirect('login')
})





app.get('/questionnaire', (req, res) => {
  res.render('questionnaire');
})
app.post('/questionnaire', isLoggedIn, (req, res) => {
  db.Person.create(
    {firstName: req.body.firstName,
      lastName: req.body.lastName,
       gender: req.body.gender,
       originallyFrom: req.body.originallyFrom,
       seeking: req.body.seeking,
       ageRange: req.body.ageRange,
       birthday: req.body.birthday,
       ethnicity: req.body.ethnicity,
       religion: req.body.religion,
       politics: req.body.politics,
       children: req.body.children,
       wantChildren: req.body.wantChildren,
       stepParent: req.body.stepParent,
       alcoholUse: req.body.alcoholUse,
       cigaretteUse: req.body.cigaretteUse,
       marijuanaUse: req.body.marijuanaUse,
       exercise: req.body.exercise,
       tattoos: req.body.tattoos,
       partnerTattoos: req.body.tattoos,
       piercings: req.body.piercings,
       socialMedia: req.body.socialMedia,
       military: req.body.military,
       militaryBranch: req.body.militaryBranch,
       partnerMilitary: req.body.partnerMilitary,
       livingSituation: req.body.livingSituation,
       livingStatus: req.body.livingStatus,
       areaOfTown: req.body.areaOfTown,
       outdoorsy: req.body.outdoorsy,
       outdoorActivities: req.body.outdoorActivities,
       prevMarried: req.body.prevMarried,
       prevMarriedAmount: req.body.prevMarriedAmount,
       hobbies: req.body.hobbies,
       pets: req.body.pets,
       petTypes: req.body.petTypes,
       books: req.body.books,
       bookTypes: req.body.bookTypes,
       tv: req.body.tv,
       tvTypes: req.body.tvTypes,
       movies: req.body.movies,
       favMovieGenre: req.body.favMovieGenre,
       gamer: req.body.gamer,
       favGameGenre: req.body.favGameGenre,
        }, (err, newPerson) =>{
    if(err){
      console.log(err)
    }
    console.log(newPerson)
  })
  req.flash('success', 'Person Successfully Added');
  res.redirect('/people/')
});

// Users controller
app.use('/users', ctrl.users);
// Tickets controller
app.use('/people', ctrl.people);



//LISTENER
app.listen(PORT, () => console.log(`I'm listening on port: ${PORT}`));