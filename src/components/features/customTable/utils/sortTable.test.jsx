/* eslint-disable no-undef */
import sortTable from './sortTable'

describe('sortTable', () => {
	it('sorts the table by ascending order of a specific field value', () => {
		const dataTable = [
			{ name: 'Jane', age: '24' },
			{ name: 'John', age: '32' },
			{ name: 'Bob', age: '28' }
		]
		const sortedTable = sortTable(dataTable, 'asc', 'name')
		expect(sortedTable).toEqual([
			{ name: 'Bob', age: '28' },
			{ name: 'Jane', age: '24' },
			{ name: 'John', age: '32' }
		])
	})
	it('sorts the table by descending order of a specific field value', () => {
		const dataTable = [
			{ name: 'Jane', age: '24' },
			{ name: 'John', age: '32' },
			{ name: 'Bob', age: '28' }
		]
		const sortedTable = sortTable(dataTable, 'desc', 'age')
		expect(sortedTable).toEqual([
			{ name: 'John', age: '32' },
			{ name: 'Bob', age: '28' },
			{ name: 'Jane', age: '24' }
		])
	})
})
