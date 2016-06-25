var fs = require('fs')
var data = ''

var readStream = fs.createReadStream('input.txt')
readStream.setEncoding('utf-8')

readStream.on('data', function(chunk){
	data += chunk
})

readStream.on('end', function(){
	console.log('Load End: ' + data)
})

readStream.on('error', function(err) {
	console.log(err.stack)
})

console.log('\nstart write')

var writeStream = fs.createWriteStream('output.txt')
writeStream.write('My love', 'utf-8')
writeStream.end()

writeStream.on('finish', function() {
	console.log('write ended')
})

writeStream.on('error', function(err) {
	console.log(err.stack)
})

var zlib = require('zlib')
fs.createReadStream('input.txt')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('input.txt.gz'))	