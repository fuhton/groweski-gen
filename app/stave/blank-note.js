import React from 'react'
import { Bar } from './bar'
import css from '../css'

const styles = css({
	display: 'inline-block',
	width: '15px',
})

export class BlankNote extends React.Component {
	render() {
		return	<div className={styles}>
			<Bar />
			<Bar />
			<Bar />
			<Bar />
			<Bar />
		</div>
	}
}
