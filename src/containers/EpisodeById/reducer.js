// @flow
import type { Action, ID, Episode } from '../../types'
import { Actions } from '../EpisodeContainer/actionTypes'

export type State = { [id: ID]: Episode }

export const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.RECEIVE_EPISODES:
			return action.episodes.reduce((p, c) => {
				let { readedCount } = c
				if (c.id in state) {
					readedCount =
						state[c.id].readedCount || state[c.id].recordCommentsCount
				}
				return {
					...p,
					[c.id]: {
						...c,
						readedCount,
					},
				}
			}, state)

		case Actions.READ_EPISODE:
			if (!(action.episodeId in state)) {
				return state
			}

			return {
				...state,
				[action.episodeId]: {
					...state[action.episodeId],
					readedCount: state[action.episodeId].recordCommentsCount,
				},
			}

		default:
			return state
	}
}
