// @flow
import type { Auth } from '../../types/'

import { SAVE_AUTH, REMOVE_AUTH } from './actionTypes'
import type { SaveAuth, RemoveAuth } from './actionTypes'

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
