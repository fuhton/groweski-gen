import React    from 'react'
import ToneBase from './tones/primary'
import Rows     from './rows-view'
import Tabs     from './tabs-view'

class App extends React.Component {
	constructor () {
		var tone = 'c d- d e- e f g- g a- a b- b'
		tone = 'g e- f b- d- a d g- e c a- b'
		super()
		this.state = {
			tone: tone,
			toneArray: tone.split(' ')
		}
	}
	render () {
		return <div>
			<div className="input">
				<input name="input" onChange={this.handleChange.bind(this)} type="text" defaultValue={this.state.tone} />
			</div>
			<div className="rows">
				{Object.keys(this.state.toneArray).map((k, i) =>
					<Rows tone={i} tones={this.state.toneArray} key={"row-id-" + i}/>
				)}
			</div>
		</div>
	}
	handleChange (event) {
		this.setState({tone: event.target.value})
		this.setState({toneArray: this.state.tone.split(' ')})
	}
}
React.render(<App />, document.querySelector('#content'))
