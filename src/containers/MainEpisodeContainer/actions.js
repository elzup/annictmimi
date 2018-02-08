// @flow
import type { Episode } from '../../types'

import { RECEIVE_MAIN_EPISODE } from './actionTypes'
import type { ReceiveMainEpisode } from './actionTypes'

export function receiveMainEpisode(episodes: Episode[]): ReceiveMainEpisode {
	return {
		type: RECEIVE_MAIN_EPISODE,
		episodes,
	}
}
