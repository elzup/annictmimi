// @flow

import React from 'react'
import List from 'material-ui/List'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import EpisodeCell from '../src/components/EpisodeCell'
import RecordItem from '../src/components/RecordItem'
import RatingLabel from '../src/components/RatingLabel'
import type { EpisodeComp, RecordComp } from '../src/types'
import '../src/config/init'

import episodesData from './episodes.json'

const episodes: EpisodeComp[] = episodesData.episodes
const records: RecordComp[] = episodesData.records
// const episode: EpisodeComp = episodeData

storiesOf('EpisodeCell', module).add('example 1', () => (
	<div style={{ width: '360px' }}>
		<List>
			<EpisodeCell episode={episodes[0]} onClick={action('open episode')} />
			<EpisodeCell episode={episodes[1]} onClick={action('open episode')} />
		</List>
	</div>
))

storiesOf('RecordCell', module).add('example 1', () => (
	<div style={{ width: '360px' }}>
		<List>
			<RecordItem
				record={records[0]}
				onClick={action('open record')}
				onClickTimestamp={action('clicked timestamp')}
			/>
			<RecordItem
				record={records[1]}
				onClick={action('open record')}
				onClickTimestamp={action('clicked timestamp')}
			/>
		</List>
	</div>
))

storiesOf('RatingLabel', module).add('exists', () => (
	<div style={{ width: '360px', padding: '50px' }}>
		{['GREAT', 'GOOD', 'AVERAGE', 'BAD', null].map(rate => (
			<div key={rate}>
				<hr />
				<p>{rate || 'null'}</p>
				<RatingLabel ratingState={rate} />
				<hr />
			</div>
		))}
	</div>
))
