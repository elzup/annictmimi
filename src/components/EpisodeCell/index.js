// @flow
import * as React from 'react'
import type { EpisodeComp } from '../../types'
import { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import ImageIcon from 'material-ui-icons/Image'

type Props = {
	episode: EpisodeComp,
}

const EpisodeCell = (props: Props) => {
	return (
		<ListItem>
			<Avatar>
				<ImageIcon />
			</Avatar>
			<ListItemText primary="Photos" secondary="Jan 9, 2014" />
		</ListItem>
	)
}

export default EpisodeCell
