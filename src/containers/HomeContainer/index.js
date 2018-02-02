// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import * as Ons from 'react-onsenui'

import type { State, AnnictUser } from '../../types'
import Navbar from '../../components/Navbar'
import { getUser } from '../AuthContainer/selectors'
import { doLogout } from '../AuthContainer/logic'

type OProps = {}
type Props = {
	user: AnnictUser,
	doLogout: Function,
	requestToken: ({ code: string }) => void,
}

class HomeContainer extends React.Component<Props> {
	render() {
		const { props } = this
		return (
			<Ons.Page
				renderToolbar={() => (
					<Ons.Toolbar>
						<div className="center">Annict mimi</div>
					</Ons.Toolbar>
				)}
			>
				<p>{props.user.username} Logined</p>
				<Ons.Button onClick={props.doLogout}>ログアウト</Ons.Button>
			</Ons.Page>
		)
	}
}

const ms = (state: State) => ({
	user: getUser(state),
})

const conn: Connector<OProps, Props> = connect(ms, { doLogout })

export default conn(HomeContainer)
