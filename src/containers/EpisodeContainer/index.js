// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import type { State, ID, RecordComp, EpisodeComp } from '../../types'
import * as selectors from './selectors'

type OProps = {
	match: {
		params: {
			episodeId: ID,
		},
	},
}

type Props = {
	records: RecordComp[] | null,
	episode: EpisodeComp | null,
}

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		if (props.episode === null || props.records === null) {
			// TODO:
			return <div>invalida id</div>
		}
		return <div>{JSON.stringify(props)}</div>
	}
}

const ms = (state: State, op: OProps) => {
	const { match: { params: { episodeId } } } = op
	return {
		records: selectors.getEpisodeRecords(state, episodeId),
		episode: selectors.getEpisodeComp(state, episodeId),
	}
}

const conn: Connector<OProps, Props> = connect(ms, {})

export default withRouter(conn(Container))
