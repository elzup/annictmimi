// @flow
import { combineReducers } from './config'
import AnnictUser from './containers/AnnictUser/reducer'
import AuthContainer from './containers/AuthContainer/reducer'
import EpisodeById from './containers/EpisodeById/reducer'
import EpisodeContainer from './containers/EpisodeContainer/reducer'
import EpisodePageContainer from './containers/EpisodePageContainer/reducer'
import MainEpisodeContainer from './containers/MainEpisodeContainer/reducer'
import RecordById from './containers/RecordById/reducer'
import RecordContainer from './containers/RecordContainer/reducer'
import UserById from './containers/UserById/reducer'
import UserContainer from './containers/UserContainer/reducer'
import WorkById from './containers/WorkById/reducer'
import WorkContainer from './containers/WorkContainer/reducer'

export default combineReducers({
	AnnictUser,
	AuthContainer,
	EpisodeById,
	EpisodeContainer,
	EpisodePageContainer,
	MainEpisodeContainer,
	RecordById,
	RecordContainer,
	UserById,
	UserContainer,
	WorkById,
	WorkContainer,
})
