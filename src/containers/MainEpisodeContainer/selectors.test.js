// @flow
import type { State } from '../../types'
import * as selectros from './selectors'

let state: $Shape<State>

beforeEach(() => {
	state = {
		MainEpisodeContainer: [3, 2],
		RecordById: {
			'1': {
				id: 1,
				annictId: 1,
				comment: '「人とうさぎ」も「人と人(奴隷)」も命と命',
				rating: null,
				ratingState: 'AVERAGE',
				isModified: false,
				likesCount: 0,
				commentsCount: 0,
				createdAt: '2018-01-09T12:02:09.815Z',
				user: 1001,
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
				user: 1002,
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
				user: 1003,
				episode: 2,
			},
		},
		RecordContainer: [1, 2, 3],
		EpisodeById: {
			'1': {
				id: 1,
				annictId: 1,
				number: '2',
				numberText: '#2',
				sortNumber: 2,
				title: '人を喰った話 -I Want to Live.-',
				records: [1, 2, 3],
				recordsCount: 25,
				recordCommentsCount: 5,
				readedCount: 0,
				work: 101,
			},
			'2': {
				id: 2,
				annictId: 2,
				number: '3',
				numberText: '#3',
				sortNumber: 3,
				title: '予言の国 -We NO The Future-',
				records: [4, 5],
				recordsCount: 22,
				recordCommentsCount: 5,
				readedCount: 0,
				work: 101,
			},
			'3': {
				id: 3,
				annictId: 3,
				number: '3',
				numberText: '#3',
				sortNumber: 3,
				title: '愉快な国',
				records: [6, 7],
				recordsCount: 22,
				recordCommentsCount: 5,
				readedCount: 0,
				work: 102,
			},
		},
		EpisodeContainer: [1, 2],
		WorkById: {
			'101': {
				id: 101,
				annictId: 101,
				title: 'キノの旅 the Beautiful World',
				url: '',
				seasonName: '2003-spring',
				seasonNameText: '2003年春',
			},
			'102': {
				id: 102,
				annictId: 102,
				title: 'ポプテピピック',
				url: 'http://hoshiiro.jp/ogp.png',
				seasonName: '2018-winter',
				seasonNameText: '2018年冬',
			},
		},
		WorkContainer: [101, 102],
	}
})

test('getMyEpisodeIds', () => {
	expect(selectros.getMyEpisodeIds(state)).toEqual([3, 2])
})

test('getMyEpisodeComp', () => {
	expect(selectros.getMyEpisodeComp(state)).toEqual([
		{
			id: 3,
			annictId: 3,
			number: '3',
			numberText: '#3',
			sortNumber: 3,
			title: '愉快な国',
			records: [6, 7],
			recordsCount: 22,
			newCount: 5,
			readedCount: 0,
			recordCommentsCount: 5,
			work: {
				id: 102,
				annictId: 102,
				title: 'ポプテピピック',
				url: 'http://hoshiiro.jp/ogp.png',
				seasonName: '2018-winter',
				seasonNameText: '2018年冬',
			},
		},
		{
			id: 2,
			annictId: 2,
			number: '3',
			numberText: '#3',
			sortNumber: 3,
			title: '予言の国 -We NO The Future-',
			records: [4, 5],
			newCount: 5,
			readedCount: 0,
			recordsCount: 22,
			recordCommentsCount: 5,
			work: {
				id: 101,
				annictId: 101,
				title: 'キノの旅 the Beautiful World',
				url: '',
				seasonName: '2003-spring',
				seasonNameText: '2003年春',
			},
		},
	])
})
