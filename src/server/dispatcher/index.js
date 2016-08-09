'use strict'
const
	EventEmitter = require('events')

module.exports = sc => {
	// noop
	sc.on('connection', function (socket) {

		socket.on('meow', data => {
			// FIXME: debug
			log.debug('meow event: ', data)
			sc.exchange.publish('recieve', data)
		})

		socket.on('disconnect', () => {
			console.log('socket disconnected')
		})
	})
}
