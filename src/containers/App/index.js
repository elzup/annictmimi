// @flow
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import AuthContainer from '../AuthContainer'
import Auth from '../AuthContainer/Auth'
import HomeContainer from '../HomeContainer'
import SettingContainer from '../SettingContainer'
import TabBar from '../TabBarContainer'
import EpisodePageContainer from '../EpisodePageContainer'
import config from '../../config'
import ScrollToTop from './ScrollToTop'

// @HACKME
const Main = styled.div`
	height: ${p => p.window.innerHeight - config.tabBarHeight}px;
	overflow: scroll;
`

// @HACKME
const RouteApp = () => (
	<Router>
		<Switch>
			<Route exact path="/login" component={AuthContainer} />
			<Auth>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<ScrollToTop>
						<Main window={window}>
							<Switch>
								<Route exact path="/" component={HomeContainer} />
								<Route exact path="/setting" component={SettingContainer} />
								<Route path="/ep/:episodeId" component={EpisodePageContainer} />
							</Switch>
						</Main>
					</ScrollToTop>
					<TabBar />
				</div>
			</Auth>
		</Switch>
	</Router>
)
export default RouteApp
