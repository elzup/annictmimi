// @flow
import type { Work } from '../../types'

export const RECEIVE_WORKS: 'WorkContainer/RECEIVE_WORKS' =
	'WorkContainer/RECEIVE_WORKS'

export const Actions = {
	RECEIVE_WORKS,
}

export type ReceiveWorks = {
	type: typeof RECEIVE_WORKS,
	works: Work[],
}

export type Action = ReceiveWorks
