import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
    },
    reducers: {
        LOG_IN_OUT: (state) => {
            state.isLoggedIn = !state.isLoggedIn
        },
    }
})

export const { LOG_IN_OUT } = authSlice.actions;
export default authSlice.reducer;