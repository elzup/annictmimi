// @flow
import type { Episode, ID } from '../../types'

export const RECEIVE_EPISODES: 'EpisodeContainer/RECEIVE_EPISODES' =
	'EpisodeContainer/RECEIVE_EPISODES'
export const READ_EPISODE: 'EpisodeContainer/READ_EPISODE' =
	'EpisodeContainer/READ_EPISODE'

export const Actions = {
	RECEIVE_EPISODES,
	READ_EPISODE,
}

export type ReceiveEpisodes = {
	type: typeof RECEIVE_EPISODES,
	episodes: Episode[],
}

export type ReadEpisode = {
	type: typeof READ_EPISODE,
	episodeId: ID,
}

export type Action = ReceiveEpisodes | ReadEpisode
