import React from 'react'
import { Note } from './stave/note'
import { Trebble } from './stave/clef/trebble'

export class App extends React.Component {
	render() {
		return <div>
		<Trebble />
		<Note note="g4"/>
		<Note note="a5"/>
		<Note note="b5"/>
		<Note note="c5"/>
		<Note note="d5"/>
		<Note note="e5"/>
		<Note note="f5"/>
		<Note note="g5"/>
		</div>
	}
}
