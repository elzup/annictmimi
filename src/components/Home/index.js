import React, { Component } from 'react'
import logo from './logo.svg'

import styled, { keyframes } from 'styled-components'

const Wrap = styled.div`
	text-align: center;
`

const logoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Logo = styled.img`
	animation: ${logoSpin} infinite 20s linear;
	height: 80px;
`

const Header = styled.header`
	background-color: #222;
	height: 150px;
	padding: 20px;
	color: white;
`

const Title = styled.h1`
	font-size: 1.5em;
`

const Intoro = styled.p`
	font-size: large;
`

class App extends Component {
	render() {
		return (
			<Wrap>
				<Header>
					<Logo src={logo} className="App-logo" alt="logo" />
					<Title className="App-title">Welcome to React</Title>
				</Header>
				<Intoro>
					To get started, edit <code>src/App.js</code> and save to reload.
				</Intoro>
			</Wrap>
		)
	}
}

export default App
