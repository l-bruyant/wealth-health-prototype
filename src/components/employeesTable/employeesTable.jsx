/* eslint-disable react/jsx-key */
import React, { useEffect, useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import TableHeader from './tableHeader/tableHeader'
import Pagination from './pagination/pagination'

//dropdown
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function EmployeesTable () {

    const [employees, setEmployees ] = useState([])
    const [totalItems, setTotalItems] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [ITEMS_PER_PAGE, setITEMS_PER_PAGE] = useState(10)

    const firstItemIndexDisplayed = (currentPage - 1) * ITEMS_PER_PAGE
    const lastItemIndexDisplayed = (currentPage) * ITEMS_PER_PAGE

    const initialEmployeesList = useSelector(state => state.employeesList.value)

    function createEmployeeKey (employee) {
        const employeeKey = employee.firstName + employee.lastName + employee.dateOfBirth
        return employeeKey
    }

    function handlePaginationChange (e) {
        setITEMS_PER_PAGE(e.value)
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

    const paginationOptions = ['5', '10', '20']

    const defaultPaginationOption = paginationOptions[1]

    useEffect( () => {
        setEmployees(initialEmployeesList)
    })

    const employeesData = useMemo ( () => {
        let computedEmployeesData = employees
        setTotalItems(computedEmployeesData.length)
        let slicedData = computedEmployeesData.slice(
            firstItemIndexDisplayed,
            lastItemIndexDisplayed
        )
        console.log(ITEMS_PER_PAGE)
        console.log(currentPage)
        console.log(lastItemIndexDisplayed)
        return slicedData
    }, [employees, currentPage, ITEMS_PER_PAGE])

    return (
        <>
            <div className="table-options-area">
                <div className='pagination-settings-container'>
                    Show
                    <Dropdown onChange={handlePaginationChange} name='pagination-settings' id='pagination-settings' options={paginationOptions} value={defaultPaginationOption}/>
                    Results
                </div>
                <div className='search-container'>
                    <label htmlFor='search'>Search</label>
                    <input id="search" name="search" type="search" placeholder='search employee'/>
                </div>
            </div>
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
            <div>
                <Pagination 
                    total={totalItems}
                    itemsPerPage = {ITEMS_PER_PAGE}
                    currentPage = {currentPage}
                    onPageChange = {page => setCurrentPage(page)}
                    firstItemIndex = {firstItemIndexDisplayed + 1}
                    lastItemIndex = {(firstItemIndexDisplayed) + (employeesData.length)}
                />
            </div>
        </>
    )
}
