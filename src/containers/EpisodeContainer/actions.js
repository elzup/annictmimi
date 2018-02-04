// @flow
import type { Episode } from '../../types'

import { RECEIVE_EPISODES } from './actionTypes'
import type { ReceiveEpisodes } from './actionTypes'

export function receiveEpisodes(episodes: Episode[]): ReceiveEpisodes {
	return {
		type: RECEIVE_EPISODES,
		episodes,
	}
}
