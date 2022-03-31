import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { initialStateType } from "../../models/todo";
import { TodoService } from "../../services/todo";

export const initialState: initialStateType = {
  todoList: [],
  todo: {
    userId: 0,
    id: 0,
    title: "",
    completed: false,
  },
  status: "",
};

export const getTodos = createAsyncThunk("todo/getTodos", async () => {
  const response = await TodoService.get();
  return response?.data;
});

export const getTodoById = createAsyncThunk(
  "todo/getTodoById",
  async (id: number) => {
    const response = await TodoService.getById(id);
    return response?.data;
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => ({
      ...state,
      todoList: action.payload,
      status: "",
    }));
    builder.addCase(getTodos.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getTodos.rejected, (state) => ({
      ...state,
      status: "rejected",
      todoList: [],
    }));
    builder.addCase(getTodoById.fulfilled, (state, action) => ({
      ...state,
      todo: action.payload,
      status: "",
    }));
    builder.addCase(getTodoById.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getTodoById.rejected, (state) => ({
      ...state,
      status: "rejected",
      todo: initialState.todo,
    }));
  },
});

export default todoSlice.reducer;
