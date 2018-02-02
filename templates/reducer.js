// @flow
import type { Action } from '../../types'
import { Actions } from './actionTypes'

export type State = {}

export const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.RECEIVE_ITEM:
			return {
				...state,
			}

		case Actions.DELETE_ITEM:
			return {
				...state,
			}

		default:
			return state
	}
}
