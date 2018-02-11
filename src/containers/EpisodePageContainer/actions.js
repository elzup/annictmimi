// @flow
import type { ID } from '../../types'

import { UPDATE_PAGE } from './actionTypes'
import type { UpdatePage } from './actionTypes'

export function updatePage(episodeId: ID, page: number): UpdatePage {
	return {
		type: UPDATE_PAGE,
		episodeId,
		page,
	}
}
