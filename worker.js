'use strict'
const
	path = require('path'),
	express = require('express'),
	serveStatic = require('serve-static'),
	log4js = require('log4js'),
	log = log4js.getLogger('Worker')

module.exports.run = function (worker) {
	console.log('   >> Worker PID:', process.pid)

	let
		app = express(),
		scServer = worker.scServer,
		httpServer = worker.httpServer

	app.use(serveStatic(path.resolve(__dirname, 'public')))

	httpServer.on('request', app)

	scServer.on('connection', function (socket) {

		socket.on('meow', data => {
			// FIXME: debug
			log.debug('meow event: ', data)
			scServer.exchange.publish('recieve', data)
		})

		socket.on('disconnect', () => {
			console.log('socket disconnected')
		})
	})
}
