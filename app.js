// MODULES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectFlash = require('connect-flash');
require('dotenv').config();
const PORT = process.env.PORT;

// VIEW ENGINE
app.set('view engine', 'ejs');


/// ROUTES

app.get('/', (req, res) => {
  res.render('index');
})


//LISTENER
app.listen(PORT, () => console.log(`I'm listening on port: ${PORT}`));