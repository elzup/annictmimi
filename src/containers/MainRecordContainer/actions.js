// @flow
import type { Record } from '../../types'

import { RECEIVE_MAIN_RECORDS } from './actionTypes'
import type { ReceiveMainRecords } from './actionTypes'

export function receiveMainRecords(records: Record[]): ReceiveMainRecords {
	return {
		type: RECEIVE_MAIN_RECORDS,
		records,
	}
}
