/* eslint-disable no-undef */
import sortTable from './sortTable'

describe('sortTable', () => {
	it('sorts the table in ascending order by default', () => {
		const table = [
			{ name: 'Jane', age: 24 },
			{ name: 'John', age: 32 },
			{ name: 'Bob', age: 28 }
		]
		const sortedTable = sortTable(table, 'name')
		expect(sortedTable).toEqual([
			{ name: 'Bob', age: 28 },
			{ name: 'Jane', age: 24 },
			{ name: 'John', age: 32 }
		])
	})

	it('sorts the table in descending order if provided', () => {
		const table = [
			{ name: 'Jane', age: 24 },
			{ name: 'John', age: 32 },
			{ name: 'Bob', age: 28 }
		]
		const sortedTable = sortTable(table, 'desc', 'name')
		expect(sortedTable).toEqual([
			{ name: 'John', age: 32 },
			{ name: 'Jane', age: 24 },
			{ name: 'Bob', age: 28 }
		])
	})

	it('sorts the table by the provided field', () => {
		const table = [
			{ name: 'Jane', age: 24 },
			{ name: 'John', age: 32 },
			{ name: 'Bob', age: 28 }
		]
		const sortedTable = sortTable(table, 'asc', 'age')
		expect(sortedTable).toEqual([
			{ name: 'Jane', age: 24 },
			{ name: 'Bob', age: 28 },
			{ name: 'John', age: 32 }
		])
	})
})
