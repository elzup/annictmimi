// @flow
import * as React from 'react'

import { ListItem } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'

import type { RecordComp } from '../../types'

type Props = {
	record: RecordComp,
	onClick: Function,
}

const RecordItem = (props: Props) => {
	const { record } = props
	const { user } = record

	return (
		<ListItem
			leftAvatar={<Avatar src={user.avatarUrl} />}
			primaryText={<p>{user.name}</p>}
			secondaryText={<p>{record.comment}</p>}
			secondaryTextLines={2}
		/>
	)
}

export default RecordItem
