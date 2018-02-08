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
			leftavatar={<Avatar src={user.avatarUrl} />}
			primarytext={<p>{user.name}</p>}
			secondarytext={<p>{record.comment}</p>}
			secondarytextlines={2}
		/>
	)
}

export default RecordItem
