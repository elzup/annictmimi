// @flow
import type { EpisodeComp, RecordComp } from '../src/types'

export const episode1: EpisodeComp = {
	id: 96668,
	annictId: 96668,
	number: '5',
	numberText: '#5',
	sortNumber: 50,
	title: 'イモ☆ヨバ',
	recordsCount: 179,
	recordCommentsCount: 23,
	readedCount: 10,
	records: [],
	newCount: 13,
	work: {
		id: 5229,
		annictId: 5229,
		title: 'ポプテピピック',
		media: 'tv',
		url: 'http://hoshiiro.jp/ogp.png',
		reviewsCount: 2,
		seasonName: '2018-winter',
		seasonNameText: '2018年冬',
	},
}

export const episode2: EpisodeComp = {
	id: 'RXBpc29kZS05NTQ0Nw==',
	annictId: 95447,
	number: 9,
	numberText: '第9話',
	sortNumber: 90,
	title:
		'いろいろな国(山賊達の話／徳を積む国／料理の国／ティーの願い／美しい記憶の国／アニメなあとがきの国)',
	recordsCount: 170,
	recordCommentsCount: 30,
	records: [],
	readedCount: 30,
	newCount: 100,
	work: {
		id: 'V29yay01MzQ1',
		annictId: 5345,
		title: 'キノの旅 -the Beautiful World- the Animated Series',
		media: 'TV',
		reviewsCount: 2,
		seasonName: 'AUTUMN',
		seasonYear: 2017,
		url: 'http://www.kinonotabi-anime.com/assets/images/common/ogp.png',
		seasonNameText: '2017AUTUMN',
	},
}

export const record1: RecordComp = {
	id: 'UmVjb3JkLTEzNDc3ODE=',
	annictId: 96668,
	comment: 'たどり着いた国豪華な背景だったな',
	likesCount: 0,
	createdAt: '2018-02-07T01:04:06Z',
	ratingState: 'AVERAGE',
	episode: 'RXBpc29kZS05NTkyMg==',
	user: {
		id: 'VXNlci04ODQ=',
		annictId: 96668,
		username: 'elzup',
		name: 'えるざっぷ',
		avatarUrl:
			'https://api-assets.annict.com/paperclip/profiles/840/tombo_avatars/master/be6b97b9b8a61d0653919ac5585943a784fa20c0.jpg',
	},
}

export const record2: RecordComp = {
	id: 'UmVjb3JkLTEzNDYyOTk=',
	annictId: 96668,
	comment:
		'殺人羊を生み出したのは人間の娯楽という皮肉も、昼寝で終わるのもこの作品らしい。\r\nナイト2000ならそのままジャンプして谷を越えられたのに。',
	likesCount: 0,
	createdAt: '2018-02-05T14:49:40Z',
	ratingState: 'GREAT',
	episode: 'RXBpc29kZS05NTkyMg==',
	user: {
		id: 'VXNlci0zODgw',
		annictId: 96668,
		username: 'caponyan',
		name: 'カポ',
		avatarUrl:
			'https://api-assets.annict.com/paperclip/profiles/3740/tombo_avatars/master/94efdf386923059c6b0e68d393e476ffea89ad04.jpg',
	},
}
