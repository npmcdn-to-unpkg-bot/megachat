'use strict'
let React = window.React,
	webapi = require('../webapi'),
	chatStore = require('../chatStore')

module.exports = class Chat extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		chatStore.on('update', this.update.bind(this))
		webapi.emit('channels.get', 'from chat component')
	}

	componentWillUnmount() {
		chatStore.removeListener('update', this.update.bind(this))
	}

	update(data) {
		console.log('Chat => update', data)
		this.setState(data)
	}

	render() {
		let ts = this.state
		if (!ts.channels)
			return (
				<div>No channels</div>
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
