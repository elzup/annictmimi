// @flow
import * as React from 'react'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import type { AnnictUser } from '../../types'

import config from '../../config'

export type Props =
	| {
			isLogin: true,
			profile: AnnictUser,
			title?: string,
			leftButton?: React.Node,
			doLogout: Function,
		}
	| {
			isLogin: false,
			title?: string,
			leftButton?: React.Node,
			doLogout: Function,
		}

const defaultProps = {
	title: config.appName,
	leftButton: null,
}

const NavBar = (oprops: Props) => {
	const props = { ...defaultProps, ...oprops }
	return (
		<div>
			<AppBar position="static">
				<Toolbar style={{ minHeight: 0 }}>
					{props.leftButton}
					<Typography
						style={{ fontSize: '14px' }}
						variant="title"
						color="inherit"
					>
						{props.title}
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default NavBar
