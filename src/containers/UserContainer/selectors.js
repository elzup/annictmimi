// @flow
import type { State, ID } from '../../types'

export const getUser = (state: State, userId: ID) => state.UserById[userId]
