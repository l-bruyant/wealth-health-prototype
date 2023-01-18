import 'react-datepicker/dist/react-datepicker.css'
import '../../styles/react-libraries/react-datepicker.css'

import PropTypes from 'prop-types'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'

/**
 *
 * The goal of this wrapper is to setup the external library component
 * in a single place for easier maintenance
 *
 * @function ExternalDatePicker
 *
 * @returns a wrapper that contains the react-datepicker library component
 *
 */

export default function ExternalDatePicker({ name, id }) {
	const [date, setDate] = useState(new Date())

	return (
		<DatePicker
			name={name}
			id={id}
			selected={date}
			onChange={(date = Date) => setDate(date)}
		/>
	)
}

ExternalDatePicker.propTypes = {
	name: PropTypes.string,
	id: PropTypes.string
}
