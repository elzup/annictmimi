// @flow
import type { State, ID, Record, User, RecordComp } from '../../types'
import { getUser } from '../UserContainer/selectors'
import _ from 'lodash'

export function getRecord(state: State, recordId: ID): Record {
	return state.RecordById[recordId]
}

export function getRecordComp(state: State, recordId: ID) {
	const record = getRecord(state, recordId)
	const user = getUser(state, record.user)
	return makeRecordComp(record, user)
}

export function getRecordsComp(state: State, recordIds: ID[]) {
	return recordIds.map(id => getRecordComp(state, id))
}

function makeRecordComp(record: Record, user: User): RecordComp {
	return {
		..._.omit(record, 'user'),
		user,
	}
}
