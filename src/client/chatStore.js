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
		if (!this[action.type]) return
		this[action.type](action.data)
	}
}

module.exports = new ChatStore()
