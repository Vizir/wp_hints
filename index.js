var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', function(request, response) {
  response.render('pages/index', {oldDomain: null, newDomain: null});
});

app.post('/', function(request, response) {
  var oldDomain = request.body.oldDomain + "/";
  var newDomain = request.body.newDomain + "/";
  response.render('pages/index', {oldDomain: oldDomain, newDomain: newDomain } );
  //response.send(request.body.oldDomain);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


