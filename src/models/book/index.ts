export type BookState = {
  id: string;
  title: string | undefined;
  author: string | undefined;
};

export type initialStateType = {
  bookList: BookState[];
};
