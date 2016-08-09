const React = window.React
//import React, {Component} from 'react'
//import {render} from 'react-dom'
import {Dispatcher} from 'flux'
import Chat from './components/chat'
let dispatcher = new Dispatcher

ReactDOM.render(
	<Chat/>, document.getElementById('main'))
