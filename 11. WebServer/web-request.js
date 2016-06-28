var http = require('http');

var options = {
   host: 'localhost',
   port: '8080',
   path: '/index.html'  
};

// Make a request to the server
var req = http.request(options, function(response){
   // Continuously update stream with data
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // Data received completely.
      console.log(body);
   });
});
req.end();