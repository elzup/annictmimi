// @flow
import reducer, { initialState } from './reducer'
import * as actions from './actions'

test('provide the initial state', () => {
	expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

const records = [
	{
		id: 2,
		user: 2,
		ratingState: 'good',
		comment: 'hoge',
		likesCount: 20,
		createdAt: 'day',
	},
	{
		id: 3,
		user: 3,
		ratingState: 'good',
		comment: 'hoge',
		likesCount: 20,
		createdAt: 'day',
	},
]

test('handle RECEIVE_RECORDS', () => {
	expect(reducer(initialState, actions.receiveRecords(records))).toEqual([2, 3])
})
