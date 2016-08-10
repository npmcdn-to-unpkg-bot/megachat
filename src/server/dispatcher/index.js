'use strict'
const
	path = require('path'),
	flatten = require('flat'),
	EventEmitter = require('events'),
	actionsTree = require('require-all')({
		dirname: path.resolve(__dirname, '../actions'),
		recursive: true,
	}),
	actions = flatten(actionsTree)

module.exports = scServer => {
	scServer.on('connection', socket => {
		Object.keys(actions).forEach(key => {
			socket.on(key, actions[key].bind(null, socket, scServer))
		})
	})
}
