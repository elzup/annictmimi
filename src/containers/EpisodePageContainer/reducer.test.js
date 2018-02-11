// @flow
import reducer, { initialState } from './reducer'
import * as actions from '../RecordContainer/actions'

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
]

test('handle RECEIVE_RECORDS new order', () => {
	expect(reducer(initialState, actions.receiveRecords(records))).toEqual({
		'4': {
			records: [
				{
					id: 2,
					createdAt: '2018-02-05T14:49:40Z',
				},
			],
		},
		'5': {
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
	})
})
