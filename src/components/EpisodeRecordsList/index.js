// @flow
import * as React from 'react'
import List from 'material-ui/List'

import type { RecordComp, EpisodeComp } from '../../types'
import RecordItem from '../RecordItem'
import ErrorUsa from '../ErrorUsa'

type Props = {
	records: RecordComp[],
	episode: EpisodeComp,
	onClickTimestamp: Function,
}

const EpisodeRecordsList = (props: Props) => {
	if (props.records.length === 0) {
		return <ErrorUsa>{'コメントはまだありません。'}</ErrorUsa>
	}
	return (
		<List>
			{props.records.map(record => (
				<RecordItem
					key={record.id}
					record={record}
					onClick={() => {}}
					onClickFav={() => {}}
					onClickTimestamp={() => {
						props.onClickTimestamp({
							username: record.user.username,
							recordAnnictId: record.annictId,
						})
					}}
				/>
			))}
		</List>
	)
}

export default EpisodeRecordsList
