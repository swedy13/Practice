import express				from 'express';
import mongoose				from 'mongoose';
import twitter				from 'twitter';
import connect				from 'connect';
import routes					from './routes';
import config					from './config';
import streamHandler	from './utils/streamHandler'

/* var express			= require('express'),
	 exphbs				= require('express-handlebars'),
	 http					= require('http'),
	 mongoose			= require('mongoose'),
	 twitter				= require('twitter'),
	 connect	      = require('connect'),
	 routes				= require('./routes'),
	 config				= require('./config'),
	 streamHandler = require('./utils/streamHandler'); */

var app		= express();
var port	= process.env.PORT || 8000;


// Template Engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.disable('etag');


// Database
mongoose.connect('mongodb://localhost/react-tweets');

var twit = new twitter(config.twitter);

app.get('/', routes.index);
app.get('/page/:page/:skip', routes.page);
app.use('/', express.static(__dirname + '/public/'));


// Server
var server = connect().use(connect.static(app).listen(port, function() {
	console.log('Express server listening on port ' + port);
}));

// createServer deprecated, use connect instead
/* var server = http.createServer(app).listen(port, function() {
	 console.log('Express server listening on port ' + port);
	 }); */

var io = require('socket.io').listen(server);


// Listner
twit.stream('statuses/filter',{track: 'Javascript'}, function(stream){
	streamHandler(stream,io);
});
