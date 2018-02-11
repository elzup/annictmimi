// @flow
import type { ID } from '../../types'

export const UPDATE_PAGE: 'EpisodePageContainer/UPDATE_PAGE' =
	'EpisodePageContainer/UPDATE_PAGE'

export const Actions = {
	UPDATE_PAGE,
}

export type UpdatePage = {
	type: typeof UPDATE_PAGE,
	episodeId: ID,
	page: number,
}

export type Action = UpdatePage
