// @flow

import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import type { Reducer } from '../types'

const storageConfig = {
	key: 'primary',
	storage,
}

export default function combineReducers(reducers: Object): Reducer {
	return persistCombineReducers(storageConfig, reducers)
}
