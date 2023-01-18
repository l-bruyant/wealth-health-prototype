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
