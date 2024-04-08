import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../Features/Todo/todoSlice";

export const Store = configureStore({
  reducer: todoReducers,
});
