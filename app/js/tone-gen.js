import React from 'react'

class ToneGen extends React.Component {
	componentWillMount() {
		this.baseRef = [
			'c', 'd-', 'd', 'e-', 'e', 'f', 'f+', 'g', 'a-', 'a', 'b-', 'b'
		]
		this.iteration = 0
	}
	render () {
		this.toneRef = this.props.value.split(' ')
		return <div className="tone-gen">
		<table>
		<tbody>
			<tr>
				<th></th>
				{[...this.toneRef].map((x, i) =>
					<th key={"horz-id-" + i} scope="col">{i}</th>
				)}
			</tr>
			{[...this.toneRef].map((x, i) => {
				this.setIteration(i)
				return <tr key={"vert-id-" + i}>
					<th scope="row">{i}</th>
					{[...this.toneRef].map((y, j) =>
						<td key={"child-id-" + j}>{this.getTone(j)}</td>
					)}
				</tr>
			})}
			</tbody>
		</table>
		</div>
	}
	setIteration(iteration) {
		var iter = 0
		var base = 0
		if ( iteration > 0 )
			this.baseRef.forEach((v, k) => {
				if (this.toneRef[iteration] === v)
					iter = k
				else if (this.toneRef[0] === v)
					base = k
			})

		this.iteration = iter - base

		return this
	}
	getTone (param) {
		var tone =0

		this.baseRef.some((v, k) => {
			if (this.toneRef[param] === v)
				tone = k
				return
		})

		tone = tone - this.iteration

		if (tone > 11)
			tone = tone - 12
		else if ( tone < 0 )
			tone = tone + 12

		return this.baseRef[tone]
	}
}

module.exports = ToneGen
