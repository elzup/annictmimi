// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import List from 'material-ui/List'
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'

import type { State, EpisodeComp } from '../../types'
import * as selectors from './selectors'
import EpisodeCell from '../../components/EpisodeCell'
import { readEpisode } from '../EpisodeContainer/actions'
import { openAnnict } from '../AnnictUser/logic'

import ErrorUsa from '../../components/ErrorUsa'

type OProps = {}
type Props = {
	episodes: EpisodeComp[],
	readEpisode: Function,
	openAnnict: Function,
}

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		if (props.episodes.length === 0) {
			return (
				<ErrorUsa>
					エピソードの視聴記録がありません。<br />
					Annict で登録しよう。 <br />
					<Button color="primary" onClick={props.openAnnict}>
						Annict を開く
					</Button>
				</ErrorUsa>
			)
		}
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

const conn: Connector<OProps, Props> = connect(ms, { readEpisode, openAnnict })

export default conn(Container)
