import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../Reducers/FormSlice.js";
export const store = configureStore({
    reducer : {
        formReducer : formReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});