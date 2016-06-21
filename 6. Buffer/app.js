var buf1 = new Buffer(128)
var len = buf1.write("Hello, world")
console.log('written length: ' + len)

var buf2 = new Buffer(26)

for(var i = 0; i < 26; i++) {
	buf2[i] = i + 97
}

console.log(buf2.toString())
console.log(buf2.toString('ascii', 0, 6))
console.log(buf2.toString('ascii', 2))

console.log(buf2.toJSON(buf2))

console.log(Buffer.concat([buf1, buf2]).toString())

var comp = buf1.compare(buf2)

if (comp < 0) {
	console.log( buf1 + " comes before " + buf2)
} else if (resule == 0) {
	console.log( buf1 + " is equal to " + buf2)
} else {
	console.log( buf1 + " comes after " + buf2)
}

console.log(buf1.length)
console.log(buf1.slice(0,5).toString())
console.log(buf1.toString())
console.log(buf2.toString())
buf1.copy(buf2)
console.log(buf2.toString())
//console.log(buf1.copy(buf2)) -> result: 26
console.log(buf2.copy(buf1))

var buffer1 = new Buffer('ABC');
//copy a buffer
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());