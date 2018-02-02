// @flow
import type { Auth } from '../../types/'

export const SAVE_AUTH: 'AuthContainer/SAVE_AUTH' = 'AuthContainer/SAVE_AUTH'

export const Actions = {
	SAVE_AUTH,
}

export type SaveAuth = {
	type: typeof SAVE_AUTH,
	auth: $Shape<Auth>,
}

export type Action = SaveAuth
