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
	+appName: string,
	+appPath: string,
	+tabBarHeight: number,
	+authorUrl: string,
	+annict: {
		+id: string,
		+secret: string,
		+redirect: string,
		+baseUrl: string,
		+authUrl: string,
	},
}
const isDev = NODE_ENV === 'development'

const configDevelopment = {
	appName: 'Annict Mimi (Dev)',
}
const configProduction = {
	appName: 'Annict Mimi',
}

const baseUrl = 'https://api.annict.com'
const authUrl =
	'https://api.annict.com/oauth/authorize?' +
	queryString.stringify({
		client_id: REACT_APP_ANNICT_CLIENT_ID,
		redirect_uri: REACT_APP_ANNICT_REDIRECT,
		response_type: 'code',
		scope: 'read write',
	})

const config: Config = {
	isDev,
	appPath: '/',
	authorUrl: 'https://twitter.com/_elzup_',
	annict: {
		id: REACT_APP_ANNICT_CLIENT_ID,
		secret: REACT_APP_ANNICT_CLIENT_SECRET,
		redirect: REACT_APP_ANNICT_REDIRECT,
		baseUrl,
		authUrl,
	},
	tabBarHeight: 40,
	...(isDev ? configDevelopment : configProduction),
}

export const combineReducers = _combineReducers

export default config
