const React = window.React
import {Dispatcher} from 'flux'
import Chat from './components/chat'
let dispatcher = new Dispatcher

ReactDOM.render(
	<Chat/>, document.getElementById('main'))
