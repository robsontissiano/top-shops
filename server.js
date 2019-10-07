var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

// Task = require('./api/models/todoListModel'), //created model loading here
// bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// const config = require('./config.js')

var routes = require('./api/routes/topShopsRoutes');
routes(app);

app.listen(port);

console.log('Top Shops API server started on: ' + port);
