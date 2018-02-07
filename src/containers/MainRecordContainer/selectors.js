// @flow
import type { State, Record } from '../../types'
import { getRecord } from '../RecordContainer/selectors'
import { getEpisodeComp } from '../EpisodeContainer/selectors'

export function getMyRecords(state: State): Record[] {
	return state.MainRecordContainer.map(recordId => getRecord(state, recordId))
}
export function getMyEpisodeIds(state: State) {
	return getMyRecords(state).map(record => record.episode)
}

export function getMyEpisodeComp(state: State) {
	return getMyEpisodeIds(state).map(episodeId =>
		getEpisodeComp(state, episodeId),
	)
}
