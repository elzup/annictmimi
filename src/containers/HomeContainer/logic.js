// @flow

import type { ThunkAction } from '../../types'
import { receiveUsers } from '../UserContainer/actions'
import { receiveWorks } from '../WorkContainer/actions'
import { receiveEpisodes } from '../EpisodeContainer/actions'
import { receiveRecords } from '../RecordContainer/actions'
import { receiveMainEpisode } from '../MainEpisodeContainer/actions'
import { getUser, getToken } from '../AuthContainer/selectors'
import * as client from '../../api/client'

export function loadRecords(): ThunkAction {
	return async (dispatch, getState) => {
		// HACKME:
		const token = getToken(getState())
		const user = getUser(getState())

		const res = await client.getActivity(token, user.username)
		await Promise.all([
			dispatch(receiveWorks(res.works)),
			dispatch(receiveUsers(res.users)),
			dispatch(receiveEpisodes(res.episodes)),
			dispatch(receiveRecords(res.records)),
		])
		dispatch(receiveMainEpisode(res.episodes))
	}
}
