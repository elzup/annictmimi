// @flow
import type { Action, Auth } from '../../types'
import { Actions } from './actionTypes'

export type State = Auth

export const initialState: State = {
	authorized: false,
	uid: '',
	displayName: '',
	email: '',
}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.GOOGLE_LOGIN:
			return {
				...state,
				uid: action.firebaseUser.uid,
				displayName: action.firebaseUser.displayName || 'no name',
				email: action.firebaseUser.email || 'no email',
				authorized: true,
			}

		case Actions.GOOGLE_LOGOUT:
			return {
				...state,
				authorized: false,
			}

		default:
			return state
	}
}
