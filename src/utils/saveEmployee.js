export function saveEmployee(customState) {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const dateOfBirth = document.getElementById('date-of-birth');
    const startDate = document.getElementById('start-date');
    const department = document.querySelector('#department-dropdown-wrapper .is-selected').innerText;
    const street = document.getElementById('street');
    const city = document.getElementById('city');
    // const state = document.querySelector('#state-dropdown-wrapper .is-selected').innerText;
    const zipCode = document.getElementById('zip-code');

    // const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employee = {
        firstName: firstName.value,
        lastName: lastName.value,
        dateOfBirth: dateOfBirth.value,
        dateOfBirthString: Date.parse(dateOfBirth.value).toString(),
        startDate: startDate.value,
        startDateString: Date.parse(startDate.value).toString(),
        department: department,
        street: street.value,
        city: city.value,
        state: customState,
        zipCode: zipCode.value
    };

    console.log(Date.parse(dateOfBirth.value).toString())
    console.log(Date.parse(startDate.value).toString())

    return employee
}