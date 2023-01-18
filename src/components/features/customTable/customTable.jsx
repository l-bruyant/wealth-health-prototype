/* eslint-disable react/prop-types */
import React, { useMemo, useState } from 'react'

import ExternalDropDown from '../../libraries/externalDropdown'
import Pagination from './pagination/pagination'
import Search from './search/search'
import TableHeader from './tableHeader/tableHeader'
import searchTable from './utils/searchTable'
import sortTable from './utils/sortTable'

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
