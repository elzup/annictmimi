// @flow

import { connect, type Connector } from 'react-redux'
import NavBar, { type Props } from '../../components/NavBar'
import type { State } from '../../types'
import { withRouter, type RouterHistory } from 'react-router-dom'

// @HACKME
type OProps = {
	title: string,
	history: RouterHistory,
}

const ms = (state: State, op: OProps) => ({
	leftButtonAction: op.history.goBack,
	title: op.title,
})

const conn: Connector<any, Props> = connect(ms, {})

export default withRouter(conn(NavBar))
