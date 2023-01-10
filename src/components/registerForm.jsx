import React, { useState } from "react";
import { states } from "../data/statesList";
import { jobs } from "../data/jobsList";

//datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//dropdown
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

/**
*
* Displays a registration form
*
* @function registerForm
*
*/

export default function RegisterForm () {

    // For custom date picker
    const [startStartDate, setStartStartDate] = useState(new Date());
    const [birthStart, setBirthStartDate] = useState(new Date());

    // For custom select
    const stateOptions = states
    const defaulStatetOption = stateOptions[0];

    const jobOptions = jobs
    const defauljobOption = jobOptions[0];

    return (
        <div className='register-form-wrapper'>
            <h2>
                Fill employee information to add them to the database
            </h2>
            <form action="" method="post" id='newEmployeeForm'>
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
                            <DatePicker name='startDate' id='startDate' selected={startStartDate} onChange={(date = Date) => setStartStartDate(date)} />
                        </div>
                        <div className='form-question'>
                            <label htmlFor='birthDate'>DATE OF BIRTH</label>
                            <DatePicker name='birthDate' id='birthDate' selected={birthStart} onChange={(date = Date) => setBirthStartDate(date)} />
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
                        <div className='form-question'>
                            <label htmlFor='state'>STATE</label>
                            <Dropdown name='state' id='state' required options={stateOptions} value={defaulStatetOption} placeholder="Select option" />
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
                            <Dropdown name='department' id='department' required options={jobOptions} value={defauljobOption} placeholder="Select option" />
                        </div>
                    </div>
                    
                </div>
                <button className='form-save-button'>Save</button>
            </form>
        </div>
    )
}
