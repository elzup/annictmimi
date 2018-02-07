// @flow
import type { State, ID, Episode, Work, EpisodeComp } from '../../types'
import { getWork } from '../WorkContainer/selectors'
import _ from 'lodash'

export function getEpisode(state: State, episodeId: ID) {
	return state.EpisodeById[episodeId]
}

export function getEpisodeComp(state: State, episodeId: ID) {
	const episode = getEpisode(state, episodeId)
	const work = getWork(state, episode.work)
	return makeEpisodeComp(episode, work)
}

function makeEpisodeComp(episode: Episode, work: Work): EpisodeComp {
	return {
		..._.omit(episode, 'work'),
		work,
	}
}
