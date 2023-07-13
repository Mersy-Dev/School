import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'
import studReducer from '../features/student/studSlice'




export const store = configureStore({
    reducer: {
        auth: authReducer,
        student: studReducer,
    },
})