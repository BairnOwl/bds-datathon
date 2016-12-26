/**
 * Created by bairnowl on 12/4/16.
 */

var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var engines = require('consolidate');
app.engine('html', engines.hogan);
app.set('views', __dirname + '/templates');
app.use(express.static('public'));

var http = require('http');
var server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.render('index.html');
});

server.listen(8080, function () {
    console.log('bds-datathon app listening on port ' + 8080);
});


