// @flow
import type { Action, ID } from '../../types'
import { Actions } from './actionTypes'
import _ from 'lodash'

export type State = ID[]

export const initialState: State = []

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.RECEIVE_WORKS:
			return _.uniq([...state, ...action.works.map(r => r.id)])

		default:
			return state
	}
}
