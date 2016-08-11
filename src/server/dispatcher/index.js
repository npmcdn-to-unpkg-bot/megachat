'use strict'
const
	path = require('path'),
	flatten = require('flat'),
	actionHandlers = flatten(require('require-all')({
		dirname: path.resolve(__dirname, '../actions'),
		recursive: true,
	}))

module.exports = scServer => {
	scServer.on('connection', socket => {
		Object.keys(actionHandlers).forEach(eventName => {
			socket.on(eventName, actionHandlers[eventName].bind(null, socket, scServer))
		})
	})
}
