// @flow
import type { State, ID } from '../../types'

import { getRecordsComp } from '../RecordContainer/selectors'
import { getAppConfig } from '../SettingContainer/selectors'

export function getEpisodeRecords(state: State, episodeId: ID) {
	if (!(episodeId in state.EpisodePageContainer)) {
		return []
	}
	const recordIds = state.EpisodePageContainer[episodeId].records.map(e => e.id)
	return getRecordsComp(state, recordIds)
}

export function getEpisodeRecordsWithFilter(state: State, episodeId: ID) {
	const records = getEpisodeRecords(state, episodeId)
	if (getAppConfig(state).filterBad) {
		return records.filter(r => r.ratingState !== 'BAD')
	} else {
		return records
	}
}
