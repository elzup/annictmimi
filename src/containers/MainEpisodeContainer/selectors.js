// @flow
import type { State } from '../../types'
import { getEpisodeComp } from '../EpisodeContainer/selectors'

export function getMyEpisodeIds(state: State) {
	return state.MainEpisodeContainer
}

export function getMyEpisodeComp(state: State) {
	return getMyEpisodeIds(state).map(episodeId =>
		getEpisodeComp(state, episodeId),
	)
}
