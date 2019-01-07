'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var db = require('./config/db')();

module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

  var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080
  var ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
  app.listen(port, ip);

});
