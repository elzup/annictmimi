// @flow

import React from 'react'
import List from 'material-ui/List'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import EpisodeHeader from '../src/components/EpisodeHeader'
import EpisodeCell from '../src/components/EpisodeCell'
import RecordItem from '../src/components/RecordItem'
import RatingLabel from '../src/components/RatingLabel'
import TabBar from '../src/components/TabBar'

import '../src/config/init'
import styled from 'styled-components'
import { episode1, episode2, record1, record2 } from './dummyData'

const Screen = styled.div`
	width: 360px;
	min-height: 732px;
	border: solid gray 3px;
`

storiesOf('TabBar', module).add('normal', () => (
	<Screen>
		<TabBar value={0} handleChange={action('tab change')} />
	</Screen>
))

storiesOf('EpisodeHeader', module)
	.add('normal', () => (
		<Screen>
			<EpisodeHeader episode={episode1} />
		</Screen>
	))
	.add('long title', () => (
		<Screen>
			<EpisodeHeader episode={episode2} />
		</Screen>
	))
	.add('no image', () => (
		<Screen>
			<EpisodeHeader
				episode={{
					...episode1,
					work: {
						...episode1.work,
						url: '',
					},
				}}
			/>
		</Screen>
	))

storiesOf('EpisodeCell', module).add('example 1', () => (
	<Screen>
		<List>
			<EpisodeCell episode={episode1} onClick={action('open episode')} />
			<EpisodeCell
				episode={{ ...episode1, newCount: 0 }}
				onClick={action('open episode')}
			/>
			<EpisodeCell episode={episode2} onClick={action('open episode')} />
		</List>
	</Screen>
))

storiesOf('RecordCell', module).add('example 1', () => (
	<Screen>
		<List>
			<RecordItem
				record={record1}
				onClick={action('open record')}
				onClickTimestamp={action('clicked timestamp')}
			/>
			<hr />
			<RecordItem
				record={{ ...record1, ratingState: null }}
				onClick={action('open record')}
				onClickTimestamp={action('clicked timestamp')}
			/>
			<hr />
			<RecordItem
				record={record2}
				onClick={action('open record')}
				onClickTimestamp={action('clicked timestamp')}
			/>
		</List>
	</Screen>
))

storiesOf('RatingLabel', module).add('exists', () => (
	<Screen>
		{['GREAT', 'GOOD', 'AVERAGE', 'BAD', null].map(rate => (
			<div key={rate}>
				<hr />
				<p>{rate || 'null'}</p>
				<RatingLabel ratingState={rate} />
				<hr />
			</div>
		))}
	</Screen>
))
