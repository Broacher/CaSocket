//server
var express = require('express'),
 	app = express(),
 	http = require('http'),
 	socketIo = require('socket.io');

//webserver on port 3000
var server = http.createServer(app);
var io = socketIo.listen(server);
server.listen(3000);

//static file directory
app.use(express.static(__dirname + '/public'));
console.log("server running on http://localhost:3000/");

//keeps track of all the drawn lines
var line_history = [];
var color_history = [];

//handler for incoming connections
io.on('connection', function (socket){
	//send drawn lines to the new client
	for (var i in line_history){
		socket.emit('draw_line', {
			line: line_history[i]
		});
		
	}
	//send drawn colors to the client
	for (var c in color_history){
		socket.emit('draw_color', {
			color: color_history[c]
		});
		
	}


	//draw_line handler
	socket.on('draw_line', function (data) {
		//add to previous lines
		line_history.push(data.line);
		//send the line to all the clients
		io.emit('draw_line', {
			line: data.line,
			 });
	});

	//color handler
	socket.on('draw_color', function (data) {
		//add to previous colors
		color_history.push(data.color);
		//send the color to all the clients
		io.emit('draw_color', {
			color: data.color 
		});
	});
});

