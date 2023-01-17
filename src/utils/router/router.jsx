import "../../styles/pages/root.css"

import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import EmployeesListPage from '../../components/pages/employeesListPage'
import ErrorPage from '../../components/pages/errorPage'
import NewEmployeePage from '../../components/pages/newEmployeePage'
import Root from '../../components/pages/root'

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
