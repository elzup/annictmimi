// @flow
import type { State } from '../../types'

export function isLogin(state: State) {
	return state.AuthContainer.authorized
}

export function getToken(state: State) {
	return state.AuthContainer.accessToken
}

export function getUser(state: State) {
	return state.AnnictUser
}
