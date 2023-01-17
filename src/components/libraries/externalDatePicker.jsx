/* eslint-disable react/prop-types */
import "react-datepicker/dist/react-datepicker.css";
import"../../styles/react-libraries/react-datepicker.css"

import React, { useState } from 'react'
import DatePicker from "react-datepicker";


export default function ExternalDatePicker ({name, id}) {

    const [date, setDate] = useState(new Date())

    return (
        <DatePicker 
            name={name}
            id={id}
            selected={date} 
            onChange={(date = Date) => setDate(date)} 
        />
    )
}
