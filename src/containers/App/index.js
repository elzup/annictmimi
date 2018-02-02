// @flow
import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import AuthContainer from '../AuthContainer'

const App = () => (
	<Router>
		<div>
			<Route exact path="/" component={AuthContainer} />
		</div>
	</Router>
)
export default App
