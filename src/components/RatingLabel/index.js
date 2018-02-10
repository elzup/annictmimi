// @flow
import * as React from 'react'

import type { RatingState } from '../../types'
import styled from 'styled-components'

type Props = {
	ratingState: RatingState,
}
const ratingColor: { [state: RatingState]: string } = {
	GREAT: '#00b0ff',
	GOOD: '#00c853',
	AVERAGE: '#ff6d00',
	BAD: '#757575',
}

const Label = styled.span`
	background-color: ${p => p.color};
	font-size: 0.6em;
	padding: 2px 4px;
	margin-top: 3px;
	border-radius: 2px;
	color: white;
`

const RatingLabel = (props: Props) => {
	if (props.ratingState === null) {
		return null
	}
	return (
		<Label color={ratingColor[props.ratingState]}>{props.ratingState}</Label>
	)
}

export default RatingLabel
