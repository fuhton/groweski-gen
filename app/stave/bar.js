import React from 'react'
import css from '../css'

const styles = css({
	borderBottom: '1px solid black',
	width: '15px',
	display: 'block',
	height: '10px',
})

export const Bar = () => (
	<div className={styles}></div>
)
