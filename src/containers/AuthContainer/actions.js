// @flow
import type { Auth } from '../../types/'

import { SAVE_AUTH } from './actionTypes'
import type { SaveAuth } from './actionTypes'

export function saveAuth(auth: $Shape<Auth>): SaveAuth {
	return {
		type: SAVE_AUTH,
		auth,
	}
}
