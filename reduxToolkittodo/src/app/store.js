// frist humko store lana hai from  core reduxjs toolkit
import {configureStore} from '@reduxjs/toolkit';
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
    reducer:todoReducer
})      // take always object


//Note dispatch reducer ko use karke store ke under value ko change karta hai

