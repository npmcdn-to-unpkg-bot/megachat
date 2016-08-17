'use strict'
let socket = window.megachat.socket

// get channels list
socket.on('channels.get', data => {
	console.log('channels.get', data)
		// dispatcher.dispatch('got list of channels')
})
socket.emit('channels.get', 'gimme channels!')

// get messages for current channel
socket.on('messages.get', data => {
	console.log('messages.get: ', data)
		// dispatcher.dispatch('got list of messages')
})
socket.emit('messages.get', { channel: 'chan.kittens', from: 0, to: 100 })

// subscribe to channels list
socket
	.subscribe('chan.kittens')
	.watch(data => {
		console.log('chan.kittens', data)
			// dispatcher.dispatch('got new message or')
			// dispatcher.dispatch('a message has been updated')
	})

// create new message
socket.emit('messages.new', {
	message: 'Hello there!',
	channel: 'chan.kittens',
})
