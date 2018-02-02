// @flow
import type { AnnictUser } from '../../types'

export const SAVE_ANNICT_USER: 'AnnictUser/SAVE_ANNICT_USER' =
	'AnnictUser/SAVE_ANNICT_USER'
export const REMOVE_USER: 'AnnictUser/REMOVE_USER' = 'AnnictUser/REMOVE_USER'

export const Actions = {
	SAVE_ANNICT_USER,
	REMOVE_USER,
}

export type SaveAnnictUser = {
	type: typeof SAVE_ANNICT_USER,
	user: AnnictUser,
}

export type RemoveUser = {
	type: typeof REMOVE_USER,
}

export type Action = SaveAnnictUser | RemoveUser
