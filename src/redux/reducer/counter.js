// const initialState = {
//     count : 0,
// };
// export const counterReducer = (state = initialState,action) =>{
//     switch (action.type) {
//         case "INCREMENT":
//             return {...state,count: state.count +1}
//         case "DECREMENT":
//             return {...state,count: state.count -1}
//         default:
//             return state;
//     }
// };
const initialState = {
    count : 0,

};

import { createSlice } from "@reduxjs/toolkit";

const counterReducer = createSlice({
    name : "counter",
    initialState,
    reducers : {
        increment : (state,action)=> {
            return {...state,count:state.count + 1}
        },
        decrement : (state,action)=> {
            return {...state,count:state.count - 1}
        },
    },
});

export default counterReducer.reducer;

export const {decrement,increment} = counterReducer.actions;