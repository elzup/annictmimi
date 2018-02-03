// @flow
import type { Record } from '../../types'

import { RECEIVE_RECORDS } from './actionTypes'
import type { ReceiveRecords } from './actionTypes'

export function receiveRecords(records: Record[]): ReceiveRecords {
	return {
		type: RECEIVE_RECORDS,
		records,
	}
}
