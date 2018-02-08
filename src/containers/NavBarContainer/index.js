// @flow

import { connect, type Connector } from 'react-redux'
import NavBar, { type Props } from '../../components/NavBar'
import type { State } from '../../types'
// import * as selectors from './selectors'
import { isLogin } from '../AuthContainer/selectors'
import { doLogout } from '../AuthContainer/logic'

type OProps = {}

const ms = (state: State) => ({
	isLogin: isLogin(state),
})

const conn: Connector<OProps, Props> = connect(ms, { doLogout })

export default conn(NavBar)
