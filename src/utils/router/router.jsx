import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from '../../components/pages/root'
import NewEmployeePage from '../../components/pages/newEmployeePage'
import EmployeesListPage from '../../components/pages/employeesListPage'
import "../../styles/root.css"
import "../../styles/externalComponents.css"
import ErrorPage from '../../components/pages/errorPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <EmployeesListPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: 'employees-list',
                element: <EmployeesListPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: 'new-employee',
                element: <NewEmployeePage />,
                errorElement: <ErrorPage />,
            }
        ]
    },
])
