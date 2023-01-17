import "../../styles/pages/employeesListPage.css"

import React from 'react'

import EmployeesTable from "../features/employeesTable/employeesTable"

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
