// @flow
import reducer, { initialState } from './reducer'
import type { Work } from '../../types'
import * as actions from './actions'

test('provide the initial state', () => {
	expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

const works: Work[] = [
	{
		id: 1,
		title: 'HOGE',
		media: 'http',
		url: 'http',
		reviewsCount: 20,
		seasonName: '2010-winter',
		seasonNameText: '2010年冬',
	},
	{
		id: 2,
		title: 'FUGA',
		media: 'http',
		url: 'http',
		reviewsCount: 11,
		seasonName: '2010-winter',
		seasonNameText: '2010年冬',
	},
]
test('handle RECEIVE_WORKS', () => {
	expect(reducer(initialState, actions.receiveWorks(works))).toEqual([1, 2])
})

test("handle RECEIVE_WORKS don't duplicate", () => {
	expect(
		reducer(initialState, actions.receiveWorks([...works, ...works])),
	).toEqual([1, 2])
})
