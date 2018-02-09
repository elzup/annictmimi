// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft'

import type { State, ID, RecordComp, EpisodeComp } from '../../types'
import RecordItem from '../../components/RecordItem'
import NavBarContainer from '../NavBarContainer'
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
		return (
			<div>
				<NavBarContainer
					title={'コメント一覧'}
					leftButton={
						<Link to={'/'}>
							<IconButton color="inherit" aria-label="Menu">
								<KeyboardArrowLeft />
							</IconButton>
						</Link>
					}
				/>
				{props.records.map(record => (
					<RecordItem
						key={record.id}
						record={record}
						onClick={() => {}}
						onClickTimestamp={() => {
							const url = `https://jp.annict.com/@${
								record.user.username
							}/records/${record.id}`
							window.open(url)
						}}
					/>
				))}
			</div>
		)
	}
}

const ms = (state: State, op: OProps) => {
	const { match: { params: { episodeId } } } = op
	return {
		records: selectors.getEpisodeRecordsHasComment(state, episodeId),
		episode: selectors.getEpisodeComp(state, episodeId),
	}
}

const conn: Connector<OProps, Props> = connect(ms, {})

export default withRouter(conn(Container))
