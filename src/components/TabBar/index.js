// @flow
import * as React from 'react'
import Tabs, { Tab } from 'material-ui/Tabs'

type Props = {
	value: number,
	handleChange: Function,
}

const TabBar = (props: Props) => (
	<Tabs
		fullWidth
		centered
		value={props.value}
		indicatorColor="primary"
		onChange={props.handleChange}
	>
		<Tab label="Active" />
		<Tab label="Config" disabled />
	</Tabs>
)

export default TabBar
