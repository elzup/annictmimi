// @flow
import reducer, { initialState } from './reducer'
import * as actions from './actions'

test('provide the initial state', () => {
	expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

const episodes = [
	{
		id: 2,
		annictId: 1002,
		work: 3,
		number: '1',
		numberText: '1',
		sortNumber: 3,
		title: 'hoge hoge',
		records: [1, 2],
		recordsCount: 10,
		recordCommentsCount: 5,
		readedCount: 0,
	},
	{
		id: 3,
		annictId: 1002,
		work: 4,
		number: '2',
		numberText: '2',
		sortNumber: 4,
		title: 'fuga',
		records: [3, 4],
		recordsCount: 11,
		recordCommentsCount: 6,
		readedCount: 0,
	},
]

test('handle RECEIVE_MAIN_EPISODE', () => {
	expect(reducer(initialState, actions.receiveMainEpisode(episodes))).toEqual([
		2,
		3,
	])
})

test("handle RECEIVE_MAIN_EPISODE don't duplicate", () => {
	expect(
		reducer([2], actions.receiveMainEpisode([...episodes, ...episodes])),
	).toEqual([2, 3])
})
