// @flow
import reducer, { initialState } from './reducer'
import * as actions from './actions'

test('provide the initial state', () => {
	expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

test('handle SAVE_AUTH', () => {
	expect(
		reducer(
			initialState,
			actions.saveAuth({
				accessToken: 'hoge',
				scope: 'read',
				createdAt: 1234,
			}),
		),
	).toEqual({
		authorized: true,
		accessToken: 'hoge',
		scope: 'read',
		createdAt: 1234,
		authLoading: false,
	})
})

test('handle REMOVE_AUTH', () => {
	expect(
		reducer(
			{
				authorized: true,
				accessToken: 'hoge',
				scope: 'read',
				createdAt: 1234,
				authLoading: false,
			},
			actions.removeAuth(),
		),
	).toEqual(initialState)
})

test('handle AUTH_START', () => {
	expect(reducer(initialState, actions.authStart())).toEqual({
		authorized: false,
		authLoading: true,
		accessToken: '',
		scope: '',
		createdAt: 0,
	})
})

test('handle AUTH_END', () => {
	expect(
		reducer(
			{
				authorized: false,
				authLoading: true,
				accessToken: '',
				scope: '',
				createdAt: 0,
			},
			actions.authEnd(),
		),
	).toEqual({
		authorized: false,
		authLoading: false,
		accessToken: '',
		scope: '',
		createdAt: 0,
	})
})
