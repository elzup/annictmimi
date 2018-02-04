// @flow
import type { Episode } from '../../types'

export const RECEIVE_EPISODES: 'EpisodeContainer/RECEIVE_EPISODES' =
	'EpisodeContainer/RECEIVE_EPISODES'

export const Actions = {
	RECEIVE_EPISODES,
}

export type ReceiveEpisodes = {
	type: typeof RECEIVE_EPISODES,
	episodes: Episode[],
}

export type Action = ReceiveEpisodes
