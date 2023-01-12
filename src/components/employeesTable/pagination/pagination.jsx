/* eslint-disable react/prop-types */
import React from 'react'
import { useEffect, useState, useMemo } from 'react'

export default function Pagination ({ firstItemIndex, lastItemIndex, total=0, itemsPerPage=10, currentPage=1, onPageChange}) {

    const [totalPages, setTotalPages] = useState(0)

    useEffect( () => {
        if (total > 0 && itemsPerPage > 0)
            setTotalPages(Math.ceil(total/itemsPerPage))
    }, [total, itemsPerPage])

    const paginationItems = useMemo( () => {
        const pages = []
        for(let i=1; i <= totalPages; i++) {
            pages.push(<div className={(i==currentPage? 'pagination-indexNumber pagination-active':'pagination-indexNumber')} key={i}  onClick={() => onPageChange(i)}>
                {i}
            </div>)
        }
        return pages
    }, [totalPages, currentPage])

    if (totalPages === 0) return null;

    return (
        <div className='pagination-container'>
            <div className='pagination-index'>
                Showing {firstItemIndex} to {lastItemIndex} of {total} entries
            </div>
            <div className='pagination-nav'>
                <button 
                    onClick={ () => onPageChange (currentPage - 1)} 
                    hidden={currentPage === 1}
                >Previous</button>
                    {paginationItems}
                <button 
                    onClick={ () => onPageChange (currentPage + 1)} 
                    hidden={currentPage === totalPages}
                >Next</button>
            </div>
        </div>
    )
}
