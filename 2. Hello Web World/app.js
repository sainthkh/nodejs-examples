var http = require('http')

http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello, Web World!');
}).listen(8080)

console.log('server started at localhost:8080')