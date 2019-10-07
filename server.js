var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

// const config = require('./config.js')

var routes = require('./api/routes/topShopsRoutes');
routes(app);

app.listen(port);

console.log('Top Shops API server started on: ' + port);
