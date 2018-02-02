// @flow

import request from 'superagent'

import type { ThunkAction } from '../../types'
import * as actions from './actions'
import { saveAnnictUser, removeUser } from '../AnnictUser/actions'
import * as selectors from './selectors'
import config from '../../config'
import camelCaseRecursive from 'camelcase-keys-recursive'

export function doLogin(): ThunkAction {
	return dispatch => {
		if (typeof window !== 'undefined') {
			window.location.href = config.annict.authUrl
		}
	}
}

export function requestToken({ code }: { code: string }): ThunkAction {
	return async (dispatch, getState) => {
		request
			.post(config.annict.baseUrl + '/oauth/token')
			.send({
				client_id: config.annict.id,
				client_secret: config.annict.secret,
				grant_type: 'authorization_code',
				redirect_uri: config.annict.redirect,
				code: code,
			})
			.end(async (err, res) => {
				await dispatch(actions.saveAuth(camelCaseRecursive(res.body)))
				await dispatch(fetchUser())
				window.location.href = '/'
			})
	}
}

export function fetchUser(): ThunkAction {
	return async (dispatch, getState) => {
		const token = selectors.getToken(getState())
		const res = await request
			.get(config.annict.baseUrl + '/v1/me')
			.query({ access_token: token })
		dispatch(
			saveAnnictUser({
				name: res.body.name,
				username: res.body.username,
			}),
		)
	}
}

export function fetchUserRecords(): ThunkAction {
	return async (dispatch, getState) => {
		const { username } = selectors.getUser(getState())
		const token = selectors.getToken(getState())
		const res = await request
			.get(config.annict.baseUrl + '/v1/me')
			.query({ access_token: token })
	}
}

export function doLogout(): ThunkAction {
	return async dispatch => {
		await dispatch(actions.removeAuth())
		await dispatch(removeUser())
	}
}
