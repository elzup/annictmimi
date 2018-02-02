// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import _ from 'lodash'

import type { State, Auth } from '../../types'
import { doLogin, doLogout } from './logic'
// import * as selectors from './selectors'

type OProps = {}
type Props = {
	auth: Auth,
	doLogin: Function,
	doLogout: Function,
}

const LoginedContainer = (props: Props) => (
	<div>
		<p>Logined</p>
		<p onClick={props.doLogout}>ログアウト</p>
	</div>
)

const AuthContainer = (props: Props) => (
	<div>
		<p>Not logined</p>
		<p onClick={props.doLogin}>Login</p>
	</div>
)

class Container extends React.Component<Props> {
	componentDidMount() {}

	render() {
		const { props } = this
		if (!props.auth.authorized) {
			return <AuthContainer {...props} />
		}
		return <LoginedContainer {...props} />
	}
}

const ms = (state: State) => ({
	auth: state.AuthContainer,
})

const conn: Connector<OProps, Props> = connect(ms, {
	doLogin,
	doLogout,
})

export default conn(Container)
