import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./Reducers/FormSlice"
export const store = configureStore({
    reducer : {
        formReducer : formReducer
    }
});