// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import * as Ons from 'react-onsenui'
import queryString from 'query-string'

import type { State } from '../../types'
import { doLogin, doLogout, requestToken } from './logic'
import * as selectors from './selectors'
import HomeContainer from '../HomeContainer'

type OProps = {}
type Props = {
	isLogin: boolean,
	authLoading: boolean,
	doLogin: Function,
	doLogout: Function,
	requestToken: ({ code: string }) => void,
}

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
		return <HomeContainer />
	}
}

const ms = (state: State) => {
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
