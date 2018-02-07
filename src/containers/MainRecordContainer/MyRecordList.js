// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import List from 'material-ui/List'

import type { State, EpisodeComp } from '../../types'
import * as selectors from './selectors'
import EpisodeCell from '../../components/EpisodeCell'

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
					<EpisodeCell
						key={episode.id}
						onClick={() => {
							console.log(episode.recordCommentsCount)
						}}
						episode={episode}
					/>
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
