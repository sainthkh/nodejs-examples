var events = require('events')
var eventEmitter = new events.EventEmitter()

var connectionHandler = function connected() {
	console.log('connection successful')
	eventEmitter.emit('data_received')
}

eventEmitter.on('connection', connectionHandler)
eventEmitter.on('data_received', function() {
	console.log('data_received successfully')
})

eventEmitter.emit('connection')

console.log('End 1')

var l1 = function() {
	console.log('listener1 executed')
}

var l2 = function() {
	console.log('listener2 executed')
}

eventEmitter.on('test', l1)
eventEmitter.addListener('test', l2)

var number = require('events').EventEmitter.listenerCount(eventEmitter, 'test')
console.log(number + ' events')
eventEmitter.emit('test')

eventEmitter.removeListener('test', l1)
eventEmitter.emit('test')

console.log('End 2')
