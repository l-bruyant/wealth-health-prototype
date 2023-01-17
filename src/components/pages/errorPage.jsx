import React from 'react'
import { useRouteError } from 'react-router-dom'
import Header from '../header'

/**
*
* Displayed by the router in case of wrong route
*
* @function ErrorPage
*
*/

export default function ErrorPage() {
    const error = useRouteError()
    
    return (
        <React.Fragment>
            <Header />
            <main>
                <div id="error-page">
                    <h2>Error</h2>
                    <p>Sorry, an unexpected error has occurred ⚠️</p>
                    <p>
                        <i>Error message : {error.statusText || error.message}</i>
                    </p>
                </div>
            </main> 
        </React.Fragment>
    )
}