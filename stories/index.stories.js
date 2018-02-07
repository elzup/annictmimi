// @flow

import React from 'react'
import List from 'material-ui/List'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { linkTo } from '@storybook/addon-links'

import EpisodeCell from '../src/components/EpisodeCell'
import type { EpisodeComp } from '../src/types'

import episodeComps from './episodeComp.json'

const episodes: EpisodeComp[] = episodeComps.episodes

storiesOf('EpisodeCell', module).add('example 1', () => (
	<div style={{ width: '360px' }}>
		<List>
			<EpisodeCell episode={episodes[0]} onClick={action('open episode')} />
			<EpisodeCell episode={episodes[1]} onClick={action('open episode')} />
		</List>
	</div>
))
