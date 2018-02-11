// @flow
import type { Action, ID, EpisodePage, RecordWithTime } from '../../types'
import { Actions } from './actionTypes'
import { Actions as RecordActions } from '../RecordContainer/actionTypes'
import _ from 'lodash'

export type State = { [id: ID]: EpisodePage }

export const initialState: State = {}
export const initialEpisodePageState: EpisodePage = {
	records: [],
	page: 0,
}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.UPDATE_PAGE:
			return {
				...state,
				[action.episodeId]: {
					...state[action.episodeId],
					page: action.page,
				},
			}

		case RecordActions.RECEIVE_RECORDS:
			// HACKME: maybe slow
			const episodeHash: {
				[id: ID]: RecordWithTime[],
			} = action.records.reduce((p, c) => {
				if (!(c.episode in p)) {
					p[c.episode] = []
				}
				return {
					...p,
					[c.episode]: p[c.episode].concat([
						{ id: c.id, createdAt: c.createdAt },
					]),
				}
			}, {})

			return _.reduce(
				episodeHash,
				(p, newRecords: RecordWithTime[], episodeId) => {
					const preRecords: RecordWithTime[] =
						episodeId in state ? state[episodeId].records : []
					const records = _.orderBy(
						_.uniqBy(preRecords.concat(newRecords), 'id'),
						['createdAt'],
						['desc'],
					)

					return {
						...p,
						[episodeId]: {
							...initialEpisodePageState,
							records,
						},
					}
				},
				state,
			)

		default:
			return state
	}
}
