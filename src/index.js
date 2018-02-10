// @flow
import * as React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import pink from 'material-ui/colors/pink'
import purple from 'material-ui/colors/purple'

import App from './containers/App'

import registerServiceWorker from './config/registerServiceWorker'
import configureStore from './store'

import './config/init'

const store = configureStore()

const theme = createMuiTheme({
	palette: {
		primary: {
			...pink,
			main: '#D5698A',
			contrastText: '#fff',
		},
		secondary: purple,
	},
})

const rootEl = document.getElementById('root')

if (rootEl !== null) {
	ReactDOM.render(
		<Provider store={store}>
			<MuiThemeProvider theme={theme}>
				<App />
			</MuiThemeProvider>
		</Provider>,
		rootEl,
	)
	registerServiceWorker()
}
