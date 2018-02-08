// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import List from 'material-ui/List'
import { Link } from 'react-router-dom'

import type { State, EpisodeComp } from '../../types'
import * as selectors from './selectors'
import EpisodeCell from '../../components/EpisodeCell'
import { readEpisode } from '../EpisodeContainer/actions'

type OProps = {}
type Props = {
	episodes: EpisodeComp[],
	readEpisode: Function,
}

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		return (
			<List>
				{props.episodes.map((episode: EpisodeComp) => (
					<Link
						key={episode.id}
						to={`/ep/${episode.id}`}
						onClick={() => props.readEpisode(episode.id)}
					>
						<EpisodeCell
							key={episode.id}
							onClick={() => {}}
							episode={episode}
						/>
					</Link>
				))}
			</List>
		)
	}
}

const ms = (state: State) => ({
	episodes: selectors.getMyEpisodeComp(state),
})

const conn: Connector<OProps, Props> = connect(ms, { readEpisode })

export default conn(Container)
