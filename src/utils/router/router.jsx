import '../../styles/pages/root.css'

import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Root from '../../components/layout/root'
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
				errorElement: <ErrorPage />
			},
			{
				path: 'employees-list',
				element: <EmployeesListPage />,
				errorElement: <ErrorPage />
			},
			{
				path: 'new-employee',
				element: <NewEmployeePage />,
				errorElement: <ErrorPage />
			},
			{
				path: '*',
				element: <ErrorPage />,
				errorElement: <ErrorPage />
			}
		]
	}
])

// import { createBrowserRouter } from 'react-router-dom';
// import { render, cleanup } from '@testing-library/react';
// import { router } from './router';
// import { EmployeesListPage, ErrorPage, NewEmployeePage } from '../../components/pages';

// describe('Router', () => {
//     afterEach(cleanup);

//     it('should render the EmployeesListPage component for the "/" route', () => {
//         const { getByTestId } = render(
//             <router.Provider value={{ pathname: '/' }}>
//                 <router.Router />
//             </router.Provider>
//         );
//         expect(getByTestId('employees-list-page')).toBeInTheDocument();
//     });

//     it('should render the EmployeesListPage component for the "/employees-list" route', () => {
//         const { getByTestId } = render(
//             <router.Provider value={{ pathname: '/employees-list' }}>
//                 <router.Router />
//             </router.Provider>
//         );
//         expect(getByTestId('employees-list-page')).toBeInTheDocument();
//     });

//     it('should render the NewEmployeePage component for the "/new-employee" route', () => {
//         const { getByTestId } = render(
//             <router.Provider value={{ pathname: '/new-employee' }}>
//                 <router.Router />
//             </router.Provider>
//         );
//         expect(getByTestId('new-employee-page')).toBeInTheDocument();
//     });

//     it('should render the ErrorPage component for any unknown routes', () => {
//         const { getByTestId } = render(
//             <router.Provider value={{ pathname: '/unknown-route' }}>
//                 <router.Router />
//             </router.Provider>
//         );
//         expect(getByTestId('error-page')).toBeInTheDocument();
//     });
// });

// It is assuming that the components imported have a prop data-testid to locate the components in the DOM.
