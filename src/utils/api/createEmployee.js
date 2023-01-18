/**
 *
 * @function createEmployee
 *
 * @param customState data about the employee state (california, arizona...)
 * can't be collected via the DOM as we want the shorter version (CA, AZ...)
 * so it is passed as a parameter
 *
 * @returns an object with all informations from the employee
 *
 */

export function createEmployee(customState, customDepartment) {
	const firstName = document.getElementById('first-name')
	const lastName = document.getElementById('last-name')
	const dateOfBirth = document.getElementById('date-of-birth')
	const startDate = document.getElementById('start-date')
	const street = document.getElementById('street')
	const city = document.getElementById('city')
	const zipCode = document.getElementById('zip-code')

	const employee = {
		firstName: firstName.value,
		lastName: lastName.value,
		dateOfBirth: dateOfBirth.value,
		dateOfBirthString: Date.parse(dateOfBirth.value).toString(),
		startDate: startDate.value,
		startDateString: Date.parse(startDate.value).toString(),
		department: customDepartment,
		street: street.value,
		city: city.value,
		state: customState,
		zipCode: zipCode.value
	}

	return employee
}
