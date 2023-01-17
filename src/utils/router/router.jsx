import "../../styles/pages/root.css"

import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Root from "../../components/layout/root"
import EmployeesListPage from '../../components/pages/employeesListPage'
import ErrorPage from '../../components/pages/errorPage'
import NewEmployeePage from '../../components/pages/newEmployeePage'

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
            },
            {
                path: "*",
                element: <ErrorPage />,
                errorElement: <ErrorPage />,
            }
        ]
    },
])
