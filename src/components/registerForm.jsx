import React, { useState } from "react";
import { states } from "../utils/data/statesList";
import { jobs } from "../utils/data/jobsList";
import { useNavigate } from 'react-router-dom'


//datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//dropdown
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

//modal
import Modal from 'react-modal';

import { saveEmployee } from "../utils/saveEmployee";

import { useDispatch } from 'react-redux'
import { addEmployee } from "../utils/store/employeesListSlice";


/**
*
* Displays a registration form
*
* @function registerForm
*
*/

Modal.setAppElement('#root');
const customModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export default function RegisterForm () {

    // For custom date picker
    const [startStartDate, setStartStartDate] = useState(new Date());
    const [birthStart, setBirthStartDate] = useState(new Date());

    // For custom select
    const stateOptions = states
    const defaultStateOption = stateOptions[0];
    const jobOptions = jobs
    const defaultjobOption = jobOptions[0];
    const [employeeState, setEmployeeState] = useState('AL')

    function handleStateChange (e) {
        setEmployeeState(e.value)
    }

    const dispatch = useDispatch()

    // For Modal 
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate()

    function goToEmployeesList() {
        navigate('/employees-list') 
    }

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        location.reload() 
    }
    
    // For form submission
    const handleSubmit = async e => {
        e.preventDefault()
        console.log(employeeState)
        const newEmployee = saveEmployee(employeeState)
        dispatch(addEmployee(newEmployee))
        openModal()
    }

    return (
        <div className='register-form-wrapper'>
            <h2>
                Fill employee information to add them to the database
            </h2>
            <form id='newEmployeeForm' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <h3 className='form-cat-title'>
                        IDENTITY
                    </h3>
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
                            <DatePicker name='start-date' id='start-date' selected={startStartDate} onChange={(date = Date) => setStartStartDate(date)} />
                        </div>
                        <div className='form-question'>
                            <label htmlFor='date-of-birth'>DATE OF BIRTH</label>
                            <DatePicker name='date-of-birth' id='date-of-birth' selected={birthStart} onChange={(date = Date) => setBirthStartDate(date)} />
                        </div>
                    </div>
                    
                </div>
                <div className='form-group'>
                    <h3 className='form-cat-title'>
                        ADDRESS
                    </h3>
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
                            <Dropdown name='state' id='state' required onChange={handleStateChange} options={stateOptions} value={defaultStateOption} placeholder="Select option" />
                        </div>
                        <div className='form-question'>
                            <label htmlFor='zip-code'>ZIP CODE</label>
                            <input type='text' name='zip-code' id='zip-code' required/>
                        </div>
                    </div>
                    
                </div>
                <div className='form-group'>
                    <h3 className='form-cat-title'>
                        WORK DETAILS
                    </h3>
                    <div className='form-questions-group'>
                        <div className='form-question wide-questions' id='department-dropdown-wrapper'>
                            <label htmlFor='department'>DEPARTMENT</label>
                            <Dropdown name='department' id='department' required options={jobOptions} value={defaultjobOption} placeholder="Select option" />
                        </div>
                    </div>
                    
                </div>
                <button className='form-save-button'>Save</button>
            </form>
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customModalStyles} contentLabel="User registered" >
                <div className="modal-content-wrapper">
                    <div className='modal-text'>Employee correctly registered 👏</div>
                    <div className='modal-text'>What do you want to do next?</div>
                    <div className="modal-buttons-wrapper">
                        <button onClick={goToEmployeesList} className="modal-button green-button">See the employees list</button>
                        <button onClick={closeModal} className="modal-button grey-button">Add an other new employee</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}
