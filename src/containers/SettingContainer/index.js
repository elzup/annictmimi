// @flow
import { connect, type Connector } from 'react-redux'
import Setting, { type Props } from '../../components/Setting'

import type { State } from '../../types'
import { doLogout } from '../AuthContainer/logic'
// import * as selectors from './selectors'

type OProps = {}
const ms = (state: State) => ({
	config: { filterBad: true },
})

function handleToggle(word) {
	console.log(word)
}

const conn: Connector<OProps, Props> = connect(ms, {
	doLogout,
	handleToggle,
})

export default conn(Setting)
