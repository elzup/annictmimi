// @flow
import type { State } from '../../types'

export function isLogin(state: State) {
	return state.AuthContainer.authorized
}
