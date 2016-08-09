'use strict'
const
	config = require('./config'),
	log = require('log4js').getLogger('Worker')

module.exports.run = function (broker) {
	log.debug('Broker PID:', process.pid)
}
