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
		episode: 4,
		ratingState: 'GOOD',
		comment: 'hoge',
		likesCount: 20,
		createdAt: 'day',
	},
	{
		id: 3,
		user: 3,
		episode: 5,
		ratingState: 'GOOD',
		comment: 'hoge',
		likesCount: 20,
		createdAt: 'day',
	},
]

test('handle RECEIVE_RECORDS', () => {
	expect(reducer(initialState, actions.receiveRecords(records))).toEqual([2, 3])
})

test("handle RECEIVE_RECORDS don't duplicate", () => {
	expect(
		reducer(initialState, actions.receiveRecords([...records, ...records])),
	).toEqual([2, 3])
})
