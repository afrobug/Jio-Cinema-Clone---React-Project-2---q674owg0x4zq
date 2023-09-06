import { configureStore } from '@reduxjs/toolkit'
import busReducer from "./BusSlice"

export const store = configureStore({
  reducer: {
    bus: busReducer,
  },
})