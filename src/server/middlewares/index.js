'use strict'
const
	expressMiddlewares = require('./express'),
	scMiddlewares = require('./sc')

module.exports = (app, sc) => {
	expressMiddlewares(app)
	scMiddlewares(sc)
}
