// @flow
import type { State, ID } from '../../types'

export function getRecord(state: State, recordId: ID) {
	return state.RecordById[recordId]
}
