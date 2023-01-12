/* eslint-disable react/prop-types */
import React from 'react'

export default function TableHeader ({headers}) {
    return (
        <thead>
            <tr>
                {headers.map( head => (<th key={head.field}>{head.name}</th>))}
            </tr>
        </thead>
    )
}
