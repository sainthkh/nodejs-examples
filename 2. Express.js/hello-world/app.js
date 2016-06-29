var express = require('express')
var http = require('http')
var path = require('path')

var app = express();

app.get('/', function(req, res) {
	res.send('Hello, world')
})

app.listen(3000, function() {
	console.log('Hello, world listening on 3000')
})