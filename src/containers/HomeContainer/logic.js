// @flow

import request from 'superagent'
import camelCaseRecursive from 'camelcase-keys-recursive'

import config from '../../config'
import type { ThunkAction, ActivitiesResponse } from '../../types'
import { receiveUsers } from '../UserContainer/actions'
import { receiveEpisodes } from '../EpisodeContainer/actions'
import { receiveRecords } from '../RecordContainer/actions'
import { getRehydrated } from '../App/selectors'
import { getUser, getToken } from '../AuthContainer/selectors'
import _ from 'lodash'

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
		const body: ActivitiesResponse = camelCaseRecursive(res.body)
		const recordActivities = body.activities.filter(
			a => a.action === 'create_record',
		)

		console.log(recordActivities)
	}
}
