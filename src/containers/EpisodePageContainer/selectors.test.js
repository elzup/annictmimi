// @flow
import type { State } from '../../types'
import * as selectors from './selectors'
let state: $Shape<State>

beforeEach(() => {
	state = {
		MainEpisodeContainer: [1, 2],
		RecordById: {
			'1': {
				id: 1,
				annictId: 1,
				comment: 'わかる',
				rating: null,
				ratingState: 'AVERAGE',
				isModified: false,
				likesCount: 0,
				commentsCount: 0,
				createdAt: '2018-01-09T12:02:09.815Z',
				user: 1,
				episode: 3,
			},
			'2': {
				id: 2,
				annictId: 2,
				comment: '面白い',
				rating: null,
				ratingState: 'GREAT',
				isModified: false,
				likesCount: 0,
				commentsCount: 0,
				createdAt: '2018-01-09T12:02:09.815Z',
				user: 2,
				episode: 2,
			},
			'3': {
				id: 3,
				annictId: 3,
				comment: '良くない',
				rating: null,
				ratingState: 'BAD',
				isModified: false,
				likesCount: 0,
				commentsCount: 0,
				createdAt: '2018-01-09T12:02:09.815Z',
				user: 3,
				episode: 2,
			},
		},
		RecordContainer: [1, 2, 3],
		UserById: {
			'1': {
				id: '1',
				annictId: 1,
				username: 'a',
				name: 'アリス',
				avatarUrl: '1',
			},
			'3': {
				id: '3',
				annictId: 3,
				username: 'c',
				name: 'きゃしー',
				avatarUrl: '1',
			},
			'2': {
				id: '2',
				annictId: 2,
				username: 'b',
				name: 'ボブ',
				avatarUrl: '1',
			},
		},
		UserContainer: [1, 2],
		EpisodeById: {
			'1': {
				id: 1,
				annictId: 1,
				number: '3',
				numberText: '#3',
				sortNumber: 3,
				title: '予言の国 -We NO The Future-',
				records: [1, 2, 3],
				recordsCount: 22,
				recordCommentsCount: 5,
				readedCount: 0,
				work: 101,
			},
		},
		EpisodeContainer: [1, 2],
		EpisodePageContainer: {
			'1': {
				records: [
					{
						id: '1',
						createdAt: '2018-01-09T12:02:09.815Z',
					},
					{
						id: '2',
						createdAt: '2018-01-09T12:02:09.815Z',
					},
					{
						id: '3',
						createdAt: '2018-01-09T12:02:09.815Z',
					},
				],
				page: 1,
			},
		},
		SettingContainer: {
			filterBad: true,
		},
	}
})

const GoodRecords = [
	{
		id: 1,
		annictId: 1,
		comment: 'わかる',
		rating: null,
		ratingState: 'AVERAGE',
		isModified: false,
		likesCount: 0,
		commentsCount: 0,
		createdAt: '2018-01-09T12:02:09.815Z',
		user: {
			id: '1',
			annictId: 1,
			username: 'a',
			name: 'アリス',
			avatarUrl: '1',
		},
		episode: 3,
	},
	{
		id: 2,
		annictId: 2,
		comment: '面白い',
		rating: null,
		ratingState: 'GREAT',
		isModified: false,
		likesCount: 0,
		commentsCount: 0,
		createdAt: '2018-01-09T12:02:09.815Z',
		user: {
			id: '2',
			annictId: 2,
			username: 'b',
			name: 'ボブ',
			avatarUrl: '1',
		},
		episode: 2,
	},
]
test('getEpisodeRecordsWithFilter', () => {
	expect(selectors.getEpisodeRecordsWithFilter(state, 1)).toEqual(GoodRecords)
})

test('getEpisodeRecordsWithFilter', () => {
	state.SettingContainer.filterBad = false
	expect(selectors.getEpisodeRecordsWithFilter(state, 1)).toEqual([
		...GoodRecords,
		{
			id: 3,
			annictId: 3,
			comment: '良くない',
			rating: null,
			ratingState: 'BAD',
			isModified: false,
			likesCount: 0,
			commentsCount: 0,
			createdAt: '2018-01-09T12:02:09.815Z',
			user: {
				id: '3',
				annictId: 3,
				username: 'c',
				name: 'きゃしー',
				avatarUrl: '1',
			},
			episode: 2,
		},
	])
})
