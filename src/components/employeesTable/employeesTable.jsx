import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TableHeader from './tableHeader/tableHeader'

export default function EmployeesTable () {

    const [employees, setEmployees ] = useState([])
    const initialEmployeesList = useSelector(state => state.employeesList.value)

    const headers = [
        { name: "FIRST NAME", field: "firstName" },
        { name: "LAST NAME", field: "lastName" },
        { name: "START DATE", field: "startDate" },
        { name: "DEPARTMENT", field: "department" },
        { name: "DATE OF BIRTH", field: "dateOfBirth" },
        { name: "STREET", field: "street" },
        { name: "CITY", field: "city" },
        { name: "STATE", field: "state" },
        { name: "ZIPCODE", field: "zipCode" },
    ]

    useEffect( () => {
        setEmployees(initialEmployeesList)
        console.log(employees)
    })


    return (
        <table className="employees-table">
            <TableHeader headers={headers} />
            <div>Table content</div>
        </table>
    )
}
