// @flow
import type { State } from '../../types'
import * as selectros from './selectors'

let state: $Shape<State>

beforeEach(() => {
	state = {
		MainRecordContainer: [1, 2],
		RecordById: {
			'1': {
				id: 1,
				comment: '「人とうさぎ」も「人と人(奴隷)」も命と命',
				rating: null,
				ratingState: 'average',
				isModified: false,
				likesCount: 0,
				commentsCount: 0,
				createdAt: '2018-01-09T12:02:09.815Z',
				user: 884,
				episode: 3,
			},
			'2': {
				id: 2,
				comment: '「人とうさぎ」も「人と人(奴隷)」も命と命',
				rating: null,
				ratingState: 'average',
				isModified: false,
				likesCount: 0,
				commentsCount: 0,
				createdAt: '2018-01-09T12:02:09.815Z',
				user: 884,
				episode: 2,
			},
		},
		RecordContainer: [1, 2],
		EpisodeById: {
			'1': {
				id: 1,
				number: '2',
				numberText: '#2',
				sortNumber: 2,
				title: '人を喰った話 -I Want to Live.-',
				recordsCount: 25,
				recordCommentsCount: 5,
				work: 101,
			},
			'2': {
				id: 2,
				number: '3',
				numberText: '#3',
				sortNumber: 3,
				title: '予言の国 -We NO The Future-',
				recordsCount: 22,
				recordCommentsCount: 5,
				work: 101,
			},
			'3': {
				id: 2,
				number: '3',
				numberText: '#3',
				sortNumber: 3,
				title: '予言の国 -We NO The Future-',
				recordsCount: 22,
				recordCommentsCount: 5,
				work: 102,
			},
		},
		EpisodeContainer: [1, 2],
		WorkById: {
			'101': {
				id: 101,
				title: 'キノの旅 the Beautiful World',
				media: 'tv',
				url: '',
				reviewsCount: 2,
				seasonName: '2003-spring',
				seasonNameText: '2003年春',
			},
			'102': {
				id: 102,
				title: 'ポプテピピック',
				media: 'tv',
				url: 'http://hoshiiro.jp/ogp.png',
				reviewsCount: 2,
				seasonName: '2018-winter',
				seasonNameText: '2018年冬',
			},
		},
		WorkContainer: [101, 102],
	}
})

test('getMyRecords', () => {
	expect(selectros.getMyRecords(state)).toEqual([
		{
			id: 1,
			comment: '「人とうさぎ」も「人と人(奴隷)」も命と命',
			rating: null,
			ratingState: 'average',
			isModified: false,
			likesCount: 0,
			commentsCount: 0,
			createdAt: '2018-01-09T12:02:09.815Z',
			user: 884,
			episode: 3,
		},
		{
			id: 2,
			comment: '「人とうさぎ」も「人と人(奴隷)」も命と命',
			rating: null,
			ratingState: 'average',
			isModified: false,
			likesCount: 0,
			commentsCount: 0,
			createdAt: '2018-01-09T12:02:09.815Z',
			user: 884,
			episode: 2,
		},
	])
})
test('getMyEpisodeIds', () => {
	expect(selectros.getMyEpisodeIds(state)).toEqual([3, 2])
})

test('getMyEpisodeComp', () => {
	expect(selectros.getMyEpisodeComp(state)).toEqual([
		{
			id: 2,
			number: '3',
			numberText: '#3',
			sortNumber: 3,
			title: '予言の国 -We NO The Future-',
			recordsCount: 22,
			recordCommentsCount: 5,
			work: {
				id: 102,
				title: 'ポプテピピック',
				media: 'tv',
				url: 'http://hoshiiro.jp/ogp.png',
				reviewsCount: 2,
				seasonName: '2018-winter',
				seasonNameText: '2018年冬',
			},
		},
		{
			id: 2,
			number: '3',
			numberText: '#3',
			sortNumber: 3,
			title: '予言の国 -We NO The Future-',
			recordsCount: 22,
			recordCommentsCount: 5,
			work: {
				id: 101,
				title: 'キノの旅 the Beautiful World',
				media: 'tv',
				url: '',
				reviewsCount: 2,
				seasonName: '2003-spring',
				seasonNameText: '2003年春',
			},
		},
	])
})
