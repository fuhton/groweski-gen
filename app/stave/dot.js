import React from 'react'
import css from '../css'
import { Lib } from './note-lib'

const styles = {
	border: '1px solid black',
	borderRadius: '50px',
	height: '8px',
	width: '8px',
	background: 'black',
	position: 'relative',
	left: '3px',
}

export class Dot extends React.Component {
	render() {
		let { note } = this.props
		styles.top = Lib[note];
		return	<div {...css(styles)}>
		</div>
	}
}

Dot.propTypes = {
	note: React.PropTypes.string
}
