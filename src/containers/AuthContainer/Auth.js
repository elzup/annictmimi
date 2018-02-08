// @flow

import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { getRehydrated } from '../App/selectors'

import * as selectors from './selectors'
import type { State } from '../../types'

type Props = {
	isLogin: boolean,
	rehydrated: boolean,
	children: any,
}

class Auth extends React.Component<Props> {
	render() {
		if (!this.props.rehydrated) {
			return <span>Auth Checking</span>
		} else if (this.props.isLogin) {
			return <Route children={this.props.children} />
		} else {
			return <Redirect to={'/login'} />
		}
	}
}

const ms = (state: State) => {
	return {
		isLogin: selectors.isLogin(state),
		rehydrated: getRehydrated(state),
	}
}
const conn: Connector<{}, Props> = connect(ms, {})

export default withRouter(conn(Auth))
