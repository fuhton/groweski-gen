import React from 'react'
import Tones from './tones'

class Rows extends React.Component {
	componentWillMount() {
	}
	render () {
		return <div className="rows">
			{this.outputResult()}
		</div>
	}
	outputResult () {
		var result = Tones.getRow( this.props.tones, this.props.tone );
		return <div className="row">
			{[...result].map((y, j) =>
				<span key={"child-id-" + j}>{y}</span>
			)}
		</div>
	}
}

module.exports = Rows
