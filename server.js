const path = require('path')
const SocketCluster = require('socketcluster').SocketCluster

let options = {
	origins: '*:*',
	logLevel: 3,
	rebootOnSignal: false,
	workers: 1,
	brokers: 1,
	port: 8000,
	wsEngine: 'uws',
	appName: null,
	workerController: path.resolve(__dirname, 'worker.js'),
	brokerController: path.resolve(__dirname, 'broker.js'),
	socketChannelLimit: 1000,
	crashWorkerOnError: true
}

let socketCluster = new SocketCluster(options)
