// @flow
import * as React from 'react'
import styled from 'styled-components'
import Typography from 'material-ui/Typography'

import type { EpisodeComp } from '../../types'

const HeaderBack = styled.div``

const HeadImage = styled.img`
	width: 100%;
	height: 150px;
	object-fit: cover;
`

const Number = styled.span`
	padding-left: 10px;
	font-size: 1.5em;
`

const Row = styled.div`
	padding: 4px;
	display: flex;
`

const RecordItem = styled.div`
	padding: 0 10px;
`

type Props = {
	episode: EpisodeComp,
}
const episodeTitle = (episode: EpisodeComp) =>
	`${episode.numberText} ${episode.title}`

const RatingLabel = ({ episode }: Props) => {
	return (
		<HeaderBack>
			<HeadImage src={episode.work.url} alt="" />
			<Row>
				<div>
					<Typography variant="caption" gutterBottom>
						{episode.work.title}
					</Typography>
					<Typography variant="title" gutterBottom>
						{episodeTitle(episode)}
					</Typography>
					<Typography variant="body2" gutterBottom>
						<Row>
							<RecordItem>
								記録数<Number>{episode.recordsCount}</Number>
							</RecordItem>
							<RecordItem>
								コメント数<Number>{episode.recordCommentsCount}</Number>
							</RecordItem>
						</Row>
					</Typography>
				</div>
			</Row>
		</HeaderBack>
	)
}

export default RatingLabel
