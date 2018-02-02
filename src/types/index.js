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
	uid: string,
	displayName: ?string,
	email: ?string,
}

export type FirebaseUser = {
	uid: string,
	displayName: ?string,
	email: ?string,
}

export type TwitterUser = {
	uid: string,
	screenName: string,
	displayName: string,
}

export type Item = {
	id: number,
	name: string,
}

export type Potato = {
	id?: string,
	publish: boolean,
	owner?: number,
	createdAt: number,
	text: string,
}
