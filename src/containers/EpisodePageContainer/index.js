// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import IconButton from 'material-ui/IconButton'
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft'

import type { State, ID, EpisodeComp } from '../../types'
import EpisodeHeader from '../../components/EpisodeHeader'
import NavBarContainer from '../NavBarContainer'
import { getEpisodeComp } from '../EpisodeContainer/selectors'
import EpisodeRecordsList from './EpisodeRecordsList'

type OProps = {
	match: {
		params: {
			episodeId: ID,
		},
	},
}

type Props = {
	episode: EpisodeComp | null,
}

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		if (props.episode === null) {
			// TODO:
			return <div>invalida id</div>
		}
		return (
			<div>
				<NavBarContainer
					title={'Commnets'}
					leftButton={
						<Link to={'/'} style={{ color: 'white' }}>
							<IconButton
								style={{ height: '38px' }}
								color="inherit"
								aria-label="Menu"
							>
								<KeyboardArrowLeft />
							</IconButton>
						</Link>
					}
				/>
				<EpisodeHeader episode={props.episode} />
				<EpisodeRecordsList episodeId={props.episode.id} />
			</div>
		)
	}
}

const ms = (state: State, op: OProps) => {
	const { match: { params: { episodeId } } } = op
	return {
		episode: getEpisodeComp(state, episodeId),
	}
}

const conn: Connector<OProps, Props> = connect(ms, {})

export default withRouter(conn(Container))
