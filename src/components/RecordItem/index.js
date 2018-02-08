// @flow
import * as React from 'react'

import { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import moment from 'moment'

import type { RecordComp } from '../../types'

type Props = {
	record: RecordComp,
	onClick: Function,
}

const RecordItem = (props: Props) => {
	const { record } = props
	const { user } = record

	const timeLabel = moment(record.createdAt).fromNow()

	return (
		<ListItem onClick={props.onClick}>
			<Avatar src={user.avatarUrl} />

			<ListItemText
				primary={
					<div>
						<p>{user.name}</p>
						<p>{record.comment}</p>
					</div>
				}
				secondary={<p>{timeLabel}</p>}
			/>
		</ListItem>
	)
}

export default RecordItem
