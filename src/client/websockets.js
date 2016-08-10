'use strict'
let socket = socketCluster.connect()
window.megachat.socket = socket

// get channels list
socket.on('channels.get', data => {
	console.log('channels.get', data)
})
socket.emit('channels.get')

// get messages for current channel
socket.on('messages.get', data => {
	console.log('messages.get: ', data)
})
socket.emit('messages.get', { channel: 'kittens', from: 0, to: 100 })

// subscribe to channels list
socket
	.subscribe('channels.kittens')
	.watch(data => {
		console.log('channels.kittens', data)
	})

// each watcher should invoke dispatcher.dispatch(channelName,data)

// socket.publish('channels.kittens', { message: 'meow!' })
