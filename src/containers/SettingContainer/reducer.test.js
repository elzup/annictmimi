// @flow
import type { AppConfig } from '../../types'
import reducer, { initialState } from './reducer'
import * as actions from './actions'

test('provide the initial state', () => {
	expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

const filterBadOn: AppConfig = {
	...initialState,
	filterBad: true,
}

const filterBadOff: AppConfig = {
	...initialState,
	filterBad: false,
}

test('handle TOGGLE_FILTER_BAD on', () => {
	expect(reducer(filterBadOff, actions.toggleFilterBad())).toEqual(filterBadOn)
})

test('handle TOGGLE_FILTER_BAD off', () => {
	expect(reducer(filterBadOn, actions.toggleFilterBad())).toEqual(filterBadOff)
})
