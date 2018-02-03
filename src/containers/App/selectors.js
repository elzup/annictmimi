// @flow
import type { State } from '../../types'

export function getRehydrated(state: State): boolean {
	const ps: any = state
	return ps._persist.rehydrated
}
