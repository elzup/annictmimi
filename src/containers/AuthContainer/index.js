// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import * as Ons from 'react-onsenui'
import queryString from 'query-string'

import type { State, Auth } from '../../types'
import { doLogin, doLogout, requestToken } from './logic'
// import * as selectors from './selectors'

type OProps = {}
type Props = {
	auth: Auth,
	doLogin: Function,
	requestToken: ({ code: string }) => void,
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
		<Ons.Button onClick={props.doLogin}>Annict ログイン</Ons.Button>
	</Ons.Page>
)

class Container extends React.Component<Props> {
	componentDidMount() {}

	render() {
		const { props } = this
		const qs = queryString.parse(window.location.search)
		if (!('code' in qs) && !props.auth.authorized) {
			return <AuthContainer {...props} />
		}
		if ('code' in qs) {
			props.requestToken({ code: qs.code })
			return <span>認証中...</span>
		}
		return <LoginedContainer {...props} />
	}
}

const ms = (state: State, op: any) => {
	return {
		auth: state.AuthContainer,
	}
}
const conn: Connector<OProps, Props> = connect(ms, {
	doLogin,
	requestToken,
	doLogout,
})

export default conn(Container)
