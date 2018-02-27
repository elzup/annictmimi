// @flow

import type {
	ActivityQueryResponse,
	WorkResponse,
	User,
	RecordResponse,
	EpisodeNode,
} from './'

const work: WorkResponse = {
	id: 'V29yay01MzQ1',
	annictId: 5345,
	title: 'キノの旅 -the Beautiful World- the Animated Series',
	image: {
		twitterAvatarUrl:
			'http://www.kinonotabi-anime.com/assets/images/common/ogp.png',
	},
	seasonName: 'AUTUMN',
	seasonYear: 2017,
}

const user: User = {
	id: 'VXNlci04ODQ=',
	annictId: 884,
	username: 'elzup',
	name: 'えるざっぷ',
	avatarUrl:
		'https://api-assets.annict.com/paperclip/profiles/840/tombo_avatars/master/be6b97b9b8a61d0653919ac5585943a784fa20c0.jpg',
}

const record: RecordResponse = {
	id: 'UmVjb3JkLTEzNDc3ODE=',
	annictId: 1347781,
	user,
	comment: 'たどり着いた国豪華な背景だったな',
	likesCount: 0,
	createdAt: '2018-02-07T01:04:06Z',
	ratingState: 'AVERAGE',
}

const episode: EpisodeNode = {
	id: 'RXBpc29kZS05NTkyMg==',
	annictId: 95922,
	number: 12,
	numberText: '第12話',
	sortNumber: 120,
	title: '羊たちの草原',
	recordsCount: 156,
	recordCommentsCount: 27,
	work,
	records: {
		edges: [
			{
				node: record,
			},
		],
	},
}

const a: ActivityQueryResponse = {
	data: {
		viewer: {
			records: {
				edges: [
					{
						node: {
							episode,
						},
					},
				],
			},
		},
	},
}
