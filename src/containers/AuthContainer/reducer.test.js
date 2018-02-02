// @flow
import reducer, { initialState } from './reducer'
import * as actions from './actions'

test('provide the initial state', () => {
	expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

test('handle GOOGLE_LOGIN', () => {
	expect(
		reducer(
			initialState,
			actions.googleLogin({
				uid: 'hoge',
				displayName: 'ハロー',
				email: 'piyo@a.b',
			}),
		),
	).toEqual({
		authorized: true,
		uid: 'hoge',
		displayName: 'ハロー',
		email: 'piyo@a.b',
	})
})

test('handle GOOGLE_LOGOUT', () => {
	expect(reducer(initialState, actions.googleLogout())).toEqual({
		authorized: false,
		uid: '',
		displayName: '',
		email: '',
	})
})
