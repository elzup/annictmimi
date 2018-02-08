// @flow
import type { State, ID } from '../../types'

export function getWork(state: State, workId: ID) {
	return state.WorkById[workId]
}
