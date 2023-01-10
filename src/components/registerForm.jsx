import React from 'react'
import { ImportedDateKeeper } from './imports/datePicker'

/**
*
* Displays a registration form
*
* @function registerForm
*
*/

export default function RegisterForm () {

    return (
        <div className='register-form-wrapper'>
            <h2>
                Fill employee information to add them to the database
            </h2>
            <form action="" method="post">
                <div className='form-group'>
                    <h3 className='form-cat-title'>
                        IDENTITY
                    </h3>
                    <div className='form-questions-group'>
                        <div className='form-question'>
                            <label htmlFor='firstName'>FIRST NAME</label>
                            <input type='text' name='firstName' id='firstName' required/>
                        </div>
                        <div className='form-question'>
                            <label htmlFor='lastName'>LAST NAME</label>
                            <input type='text' name='lastName' id='lastName' required/>
                        </div>
                        <div className='form-question'>
                            <label htmlFor='startDate'>START DATE</label>
                            <ImportedDateKeeper id='startDate' name='startDate'/>
                        </div>
                        <div className='form-question'>
                            <label htmlFor='birthDate'>DATE OF BIRTH</label>
                            <ImportedDateKeeper id='birthDate' name='birthDate'/>
                        </div>
                    </div>
                    
                </div>
                <div className='form-group'>
                    <h3 className='form-cat-title'>
                        ADDRESS
                    </h3>
                    <div className='form-questions-group'>
                        <div className='form-question'>
                            <label htmlFor='firstName'>STREET</label>
                            <input type='text' name='street' id='street' required/>
                        </div>
                        <div className='form-question'>
                            <label htmlFor='city'>CITY</label>
                            <input type='text' name='city' id='city' required/>
                        </div>
                        <div className='form-question'>
                            <label htmlFor='state'>STATE</label>
                            <select name='state' id='state' required>
                                <option value="State 1">State 1</option>
                                <option value="State 2">State 2</option>
                            </select>
                        </div>
                        <div className='form-question'>
                            <label htmlFor='zip'>ZIP CODE</label>
                            <input type='text' name='zip' id='zip' required/>
                        </div>
                    </div>
                    
                </div>
                <div className='form-group'>
                    <h3 className='form-cat-title'>
                        WORK DETAILS
                    </h3>
                    <div className='form-questions-group'>
                        <div className='form-question wide-questions'>
                            <label htmlFor='department'>DEPARTMENT</label>
                            <select name='department' id='department' required>
                                <option value="Department 1">Department 1</option>
                                <option value="Department 2">Department 2</option>
                            </select>
                        </div>
                    </div>
                    
                </div>
                <button className='form-save-button'>Save</button>
            </form>
        </div>
    )
}
