'use strict'
const
	config = require('../config'),
	log = require('log4js').getLogger('Middlewares Express')
const
	path = require('path'),
	serveStatic = require('serve-static')

module.exports = app => {
	app
		.use(serveStatic(path.resolve(config.root, 'public')))
}
