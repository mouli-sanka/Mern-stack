const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
// Setup server port

//const port = process.env.PORT || 4000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root/default route
app.get('/zaheer', (req, res) => {
  res.json({"message": "Hello World Chalapathi"});
});
// listen for requests
app.listen(4000, () => {
  console.log(`Node server is listening on port `);
});