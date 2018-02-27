// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'
import type { Action as _Action } from './action'
import type { State as _State } from './state'

type RehydrateAction = {
	type: 'persist/REHYDRATE',
	payload: _State,
}

export type State = _State
export type Action = _Action | RehydrateAction

export type Reducer = (state: State, action: Action) => State
export type Reducers = {
	[key: string]: Reducer,
}

export type GetState = () => State

export type ThunkAction = (
	dispatch: ReduxDispatch<*>,
	getState: GetState,
) => void | Promise<void>

type ThunkDispatch<A> = (ta: ThunkAction) => A

export type Dispatch = ReduxDispatch<Action> & ThunkDispatch<Action>
export type Store = ReduxStore<State, Action, Dispatch>

export type Auth = {
	authorized: boolean,
	accessToken: string,
	scope: string,
	createdAt: number,
	authLoading: boolean,
}

export type ID = string | number

export type RatingState = 'GREAT' | 'GOOD' | 'AVERAGE' | 'BAD' | null

export type User = {
	id: ID,
	annictId: number,
	username: string,
	name: string,
	avatarUrl: string,
}

export type Record = {
	id: ID,
	annictId: number,
	user: ID,
	episode: ID,
	ratingState: RatingState,
	comment: string,
	likesCount: number,
	createdAt: string,
}

export type Episode = {
	id: ID,
	annictId: number,
	work: ID,
	number: string,
	numberText: string,
	sortNumber: number,
	title: string,
	records: ID[],
	recordsCount: number,
	recordCommentsCount: number,
	readedCount: number,
}

export type RecordWithTime = {
	id: ID,
	createdAt: string,
}

export type EpisodePage = {
	records: RecordWithTime[],
	page: number,
}

export type AnnictUser = {
	username: string,
	name: string,
}

export type AppConfig = {
	filterBad: boolean,
}

export type WorkResponse = {
	id: ID,
	annictId: number,
	title: string,
	image: {
		twitterAvatarUrl: string,
	},
	seasonName: string,
	seasonYear: number,
}

export type Work = {
	id: ID,
	annictId: number,
	title: string,
	url: string,
	seasonName: string,
	seasonNameText: string,
}

export type Activity = {
	id: ID,
	annictId: number,
	user: User,
	action:
		| 'create_record'
		| 'create_review'
		| 'create_multiple_records'
		| 'create_status',
	createdAt: string,
	work: WorkResponse,
	episode: Episode,
	record: Record,
}

export type ActivitiesResponse = {
	activities: Activity[],
	totalCount: number,
	nextPage: number | null,
	prevPage: number | null,
}

export type EpisodeComp = {
	id: ID,
	annictId: number,
	work: Work,
	number: string | number,
	numberText: string,
	sortNumber: number,
	title: string,
	records: ID[],
	recordsCount: number,
	recordCommentsCount: number,
	readedCount: number,
	newCount: number,
}

export type RecordComp = {
	id: ID,
	annictId: number,
	user: User,
	episode: ID,
	ratingState: RatingState,
	comment: string,
	likesCount: number,
	createdAt: string,
}

export type RecordResponse = {
	id: ID,
	annictId: number,
	user: User,
	ratingState: RatingState,
	comment: string,
	likesCount: number,
	createdAt: string,
}

export type EpisodeNode = {
	id: ID,
	annictId: number,
	number: number,
	numberText: string,
	sortNumber: number,
	title: string,
	recordsCount: number,
	recordCommentsCount: number,
	work: WorkResponse,
	records: {
		edges: Array<{ node: RecordResponse }>,
	},
}

export type ActivityQueryResponse = {
	data: {
		viewer: {
			records: {
				edges: Array<{ node: { episode: EpisodeNode } }>,
			},
		},
	},
}
