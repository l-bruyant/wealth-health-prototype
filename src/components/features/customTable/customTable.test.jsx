/* eslint-disable no-undef */

import { render } from '@testing-library/react'
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
		expect(container.querySelector('table')).toBeTruthy()
	})
})

describe('CustomTable', () => {
	it('should render data, fieldsSetup, paginationOptions and defaultPaginationOption', () => {
		const data = [
			{ name: 'John', age: '25' },
			{ name: 'Jane', age: '30' }
		]
		const fieldsSetup = [
			{ fieldName: 'NAME', fieldValue: 'name', fieldDisplay: 'name' },
			{ fieldName: 'AGE', fieldValue: 'age', fieldDisplay: 'age' }
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
		expect(getByText('NAME')).toBeTruthy()
		expect(getByText('AGE')).toBeTruthy()
		expect(getByText('John')).toBeTruthy()
		expect(getByText('Jane')).toBeTruthy()
		expect(getByText('25')).toBeTruthy()
		expect(getByText('30')).toBeTruthy()
		expect(getByText('5')).toBeTruthy()
		expect(getByText('Showing 1 to 2 of 2 entries')).toBeTruthy()
	})
})
