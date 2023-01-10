import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Root from '../../pages/root'
import NewEmployeePage from '../../pages/newEmployeePage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
        //     {
        //         index: true,
        //         element: <LandingPage />,
        //     },
        //     {
        //         path: 'employees-list',
        //         element: <ListPage />,
        //     },
            {
                path: 'new-employee',
                element: <NewEmployeePage />,
            }
        ]
    },
])
