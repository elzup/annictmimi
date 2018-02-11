// @flow
import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import AuthContainer from '../AuthContainer'
import Auth from '../AuthContainer/Auth'
import HomeContainer from '../HomeContainer'
import EpisodePageContainer from '../EpisodePageContainer'

const RouteApp = () => (
	<Router>
		<Switch>
			<Route exact path="/login" component={AuthContainer} />
			<Auth>
				<Switch>
					<Route exact path="/" component={HomeContainer} />
					<Route path="/ep/:episodeId" component={EpisodePageContainer} />
				</Switch>
			</Auth>
		</Switch>
	</Router>
)
export default RouteApp
