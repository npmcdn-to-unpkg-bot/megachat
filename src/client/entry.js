window.megachat = {}
import websockets from './websockets'
import Chat from './components/chat'

import {Dispatcher} from 'flux'
let dispatcher = new Dispatcher

ReactDOM.render(< Chat / >, document.querySelector('#megachat'))
