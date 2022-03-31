export type TodoState = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type initialStateType = {
  todoList: TodoState[];
  todo: TodoState;
  status: string;
};
