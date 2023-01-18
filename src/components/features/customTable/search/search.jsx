import PropTypes from 'prop-types'
import React from 'react'

export default function Search({ onSearch }) {
	return (
		<input
			type='text'
			className='search-field'
			placeholder='Search the table'
			onChange={(e) => onSearch(e.target.value)}
		/>
	)
}

Search.propTypes = {
	onSearch: PropTypes.func
}
