// @flow
import * as React from 'react'

import { ListItem, ListItemText } from 'material-ui/List'
import Badge from 'material-ui/Badge'
import Img from 'react-image'

import usa from '../assets/usa-no.png'

import type { EpisodeComp } from '../../types'

type Props = {
	episode: EpisodeComp,
	onClick: Function,
}

const episodeTitle = (episode: EpisodeComp) =>
	`${episode.numberText} ${episode.title}`

const iconStyle = {
	width: '40px',
	height: '40px',
	objectFit: 'cover',
	background: 'gray',
	borderRadius: '4px',
}
const EpisodeCell = (props: Props) => {
	const title = episodeTitle(props.episode)

	return (
		<ListItem onClick={props.onClick}>
			<Img
				style={iconStyle}
				src={props.episode.work.url}
				loader={<div style={iconStyle}> </div>}
				unloader={<img src={usa} alt={'Usa'} style={iconStyle} />}
			/>
			<ListItemText primary={title} secondary={props.episode.work.title} />
			<Badge
				color="primary"
				badgeContent={props.episode.newCount}
				style={{
					visibility: props.episode.newCount === 0 ? 'hidden' : 'visible',
				}}
			>
				{' ' /* HACKME */}
			</Badge>
		</ListItem>
	)
}

export default EpisodeCell
