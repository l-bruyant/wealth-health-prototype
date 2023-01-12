/* eslint-disable react/jsx-key */
import React, { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TableHeader from './tableHeader/tableHeader'

export default function EmployeesTable () {

    const [employees, setEmployees ] = useState([])
    const initialEmployeesList = useSelector(state => state.employeesList.value)

    function createEmployeeKey (employee) {
        const employeeKey = employee.firstName + employee.lastName + employee.dateOfBirth
        return employeeKey
    }

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

    const employeesData = useMemo ( () => {
        let computedEmployeesData = employees
        console.log(computedEmployeesData)
        return computedEmployeesData
    }, [employees])

    return (
        <table className="employees-table">
            <TableHeader headers={headers} />
            <tbody>
                {employeesData.map ( employee => (<tr key={createEmployeeKey(employee)}>
                    <td> {employee.firstName} </td>
                    <td> {employee.lastName} </td>
                    <td> {employee.startDate} </td>
                    <td> {employee.department} </td>
                    <td> {employee.dateOfBirth} </td>
                    <td> {employee.street} </td>
                    <td> {employee.city} </td>
                    <td> {employee.state} </td>
                    <td> {employee.zipCode} </td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}
