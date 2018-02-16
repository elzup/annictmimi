// @flow
import * as React from 'react'
import styled from 'styled-components'

import usa from '../assets/usa.svg'

type Props = {
	message: string,
}
const Logo = styled.img`
	margin: 100px 0;
	height: 80px;
`

export default (props: Props) => (
	<div>
		<Logo src={usa} alt="usa" />
		<p>{props.message}</p>
	</div>
)
