// @flow
import type { Work } from '../../types'

import { RECEIVE_WORKS } from './actionTypes'
import type { ReceiveWorks } from './actionTypes'

export function receiveWorks(works: Work[]): ReceiveWorks {
	return {
		type: RECEIVE_WORKS,
		works,
	}
}
