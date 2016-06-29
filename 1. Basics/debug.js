var http = require('http');
debugger;
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  debugger;
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

/*
Execute: node debug script.js
Commands

debugger - stop there.

cont, c - Continue execution
next, n - Step next
step, s - Step in
out, o - Step out

setBreakpoint()
repl - interaction. 

More info: https://nodejs.org/api/debugger.html
*/