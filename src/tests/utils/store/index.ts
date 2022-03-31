import { configureStore } from "@reduxjs/toolkit";
import { bookSlice } from "../../../stores/book";
import { todoSlice } from "../../../stores/todo";

export const mockStore = () => {
  return configureStore({
    reducer: {
      book: bookSlice.reducer,
      todo: todoSlice.reducer,
    },
    preloadedState: {},
  });
};
