/* eslint-disable no-undef */
import searchTable from './searchTable'

describe('searchTable', () => {
	test('returns the expected filtered data', () => {
		const table = [
			{ name: 'John', age: 25 },
			{ name: 'Jane', age: 30 },
			{ name: 'Bob', age: 35 }
		]
		const input = 'j'
		const expectedOutput = [
			{ name: 'John', age: 25 },
			{ name: 'Jane', age: 30 }
		]
		expect(searchTable(table, input)).toEqual(expectedOutput)
	})
})
