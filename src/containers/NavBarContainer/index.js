// @flow

import { connect, type Connector } from 'react-redux'
import NavBar, { type Props } from '../../components/NavBar'
import type { State } from '../../types'
// import * as selectors from './selectors'

import { withRouter } from 'react-router-dom'

// @HACKME
type OProps = {
	title: string,
	history: {
		push: Function,
	},
}

const ms = (state: State, op: OProps) => ({
	leftButtonAction: () => {
		op.history.push('/')
	},
	title: op.title,
})

const conn: Connector<any, Props> = connect(ms, {})

export default withRouter(conn(NavBar))
