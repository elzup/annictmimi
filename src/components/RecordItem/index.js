// @flow
import * as React from 'react'

import { ListItem } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import Avatar from 'material-ui/Avatar'
import moment from 'moment'

import styled from 'styled-components'

import type { RecordComp } from '../../types'
import RatingLabel from '../RatingLabel'

const Name = styled.p`
	padding: 0;
	margin: 0;
	margin-left: 10px;
	font-size: 0.8em;
	line-height: 20px;
	color: rgba(0, 0, 0, 0.54);
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
	onClickTimestamp: Function,
}

const RecordItem = (props: Props) => {
	const { record } = props
	const { user } = record

	const timeLabel = moment(record.createdAt).fromNow()

	return (
		<ListItem>
			<div style={{ width: '100%' }}>
				<RowBetween>
					<Row>
						<Avatar style={{ height: 20, width: 20 }} src={user.avatarUrl} />
						<Name>{user.name}</Name>
					</Row>
					<Button
						mini
						style={{ minHeight: 0, padding: 0 }}
						onClick={props.onClickTimestamp}
					>
						{timeLabel}
					</Button>
				</RowBetween>
				<RatingLabel ratingState={record.ratingState} />
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
