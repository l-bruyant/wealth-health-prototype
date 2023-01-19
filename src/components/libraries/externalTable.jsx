import '../../styles/react-libraries/lbs-react-table.css'

import CustomReactTable from 'lbs-react-table/dist/customTable/customTable'
import PropTypes from 'prop-types'
import React from 'react'

/**
 *
 * The goal of this wrapper is to setup the external library component
 * in a single place for easier maintenance
 *
 * @function ExternalTable
 *
 * @returns a wrapper that contains the lbs-react-table library component
 *
 */

export default function ExternalTable({
	data,
	fieldsSetup,
	defaultSortingField,
	defaultSortingOrder,
	paginationOptions,
	defaultPaginationOption
}) {
	return (
		<CustomReactTable
			data={data}
			fieldsSetup={fieldsSetup}
			defaultSortingField={defaultSortingField}
			defaultSortingOrder={defaultSortingOrder}
			paginationOptions={paginationOptions}
			defaultPaginationOption={defaultPaginationOption}
		/>
	)
}

ExternalTable.propTypes = {
	data: PropTypes.array,
	fieldsSetup: PropTypes.array,
	defaultSortingField: PropTypes.string,
	defaultSortingOrder: PropTypes.string,
	paginationOptions: PropTypes.array,
	defaultPaginationOption: PropTypes.string
}
