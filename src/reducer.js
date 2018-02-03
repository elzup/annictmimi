// @flow
import { combineReducers } from './config'
import AnnictUser from './containers/AnnictUser/reducer'
import AuthContainer from './containers/AuthContainer/reducer'
import RecordById from './containers/RecordById/reducer'
import RecordContainer from './containers/RecordContainer/reducer'
import UserById from './containers/UserById/reducer'
import UserContainer from './containers/UserContainer/reducer'

export default combineReducers({
	AnnictUser,
	AuthContainer,
	RecordById,
	RecordContainer,
	UserById,
	UserContainer,
})
