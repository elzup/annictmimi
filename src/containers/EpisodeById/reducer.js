// @flow
import type { Action, ID, Episode } from '../../types'
import { Actions } from '../EpisodeContainer/actionTypes'

export type State = { [id: ID]: Episode }

export const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.RECEIVE_EPISODES:
			return action.episodes.reduce((p, c) => ({ ...p, [c.id]: c }), state)

		default:
			return state
	}
}
