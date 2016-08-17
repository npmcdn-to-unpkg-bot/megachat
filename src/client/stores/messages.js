'use strict'
let webapi = require('./webapi')
let dispatcher = require('./dispatcher')
const EventEmitter = require('events')

class ChatStore extends EventEmitter {
	constructor() {
		super()
		dispatcher.register(this.handleActions.bind(this))
	}

	['channels.get'](channels) {
		this.channels = channels
		this.emit('update', this)
	}

	handleActions(action) {
		if (!this[action.type]) return console.log('ChatStore => ', action, ' is not implemented yet')
		this[action.type](action.data)
	}

	getChannelsList() {
		webapi.emit('channels.get', 'from chat component')
	}
}

module.exports = new ChatStore()
