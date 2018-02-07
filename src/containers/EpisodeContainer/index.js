// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State, ID, RecordComp, EpisodeComp } from '../../types'
import * as selectors from './selectors'

type OProps = {
	episodeId: ID,
}

type Props = {
	records: RecordComp[],
	episode: EpisodeComp,
}

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		return <div>{JSON.stringify(props)}</div>
	}
}

const ms = (state: State, op: OProps) => ({
	records: selectors.getEpisodeRecords(state, op.episodeId),
	episode: selectors.getEpisodeComp(state, op.episodeId),
})

const conn: Connector<OProps, Props> = connect(ms, {})

export default conn(Container)
