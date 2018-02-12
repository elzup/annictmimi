// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import List from 'material-ui/List'

import type { State, ID, RecordComp, EpisodeComp } from '../../types'
import RecordItem from '../../components/RecordItem'
import * as selectors from './selectors'

import { annict } from '../../utils'

type OProps = {
	episodeId: ID,
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
		return (
			<List>
				{props.records.map(record => (
					<RecordItem
						key={record.id}
						record={record}
						onClick={() => {}}
						onClickTimestamp={() => {
							const url = annict.recordUrl(
								record.user.username,
								record.annictId,
							)
							window.open(url)
						}}
					/>
				))}
			</List>
		)
	}
}

const ms = (state: State, op: OProps) => {
	return {
		records: selectors.getEpisodeRecordsWithFilter(state, op.episodeId),
	}
}

const conn: Connector<OProps, Props> = connect(ms, {})

export default withRouter(conn(Container))
