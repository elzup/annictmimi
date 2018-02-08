// @flow
import type { State, ID, Episode, Work, EpisodeComp } from '../../types'
import { getWork } from '../WorkContainer/selectors'
import { getRecordsComp } from '../RecordContainer/selectors'
import _ from 'lodash'

export function getEpisode(state: State, episodeId: ID): Episode | null {
	if (episodeId in state.EpisodeById) {
		return state.EpisodeById[episodeId]
	}
	return null
}

export function getEpisodeComp(state: State, episodeId: ID) {
	const episode = getEpisode(state, episodeId)
	if (episode === null) {
		return null
	}
	const work = getWork(state, episode.work)
	return makeEpisodeComp(episode, work)
}

export function getEpisodeRecords(state: State, episodeId: ID) {
	const episode = getEpisode(state, episodeId)
	if (episode === null) {
		return null
	}
	return getRecordsComp(state, episode.records)
}

function makeEpisodeComp(episode: Episode, work: Work): EpisodeComp {
	return {
		..._.omit(episode, 'work'),
		work,
	}
}
