import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from '../../components/pages/root'
import NewEmployeePage from '../../components/pages/newEmployeePage'
import EmployeesListPage from '../../components/pages/employeesListPage'
import "../../styles/root.css"

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <EmployeesListPage />,
            },
            {
                path: 'employees-list',
                element: <EmployeesListPage />,
            },
            {
                path: 'new-employee',
                element: <NewEmployeePage />,
            }
        ]
    },
])
