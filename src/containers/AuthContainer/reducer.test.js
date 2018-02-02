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
			},
			actions.removeAuth(),
		),
	).toEqual(initialState)
})
