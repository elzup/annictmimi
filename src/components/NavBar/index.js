// @flow
import * as React from 'react'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import AccountCircle from 'material-ui-icons/AccountCircle'
import Menu, { MenuItem } from 'material-ui/Menu'
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

type State = {
	anchorEl: any,
}

class NavBar extends React.Component<Props, State> {
	state = {
		anchorEl: null,
	}

	static defaultProps = {
		title: config.appName,
		leftButton: null,
	}

	handleMenu = (event: Event) => {
		this.setState({ anchorEl: event.currentTarget })
	}

	handleClose = () => {
		this.setState({ anchorEl: null })
	}

	render() {
		const { anchorEl } = this.state
		const { props } = this
		const open = Boolean(anchorEl)

		return (
			<div>
				<AppBar position="static">
					<Toolbar>
						{props.leftButton}
						<Typography variant="title" color="inherit">
							{props.title}
						</Typography>
						{props.isLogin && (
							<div>
								<IconButton
									aria-owns={open ? 'menu-appbar' : null}
									aria-haspopup="true"
									onClick={this.handleMenu}
									color="inherit"
								>
									<AccountCircle />
								</IconButton>
								<Menu
									id="menu-appbar"
									anchorEl={anchorEl}
									anchorOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									transformOrigin={{
										vertical: 'top',
										horizontal: 'right',
									}}
									open={open}
									onClose={this.handleClose}
								>
									<MenuItem onClick={props.doLogout}>Logout</MenuItem>
								</Menu>
							</div>
						)}
					</Toolbar>
				</AppBar>
			</div>
		)
	}
}

export default NavBar
