// @flow
import * as React from 'react'
import List from 'material-ui/List'

import type { RecordComp, EpisodeComp } from '../../types'
import RecordItem from '../../components/RecordItem'

import { annict } from '../../utils'
type Props = {
	records: RecordComp[],
	episode: EpisodeComp,
}

const EpisodeRecordsList = (props: Props) => (
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

export default EpisodeRecordsList
