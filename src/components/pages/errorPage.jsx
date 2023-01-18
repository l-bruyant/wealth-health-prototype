import React from 'react'
import { useRouteError } from 'react-router-dom'

/**
 *
 * @function ErrorPage
 *
 * @returns the ErrorPage component
 *
 */

export default function ErrorPage() {
	const error = useRouteError()

	return (
		<main>
			<div id='error-page'>
				<h2>Error</h2>
				<p>Sorry, an unexpected error has occurred ⚠️</p>
				<p>
					<i>Error message : {error.statusText || error.message}</i>
				</p>
			</div>
		</main>
	)
}
