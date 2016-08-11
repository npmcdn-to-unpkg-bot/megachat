'use strict'
const
	config = require('../../config'),
	log = require('log4js').getLogger('channels.get')
const Promise = require('bluebird')

const listOfChannels = [
	{ id: 1, name: 'kittens' },
	{ id: 2, name: 'birds' },
]

module.exports = (socket, scServer, data, callback) => {
	// FIXME: debug
	log.debug(data)

	// get list of channels from db
	Promise.delay(300)
		.then(() => {
			socket.emit('channels.get', listOfChannels)
				// callback(null, listOfChannels)
				// socket.emit('channels.get', listOfChannels)
		})
}
