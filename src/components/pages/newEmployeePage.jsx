import '../../styles/pages/newEmployeePage.css'

import React from 'react'

import illustration from '../../assets/img/business-woman.jpg'
import RegisterForm from '../features/registerForm/registerForm'

/**
 *
 * @function NewEmployeePage
 *
 * @returns the NewEmployeePage component
 *
 */

export default function NewEmployeePage() {
	return (
		<div className='new-employee-page'>
			<div className='new-employee-column form-column'>
				<RegisterForm />
			</div>
			<div className='new-employee-column'>
				<img
					src={illustration}
					className='new-employee-image'
					alt='Woman in business clothes'
				/>
			</div>
		</div>
	)
}
