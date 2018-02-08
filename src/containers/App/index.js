// @flow
import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import AuthContainer from '../AuthContainer'
import Auth from '../AuthContainer/Auth'
import HomeContainer from '../HomeContainer'
import EpisodeContainer from '../EpisodeContainer'

const RouteApp = () => (
	<Router>
		<Switch>
			<Route exact path="/login" component={AuthContainer} />
			<Auth>
				<Switch>
					<Route exact path="/" component={HomeContainer} />
					<Route path="/ep/:episodeId" component={EpisodeContainer} />
				</Switch>
			</Auth>
		</Switch>
	</Router>
)
export default RouteApp
