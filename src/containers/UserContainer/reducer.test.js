// @flow
import reducer, { initialState } from './reducer'
import * as actions from './actions'

test('provide the initial state', () => {
	expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

const users = [
	{
		id: 100,
		username: 'hyaku',
		name: '100',
		avatarUrl: 'http',
	},
	{
		id: 102,
		username: 'hyaku-ni',
		name: '102',
		avatarUrl: 'http',
	},
]

test('handle RECEIVE_USERS', () => {
	expect(reducer(initialState, actions.receiveUsers(users))).toEqual([100, 102])
})

test("handle RECEIVE_USERS don't duplicate", () => {
	expect(
		reducer(initialState, actions.receiveUsers([...users, ...users])),
	).toEqual([100, 102])
})
