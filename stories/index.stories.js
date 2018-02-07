// @flow
import React from 'react'
import List from 'material-ui/List'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import EpisodeCell from '../src/components/EpisodeCell'

import episodeComps from './episodeComp'

storiesOf('EpisodeCell', module).add('example 1', () => (
	<div style={{ width: '360px' }}>
		<List>
			<EpisodeCell episode={episodeComps[0]} />
			<EpisodeCell episode={episodeComps[1]} />
		</List>
	</div>
))
