// @flow
import type { AnnictUser } from '../../types'

import { SAVE_ANNICT_USER, REMOVE_USER } from './actionTypes'
import type { SaveAnnictUser, RemoveUser } from './actionTypes'

export function saveAnnictUser(user: AnnictUser): SaveAnnictUser {
	return {
		type: SAVE_ANNICT_USER,
		user,
	}
}
export function removeUser(): RemoveUser {
	return {
		type: REMOVE_USER,
	}
}
