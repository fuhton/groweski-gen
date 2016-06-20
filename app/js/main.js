import React from 'react'
import Tones from './tones'
import Rows  from './rows-view'
import Tabs  from './tabs-view'

class App extends React.Component {
	constructor () {
		super()
		this.state = { tone: 'c d- d e- e f g- g a- a b- b' }
	}
	render () {
		return <div>
		<div className="input">
			<input name="input" onChange={this.handleChange.bind(this)} type="text" defaultValue={this.state.tone} />
		</div>
		<Tabs />
		<Rows />
		</div>
	}
	handleChange (event) {
		this.setState({tone: event.target.value})
	}
}
React.render(<App />, document.querySelector('#content'))
