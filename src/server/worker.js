'use strict'
const
	config = require('./config'),
	log = require('log4js').getLogger('Worker')
const
	express = require('express'),
	middlewares = require('./middlewares')

module.exports.run = function (worker) {
	log.debug('Worker PID:', process.pid)

	let
		app = express(),
		sc = worker.scServer,
		http = worker.httpServer

	// attach express and socketcluster middlewares
	middlewares(app, sc)

	// let express to process http requests
	http.on('request', app)

	sc.on('connection', function (socket) {

		socket.on('meow', data => {
			// FIXME: debug
			log.debug('meow event: ', data)
			sc.exchange.publish('recieve', data)
		})

		socket.on('disconnect', () => {
			console.log('socket disconnected')
		})
	})
}
