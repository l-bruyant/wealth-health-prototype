/* eslint-disable react/prop-types */
import React from 'react'

export default function Search({ onSearch }) {
	return (
		<input
			type="text"
			className="search-field"
			placeholder="Search the table"
			onChange={(e) => onSearch(e.target.value)}
		/>
	)
}
