// @flow
import type { FirebaseUser } from '../../types/'

import { GOOGLE_LOGIN, GOOGLE_LOGOUT } from './actionTypes'
import type { GoogleLogin, GoogleLogout } from './actionTypes'

export function googleLogin(firebaseUser: FirebaseUser): GoogleLogin {
	return {
		type: GOOGLE_LOGIN,
		firebaseUser,
	}
}
export function googleLogout(): GoogleLogout {
	return {
		type: GOOGLE_LOGOUT,
	}
}
