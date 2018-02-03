// @flow
import type { State as AnnictUser } from '../containers/AnnictUser/reducer'
import type { State as AuthContainer } from '../containers/AuthContainer/reducer'
import type { State as RecordById } from '../containers/RecordById/reducer'
import type { State as RecordContainer } from '../containers/RecordContainer/reducer'
import type { State as UserById } from '../containers/UserById/reducer'
import type { State as UserContainer } from '../containers/UserContainer/reducer'

export type State = {
	AnnictUser: AnnictUser,
	AuthContainer: AuthContainer,
	RecordById: RecordById,
	RecordContainer: RecordContainer,
	UserById: UserById,
	UserContainer: UserContainer,
}
