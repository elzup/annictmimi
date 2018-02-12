// @flow
import React from 'react'
import {
	HashRouter as Router,
	Route,
	Switch,
	withRouter,
} from 'react-router-dom'
import styled from 'styled-components'

import AuthContainer from '../AuthContainer'
import Auth from '../AuthContainer/Auth'
import HomeContainer from '../HomeContainer'
import TabBar from '../TabBarContainer'
import EpisodePageContainer from '../EpisodePageContainer'
import config from '../../config'

// @HACKME
const Main = styled.div`
	height: ${p => p.window.innerHeight - config.tabBarHeight}px;
	overflow: scroll;
`

const RouteApp = () => (
	<Router>
		<Switch>
			<Route exact path="/login" component={AuthContainer} />
			<Auth>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<Main window={window}>
						<Switch>
							<Route exact path="/" component={HomeContainer} />
							<Route path="/ep/:episodeId" component={EpisodePageContainer} />
						</Switch>
					</Main>
					<TabBar />
				</div>
			</Auth>
		</Switch>
	</Router>
)
export default RouteApp
