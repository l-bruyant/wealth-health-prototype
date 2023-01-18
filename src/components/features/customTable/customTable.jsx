import PropTypes from 'prop-types'
import React, { useMemo, useState } from 'react'

import ExternalDropDown from '../../libraries/externalDropdown'
import Pagination from './pagination/pagination'
import Search from './search/search'
import TableHeader from './tableHeader/tableHeader'
import searchTable from './utils/searchTable'
import sortTable from './utils/sortTable'

/**
 *
 * See proptypes for more information about each prop
 *
 * @function CustomTable
 *
 * @returns the CustomTable component
 *
 */

export default function CustomTable({
	data,
	fieldsSetup,
	defaultSortingField,
	defaultSortingOrder,
	paginationOptions = ['10'],
	defaultPaginationOption
}) {
	const [currentPage, setCurrentPage] = useState(1)
	const [itemsPerPage, setItemsPerPage] = useState(defaultPaginationOption)
	const [search, setSearch] = useState('')
	const [sorting, setSorting] = useState({
		field: defaultSortingField,
		order: defaultSortingOrder
	})

	const unSlicedData = useMemo(() => {
		let itemsTable = Object.assign([], data)
		if (search) {
			itemsTable = searchTable(itemsTable, search)
		}
		if (sorting.field) {
			itemsTable = sortTable(itemsTable, sorting.order, sorting.field)
		}
		return itemsTable
	}, [data, search, sorting])

	const slicedData = useMemo(() => {
		const paginatedData = unSlicedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
		return paginatedData
	}, [data, currentPage, itemsPerPage, search, sorting])

	return (
		<>
			<div className='table-options-area'>
				<div className='pagination-settings-container'>
					Show
					<ExternalDropDown
						onChange={(e) => {
							setItemsPerPage(e.value)
							setCurrentPage(1)
						}}
						name='pagination-settings'
						id='pagination-settings'
						options={paginationOptions}
						value={defaultPaginationOption}
					/>
					Results
				</div>
				<div className='search-container'>
					<label htmlFor='search'>Search</label>
					<Search
						onSearch={(value) => {
							setSearch(value)
							setCurrentPage(1)
						}}
					/>
				</div>
			</div>
			<table className='items-table'>
				<TableHeader
					headers={fieldsSetup}
					onSorting={(field, order) => {
						setSorting({ field, order })
						setCurrentPage(1)
					}}
				/>
				<tbody>
					{slicedData.map((item, index) => (
						<tr key={'row' + index}>
							{fieldsSetup.map((field, index) => (
								<td key={item[field.fieldDisplay] + index}>{item[field.fieldDisplay]}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<div>
				<Pagination
					total={unSlicedData.length}
					itemsPerPage={itemsPerPage}
					currentPage={currentPage}
					onPageChange={(page) => setCurrentPage(page)}
					firstItemIndex={(currentPage - 1) * itemsPerPage + 1}
					lastItemIndex={(currentPage - 1) * itemsPerPage + slicedData.length}
				/>
			</div>
		</>
	)
}

// import React from 'react'
// import { render, fireEvent } from '@testing-library/react'
// import CustomTable from './CustomTable'

// describe('CustomTable', () => {
//   const data = [
//     { firstName: 'Jane', lastName: 'Doe', age: 24 },
//     { firstName: 'John', lastName: 'Smith', age: 32 },
//     { firstName: 'Bob', lastName: 'Johnson', age: 28 },
//   ]
//   const fieldsSetup = [
//     { fieldName: 'FIRST NAME', fieldValue: 'firstName', fieldDisplay: 'firstName' },
//     { fieldName: 'LAST NAME', fieldValue: 'lastName', fieldDisplay: 'lastName' },
//     { fieldName: 'AGE', fieldValue: 'age', fieldDisplay: 'age' },
//   ]
//   it('renders the table correctly', () => {
//     const { container } = render(
//       <CustomTable
//         data={data}
//         fieldsSetup={fieldsSetup}
//         defaultSortingField='firstName'
//         defaultSortingOrder='asc'
//         paginationOptions={['2']}
//         defaultPaginationOption={'2'}
//       />
//     )
//     // check if the table rendered correctly
//     expect(container.querySelector('table')).toBeTruthy()
// 	})
// })

// import { render } from '@testing-library/react';
// import CustomTable from './CustomTable';

// describe('CustomTable', () => {
//   it('should render data, fieldsSetup, paginationOptions and defaultPaginationOption', () => {
//     const data = [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }];
//     const fieldsSetup = [{ fieldName: 'Name', fieldValue: 'name', fieldDisplay: 'name' }, { fieldName: 'Age', fieldValue: 'age', fieldDisplay: 'age' }];
//     const paginationOptions = ['2', '5', '10'];
//     const defaultPaginationOption = '5';
//     const { getByText } = render(<CustomTable data={data} fieldsSetup={fieldsSetup} paginationOptions={paginationOptions} defaultPaginationOption={defaultPaginationOption} />);

//     expect(getByText('John')).toBeInTheDocument();
//     expect(getByText('Jane')).toBeInTheDocument();
//     expect(getByText('2')).toBeInTheDocument();
//     expect(getByText('5')).toBeInTheDocument();
//     expect(getByText('10')).toBeInTheDocument();
//   });
// });

CustomTable.propTypes = {
	/**
	 * An array of data to display in the table
	 */
	data: PropTypes.array,
	/**
	 * An array that defines the table headers and what to display in each column of the table
	 */
	fieldsSetup: PropTypes.array,
	/**
	 * Identifies the field that sorts the data by default at first render
	 */
	defaultSortingField: PropTypes.string,
	/**
	 * The sorting order, takes "asc" and "desc" as values
	 */
	defaultSortingOrder: PropTypes.string,
	/**
	 * An array of values used for the pagination ['10', '20']
	 * means that the table can display either 10 or 20 rows
	 */
	paginationOptions: PropTypes.array,
	/**
	 * Defines which value of the pagination options is used as default
	 * '20' would mean that the pre selected pagination option is 20 rows
	 */
	defaultPaginationOption: PropTypes.string
}
