// @flow
import type { State as AnnictUser } from '../containers/AnnictUser/reducer'
import type { State as AuthContainer } from '../containers/AuthContainer/reducer'
import type { State as EpisodeById } from '../containers/EpisodeById/reducer'
import type { State as EpisodeContainer } from '../containers/EpisodeContainer/reducer'
import type { State as EpisodePageContainer } from '../containers/EpisodePageContainer/reducer'
import type { State as MainEpisodeContainer } from '../containers/MainEpisodeContainer/reducer'
import type { State as RecordById } from '../containers/RecordById/reducer'
import type { State as RecordContainer } from '../containers/RecordContainer/reducer'
import type { State as SettingContainer } from '../containers/SettingContainer/reducer'
import type { State as UserById } from '../containers/UserById/reducer'
import type { State as UserContainer } from '../containers/UserContainer/reducer'
import type { State as WorkById } from '../containers/WorkById/reducer'
import type { State as WorkContainer } from '../containers/WorkContainer/reducer'

export type State = {
	AnnictUser: AnnictUser,
	AuthContainer: AuthContainer,
	EpisodeById: EpisodeById,
	EpisodeContainer: EpisodeContainer,
	EpisodePageContainer: EpisodePageContainer,
	MainEpisodeContainer: MainEpisodeContainer,
	RecordById: RecordById,
	RecordContainer: RecordContainer,
	SettingContainer: SettingContainer,
	UserById: UserById,
	UserContainer: UserContainer,
	WorkById: WorkById,
	WorkContainer: WorkContainer,
}
