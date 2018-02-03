// @flow
import type { User } from '../../types'

import { RECEIVE_USERS } from './actionTypes'
import type { ReceiveUsers } from './actionTypes'

export function receiveUsers(users: User[]): ReceiveUsers {
	return {
		type: RECEIVE_USERS,
		users,
	}
}
