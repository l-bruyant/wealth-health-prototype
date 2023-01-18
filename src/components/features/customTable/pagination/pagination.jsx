import PropTypes from 'prop-types'
import React from 'react'
import { useEffect, useMemo, useState } from 'react'

export default function Pagination({ firstItemIndex, lastItemIndex, total = 0, itemsPerPage = 10, currentPage = 1, onPageChange }) {
	const [totalPages, setTotalPages] = useState(0)

	useEffect(() => {
		if (total > 0 && itemsPerPage > 0) {
			setTotalPages(Math.ceil(total / itemsPerPage))
		}
		if (total == 0) {
			setTotalPages(1)
		}
	}, [total, itemsPerPage])

	const createPaginationItem = (i, currentPage) => (
		<div
			className={i === currentPage ? 'pagination-indexNumber pagination-active' : 'pagination-indexNumber'}
			key={i}
			onClick={() => onPageChange(i)}
		>
			{i}
		</div>
	)

	const paginationItems = useMemo(() => {
		const pages = []

		if (totalPages === 1) {
			return ''
		} else if (totalPages < 6) {
			for (let i = 1; i <= totalPages; i++) {
				pages.push(createPaginationItem(i, currentPage))
			}
		} else if (currentPage < 4) {
			for (let i = 1; i <= 4; i++) {
				pages.push(createPaginationItem(i, currentPage))
			}
			pages.push(
				<div
					className='pagination-indexNumber pagination-dots'
					key='...'
				>
					...
				</div>
			)
			pages.push(createPaginationItem(totalPages, currentPage))
		} else if (currentPage > totalPages - 3) {
			pages.push(createPaginationItem(1, currentPage))
			pages.push(
				<div
					className='pagination-indexNumber pagination-dots'
					key='...'
				>
					...
				</div>
			)
			for (let i = totalPages - 3; i <= totalPages; i++) {
				pages.push(createPaginationItem(i, currentPage))
			}
		} else if (totalPages > 1) {
			pages.push(
				<div
					className='pagination-indexNumber'
					key={1}
					onClick={() => onPageChange(1)}
				>
					{1}
				</div>
			)
			pages.push(
				<div
					className='pagination-indexNumber pagination-dots'
					key='...1'
				>
					...
				</div>
			)
			for (let i = currentPage - 1; i <= currentPage + 1; i++) {
				pages.push(createPaginationItem(i, currentPage))
			}
			pages.push(
				<div
					className='pagination-indexNumber pagination-dots'
					key='...2'
				>
					...
				</div>
			)
			pages.push(createPaginationItem(totalPages, currentPage))
		}

		return pages
	}, [totalPages, currentPage])

	return (
		<div className='pagination-container'>
			{total > 0 ? (
				<div className='pagination-index'>
					Showing {firstItemIndex} to {lastItemIndex} of {total} entries
				</div>
			) : (
				<div className='pagination-index pagination-index-error'>No results available</div>
			)}
			<div className='pagination-nav'>
				<button
					onClick={() => onPageChange(currentPage - 1)}
					hidden={currentPage === 1}
				>
					Previous
				</button>
				{paginationItems}
				<button
					onClick={() => onPageChange(currentPage + 1)}
					hidden={currentPage === totalPages}
				>
					Next
				</button>
			</div>
		</div>
	)
}

Pagination.propTypes = {
	firstItemIndex: PropTypes.number,
	lastItemIndex: PropTypes.number,
	total: PropTypes.number,
	itemsPerPage: PropTypes.string,
	currentPage: PropTypes.number,
	onPageChange: PropTypes.func
}
