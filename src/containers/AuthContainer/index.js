// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import * as Ons from 'react-onsenui'

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
	<Ons.Page>
		<p>Logined</p>
		<Ons.Button onClick={props.doLogout}>ログアウト</Ons.Button>
	</Ons.Page>
)

const AuthContainer = (props: Props) => (
	<Ons.Page>
		<p>Not Logined</p>
		<Ons.Button onClick={props.doLogout}>Annict ログイン</Ons.Button>
	</Ons.Page>
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
