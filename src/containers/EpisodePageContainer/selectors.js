// @flow
import type { State, ID } from '../../types'

import { getRecordsComp } from '../RecordContainer/selectors'

export function getEpisodeRecords(state: State, episodeId: ID) {
	if (!(episodeId in state.EpisodePageContainer)) {
		return []
	}
	const recordIds = state.EpisodePageContainer[episodeId].records.map(e => e.id)
	return getRecordsComp(state, recordIds)
}
