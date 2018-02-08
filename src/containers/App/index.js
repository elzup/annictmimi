// @flow
import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import AuthContainer from '../AuthContainer'
import Auth from '../AuthContainer/Auth'
import HomeContainer from '../HomeContainer'
import EpisodeContainer from '../EpisodeContainer'

export const history = createHistory()

const RouteApp = () => (
	<Router history={history}>
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
