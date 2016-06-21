var Promise = require('promise')
var fs = require('fs')

function readFile(path, enc) {
	return new Promise(function (fulfill, reject) {
		fs.readFile(path, enc, function (err, res) {
			if (err) reject(err)
			else fulfill(res)
		})
	})
}

function readJSON(path) {
	return readFile(path, 'utf8').then(JSON.parse)
}

fs.readFile('ex.json', function (err, data) {
	if (err) return console.err(err)
	var j = JSON.parse(data)
	console.log(j)
})

var j = readJSON('ex.json')
console.log(j)

//procrastinate until I go into callback hell. 