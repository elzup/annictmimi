// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import List from 'material-ui/List'

import type { State, EpisodeComp } from '../../types'
import * as selectors from './selectors'
import EpisodeCell from '../../components/EpisodeCell'
import { Link } from 'react-router-dom'

type OProps = {}
type Props = {
	episodes: EpisodeComp[],
}

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		return (
			<List>
				{props.episodes.map((episode: EpisodeComp) => (
					<Link to={`/ep/${episode.id}`}>
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

const conn: Connector<OProps, Props> = connect(ms, {})

export default conn(Container)
