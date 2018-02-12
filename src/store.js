// @HACKME enable flow
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
	key: 'primary',
	storage,
}

export default () => {
	const middleware = [thunk]

	const devtool =
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

	// HACKME:
	const composer = !!devtool
		? compose(applyMiddleware(...middleware), devtool)
		: compose(applyMiddleware(...middleware))

	const persistedReducer = persistReducer(persistConfig, reducer)
	const store = createStore(persistedReducer, composer)
	const persistor = persistStore(store)
	return { store, persistor }
}
