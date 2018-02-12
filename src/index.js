// @flow
import * as React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import pink from 'material-ui/colors/pink'
import purple from 'material-ui/colors/purple'
import { PersistGate } from 'redux-persist/integration/react'

import App from './containers/App'

import registerServiceWorker from './config/registerServiceWorker'
import configureStore from './store'

import './config/init'

const { store, persistor } = configureStore()

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
			<PersistGate loading={<h3>Loading</h3>} persistor={persistor}>
				<MuiThemeProvider theme={theme}>
					<App />
				</MuiThemeProvider>
			</PersistGate>
		</Provider>,
		rootEl,
	)
	registerServiceWorker()
}
