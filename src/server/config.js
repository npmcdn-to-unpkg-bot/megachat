'use strict'
const // logger
	log4js = require('log4js'),
	logOptions = {
		replaceConsole: false,
		appenders: [{
			type: 'console',
			layout: {
				type: 'pattern',
				pattern: '%d{ABSOLUTE} %[%c%] - %m'
			}
		}]
	}

log4js.configure(logOptions)

const Config = {
	root: '/home/mega/github/megachat'
}

module.exports = Config
