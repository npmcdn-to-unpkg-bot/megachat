let React = window.React
let socket = window.socket
import Promise from 'bluebird'

export default class Chat extends React.Component {

	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
			<div>
				Chat component!
			</div>
		)
	}

}
