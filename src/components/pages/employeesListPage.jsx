import '../../styles/pages/employeesListPage.css'

import React from 'react'
import { useSelector } from 'react-redux'

import ExternalTable from '../libraries/externalTable'

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

export default function EmployeesListPage() {
	const employeesTableSetup = [
		{ fieldName: 'FIRST NAME', fieldValue: 'firstName', fieldDisplay: 'firstName' },
		{ fieldName: 'LAST NAME', fieldValue: 'lastName', fieldDisplay: 'lastName' },
		{ fieldName: 'START DATE', fieldValue: 'startDateString', fieldDisplay: 'startDate' },
		{ fieldName: 'DEPARTMENT', fieldValue: 'department', fieldDisplay: 'department' },
		{ fieldName: 'DATE OF BIRTH', fieldValue: 'dateOfBirthString', fieldDisplay: 'dateOfBirth' },
		{ fieldName: 'STREET', fieldValue: 'street', fieldDisplay: 'street' },
		{ fieldName: 'CITY', fieldValue: 'city', fieldDisplay: 'city' },
		{ fieldName: 'STATE', fieldValue: 'state', fieldDisplay: 'state' },
		{ fieldName: 'ZIPCODE', fieldValue: 'zipCode', fieldDisplay: 'zipCode' }
	]

	return (
		<div className='employees-list-page'>
			<ExternalTable
				data={useSelector((state) => state.employeesList.value)}
				fieldsSetup={employeesTableSetup}
				defaultSortingField='startDateString'
				defaultSortingOrder='asc'
				paginationOptions={['3', '5', '10', '20']}
				defaultPaginationOption={'10'}
			/>
		</div>
	)
}
