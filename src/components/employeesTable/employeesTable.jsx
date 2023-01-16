/* eslint-disable react/jsx-key */
import React, { useEffect, useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import TableHeader from './tableHeader/tableHeader'
import Pagination from './pagination/pagination'
import Search from './search/search'

//dropdown
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function EmployeesTable () {

    const [employees, setEmployees ] = useState([])
    const [totalItems, setTotalItems] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [ITEMS_PER_PAGE, setITEMS_PER_PAGE] = useState(10)
    const [search, setSearch] = useState("")
    const [sorting, setSorting] = useState ({ field: "startDateString", order: "asc", type: "date"})

    const firstItemIndexDisplayed = (currentPage - 1) * ITEMS_PER_PAGE
    const lastItemIndexDisplayed = (currentPage) * ITEMS_PER_PAGE

    const initialEmployeesList = useSelector(state => state.employeesList.value)

    function createEmployeeKey (employee) {
        const employeeKey = employee.firstName + employee.lastName + employee.dateOfBirth + Math.round(Math.random() * (99000 - 10000) + 10000)
        return employeeKey
    }

    function handlePaginationChange (e) {
        setITEMS_PER_PAGE(e.value)
        setCurrentPage(1) 
    }

    const headers = [
        { name: "FIRST NAME", field: "firstName", sortable: true },
        { name: "LAST NAME", field: "lastName", sortable: true },
        { name: "START DATE", field: "startDateString", sortable: true },
        { name: "DEPARTMENT", field: "department", sortable: true },
        { name: "DATE OF BIRTH", field: "dateOfBirthString", sortable: true },
        { name: "STREET", field: "street", sortable: true },
        { name: "CITY", field: "city", sortable: true },
        { name: "STATE", field: "state", sortable: true },
        { name: "ZIPCODE", field: "zipCode", sortable: true },
    ]

    const paginationOptions = ['2', '5', '10', '20']

    const defaultPaginationOption = paginationOptions[2]

    useEffect( () => {
        setEmployees(initialEmployeesList)
    }, [])

    const employeesData = useMemo ( () => {

        let computedEmployeesData = Object.assign([], employees)

        if(search){
            computedEmployeesData = computedEmployeesData.filter(
                employee =>
                    Object.keys(employee).some(
                            key => employee[key].toLowerCase().includes(search.toLowerCase())
                        )
            )
        }

        // sorting employees 
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1
            computedEmployeesData = computedEmployeesData.sort(
                (a,b) => 
                    reversed * a[sorting.field].localeCompare(b[sorting.field])) 
        }

        setTotalItems(computedEmployeesData.length)

        // current page slice
        let slicedData = computedEmployeesData.slice(
            firstItemIndexDisplayed,
            lastItemIndexDisplayed
        )

        
        return slicedData  
    }, [employees, currentPage, ITEMS_PER_PAGE, search, sorting])

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
                    <Search onSearch={ (value) => {
                        setSearch(value)
                        setCurrentPage(1)
                    } }/>
                </div>
            </div>
            <table className="employees-table">
                <TableHeader 
                    headers={headers} 
                    onSorting={ (field, order) => {
                        setSorting( {field, order} ) 
                        setCurrentPage(1) 
                    } } />
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
