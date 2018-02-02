// @flow
import type { Action as AuthContainerAction } from '../containers/AuthContainer/actionTypes'

export type ReduxInitAction = {
	type: '@@INIT',
}

export type Action = ReduxInitAction | AuthContainerAction
