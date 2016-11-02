import React from 'react'
import css, {merge, before} from '../../css'
import { BlankNote } from '../blank-note'

const styles = merge(
	{
		display: 'inline',
		float: 'left',
		position: 'relative'
	}, before({
		content: '"\\01D11E"',
		position: 'absolute',
		top: '-22px',
		left: '0px',
		fontSize: '90px'
	})
)

export const Trebble = () => (
	<div className={styles}>
	<BlankNote />
	<BlankNote />
	<BlankNote />
	</div>
)
