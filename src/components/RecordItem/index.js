// @flow
import * as React from 'react'

import { ListItem, ListItemText } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import Avatar from 'material-ui/Avatar'
import moment from 'moment'

import styled from 'styled-components'

import type { RecordComp } from '../../types'

const Name = styled.p`
	padding: 0;
	margin: 0;
	margin-left: 10px;
	font-size: 0.8em;
	line-height: 20px;
	color: rgba(0, 0, 0, 0.54);
`
const Rating = styled.p`
	padding: 0;
`

const Row = styled.div`
	display: flex;
`

const RowBetween = styled.div`
	display: flex;
	justify-content: space-between;
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
			<div style={{ width: '100%' }}>
				<RowBetween>
					<Row>
						<Avatar style={{ height: 20, width: 20 }} src={user.avatarUrl} />
						<Name>{user.name}</Name>
					</Row>
					<Typography variant="caption" align="right">
						{timeLabel}
					</Typography>
				</RowBetween>
				<Rating>{record.ratingState}</Rating>
				<Typography
					style={{ padding: '5px 0', margin: 0 }}
					variant="body1"
					align="left"
				>
					{record.comment}
				</Typography>
			</div>
		</ListItem>
	)
}

export default RecordItem
