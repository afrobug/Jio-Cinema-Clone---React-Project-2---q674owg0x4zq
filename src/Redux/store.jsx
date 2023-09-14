import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import showReducer from "./movieSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    show: showReducer,
  },
});
