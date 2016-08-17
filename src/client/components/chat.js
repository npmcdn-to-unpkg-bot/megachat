'use strict'
let React = window.React,
	webapi = require('../webapi'),
	dispatcher = require('./dispatcher'),
	chatStore = require('../chatStore')

module.exports = class Chat extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		chatStore.on('update', this.setState.bind(this))
		webapi.emit('channels.get', 'from chat component')
	}

	componentWillUnmount() {
		chatStore.removeListener('update', this.setState.bind(this))
	}

	render() {
		let ts = this.state
		if (!ts.channels)
			return (
				<div>Preloader</div>
			)

		let chans = ts.channels.map(chan => {
			return (
				<li key={chan.id}>{chan.name}</li>
			)
		})

		return (
			<div>
				Chat component! {chans}
			</div>
		)
	}
}
