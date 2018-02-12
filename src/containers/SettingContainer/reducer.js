// @flow
import type { Action, AppConfig } from '../../types'
import { Actions } from './actionTypes'

export type State = AppConfig

export const initialState: State = {
	filterBad: false,
}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.TOGGLE_FILTER_BAD:
			return {
				...state,
				filterBad: !state.filterBad,
			}

		default:
			return state
	}
}
