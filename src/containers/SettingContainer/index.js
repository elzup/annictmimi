// @flow
import { connect, type Connector } from 'react-redux'
import Setting, { type Props } from '../../components/Setting'

import type { State } from '../../types'
import { doLogout } from '../AuthContainer/logic'
import * as actions from './actions'
import * as selectors from './selectors'

type OProps = {}
const ms = (state: State) => ({
	appConfig: selectors.getAppConfig(state),
})

const conn: Connector<OProps, Props> = connect(ms, {
	doLogout,
	toggleFilterBad: actions.toggleFilterBad,
})

export default conn(Setting)
