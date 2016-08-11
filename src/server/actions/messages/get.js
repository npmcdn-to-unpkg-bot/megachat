'use strict'
const
	config = require('../../config'),
	log = require('log4js').getLogger('messages.get')

const chanData = {
	messages: [
		{ id: 1, data: 'hello' },
		{ id: 2, data: 'world' },
	],
	channel: 'chan.kittens',
}

module.exports = (socket, scServer, data) => {
	// FIXME: debug
	log.debug(data)

	// get list of messages from db
	socket.emit('messages.get', chanData)
}
