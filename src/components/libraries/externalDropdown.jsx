import 'react-dropdown/style.css'
import '../../styles/react-libraries/react-dropdown.css'

import PropTypes from 'prop-types'
import React from 'react'
import Dropdown from 'react-dropdown'

/**
 *
 * The goal of this wrapper is to setup the external library component
 * in a single place for easier maintenance
 *
 * @function ExternalDropDown
 *
 * @returns a wrapper that contains the react-dropdown library component
 *
 */

export default function ExternalDropDown({ name, id, onChange, options, value = options[0] }) {
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

ExternalDropDown.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string,
	onChange: PropTypes.func,
	options: PropTypes.array,
	value: PropTypes.string
}
