// @flow

import camelcaseKeysRecursive from 'camelcase-keys-recursive'
import { normalizeQuestions } from './normalize'
import request from 'superagent'
// import config from '../config'

import type { Item } from '../types'

const host = 'http://sample.com'

const baseHeaders = {
	'Content-Type': 'application/json',
}

type GetQuestionsCallback = {
	items: Item[],
}

export async function getQuestions(): Promise<GetQuestionsCallback> {
	const questionsRequest = request.get(host + '/items').set(baseHeaders)
	const res = await new Promise((resolve, reject) => {
		questionsRequest.end((err, res) => {
			resolve(err || res)
		})
	})

	const normalizedData = normalizeQuestions(res.body)
	const camelizedData = camelcaseKeysRecursive(normalizedData, { deep: true })
	return {
		items: Object.values(camelizedData.entities.items),
	}
}
