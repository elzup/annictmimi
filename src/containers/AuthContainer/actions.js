// @flow
import type { Auth } from '../../types/'

import { SAVE_AUTH, REMOVE_AUTH, AUTH_START, AUTH_END } from './actionTypes'
import type { SaveAuth, RemoveAuth, AuthStart, AuthEnd } from './actionTypes'

export function saveAuth(auth: $Shape<Auth>): SaveAuth {
	return {
		type: SAVE_AUTH,
		auth,
	}
}
export function removeAuth(): RemoveAuth {
	return {
		type: REMOVE_AUTH,
	}
}
export function authStart(): AuthStart {
	return {
		type: AUTH_START,
	}
}
export function authEnd(): AuthEnd {
	return {
		type: AUTH_END,
	}
}
