import 'react-dropdown/style.css';

import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

import { createEmployee } from "../../../utils/api/createEmployee";
import { JOBS_LIST } from "../../../utils/static-data/JOBS_LIST";
import { USA_STATES_LIST } from "../../../utils/static-data/USA_STATES_LIST";
import { storeEmployee } from "../../../utils/store/employeesListSlice";
import ExternalDatePicker from '../../libraries/externalDatePicker';
import ExternalDropDown from '../../libraries/externalDropdown';
import ExternalModal from '../../libraries/externalModal';

/**
*
* Displays a registration form
*
* @function registerForm
*
*/


export default function RegisterForm () {

    const dispatch = useDispatch()
    const [employeeState, setEmployeeState] = useState('AL')
    const [modalIsOpen, setModalIsOpen] = React.useState(false)

    async function handleSubmit (e) {
        e.preventDefault()
        const newEmployee = createEmployee(employeeState)
        dispatch(storeEmployee(newEmployee))
        setModalIsOpen(true)
    }

    function closeModalRefresh() {
        setModalIsOpen(false);
        location.reload() 
    }

    return (
        <div className='register-form-wrapper'>

            <h2>Fill employee information to add them to the database</h2>

            <form id='newEmployeeForm' onSubmit={handleSubmit}>

                <div className='form-group'>
                    <h3 className='form-cat-title'>IDENTITY</h3>
                    <div className='form-questions-group'>
                        <div className='form-question'>
                            <label htmlFor='first-name'>FIRST NAME</label>
                            <input type='text' name='first-name' id='first-name' required/>
                        </div>
                        <div className='form-question'>
                            <label htmlFor='last-name'>LAST NAME</label>
                            <input type='text' name='last-name' id='last-name' required/>
                        </div>
                        <div className='form-question'>
                            <label htmlFor='start-date'>START DATE</label>
                            <ExternalDatePicker name='start-date' id='start-date' />
                        </div>
                        <div className='form-question'>
                            <label htmlFor='date-of-birth'>DATE OF BIRTH</label>
                            <ExternalDatePicker name='date-of-birth' id='date-of-birth' />
                        </div>
                    </div>
                </div>

                <div className='form-group'>
                    <h3 className='form-cat-title'>ADDRESS</h3>
                    <div className='form-questions-group'>
                        <div className='form-question'>
                            <label htmlFor='street'>STREET</label>
                            <input type='text' name='street' id='street' required/>
                        </div>
                        <div className='form-question'>
                            <label htmlFor='city'>CITY</label>
                            <input type='text' name='city' id='city' required/>
                        </div>
                        <div className='form-question' id='state-dropdown-wrapper'>
                            <label htmlFor='state'>STATE</label>
                            <ExternalDropDown name='state' id='state' onChange={(e) => setEmployeeState(e.value)} options={USA_STATES_LIST} />
                        </div>
                        <div className='form-question'>
                            <label htmlFor='zip-code'>ZIP CODE</label>
                            <input type='text' name='zip-code' id='zip-code' required/>
                        </div>
                    </div>
                </div>

                <div className='form-group'>
                    <h3 className='form-cat-title'>WORK DETAILS</h3>
                    <div className='form-questions-group'>
                        <div className='form-question wide-questions' id='department-dropdown-wrapper'>
                            <label htmlFor='department'>DEPARTMENT</label>
                            <ExternalDropDown name='department' id='department' options={JOBS_LIST} />
                        </div>
                    </div>
                </div>

                <button className='form-save-button'>Save</button>
                
            </form>

            <ExternalModal 
                modalIsOpen={modalIsOpen} 
                onClose={closeModalRefresh} 
                contentLabel="User registered" 
                modalContentHTML={
                    <div className="modal-content-wrapper">
                        <div className='modal-text'>Employee correctly registered 👏</div>
                        <div className='modal-text'>What do you want to do next?</div>
                        <div className="modal-buttons-wrapper">
                            <Link to={'/employees-list'} className="modal-button green-button">
                            See the employees list</Link>
                            <button onClick={closeModalRefresh} className="modal-button grey-button">Add an other new employee</button>
                        </div>
                    </div>
                }    
            >
            </ExternalModal>

        </div>
    )
}
