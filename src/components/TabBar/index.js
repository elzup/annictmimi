// @flow
import * as React from 'react'
import BottomNavigation, {
	BottomNavigationAction,
} from 'material-ui/BottomNavigation'
import HomeIcon from 'material-ui-icons/Home'
import Settings from 'material-ui-icons/Settings'
import config from '../../config'

export type Props = {
	onPush: any,
	value: any,
}

const TabBar = (props: Props) => (
	<BottomNavigation
		style={{ height: config.tabBarHeight }}
		value={props.value}
		onChange={(event, value) => {
			props.onPush(value)
		}}
	>
		<BottomNavigationAction
			style={{ height: config.tabBarHeight, paddingTop: '8px' }}
			value="/"
			icon={<HomeIcon />}
		/>
		<BottomNavigationAction
			style={{ height: config.tabBarHeight, paddingTop: '8px' }}
			value="/setting"
			icon={<Settings />}
		/>
	</BottomNavigation>
)

export default TabBar
