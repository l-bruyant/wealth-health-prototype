/* eslint-disable react/prop-types */
import React from 'react'
import { useState } from 'react'

export default function TableHeader ({headers, onSorting}) {

    const[sortingField, setSortingField] = useState("")
    const[sortingOrder, setSortingOrder] = useState("asc")

    const onSortingChange = field => {
            const order = 
                field === sortingField && sortingOrder === "asc" ? "desc" : "asc"
            setSortingField(field)
            setSortingOrder(order)
            onSorting(field, order)
    }

    return (
        <thead>
            <tr>
                {headers.map( ({name, field, sortable}) => (
                    <th 
                        className='table-header-text'
                        key={name}
                        onClick={ () => sortable ? onSortingChange(field) : null}
                    >   
                        <div>
                            {name}
                        </div>
                            {
                            sortingField && sortingField === field && (
                                <div className='sort-icon'> 
                                    {sortingOrder === "asc" ? "🔽" : "🔼"}
                                </div>
                            )}
                    </th>
                ))}
            </tr>
        </thead>
    )
}
