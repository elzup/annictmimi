// @flow
import type { Episode } from '../../types'

export const RECEIVE_MAIN_EPISODE: 'MainEpisodeContainer/RECEIVE_MAIN_EPISODE' =
	'MainEpisodeContainer/RECEIVE_MAIN_EPISODE'

export const Actions = {
	RECEIVE_MAIN_EPISODE,
}

export type ReceiveMainEpisode = {
	type: typeof RECEIVE_MAIN_EPISODE,
	episodes: Episode[],
}

export type Action = ReceiveMainEpisode
