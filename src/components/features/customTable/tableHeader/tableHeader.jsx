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

// import React from 'react'
// import { render, fireEvent } from '@testing-library/react'
// import TableHeader from './TableHeader'

// describe('TableHeader', () => {
//   it('should render headers correctly', () => {
//     const headers = [
//       { fieldName: 'First Name', fieldValue: 'firstName' },
//       { fieldName: 'Last Name', fieldValue: 'lastName' },
//       { fieldName: 'Age', fieldValue: 'age' }
//     ]

//     const onSorting = jest.fn()

//     const { getByText } = render(<TableHeader headers={headers} onSorting={onSorting} />)

//     headers.forEach(({ fieldName }) => {
//       expect(getByText(fieldName)).toBeInTheDocument()
//     })
//   })

// import React from 'react'
// import { render, fireEvent } from '@testing-library/react'
// import TableHeader from './TableHeader'

// describe('TableHeader', () => {
// it('should call onSorting when a header is clicked', () => {
// const headers = [
// { fieldName: 'First Name', fieldValue: 'firstName' },
// { fieldName: 'Last Name', fieldValue: 'lastName' },
// { fieldName: 'Age', fieldValue: 'age' }
// ]

// const onSorting = jest.fn()

// const { getByText } = render(<TableHeader headers={headers} onSorting={onSorting} />)

// const firstHeader = getByText(headers[0].fieldName)
// fireEvent.click(firstHeader)

// expect(onSorting).toHaveBeenCalledWith(headers[0].fieldValue, 'asc')
// })
// })
