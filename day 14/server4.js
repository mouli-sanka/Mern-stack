var http = require('http');
var uc=require('uppercase');
http.createServer(function(req, res) {
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write(uc.uppercase('congratulations!!'));
	res.end();

}).listen(8080);
