// @flow

import type { ThunkAction } from '../../types'
import { annict } from '../../utils'

export function openAnnictRecord({
	username,
	recordAnnictId,
}: {
	username: string,
	recordAnnictId: string,
}): ThunkAction {
	return () => {
		const url = annict.recordUrl(username, recordAnnictId)
		window.open(url)
	}
}

export function openAnnict(): ThunkAction {
	return () => {
		window.open('https://jp.annict.com')
	}
}
