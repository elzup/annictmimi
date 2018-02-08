// @flow
import * as React from 'react'

import { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import moment from 'moment'

import styled from 'styled-components'

import type { RecordComp } from '../../types'

const Name = styled.h3`
	padding: 0;
`

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
						<Name>{user.name}</Name>
						<p>{record.comment}</p>
					</div>
				}
				secondary={timeLabel}
			/>
		</ListItem>
	)
}

export default RecordItem
