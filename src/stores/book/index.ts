import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookState, initialStateType } from "../../models/book";

const bookList: BookState[] = [
  {
    id: "1",
    title: "Código limpo",
    author: "Robert C. Martin",
  },
  {
    id: "2",
    title: "O mítico homem-mês",
    author: "Frederick P. Brooks Jr.",
  },
  {
    id: "3",
    title: "Gog Magog",
    author: "Patrícia Melo",
  },
];

export const initialState: initialStateType = {
  bookList,
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addNewBook: (state, action: PayloadAction<BookState>) => {
      state.bookList.push(action.payload);
    },
    updateBook: (state, action: PayloadAction<BookState>) => {
      const {
        payload: { title, id, author },
      } = action;

      state.bookList = state.bookList.map((book) =>
        book.id === id ? { ...book, author, title } : book
      );
    },
    deleteBook: (state, action: PayloadAction<{ id: string }>) => {
      state.bookList = state.bookList.filter(
        (book) => book.id !== action.payload.id
      );
    },
    deleteAllBooks: (state) => {
      state.bookList = [];
    },
  },
});

export const { addNewBook, updateBook, deleteBook, deleteAllBooks } =
  bookSlice.actions;

export default bookSlice.reducer;
