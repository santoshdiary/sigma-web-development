import {configureStore} from '@reduxjs/toolkit'
import todoReducer from "../features/todoSlice"
import reducer from '../features/todoSlice'

export const store=configureStore({
     reducer: todoReducer
})