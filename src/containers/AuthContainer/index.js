// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import { withRouter } from 'react-router-dom'

import queryString from 'query-string'
import LoginScreen from '../../components/LoginScreen'

import type { State } from '../../types'
import * as actions from './actions'
import { doLogin, doLogout, requestToken } from './logic'
import * as selectors from './selectors'

type OProps = {}
type Props = {
	isLogin: boolean,
	doLogin: Function,
	doLogout: Function,
	authEnd: Function,
	history: any, // HACKME
	requestToken: ({ code: string }) => void,
}

class AuthContainer extends React.Component<Props> {
	componentDidMount() {
		this.props.authEnd()
	}
	render() {
		const { props } = this
		const qs = queryString.parse(window.location.search)
		if ('code' in qs) {
			if (props.authLoading) {
				return <span>認証中...</span>
			}
			if (props.isLogin) {
				// @HACKME: wait redux-persist save...
				props.history.push({ pathname: '/', search: '' })
				return <span>...</span>
			}
			props.requestToken({ code: qs.code })
		}
		return <LoginScreen handleLoginClick={props.doLogin} />
	}
}

const ms = (state: State, op: OProps) => {
	return {
		isLogin: selectors.isLogin(state),
		authLoading: selectors.getAuthLoading(state),
		user: selectors.getUser(state),
	}
}
const conn: Connector<OProps, Props> = connect(ms, {
	doLogin,
	doLogout,
	requestToken,
	authEnd: actions.authEnd,
})

export default withRouter(conn(AuthContainer))
