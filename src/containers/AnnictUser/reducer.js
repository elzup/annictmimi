// @flow
import type { Action } from '../../types'
import { Actions } from './actionTypes'
import type { AnnictUser } from '../../types'

export type State = AnnictUser

export const initialState: State = {
	name: '',
	username: '',
}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.REMOVE_USER:
			return initialState

		case Actions.SAVE_ANNICT_USER:
			return action.user
		default:
			return state
	}
}
