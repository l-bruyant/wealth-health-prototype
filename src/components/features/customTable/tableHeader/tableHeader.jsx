import PropTypes from 'prop-types'
import React from 'react'
import { useState } from 'react'

export default function TableHeader({ headers, onSorting }) {
	const [sortingField, setSortingField] = useState('')
	const [sortingOrder, setSortingOrder] = useState('asc')

	const onSortingChange = (fieldValue) => {
		const order = fieldValue === sortingField && sortingOrder === 'asc' ? 'desc' : 'asc'
		setSortingField(fieldValue)
		setSortingOrder(order)
		onSorting(fieldValue, order)
	}

	return (
		<thead>
			<tr>
				{headers.map(({ fieldName, fieldValue }) => (
					<th
						className='table-header-text'
						key={fieldName}
						onClick={() => onSortingChange(fieldValue)}
					>
						<div>{fieldName}</div>
						{sortingField && sortingField === fieldValue && (
							<div className='sort-icon'>{sortingOrder === 'asc' ? '🔽' : '🔼'}</div>
						)}
					</th>
				))}
			</tr>
		</thead>
	)
}

TableHeader.propTypes = {
	headers: PropTypes.array,
	onSorting: PropTypes.func
}
