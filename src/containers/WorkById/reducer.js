// @flow
import type { Action, ID, Work } from '../../types'
import { Actions } from '../WorkContainer/actionTypes'

export type State = { [id: ID]: Work }

export const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.RECEIVE_WORKS:
			return action.works.reduce((p, c) => ({ ...p, [c.id]: c }), state)

		default:
			return state
	}
}
