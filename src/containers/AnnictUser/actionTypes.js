// @flow
import type { AnnictUser } from '../../types'

export const SAVE_ANNICT_USER: 'AnnictUser/SAVE_ANNICT_USER' =
	'AnnictUser/SAVE_ANNICT_USER'

export const Actions = {
	SAVE_ANNICT_USER,
}

export type SaveAnnictUser = {
	type: typeof SAVE_ANNICT_USER,
	user: AnnictUser,
}

export type Action = SaveAnnictUser
