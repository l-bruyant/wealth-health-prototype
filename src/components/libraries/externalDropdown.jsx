/* eslint-disable react/prop-types */
import 'react-dropdown/style.css';
import"../../styles/react-libraries/react-dropdown.css"

import React from 'react'
import Dropdown from 'react-dropdown';

export default function ExternalDropDown ({name, id, onChange, options, value=options[0]}) {

    return (
        <Dropdown 
            name={name}
            id={id} 
            onChange={onChange} 
            options={options} 
            value={value} 
        />
    )
}
