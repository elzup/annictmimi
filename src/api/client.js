// @flow

import camelCaseRecursive from 'camelcase-keys-recursive'
import request from 'superagent'
import config from '../config'

import type {
	ActivitiesResponse,
	Work,
	Episode,
	User,
	Record,
	WorkResponse,
} from '../types'

type GetActivityCallback = {
	works: Work[],
	episodes: Episode[],
	users: User[],
	records: Record[],
}

export async function getActivity(
	token: string,
	username: string,
): Promise<GetActivityCallback> {
	const res = await request
		.get(config.annict.baseUrl + '/v1/activities')
		.query({ filter_username: username })
		.set('Authorization', 'Bearer ' + token)
	const body: ActivitiesResponse = camelCaseRecursive(res.body, { deep: true })

	const result = {
		works: [],
		episodes: [],
		users: [],
		records: [],
	}
	body.activities.forEach(activity => {
		if (activity.action !== 'create_record') {
			return
		}
		const { episode, user, record } = activity
		const work = normalizeWork(activity.work)
		episode.work = work.id
		record.user = user.id
		record.episode = episode.id

		result.works.push(work)
		result.users.push(user)
		result.episodes.push(episode)
		result.records.push(record)
	})

	return result
}

function normalizeWork(workRes: WorkResponse): Work {
	return {
		id: workRes.id,
		title: workRes.title,
		media: workRes.media,
		url: workRes.images.recommendedUrl,
		reviewsCount: workRes.reviewsCount,
		seasonName: workRes.seasonName,
		seasonNameText: workRes.seasonNameText,
	}
}
