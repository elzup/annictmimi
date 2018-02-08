// @flow
import * as React from 'react'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import AccountCircle from 'material-ui-icons/AccountCircle'
import Menu, { MenuItem } from 'material-ui/Menu'
import type { AnnictUser } from '../../types'

export type Props = {
	isLogin: boolean,
	profile?: AnnictUser,
	doLogout: Function,
}

type State = {
	anchorEl: any,
}

class NavBar extends React.Component<Props, State> {
	state = {
		anchorEl: null,
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
						<IconButton color="inherit" aria-label="Menu">
							<MenuIcon />
						</IconButton>
						<Typography variant="title" color="inherit">
							Title
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
									<MenuItem onClick={this.handleClose}>Profile</MenuItem>
									<MenuItem onClick={this.handleClose}>My account</MenuItem>
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
