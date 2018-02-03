// @flow
import type { Record } from '../../types'

export const RECEIVE_RECORDS: 'RecordContainer/RECEIVE_RECORDS' =
	'RecordContainer/RECEIVE_RECORDS'

export const Actions = {
	RECEIVE_RECORDS,
}

export type ReceiveRecords = {
	type: typeof RECEIVE_RECORDS,
	records: Record[],
}

export type Action = ReceiveRecords
