import React from 'react'
import GroweskiGen from './groweski'

class App extends React.Component {
	constructor () {
		super()
		this.state = { tone: 'c d- d e- e f f+ g a- a b- b' }
	}
	render () {
		return <div>
		<div className="input">
			<input name="input" onChange={this.handleChange.bind(this)} type="text" defaultValue={this.state.tone} />
		</div>
		<br/>
		<GroweskiGen value={this.state.tone} />
		</div>
	}
	handleChange (event) {
		this.setState({tone: event.target.value});
	}
}
React.render(<App />, document.querySelector('#content'))
