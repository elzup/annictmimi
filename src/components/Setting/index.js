// @flow
import * as React from 'react'
import List, {
	ListItem,
	ListItemIcon,
	ListItemSecondaryAction,
	ListItemText,
	ListSubheader,
} from 'material-ui/List'
import Switch from 'material-ui/Switch'
import MoodBadIcon from 'material-ui-icons/MoodBad'
import ExitToAppIcon from 'material-ui-icons/ExitToApp'
import type { AppConfig } from '../../types'
import config from '../../config'

export type Props = {
	doLogout: Function,
	appConfig: AppConfig,
	toggleFilterBad: Function,
}

const Setting = (props: Props) => (
	<React.Fragment>
		<List subheader={<ListSubheader>Settings</ListSubheader>}>
			<ListItem>
				<ListItemIcon>
					<MoodBadIcon />
				</ListItemIcon>
				<ListItemText primary="BAD 評価のコメントは表示しない" />
				<ListItemSecondaryAction>
					<Switch
						onChange={props.toggleFilterBad}
						checked={props.appConfig.filterBad}
					/>
				</ListItemSecondaryAction>
			</ListItem>
			<ListItem onClick={props.doLogout}>
				<ListItemIcon>
					<ExitToAppIcon />
				</ListItemIcon>
				<ListItemText primary="ログアウト" />
			</ListItem>
		</List>
		<List subheader={<ListSubheader>Developer</ListSubheader>}>
			<ListItem
				onClick={() => {
					// @HACKME
					window.open(config.authorUrl)
				}}
			>
				<ListItemText primary="@elzup" />
			</ListItem>
		</List>
	</React.Fragment>
)

export default Setting
