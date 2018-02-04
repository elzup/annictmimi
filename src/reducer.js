// @flow
import { combineReducers } from './config'
import AnnictUser from './containers/AnnictUser/reducer'
import AuthContainer from './containers/AuthContainer/reducer'
import EpisodeById from './containers/EpisodeById/reducer'
import EpisodeContainer from './containers/EpisodeContainer/reducer'
import RecordById from './containers/RecordById/reducer'
import RecordContainer from './containers/RecordContainer/reducer'
import UserById from './containers/UserById/reducer'
import UserContainer from './containers/UserContainer/reducer'

export default combineReducers({
	AnnictUser,
	AuthContainer,
	EpisodeById,
	EpisodeContainer,
	RecordById,
	RecordContainer,
	UserById,
	UserContainer,
})
