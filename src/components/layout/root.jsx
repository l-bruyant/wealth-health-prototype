import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './header'

/**
 *
 * @function Root
 *
 * @returns the Root component
 *
 */

export default function Root() {
	return (
		<React.Fragment>
			<Header />
			<Outlet />
		</React.Fragment>
	)
}
