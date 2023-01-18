/* eslint-disable no-undef */
import searchTable from './searchTable'

describe('searchTable', () => {
	test('returns the expected filtered data according to input', () => {
		const dataTable = [
			{ name: 'John', age: '25' },
			{ name: 'Jane', age: '30' },
			{ name: 'Bob', age: '35' }
		]
		const userInput = 'j'
		const expectedOutput = [
			{ name: 'John', age: '25' },
			{ name: 'Jane', age: '30' }
		]
		expect(searchTable(dataTable, userInput)).toEqual(expectedOutput)
	})
})
