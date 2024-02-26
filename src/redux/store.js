// import { createStore } from "@reduxjs/toolkit";
// import { counterReducer } from "./reducer/counter";
// export const store = createStore(counterReducer);

import { configureStore } from "@reduxjs/toolkit";
import counter from "./reducer/counter";
import todo from "./reducer/todo";

export const store = configureStore({
    reducer:{
        counter,
        todo,
    },

})
