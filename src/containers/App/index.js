// @flow
import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import AuthContainer from '../AuthContainer'
import Auth from '../AuthContainer/Auth'
import HomeContainer from '../HomeContainer'

const App = () => (
	<Router>
		<div>
			<Route exact path="/login" component={AuthContainer} />
			<Auth>
				<Switch>
					<Route path="/" component={HomeContainer} />
				</Switch>
			</Auth>
		</div>
	</Router>
)
export default App
