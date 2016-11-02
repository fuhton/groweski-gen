import React from 'react'
import { Bar } from './bar'
import { Dot } from './dot'
import css from '../css'

const styles = css({
	display: 'inline-block',
	width: '15px',
	':hover': {
		backgroundColor: 'gray'
	},
})

export class Note extends React.Component {
	render() {
		let { note } = this.props
		return	<div className={styles}>
			<Bar />
			<Bar />
			<Bar />
			<Bar />
			<Bar />
			<Dot note={note}/>
		</div>
	}
}
