'use strict'
let dispatcher = require('./dispatcher')

class WebApi {
	constructor() {
		this.socket = socketCluster.connect()
		this.on = this.socket.on.bind(this.socket)
		this.emit = this.socket.emit.bind(this.socket)
		// this.dispatch = this.dispatch.bind(this)
		this.listen()
	}

	listen() {
		this.on('channels.get', this.dispatch.bind(this, 'channels.get'))
	}

	dispatch(action, data) {
		dispatcher.dispatch({ type: action, data })
	}
}

module.exports = new WebApi()
