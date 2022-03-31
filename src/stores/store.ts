import { configureStore } from "@reduxjs/toolkit";
import { initialStateType as bookInitialStateType } from "../models/book";
import { initialStateType as todoInitialStateType } from "../models/todo";
import { bookSlice, initialState as bookInitialState } from "./book";
import { todoSlice, initialState as todoInitialState } from "./todo";

export const store = configureStore({
  reducer: {
    book: bookSlice.reducer,
    todo: todoSlice.reducer,
  },
});

export interface ApplicationState {
  book: bookInitialStateType;
  todo: todoInitialStateType;
}

export const initialStateApplication: ApplicationState = {
  book: bookInitialState,
  todo: todoInitialState,
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
