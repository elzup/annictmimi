// @flow

import request from 'superagent'

import config from '../../config'
import type { ThunkAction } from '../../types'
import { receiveUsers } from '../UserContainer/actions'
import { receiveEpisodes } from '../EpisodeContainer/actions'
import { receiveRecords } from '../RecordContainer/actions'
import { getRehydrated } from '../App/selectors'
import { getUser, getToken } from '../AuthContainer/selectors'

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

		const res = await request
			.get(config.annict.baseUrl + '/v1/activities')
			.query({ filter_username: user.username })
			.set('Authorization', 'Bearer ' + token)
		console.log(res)
	}
}
