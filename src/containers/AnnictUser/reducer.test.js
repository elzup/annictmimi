// @flow
import reducer, { initialState } from './reducer'
import * as actions from './actions'

test('provide the initial state', () => {
	expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

test('handle SAVE_ANNICT_USER', () => {
	expect(
		reducer(
			initialState,
			actions.saveAnnictUser({
				username: 'a',
				name: 'b',
			}),
		),
	).toEqual({
		username: 'a',
		name: 'b',
	})
})
