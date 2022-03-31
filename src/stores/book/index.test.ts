import { store } from "../store";
import { addNewBook, deleteAllBooks, deleteBook, updateBook } from ".";

describe("Reducers", () => {
  test("Should update a books author and title", () => {
    const oldBook = {
      id: "2",
      title: "O mítico homem-mês",
      author: "Frederick P. Brooks Jr.",
    };
    const updatedBook = { id: "2", title: "New title", author: "Teste" };

    let state = store.getState().book;
    expect(state.bookList.find((book) => book.id === "2")).toEqual(oldBook);

    store.dispatch(updateBook(updatedBook));
    state = store.getState().book;
    expect(state.bookList.find((book) => book.id === "2")).toEqual(updatedBook);
  });

  test("Should delete a book from list with id", () => {
    let state = store.getState().book;
    const countBooks = state.bookList.length;

    store.dispatch(deleteBook({ id: "2" }));
    state = store.getState().book;
    expect(state.bookList.length).toBeLessThan(countBooks);
    expect(state.bookList.find((book) => book.id === "2")).toBeUndefined();
  });

  test("Should add a new book", () => {
    let state = store.getState().book;
    const countBooks = state.bookList.length;

    const newBook = {
      id: "4",
      title: "O mítico homem-mês",
      author: "Frederick P. Brooks Jr.",
    };
    store.dispatch(addNewBook(newBook));
    state = store.getState().book;

    expect(state.bookList.length).toBeGreaterThan(countBooks);
    expect(state.bookList.find((book) => book.id === "4")).toEqual(newBook);
  });

  test("Should delete all books", () => {
    let state = store.getState().book;
    expect(state.bookList.length).toBe(3);

    store.dispatch(deleteAllBooks());
    state = store.getState().book;
    expect(state.bookList.length).toBe(0);
  });
});
