// @flow
import { combineReducers } from './config'
import AnnictUser from './containers/AnnictUser/reducer'
import AuthContainer from './containers/AuthContainer/reducer'

export default combineReducers({
	AnnictUser,
	AuthContainer,
})
