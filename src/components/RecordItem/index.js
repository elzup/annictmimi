// @flow
import * as React from 'react'

import { ListItem } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import Img from 'react-image'
import Button from 'material-ui/Button'
import moment from 'moment'

import usa from '../assets/usa-no.png'

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

const iconStyle = {
	width: '20px',
	height: '20px',
	borderRadius: '50%',
	background: 'gray',
}

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
						<Img
							style={iconStyle}
							src={user.avatarUrl}
							loader={<div style={iconStyle}> </div>}
							unloader={<img src={usa} alt={'Usa'} style={iconStyle} />}
						/>
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
