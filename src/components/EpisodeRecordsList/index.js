// @flow
import * as React from 'react'
import List from 'material-ui/List'

import type { RecordComp, EpisodeComp } from '../../types'
import RecordItem from '../RecordItem'
import ErrorUsa from '../ErrorUsa'

import { annict } from '../../utils'
type Props = {
	records: RecordComp[],
	episode: EpisodeComp,
}

const EpisodeRecordsList = (props: Props) => {
	if (props.records.length === 0) {
		return <ErrorUsa message="コメントはまだありません。" />
	}
	return (
		<List>
			{props.records.map(record => (
				<RecordItem
					key={record.id}
					record={record}
					onClick={() => {}}
					onClickTimestamp={() => {
						const url = annict.recordUrl(record.user.username, record.annictId)
						window.open(url)
					}}
				/>
			))}
		</List>
	)
}

export default EpisodeRecordsList
