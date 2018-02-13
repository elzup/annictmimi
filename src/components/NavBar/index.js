// @flow
import * as React from 'react'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft'

import config from '../../config'

export type Props = {
	title?: string,
	leftButtonAction?: ?Function,
}

const defaultProps = {
	title: config.appName,
	leftButtonAction: null,
}

const NavBar = (oprops: Props) => {
	const props = { ...defaultProps, ...oprops }
	return (
		<div>
			<AppBar position="static">
				<Toolbar style={{ minHeight: 0 }}>
					{props.leftButtonAction && (
						<IconButton
							style={{ height: '38px' }}
							color="inherit"
							aria-label="Menu"
							onClick={props.leftButtonAction}
						>
							<KeyboardArrowLeft />
						</IconButton>
					)}

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
