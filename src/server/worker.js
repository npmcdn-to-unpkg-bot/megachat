'use strict'
const
	config = require('./config'),
	log = require('log4js').getLogger('Worker')
const
	express = require('express'),
	middlewares = require('./middlewares'),
	dispatcher = require('./dispatcher')

module.exports.run = function (worker) {
	log.debug('Worker PID:', process.pid)

	let app = express(),
		scServer = worker.scServer,
		httpServer = worker.httpServer

	// attach express and socketcluster middlewares
	middlewares.express(app)
	middlewares.sc(scServer)

	// dispatch socketcluster events
	dispatcher(scServer)

	// let express to process http requests
	httpServer.on('request', app)

}
