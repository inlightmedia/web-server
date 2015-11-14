 // Express is one of the most popular npm modules that makes creating web servers and http requests easy.

var express = require('express');
var app = express();
var PORT = 3000; //when you use uppercase in a variable name it means you should not change the valkue of the variable its should be constant


// MIDDLE WARE
var middleware = require('./middleware.js');

// MIDDLE WARE SPECIFICATION SECTION

// NOTE: Middleware must be specified at the top
// putting middleware in app.use necessitates application level authentication (need to be logged in to see the whole app or any page)

app.use(middleware.logger);
app.use(middleware.requireAuthentication); 



// having middleware in the app.get requiers authenticaiotn for just one route not every route in the app
app.get('/about', middleware.requireAuthentication, function (request, response) { //get tis the http request method also put patch delete
	response.send('About Us');
});

app.use(express.static(__dirname + '/public')); 
//console.log(__dirname); //__dirname gets the full path


// a folder can be a server

app.listen(PORT, function () {
	console.log('Express Server Started on port ' + PORT + '.');
});	//usually not reserved