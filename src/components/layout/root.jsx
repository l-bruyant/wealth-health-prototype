import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './header'

/**
*
* Outlet is used to render child routes inside the component, see router for more context
*
* @function Root
*
*/

export default function Root () {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
        </React.Fragment>
    )
}
