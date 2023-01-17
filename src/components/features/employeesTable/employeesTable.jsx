/* eslint-disable react/jsx-key */
import 'react-dropdown/style.css';

import React, { useEffect, useMemo,useState } from 'react'
import { useSelector } from 'react-redux'

import ExternalDropDown from '../../libraries/externalDropdown';
import Pagination from './pagination/pagination'
import Search from './search/search'
import TableHeader from './tableHeader/tableHeader'

export default function EmployeesTable () {

    const [employees, setEmployees ] = useState([])
    const [totalItems, setTotalItems] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [search, setSearch] = useState("")
    const [sorting, setSorting] = useState ({ field: "startDateString", order: "asc", type: "date"})

    const firstItemIndexDisplayed = (currentPage - 1) * itemsPerPage
    const lastItemIndexDisplayed = (currentPage) * itemsPerPage

    const initialEmployeesList = useSelector(state => state.employeesList.value)

    function handlePaginationChange (e) {
        setItemsPerPage(e.value)
        setCurrentPage(1) 
    }

    const tableSetup = [
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
    }, [employees, currentPage, itemsPerPage, search, sorting])

    return (
        <>
            <div className="table-options-area">
                <div className='pagination-settings-container'>
                    Show
                    <ExternalDropDown onChange={handlePaginationChange} name='pagination-settings' id='pagination-settings' options={paginationOptions} value={defaultPaginationOption}/>
                    Results
                </div>
                <div className='search-container'>
                    <label htmlFor='search'>Search</label>
                    <Search 
                        onSearch={ (value) => {
                            setSearch(value)
                            setCurrentPage(1)
                    } }/>
                </div>
            </div>
            <table className="employees-table">
                <TableHeader 
                    headers={tableSetup} 
                    onSorting={ (field, order) => {
                        setSorting( {field, order} ) 
                        setCurrentPage(1) 
                    } } />
                <tbody>
                    {employeesData.map ( (employee, index) => (
                    <tr key={"row" + index}>
                        {tableSetup.map( (field) => (
                            <td key={employee[field.fieldDisplay] + index}> 
                                {employee[field.fieldDisplay]} 
                            </td>
                        ))}
                    </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <Pagination 
                    total={totalItems}
                    itemsPerPage = {itemsPerPage}
                    currentPage = {currentPage}
                    onPageChange = {page => setCurrentPage(page)}
                    firstItemIndex = {firstItemIndexDisplayed + 1}
                    lastItemIndex = {(firstItemIndexDisplayed) + (employeesData.length)}
                />
            </div>
        </>
    )
}
