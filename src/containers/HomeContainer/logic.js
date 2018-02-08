// @flow

import type { ThunkAction } from '../../types'
import { receiveUsers } from '../UserContainer/actions'
import { receiveWorks } from '../WorkContainer/actions'
import { receiveEpisodes } from '../EpisodeContainer/actions'
import { receiveRecords } from '../RecordContainer/actions'
import { receiveMainEpisode } from '../MainEpisodeContainer/actions'
import { getRehydrated } from '../App/selectors'
import { getUser, getToken } from '../AuthContainer/selectors'
import * as client from '../../api/client'

import { sleep } from '../../utils'

export function loadRecords(): ThunkAction {
	return async (dispatch, getState) => {
		// HACKME:
		while (!getRehydrated(getState())) {
			console.log('wait')
			await sleep(1000)
		}

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
