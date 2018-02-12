// @flow
import * as React from 'react'

import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import styled, { keyframes } from 'styled-components'

import usa from '../assets/usa.svg'

const logoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Logo = styled.img`
	animation: ${logoSpin} infinite 5s ease;
	margin: 100px 0;
	height: 80px;
`

type Props = {
	handleLoginClick: Function,
}

const Screen = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
`

const LoginScreen = (props: Props) => (
	<Screen>
		<Logo src={usa} alt="usa" />
		<Typography variant="display1" gutterBottom>
			Annict Mimi へようこそ
		</Typography>
		<Typography variant="body1" gutterBottom>
			視聴したアニメのコメントを購読できるクライアントです。<br />
			読み方はアニクト ミミ(↑↓)。
		</Typography>
		<Button color="primary" onClick={props.handleLoginClick}>
			Annict でログイン
		</Button>
	</Screen>
)

export default LoginScreen
