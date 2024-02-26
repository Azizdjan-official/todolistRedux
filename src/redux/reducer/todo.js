import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    task: [],
}
const todoReducer = createSlice({
    name: "todo",
    initialState,
    reducers:{
        add: (state,action) => {
            return {...state,task:[...state.task, action.payload]}
        },
        deleteTask: (state,action)=> {
            return{...state, task: state.task.filter((obj)=> obj.id !== action.payload.id)}
        },
        editTask:(state,action)=>{
            return{...state,task:state.task.map((item)=> item.id === action.payload.id ? action.payload : item)}
        }
    }
});

export default todoReducer.reducer;
export const { add, deleteTask, editTask} = todoReducer.actions;

// todoReducer.actions.add()