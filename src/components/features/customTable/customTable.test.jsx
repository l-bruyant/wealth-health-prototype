/* eslint-disable no-undef */

import { render } from '@testing-library/react'
import React from 'react'

import CustomTable from './CustomTable'

describe('CustomTable', () => {
	it('should display the data', () => {
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
