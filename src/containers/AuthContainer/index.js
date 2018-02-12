// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import Button from 'material-ui/Button'
import { withRouter } from 'react-router-dom'

import queryString from 'query-string'
import config from '../../config'

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
				setTimeout(() => {
					window.location.href = config.appPath
				}, 5000)
				return <span>Hello</span>
			}
			props.requestToken({ code: qs.code })
		}
		return (
			<div>
				<p>Not Logined</p>
				<Button color="primary" onClick={props.doLogin}>
					Annict ログイン
				</Button>
			</div>
		)
		// window.location.href = config.appPath
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
