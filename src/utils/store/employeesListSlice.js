import { createSlice } from '@reduxjs/toolkit'

// import MOCK_EMPLOYEES_LIST from '../static-data/MOCK_EMPLOYEES_LIST.json'

export const employeesListSlice = createSlice({
	name: 'employeeList',
	initialState: {
		value: []
	},
	reducers: {
		storeEmployee: (state, action) => {
			state.value.push(action.payload)
		}
	}
})

export const { storeEmployee } = employeesListSlice.actions

export default employeesListSlice.reducer
