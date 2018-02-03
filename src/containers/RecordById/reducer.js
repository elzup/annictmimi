// @flow
import type { Action } from '../../types'
import { Actions } from '../RecordContainer/actionTypes'

export type State = {}

export const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.RECEIVE_RECORDS:
			return action.records.reduce((p, c) => ({ ...p, [c.id]: c }), state)
		default:
			return state
	}
}
