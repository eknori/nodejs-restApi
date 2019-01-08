var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())

require('./app/routes/customer.routes.js')(app);

var server = app.listen(3001, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Magic happens at http://%s:%s", host, port)

})