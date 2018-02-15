// @flow
import * as React from 'react'
// import usa from '../assets/usa.svg'
import styled from 'styled-components'

type Props = {
	message: string,
}
const Logo = styled.img`
	margin: 100px 0;
	height: 80px;
`

export default (props: Props) => (
	<div>
		<p>{props.message}</p>
	</div>
)
