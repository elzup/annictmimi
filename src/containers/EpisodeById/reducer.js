// @flow
import type { Action, ID, Episode } from '../../types'
import { Actions } from '../EpisodeContainer/actionTypes'

export type State = { [id: ID]: Episode }

export const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.RECEIVE_EPISODES:
			return action.episodes.reduce((p, c) => {
				const readedRecordCommentsCount =
					c.id in state ? state[c.id].readedRecordCommentsCount : 0
				return {
					...p,
					[c.id]: {
						...c,
						readedRecordCommentsCount,
					},
				}
			}, state)

		default:
			return state
	}
}
