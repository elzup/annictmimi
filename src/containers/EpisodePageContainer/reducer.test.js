// @flow
import reducer, { initialState } from './reducer'
import { receiveRecords } from '../RecordContainer/actions'
import * as actions from './actions'

test('provide the initial state', () => {
	expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

const records = [
	{
		id: 2,
		annictId: 2,
		user: 2,
		episode: 4,
		ratingState: 'GOOD',
		comment: 'hoge',
		likesCount: 20,
		createdAt: '2018-02-05T14:49:40Z',
	},
	{
		id: 3,
		annictId: 3,
		user: 3,
		episode: 5,
		ratingState: 'GOOD',
		comment: 'hoge',
		likesCount: 20,
		createdAt: '2018-02-05T11:11:11Z',
	},
	{
		id: 4,
		annictId: 3,
		user: 3,
		episode: 5,
		ratingState: 'GOOD',
		comment: 'hoge',
		likesCount: 20,
		createdAt: '2018-02-05T22:22:22Z',
	},
	{
		id: 4,
		annictId: 3,
		user: 3,
		episode: 5,
		ratingState: 'GOOD',
		comment: 'hoge',
		likesCount: 20,
		createdAt: '2018-02-05T22:22:22Z',
	},
]

const state2 = {
	'4': {
		page: 0,
		records: [
			{
				id: 2,
				createdAt: '2018-02-05T14:49:40Z',
			},
		],
	},
	'5': {
		page: 0,
		records: [
			{
				id: 4,
				createdAt: '2018-02-05T22:22:22Z',
			},
			{
				id: 3,
				createdAt: '2018-02-05T11:11:11Z',
			},
		],
	},
}

test('handle RECEIVE_RECORDS', () => {
	expect(reducer(initialState, receiveRecords(records))).toEqual(state2)
})

test('handle UPDATE_PAGE', () => {
	expect(reducer(state2, actions.updatePage(4, 1))).toEqual({
		...state2,
		'4': {
			...state2[4],
			page: 1,
		},
	})
})
