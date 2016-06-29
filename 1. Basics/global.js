console.log(__filename)
console.log(__dirname)
setTimeout(function(){
	console.log('hello after 2 seconds')
}, 2000)

function hello() {
	console.log('no print')
}

t = setTimeout(hello, 2000)
clearTimeout(t)

setInterval(function(){
	console.log('every 1 second')
}, 1000)
