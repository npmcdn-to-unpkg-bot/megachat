const SocketCluster = require('socketcluster').SocketCluster

let options = {
	rebootOnSignal: false,
	workers: 1,
	brokers: 1,
	port: 8000,
	wsEngine: 'uws',
	appName: null,
	workerController: __dirname + '/worker.js',
	brokerController: __dirname + '/broker.js',
	socketChannelLimit: 1000,
	clusterStateServerHost: null,
	clusterStateServerPort: null,
	clusterAuthKey: null,
	clusterStateServerConnectTimeout: null,
	clusterStateServerAckTimeout: null,
	clusterStateServerReconnectRandomness: null,
	crashWorkerOnError: true
}

let socketCluster = new SocketCluster(options)
