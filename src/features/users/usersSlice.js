import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Wafa al omour' },
    { id: '1', name: 'isra al omour' },
    { id: '2', name: 'nour abdalaziz' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer