import "../../styles/pages/employeesListPage.css"

import React from 'react'
import { useSelector } from "react-redux"

import CustomTable from "../features/customTable/customTable"

/**
*
* Display the structure of the employees list page
*
* @function EmployeesListPage
*
*/

export default function EmployeesListPage () {

    const employeesTableSetup = [
        { fieldName: "FIRST NAME", fieldValue: "firstName", fieldDisplay: "firstName" },
        { fieldName: "LAST NAME", fieldValue: "lastName", fieldDisplay: "lastName"  },
        { fieldName: "START DATE", fieldValue: "startDateString", fieldDisplay: "startDate" },
        { fieldName: "DEPARTMENT", fieldValue: "department", fieldDisplay: "department" },
        { fieldName: "DATE OF BIRTH", fieldValue: "dateOfBirthString", fieldDisplay: "dateOfBirth" },
        { fieldName: "STREET", fieldValue: "street", fieldDisplay: "street" },
        { fieldName: "CITY", fieldValue: "city", fieldDisplay: "city" },
        { fieldName: "STATE", fieldValue: "state", fieldDisplay:  "state" },
        { fieldName: "ZIPCODE", fieldValue: "zipCode", fieldDisplay: "zipCode" },
    ]

    return (
        <div className='employees-list-page'>
                <CustomTable 
                    data={useSelector(state => state.employeesList.value)} 
                    fieldsSetup={employeesTableSetup}
                    defaultSortingField='startDateString'
                    defaultSortingOrder='asc'
                    paginationOptions={['3', '5', '10', '20']}
                    defaultPaginationOption={'10'}
                />
        </div>
    )
}
