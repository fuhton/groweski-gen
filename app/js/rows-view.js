import React from 'react'
import Tones from './tones/primary'

class Rows extends React.Component {

	render () {
		var result = Tones.transformRow( this.props.tone, this.props.tones );
		return <div className="row">
			<a className="edit" href="#">Edit</a>
			<div className="rowInput" data-name={result}>
			{[...result].map((y, j) =>
				<span key={"child-id-" + j}>{y}</span>
			)}
			</div>
			<a className="edit" href="#">Edit</a>
		</div>
	}
}

module.exports = Rows
