import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import CustomTable from './CustomTable'

describe('CustomTable', () => {
	const data = [
		{ firstName: 'Jane', lastName: 'Doe', age: 24 },
		{ firstName: 'John', lastName: 'Smith', age: 32 },
		{ firstName: 'Bob', lastName: 'Johnson', age: 28 }
	]
	const fieldsSetup = [
		{ fieldName: 'FIRST NAME', fieldValue: 'firstName', fieldDisplay: 'firstName' },
		{ fieldName: 'LAST NAME', fieldValue: 'lastName', fieldDisplay: 'lastName' },
		{ fieldName: 'AGE', fieldValue: 'age', fieldDisplay: 'age' }
	]
	it('renders the table correctly', () => {
		const { container } = render(
			<CustomTable
				data={data}
				fieldsSetup={fieldsSetup}
				defaultSortingField='firstName'
				defaultSortingOrder='asc'
				paginationOptions={['2']}
				defaultPaginationOption={'2'}
			/>
		)
		// check if the table rendered correctly
		expect(container.querySelector('table')).toBeTruthy()
	})
})

describe('CustomTable', () => {
	it('should render data, fieldsSetup, paginationOptions and defaultPaginationOption', () => {
		const data = [
			{ name: 'John', age: 25 },
			{ name: 'Jane', age: 30 }
		]
		const fieldsSetup = [
			{ fieldName: 'Name', fieldValue: 'name', fieldDisplay: 'name' },
			{ fieldName: 'Age', fieldValue: 'age', fieldDisplay: 'age' }
		]
		const paginationOptions = ['2', '5', '10']
		const defaultPaginationOption = '5'
		const { getByText } = render(
			<CustomTable
				data={data}
				fieldsSetup={fieldsSetup}
				paginationOptions={paginationOptions}
				defaultPaginationOption={defaultPaginationOption}
			/>
		)

		expect(getByText('John')).toBeInTheDocument()
		expect(getByText('Jane')).toBeInTheDocument()
		expect(getByText('2')).toBeInTheDocument()
		expect(getByText('5')).toBeInTheDocument()
		expect(getByText('10')).toBeInTheDocument()
	})
})
