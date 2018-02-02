// @flow
import type { Auth } from '../../types/'

export const SAVE_AUTH: 'AuthContainer/SAVE_AUTH' = 'AuthContainer/SAVE_AUTH'
export const REMOVE_AUTH: 'AuthContainer/REMOVE_AUTH' =
	'AuthContainer/REMOVE_AUTH'

export const Actions = {
	SAVE_AUTH,
	REMOVE_AUTH,
}

export type SaveAuth = {
	type: typeof SAVE_AUTH,
	auth: $Shape<Auth>,
}

export type RemoveAuth = {
	type: typeof REMOVE_AUTH,
}

export type Action = SaveAuth | RemoveAuth
