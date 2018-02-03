// @flow
import type { Auth } from '../../types/'

export const SAVE_AUTH: 'AuthContainer/SAVE_AUTH' = 'AuthContainer/SAVE_AUTH'
export const REMOVE_AUTH: 'AuthContainer/REMOVE_AUTH' =
	'AuthContainer/REMOVE_AUTH'
export const AUTH_START: 'AuthContainer/AUTH_START' = 'AuthContainer/AUTH_START'
export const AUTH_END: 'AuthContainer/AUTH_END' = 'AuthContainer/AUTH_END'

export const Actions = {
	SAVE_AUTH,
	REMOVE_AUTH,
	AUTH_START,
	AUTH_END,
}

export type SaveAuth = {
	type: typeof SAVE_AUTH,
	auth: $Shape<Auth>,
}

export type RemoveAuth = {
	type: typeof REMOVE_AUTH,
}

export type AuthStart = {
	type: typeof AUTH_START,
}
export type AuthEnd = {
	type: typeof AUTH_END,
}

export type Action = SaveAuth | RemoveAuth | AuthStart | AuthEnd
