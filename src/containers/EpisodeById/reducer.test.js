// @flow
import reducer, { initialState } from './reducer'
import * as actions from '../EpisodeContainer/actions'

test('provide the initial state', () => {
	expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

const episodes = [
	{
		id: 1001,
		annictId: 1001,
		work: 3,
		number: '1',
		numberText: '1',
		sortNumber: 3,
		title: 'hoge hoge',
		records: [1, 2],
		recordsCount: 10,
		recordCommentsCount: 5,
		readedCount: 5,
	},
	{
		id: 1002,
		annictId: 1002,
		work: 4,
		number: '2',
		numberText: '2',
		sortNumber: 4,
		title: 'fuga',
		records: [3, 4],
		recordsCount: 11,
		recordCommentsCount: 20,
		readedCount: 20,
	},
]

test('handle RECEIVE_EPISODES', () => {
	expect(reducer(initialState, actions.receiveEpisodes(episodes))).toEqual({
		'1001': episodes[0],
		'1002': episodes[1],
	})
})

test('handle RECEIVE_EPISODES non update readed', () => {
	expect(
		reducer(
			{
				'1001': {
					...episodes[0],
					recordCommentsCount: 10,
					readedCount: 5,
				},
			},
			actions.receiveEpisodes([
				{
					...episodes[0],
					recordCommentsCount: 20,
					readedCount: 20,
				},
			]),
		),
	).toEqual({
		'1001': {
			...episodes[0],
			recordCommentsCount: 20,
			readedCount: 5,
		},
	})
})

test('handle RECEIVE_EPISODES update readed', () => {
	expect(
		reducer(
			{
				'1001': {
					...episodes[0],
					recordCommentsCount: 10,
					readedCount: undefined,
				},
			},
			actions.receiveEpisodes([
				{
					...episodes[0],
					recordCommentsCount: 20,
					readedCount: 10,
				},
			]),
		),
	).toEqual({
		'1001': {
			...episodes[0],
			recordCommentsCount: 20,
			readedCount: 10,
		},
	})
})

test('handle READ_EPISODE', () => {
	expect(reducer({ '1002': episodes[1] }, actions.readEpisode('1002'))).toEqual(
		{ '1002': { ...episodes[1], readedCount: 20 } },
	)
})
