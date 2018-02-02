// @flow

import request from 'superagent'

import type { ThunkAction } from '../../types'
import * as actions from './actions'
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
	return dispatch => {
		request
			.post(config.annict.baseUrl + '/oauth/token')
			.send({
				client_id: config.annict.id,
				client_secret: config.annict.secret,
				grant_type: 'authorization_code',
				redirect_uri: config.annict.redirect,
				code: code,
			})
			.set('accept', 'json')
			.end(async (err, res) => {
				if (err) {
					// TODO print error
					window.location.href = '/'
					return
				}
				await dispatch(actions.saveAuth(camelCaseRecursive(res.body)))
				window.location.href = '/'
			})
	}
}

export function refLogin(): ThunkAction {
	return dispatch => {
		// TODO
	}
}

export function doLogout(): ThunkAction {
	return async dispatch => {
		// TODO
	}
}
