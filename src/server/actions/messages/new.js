'use strict'

module.exports = (socket, scServer, data) => {
	console.log('messages.new', data)
	// check if appropriate
	// save to db
	scServer.exchange.publish(data.channel, data.message)
}
