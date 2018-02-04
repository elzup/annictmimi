// @flow
import type { Action, ID } from '../../types'
import { Actions } from './actionTypes'

export type State = ID[]

export const initialState: State = []

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.RECEIVE_EPISODES:
			return [...state, ...action.episodes.map(u => u.id)]

		default:
			return state
	}
}
