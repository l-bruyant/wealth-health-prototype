/* eslint-disable react/prop-types */
import React, {useState} from 'react'

export default function Search ({onSearch}) {
    const [search, setSearch] = useState("")
    const onInputChange = (value) => {
        setSearch(value);
        onSearch(value)
    }
    return (
        <input 
            type="text"
            className="search-field"
            placeholder="Search the table"
            value={search}
            onChange={(e) => onInputChange (e.target.value)}
        />
    )
}
