// @flow
import type { AnnictUser } from '../../types'

import { SAVE_ANNICT_USER } from './actionTypes'
import type { SaveAnnictUser } from './actionTypes'

export function saveAnnictUser(user: AnnictUser): SaveAnnictUser {
	return {
		type: SAVE_ANNICT_USER,
		user,
	}
}
