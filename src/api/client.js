// @flow

import camelCaseRecursive from 'camelcase-keys-recursive'
import request from 'superagent'
import _ from 'lodash'

import config from '../config'
import { getActivitiesQuery } from './queries'
import type {
	ID,
	ActivityQueryResponse,
	Work,
	Episode,
	EpisodeNode,
	User,
	Record,
	RecordResponse,
	WorkResponse,
} from '../types'

type GetActivityCallback = {
	works: Work[],
	episodes: Episode[],
	users: User[],
	records: Record[],
}

// @HACKME
export async function getActivity(
	token: string,
	username: string,
): Promise<GetActivityCallback> {
	const res = await request
		.post(config.annict.baseUrl + '/graphql')
		.send({ query: getActivitiesQuery() })
		.set('Authorization', 'Bearer ' + token)
	const body: ActivityQueryResponse = camelCaseRecursive(res.body, {
		deep: true,
	})

	const result = {
		works: [],
		episodes: [],
		users: [],
		records: [],
	}
	body.data.viewer.records.edges.forEach(edge => {
		if (_.isEmpty(edge.node) || edge.node === null) {
			return
		}
		const episodeNode: EpisodeNode = edge.node.episode
		const { episode, work, users, records } = normalizeEpisode(episodeNode)
		result.users = _.union(result.users, users)
		result.records = _.union(result.records, records)
		result.episodes.push(episode)
		result.works.push(work)
		// const episode: EpisodeNode = edge.node
	})

	return result
}

function normalizeEpisode(
	episodeNode: EpisodeNode,
): { episode: Episode, work: Work, users: User[], records: Record[] } {
	const result = {
		users: [],
		records: [],
	}
	const work = normalizeWork(episodeNode.work)
	episodeNode.records.edges.forEach(edge => {
		const { record, user } = normalizeRecord(edge.node, episodeNode.id)
		result.records.push(record)
		result.users.push(user)
	})
	const episode: Episode = {
		..._.omit(episodeNode, ['records', 'work']),
		records: result.records.map(r => r.id),
		readedCount: episodeNode.recordCommentsCount,
		work: work.id,
	}
	return { ...result, episode, work }
}

function normalizeRecord(
	recordNode: RecordResponse,
	episodeId: ID,
): { user: User, record: Record } {
	const { user } = recordNode
	const record: Record = {
		..._.omit(recordNode, 'user'),
		user: user.id,
		episode: episodeId,
	}
	return { record, user }
}

function normalizeWork(workRes: WorkResponse): Work {
	return {
		..._.omit(workRes, 'image', 'episodesCount', 'seasonNameYear'),
		url: workRes.image.recommendedImageUrl,
		seasonNameText: workRes.seasonYear + workRes.seasonName,
	}
}
