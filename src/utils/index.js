// @flow

import type { ID } from '../types'

export function sleep(msec: number): Promise<void> {
	return new Promise(resolve => setTimeout(resolve, msec))
}

export const annict = {
	recordUrl: (username: string, recordId: ID) =>
		`https://jp.annict.com/@${username}/records/${recordId}`,
}
