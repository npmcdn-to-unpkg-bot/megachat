'use strict'
const
	config = require('./config'),
	log = require('log4js').getLogger('Worker')
const
	express = require('express'),
	middlewares = require('./middlewares')

module.exports.run = function (worker) {
	log.debug('Worker PID:', process.pid)

	let app = express()

	// attach express and socketcluster middlewares
	middlewares(app, worker.scServer)

	// attach socketcluster event handlers
	dispatcher(worker.scServer)

	// let express to process http requests
	worker.httpServer.on('request', app)

}
