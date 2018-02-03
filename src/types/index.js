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

export type User = {
	id: ID,
	username: string,
	name: string,
	avatarUrl: string,
}

export type Record = {
	id: ID,
	user: ID,
	ratingState: string | null,
	comment: string,
	likesCount: number,
	createdAt: string,
}

export type AnnictUser = {
	username: string,
	name: string,
}
