import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
       courses : [
                     {id: 1, desc: 'HTML',  note: '8/10', isDone: false},
                     {id: 2, desc: 'CSS',   note: '9/10', isDone: false},
                     {id: 3, desc: 'JS',    note: '7/10', isDone: false},
                     {id: 4, desc: 'REACT', note: '6/10', isDone: false}
                 ]
    },
    reducers: {
        ADD_TODO: (state, action) => {
            state.courses.push(action.payload)
        },
        DELETE_TODO: (state, action) => {
            state.courses.splice(action.payload, 1)
        },
        SEARCH_TODO: (state, action) => {
            state.courses.filter(cour => cour.id === action.payload.id)
        },
        EDIT_TODO: (state, action) => {
            state.courses.findIndex(c => c.id === action.payload.value);
        },
    }
});

export const { ADD_TODO, DELETE_TODO, SEARCH_TODO, EDIT_TODO } = todoSlice.actions
export default todoSlice.reducer;