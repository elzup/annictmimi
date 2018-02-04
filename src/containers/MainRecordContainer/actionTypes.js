// @flow
import type { Record } from '../../types'

export const RECEIVE_MAIN_RECORDS: 'MainRecordContainer/RECEIVE_MAIN_RECORDS' =
	'MainRecordContainer/RECEIVE_MAIN_RECORDS'

export const Actions = {
	RECEIVE_MAIN_RECORDS,
}

export type ReceiveMainRecords = {
	type: typeof RECEIVE_MAIN_RECORDS,
	records: Record[],
}

export type Action = ReceiveMainRecords
