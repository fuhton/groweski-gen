import React from 'react'

class Tabs extends React.Component {
	componentWillMount() {
		this.tab = 'all';
		this.tabOptions = {
			'all': 'All',
			'tone': 'Tone',
			'grow': 'Grow'
		}
	}
	render () {
		let self = this
		return <div className="tabs">
		{Object.keys(this.tabOptions).map((k, i) =>
			<div className={"tab-container " + ('all' === k ? 'current' : 'non-current')} key={"tab-id-" + k}>
				<a href="#" className="tab" onClick={self.handleClick.bind(self)}>{self.tabOptions[k]}</a>
			</div>
		)}
		</div>
	}
	handleClick(event) {
		// HANDLE THE CLICK
	}

}

module.exports = Tabs
