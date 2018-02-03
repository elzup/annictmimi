// @flow
import type { Action, ID, User } from '../../types'
import { Actions } from '../UserContainer/actionTypes'

export type State = { [id: ID]: User }

export const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.RECEIVE_USERS:
			return action.users.reduce((p, c) => ({ ...p, [c.id]: c }), state)

		default:
			return state
	}
}
