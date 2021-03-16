const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectFlash = require('connect-flash');
require('dotenv').config();
const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.send('sanity check');
})



app.listen(PORT, () => console.log(`I'm listening on port: ${PORT}`));