import React from 'react'
import EmployeesTable from '../employeesTable'
import "../../styles/employeesListPage.css"

/**
*
* Display the structure of the employees list page
*
* @function EmployeesListPage
*
*/

export default function EmployeesListPage () {
    return (
        <div className='employees-list-page'>
                <EmployeesTable/>
        </div>
    )
}
