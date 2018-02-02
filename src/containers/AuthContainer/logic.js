// @flow

import request from 'superagent'

import type { ThunkAction } from '../../types'
import * as actions from './actions'
import config from '../../config'

export function doLogin(): ThunkAction {
	return dispatch => {
		if (typeof window !== 'undefined') {
			window.location.href = config.annict.authUrl
		}
	}
}

export function requestToken({ code }: { code: string }): ThunkAction {
	return async dispatch => {
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
			.end((err, res) => {
				console.log(err)
				console.log(res)
				// Calling the end function will send the request
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
