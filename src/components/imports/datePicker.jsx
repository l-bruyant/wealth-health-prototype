/* eslint-disable react/prop-types */
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export const ImportedDateKeeper = (props) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker name={props.name} id={props.id} selected={startDate} onChange={(date = Date) => setStartDate(date)} />
    );
};