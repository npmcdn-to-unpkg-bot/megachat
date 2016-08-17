'use strict'
let React = window.React,
	webapi = require('../webapi'),
	dispatcher = require('../dispatcher'),
	chatStore = require('../chatStore')

module.exports = class Chat extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.setState = this.setState.bind(this)
	}

	componentDidMount() {
		chatStore.on('update', this.setState)
		chatStore.getChannelsList()
	}

	componentWillUnmount() {
		chatStore.removeListener('update', this.setState)
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
