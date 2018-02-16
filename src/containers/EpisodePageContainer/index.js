// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import { withRouter } from 'react-router-dom'

import type { State, ID, EpisodeComp, RecordComp } from '../../types'
import EpisodeHeader from '../../components/EpisodeHeader'
import NavBarContainer from '../NavBarContainer'
import { getEpisodeComp } from '../EpisodeContainer/selectors'
import EpisodeRecordsList from '../../components/EpisodeRecordsList'
import ErrorUsa from '../../components/ErrorUsa'
import * as selectors from './selectors'

import { openAnnictRecord } from './logic'

type OProps = {
	match: {
		params: {
			episodeId: ID,
		},
	},
}

type Props = {
	episode: EpisodeComp | null,
	records: RecordComp[] | null,
	openAnnictRecord: Function,
}

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		return (
			<div>
				<NavBarContainer title={'Commnets'} />
				{props.episode && props.records ? (
					<div>
						<EpisodeHeader episode={props.episode} />
						<EpisodeRecordsList
							episode={props.episode}
							records={props.records}
							onClickTimestamp={props.openAnnictRecord}
						/>
					</div>
				) : (
					<ErrorUsa message={'データが見つかりませんでした。'} />
				)}
			</div>
		)
	}
}

const ms = (state: State, op: OProps) => {
	const { match: { params: { episodeId } } } = op
	return {
		episode: getEpisodeComp(state, episodeId),
		records: selectors.getEpisodeRecordsWithFilter(state, episodeId),
	}
}

const conn: Connector<OProps, Props> = connect(ms, { openAnnictRecord })

export default withRouter(conn(Container))
