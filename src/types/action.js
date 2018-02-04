// @flow
import type { Action as AnnictUserAction } from '../containers/AnnictUser/actionTypes'
import type { Action as AuthContainerAction } from '../containers/AuthContainer/actionTypes'
import type { Action as EpisodeContainerAction } from '../containers/EpisodeContainer/actionTypes'
import type { Action as RecordContainerAction } from '../containers/RecordContainer/actionTypes'
import type { Action as UserContainerAction } from '../containers/UserContainer/actionTypes'
import type { Action as WorkContainerAction } from '../containers/WorkContainer/actionTypes'

export type ReduxInitAction = {
	type: '@@INIT',
}

export type Action =
	| ReduxInitAction
	| AnnictUserAction
	| AuthContainerAction
	| EpisodeContainerAction
	| RecordContainerAction
	| UserContainerAction
	| WorkContainerAction
