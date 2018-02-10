// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import Button from 'material-ui/Button'
import { withRouter } from 'react-router-dom'
import { getRehydrated } from '../App/selectors'

import queryString from 'query-string'
import config from '../../config'

import type { State } from '../../types'
import { doLogin, doLogout, requestToken } from './logic'
import * as selectors from './selectors'

type OProps = {}
type Props = {
	isLogin: boolean,
	rehydrated: boolean,
	doLogin: Function,
	doLogout: Function,
	history: any, // HACKME
	requestToken: ({ code: string }) => void,
}

class AuthContainer extends React.Component<Props> {
	render() {
		const { props } = this
		const qs = queryString.parse(window.location.search)
		if (!props.rehydrated) {
			return <span>Auth Checking</span>
		}
		if (props.authLoading) {
			return <span>認証中...</span>
		}
		if (props.isLogin) {
			window.location.href = config.appPath
			return null
		}
		if ('code' in qs) {
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
		rehydrated: getRehydrated(state),
		isLogin: selectors.isLogin(state),
		authLoading: selectors.getAuthLoading(state),
		user: selectors.getUser(state),
	}
}
const conn: Connector<OProps, Props> = connect(ms, {
	doLogin,
	doLogout,
	requestToken,
})

export default withRouter(conn(AuthContainer))
