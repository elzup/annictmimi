// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import Button from 'material-ui/Button'
import { Redirect } from 'react-router-dom'

import queryString from 'query-string'

import type { State } from '../../types'
import { doLogin, doLogout, requestToken } from './logic'
import * as selectors from './selectors'

type OProps = {}
type Props = {
	isLogin: boolean,
	authLoading: boolean,
	doLogin: Function,
	doLogout: Function,
	requestToken: ({ code: string }) => void,
}

const AuthContainer = (props: Props) => (
	<div>
		<p>Not Logined</p>
		<Button color="primary" onClick={props.doLogin}>
			Annict ログイン
		</Button>
	</div>
)

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		const qs = queryString.parse(window.location.search)
		if (!('code' in qs) && !props.isLogin) {
			return <AuthContainer {...props} />
		}
		if ('code' in qs) {
			if (props.isLogin) {
				return <span>OK</span>
			} else {
				props.requestToken({ code: qs.code })
				return <span>認証中...</span>
			}
		}
		return <Redirect to={'/'} />
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
})

export default conn(Container)
