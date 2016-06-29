var fs = require('fs')

fs.writeFile('input.txt', 'Text Here', function(err){
	if (err) console.error(err)
	console.log('written successfully')
})

fs.readFile('input.txt', function(err, data){
	if (err) return console.error(err)
	console.log("Asyncronous File input:" + data.toString())
})

var d = fs.readFileSync('input.txt')
console.log('Syncronous: '+ d.toString())

fs.stat('input.txt', function(err, stats){
	/*
	 * stats.isFile()	Returns true if file type of a simple file.
	 * stats.isDirectory()	Returns true if file type of a directory.
	 * stats.isBlockDevice()	Returns true if file type of a block device.
	 * stats.isCharacterDevice()	Returns true if file type of a character device.
	 * stats.isSymbolicLink()	Returns true if file type of a symbolic link.
	 * stats.isFIFO()	Returns true if file type of a FIFO.
	 * stats.isSocket()	Returns true if file type of asocket.
	*/
	console.log(stats)
})

var buf = new Buffer(1024);
fs.open('input.txt', 'r+', function(err, fd){
	if (err) console.error(err)

	fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
		if (err) console.error(err)
		console.log(bytes + " bytes read")

		if(bytes > 0) {
			console.log(buf.slice(0, bytes).toString())
		}

		var len = buf.write('Test String')
		fs.write(fd, buf, 0, len, 0, function(err, written, buffer){
			if (err) console.error(err)
			console.log(written + " bytes written")

			fs.close(fd, function(err) {
				if (err) console.error(err)

				console.log("closed")
			})
		})
	})
})

// fs.truncate(fd, len, function(err))
// fs.unlink(path, function(err))
// fs.mkdir(path[, mode], function(err)) -> mode is the mode in Linux like 0777
// fs.readdir(path, function(err, files)) -> folders included. '.', '..' are excluded
// fs.rmdir(path, function(err))
