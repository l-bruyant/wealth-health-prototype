/* eslint-disable no-undef */
import { createEmployee } from './createEmployee'

describe('createEmployee', () => {
	beforeEach(() => {
		document.body.innerHTML = `
            <input id="first-name" value="John">
            <input id="last-name" value="Doe">
            <input id="date-of-birth" value="01/01/2000">
            <input id="start-date" value="01/01/2022">
            <input id="street" value="123 Main St">
            <input id="city" value="New York">
            <input id="zip-code" value="10001">
    `
	})

	it('creates an employee object with the correct data', () => {
		const employee = createEmployee('NY', 'Sales')
		expect(employee).toEqual({
			firstName: 'John',
			lastName: 'Doe',
			dateOfBirth: '01/01/2000',
			dateOfBirthString: '946681200000',
			startDate: '01/01/2022',
			startDateString: '1640991600000',
			department: 'Sales',
			street: '123 Main St',
			city: 'New York',
			state: 'NY',
			zipCode: '10001'
		})
	})
})
