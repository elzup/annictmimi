// @flow

import _combineReducers from './combineReducers'
import queryString from 'query-string'
const {
	NODE_ENV,
	REACT_APP_ANNICT_CLIENT_ID,
	REACT_APP_ANNICT_CLIENT_SECRET,
	REACT_APP_ANNICT_REDIRECT,
} = process.env

if (
	!REACT_APP_ANNICT_CLIENT_ID ||
	!REACT_APP_ANNICT_CLIENT_SECRET ||
	!REACT_APP_ANNICT_REDIRECT ||
	!NODE_ENV
) {
	console.error(process.env)
	throw Error('Configuration not completed. must setup envioraments.')
}

type Config = {
	+isDev: boolean,
	+annict: {
		+id: string,
		+secret: string,
		+redirect: string,
		+baseUrl: string,
		+authUrl: string,
	},
	+admin: {
		+name: string,
		+countMax: number,
	},
}
const isDev = NODE_ENV === 'development'

const configDevelopment = {
	admin: {
		name: 'admin',
		countMax: 100,
	},
}
const configProduction = {
	admin: {
		name: 'proadmin',
		countMax: 100,
	},
}

const baseUrl = 'https://api.annict.com'
const authUrl =
	'https://api.annict.com/oauth/authorize?' +
	queryString.stringify({
		client_id: REACT_APP_ANNICT_CLIENT_ID,
		redirect_uri: REACT_APP_ANNICT_REDIRECT,
		response_type: 'code',
		scope: 'read',
	})
console.log(authUrl)
const config: Config = {
	isDev,
	annict: {
		baseUrl,
		authUrl,
		id: REACT_APP_ANNICT_CLIENT_ID,
		secret: REACT_APP_ANNICT_CLIENT_SECRET,
		redirect: REACT_APP_ANNICT_REDIRECT,
	},
	admin: { name: '', countMax: 0 },
	...(isDev ? configDevelopment : configProduction),
}

export const combineReducers = _combineReducers

export default config
