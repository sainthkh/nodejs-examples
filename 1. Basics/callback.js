var fs = require('fs')

var data = fs.readFileSync('text.txt')

console.log(data.toString())
console.log('Sync end')

fs.readFile('text.txt', function (err, data) {
	if (err) return console.err(err)
	console.log(data.toString())
})

console.log('Async End')