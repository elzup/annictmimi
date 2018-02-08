// @flow

import { connect, type Connector } from 'react-redux'
import NavBar, { type Props } from '../../components/NavBar'
import type { State } from '../../types'
// import * as selectors from './selectors'
import { isLogin, getUser } from '../AuthContainer/selectors'
import { doLogout } from '../AuthContainer/logic'

type OProps = {
	title?: string,
}

const ms = (state: State, op: OProps) => ({
	isLogin: isLogin(state),
	profile: getUser(state),
	...op,
})

const conn: Connector<OProps, Props> = connect(ms, { doLogout })

export default conn(NavBar)
