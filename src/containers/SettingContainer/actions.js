// @flow
import { TOGGLE_FILTER_BAD } from './actionTypes'
import type { ToggleFilterBad } from './actionTypes'

export function toggleFilterBad(): ToggleFilterBad {
	return {
		type: TOGGLE_FILTER_BAD,
	}
}
