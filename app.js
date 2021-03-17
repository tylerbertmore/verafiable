// MODULES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectFlash = require('connect-flash');
const methodOverride = require('method-override')
require('dotenv').config();
const PORT = process.env.PORT;

// VIEW ENGINE
app.set('view engine', 'ejs');

//MIDDLEWARE
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

  //MORGAN replacement
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

app.get('/questionnaire', (req, res) => {
  res.render('questionnaire');
})



//LISTENER
app.listen(PORT, () => console.log(`I'm listening on port: ${PORT}`));