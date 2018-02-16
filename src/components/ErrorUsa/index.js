// @flow
import * as React from 'react'
import styled from 'styled-components'

import usa from '../assets/usa.svg'

type Props = {
	message: string,
}

const Box = styled.div`
	text-align: center;
`

const Logo = styled.img`
	margin: 50px 0;
	height: 80px;
`

export default (props: Props) => (
	<Box>
		<Logo src={usa} alt="usa" />
		<p>{props.message}</p>
	</Box>
)
