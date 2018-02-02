// @flow
import type { State as AnnictUser } from '../containers/AnnictUser/reducer'
import type { State as AuthContainer } from '../containers/AuthContainer/reducer'

export type State = {
	AnnictUser: AnnictUser,
	AuthContainer: AuthContainer,
}
