import { createSlice } from '@reduxjs/toolkit'
import mockedEmployees from '../data/mockEmployees.json'

export const employeesListSlice = createSlice({
    name: 'employeeList',
    initialState: {
        value: mockedEmployees
    },
    reducers: {
        addEmployee: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { addEmployee } = employeesListSlice.actions

export default employeesListSlice.reducer