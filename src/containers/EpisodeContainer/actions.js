// @flow
import type { Episode, ID } from '../../types'

import { RECEIVE_EPISODES, READ_EPISODE } from './actionTypes'
import type { ReceiveEpisodes, ReadEpisode } from './actionTypes'

export function receiveEpisodes(episodes: Episode[]): ReceiveEpisodes {
	return {
		type: RECEIVE_EPISODES,
		episodes,
	}
}
export function readEpisode(episodeId: ID): ReadEpisode {
	return {
		type: READ_EPISODE,
		episodeId,
	}
}
