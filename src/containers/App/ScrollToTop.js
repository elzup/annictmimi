import * as React from 'react'
import { withRouter } from 'react-router-dom'

class ScrollToTop extends React.Component<*> {
	componentDidUpdate(prevProps) {
		if (this.props.location !== prevProps.location) {
			this.node.childNodes[0].scrollTop = 0
		}
	}

	render() {
		return (
			<div
				ref={node => {
					this.node = node
				}}
			>
				{this.props.children}
			</div>
		)
	}
}

export default withRouter(ScrollToTop)
