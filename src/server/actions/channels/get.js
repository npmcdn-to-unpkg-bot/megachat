'use strict'
const
	config = require('../../config'),
	log = require('log4js').getLogger('channels.get')

const listOfChannels = [
	{ id: 1, name: 'kittens' },
	{ id: 2, name: 'birds' },
]

module.exports = (socket, scServer, data) => {
	// FIXME: debug
	log.debug(data)

	// get list of channels from db
	socket.emit('channels.get', listOfChannels)
}
